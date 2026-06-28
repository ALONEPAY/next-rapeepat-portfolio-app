export default function Contact() {
  const contacts = [
    {
      icon: "📧",
      label: "Email",
      value: "rapeepat.tk003@gmail.com",
      href: "mailto:rapeepat.tk003@gmail.com",
      color: "from-red-500 to-pink-500",
    },
    {
      icon: "📱",
      label: "โทรศัพท์",
      value: "063-767-4331",
      href: "tel:0637674331",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: "💻",
      label: "GitHub",
      value: "github.com/ALONEPAY",
      href: "https://github.com/ALONEPAY",
      color: "from-gray-500 to-gray-400",
    },
  ];

  return (
    <div className="pt-24 pb-16 px-6 max-w-4xl mx-auto">
      <h1 className="font-prompt font-bold text-4xl md:text-5xl gradient-text mb-4 text-center">Contact</h1>
      <p className="text-gray-400 text-center font-sarabun mb-12">ติดต่อผมได้ช่องทางเหล่านี้</p>

      <div className="grid gap-6 mb-12">
        {contacts.map((c) => (
          <a
            key={c.label}
            href={c.href}
            target={c.href.startsWith("http") ? "_blank" : undefined}
            rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="group bg-gray-900 border border-gray-800 hover:border-indigo-500 rounded-2xl p-6 flex items-center gap-6 card-hover transition-all"
          >
            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${c.color} flex items-center justify-center text-2xl flex-shrink-0`}>
              {c.icon}
            </div>
            <div className="flex-1">
              <p className="text-gray-400 text-sm font-sarabun">{c.label}</p>
              <p className="text-white font-kanit font-semibold text-lg group-hover:text-indigo-400 transition-colors">{c.value}</p>
            </div>
            <span className="text-gray-600 group-hover:text-indigo-400 transition-colors text-xl">→</span>
          </a>
        ))}
      </div>

      {/* Download Resume */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-center">
        <p className="font-prompt text-2xl font-bold text-white mb-2">📄 Download Resume</p>
        <p className="text-indigo-200 font-sarabun mb-6">ดาวน์โหลด Resume ของผมได้เลย</p>
        <a
          href="/Rapeepat_Resume.pdf"
          download="Rapeepat_Resume.pdf"
          className="inline-flex items-center gap-2 bg-white text-indigo-700 font-prompt font-bold px-8 py-3 rounded-xl hover:bg-indigo-50 transition-all hover:scale-105"
        >
          ⬇️ Download Resume
        </a>
      </div>

      {/* Back to top */}
      <div className="text-center mt-12">
        <a href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-indigo-400 font-sarabun transition-colors">
          ↑ กลับหน้าแรก
        </a>
      </div>
    </div>
  );
}
