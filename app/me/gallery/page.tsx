import Link from "next/link";

const galleryItems = [
  {
    title: "React Native Development",
    code: `import { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <View style={styles.container}>
      <Text>Count: {count}</Text>
      <TouchableOpacity onPress={() => setCount(count + 1)}>
        <Text>Press me</Text>
      </TouchableOpacity>
    </View>
  );
}`,
    lang: "tsx",
    color: "from-blue-600 to-cyan-600",
    emoji: "📱",
  },
  {
    title: "Next.js API Route",
    code: `import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

export async function GET(request: Request) {
  const supabase = createClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_KEY!
  );
  const { data } = await supabase
    .from('users').select('*');
  return NextResponse.json({ data });
}`,
    lang: "ts",
    color: "from-purple-600 to-pink-600",
    emoji: "🚀",
  },
  {
    title: "Supabase Auth",
    code: `import { createClient } from '@supabase/supabase-js'

const supabase = createClient(url, key)

async function signIn(email: string, password: string) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })
  if (error) throw error
  return data
}`,
    lang: "ts",
    color: "from-green-600 to-teal-600",
    emoji: "🔐",
  },
  {
    title: "Tailwind CSS Component",
    code: `export function Card({ title, desc }: Props) {
  return (
    <div className="bg-gray-900 border border-gray-700 
      rounded-2xl p-6 hover:border-indigo-500 
      transition-all duration-300 hover:-translate-y-1
      hover:shadow-xl hover:shadow-indigo-500/20">
      <h3 className="text-white font-bold text-xl mb-2">
        {title}
      </h3>
      <p className="text-gray-400 text-sm">{desc}</p>
    </div>
  )
}`,
    lang: "tsx",
    color: "from-yellow-600 to-orange-600",
    emoji: "🎨",
  },
  {
    title: "MySQL Query",
    code: `-- ดึงข้อมูลนักศึกษาพร้อม GPA
SELECT 
  s.student_id,
  s.first_name,
  s.last_name,
  AVG(g.score) as gpa,
  COUNT(e.course_id) as total_courses
FROM students s
LEFT JOIN enrollments e ON s.id = e.student_id
LEFT JOIN grades g ON e.id = g.enrollment_id
GROUP BY s.student_id
HAVING gpa >= 3.0
ORDER BY gpa DESC;`,
    lang: "sql",
    color: "from-orange-600 to-red-600",
    emoji: "🗄️",
  },
  {
    title: "Flutter Widget",
    code: `class HotlineCard extends StatelessWidget {
  final String name;
  final String number;

  const HotlineCard({
    required this.name,
    required this.number,
  });

  @override
  Widget build(BuildContext context) {
    return Card(
      elevation: 4,
      shape: RoundedRectangleBorder(
        borderRadius: BorderRadius.circular(16),
      ),
      child: ListTile(
        title: Text(name),
        trailing: IconButton(
          icon: Icon(Icons.phone),
          onPressed: () => launchUrl(Uri.parse('tel:$number')),
        ),
      ),
    );
  }
}`,
    lang: "dart",
    color: "from-indigo-600 to-blue-600",
    emoji: "💙",
  },
];

export default function Gallery() {
  return (
    <div className="pt-24 pb-16 px-6 max-w-7xl mx-auto">
      <h1 className="font-prompt font-bold text-4xl md:text-5xl gradient-text mb-4 text-center">Gallery</h1>
      <p className="text-gray-400 text-center font-sarabun mb-12">Code snippets จากโปรเจกต์จริงที่ผมพัฒนา</p>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 mb-12">
        {galleryItems.map((item, i) => (
          <div key={i} className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden card-hover">
            {/* Header */}
            <div className={`bg-gradient-to-r ${item.color} px-6 py-4 flex items-center gap-3`}>
              <span className="text-3xl">{item.emoji}</span>
              <div>
                <p className="text-white font-prompt font-semibold">{item.title}</p>
                <p className="text-white/70 text-xs font-kanit uppercase tracking-widest">{item.lang}</p>
              </div>
            </div>

            {/* Code */}
            <div className="p-4">
              <div className="flex gap-1.5 mb-3">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <pre className="text-xs text-gray-300 font-mono overflow-x-auto leading-relaxed whitespace-pre-wrap">
                <code>{item.code}</code>
              </pre>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center">
        <Link href="/contact" className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-prompt px-8 py-3 rounded-xl transition-all hover:scale-105">
          NEXT PAGE → Contact 📬
        </Link>
      </div>
    </div>
  );
}
