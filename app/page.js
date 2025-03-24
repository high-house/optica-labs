"use client"
import React, { useState, useEffect } from 'react'
import { IconArrowUp } from "@tabler/icons-react";
import Landing from '@/components/Landing'
import Team from '@/components/Team'
import Quotes from '@/components/quotes'
import Podcast from '@/components/Podcast'
import NewsArticles from '@/components/news_and_articles'
import Resources from '@/components/resources'
import ContactUs from '@/components/ContactUs'
import { TeamMap } from '@/components/TeamMap';

function Page() {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => setShowButton(window.scrollY > window.innerHeight / 2);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

    return (
        <div className="font-geist overflow-x-hidden">
            <button 
                className={`fixed bottom-10 right-10 z-[9999] flex h-12 w-12 items-center justify-center rounded-full bg-[#52CBBE] text-white shadow-lg transition-all duration-300 hover:scale-110 ${showButton ? "opacity-100" : "opacity-0"} transition-opacity`}
                onClick={scrollToTop}
            >
                <IconArrowUp size={28} />
            </button>

            <Landing />
            <TeamMap />
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
