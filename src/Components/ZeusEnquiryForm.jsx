import React, { useState, useRef, useEffect } from 'react';

const ZeusEnquiryForm = () => {
    const [isOpen, setIsOpen] = useState(true);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const formRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (formRef.current && !formRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Using Web3Forms API
        const formData = new FormData(e.target);

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setIsSubmitted(true);
                setTimeout(() => {
                    setIsOpen(false);
                    setIsSubmitted(false);
                }, 3000);
            } else {
                alert('There was an error submitting your form. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('There was an error submitting your form. Please try again.');
        }
    };

    return (
        <div className="relative">
            {/* Enquiry Tab */}
            <div
                className="fixed -right-14 top-1/2 -translate-y-1/2 bg-yellow-400 text-white font-bold py-2 px-4 cursor-pointer z-40 shadow-md hover:-right-14 transition-all duration-300 rotate-90"
                onClick={() => setIsOpen(true)}
            >
                <span className="tracking-wider">ENQUIRE NOW</span>
            </div>


            {/* Overlay */}
            {isOpen && (
                <div className="fixed inset-0 bg-opacity-50 z-50 flex items-center justify-center p-4 mt-14">
                    <div
                        ref={formRef}
                        className="bg-white rounded-lg w-full max-w-sm overflow-hidden shadow-xl transform transition-all"
                    >
                        {/* Form Header */}
                        <div className="bg-yellow-400 h-2 w-full"></div>
                        <div className="p-5 relative">
                            <button
                                onClick={() => setIsOpen(false)}
                                className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                            </button>

                            <h2 className="text-xl font-bold text-gray-800 mb-1">Get in Touch</h2>
                            <p className="text-sm text-gray-600 mb-4">We'll help you find the perfect talent or opportunity</p>

                            {!isSubmitted ? (
                                <form onSubmit={handleSubmit} className="space-y-3">
                                    <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
                                    <input type="hidden" name="subject" value="New Enquiry from Zeusmanpower Website" />

                                    <div>
                                        <label htmlFor="name" className="block text-xs font-medium text-gray-700 mb-1">
                                            Full Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            required
                                            className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-xs font-medium text-gray-700 mb-1">
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                            className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="phone" className="block text-xs font-medium text-gray-700 mb-1">
                                            Phone Number *
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            required
                                            className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="service" className="block text-xs font-medium text-gray-700 mb-1">
                                            Service Interested In *
                                        </label>
                                        <select
                                            id="service"
                                            name="service"
                                            required
                                            className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400"
                                        >
                                            <option value="">Select a service</option>
                                            <option value="Career Counseling">Career Counseling</option>
                                            <option value="Job Placements">Job Placements</option>
                                            <option value="Skill Training">Skill Training</option>
                                            <option value="Career Growth">Career Growth</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-xs font-medium text-gray-700 mb-1">
                                            Message
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows="2"
                                            className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400"
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full bg-yellow-400 text-white py-2 px-4 text-sm rounded-lg font-medium hover:bg-yellow-500 transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400"
                                    >
                                        Submit Enquiry
                                    </button>
                                </form>
                            ) : (
                                <div className="text-center py-5">
                                    <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                                        <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-800 mb-1">Thank You!</h3>
                                    <p className="text-xs text-gray-600">Your enquiry has been submitted successfully. We'll contact you shortly.</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ZeusEnquiryForm;