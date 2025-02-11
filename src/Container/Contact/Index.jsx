import React from "react";

const Contact = () => {
  return (
    <div className="bg-gray-100 text-gray-800 font-sans">
      {/* Hero Section */}
      <section className="bg-yellow-500 text-white py-16 text-center">
        <h1 className="text-5xl font-bold">Contact Me</h1>
        <p className="text-xl mt-4">Let's get in touch for opportunities and collaborations</p>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-white text-center px-4">
        <h2 className="text-3xl font-semibold mb-6">Get in Touch</h2>
        <form className="max-w-2xl mx-auto bg-gray-100 p-6 rounded-lg shadow-md">
          <div className="mb-4">
            <label className="block text-left font-semibold">Name</label>
            <input
              type="text"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-left font-semibold">Email</label>
            <input
              type="email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="Your Email"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-left font-semibold">Message</label>
            <textarea
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              rows="5"
              placeholder="Your Message"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-yellow-500 text-white px-6 py-3 rounded-lg hover:bg-yellow-600 transition"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gray-100 text-center px-4">
        <h2 className="text-3xl font-semibold mb-6">Other Ways to Contact Me</h2>
        <p className="text-lg">📞 9717063108</p>
        <p className="text-lg">📧 <a href="mailto:aojha105@gmail.com" className="text-yellow-500 hover:underline">aojha105@gmail.com</a></p>
        <p className="text-lg">🔗 <a href="https://www.linkedin.com/in/alok-kumar-ojha-53b4881a4/" target="_blank" className="text-yellow-500 hover:underline">LinkedIn</a></p>
        <p className="text-lg">🔗 <a href="https://github.com/Alokkumarojha" target="_blank" className="text-yellow-500 hover:underline">GitHub</a></p>
      </section>

      {/* Footer */}
      
    </div>
  );
};

export default Contact;
