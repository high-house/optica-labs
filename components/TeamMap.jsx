"use client"
import { useState, useEffect, useRef } from "react";
import classNames from "classnames";
import Image from "next/image";

export const TeamMap = () => {
    return(
        <div className="font-geist text-primary relative isolate h-screen w-full bg-[#001D1B] p-10">
            <div className="z-10 w-full text-center text-5xl font-semibold">Our Team</div>
            <TeamCard src={"/team/aiony (1).jpg"} x={100} y={100} />
            <TeamCard src={"/team/aiony (1).jpg"} x={1500} y={300} />
            <TeamCard src={"/team/aiony (1).jpg"} x={100} y={700} />
            <SquigglyLine
                path={
                    "M5.24077 1C67.8037 220.73 894.305 -49.5177 958.489 123.952C1047.68 377.012 13.7969 160.061 5.24077 403.838C-3.31537 647.615 958.489 301.275 958.489 541"
                }
                viewBox={"0 0 1100 814"}
            />
        </div>
    )
}

const TeamCard = ({ x, y, src }) => {
    const [visible, setVisible] = useState(false);
    const handleScroll = () => {
        const scroll = window.scrollY - (window.innerHeight * 0.5);
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
    return(
        <div className="absolute" style={{ top: y , left: x }}>
            <Image
                src={src}
                width={200} 
                height={200} 
                alt="image-1"
                className={`hover:scale-115 z-50 rounded-lg transition-[scale,opacity] ${visible ? "scale-100 opacity-100" : "scale-0 opacity-0"}`} 
            />
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
        const percentageScroll = window.scrollY / window.innerHeight - 0.1;
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
        <div className="absolute inset-0 left-0 top-0 -z-10 h-full w-full">
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
                    stroke="#fff"
                    strokeWidth="15"
                    fill="none"
                    style={{
                        strokeDasharray: `${length}, ${totalLength}`,
                    }}
                    className={`transition-all ease-out`}
                />
            </svg>
        </div>
    );
};
export default SquigglyLine;
