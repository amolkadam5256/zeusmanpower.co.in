// src/pages/Home.jsx
import { motion } from "framer-motion";
import HeroSection from "../Components/HomeComp/HeroSection";
import Banner from "../Components/HomeComp/Banner";
import About from "../Components/HomeComp/About";
import Testimonials from '../Components/HomeComp/Testimonials'

export default function Home() {
  return (
    <>
    <section className="pt-16 ">
      <HeroSection/>
      <About/>
      <Banner/>
      <Testimonials/>
    </section>
    </>
  );
}
