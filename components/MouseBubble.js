// components/MouseBubble.js
'use client';

import { useEffect } from 'react';

export default function MouseBubble() {
  useEffect(() => {
    const bubble = document.createElement('div');
    bubble.classList.add('mouse-bubble');
    document.body.appendChild(bubble);

    const moveBubble = (e) => {
      bubble.style.left = `${e.pageX}px`;
      bubble.style.top = `${e.pageY}px`;
    };

    window.addEventListener('mousemove', moveBubble);

    return () => {
      window.removeEventListener('mousemove', moveBubble);
      bubble.remove();
    };
  }, []);

  return null;
}
