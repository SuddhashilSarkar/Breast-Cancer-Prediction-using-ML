# Breast-Cancer-Prediction-using-ML

## Overview
This project leverages machine learning, specifically Support Vector Machines (SVM), to predict breast cancer outcomes using clinical data. By analyzing a dataset of breast cancer features, the model distinguishes between malignant and benign cases with high accuracy. This tool aims to enhance early detection, contributing to better diagnostic processes and patient outcomes.

## Features
- Predicts breast cancer as malignant or benign using clinical features.
- Uses a Support Vector Machine (SVM) with an RBF kernel for classification.
- High accuracy achieved through robust preprocessing and feature selection.
- Interactive web-based interface for user-friendly predictions.

## Live Demo
Access the live application: [brstcncrpred.pythonanywhere.com](http://brstcncrpred.pythonanywhere.com)

## Technologies and Tools
- **Frontend**: HTML, Tailwind CSS, JavaScript
- **Backend**: Flask
- **Languages**: Python
- **Libraries**: NumPy, Pandas, Scikit-learn, Matplotlib, Seaborn
- **Model Packaging**: Joblib (version 1.4.2)
- **Dataset**: Breast Cancer Wisconsin dataset (UCI Machine Learning Repository)

## File Structure
```
main
├── app
│   ├── static
│   │   ├── css
│   │   ├── js
│   ├── templates
│   ├── main.py
│   ├── svm_model.joblib
├── model
│   ├── cancer_prediction.ipynb
├── LICENSE
├── README.md
```

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/Breast-Cancer-Prediction-using-ML.git
   ```
2. Navigate to the project directory:
   ```bash
   cd Breast-Cancer-Prediction-using-ML
   ```
3. Install the required dependencies:
   ```bash
   pip install -r requirements.txt
   ```
4. Run the application:
   ```bash
   python app/main.py
   ```

## Usage
1. Open the hosted app or run it locally.
2. Input clinical data features, such as mean radius and mean texture.
3. Click "Predict" to get the classification result (malignant or benign).

## Dataset
The Breast Cancer Wisconsin dataset provides clinical features, including:
- Mean radius
- Mean texture
- Mean perimeter
- Mean area
- Mean smoothness

The dataset is sourced from the [UCI Machine Learning Repository](https://archive.ics.uci.edu/ml/datasets/Breast+Cancer+Wisconsin+(Diagnostic)).

## Evaluation Metrics
- **Accuracy**: Measures the proportion of correct predictions.
- **Precision**: Proportion of true positives among all positive predictions.
- **Recall**: Proportion of true positives among actual positives.
- **F1-Score**: Harmonic mean of precision and recall.
- **Confusion Matrix**: Summarizes prediction results.

## Authors
- Suddhashil Sarkar
- Sulagna Mandal
- Ishita Mondal

### Project Guide
- Partha Koley

## Acknowledgments
We are deeply grateful to our project guide, Partha Koley, for his invaluable guidance, and to our families, teachers, and friends for their support. Special thanks to the creators of the Breast Cancer Wisconsin dataset and the developers of the libraries used in this project.

## License
This project is licensed under the MIT License.

## Contact
For queries or contributions, contact:
- [Suddhashil Sarkar on LinkedIn](https://www.linkedin.com/in/suddhashil/)

