import React, { useState, useEffect } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { FloatingButtonContainer } from './FloatingButtonElements';

export const FloatingButton = () => {
  const whatsappNumber = '5511978928817';
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

  return (
    <div className="floating-button-wrapper">
      <FloatingButtonContainer
        className={isPulsing ? 'pulsing' : ''}
        onClick={handleButtonClick}
      >
        <FaWhatsapp />
      </FloatingButtonContainer>
    </div>
  );
};

export default FloatingButton;
