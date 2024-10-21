from redis_db import r
import json

# Function to read JSON data from a file and post to Redis
def post_json_file_to_redis(key, json_file_path):
    try:
        # Read the JSON data from the file
        with open(json_file_path, 'r') as json_file:
            json_data = json.load(json_file)
        
        # Convert Python dictionary (JSON object) to JSON string
        json_string = json.dumps(json_data)
        
        # Post the JSON string into Redis under the specified key
        r.set(key, json_string)
        print(f"Successfully posted JSON from file '{json_file_path}' to Redis with key: {key}")
    except Exception as e:
        print(f"Error posting JSON to Redis: {e}")

# Example usage
json_file_path = 'resume_info.json'
post_json_file_to_redis('user:3:profile', json_file_path)
