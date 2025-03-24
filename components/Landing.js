import Image from "next/image";
import { BackgroundGradientAnimation } from "./ui/background-gradient-animation";
import Link from "next/link";

export default function Landing() {
  return (
    <div className="h-screen flex items-center justify-center  relative overflow-hidden screen">
      <div className="absolute to-0 left-0 w-screen h-screen flex justify-center">
      <div className="w-[60%] h-full _bg-[red] flex flex-col items-center justify-evenly">
            <Logo/>
            <EmailSection/>
            <Nav/>
      </div>
      </div>


    <BackgroundGradientAnimation/>


    </div>
  );
}


const Logo=()=>{
    return(
        <div className="flex flex-col lg:w-1/2 w-xs lg:h-auto gap-y-2 lg:z-10 z-2">
            <Image src={"/logo.svg"} width={600} alt="logo"  height={600} className="w-full h-full object-cover"/>
            <div className="lg:w-full lg:text-base text-sm  font-extrabold flex text-[#E8DFE7] justify-between">
                <div>
                    Push Limits
                </div>
                <div>
                    Break Barriers
                </div>
                <div>
                    Engineer Trust
                </div>
            </div>
        </div>
    )
}


const EmailSection=()=>{
    return(
        <div className="lg:w-[40%] w-md  flex flex-col items-center gap-2 z-10 text-[#E8DFE7]">
            <input type="email"  className="w-1/2 outline-none border-none placeholder:text-[#E8DFE7] placeholder:text-xl placeholder:font-light placeholder:text-center" placeholder="enter emial"/>
            <div className="w-[50%] h-[0.5px] bg-[#818181]"></div>
            <div className="w-2/3 text-xl text-center font-bold text-[#E8DFE7]">Be the first to know</div>
        </div>
    )
}

const Nav=()=>{
    return(
        <div className="w-full lg:flex items-center justify-between font-bold text-[#E8DFE7] z-10 lg:pl-0  pl-4 ">
                <Link href={"#team"} className="flex flex-col w-[12rem] items-center gap-1 py-2" >
                    <div className="w-full h-[1.5px] bg-[#686464]"></div>
                    <div>MEET THE TEAM</div>
                    <div className="w-full h-[1px] bg-[#686464]"></div>
                </Link>

                <Link href={"#contact"} className="flex flex-col w-[12rem] items-center gap-1 pb-2">
                    <div className="w-full h-[1.5px] bg-[#686464]"></div>
                    <div>OPTICAL MEDIA</div>
                    <div className="w-full h-[1px] bg-[#686464]"></div>
                </Link>



                <Link href={"#podcast"} className="flex flex-col w-[12rem] items-center gap-1">
                    <div className="w-full h-[1.5px] bg-[#686464]"></div>
                    <div>YOU & AI</div>
                    <div className="w-full h-[1px] bg-[#686464]"></div>
                </Link>
        </div>
    )
}