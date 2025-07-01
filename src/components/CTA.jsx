import { motion } from "framer-motion";
import React from "react";

export default function CTA() {
  return (
    <div className="px-6  text-white flex flex-col md:flex-row md:items-center md:justify-between gap-6 my-18">
      {/* Section 2 (Text block) */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center md:text-left md:w-2/3"
      >
        <h3 className="text-2xl md:text-3xl font-semibold mb-4">
          10+ companies have already partnered with{" "}
          <span className="text-teal-300">Axentia</span> to build their own
          agents.
        </h3>
        <p className="text-gray-400 text-md">
          Whether it’s WhatsApp automation, support bots, or process-specific
          assistants, we help you launch with confidence and clarity.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        viewport={{ once: true }}
        className="md:w-1/3 flex justify-center md:justify-end"
      >
        <button className="bg-teal-300 mt-4 md:mt-0 px-8 py-4 rounded-lg text-teal-900 backdrop-blur-sm border border-white/20 hover:bg-teal-200 transition-all cursor-pointer">
          Request a Custom Agent
        </button>
      </motion.div>
    </div>
  );
}
