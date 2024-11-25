import React, { useState } from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaCoffee } from "react-icons/fa"; // Ikon kopi utama
import { GiCoffeeBeans } from "react-icons/gi"; // Ikon biji kopi
import { MdOutlineCoffeeMaker } from "react-icons/md"; // Ikon pembuat kopi
import { BiCoffeeTogo } from "react-icons/bi"; // Ikon kopi to-go
import { AiFillStar } from "react-icons/ai"; // Ikon bintang untuk elemen akhir
import "../styles/jeniskopi.css";

const Jenis_kopi = () => {
  const [activeCoffee, setActiveCoffee] = useState(null); // Menyimpan kopi yang dipilih untuk detail

  // Fungsi untuk menampilkan detail kopi
  const handleDetailClick = (coffeeName) => {
    setActiveCoffee(coffeeName);
  };

  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "50px 20px" }}>
      <h1 style={{ textAlign: "center", marginBottom: "40px", fontSize: "36px", fontWeight: "600" }}>Timeline Jenis Kopi</h1>

      <VerticalTimeline lineColor="#e0e0e0">
        {/* Kopi Arabica */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "white", color: "black", boxShadow: "0px 4px 12px rgba(0,0,0,0.1)" }}
          contentArrowStyle={{ borderRight: "7px solid white" }}
          date="Awal Abad ke-15"
          iconStyle={{ background: "rgb(97, 44, 22)", color: "#fff" }}
          icon={<FaCoffee />}
        >
          <h3 className="vertical-timeline-element-title" style={{ fontWeight: "500" }}>
            Kopi Arabica
          </h3>
          <h4 className="vertical-timeline-element-subtitle" style={{ color: "#757575" }}>
            Asal: Ethiopia
          </h4>
          <p style={{ marginBottom: "20px" }}>Kopi pertama yang dibudidayakan, dikenal dengan rasa lembut dan keasaman yang kompleks.</p>
          <button
            onClick={() => handleDetailClick("Kopi Arabica")}
            style={{
              backgroundColor: "rgb(97, 44, 22)",
              color: "white",
              padding: "8px 16px",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              transition: "0.3s ease",
              fontSize: "14px",
            }}
          >
            Detail Coffee
          </button>
        </VerticalTimelineElement>

        {/* Kopi Robusta */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "white", color: "black", boxShadow: "0px 4px 12px rgba(0,0,0,0.1)" }}
          contentArrowStyle={{ borderRight: "7px solid white" }}
          date="Awal Abad ke-18"
          iconStyle={{ background: "rgb(74, 38, 15)", color: "#fff" }}
          icon={<GiCoffeeBeans />}
        >
          <h3 className="vertical-timeline-element-title" style={{ fontWeight: "500" }}>
            Kopi Robusta
          </h3>
          <h4 className="vertical-timeline-element-subtitle" style={{ color: "#757575" }}>
            Asal: Afrika Barat
          </h4>
          <p style={{ marginBottom: "20px" }}>Lebih kuat dan pahit dibandingkan Arabica, banyak digunakan dalam kopi instan.</p>
          <button
            onClick={() => handleDetailClick("Kopi Robusta")}
            style={{
              backgroundColor: "rgb(74, 38, 15)",
              color: "white",
              padding: "8px 16px",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              transition: "0.3s ease",
              fontSize: "14px",
            }}
          >
            Detail Coffee
          </button>
        </VerticalTimelineElement>

        {/* Kopi Liberica */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "white", color: "black", boxShadow: "0px 4px 12px rgba(0,0,0,0.1)" }}
          contentArrowStyle={{ borderRight: "7px solid white" }}
          date="Abad ke-19"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<MdOutlineCoffeeMaker />}
        >
          <h3 className="vertical-timeline-element-title" style={{ fontWeight: "500" }}>
            Kopi Liberica
          </h3>
          <h4 className="vertical-timeline-element-subtitle" style={{ color: "#757575" }}>
            Asal: Afrika Tengah
          </h4>
          <p style={{ marginBottom: "20px" }}>Memiliki aroma yang kuat dan rasa buah yang khas.</p>
          <button
            onClick={() => handleDetailClick("Kopi Liberica")}
            style={{
              backgroundColor: "rgb(33, 150, 243)",
              color: "white",
              padding: "8px 16px",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              transition: "0.3s ease",
              fontSize: "14px",
            }}
          >
            Detail Coffee
          </button>
        </VerticalTimelineElement>

        {/* Kopi Excelsa */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "white", color: "black", boxShadow: "0px 4px 12px rgba(0,0,0,0.1)" }}
          contentArrowStyle={{ borderRight: "7px solid white" }}
          date="Abad ke-20"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<BiCoffeeTogo />}
        >
          <h3 className="vertical-timeline-element-title" style={{ fontWeight: "500" }}>
            Kopi Excelsa
          </h3>
          <h4 className="vertical-timeline-element-subtitle" style={{ color: "#757575" }}>
            Asal: Asia Tenggara
          </h4>
          <p style={{ marginBottom: "20px" }}>Rasa unik dengan karakter asam yang menyegarkan.</p>
          <button
            onClick={() => handleDetailClick("Kopi Excelsa")}
            style={{
              backgroundColor: "rgb(233, 30, 99)",
              color: "white",
              padding: "8px 16px",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              transition: "0.3s ease",
              fontSize: "14px",
            }}
          >
            Detail Coffee
          </button>
        </VerticalTimelineElement>

        {/* Elemen Bintang */}
        <VerticalTimelineElement iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }} icon={<AiFillStar />} />
      </VerticalTimeline>

      {/* Menampilkan Detail Kopi */}
      {activeCoffee && (
        <div style={{ marginTop: "30px", padding: "20px", backgroundColor: "rgb(245, 245, 245)", borderRadius: "8px" }}>
          <h2 style={{ fontWeight: "600", fontSize: "24px" }}>{activeCoffee}</h2>
          <p style={{ fontSize: "16px", color: "#333" }}>Detail lengkap tentang kopi {activeCoffee} akan ditampilkan di sini. Ini adalah contoh teks detail. Kamu bisa menambahkan deskripsi lengkap tentang jenis kopi yang dipilih.</p>
        </div>
      )}
    </div>
  );
};

export default Jenis_kopi;
