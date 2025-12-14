import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";

const data = [
  { name: "Occupées", value: 96, color: "#38712c" },
  { name: "Disponibles", value: 24, color: "#ff7f27" },
  { name: "Maintenance", value: 8, color: "#403323" },
  { name: "Réservées", value: 12, color: "#e6e6e6" },
];

export function RoomStatusChart() {
  return (
    <div className="bg-white rounded-xl p-4 shadow-sm">
      <h3 className="text-[#403323] mb-2 text-sm">Statut des Chambres</h3>
      
      {/* Filters */}
      <div className="flex gap-2 mb-3">
        <select className="text-xs border border-[#e6e6e6] rounded px-2 py-1 bg-white text-[#403323]">
          <option>2025</option>
          <option>2024</option>
        </select>
        <select className="text-xs border border-[#e6e6e6] rounded px-2 py-1 bg-white text-[#403323]">
          <option>Tous bâtiments</option>
          <option>Bâtiment A</option>
          <option>Bâtiment B</option>
        </select>
        <select className="text-xs border border-[#e6e6e6] rounded px-2 py-1 bg-white text-[#403323]">
          <option>Tous étages</option>
          <option>Étage 1</option>
          <option>Étage 2</option>
        </select>
      </div>

      <ResponsiveContainer width="100%" height={180}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={40}
            outerRadius={70}
            paddingAngle={2}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Legend 
            verticalAlign="bottom" 
            height={36}
            iconType="circle"
            iconSize={8}
            formatter={(value, entry: any) => (
              <span className="text-xs text-[#403323]">{`${value} (${entry.payload.value})`}</span>
            )}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
