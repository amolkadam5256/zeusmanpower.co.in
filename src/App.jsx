// src/App.jsx
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Suspense, lazy } from "react";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Loader from "./Components/Loader";
import ZeusEnquiryForm from "./Components/ZeusEnquiryForm";

// Lazy-load pages
const Home = lazy(() => import("./pages/Home"));  

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Home/>
      <ZeusEnquiryForm/>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Suspense fallback={<Loader />}>
        <AnimatedRoutes />
      </Suspense>
      <Footer />
    </BrowserRouter>
  );
}
