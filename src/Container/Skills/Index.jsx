import React from "react";

const skillsData = [
  {
    category: "Front-End",
    skills: [
      { name: "HTML", description: "Markup language for the web." },
      { name: "CSS", description: "Style sheet language for design." },
      { name: "JavaScript", description: "Programming language for dynamic content." },
      { name: "React", description: "JavaScript library for building UI." },
      { name: "Tailwind CSS", description: "Utility-first CSS framework." },
      { name: "Bootstrap", description: "Front-end framework for responsive designs." },
    ],
  },
  {
    category: "Back-End",
    skills: [
      { name: "Node.js", description: "JavaScript runtime for back-end." },
      { name: "Express", description: "Minimal and flexible Node.js web application framework." },
      { name: "MongoDB", description: "NoSQL database." },
      { name: "MySQL", description: "Relational database management system." },
    ],
  },
  {
    category: "Tools & Technologies",
    skills: [
      { name: "Git", description: "Version control system." },
      { name: "GitHub", description: "Platform for version control and collaboration." },
      { name: "VS Code", description: "Code editor for development." },
      { name: "Postman", description: "API testing tool." },
    ],
  },
];

const Skills = () => {
  return (
    <div className="bg-gray-100 text-gray-800 font-sans">
      {/* Hero Section */}
      <section className="hero-section bg-yellow-500 text-white py-20 flex flex-col items-center">
        <div className="hero-content text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Skills of <span className="text-yellow-300">Alok Kumar Ojha</span>
          </h1>
          <p className="text-lg md:text-2xl mb-6">
            Web Development | React Enthusiast | Back-End & Front-End Technologies
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills-section py-16 bg-white text-center px-4" id="skills">
        <h2 className="text-3xl font-semibold mb-6">My Skills</h2>
        
        {/* Looping through skillsData */}
        {skillsData.map((section) => (
          <div key={section.category} className="mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-yellow-500">{section.category}</h3>
            <div className="skills-items grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {section.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="skill-item bg-white shadow-lg rounded-lg overflow-hidden p-4"
                >
                  <h4 className="text-xl font-semibold text-yellow-600">{skill.name}</h4>
                  <p className="text-gray-600">{skill.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      
    </div>
  );
};

export default Skills;
