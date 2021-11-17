from flask import Flask, jsonify, request, send_from_directory
from flask_cors import CORS, cross_origin
import pickle
#from flask_restful import Api
import os 
port = int(os.environ.get('PORT', 5000)) 

app = Flask(__name__)
CORS(app, support_credentials=True)
#change the static_folder
#api = Api(app)

#api.add_resource(HelloApiHandler, '/flask/hello')

@app.route('/result', methods=['POST'])
@cross_origin(supports_credentials=True)
def return_data():
    # Get the data from the request
    #data = request.get_json()
    # Calculate the BMI
    #bmi = calculateBMI(data['height'], data['weight'])
    # Return the data
    #use BMI and output from pickle using input to return at risk or not

    # BMI Rules: If BMI > 30, override ML and return 1
    # otherwise the BMI doesn't really affect anything
    answers = extractData(request.data)
    
    with open('model.pkl', 'rb') as f:
        clf = pickle.load(f)
        prediction = clf.predict([answers[0:5]])
        prediction = prediction[0]
    bmi = calculateBMI(answers[5], answers[6])

    if bmi > 30:
        prediction = 1

    response = str(prediction)
    response.headers.add("Access-Control-Allow-Origin", "*")
    return response

def extractData(arr):
    arr = arr.decode()
    arr = arr.split(',')
    print(arr)
    for i in range(len(arr)):
        if arr[i] == "true":
            arr[i]= 1
        elif arr[i] == "false":
            arr[i] = 0
        else: arr[i]= int(arr[i])
        
    return arr

def calculateBMI(height, weight):
    return weight / (height * height) * 703

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=port)

