import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const buttons = [
    { href: "/about", label: "About Me", icon: "👤" },
    { href: "/me/skills", label: "Skills", icon: "⚡" },
    { href: "/me/projects", label: "Projects", icon: "🚀" },
    { href: "/me/gallery", label: "Gallery", icon: "🖼️" },
    { href: "/contact", label: "Contact", icon: "📬" },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Profile */}
        <div className="relative w-44 h-44 mx-auto mb-8">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-1">
            <div className="w-full h-full rounded-full overflow-hidden">
              <Image
                src="/profile.jpg"
                alt="Rapeepat Thiamphon"
                width={176}
                height={176}
                className="object-cover w-full h-full"
                priority
              />
            </div>
          </div>
        </div>

        {/* Name */}
        <h1 className="font-prompt font-bold text-4xl md:text-6xl mb-3">
          <span className="gradient-text">นายระพีพัฒน์ เทียมผล</span>
        </h1>
        <p className="font-kanit text-xl md:text-2xl text-indigo-300 mb-6 tracking-wide">
          แอดมินร้านค้า
        </p>

        {/* Bio */}
        <p className="font-sarabun text-gray-300 text-lg md:text-xl max-w-xl mx-auto mb-10 leading-relaxed">
          สวัสดีครับ ผมเป็นคนดีครับ 😊 มีความสนใจในเทคโนโลยีและพัฒนาซอฟต์แวร์
          พร้อมเรียนรู้และพัฒนาตัวเองอยู่เสมอ
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          {buttons.map((btn) => (
            <Link key={btn.href} href={btn.href}
              className="group flex items-center gap-2 bg-gray-800 hover:bg-indigo-600 border border-gray-700 hover:border-indigo-500 text-white font-prompt px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/25">
              <span>{btn.icon}</span>
              <span>{btn.label}</span>
              <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
            </Link>
          ))}
        </div>

        {/* Scroll hint */}
        <div className="mt-16 animate-bounce">
          <p className="text-gray-500 text-sm font-sarabun">scroll down ↓</p>
        </div>
      </div>
    </section>
  );
}
