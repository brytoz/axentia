import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ContactPage from "../pages/contact/ContactPage";
import Index from "../pages/index";

export default function Stack() {
  return (
    <Router>
      <Routes>
        <Route index element={<Index />} />
        <Route path="*" element={<Error />} />
        <Route path="/contact-us" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}
