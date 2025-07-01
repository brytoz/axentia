import React from "react";
import { motion } from "framer-motion";
import {
  FACEBOOK,
  INSTAGRAM,
  TELEGRAM,
  TIKTOK,
  WHATSAPP,
  YOUTUBE,
} from "../../components/images";
import AnimatedCloud from "../../components/AnimatedCloud";
import GlassPolygons from "../../components/GlassPolygons";
import TypedWord from "../../components/TypedWord";

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center text-white p-6">
      <AnimatedCloud />
      <GlassPolygons />
      <motion.div
        className="absolute text-2xl"
        initial={{ x: -120, y: -100, opacity: 0 }}
        animate={{
          x: [0, 0, 0, 50, 100],
          y: [0, 0, 80, 140, 180],
          opacity: [0, 1, 1, 1, 1],
        }}
        transition={{
          duration: 4,
          ease: "easeInOut",
          // repeat: Infinity,
          // repeatType: "loop",
        }}
        style={{ left: "20%", transform: "translateX(-80%)" }}
      >
        <div className=" rounded-full h-16 w-16 bg-gradient-to-r from-purple-800 via-violet-900 to-purple-800 opacity-30" />
      </motion.div>
      <div className="text-center max-w-5xl ">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-7xl font-bold mb-6 header-font px-2"
        >
          Business{" "}
          <TypedWord word="Auutomation" className="text-teal-300" delay={800} /> {" "}
          for Business owners
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-lg text-gray-300 mb-10"
        >
          Axentia Business-as-a-Service handles your operations, scale
          effortlessly, and let you focus on what truly matters.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex justify-center gap-4"
        >
          <button className="cursor-pointer px-6 py-3 rounded-lg text-white  bg-white/10 border border-white/20 hover:bg-teal-300 hover:text-teal-900 backdrop-blur-lg transition-all">
            Request quote
          </button>
          <button className="cursor-pointer px-6 py-3 rounded-lg text-white backdrop-blur-sm bg-white/10 border border-white/20 hover:bg-white/20 transition-all">
            Learn More
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-0 right-0  left-0 flex justify-center gap-6 space-x-2 md:space-x-12 flex-wrap"
        >
          {[
            { name: "WhatsApp", src: FACEBOOK },
            { name: "Whatsapp", src: WHATSAPP },
            { name: "Instagram", src: INSTAGRAM },
            { name: "Telegram", src: TELEGRAM },
            { name: "Youtube", src: YOUTUBE },
          ].map((icon) => (
            <img
              key={icon.name}
              src={icon.src}
              alt={icon.name}
              className="w-10 md:w-20 h-10 md:h-20 opacity-30"
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
