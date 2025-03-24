import React from 'react';
import Image from 'next/image';
import { BackgroundGradientAnimation } from './ui/background-gradient-animation';
import { Dancing_Script } from 'next/font/google';

const scriptFont = Dancing_Script({ subsets: ['latin'], weight: ['400', '700'] });

function Podcast() {
    return (
        <div className='w-screen h-screen relative bg-[#001D1B]' id='podcast'>
            <div className='w-screen h-screen absolute top-0 right-0 flex justify-center items-center p-4 md:p-10'>
                <div className='w-full md:w-2/3 h-full flex flex-col items-center justify-evenly text-center'>
                    <div className={`z-10 lg:pb-10 text-3xl md:text-5xl text-[#CBC6C6] ${scriptFont.className}`}>Podcast</div>
                    <a target='_blank' href='https://www.youtube.com/watch?si=QOweU39hywhqru_q&v=28vPzY1KwdE&feature=youtu.be' className='relative w-full md:w-2/3 h-auto border-8 md:border-[10px] border-[#2B2A2A] overflow-hidden rounded-3xl z-10'>
                        <Image src={'/images/podcast.jpg'} alt='podcast' width={1000} height={1000} className='w-full h-48 md:h-[30rem] object-cover hover:scale-125 transition-all duration-500' />
                        <Image src={'/images/1.png'} alt='podcast' width={1000} height={1000} className='w-32 md:w-80 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-16 md:h-32 object-cover hover:scale-125 transition-all duration-500' />
                    </a>
                    <div className='w-full text-xl md:text-3xl text-[#52C5A2] font-normal z-10'>
                        TIARNE HAWKINS AND ADAM CHEYAR
                        <div className='w-full text-sm md:text-xl text-[#52C5A2] font-light'>2025 AI PREDICTIONS</div>
                    </div>
                    <div className='w-full font-semibold text-sm md:text-lg text-[#CBC6C6] flex flex-col gap-2 z-10 px-4 md:px-0'>
                        Co-founder or founding member of multiple successful startups
                        <span className='italic text-sm md:text-lg font-light'>
                            including Siri, Change.org, Viv Labs, Sentient, GamePlanner.AI
                        </span>
                        <span className='text-sm md:text-lg font-light'>
                            Take a dive into the world of AI and hear why Adam thinks the landscape will change completely 2 years from now
                        </span>
                    </div>
                </div>
            </div>
            {/* <BackgroundGradientAnimation/> */}
        </div>
    );
}

export default Podcast;
