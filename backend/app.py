from flask import Flask, request, jsonify  # Framework untuk API
from flask_cors import CORS  # Untuk mengizinkan permintaan lintas domain
from PIL import Image  # Untuk memproses gambar
import numpy as np  # Untuk manipulasi array
import tensorflow as tf  # TensorFlow Lite
import io  # Untuk menangani input gambar

# Inisialisasi aplikasi Flask
app = Flask(__name__)
CORS(app)  # Mengizinkan akses dari frontend React atau lainnya

# Memuat model TensorFlow Lite
interpreter = tf.lite.Interpreter(model_path="kopi_model_v2.tflite")
interpreter.allocate_tensors()

# Mendapatkan detail input dan output dari model
input_details = interpreter.get_input_details()
output_details = interpreter.get_output_details()

# Fungsi untuk memproses gambar dan melakukan prediksi
def predict_image(image):
    # Preprocessing gambar
    image = image.resize((150, 150))  # Menyesuaikan ukuran sesuai dengan model
    input_data = np.array(image).astype(np.float32) / 255.0  # Normalisasi nilai piksel
    input_data = np.expand_dims(input_data, axis=0)  # Menambahkan dimensi batch

    # Mengatur tensor input dan menjalankan model
    interpreter.set_tensor(input_details[0]['index'], input_data)
    interpreter.invoke()  # Menjalankan model

    # Mengambil hasil prediksi
    output_data = interpreter.get_tensor(output_details[0]['index'])[0]
    return output_data

# Endpoint untuk prediksi gambar
@app.route("/predict", methods=["POST"])
def predict():
    # Memastikan file diterima
    if 'file' not in request.files:
        return jsonify({"error": "No file uploaded"}), 400

    file = request.files['file']
    try:
        image = Image.open(io.BytesIO(file.read()))  # Membaca gambar dari input
        prediction = predict_image(image)  # Melakukan prediksi

        # Mengambil hasil prediksi
        label = "Kopi Buruk" if prediction > 0.5 else "Kopi Baik"  # Binary classification
        confidence = float(prediction) if label == "Kopi Buruk" else 1 - float(prediction)

        # Mengembalikan hasil dalam format JSON
        return jsonify({"prediction": label, "confidence": confidence})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

# Menjalankan server
if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)  # Jalankan di port 5000
