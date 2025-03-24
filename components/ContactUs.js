import React from 'react'
import { Dancing_Script } from 'next/font/google';
import { LampDemo } from './LampDemo';
const scriptFont = Dancing_Script({ subsets: ['latin'], weight: ['400', '700'] });



function ContactUs() {
  return (
    <div className='w-screen h-screen flex justify-center items-center' id='contact'>

        <div className='w-full h-full flex flex-col relative'>
            <LampDemo/>
        </div>
    </div>
  )
}

export default ContactUs