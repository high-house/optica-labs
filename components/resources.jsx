'use client';

import React from 'react';
import { Dancing_Script } from 'next/font/google';
import Image from 'next/image';
import { BackgroundGradientAnimation } from './ui/background-gradient-animation';

const scriptFont = Dancing_Script({ subsets: ['latin'], weight: ['400', '700'] });

const resourcesData = [
    {
        title: 'HALLIE STERN: MCCAIN INSTITUTE',
        subtitle: 'AI & Democracy: Bridging Policy and Technology',
        image: '/images/img1.jpeg',
        link: 'https://www.mccaininstitute.org/resources/press-releases/mccain-institute-announces-new-american-democracy-technology-policy-translation-fellow/'
    },
    {
        title: 'THE FUTURE OF AI',
        subtitle: 'Exploring the Next Generation of Artificial Intelligence',
        image: '/images/img2.jpeg',
        link: '#'
    },
    {
        title: 'ETHICAL AI DEVELOPMENT',
        subtitle: 'Ensuring Fair and Responsible AI Implementation',
        image: '/images/img3.jpeg',
        link: '#'
    },
];

const Resources = () => {
    return (
        <div className="relative flex flex-col items-center justify-center min-h-screen bg-black text-white px-6 py-12">
            <h1 className={`text-4xl sm:text-5xl mb-8 text-[#E8DFE7] ${scriptFont.className} z-10 text-center`}>
                Resources
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl z-10">
                {resourcesData.map((resource, index) => (
                    <div key={index} className="bg-[#313030] p-4 rounded-lg shadow-lg flex flex-col items-center w-full overflow-hidden">
                        <Image
                            src={resource.image}
                            alt={resource.title}
                            width={400}
                            height={300}
                            className="rounded-lg mb-4 h-1/2 "
                        />
                        <div className='w-full flex flex-col gap-3 text-center'>
                            <h2 className="text-lg lg:text-base font-bold text-[#52CBBE]">{resource.title}</h2>
                            <p className="text-gray-400">{resource.subtitle}</p>
                        </div>
                        <a
                            href={resource.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-4 w-full"
                        >
                            <button className="w-full text-[#E8DFE7] bg-[#52CBBE] py-3 rounded-full hover:bg-opacity-80 transition-all duration-300">
                                Learn More
                            </button>
                        </a>
                    </div>
                ))}
            </div>

            {/* Background Animation */}
            <div className='absolute inset-0'>
                <BackgroundGradientAnimation />
            </div>
        </div>
    );
};

export default Resources;
