import React from "react";

function About() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
        <p className="max-w-2xl mx-auto text-lg">
          We are passionate about building modern web applications that make life easier, 
          more productive, and more fun.
        </p>
      </section>

      {/* Mission Section */}
      <section className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
          <p className="text-lg leading-relaxed">
            Our mission is to create digital experiences that empower businesses 
            and individuals to thrive in the modern world. With a strong focus 
            on usability, performance, and design, we deliver solutions that 
            solve real problems.
          </p>
        </div>
        <img
          src="https://source.unsplash.com/600x400/?team,office"
          alt="Team working together"
          className="rounded-2xl shadow-lg"
        />
      </section>

      {/* Values Section */}
      <section className="bg-white py-16 px-6">
        <h2 className="text-3xl font-semibold text-center mb-12">Our Core Values</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="p-6 bg-gray-100 rounded-2xl shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-bold mb-2">Innovation</h3>
            <p>We embrace creativity and new technologies to deliver cutting-edge solutions.</p>
          </div>
          <div className="p-6 bg-gray-100 rounded-2xl shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-bold mb-2">Collaboration</h3>
            <p>Teamwork is at the heart of everything we do, ensuring the best results for our clients.</p>
          </div>
          <div className="p-6 bg-gray-100 rounded-2xl shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-bold mb-2">Integrity</h3>
            <p>We are committed to honesty, transparency, and delivering on our promises.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-4">Want to work with us?</h2>
        <p className="mb-6">Join us on our journey to build amazing digital experiences.</p>
        <button className="px-6 py-3 bg-white text-blue-600 font-medium rounded-lg shadow hover:bg-gray-100 transition">
          Contact Us
        </button>
      </section>
    </div>
  );
}

export default About;
