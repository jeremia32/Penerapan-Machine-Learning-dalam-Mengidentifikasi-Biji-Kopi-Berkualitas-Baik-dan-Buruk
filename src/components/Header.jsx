import React, { useState, useEffect } from "react";
import "../styles/Header.css";

function Header() {
  const [typedText, setTypedText] = useState("");
  const fullText = "Identifikasi jumlah biji Kopi berkualitas dan tidak berkaulitas";

  useEffect(() => {
    let index = 0;

    const typeText = () => {
      const typeInterval = setInterval(() => {
        setTypedText(fullText.slice(0, index));
        index++;
        if (index > fullText.length) {
          clearInterval(typeInterval);
          setTimeout(() => {
            index = 0;
            typeText();
          }, 10000); // Wait for 5 seconds before restarting the animation
        }
      }, 100); // Adjust the speed of typing here
    };

    typeText();

    return () => clearInterval(typeText);
  }, [fullText]);

  return (
    <header>
      <div className="header-jumbotron">
        <h3>Habornas arabica Coffe</h3>
        <p className="typing-animation">{typedText}</p>
      </div>
    </header>
  );
}

export default Header;
