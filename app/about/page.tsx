import Link from "next/link";

const education = [
  { period: "ป.1–4", school: "โรงเรียนบ้านใหม่วังตะเคียน", level: "ประถมศึกษา" },
  { period: "ป.5–6", school: "โรงเรียนวัดท่าพูด", level: "ประถมศึกษา" },
  { period: "ม.1–3", school: "โรงเรียนวัดท่าพูด", level: "มัธยมศึกษา" },
  { period: "ปวช.", school: "วิทยาลัยอาชีวศึกษาเทคโนโลยีเอเชีย", level: "ประกาศนียบัตรวิชาชีพ" },
  { period: "ปวส.", school: "วิทยาลัยเทคโนโลยีการจัดการเพชรเกษม", level: "ประกาศนียบัตรวิชาชีพชั้นสูง" },
  { period: "ปัจจุบัน", school: "มหาวิทยาลัยเอเชียอาคเนย์", level: "ปริญญาตรี" },
];

export default function About() {
  return (
    <div className="pt-24 pb-16 px-6 max-w-5xl mx-auto">
      <h1 className="font-prompt font-bold text-4xl md:text-5xl gradient-text mb-12 text-center">About Me</h1>

      <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 mb-8">
        <h2 className="font-prompt text-2xl font-semibold text-indigo-400 mb-6">📋 ประวัติส่วนตัว</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            { label: "ชื่อ-นามสกุล", value: "นายระพีพัฒน์ เทียมผล" },
            { label: "อายุ", value: "20 ปี" },
            { label: "น้ำหนัก", value: "105 กก." },
            { label: "ส่วนสูง", value: "190 ซม." },
            { label: "วันเกิด", value: "29 พฤศจิกายน 2547" },
            { label: "สถานที่เรียน", value: "ม.เอเชียอาคเนย์" },
          ].map((item) => (
            <div key={item.label} className="bg-gray-800 rounded-xl p-4">
              <p className="text-gray-400 text-xs font-sarabun mb-1">{item.label}</p>
              <p className="text-white font-kanit font-medium text-sm">{item.value}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 mb-8">
        <h2 className="font-prompt text-2xl font-semibold text-indigo-400 mb-6">🎓 ประวัติการศึกษา</h2>
        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-indigo-800" />
          <div className="space-y-6">
            {education.map((edu, i) => (
              <div key={i} className="flex gap-6 pl-12 relative">
                <div className="absolute left-2 top-1 w-4 h-4 rounded-full bg-indigo-500 border-2 border-gray-900" />
                <div className="bg-gray-800 rounded-xl p-4 flex-1">
                  <span className="text-indigo-300 text-xs font-prompt font-semibold bg-indigo-900/50 px-2 py-1 rounded-full">{edu.level}</span>
                  <p className="text-white font-kanit font-medium mt-2">{edu.school}</p>
                  <p className="text-gray-400 text-sm font-sarabun">{edu.period}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-10">
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
          <h2 className="font-prompt text-xl font-semibold text-indigo-400 mb-4">🎯 Career Objective</h2>
          <p className="font-sarabun text-gray-300 leading-relaxed">
            มุ่งมั่นที่จะประสบความสำเร็จในสายงานด้านเทคโนโลยีและการพัฒนาซอฟต์แวร์
            โดยนำความรู้และทักษะที่มีมาพัฒนาองค์กรและตนเองอย่างต่อเนื่อง
          </p>
        </div>
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
          <h2 className="font-prompt text-xl font-semibold text-indigo-400 mb-4">💪 จุดแข็ง</h2>
          <div className="flex flex-wrap gap-2">
            {["เรียนรู้งานเร็ว", "ปรับตัวได้ดี", "ทำงานเป็นทีม", "มุ่งมั่นตั้งใจ"].map((s) => (
              <span key={s} className="bg-indigo-900/50 text-indigo-300 font-sarabun text-sm px-3 py-1 rounded-full border border-indigo-700">{s}</span>
            ))}
          </div>
        </div>
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
          <h2 className="font-prompt text-xl font-semibold text-indigo-400 mb-4">🔍 ความสนใจ</h2>
          <p className="font-sarabun text-gray-300 leading-relaxed">
            มีความสนใจในเทคโนโลยีเป็นพิเศษ ชอบติดตามข่าวสารและนวัตกรรมใหม่ๆ ในวงการ Tech อยู่เสมอ
          </p>
        </div>
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
          <h2 className="font-prompt text-xl font-semibold text-indigo-400 mb-4">🎮 งานอดิเรก</h2>
          <div className="flex flex-wrap gap-2">
            {["เล่นเกม", "หาข้อมูลเทคโนโลยี", "ศึกษา Software ใหม่ๆ"].map((h) => (
              <span key={h} className="bg-purple-900/50 text-purple-300 font-sarabun text-sm px-3 py-1 rounded-full border border-purple-700">{h}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="text-center">
        <Link href="/me/skills" className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-prompt px-8 py-3 rounded-xl transition-all hover:scale-105">
          NEXT PAGE → Skills ⚡
        </Link>
      </div>
    </div>
  );
}
