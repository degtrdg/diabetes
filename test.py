import requests
import json

payload = {'dean': 3, 'dan': 0}
req = requests.post("http://localhost:105/hello",json =payload)
print(req.text)