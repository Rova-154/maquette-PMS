import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { month: "Jan", occupancy: 85 },
  { month: "Fév", occupancy: 82 },
  { month: "Mar", occupancy: 88 },
  { month: "Avr", occupancy: 90 },
  { month: "Mai", occupancy: 78 },
  { month: "Juin", occupancy: 75 },
  { month: "Juil", occupancy: 80 },
  { month: "Aoû", occupancy: 95 },
  { month: "Sep", occupancy: 98 },
  { month: "Oct", occupancy: 92 },
  { month: "Nov", occupancy: 88 },
  { month: "Déc", occupancy: 85 },
];

export function OccupancyTrendsChart() {
  return (
    <div className="bg-white rounded-xl p-4 shadow-sm">
      <h3 className="text-[#403323] mb-2 text-sm">Tendances d'Occupation</h3>
      
      {/* Filters */}
      <div className="flex gap-2 mb-3">
        <select className="text-xs border border-[#e6e6e6] rounded px-2 py-1 bg-white text-[#403323]">
          <option>2025</option>
          <option>2024</option>
        </select>
        <select className="text-xs border border-[#e6e6e6] rounded px-2 py-1 bg-white text-[#403323]">
          <option>Tous types</option>
          <option>Simple</option>
          <option>Double</option>
        </select>
        <select className="text-xs border border-[#e6e6e6] rounded px-2 py-1 bg-white text-[#403323]">
          <option>Tous</option>
          <option>Bât. A</option>
        </select>
      </div>

      <ResponsiveContainer width="100%" height={180}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e6e6e6" />
          <XAxis 
            dataKey="month" 
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
          <Line 
            type="monotone" 
            dataKey="occupancy" 
            stroke="#38712c" 
            strokeWidth={2}
            dot={{ fill: "#38712c", r: 3 }}
            activeDot={{ r: 5 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
