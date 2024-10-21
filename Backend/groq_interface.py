import os
from redis_get import storage
from groq import Groq

client = Groq(
    api_key=("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"),
)
mdg = "s"
chat_completion = client.chat.completions.create(
    messages=[
        {
            "role": "user",
            "content": storage,
        }
    ],
    model="llama3-8b-8192",
)

print(chat_completion.choices[0].message.content)