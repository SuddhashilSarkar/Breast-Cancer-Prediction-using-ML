from flask import Flask, render_template, request, jsonify
import joblib

app = Flask(__name__)


# Main Page Route
@app.route('/')
def main_page():
    return render_template('index.html')


# Predictor API Route
@app.route('/predictor', methods=['POST'])
def predictor():
    # Load the model
    model = joblib.load('svm_model.joblib')
    try:
        data = request.json

        # Extract mean_radius and mean_texture from the request data
        mean_radius = data.get('mean_radius')
        mean_texture = data.get('mean_texture')

        # Check if data is valid
        if mean_radius is None or mean_texture is None:
            return jsonify({'error': 'Invalid input'}), 400

        # Predict using the model
        prediction = model.predict([[mean_radius, mean_texture]])
        result = {
            'prediction':
            int(prediction[0]
                )  # Convert to integer for consistent JSON response
        }
        return jsonify(result)

    except Exception as e:
        # Handle any unexpected errors
        return jsonify({'error': str(e)}), 500


if __name__ == '__main__':
    app.run(debug=True, threaded=True)  # Enable threading for handling concurrent requests
