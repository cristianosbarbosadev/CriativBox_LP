import React, { useState, useEffect } from 'react';
import './FloatingButton.css';
import { FaWhatsapp } from 'react-icons/fa';




export const FloatingButton = () => {
  const whatsappNumber = '5511939303368';
  const [isPulsing, setIsPulsing] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsPulsing(prevIsPulsing => !prevIsPulsing);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleButtonClick = () => {
    window.open(
      `https://api.whatsapp.com/send?phone=${whatsappNumber}`,
      '_blank'
    );
  };

  const floatingButtonClass = isPulsing
    ? 'floating-button pulsing'
    : 'floating-button';

  return (
    <div className="floating-button-wrapper">
      <button className={floatingButtonClass} onClick={handleButtonClick}>
        <FaWhatsapp />
        {/* Certifique-se de ter o ícone do WhatsApp instalado corretamente */}
      </button>
    </div>
  );
};

export default FloatingButton;
