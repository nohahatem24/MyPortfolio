// src/components/ui/MarqueeRow.tsx

import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

interface MarqueeRowProps {
  items: string[];
  direction: 'left' | 'right';
  speed?: number;
}

export const MarqueeRow: React.FC<MarqueeRowProps> = ({ items, direction, speed = 40 }) => {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!marqueeRef.current) return;

    const marqueeElement = marqueeRef.current;
    const itemsElements = itemsRef.current.filter(el => el !== null) as HTMLDivElement[];
    if (itemsElements.length === 0) return;

    // --- START OF FIX ---
    // Add a class to cloned elements to identify them for cleanup
    const cloneClassName = 'marquee-clone';
    // --- END OF FIX ---

    const cloneAndAppend = () => {
        itemsElements.forEach(item => {
            const clone = item.cloneNode(true) as HTMLDivElement;
            // --- START OF FIX ---
            clone.classList.add(cloneClassName); // Add the class to the clone
            // --- END OF FIX ---
            marqueeElement.appendChild(clone);
        });
    };
    
    cloneAndAppend();
    cloneAndAppend();

    const totalWidth = marqueeElement.scrollWidth / 3;
    const mod = gsap.utils.wrap(0, totalWidth);

    const tween = gsap.to(marqueeElement, {
      x: direction === 'left' ? `-=${totalWidth}` : `+=${totalWidth}`,
      duration: speed,
      ease: 'none',
      repeat: -1,
      modifiers: {
        x: (x) => mod(parseFloat(x)) + 'px',
      },
    });

    // --- START OF FIX ---
    // Cleanup function to run when the component unmounts or useEffect re-runs
    return () => {
      tween.kill();
      // Remove only the cloned elements, not the original ones
      marqueeElement.querySelectorAll(`.${cloneClassName}`).forEach(clone => clone.remove());
    };
    // --- END OF FIX ---
    
  }, [items, direction, speed]);

  return (
    <div className="w-full overflow-hidden whitespace-nowrap py-2">
      <div ref={marqueeRef} className="flex">
        {items.map((item, index) => (
          <div
            key={index}
            ref={el => {
              // Ensure we only store the original elements in the ref array
              if (itemsRef.current.length < items.length) {
                itemsRef.current[index] = el;
              }
            }}
            className="bg-pink-50 dark:bg-purple-900/30 px-5 py-2.5 rounded-full text-center shadow-sm mx-3"
          >
            <span className="text-pink-700 dark:text-purple-300 font-medium text-sm sm:text-base">
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
