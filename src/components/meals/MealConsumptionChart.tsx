import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { day: "Lun", meals: 245 },
  { day: "Mar", meals: 268 },
  { day: "Mer", meals: 255 },
  { day: "Jeu", meals: 280 },
  { day: "Ven", meals: 265 },
  { day: "Sam", meals: 180 },
  { day: "Dim", meals: 175 },
];

export function MealConsumptionChart() {
  return (
    <div className="bg-white rounded-xl p-4 shadow-sm">
      <h3 className="text-[#403323] mb-2 text-sm">Consommation Repas</h3>
      
      {/* Filters */}
      <div className="flex gap-2 mb-3">
        <select className="text-xs border border-[#e6e6e6] rounded px-2 py-1 bg-white text-[#403323]">
          <option>Semaine</option>
          <option>Mois</option>
        </select>
        <select className="text-xs border border-[#e6e6e6] rounded px-2 py-1 bg-white text-[#403323]">
          <option>2025</option>
          <option>2024</option>
        </select>
        <select className="text-xs border border-[#e6e6e6] rounded px-2 py-1 bg-white text-[#403323]">
          <option>Tous repas</option>
          <option>Petit-déj</option>
          <option>Déjeuner</option>
        </select>
      </div>

      <ResponsiveContainer width="100%" height={180}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e6e6e6" />
          <XAxis 
            dataKey="day" 
            tick={{ fontSize: 10 }}
            stroke="#403323"
          />
          <YAxis 
            tick={{ fontSize: 10 }}
            stroke="#403323"
          />
          <Tooltip 
            contentStyle={{ 
              fontSize: '12px',
              borderRadius: '8px',
              border: '1px solid #e6e6e6'
            }}
          />
          <Bar 
            dataKey="meals" 
            fill="#ff7f27"
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}