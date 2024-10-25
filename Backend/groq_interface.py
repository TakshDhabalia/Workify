import os
import json
from redis_get import storage
from groq import Groq

def get_groq_client():
    """Initializes and returns the Groq client."""
    return Groq(
        api_key=("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"),
    )

def create_chat_completion(client, storage_data):
    """Creates a chat completion request to Groq with the specified message."""
    return client.chat.completions.create(
        messages=[
            {
                "role": "user",
                "content": f"{storage_data} segregate and give separate entity lists for each part like experience, education, etc., of this resume and any file I send you from now on in a JSON format. The JSON can contain multiple lines of text. I just want to extract the key features from this resume in a JSON and no jargon should be in it. Also from now on, don't write anything in the main message as I need to get your output directly in a JSON file, so DO NOT TALK in the output—remove anything else except the details. JUST GIVE ME THE JSON FILE WHICH YOU GIVE AND DONE GIVE ANYTHING ELSE , NOT EVEN can I help you with smth or like that . ALSO REMOVE ``` THESE THINGS I DONT WANT THE FOLLWOING  Here is the JSON output for the extracted information: .",
            }
        ],
        model="llama3-8b-8192",
    )

def get_message_content(chat_completion):
    """Extracts the message content from the chat completion."""
    return chat_completion.choices[0].message.content

def save_to_json_file(content, file_path):
    """Saves the provided content to a JSON file."""
    with open(file_path, 'w') as json_file:
        json_file.write(content)

def main():
    """Main function to execute the workflow."""
    client = get_groq_client()
    chat_completion = create_chat_completion(client, str(storage))
    msg = get_message_content(chat_completion)
    save_to_json_file(msg, 'Backend/main3.json')

if __name__ == "__main__":
    main()
