import React, { useState } from 'react';
import {
    FaUsers, FaUserTie, FaSearchDollar, FaFileContract,
    FaHandHoldingUsd, FaCogs, FaSyncAlt, FaGraduationCap,
    FaSignOutAlt, FaBriefcase, FaLaptopCode, FaServer,
    FaCloud, FaCog, FaWrench, FaHardHat, FaTools,
    FaChartLine, FaBookOpen, FaGlobe, FaEnvelope, FaHeadset,
    FaUniversity, FaHandshake, FaClipboardList, FaUserCheck,
    FaBalanceScale, FaChartBar, FaBullseye, FaRocket,
    FaLightbulb, FaShieldAlt, FaNetworkWired, FaUserFriends,
    FaUserPlus, FaUserGraduate, FaUserCog, FaUserMd,
    FaUserShield, FaUserNinja, FaUserAlt, FaIdCard,
    FaRegHandshake, FaMoneyBillWave, FaClock, FaAward
} from 'react-icons/fa';

const HRConsultancyServices = () => {
    const [activeCategory, setActiveCategory] = useState('all');
    const [hoveredService, setHoveredService] = useState(null);

    const services = [
        // Recruitment & Staffing
        {
            id: 1,
            title: 'Permanent Recruitment',
            category: 'recruitment',
            icon: <FaUserTie className="text-yellow-400 text-3xl" />,
            description: 'End-to-end recruitment solutions for permanent positions across all industries and levels.'
        },
        {
            id: 2,
            title: 'Executive Search',
            category: 'recruitment',
            icon: <FaSearchDollar className="text-yellow-400 text-3xl" />,
            description: 'Finding and placing C-level executives and senior leadership talent.'
        },
        {
            id: 3,
            title: 'Contract Staffing',
            category: 'recruitment',
            icon: <FaFileContract className="text-yellow-400 text-3xl" />,
            description: 'Flexible staffing solutions for temporary, contract, and project-based needs.'
        },
        {
            id: 4,
            title: 'Bulk Hiring',
            category: 'recruitment',
            icon: <FaUsers className="text-yellow-400 text-3xl" />,
            description: 'High-volume recruitment for large-scale business expansions and new projects.'
        },
        {
            id: 5,
            title: 'Recruitment Process Outsourcing (RPO)',
            category: 'recruitment',
            icon: <FaClipboardList className="text-yellow-400 text-3xl" />,
            description: 'Comprehensive management of the entire recruitment process for organizations.'
        },

        // Talent Management
        {
            id: 6,
            title: 'Talent Acquisition',
            category: 'talent',
            icon: <FaUserPlus className="text-yellow-400 text-3xl" />,
            description: 'Strategic approach to identifying, attracting, and onboarding top talent.'
        },
        {
            id: 7,
            title: 'Talent Management',
            category: 'talent',
            icon: <FaUserCog className="text-yellow-400 text-3xl" />,
            description: 'End-to-end solutions for managing and retaining your organization\'s talent.'
        },
        {
            id: 8,
            title: 'Succession Planning',
            category: 'talent',
            icon: <FaUserCheck className="text-yellow-400 text-3xl" />,
            description: 'Developing a pipeline of future leaders to ensure business continuity.'
        },
        {
            id: 9,
            title: 'Competency Mapping',
            category: 'talent',
            icon: <FaBullseye className="text-yellow-400 text-3xl" />,
            description: 'Identifying key competencies for roles and assessing candidates against them.'
        },

        // HR Operations
        {
            id: 10,
            title: 'Payroll Management',
            category: 'operations',
            icon: <FaMoneyBillWave className="text-yellow-400 text-3xl" />,
            description: 'End-to-end payroll processing, tax compliance, and reporting services.'
        },
        {
            id: 11,
            title: 'HR Compliance',
            category: 'operations',
            icon: <FaBalanceScale className="text-yellow-400 text-3xl" />,
            description: 'Ensuring your HR practices comply with local, state, and federal regulations.'
        },
        {
            id: 12,
            title: 'HR Policy Development',
            category: 'operations',
            icon: <FaClipboardList className="text-yellow-400 text-3xl" />,
            description: 'Creating comprehensive HR policies tailored to your organizational needs.'
        },
        {
            id: 13,
            title: 'Employee Handbook Design',
            category: 'operations',
            icon: <FaBookOpen className="text-yellow-400 text-3xl" />,
            description: 'Developing customized employee handbooks that reflect your company culture.'
        },

        // Training & Development
        {
            id: 14,
            title: 'Leadership Development',
            category: 'training',
            icon: <FaGraduationCap className="text-yellow-400 text-3xl" />,
            description: 'Programs to develop leadership capabilities at all organizational levels.'
        },
        {
            id: 15,
            title: 'Corporate Training',
            category: 'training',
            icon: <FaUniversity className="text-yellow-400 text-3xl" />,
            description: 'Customized training programs to enhance employee skills and productivity.'
        },
        {
            id: 16,
            title: 'Soft Skills Training',
            category: 'training',
            icon: <FaUserFriends className="text-yellow-400 text-3xl" />,
            description: 'Training in communication, teamwork, and other essential workplace skills.'
        },
        {
            id: 17,
            title: 'Technical Training',
            category: 'training',
            icon: <FaLaptopCode className="text-yellow-400 text-3xl" />,
            description: 'Specialized training in technical skills required for specific roles.'
        },

        // Consulting & Advisory
        {
            id: 18,
            title: 'HR Transformation',
            category: 'consulting',
            icon: <FaSyncAlt className="text-yellow-400 text-3xl" />,
            description: 'Transforming HR functions to align with business objectives and digital trends.'
        },
        {
            id: 19,
            title: 'Organizational Design',
            category: 'consulting',
            icon: <FaNetworkWired className="text-yellow-400 text-3xl" />,
            description: 'Designing organizational structures for optimal efficiency and effectiveness.'
        },
        {
            id: 20,
            title: 'Compensation & Benefits',
            category: 'consulting',
            icon: <FaChartBar className="text-yellow-400 text-3xl" />,
            description: 'Designing competitive compensation and benefits packages to attract and retain talent.'
        },
        {
            id: 21,
            title: 'Performance Management',
            category: 'consulting',
            icon: <FaChartLine className="text-yellow-400 text-3xl" />,
            description: 'Developing performance management systems that drive employee engagement and results.'
        },

        // Specialized Services
        {
            id: 22,
            title: 'Outplacement Services',
            category: 'specialized',
            icon: <FaSignOutAlt className="text-yellow-400 text-3xl" />,
            description: 'Supporting transitioning employees with career guidance and job search assistance.'
        },
        {
            id: 23,
            title: 'Career Transition Services',
            category: 'specialized',
            icon: <FaBriefcase className="text-yellow-400 text-3xl" />,
            description: 'Helping employees navigate career changes within or outside the organization.'
        },
        {
            id: 24,
            title: 'Diversity & Inclusion',
            category: 'specialized',
            icon: <FaUserFriends className="text-yellow-400 text-3xl" />,
            description: 'Developing strategies to create diverse and inclusive workplace environments.'
        },
        {
            id: 25,
            title: 'Employer Branding',
            category: 'specialized',
            icon: <FaAward className="text-yellow-400 text-3xl" />,
            description: 'Building and promoting your organization as an employer of choice.'
        },

        // Technology Solutions
        {
            id: 26,
            title: 'HR Technology Implementation',
            category: 'technology',
            icon: <FaCogs className="text-yellow-400 text-3xl" />,
            description: 'Implementing HRIS, ATS, and other HR technology solutions.'
        },
        {
            id: 27,
            title: 'HR Analytics',
            category: 'technology',
            icon: <FaChartBar className="text-yellow-400 text-3xl" />,
            description: 'Leveraging data analytics to make informed HR and business decisions.'
        },
        {
            id: 28,
            title: 'Digital HR Transformation',
            category: 'technology',
            icon: <FaRocket className="text-yellow-400 text-3xl" />,
            description: 'Modernizing HR processes through digital technologies and automation.'
        }
    ];

    const categories = [
        { id: 'all', name: 'All Services' },
        { id: 'recruitment', name: 'Recruitment & Staffing' },
        { id: 'talent', name: 'Talent Management' },
        { id: 'operations', name: 'HR Operations' },
        { id: 'training', name: 'Training & Development' },
        { id: 'consulting', name: 'HR Consulting' },
        { id: 'specialized', name: 'Specialized Services' },
        { id: 'technology', name: 'HR Technology' }
    ];

    const filteredServices = activeCategory === 'all'
        ? services  
        : services.filter(service => service.category === activeCategory);

    return (
        <div className="min-h-screen  py-12 px-4 sm:px-6 lg:px-8" id="services">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Comprehensive HR Consultancy Services</h1>
                    <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                        Zeusmanpower  offers end-to-end HR solutions that empower organizations to attract, develop, and retain top talent.
                        Our comprehensive services cover every aspect of human resource management and workforce optimization.
                    </p>
                </div>

                {/* Stats Banner */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
                    <div className="bg-gray-100 rounded-lg p-6 text-center shadow-md">
                        <div className="text-3xl font-bold text-gray-900">100+</div>
                        <div className="text-gray-800 mt-1">Companies Served</div>
                    </div>
                    <div className="bg-gray-100 rounded-lg p-6 text-center shadow-md">
                        <div className="text-3xl font-bold text-gray-900">5000+</div>
                        <div className="text-gray-800 mt-1">Candidates Placed</div>
                    </div>
                    <div className="bg-gray-100 rounded-lg p-6 text-center shadow-md">
                        <div className="text-3xl font-bold text-gray-900">95%</div>
                        <div className="text-gray-800 mt-1">Client Retention Rate</div>
                    </div>
                    <div className="bg-gray-100 rounded-lg p-6 text-center shadow-md">
                        <div className="text-3xl font-bold text-gray-900">10+</div>
                        <div className="text-gray-800 mt-1">Years Experience</div>
                    </div>
                </div>



                {/* Category Filters */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {categories.map(category => (
                        <button
                            key={category.id}
                            onClick={() => setActiveCategory(category.id)}
                            className={`px-5 py-2.5 rounded-full font-medium transition-all duration-300 ${activeCategory === category.id
                                    ? 'bg-yellow-400 text-gray-900 shadow-md'
                                    : 'bg-white text-gray-700 border border-gray-200 hover:bg-yellow-50'
                                }`}
                        >
                            {category.name}
                        </button>
                    ))}
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {filteredServices.map(service => (
                        <div
                            key={service.id}
                            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                            onMouseEnter={() => setHoveredService(service.id)}
                            onMouseLeave={() => setHoveredService(null)}
                        >
                            <div className="p-6">
                                <div className={`mb-4 p-3 rounded-lg inline-block ${hoveredService === service.id ? 'bg-yellow-100' : 'bg-gray-100'}`}>
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                                <p className="text-gray-600 text-sm">{service.description}</p>
                            </div>
                            <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
                                <button className="text-yellow-600 font-medium flex items-center gap-2 hover:text-yellow-700 transition-colors text-sm">
                                    Learn more
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Process Section */}
                <div className="mb-20">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our HR Consulting Process</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        <div className="bg-white p-6 rounded-xl shadow-md text-center">
                            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <FaClipboardList className="text-yellow-600 text-2xl" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">Assessment</h3>
                            <p className="text-gray-600 text-sm">We analyze your current HR challenges and organizational needs</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-md text-center">
                            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <FaLightbulb className="text-yellow-600 text-2xl" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">Strategy</h3>
                            <p className="text-gray-600 text-sm">We develop customized HR solutions tailored to your business</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-md text-center">
                            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <FaCogs className="text-yellow-600 text-2xl" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">Implementation</h3>
                            <p className="text-gray-600 text-sm">We execute the plan with precision and attention to detail</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-md text-center">
                            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <FaChartLine className="text-yellow-600 text-2xl" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">Optimization</h3>
                            <p className="text-gray-600 text-sm">We continuously monitor and refine for ongoing improvement</p>
                        </div>
                    </div>
                </div>

                {/* Call to Action Section */}
                <div className=" p-10 text-center text-gray-900  mb-16">
                    <h2 className="text-3xl font-bold mb-4">Transform Your HR Function</h2>
                    <p className="text-lg mb-6 max-w-3xl mx-auto">
                        Our expert consultants are ready to help you build a world-class HR strategy that drives business growth and employee engagement.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <button className="bg-gray-900 text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors shadow-md">
                            Request Consultation
                        </button>
                        <button className="bg-white text-gray-900 px-8 py-3 rounded-lg font-medium border border-yellow-600 hover:bg-yellow-50 transition-colors shadow-md">
                            Download Brochure
                        </button>
                    </div>
                </div>




            </div>
        </div>
    );
};

export default HRConsultancyServices;