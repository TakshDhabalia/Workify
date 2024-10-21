from redis_db import r

# Function to read text data from a file and post to Redis
def post_txt_file_to_redis(key, txt_file_path):
    try:
        # Read the text data from the file
        with open(txt_file_path, 'r') as txt_file:
            text_data = txt_file.read()
        
        # Post the text string into Redis under the specified key
        r.set(key, text_data)
        print(f"Successfully posted text from file '{txt_file_path}' to Redis with key: {key}")
    except Exception as e:
        print(f"Error posting text to Redis: {e}")

# Example usage
txt_file_path = 'Backend/resume_text.txt'  # This should be your .txt file path
post_txt_file_to_redis('user:3:resume_text', txt_file_path)
