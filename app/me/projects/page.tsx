import Link from "next/link";

const projects = [
  {
    title: "Taxi Fare Calculator App",
    description: "แอปพลิเคชันคำนวณค่าโดยสารแท็กซี่ พัฒนาด้วย React Native และ Expo รองรับการคำนวณตามระยะทางจริงและอัตราค่าโดยสารมาตรฐาน",
    tech: ["React Native", "Expo", "TypeScript", "JavaScript"],
    role: "Full Stack Developer",
    year: "2024",
    emoji: "🚕",
    color: "from-yellow-500 to-orange-500",
  },
  {
    title: "Money Tracking App",
    description: "แอปติดตามรายรับรายจ่ายส่วนตัว มีระบบ Authentication และ Database ด้วย Supabase บันทึกและดูประวัติการเงินได้แบบ Real-time",
    tech: ["React Native", "Expo", "Supabase", "PostgreSQL"],
    role: "Full Stack Developer",
    year: "2024",
    emoji: "💰",
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Thai Hotline Directory App",
    description: "แอปรวมเบอร์โทรฉุกเฉินและสายด่วนในประเทศไทย UI ออกแบบด้วย Flutter สไตล์ Glassmorphism สามารถค้นหาและโทรออกได้ทันที",
    tech: ["Flutter", "Dart", "Material Design"],
    role: "Frontend Developer / UI Designer",
    year: "2023",
    emoji: "📞",
    color: "from-blue-500 to-cyan-500",
  },
];

export default function Projects() {
  return (
    <div className="pt-24 pb-16 px-6 max-w-6xl mx-auto">
      <h1 className="font-prompt font-bold text-4xl md:text-5xl gradient-text mb-4 text-center">Projects</h1>
      <p className="text-gray-400 text-center font-sarabun mb-12">ผลงานที่เคยพัฒนา</p>

      <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        {projects.map((project, i) => (
          <div key={i} className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden card-hover flex flex-col">
            {/* Image placeholder with emoji */}
            <div className={`bg-gradient-to-br ${project.color} h-48 flex items-center justify-center`}>
              <span className="text-8xl">{project.emoji}</span>
            </div>

            <div className="p-6 flex flex-col flex-1">
              <div className="flex items-center justify-between mb-3">
                <span className="text-indigo-300 text-xs font-prompt bg-indigo-900/50 px-2 py-1 rounded-full">{project.year}</span>
                <span className="text-gray-400 text-xs font-sarabun">{project.role}</span>
              </div>

              <h3 className="font-prompt font-bold text-xl text-white mb-3">{project.title}</h3>
              <p className="text-gray-400 font-sarabun text-sm leading-relaxed mb-4 flex-1">{project.description}</p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="bg-gray-800 text-gray-300 text-xs font-kanit px-2 py-1 rounded-lg border border-gray-700">{t}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center">
        <Link href="/me/gallery" className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-prompt px-8 py-3 rounded-xl transition-all hover:scale-105">
          NEXT PAGE → Gallery 🖼️
        </Link>
      </div>
    </div>
  );
}
