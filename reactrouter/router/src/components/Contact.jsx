import React from "react";

function Contact() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6 py-12">
      <div className="max-w-5xl w-full grid md:grid-cols-2 gap-12 bg-white p-8 rounded-2xl shadow-lg">
        
        {/* Left Side - Info */}
        <div>
          <h2 className="text-3xl font-bold text-blue-600 mb-4">Get in Touch</h2>
          <p className="text-gray-600 mb-6">
            Have questions, feedback, or want to work together? We’d love to hear from you.
          </p>

          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-800">📍 Address</h3>
              <p className="text-gray-600">123 Web Street, React City, JS 2025</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">📧 Email</h3>
              <p className="text-gray-600">support@myapp.com</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">📞 Phone</h3>
              <p className="text-gray-600">+1 (555) 123-4567</p>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-1">Name</label>
            <input 
              type="text" 
              placeholder="Your Name" 
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Email</label>
            <input 
              type="email" 
              placeholder="Your Email" 
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Message</label>
            <textarea 
              rows="5" 
              placeholder="Write your message here..." 
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            ></textarea>
          </div>

          <button 
            type="submit" 
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
