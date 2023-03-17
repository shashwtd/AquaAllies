import { useEffect, useState } from 'react';
import styles from './Cursor.module.css';


// TODO: Add cursor class to elements to change cursor
// Source: https://codepen.io/gabrielcojea/pen/jOWRBrL?editors=0010




const Cursor = () => {
  const [mouse, setMouse] = useState({ x: -100, y: -100 });
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const updateMouse = (e: { clientX: any; clientY: any; }) => {
    setMouse({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener('mousemove', updateMouse);
    return () => window.removeEventListener('mousemove', updateMouse);
  }, []);

  const updatePos = () => {
    const diffX = Math.round(mouse.x - pos.x);
    const diffY = Math.round(mouse.y - pos.y);

    setPos({
      x: pos.x + diffX * 0.1,
      y: pos.y + diffY * 0.1,
    });
  };

  useEffect(() => {
    requestAnimationFrame(updatePos);
  }, [mouse, pos]);

  const handleHover = () => {
    setIsHovering(true);
  };

  const handleLeave = () => {
    setIsHovering(false);
  };

  const handleClick = () => {
    setIsClicked(true);

    setTimeout(() => {
      setIsClicked(false);
    }, 150);
  };

  return (
    <div className={styles.cursor} style={{ transform: `translate3d(${pos.x}px, ${pos.y}px, 0)` }}>
      <div
        className={`${styles.cursor__circle} ${isHovering ? '--hover' : ''} ${
          isClicked ? '--click' : ''
        }`}
        onMouseEnter={handleHover}
        onMouseLeave={handleLeave}
        onMouseDown={handleClick}
      />
    </div>
  );
};

export default Cursor;
