import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import "../styles/Deteksi.css";

function Deteksi() {
  const [isScanning, setIsScanning] = useState(false);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [predictionResult, setPredictionResult] = useState(null);
  const [isFrontCamera, setIsFrontCamera] = useState(true);
  const [isLoading, setIsLoading] = useState(false); // for loading state
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [file, setFile] = useState(null); // Menyimpan gambar yang diunggah
  const [kopiBaikCount, setKopiBaikCount] = useState(null); // Menyimpan hasil jumlah kopi baik
  const [kopiBurukCount, setKopiBurukCount] = useState(null); // Menyimpan hasil jumlah kopi buruk
  const [message, setMessage] = useState(""); // Menyimpan pesan hasil prediksi
  const [loading, setLoading] = useState(false);

  const startScan = () => {
    setIsScanning(true);
    openCamera();
  };
  // Fungsi untuk menangani perubahan file input
  const handleFileChange = (e) => {
    const uploadedFile = e.target.files[0];
    setFile(uploadedFile);
  };

  
  const stopScan = () => {
    setIsScanning(false);
    const stream = videoRef.current.srcObject;
    if (stream) {
      const tracks = stream.getTracks();
      tracks.forEach((track) => track.stop());
    }
  };
  

  const openCamera = async () => {
    try {
      const constraints = {
        video: {
          facingMode: isFrontCamera ? "user" : "environment",
        },
      };
      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      videoRef.current.srcObject = stream;
      videoRef.current.play();
    } catch (error) {
      console.error("Error accessing camera:", error);
      alert("Tidak dapat mengakses kamera.");
    }
  };

  const toggleCamera = () => {
    setIsFrontCamera((prevMode) => !prevMode);
    stopScan();
    setTimeout(startScan, 500);
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setUploadedImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const sendImageToBackend = async (imageBlob) => {
    setIsLoading(true); // Start loading
    const formData = new FormData();
    formData.append("file", imageBlob, "image.jpg");

    try {
      const response = await fetch("http://localhost:5000/predict", {
        method: "POST",
        body: formData,
      });
      const result = await response.json();
      setPredictionResult(`Prediksi: ${result.prediction}`);
    } catch (error) {
      console.error("Error predicting image:", error);
      alert("Gagal melakukan prediksi. Pastikan backend Flask berjalan.");
    } finally {
      setIsLoading(false); // End loading
    }
  };

  const handleWebcamPrediction = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
    canvas.toBlob((blob) => {
      if (blob) sendImageToBackend(blob);
    }, "image/jpeg");
  };

  const handleImagePrediction = () => {
    fetch(uploadedImage)
      .then((res) => res.blob())
      .then((blob) => sendImageToBackend(blob))
      .catch((error) => console.error("Error converting image:", error));
  };

  return (
    <motion.div className="deteksi-container" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <h2 className="title">Deteksi Uang Indonesia</h2>

      <motion.div className="webcam-section" initial={{ y: -50 }} animate={{ y: 0 }} transition={{ duration: 0.7 }}>
        <div className="webcam-container">
          <video ref={videoRef} autoPlay playsInline className="video-stream"></video>
          <canvas ref={canvasRef} style={{ display: "none" }} width={224} height={224}></canvas>
        </div>

        <motion.div className="scan-buttons" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
          {isScanning ? (
            <button className="action-btn stop-btn" onClick={stopScan}>
              Stop Scan
            </button>
          ) : (
            <button className="action-btn start-btn" onClick={startScan}>
              Mulai Scan
            </button>
          )}

          <button className="action-btn toggle-btn" onClick={toggleCamera}>
            Balik Kamera
          </button>

          <button className="action-btn predict-btn" onClick={handleWebcamPrediction} disabled={!isScanning || isLoading}>
            {isLoading ? "Memproses..." : "Prediksi dari Webcam"}
          </button>
        </motion.div>
      </motion.div>

      <motion.div className="upload-section" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8, duration: 0.7 }}>
        <h3>Atau Upload Gambar</h3>
        <input type="file" accept="image/*" onChange={handleImageUpload} />

        {uploadedImage && (
          <motion.div className="uploaded-image-container" initial={{ scale: 0.9 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 200 }}>
            <img src={uploadedImage} alt="Uploaded" className="uploaded-image" />
            <button onClick={handleImagePrediction} className="action-btn predict-btn" disabled={isLoading}>
              {isLoading ? "Memproses..." : "Prediksi dari Gambar"}
            </button>
          </motion.div>
        )}

        {predictionResult && (
          <motion.p className="result-text" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}>
            {predictionResult}
          </motion.p>
        )}
      </motion.div>
    </motion.div>
  );
}

export default Deteksi;
