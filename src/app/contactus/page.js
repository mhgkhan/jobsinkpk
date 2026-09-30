import React from 'react'
import { FaFacebook } from 'react-icons/fa';
import { FaWhatsapp, FaEnvelope, FaPaperPlane, FaRegClock } from 'react-icons/fa6';


const page = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="mx-auto">

        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl tracking-tight">
            Get In Touch
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions about job openings, need help with your application, or want to advertise with us? Reach out and we'll get back to you as soon as possible.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center mx-auto">Contact Info</h2>


    <div className="flex items-center justify-center flex-wrap gap-8 w-full h-auto">
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



        {/* Facebook Card */}
        <a
          href="https://www.facebook.com/share/1DBzpZbG8S/"
          className="flex items-center p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 group"
        >
          <div className="p-3 bg-blue-50 text-blue-600 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
            <FaFacebook size={22} />
          </div>
          <div className="ml-4 overflow-hidden">
            <p className="text-sm font-medium text-gray-500">Facebook Page</p>
            <p className="text-base font-semibold text-gray-900 truncate">JOBS In KPK</p>
          </div>
        </a>



    </div>


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
    </div>
  )
}

export default page
