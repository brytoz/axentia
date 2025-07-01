import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const generateDots = (count) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 0.5 + 0.3,  
    delay: Math.random() * 5,
  }));
};

export default function AnimatedCloud() {
  const [dots, setDots] = useState([]);

  useEffect(() => {
    setDots(generateDots(50)); 
  }, []);

  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
      {dots.map((dot) => (
        <motion.div
          key={dot.id}
          initial={{
            x: `${dot.x}vw`,
            y: `${dot.y}vh`,
          }}
          animate={{
            x: `${dot.x + (Math.random() - 0.5) * 10}vw`,
            y: `${dot.y + (Math.random() - 0.5) * 10}vh`,
          }}
          transition={{
            duration: 30 + Math.random() * 20,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
            delay: dot.delay,
          }}
          className="absolute rounded-full bg-blue-400 opacity-10"
          style={{
            width: `${dot.size}rem`,
            height: `${dot.size}rem`,
          }}
        />
      ))}
    </div>
  );
}