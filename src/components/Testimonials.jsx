import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Jane Doe",
    role: "COO – StellarBrands",
    quote:
      "Axentia delivered a seamless automation system that completely changed how we handle support and communication. It’s like hiring a team without the overhead.",
  },
  {
    name: "Michael Smith",
    role: "Founder – NovaDigital",
    quote:
      "I requested a custom agent for lead qualification — within a week, it was live and already saving us hours daily. The integration with WhatsApp was spot-on.",
  },
  {
    name: "Fatima Bello",
    role: "Head of Ops – SwiftCart",
    quote:
      "What impressed me most was the personal touch. Axentia really understood our internal workflow and built an agent that felt native to our process.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 text-gray-100  px-6">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="ext-3xl md:text-4xl font-bold mb-2">What Our <span className="text-teal-300"> Clients </span> Say</h2>
        <p className="text-gray-300">Real feedback from the businesses we power</p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {testimonials.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-lg shadow-md rounded-lg p-6 text-left"
          >
            <p className="text-sm text-gray-200 italic mb-4 tracking-wider">“{item.quote}”</p>
            <div className="mt-4">
              <h4 className="font-semibold text-md">{item.name}</h4>
              <p className="text-sm text-gray-400">{item.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
