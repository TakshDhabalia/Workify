import re
import pdfplumber  # For PDF extraction
import spacy  # For NER
import json  # For saving data as JSON

# Load spaCy model
nlp = spacy.load("en_core_web_sm")

def extract_info_from_resume(file_path):
    # Extract text from PDF
    with pdfplumber.open(file_path) as pdf:
        text = ''
        for page in pdf.pages:
            text += page.extract_text()

    # Clean the text
    text = re.sub(r'\n+', ' ', text)  # Replace newlines with space

    # Process the text with spaCy
    doc = nlp(text)

    # Extract named entities (optional: for future use)
    entities = []
    for ent in doc.ents:
        entities.append({'text': ent.text, 'label': ent.label_})

    # Patterns for phone numbers and emails
    phone_pattern = r'\+?\d[\d -]{8,12}\d'
    email_pattern = r'[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}'

    # Extract phone numbers and emails
    phones = re.findall(phone_pattern, text)
    emails = re.findall(email_pattern, text)
    
    # Return extracted data
    return {
        'phones': phones,
        'emails': emails,
        'entities': entities,  # Optionally saving entities
        'text': text
    }

def save_resume_info_to_json(pdf_file, json_file):
    # Extract information from resume
    info = extract_info_from_resume(pdf_file)
    
    # Save extracted info to JSON file
    with open(json_file, 'w') as file:
        json.dump(info, file, indent=4)
    
    # Return the JSON data
    return info

def save_text_to_txt(pdf_file, txt_file):
    # Extract all text from the resume
    info = extract_info_from_resume(pdf_file)
    
    # Write the text to a txt file
    with open(txt_file, 'w') as file:
        file.write(info['text'])

    print(f"Text extracted and saved to {txt_file}")


save_text_to_txt('D:/Workify/Backend/Taksh_Dhabalia_Profile.pdf', 'D:/Workify/Backend/resume_text.txt')

