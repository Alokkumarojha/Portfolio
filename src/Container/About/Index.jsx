import React from "react";

const About = () => {
  return (
    <div className="bg-gray-100 text-gray-800 font-sans">
      {/* Hero Section */}
      <section className="bg-yellow-500 text-white py-16 text-center">
        <h1 className="text-5xl font-bold">About Me</h1>
        <p className="text-xl mt-4">Get to know more about me and my journey</p>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white text-center px-4">
        <h2 className="text-3xl font-semibold mb-6">Who I Am</h2>
        <p className="text-lg max-w-4xl mx-auto">
          Hello! I'm <span className="font-bold">Alok Kumar Ojha</span>, a passionate web developer with experience in HTML, CSS, JavaScript, and React. I started my career as a Designing Coordinator at IndiaMART.com, ensuring high-quality content management and client satisfaction. Now, I specialize in building dynamic, responsive web applications that enhance user experiences.
        </p>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-gray-100 text-center px-4">
        <h2 className="text-3xl font-semibold mb-6">My Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {["HTML", "CSS", "JavaScript", "React", "Bootstrap", "GitHub", "VS Code", "Git"].map((skill) => (
            <div key={skill} className="bg-white shadow-md p-4 rounded-lg">{skill}</div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 bg-white text-center px-4">
        <h2 className="text-3xl font-semibold mb-6">My Experience</h2>
        <div className="max-w-4xl mx-auto text-left">
          <div className="mb-6">
            <h3 className="text-xl font-bold">Designing Coordinator - IndiaMART.com</h3>
            <p className="text-gray-600">Feb 2017 - Sep 2021</p>
            <ul className="list-disc list-inside">
              <li>Managed client product specifications on websites.</li>
              <li>Ensured high-quality data accuracy.</li>
              <li>Collaborated with teams to troubleshoot content issues.</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold">Sales Executive - Cera Sanitaryware Limited</h3>
            <p className="text-gray-600">Sep 2021 - Nov 2022</p>
            <ul className="list-disc list-inside">
              <li>Managed client relationships and achieved sales targets.</li>
              <li>Provided product recommendations and demonstrations.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Personal Interests */}
      <section className="py-16 bg-gray-100 text-center px-4">
        <h2 className="text-3xl font-semibold mb-6">Personal Interests</h2>
        <p className="text-lg max-w-4xl mx-auto">
          Apart from coding, I enjoy **running**, exploring new technologies, and spending time with family. I believe in continuous learning and always seek opportunities to enhance my knowledge.
        </p>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white text-center px-4">
        <h2 className="text-3xl font-semibold mb-6">Let's Connect</h2>
        <p className="text-lg mb-6">Feel free to reach out to me for collaboration or discussions!</p>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <a href="mailto:aojha105@gmail.com" className="text-yellow-500 hover:underline">Email Me</a>
          <a href="https://www.linkedin.com/in/alok-kumar-ojha-53b4881a4/" target="_blank" className="text-yellow-500 hover:underline">LinkedIn</a>
          <a href="https://github.com/Alokkumarojha" target="_blank" className="text-yellow-500 hover:underline">GitHub</a>
        </div>
      </section>

     
    </div>
  );
};

export default About;
