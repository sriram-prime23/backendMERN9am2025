import React, { useState } from "react";

function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted! 🎉");
    setIsOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Kickstart Your IT Career 🚀
        </h1>
        <p className="max-w-2xl mx-auto text-lg">
          Join our SLA program designed for students to build real-world skills 
          and land high-demand Technical IT Jobs.
        </p>
        <button
          onClick={() => setIsOpen(true)}
          className="mt-6 px-6 py-3 bg-white text-blue-600 font-medium rounded-lg shadow hover:bg-gray-100 transition"
        >
          Enroll Now
        </button>
      </section>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-2xl shadow-lg w-full max-w-md p-6 relative">
            {/* Close button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 text-gray-600 hover:text-red-500 text-xl"
            >
              ×
            </button>

            <h2 className="text-2xl font-bold text-blue-600 mb-4 text-center">
              Enroll Now
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-1">Full Name</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-1">Phone Number</label>
                <input
                  type="tel"
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-1">Course Interested</label>
                <select
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                >
                  <option value="">Select a course</option>
                  <option>Full Stack Development</option>
                  <option>Cloud & DevOps</option>
                  <option>Cybersecurity</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition"
              >
                Submit Application
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Why Join Section */}
      <section className="max-w-6xl mx-auto py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-10">Why Join Our SLA Program?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-bold mb-2">💻 Hands-on Training</h3>
            <p>Learn by building real projects in software, networking, and IT operations.</p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-bold mb-2">🎯 Career-Focused</h3>
            <p>Tailored curriculum for in-demand IT roles with placement assistance.</p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-bold mb-2">🤝 Mentorship</h3>
            <p>Get guided by industry experts to sharpen your technical and soft skills.</p>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="bg-gray-100 py-16 px-6">
        <h2 className="text-3xl font-semibold text-center mb-12">Popular Courses</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="p-6 bg-white rounded-2xl shadow-lg hover:scale-105 transition">
            <h3 className="text-xl font-bold mb-2">Full Stack Development</h3>
            <p>Master frontend & backend technologies with hands-on projects.</p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-lg hover:scale-105 transition">
            <h3 className="text-xl font-bold mb-2">Cloud & DevOps</h3>
            <p>Learn AWS, Docker, CI/CD pipelines, and industry cloud practices.</p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-lg hover:scale-105 transition">
            <h3 className="text-xl font-bold mb-2">Cybersecurity</h3>
            <p>Protect systems & networks while preparing for top certifications.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-4">Ready to Start Your IT Career?</h2>
        <p className="mb-6">Apply today and get trained for tomorrow’s technical jobs.</p>
        <button
          onClick={() => setIsOpen(true)}
          className="px-6 py-3 bg-white text-blue-600 font-medium rounded-lg shadow hover:bg-gray-100 transition"
        >
          Join Now
        </button>
      </section>
    </div>
  );
}

export default Home;
