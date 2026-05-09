import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import ComingSoonPage from "../pages/ComingSoonPage";
import RequestServicePage from "../pages/RequestServicePage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/coming-soon" element={<ComingSoonPage />} />
      <Route path="/request" element={<RequestServicePage />} />
      <Route path="*" element={<LandingPage />} />
    </Routes>
  );
}

