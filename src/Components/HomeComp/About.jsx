import React, { useEffect, useState } from 'react';
import { IoMdAddCircle } from 'react-icons/io';
import Images from '../../assets/images/images';

const About = () => {
    const [experience, setExperience] = useState(0);
    const [projects, setProjects] = useState(0);
    const [satisfaction, setSatisfaction] = useState(0);

    useEffect(() => {
        const animateCount = (setter, max, speed) => {
            let count = 0;
            const interval = setInterval(() => {
                count++;
                setter(count);
                if (count >= max) clearInterval(interval);
            }, speed);
        };

        animateCount(setExperience, 11, 100); // 11+ years
        animateCount(setProjects, 7, 150);   // 7+ workforce solutions
        animateCount(setSatisfaction, 80, 50); // 80% client satisfaction
    }, []);

    return (
        <>
            <div>
                {/* Section 1 */}
                <section className="py-10 relative bg-white " id="about">
                    <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
                        <div className="w-full justify-start items-center gap-8 grid lg:grid-cols-2 grid-cols-1">
                            <div
                                className="w-full flex-col justify-start lg:items-start items-center gap-10 inline-flex "
                                data-aos="fade-up"
                            >
                                <div className="w-full flex-col justify-start lg:items-start items-center gap-4 flex">
                                    <h2 className="text-gray-900 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                                        Powering Your Success: Job Placement & HR Consultancy
                                    </h2>
                                    <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                                        Zeusmanpower is the world leader in innovative workforce solutions, connecting human potential to the power of business. We help organizations across India find skilled talent and enable individuals to reach their career goals.
                                    </p>
                                    <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                                        Our expertise spans Permanent Recruitment, Recruitment Process Outsourcing (RPO), Contract Staffing, Payroll Management, Executive Search, IT Services, Workforce Transformation, and Leadership Development.
                                    </p>
                                    <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                                        We create impactful HR solutions and career opportunities, ensuring every client and candidate achieves success. Our mission is to deliver quality, innovation, and sustainable workforce management solutions.
                                    </p>
                                </div>

                                <a
                                    href="#contact"
                                    className="inline-flex items-center bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3  transition-transform hover:scale-105 shadow-md"
                                >
                                    Enquire Now
                                    <IoMdAddCircle className="ml-2 text-xl" />
                                </a>
                            </div>

                            <img
                                className="lg:mx-0 mx-auto h-full rounded-3xl object-cover"
                                src={Images.Servces}
                                alt="ZeusmanpowerHR Consultancy Services"
                                data-aos="zoom-in"
                                data-aos-delay="200"
                            />
                        </div>
                    </div>
                </section>

                {/* Stats Section */}
                <section className="py-24 relative bg-white">
                    <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
                        <div className="w-full justify-start items-center gap-12 grid lg:grid-cols-2 grid-cols-1">
                            {/* Images */}
                            <div className="w-full justify-center items-start gap-6 grid sm:grid-cols-2 grid-cols-1 lg:order-first order-last" data-aos="fade-up">
                                <div className="pt-24 lg:justify-center sm:justify-end justify-start items-start gap-2.5 flex">
                                    <img
                                        className="rounded-xl object-cover"
                                        src={Images.HRImage} 
                                        alt="ZeusmanpowerWorkforce Solution"
                                    />
                                </div>
                                <img
                                    className="sm:ml-0 ml-auto rounded-xl object-cover"
                                    src={Images.placment} 
                                    alt="ZeusmanpowerCareer Management"
                                />
                            </div>

                            {/* Text & Counters */}
                            <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex" data-aos="fade-up">
                                <div className="w-full flex-col justify-center items-start gap-8 flex">
                                    <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                                        <h2 className="text-gray-900 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                                            Innovative HR & Workforce Solutions
                                        </h2>
                                        <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                                            Zeusmanpower  offers Permanent Recruitment, Contract Staffing, IT Services, Payroll Management, Leadership Development, Outplacement, and Career Management solutions. We connect millions of individuals with meaningful careers while supporting organizations in achieving critical workforce goals.
                                        </p>
                                    </div>

                                    {/* Counter Section */}
                                    <div className="w-full lg:justify-start justify-center items-center sm:gap-10 gap-5 inline-flex">
                                        <div className="flex-col justify-start items-start inline-flex" data-aos="zoom-up">
                                            <h3 className="text-gray-900 text-4xl font-bold font-manrope leading-normal">{experience}+</h3>
                                            <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                                                Years of Workforce Excellence
                                            </h6>
                                        </div>
                                        <div className="flex-col justify-start items-start inline-flex" data-aos="zoom-up" data-aos-delay="150">
                                            <h4 className="text-gray-900 text-4xl font-bold font-manrope leading-normal">{projects}+</h4>
                                            <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                                                Workforce Solutions Delivered
                                            </h6>
                                        </div>
                                        <div className="flex-col justify-start items-start inline-flex" data-aos="zoom-up" data-aos-delay="300">
                                            <h4 className="text-gray-900 text-4xl font-bold font-manrope leading-normal">{satisfaction}%</h4>
                                            <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                                                Client Satisfaction Across Projects
                                            </h6>
                                        </div>
                                    </div>
                                </div>

                                <a
                                    href="#contact"
                                    className="inline-flex items-center bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-3  transition-transform hover:scale-105 shadow-md justify-center w-full sm:w-fit"
                                    data-aos="fade-up"
                                    data-aos-delay="400"
                                >
                                    <span className="text-sm">Get In Touch</span>
                                    <IoMdAddCircle className="ml-2 text-xl" />
                                </a>

                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default About;
