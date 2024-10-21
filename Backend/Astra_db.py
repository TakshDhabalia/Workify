from astrapy import DataAPIClient

# Initialize the client
client = DataAPIClient("AstraCS:xNUtDTpEZXXcwKAtafmmBxFq:da13d95c636d148b434a529f301c56ecc591b73bcd9a406a32e1d3990cad8842")
db = client.get_database_by_api_endpoint(
  "https://addb0483-9e21-40b8-932c-9c368650c1b9-us-east-2.apps.astra.datastax.com"
)

print(f"Connected to Astra DB: {db.list_collection_names()}")