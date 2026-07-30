import React from 'react';
import { Code, Terminal, Layers } from 'lucide-react';

export const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Web & Systems Development',
      icon: <Code size={18} className="text-[#A8827E]" />,
      description: 'Pengembangan aplikasi web dan sistem pelaporan berbasis data.',
      skills: [
        'PHP & Laravel',
        'Filament Admin Panel',
        'JavaScript & Node.js',
        'MySQL Database',
        'RESTful APIs',
        'Excel & PDF Report Generation',
      ],
    },
    {
      title: 'Tools & Data Automation',
      icon: <Terminal size={18} className="text-[#A8827E]" />,
      description: 'Perkakas pengembangan dan otomasi dokumen/data.',
      skills: [
        'Git & GitHub Workflow',
        'Python Scripting',
        'OOXML & Document Automation',
        'Linux CLI Basics',
        'Data Extraction & Verification',
        'LibreOffice Headless Automation',
      ],
    },
    {
      title: 'Soft Skills & Organization',
      icon: <Layers size={18} className="text-[#A8827E]" />,
      description: 'Kemampuan manajerial, koordinasi tim, dan pengelolaan organisasi.',
      skills: [
        'Financial Management',
        'Technical Documentation',
        'Team Coordination',
        'Cadre Development',
        'Problem Solving',
      ],
    },
  ];

  return (
    <section id="skills" className="py-16 border-t border-[#3A252B] max-w-3xl mx-auto px-4 sm:px-6">
      {/* Eyebrow */}
      <div className="mb-4">
        <span className="eyebrow">SKILLS // KEAHLIAN TEKNIS</span>
      </div>

      <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#EDE4D3] mb-8">
        Kompetensi & Tooling Utilitas
      </h2>

      {/* 3 Categories Cards */}
      <div className="space-y-6">
        {skillCategories.map((category, idx) => (
          <div
            key={idx}
            className="bg-[#241318] border border-[#3A252B] rounded-xl p-6 transition-all duration-200 hover:border-[#7A2333]/50"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-[#40161E] rounded-lg border border-[#3A252B]">
                {category.icon}
              </div>
              <h3 className="font-serif font-semibold text-lg text-[#EDE4D3]">
                {category.title}
              </h3>
            </div>

            <p className="text-[#9C8682] text-xs sm:text-sm mb-4 leading-relaxed">
              {category.description}
            </p>

            {/* Skill Tags/Pills */}
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIdx) => (
                <span
                  key={skillIdx}
                  className="inline-flex items-center font-mono text-xs text-[#EDE4D3] bg-[#1C0F14] border border-[#3A252B] px-3 py-1.5 rounded-md hover:border-[#A8827E] transition-colors"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7A2333] mr-2 inline-block"></span>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;