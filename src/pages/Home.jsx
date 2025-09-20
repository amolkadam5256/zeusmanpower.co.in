// src/pages/Home.jsx
import { motion } from "framer-motion";
import HeroSection from "../Components/HomeComp/HeroSection";
import Banner from "../Components/HomeComp/Banner";
import About from "../Components/HomeComp/About";
import Testimonials from '../Components/HomeComp/Testimonials'
import Contact from "../Components/HomeComp/Contact";
import HRConsultancyServices from "../Components/HomeComp/HRConsultancyServices";

export default function Home() {
  return (
    <>
    <section className="pt-16 ">
      <HeroSection/>
      <About/>
      <HRConsultancyServices/>
      <Banner/>
      <Testimonials/>
      <Contact/>
    </section>
    </>
  );
}
