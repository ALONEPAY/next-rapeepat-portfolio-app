import Link from "next/link";
import SkillCard from "@/components/SkillCard";

const skillGroups = [
  {
    category: "Frontend",
    icon: "🎨",
    color: "from-blue-500 to-cyan-500",
    skills: [
      { name: "HTML", level: 85 },
      { name: "CSS", level: 80 },
      { name: "JavaScript", level: 75 },
      { name: "React", level: 70 },
      { name: "Next.js", level: 60 },
    ],
  },
  {
    category: "Backend",
    icon: "⚙️",
    color: "from-green-500 to-emerald-500",
    skills: [
      { name: "Node.js", level: 65 },
      { name: "PHP", level: 60 },
      { name: "Express", level: 55 },
    ],
  },
  {
    category: "Database",
    icon: "🗄️",
    color: "from-yellow-500 to-orange-500",
    skills: [
      { name: "MySQL", level: 70 },
      { name: "PostgreSQL", level: 60 },
      { name: "Supabase", level: 65 },
    ],
  },
  {
    category: "Tools",
    icon: "🛠️",
    color: "from-purple-500 to-pink-500",
    skills: [
      { name: "Git", level: 75 },
      { name: "GitHub", level: 75 },
      { name: "VS Code", level: 90 },
    ],
  },
];

export default function Skills() {
  return (
    <div className="pt-24 pb-16 px-6 max-w-6xl mx-auto">
      <h1 className="font-prompt font-bold text-4xl md:text-5xl gradient-text mb-4 text-center">Skills</h1>
      <p className="text-gray-400 text-center font-sarabun mb-12">ทักษะและความสามารถของผม</p>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {skillGroups.map((group) => (
          <div key={group.category} className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-r ${group.color} flex items-center justify-center text-xl`}>
                {group.icon}
              </div>
              <h2 className="font-prompt text-xl font-semibold text-white">{group.category}</h2>
            </div>
            <div className="space-y-3">
              {group.skills.map((skill) => (
                <SkillCard key={skill.name} name={skill.name} level={skill.level} />
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="text-center">
        <Link href="/me/projects" className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-prompt px-8 py-3 rounded-xl transition-all hover:scale-105">
          NEXT PAGE → Projects 🚀
        </Link>
      </div>
    </div>
  );
}
