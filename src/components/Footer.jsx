import React from "react";
import {  Phone, Mail } from "lucide-react";
import {  FaFacebook, FaInstagram, FaTelegram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-black via-gray-800 to-gray-800 text-white py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Company Info */}
        <div>
          <h3 className="text-xl font-bold mb-4">Axentia</h3>
          <p className="text-sm text-gray-300">
            We design and deploy intelligent agents to automate and scale your business from integrations to interactions.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#about" className="hover:text-white transition">About Us</a></li>
            <li><a href="#services" className="hover:text-white transition">Services</a></li>
            <li><a href="#faq" className="hover:text-white transition">FAQ</a></li>
            <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact / Socials */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Connect with Us</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="flex items-center gap-2"><Phone size={16} /> +234 000 000 0000</li>
            <li className="flex items-center gap-2"><Mail size={16} /> hello@axentia.com</li>
          </ul>
          <div className="flex items-center gap-4 mt-4">
            <a href="#" className="hover:text-blue-300"><FaFacebook size={20} /></a>
            <a href="#" className="hover:text-pink-400"><FaInstagram size={20} /></a>
            <a href="#" className="hover:text-red-400"><FaYoutube size={20} /></a>
            <a href="#" className="hover:text-blue-400"><FaTelegram size={20} /></a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center text-sm text-gray-400 mt-10">
        &copy; {new Date().getFullYear()} Axentia. All rights reserved.
      </div>
    </footer>
  );
}
