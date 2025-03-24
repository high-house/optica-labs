'use client'
import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { BackgroundGradientAnimation } from './ui/background-gradient-animation';

const Quotes = () => {
  const [inView, setInView] = useState(false);
  const quoteRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.5 }
    );

    if (quoteRef.current) observer.observe(quoteRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className='relative w-screen h-screen'>


      <div ref={quoteRef} className=" absolute top-0 right-0 flex items-center justify-center w-screen h-screen">
        <div className="lg:w-2/3 w-sm h-full flex flex-col lg:gap-52 justify-center">
          <div className="w-full overflow-hidden flex items-center justify-center">
            <Image
              src="/icons/quote.svg"
              width={200} 
              height={200}
              alt="quotes"
              className={`z-10 lg:w-32 w-18 h-32 object-contain transition-opacity duration-1000 ease-in-out ${inView ? 'opacity-100' : 'opacity-0'
                }`}
            />
            <div
              className={`z-10 lg:w-full w-60 h-2 bg-[#CBC6C6] transition-transform duration-1000 ease-in-out ${inView ? 'translate-x-0' : 'translate-x-full'
                }`}
            ></div>
          </div>

          <p className="z-10 text-[#CBC7C6] lg:text-5xl text-2xl font-bold text-center px-6">
            “The future of AI belongs to those who build it right.”
          </p>

          <div className="w-full overflow-hidden flex items-center justify-center">
            <div
              className={`z-10 lg:w-full w-60 h-2 bg-[#CBC6C6] transition-transform duration-1000 ease-in-out ${inView ? 'translate-x-0' : '-translate-x-full'
                }`}
            ></div>
            <Image
              src="/icons/quote.svg"
              width={200}
              height={200}
              alt="quotes"
              className={`z-10 lg:w-32 w-18 h-32 object-contain -rotate-180 transition-opacity duration-1000 ease-in-out ${inView ? 'opacity-100' : 'opacity-0'
                }`}
            />
          </div>
        </div>

      </div>
      <BackgroundGradientAnimation />
    </div>
  );
};

export default Quotes;
