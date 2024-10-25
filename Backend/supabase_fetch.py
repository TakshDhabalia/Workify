import time
import os
from supabase import create_client, Client
from supabase_main import supabase
from supabase_fetch import *
from pathlib import Path

def get_files_from_storage(bucket_name):
    """Fetch the list of files in a specific bucket."""
    return supabase.storage.from_(bucket_name).list()

def download_file_from_bucket(bucket_name, file_name, download_path):
    """Downloads a specific file from the storage bucket."""
    try:
        # Download the file from the bucket
        response = supabase.storage.from_(bucket_name).download(file_name)

        # Create the full path for the file download
        file_download_path = os.path.join(download_path, file_name)
        os.makedirs(os.path.dirname(file_download_path), exist_ok=True)

        # Write the downloaded content to the local system
        with open(file_download_path, 'wb') as f:
            f.write(response)  # Save file content as bytes

        print(f"Downloaded: {file_name.split('/')[-1]}")
        return file_download_path
    except Exception as e:
        print(f"Error downloading {file_name}: {e}")
        return None

def watch_for_new_files(bucket_name, download_path, interval=5):
    """
    Continuously watch for new files in the specified bucket and download them.
    
    Args:
        bucket_name (str): The name of the storage bucket.
        download_path (str): The path where new files should be downloaded.
        interval (int): The polling interval (in seconds).
    """
    known_files = set()

    while True:
        current_files = get_files_from_storage(bucket_name)
        current_file_names = {file['name'] for file in current_files}

        new_files = current_file_names - known_files
        if new_files:
            for file in new_files:
                print(f"New file detected: {file}")
                # Download the new file
                download_file_from_bucket(bucket_name, file, download_path)

        known_files = current_file_names
        time.sleep(interval)  # Wait for the next polling interval

# Example usage:
bucket_name = "Resume"  # Replace with your bucket name
download_path = "F:\\BDT_DOWNLOADS"  # Specify the download path
watch_for_new_files(bucket_name, download_path)
import time
import os
from supabase import create_client, Client
from supabase_main import supabase
from supabase_fetch import *
from pathlib import Path

def get_files_from_storage(bucket_name):
    """Fetch the list of files in a specific bucket."""
    return supabase.storage.from_(bucket_name).list()

def download_file_from_bucket(bucket_name, file_name, download_path):
    """Downloads a specific file from the storage bucket."""
    try:
        # Download the file from the bucket
        response = supabase.storage.from_(bucket_name).download(file_name)

        # Create the full path for the file download
        file_download_path = os.path.join(download_path, file_name)
        os.makedirs(os.path.dirname(file_download_path), exist_ok=True)

        # Write the downloaded content to the local system
        with open(file_download_path, 'wb') as f:
            f.write(response)  # Save file content as bytes

        print(f"Downloaded: {file_name.split('/')[-1]}")
        return file_download_path
    except Exception as e:
        print(f"Error downloading {file_name}: {e}")
        return None

def watch_for_new_files(bucket_name, download_path, interval=5):
    """
    Continuously watch for new files in the specified bucket and download them.
    
    Args:
        bucket_name (str): The name of the storage bucket.
        download_path (str): The path where new files should be downloaded.
        interval (int): The polling interval (in seconds).
    """
    known_files = set()

    while True:
        current_files = get_files_from_storage(bucket_name)
        current_file_names = {file['name'] for file in current_files}

        new_files = current_file_names - known_files
        if new_files:
            for file in new_files:
                print(f"New file detected: {file}")
                # Download the new file
                download_file_from_bucket(bucket_name, file, download_path)
        
        known_files = current_file_names
        time.sleep(interval)  # Wait for the next polling interval

# Example usage:
bucket_name = "Resume"  # Replace with your bucket name
download_path = "F:\\BDT_DOWNLOADS"  # Specify the download path
watch_for_new_files(bucket_name, download_path)
