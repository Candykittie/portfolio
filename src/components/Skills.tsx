import React from 'react';
import angularLogo from '../assets/logo/programing (1).png';
import pythonLogo from '../assets/logo/file (1).png';
import htmlcssLogo from '../assets/logo/code.png';
import ReactLogo from '../assets/logo/structure.png';
import clogo from '../assets/logo/c-sharp.png';
import sql from '../assets/logo/sql.png';
// import myPhoto from '../assets/logo/myphoto.png'; // Optional: your personal image

const Skills = () => {
  const skills = [
    {
      name: 'Angular',
      level: 85,
      icon: angularLogo,
      color: 'from-red-400 to-green-600',
      containerColor: 'bg-gradient-to-br from-red-100 to-green-100'
    },
    {
      name: 'Python',
      level: 75,
      icon: pythonLogo,
      color: 'from-blue-400 to-red-600',
    },
    {
      name: 'HTML & CSS',
      level: 85,
      icon: htmlcssLogo,
      color: 'from-orange-400 to-green-600',
    },
    {
      name: 'C#',
      level: 70,
      icon: clogo,
      color: 'from-green-400 to-green-600',
    },
     {
      name: 'React-JS',
      level: 75,
      icon: ReactLogo,
      color: 'from-red-400 to-red-600',
    },
      {
      name: 'Mysql',
      level: 75,
      icon: sql,
      color: 'from-red-400 to-red-600',
    },
    // {
    //   name: 'Sanjeev Kumar',
    //   level: 95,
    //   icon: myPhoto,
    //   color: 'from-pink-400 to-pink-600',
    // },
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-enhanced-primary mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="glass-card p-6 text-center skill-card group">
              <div className="mb-6">
                <div className="relative mx-auto w-20 h-20 mb-4">
                  <div
                    className={`absolute inset-0 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300 bg-gradient-to-r ${skill.color}`}
                  ></div>
                  <div className="absolute inset-2 rounded-full bg-white/10 flex items-center justify-center">
                    <img
                      src={skill.icon}
                      alt={`${skill.name} icon`}
                      className="w-10 h-10 object-cover rounded-full"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-enhanced-secondary mb-4">{skill.name}</h3>
              </div>

              <div className="relative">
                <div className="w-full bg-white/5 rounded-full h-3 mb-2">
                  <div
                    className={`h-3 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <span className="text-sm text-enhanced-body font-bold">{skill.level}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
