from groq_interface import get_groq_client, create_chat_completion
import redis
from redis_db import r 

# Initialize Redis client
def get_redis_client():
    return redis.Redis(
        host='redis-15379.c330.asia-south1-1.gce.redns.redis-cloud.com',
        port=15379,
        password='yujDDOvHYYi56GT8KZR1z8iUsQ3Wpba2'
    )

def make_cold_email(reciever_email, reciever_position, reciever_company):
    # Use Redis client in a with statement to ensure proper cleanup
    with get_redis_client() as r:
        client = get_groq_client()
        key = "user:3:profile"
        context = r.get(key)
        
        # Decode the Redis context and form the message content
        content = (f"Generate a cold mail for the following assets like receiver mail, receiver designation, "
                   f"and receiver company. Keep it short and sweet and refer to the key values given as context. "
                   f"you will get all the context about me in the context data I give you: {context} which has my name , education and everything you need for the mail to be sent  " 
                   f"Receiver company: {reciever_company}, Receiver position: {reciever_position}, "
                   f"Receiver email: {reciever_email}, Context: {context.decode('utf-8')}")
        
        # Create the chat completion request and get the response
        response = client.chat.completions.create(
            messages=[
                {
                    "role": "user",
                    "content": content
                }
            ],
            model="llama3-8b-8192",
        )
        
        # Extract the message content from the response
        cold_mail = response.choices[0].message.content
        
        return cold_mail , key

# Example usage
key , cold_email_output = make_cold_email("bro@gmail.com", "Head of IRIS", "IRIS")

# Print the cold mail output
print(cold_email_output)
r.set(key, cold_email_output)
print(f"Successfully posted cold email to Redis with key: {key}")
