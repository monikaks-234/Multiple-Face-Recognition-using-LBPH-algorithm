# Multiple Face Recognizer using LBPH (Local Binary Patterns Histograms)

This project is a Flask-based web app and command-line utility for multiple face recognition using the LBPH algorithm with OpenCV. It allows you to capture face images, train an LBPH model, and recognize faces in real-time.

## Features

* Capture face images from webcam
* Train LBPH face recognizer on your dataset
* Recognize and identify faces in real-time
* Flask web interface for recognition and database view
* Class-based face registration

## Project Structure

```
Multiple_face_recognizer_lbph/
│
├── app.py                  # Flask web application
├── capture_faces.py        # Script to capture face images
├── recognize_faces.py      # Script to run real-time face recognition
├── train_model.py          # Script to train LBPH face recognizer
├── requirements.txt        # Python dependencies
├── dataset/                # Folder to store captured face images
└── trained_model.yml       # Saved trained model (generated after training)
```

## Setup Instructions

1. **Clone the repository**

   ```bash
   git clone <your-repo-url>
   cd Multiple_face_recognizer_lbph
   ```

2. **Create virtual environment (optional but recommended)**

   ```bash
   python -m venv venv
   source venv/bin/activate  # For Linux/Mac
   venv\Scripts\activate     # For Windows
   ```

3. **Install dependencies**

   ```bash
   pip install -r requirements.txt
   ```

4. **Capture Faces**

   ```bash
   python capture_faces.py
   ```

5. **Train the Model**

   ```bash
   python train_model.py
   ```

6. **Recognize Faces**

   ```bash
   python recognize_faces.py
   ```

7. **Run Flask App**

   ```bash
   python app.py
   ```

   Then open `http://127.0.0.1:5000/` in your browser.

## Requirements

* Python 3.7+
* OpenCV
* Flask
* SQLite3 (for storing user data if implemented)
* Webcam for real-time face capture/recognition

## Future Enhancements

* Add database integration for storing recognized faces
* Improve UI with Bootstrap
* Support multiple classes/courses (already partially implemented)
* Export attendance reports
