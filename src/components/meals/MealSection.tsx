// MealSection.tsx - Version complète corrigée
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const popularDishes = [
  { dish: "Poulet rôti", count: 145 },
  { dish: "Pasta carbonara", count: 132 },
  { dish: "Salade César", count: 98 },
  { dish: "Pizza margherita", count: 87 },
  { dish: "Couscous", count: 76 },
];

const mealFrequency = [
  { period: "Petit-déjeuner", count: 520 },
  { period: "Déjeuner", count: 680 },
  { period: "Dîner", count: 595 },
];

// Déclarez la fonction d'abord
function MealSection() {
  return (
    <div className="grid grid-cols-2 gap-4">
      {/* Popular Dishes */}
      <div className="bg-white rounded-xl p-4 shadow-sm">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-[#403323] text-sm">Plats Populaires</h3>
          <div className="flex gap-2">
            <select className="text-xs border border-[#e6e6e6] rounded px-2 py-1 bg-white text-[#403323]">
              <option>Cette semaine</option>
              <option>Ce mois</option>
            </select>
            <select className="text-xs border border-[#e6e6e6] rounded px-2 py-1 bg-white text-[#403323]">
              <option>2025</option>
              <option>2024</option>
            </select>
          </div>
        </div>
        
        <ResponsiveContainer width="100%" height={140}>
          <BarChart data={popularDishes} layout="vertical">
            <CartesianGrid strokeDasharray="3 3" stroke="#e6e6e6" />
            <XAxis type="number" tick={{ fontSize: 10 }} stroke="#403323" />
            <YAxis 
              dataKey="dish" 
              type="category" 
              width={100}
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
              dataKey="count" 
              fill="#38712c"
              radius={[0, 4, 4, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Meal Frequency */}
      <div className="bg-white rounded-xl p-4 shadow-sm">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-[#403323] text-sm">Fréquence des Repas</h3>
          <div className="flex gap-2">
            <select className="text-xs border border-[#e6e6e6] rounded px-2 py-1 bg-white text-[#403323]">
              <option>Cette semaine</option>
              <option>Ce mois</option>
            </select>
            <select className="text-xs border border-[#e6e6e6] rounded px-2 py-1 bg-white text-[#403323]">
              <option>Tous types</option>
              <option>Végétarien</option>
            </select>
          </div>
        </div>
        
        <ResponsiveContainer width="100%" height={140}>
          <BarChart data={mealFrequency}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e6e6e6" />
            <XAxis 
              dataKey="period" 
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
              dataKey="count" 
              fill="#ff7f27"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

// Export à la fois comme default et comme export nommé
export default MealSection;
export { MealSection };