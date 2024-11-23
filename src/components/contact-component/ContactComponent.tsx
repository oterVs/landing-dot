'use client'
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { BorderBeam } from '../ui/border-beam';

const ContactComponent = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);


  const images = [
    '/img/image1.jpg',
    '/img/image2.jpg',
    '/img/image3.jpg',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 750); 
    return () => clearInterval(interval); 
  }, [images.length]);

  return (
    <div className="flex flex-col items-center justify-center h-[300px]">
      <h1 className="text-4xl font-bold text-black dark:text-white mb-4">
        Contácteme
      </h1>
      <div className="relative w-40 h-40 overflow-hidden rounded-full ">
        <Image
          src={images[currentImageIndex]}
          alt={`Imagen ${currentImageIndex + 1}`}
          className="w-full h-full object-cover"
          width={160}
          height={160}
        />
        <BorderBeam size={250} duration={12} delay={9} />
      </div>

    </div>
  );
};

export default ContactComponent;