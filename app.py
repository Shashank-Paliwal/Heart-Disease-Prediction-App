from flask import Flask, request, jsonify
import numpy as np
import joblib

app = Flask(__name__)

# Load the trained model (replace 'heart_disease_model.pkl' with your actual model file)
model = joblib.load('heart_disease_model.pkl')

@app.route('/predict', methods=['POST'])
def predict():
    try:
        # Get the JSON data from the request
        data = request.get_json()

        # Extract the features from the data (ensure the keys match the frontend inputs)
        age = data['age']
        sex = data['sex']
        chest_pain_type = data['chestPainType']
        resting_blood_pressure = data['restingBloodPressure']
        cholesterol = data['cholesterol']
        max_heart_rate = data['maxHeartRate']
        exercise_angina = data['exerciseAngina']
        oldpeak = data['oldpeak']
        slope = data['slope']

        # Create an input array for the model
        input_data = np.array([[
            age, sex, chest_pain_type, resting_blood_pressure, cholesterol,
            max_heart_rate, exercise_angina, oldpeak, slope
        ]])

        # Make the prediction
        prediction = model.predict(input_data)[0]

        # Return the result
        result = 'High Risk' if prediction == 1 else 'Low Risk'
        return jsonify({'result': result})
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)