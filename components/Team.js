import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import { BackgroundGradientAnimation } from "./ui/background-gradient-animation";
import { AnimatedTestimonials } from "./ui/animated-testimonials";
import { Dancing_Script } from 'next/font/google';

const scriptFont = Dancing_Script({ subsets: ['latin'], weight: ['400', '700'] });




// const teamMembers = [
//     {
//       name: "Sarah Chen",
//       quote:
//       designation: "Product Manager at TechFlow",
//       image: "/team/alex.jpg",
//       linkedin: "#",
//     },
//     {
//       name: "Michael Rodriguez",
//       quote:
//         "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
//       designation: "CTO at InnovateSphere",
//       image: "/team/alex.jpg",
//       linkedin: "#",
//     },
//     {
//       name: "Emily Watson",
//       quote:
//         "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
//       designation: "Operations Director at CloudScale",
//       image: "/team/alex.jpg",
//       linkedin: "#",
//     },
//     {
//       name: "James Kim",
//       quote:
//         "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
//       designation: "Engineering Lead at DataPro",
//       image: "/team/alex.jpg",
//       linkedin: "#",
//     },
//     {
//       name: "Lisa Thompson",
//       quote:
//         "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
//       designation: "VP of Technology at FutureNet",
//       image: "/team/alex.jpg",
//       linkedin: "#",
//     },
//   ];
  
  const testimonials = [
    {
      quote:
        "Meet 'T', An AI pioneer shaping innovation in enterprise AI. With a track record of building AI pipelines for AWS, Meta, and Google, she has contributed to over $500M in revenue. A recognized host, speaker, and advocate for ethical development, she champions technology for good and the responsible deployment of AI at scale.",
      name: "TIAENE HAWKINS",
      designation: "Co-Founder, Chief Executive Officer",
      src: "/team/alex.jpg",
      link:"https://www.linkedin.com/authwall?trk=qf&original_referer=https://www.canva.com/&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Ftiarne-hawkins%3Futm_source%3Dshare%26utm_campaign%3Dshare_via%26utm_content%3Dprofile%26utm_medium%3Dios_app"
    },
    {
      quote:
        "Meet 'Hallie' the leading AI security expert specializing in counter-surveillance, algorithmic threats, and cognitive security. Trusted by NATO, the U.S. Department of Defense, and global policymakers, she works at the intersection of AI safety, national security, and enterprise resilience, ensuring AI systems are secure, adversary-proof, and mission-ready.",
      name: "HALLIE J. STERN",
      designation: "Co-Founder, Chief Innovation Officer",
      src: "/team/aiony (1).jpg",
      link:"https://www.linkedcin.com/authwall?trk=gf&trkInfo=AQHhIkoedUvw5wAAAZXDDXk4tu2aBl3-WxyOBnABfBci_bgkY7gAYJmAtSRwAE9bHUMdz0CEcFnhUMhO5KuH35FT_i5M3mUjLzhO424oiquqprZt-szm-78CuOUeoXSMOXEh_wQ=&original_referer=https://www.canva.com/&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fhalliejstern-informationscientist%3Futm_source%3Dshare%26utm_campaign%3Dshare_via%26utm_content%3Dprofile%26utm_medium%3Dios_app"
    },
    {
      quote:
        "Meet 'The Beast' UCLA's inaugural Chief Data and AI Officer, driving AI and data strategy at the highest levels. A former NASA JPL Chief Innovation & Technology Officer, he is a DARPA-funded researcher and a key contributor to Apache and TensorFlow, bringing deep expertise in AI, ML, and data science to enterprise and government applications.",
      name: "DR. CHRIS HATTMANN",
      designation: "Chief Technology Officer",
      src: "/team/aiony (2).jpg",
      link:"https://www.linkedin.com/in/chrismattmann?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
    },
    {
      quote:
        "Meet 'Jawad' who brings sharp financial instincts and decades of financial leadership across public and private equity-backed companies. A former GE Healthcare executive, he became CFO of a private equity-backed company by 31 and later, CFO of Avon, where he helped grow the market cap from over $50B. Jawad had an MBA from MIT Sloan and specializes in scaling high-growth tech companies.",
      name: "JAWAD AHSAN",
      designation: "Chief Financial Officer",
      src: "/team/aiony (5).jpg",
      link:"https://www.linkedcin.com/authwall?trk=gf&trkInfo=AQHhIkoedUvw5wAAAZXDDXk4tu2aBl3-WxyOBnABfBci_bgkY7gAYJmAtSRwAE9bHUMdz0CEcFnhUMhO5KuH35FT_i5M3mUjLzhO424oiquqprZt-szm-78CuOUeoXSMOXEh_wQ=&original_referer=https://www.canva.com/&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fhalliejstern-informationscientist%3Futm_source%3Dshare%26utm_campaign%3Dshare_via%26utm_content%3Dprofile%26utm_medium%3Dios_app"

    },
    {
      quote:
        "Meet 'The Beast' UCLA's inaugural Chief Data and AI Officer, driving AI and data strategy at the highest levels. A former NASA JPL Chief Innovation & Technology Officer, he is a DARPA-funded researcher and a key contributor to Apache and TensorFlow, bringing deep expertise in AI, ML, and data science to enterprise and government applications.",
      name: "NICK REESE",
      designation: "Chief Operations Officer",
      src: "/team/aiony (4).jpg",
      link:"https://www.linkedin.com/in/chrismattmann?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"

    },
  ];

export default function Team() {
  return (
    <div className="w-screen h-screen overflow-hidden flex justify-center items-center relative bg-[#001D1B]" id="team">
    <div className="w-auto h-auto absolute flex flex-col">
    <div className={`z-10 text-5xl text-[#CBC6C6] w-full text-center ${scriptFont.className}`}>The Team</div>
    <AnimatedTestimonials testimonials={testimonials}/>
    </div>
    {/* <BackgroundGradientAnimation/> */}
        </div>
  );
}