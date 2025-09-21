import React, { useState, useEffect } from "react";
import { IoMdAddCircle } from "react-icons/io";
import { FaGraduationCap, FaUserTie, FaBriefcase, FaChartLine, FaArrowRight } from "react-icons/fa";
import Images from "../../assets/images/images";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="home"
      className="relative overflow-hidden min-h-[92vh] flex items-center px-2 md:px-1 bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100"
    >
      {/* Background Image with Creative Effects */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${Images.HumanResourse})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-indigo-900/70"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-transparent to-transparent"></div>
          
          {/* Animated Shapes */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-yellow-400/10 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-blue-400/10 rounded-full filter blur-3xl animate-pulse" style={{animationDelay: '1000ms'}}></div>
        </div>
      </div>

      <div className="relative z-10 w-full flex flex-col lg:flex-row items-center">
        {/* Text Content with Enhanced Design */}
        <div className={`w-full lg:w-1/2 text-left text-white space-y-6 p-8 rounded-lg transition-all duration-1000 ease-out ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="inline-block px-4 py-1 bg-yellow-400/20 backdrop-blur-sm rounded-full border border-yellow-400/30 mb-4">
            <span className="text-yellow-400 text-sm font-semibold">Transforming Careers Since 2020</span>
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold ">
            Welcome to <span className="text-yellow-300 relative">
              Zeusmanpower
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-yellow-400 transform scale-x-0 origin-left transition-transform duration-1000 group-hover:scale-x-100"></span>
            </span>
          </h1>
          
          <p className="text-md md:text-lg text-gray-200 leading-relaxed">
            Your trusted partner connecting talent with opportunity. We provide innovative workforce and placement solutions that help businesses grow and people build successful careers.
          </p>

          {/* Animated Key Features */}
          <div className="grid grid-cols-2 gap-4 mt-8">
            {[
              { icon: <FaUserTie className="text-yellow-400 text-xl" />, text: "Career Counseling" },
              { icon: <FaBriefcase className="text-yellow-400 text-xl" />, text: "Job Placements" },
              { icon: <FaGraduationCap className="text-yellow-400 text-xl" />, text: "Skill Training" },
              { icon: <FaChartLine className="text-yellow-400 text-xl" />, text: "Career Growth" }
            ].map((feature, index) => (
              <div 
                key={index}
                className="flex items-center bg-white/5 backdrop-blur-sm p-3 rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300 hover:translate-y-1"
              >
                <span className="mr-3">{feature.icon}</span>
                <span className="text-sm md:text-base">{feature.text}</span>
              </div>
            ))}
          </div>

          {/* Enhanced Action Buttons */}
          <div className="flex flex-wrap gap-4 mt-8">
            <button
              onClick={() => scrollToSection("courses")}
              className="group relative inline-flex items-center bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold px-8 py-4 transition-all duration-300 hover:scale-105 shadow-lg rounded-lg overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                Explore Courses
                <IoMdAddCircle className="ml-2 text-xl group-hover:translate-x-1 transition-transform" />
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </button>
            
            <button
              onClick={() => scrollToSection("placement")}
              className="group relative inline-flex items-center bg-transparent hover:bg-white/10 text-white font-semibold px-8 py-4 transition-all duration-300 hover:scale-105 shadow-md border border-white/30 hover:border-white/50 rounded-lg overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                Placement Services
                <FaArrowRight className="ml-2 text-sm group-hover:translate-x-1 transition-transform" />
              </span>
              <span className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </button>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="w-full lg:w-1/2 flex justify-center items-center p-8">
          <div className="relative w-full max-w-md">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-700">
              <img 
                src={Images.HeroSide} 
                alt="Career Success" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 "></div>
            </div>
            
            {/* Floating elements around the image */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400/20 rounded-full backdrop-blur-sm border border-yellow-400/30 animate-bounce" style={{animationDuration: '3s'}}></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-400/20 rounded-full backdrop-blur-sm border border-blue-400/30 animate-bounce" style={{animationDuration: '3s', animationDelay: '1.5s'}}></div>
            
            {/* Stats badge on image */}
            <div className="absolute -bottom-5 right-8 bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20 text-center shadow-xl z-20">
              <div className="text-2xl font-bold text-yellow-400">500+</div>
              <div className="text-white text-xs mt-1">Successful Placements</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-yellow-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-yellow-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;