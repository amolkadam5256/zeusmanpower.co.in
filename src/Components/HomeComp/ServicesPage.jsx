import React, { useState } from 'react';
import { 
  FaUsers, FaUserTie, FaSearchDollar, FaFileContract, 
  FaHandHoldingUsd, FaCogs, FaSyncAlt, FaGraduationCap,
  FaSignOutAlt, FaBriefcase, FaLaptopCode, FaServer,
  FaCloud, FaCog, FaWrench, FaHardHat, FaTools,
  FaChartLine, FaBookOpen, FaGlobe, FaEnvelope
} from 'react-icons/fa';

const ServicesPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredService, setHoveredService] = useState(null);

  const services = [
    {
      id: 1,
      title: 'Permanent Recruitment',
      category: 'workforce',
      icon: <FaUserTie className="text-yellow-400 text-3xl" />,
      description: 'End-to-end recruitment solutions for permanent positions across industries.'
    },
    {
      id: 2,
      title: 'Recruitment Process Outsourcing',
      category: 'workforce',
      icon: <FaUsers className="text-yellow-400 text-3xl" />,
      description: 'Comprehensive RPO solutions to streamline your hiring process.'
    },
    {
      id: 3,
      title: 'Executive Search',
      category: 'workforce',
      icon: <FaSearchDollar className="text-yellow-400 text-3xl" />,
      description: 'Finding and placing top-level executives for leadership roles.'
    },
    {
      id: 4,
      title: 'Contract Staffing',
      category: 'workforce',
      icon: <FaFileContract className="text-yellow-400 text-3xl" />,
      description: 'Flexible staffing solutions for project-based or temporary needs.'
    },
    {
      id: 5,
      title: 'Talent Based Outsourcing',
      category: 'workforce',
      icon: <FaHandHoldingUsd className="text-yellow-400 text-3xl" />,
      description: 'Outsourcing solutions focused on providing specialized talent.'
    },
    {
      id: 6,
      title: 'Payroll Management System',
      category: 'workforce',
      icon: <FaCogs className="text-yellow-400 text-3xl" />,
      description: 'Comprehensive payroll processing and management services.'
    },
    {
      id: 7,
      title: 'Workforce Transformation',
      category: 'transformation',
      icon: <FaSyncAlt className="text-yellow-400 text-3xl" />,
      description: 'Transforming your workforce to meet evolving business needs.'
    },
    {
      id: 8,
      title: 'Leadership Development',
      category: 'transformation',
      icon: <FaGraduationCap className="text-yellow-400 text-3xl" />,
      description: 'Developing leadership capabilities at all organizational levels.'
    },
    {
      id: 9,
      title: 'Outplacement Services',
      category: 'transformation',
      icon: <FaSignOutAlt className="text-yellow-400 text-3xl" />,
      description: 'Supporting transitioning employees with career guidance.'
    },
    {
      id: 10,
      title: 'Career Management',
      category: 'transformation',
      icon: <FaBriefcase className="text-yellow-400 text-3xl" />,
      description: 'Helping individuals navigate and advance their careers.'
    },
    {
      id: 11,
      title: 'IT Contract Staffing',
      category: 'it',
      icon: <FaLaptopCode className="text-yellow-400 text-3xl" />,
      description: 'Specialized IT professionals for contract-based projects.'
    },
    {
      id: 12,
      title: 'Offshore Delivery Center',
      category: 'it',
      icon: <FaServer className="text-yellow-400 text-3xl" />,
      description: 'Establishing and managing offshore development centers.'
    },
    {
      id: 13,
      title: 'Project Solutions',
      category: 'it',
      icon: <FaCog className="text-yellow-400 text-3xl" />,
      description: 'End-to-end project management and execution services.'
    },
    {
      id: 14,
      title: 'Cloud and Infrastructure',
      category: 'it',
      icon: <FaCloud className="text-yellow-400 text-3xl" />,
      description: 'Cloud migration, management, and infrastructure solutions.'
    },
    {
      id: 15,
      title: 'Vendor Management Services',
      category: 'it',
      icon: <FaChartLine className="text-yellow-400 text-3xl" />,
      description: 'Managing vendor relationships and performance effectively.'
    },
    {
      id: 16,
      title: 'Industrial Engineering Services',
      category: 'engineering',
      icon: <FaHardHat className="text-yellow-400 text-3xl" />,
      description: 'Engineering solutions for industrial operations and processes.'
    },
    {
      id: 17,
      title: 'Annual Maintenance',
      category: 'engineering',
      icon: <FaTools className="text-yellow-400 text-3xl" />,
      description: 'Comprehensive annual maintenance contracts and services.'
    },
    {
      id: 18,
      title: 'Shutdown Services',
      category: 'engineering',
      icon: <FaWrench className="text-yellow-400 text-3xl" />,
      description: 'Specialized services for plant shutdowns and turnarounds.'
    },
    {
      id: 19,
      title: 'Overhauling',
      category: 'engineering',
      icon: <FaCogs className="text-yellow-400 text-3xl" />,
      description: 'Complete overhauling services for machinery and equipment.'
    },
    {
      id: 20,
      title: 'Project Execution',
      category: 'engineering',
      icon: <FaHardHat className="text-yellow-400 text-3xl" />,
      description: 'End-to-end project execution and management services.'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services' },
    { id: 'workforce', name: 'Workforce Solutions' },
    { id: 'transformation', name: 'Workforce Transformation' },
    { id: 'it', name: 'IT Services' },
    { id: 'engineering', name: 'Engineering Services' }
  ];

  const filteredServices = activeCategory === 'all' 
    ? services 
    : services.filter(service => service.category === activeCategory);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            ManpowerGroup offers a comprehensive suite of innovative workforce solutions designed to power your success. 
            Explore our services below to find the perfect solution for your organization.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-yellow-400 text-gray-900 shadow-lg'
                  : 'bg-white text-gray-700 border border-gray-200 hover:bg-yellow-50'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredServices.map(service => (
            <div
              key={service.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
            >
              <div className="p-6">
                <div className={`mb-4 p-3 rounded-lg inline-block ${hoveredService === service.id ? 'bg-yellow-100' : 'bg-gray-100'}`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
              <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
                <button className="text-yellow-600 font-medium flex items-center gap-2 hover:text-yellow-700 transition-colors">
                  Learn more
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Section */}
        <div className="mt-20 bg-yellow-400 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Transform Your Workforce?</h2>
          <p className="text-gray-800 mb-8 max-w-3xl mx-auto">
            Our consultants are ready to help you develop the perfect workforce strategy for your organization's unique needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-gray-900 text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors">
              Contact Us
            </button>
            <button className="bg-white text-gray-900 px-8 py-3 rounded-lg font-medium border border-yellow-500 hover:bg-yellow-50 transition-colors">
              View Case Studies
            </button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white rounded-xl shadow-md">
            <div className="text-5xl font-bold text-yellow-400 mb-2">80%</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Talent Shortage</h3>
            <p className="text-gray-600">of employers in India can't find the talent they need</p>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-md">
            <div className="text-5xl font-bold text-yellow-400 mb-2">70+</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Years of Experience</h3>
            <p className="text-gray-600">in workforce solutions and talent management</p>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-md">
            <div className="text-5xl font-bold text-yellow-400 mb-2">50M+</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">People Connected</h3>
            <p className="text-gray-600">to meaningful employment opportunities worldwide</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;