
const Skills = () => {
  const skills = [
    { 
      category: "Key Skills", 
      items: [
        "Product and Program deliveries with Local & Virtual agile teams",
        "Agile transformation (including Scaling agile)",
        "Building high-performance teams",
        "Business development, P&L, CBA, success KPI definition & tracking",
        "Agile Product Management using JIRA and SAFe framework",
        "APIs and Microservices",
        "Data Analytics & Automation"
      ] 
    },
    {
      category: "Management Skills",
      items: [
        "Product and Program deliveries with Local & Virtual agile teams",
        "Agile transformation (including Scaling agile)",
        "Building high-performance teams",
        "Business development, P&L, CBA, success KPI definition & tracking",
        "Agile Product Management using JIRA and SAFe framework",
        "APIs and Microservices",
        "Data Analytics & Automation"
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-secondary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">Skills & Expertise</h2>
        <div className="grid grid-cols-1 gap-8">
          {skills.map((skillGroup, index) => (
            <div
              key={skillGroup.category}
              className="animate-fade-up"
              style={{ animationDelay: `${0.2 * (index + 1)}s` }}
            >
              <h3 className="text-xl font-semibold mb-4 text-primary text-center">{skillGroup.category}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {skillGroup.items.map((skill) => (
                  <div
                    key={skill}
                    className="bg-white/10 rounded-lg px-4 py-3 hover:bg-white/20 transition-colors"
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
