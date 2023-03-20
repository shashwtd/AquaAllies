import React, { useState } from 'react';
import styles from './Cursor.module.css'

const Cursor = () => {
  const [isClicked, setIsClicked] = useState(false);
  React.useEffect(() => {
    const cursor = document.querySelector('#cursor') as HTMLElement;
    const cursorCircle = document.querySelector('#cursorCircle') as HTMLElement;

    const mouse = { x: -100, y: -100 }; // mouse pointer's coordinates
    const pos = { x: 0, y: 0 }; // cursor's coordinates
    const speed = 0.08; // between 0 and 1

    const updateCoordinates = (e: { clientX: number; clientY: number; }) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    }

    window.addEventListener('mousemove', updateCoordinates);
    window.addEventListener('mousedown', () => setIsClicked(true));
    window.addEventListener('mouseup', () => setIsClicked(false));
    
    window.addEventListener('mouseout', () => { cursor.setAttribute('state', 'hide'); });
    window.addEventListener('mouseover', () => { cursor.setAttribute('state', ''); });

    function getAngle(diffX: number, diffY: number) {
      return Math.atan2(diffY, diffX) * 180 / Math.PI;
    }

    function getSqueeze(diffX: number, diffY: number) {
      const distance = Math.sqrt(
        Math.pow(diffX, 2) + Math.pow(diffY, 2)
      );
      const maxSqueeze = 0.15;
      const accelerator = 1500;
      return Math.min(distance / accelerator, maxSqueeze);
    }


    const updateCursor = () => {
      const diffX = Math.round(mouse.x - pos.x);
      const diffY = Math.round(mouse.y - pos.y);
      
      pos.x += diffX * speed;
      pos.y += diffY * speed;
      
      const angle = getAngle(diffX, diffY);
      const squeeze = getSqueeze(diffX, diffY);
      
      const scale = 'scale(' + (1 + squeeze) + ', ' + (1 - squeeze) +')';
      const rotate = 'rotate(' + angle +'deg)';
      const translate = 'translate3d(' + pos.x + 'px ,' + pos.y + 'px, 0)';

      cursor.style.transform = translate;

      if (isClicked) {
        cursorCircle.style.transform = rotate + scale + ' scale(0.5)';
      } else {
        cursorCircle.style.transform = rotate + scale;
      }

    };

    function loop() {
      updateCursor();
      requestAnimationFrame(loop);
    }

    requestAnimationFrame(loop);


    const cursorModifiers = document.querySelectorAll('[cursor-class]');
    cursorModifiers.forEach(curosrModifier => {
      curosrModifier.addEventListener('mouseenter', function(this: any) {
        const className = this.getAttribute('cursor-class');
        cursor.setAttribute('state', className);
      });
      
      curosrModifier.addEventListener('mouseleave', function(this: any) {
        const className = this.getAttribute('cursor-class');
        cursor.setAttribute('state', '');
      });
    });
  }, [isClicked]);

  return (
    <div className={styles.cursor} id="cursor">
      <div className={styles.cursorCircle} id="cursorCircle"></div>
    </div>
  )
}

export default Cursor;