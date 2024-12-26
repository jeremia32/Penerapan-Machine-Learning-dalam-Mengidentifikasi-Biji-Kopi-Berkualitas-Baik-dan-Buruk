# React + Vite + CNN + Python
## Deteksi Kualitas Biji Kopi Arabika  
Selamat datang di proyek Deteksi Kualitas Biji Kopi Arabika! Proyek ini memanfaatkan pembelajaran mesin canggih dan teknologi web modern untuk mengidentifikasi kualitas biji kopi Arabika secara akurat, membedakan antara biji yang baik dan yang buruk.

![logo](https://github.com/user-attachments/assets/e41e617b-d226-4f20-8afa-0c52e9b62d17)

## Table of Contents
* Latar belakang 

* Kajian Pustaka

* Machine Learning Models

* Project Structure

* Installation and Setup

* Contributors

## Latar belakang
Kopi merupakan salah satu komoditas pertanian dengan nilai ekonomi tinggi dan memiliki peran penting dalam sektor perdagangan internasional. Kualitas biji kopi menjadi salah satu faktor utama yang mempengaruhi nilai jual dan penerimaan konsumen terhadap produk akhir. Biji kopi yang berkualitas baik umumnya diidentifikasi berdasarkan beberapa parameter, seperti warna, serta keberadaan cacat fisik. Oleh karena itu, proses klasifikasi biji kopi untuk menentukan kualitasnya menjadi langkah penting dalam rantai produksi.

## Kajian Pustaka
Proses klasifikasi biji kopi menjadi hal yang penting dalam menentukan kualitas kopi. Kualitas biji kopi Arabika dipengaruhi oleh berbagai faktor, baik dari aspek fisik biji maupun pengaruh lingkungan tempat tumbuhnya. Faktor utama yang mempengaruhi kualitas biji kopi adalah kondisi fisik biji, tingkat kematangan buah. Faktor-faktor ini tidak hanya mempengaruhi penampilan biji kopi, tetapi juga mempengaruhi cita rasa yang dihasilkan.

## Machine Learning Models 
## CNN (CONVOSIONAL NEURAL NETWORK )
![drrwtw](https://github.com/user-attachments/assets/69371f20-7c50-4945-ae22-83fe3c475616)
Convolutional Neural Network (CNN) adalah jenis khusus jaringan saraf tiruan yang sangat efektif untuk pengolahan data gambar. CNN dirancang untuk mengenali pola spasial dalam gambar, seperti tekstur, bentuk, dan struktur objek. Kemampuan ini sangat penting dalam pengklasifikasian gambar biji kopi, karena model dapat mendeteksi karakteristik visual yang membedakan biji kopi berkualitas baik dari yang tidak baik. 

## SVM (Support Vector Machine )
![image](https://github.com/user-attachments/assets/f188addc-9384-4128-94cf-efb012c5fb11)

Support Vector Machine (SVM) adalah salah satu algoritma machine learning yang digunakan untuk klasifikasi dan regresi. Dalam kasus mendeteksi kualitas kopi Arabica, SVM berperan sebagai model klasifikasi untuk membedakan biji kopi berkualitas baik dan buruk berdasarkan fitur yang diekstrak dari gambar.
Keunggulan SVM untuk Kasus Ini
* Akurasi Tinggi: SVM sangat baik untuk dataset dengan jumlah fitur kecil namun relevan.
* Overfitting Minimal: Dengan margin yang besar dan pengaturan parameter yang baik, SVM cenderung tidak mudah overfit, terutama dengan kernel yang sesuai.
* Kemampuan Generalisasi: SVM bekerja baik pada data dengan kelas yang jelas terpisah.

## Project Structure

* project-root/
* ├── frontend/
* │   ├── src/
* │   │   ├── components/
* │   │   ├── pages/
* │   │   ├── styles/
* │   │   └── App.js
* │   ├── public/
* │   └── package.json
* ├── backend/
* │   ├── src/
* │   │   ├── models/
* │   │   │   ├── cnn.py
* │   │   │   ├── svm.py
* │   │   │   └── ...
* │   │   ├── api/
* │   │   │   ├── routes.py
* │   │   │   └── ...
* │   │   ├── utils/
* │   │   └── app.py
* │   ├── requirements.txt
* │   └── Dockerfile
* ├── dataset/
* │   ├── train/
* │   ├── test/
* │   └── ...
* ├── README.md
* ├── .gitignore
* └── Dockerfile.dev

## Installation and Setup
## Instalasi

1. Clone repository ini. 
   ```bash
   git clone https://github.com/jeremia32/Penerapan-Machine-Learning-dalam-Mengidentifikasi-Biji-Kopi-Berkualitas-Baik-dan-Buruk.git
   cd arabica-coffee-detection
2. jalankan frontend :
   ```bash
   npm run dev
3. jalankan pyhton backend:
   ```bash
   Python app.py

## Contributors
* 11422045 - Syahrial Jeremia Sinaga ( D4 SOftWARE ENGINEERING )
* 11422001 - Yulanda Pasaribu ( D4 SOftWARE ENGINEERING )
* 11422012 - Artha Margareth Sitorus ( D4 SOftWARE ENGINEERING )
* 11422023 - Irene Situmorang ( D4 SOftWARE ENGINEERING )
* 11422034 - Kevin Renaldi Agustinus Hutajulu ( D4 SOftWARE ENGINEERING )


