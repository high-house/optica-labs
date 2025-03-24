import React from 'react'
import Image from 'next/image'

const Opticamedia = () => {
    return (
        <div className="relative flex items-center justify-center min-h-screen bg-black">
            <div className="relative w-[500px] h-[300px] md:w-[700px] md:h-[400px] lg:w-[900px] lg:h-[500px]">
                <Image
                    src="/images/optica_media.png"
                    alt="Quote"
                    width={900}  
                    height={500} 
                    className="object-contain"
                />
            </div>
        </div>
    )
}

export default Opticamedia