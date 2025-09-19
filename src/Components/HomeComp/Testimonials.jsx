import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


const testimonials = [
  {
    name: "Amit Kulkarni",
    company: "ABC Manufacturing Pvt. Ltd.",
    date: "Feb 2024",
    image: "images/amit-kulkarni.jpg",
    stars: 5,
    feedback:
      "Zeus Manpower’s recruitment team quickly understood our hiring needs and provided us with highly qualified candidates. The entire process was smooth and efficient.",
  },
  {
    name: "Ganesh Bhonde",
    company: "FreshStart Technologies",
    date: "March 2024",
    image: "images/ganesh-bhonde.jpg",
    stars: 5,
    feedback:
      "I was looking for the right career move, and Zeus Manpower guided me through the entire process. Their support and interview preparation helped me secure my dream job.",
  },
  {
    name: "Anup Magar",
    company: "Global HR Solutions",
    date: "March 2024",
    image: "images/anup-magar.jpg",
    stars: 4.5,
    feedback:
      "We partnered with Zeus Manpower for bulk hiring and HR consultancy. Their timely delivery and quality candidates have strengthened our workforce significantly.",
  },
  {
    name: "Sashikant Bhosle",
    company: "NextGen Logistics",
    date: "April 2024",
    image: "images/sashikant-bhosle.jpg",
    stars: 5,
    feedback:
      "As a job seeker, I found Zeus Manpower’s placement services exceptional. They matched my skills perfectly with the right employer and guided me through onboarding seamlessly.",
  },
  {
    name: "Priya Deshmukh",
    company: "MBA Student, Pune University",
    date: "May 2024",
    image: "images/priya-deshmukh.jpg",
    stars: 5,
    feedback:
      "Being a fresh MBA graduate, I was unsure how to start my career. Zeus Manpower’s campus placement drive helped me secure a position with a reputed MNC within weeks.",
  },
  {
    name: "Rohan Patil",
    company: "Engineering Student, MIT Pune",
    date: "June 2024",
    image: "images/rohan-patil.jpg",
    stars: 5,
    feedback:
      "Thanks to Zeus Manpower’s training and placement assistance, I cracked my first interview and landed a role in a leading IT company even before graduation.",
  },
];



const renderStars = (rating) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;

  return (
    <div className="flex mt-2 gap-1 text-[#F2B90C]" id="about">
      {Array(fullStars)
        .fill()
        .map((_, i) => (
          <svg key={i} className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M9.049.927l2.093 6.435h6.647L12.9 10.862l2.093 6.435L9.05 13.8l-6.043 3.497L5.1 10.862.21 7.362h6.647L9.05.927z" />
          </svg>
        ))}
      {halfStar && (
        <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
          <defs>
            <linearGradient id="half" x1="0" y1="0" x2="100%" y2="0">
              <stop offset="50%" stopColor="#F2B90C" />
              <stop offset="50%" stopColor="transparent" />
            </linearGradient>
          </defs>
          <path
            fill="url(#half)"
            d="M9.049.927l2.093 6.435h6.647L12.9 10.862l2.093 6.435L9.05 13.8l-6.043 3.497L5.1 10.862.21 7.362h6.647L9.05.927z"
          />
        </svg>
      )}
    </div>
  );
};

const Testimonials = () => {
  const swiperRef = useRef(null);

  const handlePrev = () => swiperRef.current?.swiper?.slidePrev();
  const handleNext = () => swiperRef.current?.swiper?.slideNext();

  return (
    <section className=" bg-gray-10 max-w-7xl mx-auto px-6 py-16" data-aos="fade-up" data-aos-duration="3000">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        {/* Left Content */}
        <div className="w-full lg:w-2/5 text-center lg:text-left" data-aos="fade-up" data-aos-duration="1000">
          <span className="text-[#00a3e7] font-semibold text-sm tracking-wider uppercase mb-3 block">Testimonial</span>
          <h2 className="text-4xl font-bold text-[#262324] mb-6 leading-tight">
            324+ Happy Clients Shared Their{" "}
            <span className="bg-gradient-to-tr from-[#00a3e7] to-[#00a3e7] bg-clip-text text-transparent">
              Success Stories
            </span>
          </h2>
          <p className="text-[#4B4033] text-base sm:text-lg max-w-md mx-auto lg:mx-0">
            We help professionals and businesses achieve their goals with expert HR consultancy, recruitment, and placement services. Here’s what our satisfied clients have to say about working with us.
          </p>

          {/* Navigation Buttons */}
          <div className="flex justify-center lg:justify-start mt-10 gap-6">
            <button
              onClick={handlePrev}
              className="w-12 h-12 border-2 border-[#00a3e7] rounded-lg flex items-center justify-center hover:bg-[#00a3e7] transition group"
            >
              <svg
                className="w-6 h-6 text-[#00a3e7] group-hover:text-[#262324]"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M20.9999 12L4.99992 12M9.99992 6L4.70703 11.2929C4.3737 11.6262 4.20703 11.7929 4.20703 12C4.20703 12.2071 4.3737 12.3738 4.70703 12.7071L9.99992 18"></path>
              </svg>
            </button>

            <button
              onClick={handleNext}
              className="w-12 h-12 border-2 border-[#00a3e7] rounded-lg flex items-center justify-center hover:bg-[#00a3e7] transition group"
            >
              <svg
                className="w-6 h-6 text-[#00a3e7] group-hover:text-[#262324]"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M3 12L19 12M14 18L19.2929 12.7071C19.6262 12.3738 19.7929 12.2071 19.7929 12C19.7929 11.7929 19.6262 11.6262 19.2929 11.2929L14 6"></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Swiper Carousel */}
        <div className="w-full lg:w-3/5">
          <Swiper
            ref={swiperRef}
            modules={[Navigation, Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            loop
            className="swiperText"
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="bg-gray-100   text-[#262324] rounded-xl p-6 sm:p-8 shadow-md hover:shadow-xl transition-transform duration-300">
                  <div className="flex items-center gap-5 mb-5">
                    <img
                      className="rounded object-cover w-24 h-24 sm:w-28 sm:h-28 border-4 border-white shadow-md"
                      src={item.image}
                      alt={item.name}
                    />
                    <h3 className="text-xl sm:text-2xl font-semibold">{item.name}</h3>
                  </div>
                  <div className="flex flex-col gap-1 text-left">
                    <p className="text-sm sm:text-base font-medium">{item.company}</p>
                    <p className="text-xs sm:text-sm text-[#735A2C] italic">{item.date}</p>
                    {renderStars(item.stars)}
                    <p className="mt-3 text-base italic">"{item.feedback}"</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
