import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqData = [
  {
    question: "What is BaaS (Business-as-a-Service)?",
    answer: "BaaS refers to offering businesses automation and AI-powered tools to handle operations, allowing you to focus on strategy and growth.",
  },

  {
    question: "Do i have to build any application myself?",
    answer: "No, Axentia handles your application setup while you focus on running your business.",
  },
  {
    question: "Do you offer ready-made agents or custom ones?",
    answer:
      "We focus on setting up and developing agents from scratch based on your specific needs. Once you request a particular agent, we handle everything from planning and design to deployment and integration.",
  },
  {
    question: "How/Where do i manage my application(s) after setup?",
    answer: "Axentia provides dedicated dashboards to client, tailored to suit their applications and scalable upon upgrades. After setup, a dedicated link to your business will be forwarded to you.",
  },
  {
    question: "Can I integrate it with WhatsApp or Instagram?",
    answer:
      "At Axentia, we design custom agents and help you integrate them seamlessly with platforms like WhatsApp, Facebook, YouTube, Telegram, and Instagram, enabling automated, real-time interactions with your audience.",
  },
  {
    question: "Is my business data safe?",
    answer:
      "Yes. We take security seriously. Your data is protected using industry-standard encryption, secure hosting environments, and strict access control policies.",
  },
];

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="max-w-4xl mx-auto px-4 py-12"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-white">
        {/* Frequently Asked Questions */}
        Got Questions?
      </h2>
      <div className="space-y-4">
        {faqData.map((item, index) => (
          <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
            key={index}
            className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-lg p-4"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center text-left text-white font-semibold cursor-pointer text-lg"
            >
              {item.question}
              {activeIndex === index ? (
                <ChevronUp size={20} />
              ) : (
                <ChevronDown size={20} />
              )}
            </button>
            <motion.div
              initial={false}
              animate={{
                height: activeIndex === index ? "auto" : 0,
                opacity: activeIndex === index ? 1 : 0,
              }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden text-gray-300 mt-2"
            >
              <div className="py-2 px-1">{item.answer}</div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
