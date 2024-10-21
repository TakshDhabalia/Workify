from supabase import create_client, Client
import os

url: str = "https://adnbsayvxzafroyaynhm.supabase.co" 
key: str = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFkbmJzYXl2eHphZnJveWF5bmhtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjc4NzIzMjIsImV4cCI6MjA0MzQ0ODMyMn0.rYnP9d8Z5m_Nuee_FI5Cy9QQj4IhucStYRYtnIOlK8k"  
supabase: Client = create_client(url, key)



# Fetch and download files from the storage bucket
def fetch_and_download_files_from_bucket(bucket_name, download_path):
    try:
        # List all files in the bucket
        files = supabase.storage.from_(bucket_name).list()
        # Print the names of the files
        for file in files:
            print(f"Found file: {file['name']}")  # Prints the file names
            
            # Download the file
            try:
                response = supabase.storage.from_(bucket_name).download(file['name'])
                
                # Create directory structure if needed
                file_download_path = os.path.join(download_path, file['name'])
                os.makedirs(os.path.dirname(file_download_path), exist_ok=True)

                # Write the bytes to the local system
                with open(file_download_path, 'wb') as f:
                    f.write(response)  # Save the file content directly as bytes
                
                print(f"Downloaded: {file['name'].split('/')[-1]}")  # Prints the name of the downloaded file
            except Exception as download_error:
                print(f"Error downloading {file['name']}: {download_error}")

        return files
    except Exception as e:
        print(f"Error fetching files: {e}")


def prepare_download_directory(bucket_name, download_path):
    """
    Prepares the download directory for files from the specified bucket.
    
    Args:
        bucket_name (str): The name of the bucket.
        download_path (str): The path where files should be downloaded.
    
    Returns:
        str: The path to the download directory.
    """
    # Create the download directory if it doesn't exist
    os.makedirs(download_path, exist_ok=True)
    return download_path

# Example usage
bucket_name = "Resume"  # Replace with your bucket name
download_path = "F:\\BDT_DOWNLOADS"  # Specify the path where files should be downloaded
download_dir = prepare_download_directory(bucket_name, download_path)
fetch_and_download_files_from_bucket(bucket_name, download_path)