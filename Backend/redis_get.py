from redis_db import r 


key = "user:3:profile"
value = r.get(key)

# Check if the key exists and print the value
if value:
    print(f"Value for '{key}': {value.decode('utf-8')}")
    storage = value
else:
    print(f"No value found for '{key}'")
    storage = "null"

