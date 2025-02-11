import React from "react";

const Resume = () => {
  return (
    <div className="bg-gray-100 text-gray-800 font-sans">
      {/* Hero Section */}
      <section className="bg-yellow-500 text-white py-16 text-center">
        <h1 className="text-5xl font-bold">My Resume</h1>
        <p className="text-xl mt-4">Alok Kumar Ojha - Web Developer</p>
        <a
          href="/mnt/data/alokResume.docx"
          download="Alok_Kumar_Ojha_Resume.docx"
          className="mt-6 inline-block bg-white text-yellow-900 px-6 py-3 rounded-lg hover:bg-gray-200 transition"
        >
          Download Resume
        </a>
      </section>

      {/* Personal Info */}
      <section className="py-10 bg-white text-center px-4">
        <h2 className="text-3xl font-semibold mb-6">Personal Information</h2>
        <p className="text-lg">📍 Siwan, Bihar</p>
        <p className="text-lg">📞 9717063108</p>
        <p className="text-lg">📧 <a href="mailto:aojha105@gmail.com" className="text-yellow-500 hover:underline">aojha105@gmail.com</a></p>
        <p className="text-lg">🔗 <a href="https://github.com/Alokkumarojha" target="_blank" className="text-yellow-500 hover:underline">GitHub</a></p>
      </section>

      {/* Professional Summary */}
      <section className="py-10 bg-gray-100 text-center px-4">
        <h2 className="text-3xl font-semibold mb-6">Professional Summary</h2>
        <p className="text-lg max-w-4xl mx-auto">
          Detail-oriented professional with experience as a Designing Coordinator at IndiaMART.com. Recently upskilled in front-end development, gaining expertise in HTML, CSS, JavaScript, and React to build dynamic and user-friendly web applications.
        </p>
      </section>

      {/* Skills Section */}
      <section className="py-10 bg-white text-center px-4">
        <h2 className="text-3xl font-semibold mb-6">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {["HTML", "CSS", "JavaScript", "React", "Bootstrap", "GitHub", "VS Code", "Git"].map((skill) => (
            <div key={skill} className="bg-gray-200 p-4 rounded-lg">{skill}</div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-10 bg-gray-100 text-center px-4">
        <h2 className="text-3xl font-semibold mb-6">Experience</h2>
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

      {/* Education */}
      <section className="py-10 bg-white text-center px-4">
        <h2 className="text-3xl font-semibold mb-6">Education</h2>
        <p className="text-lg">🎓 Bachelor of Technology (CSE) - SETI Siwan BR (2016)</p>
      </section>

      {/* Certifications */}
      <section className="py-10 bg-gray-100 text-center px-4">
        <h2 className="text-3xl font-semibold mb-6">Certifications</h2>
        <ul className="list-disc list-inside max-w-4xl mx-auto text-left">
          <li>React Development – Code with Hitesh Choudhary</li>
          <li>JavaScript Programming – Code with Hitesh Choudhary</li>
        </ul>
      </section>

     
    </div>
  );
};

export default Resume;
