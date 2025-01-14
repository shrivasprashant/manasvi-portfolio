import React, { useState } from 'react';

const RotatingDivs = () => {
  const [current, setCurrent] = useState(0);

  const handleClick = () => {
    setCurrent((prevCurrent) => (prevCurrent + 1) % 3);
  };

  return (
    <div className="rotating-wrapper" onClick={handleClick}>
      <div className={`rotating-div ${current === 0 ? 'front' : current === 1 ? 'left' : 'right'}`}>
        <img src="https://images.unsplash.com/photo-1709920694639-81d640bc472f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D" alt="" />
      </div>
      <div className={`rotating-div ${current === 1 ? 'front' : current === 2 ? 'left' : 'right'}`}>
        <img src="https://images.unsplash.com/photo-1721048166150-3b2bb2ca3431?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      </div>
      <div className={`rotating-div ${current === 2 ? 'front' : current === 0 ? 'left' : 'right'}`}>
        <img src="https://images.unsplash.com/photo-1716890385566-dee802c56d2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      </div>
    </div>
  );
};

export default RotatingDivs;
