'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

// Uses real client photos — crossfades every 4.5s with a 1.5s transition
const SLIDES = [
  'https://experivaengineering.com/wp-content/uploads/2020/07/experiva-img-02.jpg',
  'https://experivaengineering.com/wp-content/uploads/2020/07/flooring.png',
  'https://experivaengineering.com/wp-content/uploads/2020/07/experiva-img-03.jpeg',
  'https://experivaengineering.com/wp-content/uploads/2020/07/experiva-img-04.jpeg',
  'https://experivaengineering.com/wp-content/uploads/2020/07/experiva-img-05.jpeg',
  'https://experivaengineering.com/wp-content/uploads/2020/07/repair-and-rehabiliation.png',
];

export default function HeroSlideshow() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx(i => (i + 1) % SLIDES.length), 4500);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="absolute inset-0 z-0">
      {SLIDES.map((src, i) => (
        <div
          key={src}
          className="absolute inset-0 transition-opacity duration-[1500ms] ease-in-out"
          style={{ opacity: i === idx ? 1 : 0 }}
        >
          <Image
            src={src}
            alt=""
            fill
            priority={i === 0}
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
      ))}
    </div>
  );
}
