
const Skills = () => {
  const skills = [
    { 
      category: "Technology Expertise", 
      items: ["Cloud Architecture", "AWS", "Azure", "Enterprise Architecture", "Digital Transformation"] 
    },
    { 
      category: "Architecture", 
      items: ["Microservices", "API Design", "Event-driven Architecture", "System Integration", "Serverless"] 
    },
    { 
      category: "Leadership", 
      items: ["Team Leadership", "Solution Design", "Technical Strategy", "Stakeholder Management", "Mentoring"] 
    },
  ];

  return (
    <section id="skills" className="py-20 bg-secondary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">Skills & Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skillGroup, index) => (
            <div
              key={skillGroup.category}
              className="animate-fade-up"
              style={{ animationDelay: `${0.2 * (index + 1)}s` }}
            >
              <h3 className="text-xl font-semibold mb-4 text-primary">{skillGroup.category}</h3>
              <div className="space-y-2">
                {skillGroup.items.map((skill) => (
                  <div
                    key={skill}
                    className="bg-white/10 rounded-lg px-4 py-2 hover:bg-white/20 transition-colors"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
