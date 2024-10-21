import os
from redis_get import storage
from groq import Groq
import json
client = Groq(
    api_key=("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"),
)
mdg = "s"
chat_completion = client.chat.completions.create(
    messages=[
        {
            "role": "user",
            "content": str(storage) + "segregate and give separate entity lists for each part like experience , education as so on of this resume and any file I send you from now on in a json format. The json can contrain multiple lines of text . I just want to extract the key features from this resume in a json and no jargon shoudl be in it . Also from now on , dont write anythin in the main msg as I need to get your output directly in a json file so DO NOT TALK in the output , remove anything else exept the details",
        }
    ],
    model="llama3-8b-8192",
)
msg = chat_completion.choices[0].message.content
print(chat_completion.choices[0].message.content)
print("------------------------------------------------------------")
print(msg)
with open('Backend\main3.json', 'w') as json_file:
    json_file.write(msg)