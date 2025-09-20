import React, { useState } from 'react';
import {
  FaUserGraduate,
  FaUserTie,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedin,
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaPaperPlane,
  FaDownload
} from 'react-icons/fa';

const Contact = () => {
  const [activeForm, setActiveForm] = useState('student');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Whether you're a student exploring opportunities or a candidate seeking your next role,
            we're here to help you succeed in your career journey.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column - Contact Information */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-8 sticky top-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-yellow-100 p-3 rounded-full mr-4">
                    <FaPhone className="text-yellow-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Phone</h3>
                    <p className="text-gray-600">+91 878 860 3290</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-yellow-100 p-3 rounded-full mr-4">
                    <FaEnvelope className="text-yellow-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600">info@zeusmanpower.com</p>
                    <p className="text-gray-600">info@zeusmanpower.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-yellow-100 p-3 rounded-full mr-4">
                    <FaMapMarkerAlt className="text-yellow-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Address</h3>
                    <p className="text-gray-600"> Zeusmanpower Services Pvt. Ltd., K.P. Stellar,</p>
                    <p className="text-gray-600"> NIBM Road, Near Royal Heritage Mall, Pune – 411060</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="bg-gray-100 text-gray-700 p-3 rounded-full hover:bg-yellow-100 hover:text-yellow-600 transition-colors">
                    <FaLinkedin className="text-lg" />
                  </a>
                  <a href="#" className="bg-gray-100 text-gray-700 p-3 rounded-full hover:bg-yellow-100 hover:text-yellow-600 transition-colors">
                    <FaTwitter className="text-lg" />
                  </a>
                  <a href="#" className="bg-gray-100 text-gray-700 p-3 rounded-full hover:bg-yellow-100 hover:text-yellow-600 transition-colors">
                    <FaFacebookF className="text-lg" />
                  </a>
                  <a href="#" className="bg-gray-100 text-gray-700 p-3 rounded-full hover:bg-yellow-100 hover:text-yellow-600 transition-colors">
                    <FaInstagram className="text-lg" />
                  </a>
                </div>
              </div>

              {/* Download Resume Template */}
              <div className="mt-8 bg-yellow-50 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Need a Resume Template?</h3>
                <p className="text-gray-600 text-sm mb-4">Download our professionally designed resume template to get started.</p>
                <button className="w-full bg-yellow-500 text-gray-900 py-2.5 px-4 rounded-lg font-medium hover:bg-yellow-600 transition-colors flex items-center justify-center">
                  <FaDownload className="mr-2" />
                  Download Template
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - Forms */}
          <div className="lg:col-span-2">
            {/* Form Selection Tabs */}
            <div className="flex mb-8 bg-white rounded-xl shadow-md overflow-hidden">
              <button
                onClick={() => setActiveForm('student')}
                className={`flex-1 py-4 px-6 text-center font-medium flex items-center justify-center ${activeForm === 'student' ? 'bg-yellow-500 text-gray-900' : 'bg-gray-100 text-gray-700'}`}
              >
                <FaUserGraduate className="mr-2" />
                Student Form
              </button>
              <button
                onClick={() => setActiveForm('candidate')}
                className={`flex-1 py-4 px-6 text-center font-medium flex items-center justify-center ${activeForm === 'candidate' ? 'bg-yellow-500 text-gray-900' : 'bg-gray-100 text-gray-700'}`}
              >
                <FaUserTie className="mr-2" />
                Candidate Form
              </button>
            </div>

            {/* Success Message */}
            {isSubmitted && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg mb-6 flex items-center">
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Thank you! Your form has been submitted successfully. We'll contact you shortly.</span>
              </div>
            )}

            {/* Student Form */}
            {activeForm === 'student' && (
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <FaUserGraduate className="text-blue-600 text-2xl" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">Student Opportunity Form</h2>
                    <p className="text-gray-600">For students seeking internships, training, or entry-level positions</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                      <input
                        type="email"
                        required
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">University/College *</label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Field of Study *</label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Expected Graduation Year *</label>
                      <select className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                        <option value="">Select Year</option>
                        <option value="2023">2023</option>
                        <option value="2024">2024</option>
                        <option value="2025">2025</option>
                        <option value="2026">2026</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Area of Interest *</label>
                    <select className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                      <option value="">Select Interest</option>
                      <option value="internship">Internship</option>
                      <option value="training">Training Program</option>
                      <option value="entry-level">Entry-Level Position</option>
                      <option value="apprenticeship">Apprenticeship</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Career Goals & Objectives</label>
                    <textarea
                      rows="3"
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    ></textarea>
                  </div>

                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="student-resume"
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label htmlFor="student-resume" className="ml-2 block text-sm text-gray-700">
                      I have a resume/CV to share
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center"
                  >
                    <FaPaperPlane className="mr-2" />
                    Submit Student Form
                  </button>
                </form>
              </div>
            )}

            {/* Candidate Form */}
            {activeForm === 'candidate' && (
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-purple-100 p-3 rounded-full mr-4">
                    <FaUserTie className="text-purple-600 text-2xl" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">Professional Candidate Form</h2>
                    <p className="text-gray-600">For experienced professionals seeking new career opportunities</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                      <input
                        type="email"
                        required
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Current Position</label>
                      <input
                        type="text"
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Total Years of Experience *</label>
                      <select className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500">
                        <option value="">Select Experience</option>
                        <option value="0-2">0-2 years</option>
                        <option value="3-5">3-5 years</option>
                        <option value="6-10">6-10 years</option>
                        <option value="10+">10+ years</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Industry *</label>
                      <select className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500">
                        <option value="">Select Industry</option>
                        <option value="it">Information Technology</option>
                        <option value="finance">Finance & Banking</option>
                        <option value="healthcare">Healthcare</option>
                        <option value="manufacturing">Manufacturing</option>
                        <option value="retail">Retail</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Key Skills & Expertise *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Project Management, JavaScript, Digital Marketing"
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Desired Role/Position</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Current Resume/CV *</label>
                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg">
                      <div className="space-y-1 text-center">
                        <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                          <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <div className="flex text-sm text-gray-600">
                          <label className="relative cursor-pointer bg-white rounded-md font-medium text-purple-600 hover:text-purple-500 focus-within:outline-none">
                            <span>Upload a file</span>
                            <input type="file" className="sr-only" />
                          </label>
                          <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs text-gray-500">PDF, DOC, DOCX up to 10MB</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="job-alerts"
                      className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                    />
                    <label htmlFor="job-alerts" className="ml-2 block text-sm text-gray-700">
                      Send me job alerts matching my profile
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-yellow-400 text-white py-3 px-4 rounded-lg font-medium hover:bg-yellow-500 transition-colors flex items-center justify-center"
                  >
                    <FaPaperPlane className="mr-2" />
                    Submit Candidate Profile
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;