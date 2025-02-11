import React from "react";
const Home = () => {
  return (
    <div className="bg-gray-100 text-gray-800 font-sans">
      {/* Hero Section */}
      <section className="hero-section bg-yellow-500 text-white py-20 flex flex-col md:flex-row items-center">
        <div className="hero-content text-center md:text-left px-4 md:px-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hi, I'm <span className="text-yellow-300">Alok Kumar Ojha</span>
          </h1>
          <p className="text-lg md:text-2xl mb-6">
            Web Developer | React Enthusiast | Problem Solver
          </p>
          <div className="cta-buttons flex flex-col md:flex-row gap-4">
            <a
              href="#portfolio"
              className="bg-yellow-300 text-yellow-900 px-6 py-3 rounded-lg hover:bg-yellow-400 transition"
            >
              See My Work
            </a>
            <a
              href="#contact"
              className="bg-white text-yellow-900 px-6 py-3 rounded-lg hover:bg-gray-200 transition"
            >
              Hire Me
            </a>
          </div>
        </div>
        <div className="hero-image mt-8 md:mt-0">
          <img
            src="https://th.bing.com/th/id/OIP.QVBY30VqTi-tlYt_BaoGqAHaEo?rs=1&pid=ImgDetMain"
            alt="Alok Kumar Ojha"
            className="w-72 md:w-96 rounded-full shadow-lg"
          />
        </div>
      </section>

      {/* About Section */}
      <section className="about-section py-16 bg-white text-center px-4">
        <h2 className="text-3xl font-semibold mb-6">About Me</h2>
        <p className="text-lg max-w-4xl mx-auto">
          I'm a passionate web developer with 3 years of experience in creating
          responsive and user-friendly web applications. Skilled in React,
          JavaScript, and CSS, I strive to deliver clean, efficient, and
          scalable solutions.
        </p>
      </section>

      {/* Portfolio Highlights */}
      <section
        className="portfolio-section py-16 bg-gray-100 text-center px-4"
        id="portfolio"
      >
        <h2 className="text-3xl font-semibold mb-6">My Work</h2>
        <div className="portfolio-items grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="portfolio-item bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src="/todoApp.jpg"
              alt="Project 1"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">Todo App</h3>
              <p className="text-gray-600">
                A simple React-based Todo App for adding, editing, and managing
                tasks efficiently✅🚀.
              </p>
              <a
                href="https://alokkumarojha.github.io/Todo_App/"
                target="_blank"
                className="inline-block mt-4 text-yellow-500 hover:underline"
              >
                View Project
              </a>
            </div>
          </div>
          <div className="portfolio-item bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src="/Calculator.jpg"
              alt="Project 2"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">Calculator</h3>
              <p className="text-gray-600">
                A simple React-based calculator app for basic arithmetic
                operations (addition, subtraction, multiplication, and division)
                with a user-friendly interface✅🚀.
              </p>
              <a
                href="https://alokkumarojha.github.io/Calculator/"
                target="_blank"
                className="inline-block mt-4 text-yellow-500 hover:underline"
              >
                View Project
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        className="contact-section py-16 bg-white text-center px-4"
        id="contact"
      >
        <h2 className="text-3xl font-semibold mb-6">Contact Me</h2>
        <p className="text-lg mb-6">
          Feel free to reach out to me for collaboration or job opportunities!
        </p>
        <div className="contact-links flex flex-col md:flex-row justify-center gap-4">
          <a
            href="mailto:aojha105@gmail.com"
            className="text-yellow-500 hover:underline"
          >
            Email Me
          </a>

          <a
            href="https://www.linkedin.com/in/alok-kumar-ojha-53b4881a4/"
            target="_blank"
            className="text-yellow-500 hover:underline"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/alokkumarojha"
            target="_blank"
            className="text-yellow-500 hover:underline"
          >
            GitHub
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
