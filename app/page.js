"use client"
import React, { useState, useEffect } from 'react'
import { IconArrowUp } from "@tabler/icons-react"; // Importing upward arrow icon
import Landing from '@/components/Landing'
import Team from '@/components/Team'
import Quotes from '@/components/quotes'
import Podcast from '@/components/Podcast'
import NewsArticles from '@/components/news_and_articles'
import Resources from '@/components/resources'
import ContactUs from '@/components/ContactUs'

function Page() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > window.innerHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="overflow-x-hidden">
      {showButton && (
        <button 
          className="w-12 z-[9999] h-12 fixed bottom-10 right-10 bg-[#52CBBE] text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
          onClick={scrollToTop}
        >
          <IconArrowUp size={28} />
        </button>
      )}

      <Landing />
      <Team />
      <Quotes />
      <Podcast />
      <NewsArticles />
      <Resources />
      <ContactUs />
    </div>
  );
}

export default Page;
