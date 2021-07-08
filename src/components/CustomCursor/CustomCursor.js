import React, { useState, useEffect, useContext } from 'react';
import { MouseContext } from '../../context/mouse-context';

function useMousePosition() {
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });

  useEffect(() => {
    const mouseMoveHandler = (event) => {
      const { clientX, clientY } = event;
      setMousePosition({ x: clientX, y: clientY });
    };
    document.addEventListener('mousemove', mouseMoveHandler);

    return () => {
      document.removeEventListener('mousemove', mouseMoveHandler);
    };
  }, []);

  return mousePosition;
}

const CustomCursor = () => {
  const { cursorType, cursorChangeHandler } = useContext(MouseContext);

  const { x, y } = useMousePosition();
  return (
    <>
      {/* 2. */}
      <div style={{ left: `${x}px`, top: `${y}px` }} className={'ring ' + cursorType}></div>
      <div className={'dot ' + cursorType} style={{ left: `${x}px`, top: `${y}px` }}></div>
    </>
  );
};

export default CustomCursor;
