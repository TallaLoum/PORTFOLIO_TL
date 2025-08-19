import React from 'react';
import { Database, Brain, Code, Server, GitBranch, Cpu } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      icon: Database,
      title: "Base de Données",
      color: "blue",
      skills: [
        { name: "SQL / NoSQL", level: 90 },
        { name: "MySQL / PostgreSQL", level: 85 },
        { name: "MongoDB", level: 80 },
        { name: "Optimisation de requêtes", level: 75 },
        { name: "Modélisation de données", level: 85 }
      ]
    },
    {
      icon: Brain,
      title: "Intelligence Artificielle",
      color: "indigo",
      skills: [
        { name: "Machine Learning", level: 85 },
        { name: "Deep Learning", level: 80 },
        { name: "Python / TensorFlow", level: 85 },
        { name: "Analyse de données", level: 90 },
        { name: "Pandas / NumPy", level: 85 }
      ]
    },
    {
      icon: Code,
      title: "Développement Web",
      color: "green",
      skills: [
        { name: "HTML / CSS / JavaScript", level: 90 },
        { name: "React / Node.js", level: 85 },
        { name: "PHP / Laravel", level: 80 },
        { name: "API REST", level: 85 },
        { name: "TypeScript", level: 75 }
      ]
    },
    {
      icon: Server,
      title: "Outils & Technologies",
      color: "purple",
      skills: [
        { name: "Git / GitHub", level: 90 },
        { name: "Docker", level: 70 },
        { name: "Linux", level: 80 },
        { name: "Jupyter Notebook", level: 85 },
        { name: "VS Code", level: 95 }
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: { bg: "bg-blue-100", text: "text-blue-600", progress: "bg-blue-600" },
      indigo: { bg: "bg-indigo-100", text: "text-indigo-600", progress: "bg-indigo-600" },
      green: { bg: "bg-green-100", text: "text-green-600", progress: "bg-green-600" },
      purple: { bg: "bg-purple-100", text: "text-purple-600", progress: "bg-purple-600" }
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 pt-20">
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-slate-800 mb-8">Mes Compétences</h1>
          <p className="text-lg text-slate-600 text-center mb-16 max-w-3xl mx-auto">
            Découvrez mes compétences techniques acquises au cours de ma formation et de mon expérience professionnelle.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {skillCategories.map((category, index) => {
              const colors = getColorClasses(category.color);
              const Icon = category.icon;
              
              return (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100">
                  <div className="flex items-center mb-6">
                    <div className={`w-12 h-12 ${colors.bg} rounded-lg flex items-center justify-center mr-4`}>
                      <Icon className={`w-6 h-6 ${colors.text}`} />
                    </div>
                    <h2 className="text-xl font-bold text-slate-800">{category.title}</h2>
                  </div>
                  
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex}>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-slate-700 font-medium">{skill.name}</span>
                          <span className="text-slate-500 text-sm">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-slate-200 rounded-full h-2">
                          <div 
                            className={`${colors.progress} h-2 rounded-full transition-all duration-1000 ease-out`}
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Additional Skills */}
          <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-100">
            <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">Autres Compétences</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <GitBranch className="w-8 h-8 text-orange-600 mx-auto mb-3" />
                <h3 className="font-semibold text-slate-800 mb-2">Méthodologies</h3>
                <ul className="text-slate-600 text-sm space-y-1">
                  <li>Agile / Scrum</li>
                  <li>DevOps</li>
                  <li>Test-Driven Development</li>
                </ul>
              </div>
              
              <div className="text-center">
                <Cpu className="w-8 h-8 text-red-600 mx-auto mb-3" />
                <h3 className="font-semibold text-slate-800 mb-2">Systèmes</h3>
                <ul className="text-slate-600 text-sm space-y-1">
                  <li>Architecture logicielle</li>
                  <li>Optimisation des performances</li>
                  <li>Sécurité des données</li>
                </ul>
              </div>
              
              <div className="text-center">
                <Brain className="w-8 h-8 text-teal-600 mx-auto mb-3" />
                <h3 className="font-semibold text-slate-800 mb-2">Soft Skills</h3>
                <ul className="text-slate-600 text-sm space-y-1">
                  <li>Résolution de problèmes</li>
                  <li>Travail en équipe</li>
                  <li>Communication technique</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;