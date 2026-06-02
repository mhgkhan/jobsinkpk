import React from 'react';
import { FaWhatsapp, FaEnvelope, FaPaperPlane, FaRegClock } from 'react-icons/fa6';

export const metadata = {
    title: "Contact Us | Jobsinkpk.com",
    description: "Get in touch with JobsInKPK. Have questions about job listings, advertising, or need support? Contact us via Email or WhatsApp.",
}

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 font-sans">
            <div className="max-w-5xl mx-auto">
                
                {/* Header Section */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl tracking-tight">
                        Get In Touch
                    </h1>
                    <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                        Have questions about job openings, need help with your application, or want to advertise with us? Reach out and we'll get back to you as soon as possible.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    
                    {/* Quick Contact Info Cards */}
                    <div className="md:col-span-1 space-y-4">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Info</h2>
                        
                        {/* WhatsApp Card */}
                        <a 
                            href="https://wa.me/923275575094" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="flex items-center p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 group"
                        >
                            <div className="p-3 bg-green-50 text-green-600 rounded-lg group-hover:bg-green-600 group-hover:text-white transition-colors duration-300">
                                <FaWhatsapp size={24} />
                            </div>
                            <div className="ml-4">
                                <p className="text-sm font-medium text-gray-500">WhatsApp</p>
                                <p className="text-base font-semibold text-gray-900">+92 327 5575094</p>
                            </div>
                        </a>

                        {/* Email Card */}
                        <a 
                            href="mailto:muhammadhasnainghazna@gmail.com" 
                            className="flex items-center p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 group"
                        >
                            <div className="p-3 bg-blue-50 text-blue-600 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                                <FaEnvelope size={22} />
                            </div>
                            <div className="ml-4 overflow-hidden">
                                <p className="text-sm font-medium text-gray-500">Email Address</p>
                                <p className="text-base font-semibold text-gray-900 truncate">muhammadhasnainghazna@gmail.com</p>
                            </div>
                        </a>

                        {/* Additional Quick Info */}
                        <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-100 mt-6">
                            <div className="flex items-start space-x-3 text-emerald-800">
                                <FaRegClock size={18} className="mt-1 flex-shrink-0" />
                                <div>
                                    <h4 className="font-semibold text-sm">Response Time</h4>
                                    <p className="text-xs mt-0.5 text-emerald-700">We typically reply within 24 hours on business days.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form Section */}
                    <div className="md:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">Send a Message</h2>
                        <p className="text-sm text-gray-500 mb-6">Fill out this quick form, and our team will get back to you shortly.</p>
                        
                        {/* Pure HTML Form Structure (No JS) */}
                        <form action="#" method="POST" className="space-y-5">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                                    <input 
                                        type="text" 
                                        name="name" 
                                        id="name" 
                                        required 
                                        placeholder="John Doe"
                                        className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all text-sm text-gray-900" 
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                                    <input 
                                        type="email" 
                                        name="email" 
                                        id="email" 
                                        required 
                                        placeholder="name@example.com"
                                        className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all text-sm text-gray-900" 
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                                <input 
                                    type="text" 
                                    name="subject" 
                                    id="subject" 
                                    required 
                                    placeholder="Job Post Query / Advertising / Feedback"
                                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all text-sm text-gray-900" 
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                                <textarea 
                                    name="message" 
                                    id="message" 
                                    rows="5" 
                                    required 
                                    placeholder="Type your message here..."
                                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all text-sm text-gray-900 resize-none"
                                ></textarea>
                            </div>

                            <div>
                                <button 
                                    type="submit" 
                                    className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 border border-transparent text-sm font-medium rounded-lg text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-colors cursor-pointer shadow-sm gap-2"
                                >
                                    <span>Send Message</span>
                                    <FaPaperPlane size={14} />
                                </button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
}