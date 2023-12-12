import React, { useState } from 'react'

const MovingImage = ({image, alt, styles, coef = 2}) => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        const rect = e.target.getBoundingClientRect();
        const x = e.clientX - rect.left * coef;
        const y = e.clientY - rect.top * coef;
      setPosition({ x, y });
    };
  
    const resetPosition = () => {
      setPosition({ x: 0, y: 0 });
    };
  
    return (
      <div
        className="container relative flex items-center w-[100%] justify-end"
        onMouseMove={handleMouseMove}
        onMouseLeave={resetPosition}
      >
        <img
          src={image}
          alt={alt}
          className={`moving-image ${styles}`}
          style={{
            position: 'absolute',
            transition: 'transform 1s ease-out',
            transform: `translate(${position.x}px, ${position.y}px)`,
          }}
        />
      </div>
    );
}

export default MovingImage
