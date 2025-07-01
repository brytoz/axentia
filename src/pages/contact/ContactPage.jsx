import { motion } from "framer-motion";
import { Fragment, useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function ContactPage() {
  const [selectedService, setSelectedService] = useState("");

  return (
    <Fragment>
      <Navbar />

      <div className="pt-32 min-h-screen px-6 py-16 bg-gradient-to-br from-black via-blue-900 to-blue-800 text-white flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-3xl backdrop-blur-sm bg-white/5 p-8 rounded-lg border border-white/10 shadow-lg"
        >
          <h2 className="text-3xl font-bold mb-6 text-center">
            Contact <span className="text-teal-300">Axentia</span>
          </h2>

          <form className="space-y-6">

          <div>
              <label className="block mb-2 text-sm">Full Name</label>
              <input
                type="text"
                  placeholder="Your name"
                className="w-full px-4 py-3 rounded bg-white/10 border border-white/20 text-white placeholder:text-gray-400 focus:outline-none focus:ring focus:ring-teal-400"
                required
                />
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-2 text-sm">Phone Number</label>
                <input
                  type="text"
                  placeholder="+234 1234 567 890"
                  className="w-full px-4 py-3 rounded bg-white/10 border border-white/20 text-white placeholder:text-gray-400 focus:outline-none focus:ring focus:ring-teal-400"
                  required
                />
              </div>

              <div>
                <label className="block mb-2 text-sm">Email Address</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 rounded bg-white/10 border border-white/20 text-white placeholder:text-gray-400 focus:outline-none focus:ring focus:ring-teal-400"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block mb-2 text-sm">Business Name</label>
              <input
                type="text"
                placeholder="e.g. Axentia Foods Ltd"
                className="w-full px-4 py-3 rounded bg-white/10 border border-white/20 text-white placeholder:text-gray-400 focus:outline-none focus:ring focus:ring-teal-400"
              />
            </div>

            

            <div>
              <label className="block mb-2 text-sm">What Do You Need?</label>
              <select
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                className="w-full px-4 py-3 rounded bg-white/10 border border-white/20 text-white placeholder:text-gray-400 focus:outline-none focus:ring focus:ring-teal-400"
                required
              >
                <option value="">Select a service</option>
                <option>WhatsApp Automation</option>
                <option>Instagram Automation</option>
                <option>Facebook Automation</option>
                <option>Telegram Bot</option>
                <option>Media Automation & Custom Website</option>
                <option>Custom Website</option>
                <option>Other (describe below)</option>
              </select>
            </div>

            <div>
              <label className="block mb-2 text-sm">Details</label>
              <textarea
                rows={5}
                placeholder="Tell us what you need..."
                className="w-full px-4 py-3 rounded bg-white/10 border border-white/20 text-white placeholder:text-gray-400 focus:outline-none focus:ring focus:ring-teal-400"
                required
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="mt-4 px-8 py-3 rounded-full text-teal-900 backdrop-blur-sm bg-teal-300 border border-white/20 hover:text-xl transition-all cursor-pointer"
              >
                Submit Request
              </button>
            </div>
          </form>
        </motion.div>
      </div>
      <Footer />
    </Fragment>
  );
}
