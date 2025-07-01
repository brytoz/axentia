import React from "react";
import { motion } from "framer-motion";

export default function CallToAction() {
  return (
    <section className=" text-white py-20 px-6">
      <div className="max-w-5xl mx-auto text-center space-y-16">
        {/* Section 1 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Join over <span className="text-teal-300">100,000+</span> businesses
            already adopting AI automation.
          </h2>
          <p className="text-gray-300 text-lg">
            Empower your operations, simplify communication, and scale with
            intelligent agents that work around the clock.
          </p>
        </motion.div>

      </div>
    </section>
  );
}




