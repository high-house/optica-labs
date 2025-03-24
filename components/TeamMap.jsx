"use client"
import { useState, useEffect, useRef } from "react";
import classNames from "classnames";
import Image from "next/image";
import { Dancing_Script } from 'next/font/google';

const scriptFont = Dancing_Script({ subsets: ['latin'], weight: ['400', '700'] });

export const TeamMap = () => {
    return (
        <div id="team" className="font-geist text-primary relative isolate h-[135vh] w-full bg-[#001D1B] _p-10">
            <div className={`${scriptFont.className} z-10 w-full text-center text-6xl font-medium text-[#E8DFE7] pt-20 _font-semibold`}>Our Team</div>
            <TeamCard src={"/team/aiony (1).jpg"} x={250} y={200} left={true}/>
            <TeamCard src={"/team/aiony (1).jpg"} x={750} y={480} left={false}/>
            <TeamCard src={"/team/aiony (1).jpg"} x={300} y={760} left={true}/>
            <TeamCard src={"/team/aiony (1).jpg"} x={750} y={1040} left={false}/>
            <SquigglyLine
                path={
                    "M5.24077 1C67.8037 220.73 894.305 -49.5177 958.489 123.952C1047.68 377.012 13.7969 160.061 5.24077 403.838C-3.31537 647.615 958.489 301.275 958.489 541"
                }
                viewBox={"0 0 1100 814"}
            />
        </div>
    )
}

const TeamCard = ({ x, y, src ,left}) => {
    const [visible, setVisible] = useState(false);
    const handleScroll = () => {
        const scroll = window.scrollY - (window.innerHeight * 0.1);
        if (scroll >= y) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    })
    return (
        <div className="absolute" style={{ top: y, left: x }}>
            {left &&  <div className="flex gap-10">
                <Image
                    src={src}
                    width={200}
                    height={200}
                    alt="image-1"
                    className={`hover:scale-115 z-50 rounded-full w-40 h-40 transition-[scale,opacity] duration-500 ${visible ? "scale-100 opacity-100" : "scale-0 opacity-0"}`}
                />
                <div className={`flex items-center bg-gradient-to-l bg-black/40  _to-black w-[50rem] duration-500 h-auto rounded-xl gap-4 shadow-lg p-4 ${visible ? "scale-100 opacity-100" : "scale-0 opacity-0"} `}>
                    <div className={`relative flex flex-col text-[#CBC6C6] items-center w-1/3`}>
                        <div className="text-xl font-bold">TIARNE HAWKINES</div>
                        <div className="text-lg font-normal ">Co-Founder</div>
                        <div className="text-lg font-light ">Chief Executive Officer</div>
                    </div>
                    <div className="w-0.5 h-[80%] bg-[#4FB5C9]"></div>
                    <div className="w-2/3 p-4 text-[#CBC6C6]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur vel totam similique quia, omnis obcaecati nihil quidem quaerat iste quae.
                    </div>
                </div>

            </div>}




            {!left &&<div className="flex gap-10">
                
                <div className={`flex items-center bg-gradient-to-l bg-black/40  _to-black w-[50rem] h-auto rounded-xl gap-4 shadow-lg p-4 duration-500 ${visible ? "scale-100 opacity-100" : "scale-0 opacity-0"} `}>
                    <div className="relative flex flex-col text-[#CBC6C6] items-center w-1/3">
                        <div className="text-xl font-bold">TIARNE HAWKINES</div>
                        <div className="text-lg font-normal ">Co-Founder</div>
                        <div className="text-lg font-light ">Chief Executive Officer</div>
                    </div>
                    <div className="w-0.5 h-[80%] bg-[#4FB5C9]"></div>
                    <div className="w-2/3 p-4 text-[#CBC6C6]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur vel totam similique quia, omnis obcaecati nihil quidem quaerat iste quae.
                    </div>
                </div>

                <Image
                    src={src}
                    width={200}
                    height={200}
                    alt="image-1"
                    className={`hover:scale-115 z-50 rounded-full w-40 h-40 duration-500 transition-[scale,opacity] ${visible ? "scale-100 opacity-100" : "scale-0 opacity-0"}`}
                />
            </div>}
        </div>
    )
}

const SquigglyLine = ({ path, viewBox }) => {
    const [isInView, setIsInView] = useState(false);
    const [length, setLength] = useState(0);
    const [totalLength, setTotalLength] = useState(0);
    const ref = useRef(null);
    const pathRef = useRef(null);

    useEffect(() => {
        if (pathRef.current) {
            const length = pathRef.current.getTotalLength();
            setTotalLength(length);
        }
    }, []);

    const handleScroll = () => {
        const totalLength = pathRef.current.getTotalLength();
        const percentageScroll = window.scrollY / window.innerHeight - 0.2;
        setLength(percentageScroll * totalLength);
    }

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                } else {
                    setIsInView(false);
                }
            },
            { threshold: 0.1 }
        );
        window.addEventListener("scroll", handleScroll);

        if (ref.current) observer.observe(ref.current);

        return () => ref.current && observer.unobserve(ref.current);
    }, []);

    return (
        <div className="absolute inset-0 left-1/2 -translate-x-[45%] top-40 -z-10 h-full w-full scale-75 ">
            <svg
                ref={ref}
                preserveAspectRatio="xMidYMid meet"
                viewBox={viewBox}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                strokeLinecap="round"
                className=""
            >
                <path
                    ref={pathRef}
                    d={path}
                    stroke=" #FFFFFF66"
                    strokeWidth="2"
                    fill="none"
                    style={{
                        strokeDasharray: `${length}, ${totalLength}`,
                    }}
                    className={`transition-all ease-out duration-[1s]`}
                />
            </svg>
        </div>
    );
};
export default SquigglyLine;
