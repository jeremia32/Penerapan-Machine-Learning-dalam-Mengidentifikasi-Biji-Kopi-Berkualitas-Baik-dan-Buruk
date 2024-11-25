import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#333",
        color: "#fff",
        padding: "40px 20px",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "20px",
        position: "relative",
      }}
    >
      {/* Informasi Umum */}
      <div style={{ flex: "1", minWidth: "300px" }}>
        <h2 style={{ fontSize: "24px", marginBottom: "15px" }}>Tentang Kami</h2>
        <p style={{ lineHeight: "1.6", fontSize: "14px" }}>Kami adalah penyedia kopi berkualitas dari berbagai penjuru dunia. Berdedikasi untuk memberikan pengalaman kopi terbaik untuk Anda.</p>
      </div>

      {/* Map Lokasi */}
      <div style={{ flex: "1", minWidth: "300px" }}>
        <h2 style={{ fontSize: "24px", marginBottom: "15px" }}>Lokasi Kami</h2>
        <div
          style={{
            borderRadius: "10px",
            overflow: "hidden",
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
          }}
        >
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.923606481318!2d-122.08424968469206!3d37.42206597982433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb5a5e1c8b1f5%3A0x2e5980c81fef8c1f!2sGoogleplex!5e0!3m2!1sen!2sid!4v1690215423246!5m2!1sen!2sid"
            width="100%"
            height="200"
            style={{ border: "none" }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      {/* Kontak */}
      <div style={{ flex: "1", minWidth: "300px" }}>
        <h2 style={{ fontSize: "24px", marginBottom: "15px" }}>Kontak</h2>
        <ul style={{ listStyle: "none", padding: "0", fontSize: "14px" }}>
          <li>
            <strong>Alamat:</strong> Jl. Kopi No. 1, Bandung, Indonesia
          </li>
          <li>
            <strong>Telepon:</strong> +62 812 3456 7890
          </li>
          <li>
            <strong>Email:</strong> info@coffeelovers.com
          </li>
        </ul>
      </div>

      {/* Garis Horizontal */}
      <div
        style={{
          width: "100%",
          marginTop: "30px",
          textAlign: "center",
        }}
      >
        <hr
          style={{
            border: "0",
            borderTop: "1px solid #555",
            margin: "0 auto",
            width: "80%",
          }}
        />
        <p style={{ marginTop: "10px", fontSize: "14px" }}>© 2024 Coffee Lovers. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
