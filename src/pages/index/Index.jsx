import React, { Fragment } from "react";
import Hero from "./Hero";
import Navbar from "../../components/Navbar";
import Faq from "../../components/Faq";
import Footer from "../../components/Footer";
import Testimonials from "../../components/Testimonials";
import CallToAction from "../../components/CallToAction";
import CTA from "../../components/CTA";

export default function Index() {
  return (
    <div className=" bg-gradient-to-br from-black via-blue-900 to-blue-800 ">
      <Navbar />
      <Hero />
     <h1 className="sr-only text-white/20 text-xs">AI Agents for Business Automation, Slack bot for business automation, Custom AI chatbot development, WhatsApp automation for business, AI automation agency in Abuja, Intelligent support automation, Global AI assistant provider, AI-powered workflow automation, Business process automation using AI, Conversational AI agents, Lead generation AI bots</h1>

    
<CTA />
      <CallToAction />
      <Testimonials />
      <Faq />
      <Footer />
    </div>
  );
}
