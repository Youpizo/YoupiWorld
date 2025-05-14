import React, { useState, useEffect, useRef } from 'react';
import NET from 'vanta/dist/vanta.net.min';
import './VantaBackground.css';

const VentaBackground = (props) => {
  const [vantaEffect, setVantaEffect] = useState(null);
  const myRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(NET({
        el: myRef.current,
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color: 0x1f2222,
    backgroundColor: 0x1b,
    points: 15.00,
    maxDistance: 12.00
      }));
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div className="vanta-container">
      <div ref={myRef} className="vanta-background">
        {/* Foreground content goes here */}
      </div>
    </div>
  );
};

export default VentaBackground;


