import React from "react";

const Portfolio = () => {
  return (
    <div className="bg-gray-100 text-gray-800 font-sans">
      {/* Hero Section */}
      <section className="bg-yellow-500 text-white py-20 text-center">
        <h1 className="text-5xl font-bold">Hi, I'm <span className="text-yellow-300">Alok Kumar Ojha</span></h1>
        <p className="text-xl mt-4">Web Developer | React Enthusiast | Problem Solver</p>
        <div className="mt-6">
          <a href="#portfolio" className="bg-yellow-300 text-yellow-900 px-6 py-3 rounded-lg mr-4 hover:bg-yellow-400 transition">See My Work</a>
          <a href="#contact" className="bg-white text-yellow-900 px-6 py-3 rounded-lg hover:bg-gray-200 transition">Hire Me</a>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white text-center px-4">
        <h2 className="text-3xl font-semibold mb-6">About Me</h2>
        <p className="text-lg max-w-4xl mx-auto">
          I'm a passionate web developer with 3 years of experience in creating responsive and user-friendly web applications. Skilled in React, JavaScript, and CSS, I strive to deliver clean, efficient, and scalable solutions.
        </p>
      </section>

      {/* Portfolio Section */}
      <section className="py-16 bg-gray-100 text-center px-4" id="portfolio">
        <h2 className="text-3xl font-semibold mb-6">My Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img src={`/project${item}-thumbnail.jpg`} alt={`Project ${item}`} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold">Project {item}</h3>
                <p className="text-gray-600">Short description of the project.</p>
                <a href={`/project${item}-demo`} target="_blank" className="text-yellow-500 hover:underline">View Project</a>
              </div>
            </div>
          ))}
        </div>
      </section>                                                                                                                                                                                                                                                                                                                                                                   

      {/* Contact Section */}
      <section className="py-16 bg-white text-center px-4" id="contact">
        <h2 className="text-3xl font-semibold mb-6">Contact Me</h2>
        <p className="text-lg mb-6">Feel free to reach out to me for collaboration or job opportunities!</p>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <a href="mailto:your-email@example.com" className="text-yellow-500 hover:underline">Email Me</a>
          <a href="https://www.linkedin.com/in/alok-kumar-ojha-53b4881a4/" target="_blank" className="text-yellow-500 hover:underline">LinkedIn</a>
          <a href="https://github.com/alokkumarojha" target="_blank" className="text-yellow-500 hover:underline">GitHub</a>
        </div>
      </section>

     
    </div>
  );
};

export default Portfolio;
