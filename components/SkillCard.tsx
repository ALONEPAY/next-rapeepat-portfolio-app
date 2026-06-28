interface SkillCardProps {
  name: string;
  level: number;
  icon?: string;
}

export default function SkillCard({ name, level, icon }: SkillCardProps) {
  return (
    <div className="bg-gray-800 rounded-xl p-4 card-hover border border-gray-700">
      <div className="flex items-center justify-between mb-2">
        <span className="font-kanit text-sm font-medium text-white">
          {icon && <span className="mr-2">{icon}</span>}{name}
        </span>
        <span className="text-indigo-400 text-xs font-prompt">{level}%</span>
      </div>
      <div className="bg-gray-700 rounded-full h-2">
        <div className="skill-bar" style={{ width: `${level}%` }} />
      </div>
    </div>
  );
}
