"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "./ui/lamp";
import { FaLinkedin, FaFacebookF, FaInstagram } from "react-icons/fa";

export function LampDemo() {
  return (
    <LampContainer>
    <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
        className="text-center text-white mt-10"
      >
        <h2 className="text-3xl md:text-5xl font-semibold mb-4">
          Get in Touch
        </h2>
        <p className="text-lg md:text-xl text-gray-400">
          Reach out for collaborations or just to say hello!
        </p>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
        className="mt-6 flex flex-col items-center"
      >
        <a href="mailto:info@opticallabs.com" className="text-lg md:text-xl text-[#52CBBE] font-semibold hover:text-white transition">
          info@opticallabs.com
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8, ease: "easeInOut" }}
        className="mt-6 flex gap-6"
      >
        {socialIcons.map(({ id, icon, href }) => (
          <a
            key={id}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#52CBBE] p-3 rounded-full bg-opacity-10 border border-[#52CBBE] hover:bg-[#52CBBE] hover:text-white transition duration-300"
          >
            {icon}
          </a>
        ))}
      </motion.div>
    </LampContainer>
  );
}

const socialIcons = [
  { id: 1, icon: <FaLinkedin size={24} />, href: "https://linkedin.com" },
  { id: 2, icon: <FaFacebookF size={24} />, href: "https://facebook.com" },
  { id: 3, icon: <FaInstagram size={24} />, href: "https://instagram.com" },
];
