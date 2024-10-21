import time
from supabase import create_client, Client
from supabase_main import supabase
from supabase_fetch import *
def get_files_from_storage(bucket_name):
    # Fetch list of files in a specific bucket
    # Note the correct use of the storage client
    return supabase.storage.from_(bucket_name).list()

def watch_for_new_files(bucket_name, interval=5):
    known_files = set()

    while True:
        current_files = get_files_from_storage(bucket_name)
        current_file_names = {file['name'] for file in current_files}

        new_files = current_file_names - known_files
        if new_files:
            for file in new_files:
                print(f"New file detected: {file}")
                    
                # Trigger your process here (e.g., process the file)

        known_files = current_file_names
        time.sleep(interval)  # Wait for the next polling interval

# Start watching for new files in the bucket
watch_for_new_files("Resume")
