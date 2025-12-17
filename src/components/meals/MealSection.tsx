import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from "recharts";
import { Utensils, Coffee, Heart, TrendingUp, TrendingDown, Clock, Star, Users, ChefHat, Flame, Leaf, Beef } from "lucide-react";

const popularDishes = [
  { dish: "Poulet rôti", count: 145, icon: "🍗", satisfaction: 94, color: "#38712c" },
  { dish: "Pasta carbonara", count: 132, icon: "🍝", satisfaction: 92, color: "#ff7f27" },
  { dish: "Salade César", count: 98, icon: "🥗", satisfaction: 88, color: "#4a8c3a" },
  { dish: "Pizza margherita", count: 87, icon: "🍕", satisfaction: 96, color: "#ff6b35" },
  { dish: "Couscous", count: 76, icon: "🌾", satisfaction: 90, color: "#403323" },
  { dish: "Soupe du jour", count: 65, icon: "🥣", satisfaction: 85, color: "#2d5a23" },
];

const mealFrequency = [
  { period: "Petit-déjeuner", count: 520, avgTime: "7h30", trend: "+5%" },
  { period: "Déjeuner", count: 680, avgTime: "12h30", trend: "+3%" },
  { period: "Dîner", count: 595, avgTime: "19h00", trend: "+2%" },
  { period: "Collation", count: 210, avgTime: "16h00", trend: "+12%" },
];

const weeklyTrend = [
  { day: "Lun", repas: 420 },
  { day: "Mar", repas: 450 },
  { day: "Mer", repas: 480 },
  { day: "Jeu", repas: 460 },
  { day: "Ven", repas: 500 },
  { day: "Sam", repas: 380 },
  { day: "Dim", repas: 350 },
];

const dietaryCategories = [
  { name: "Standard", value: 65, color: "#38712c" },
  { name: "Sans sel", value: 15, color: "#ff7f27" },
  { name: "Diabétique", value: 12, color: "#403323" },
  { name: "Végétarien", value: 8, color: "#4a8c3a" },
];

const recentMeals = [
  { id: 1, name: "Menu du jour", type: "Déjeuner", time: "12:30", residents: 85, status: "Terminé", rating: 4.5 },
  { id: 2, name: "Petit-déjeuner", type: "Petit-déj", time: "07:45", residents: 92, status: "Terminé", rating: 4.2 },
  { id: 3, name: "Dîner spécial", type: "Dîner", time: "19:15", residents: 78, status: "En cours", rating: 4.8 },
  { id: 4, name: "Goûter", type: "Collation", time: "16:00", residents: 65, status: "Planifié", rating: 4.0 },
];

function MealSection() {
  return (
    <div className="space-y-6">
      {/* KPI Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-3">
            <div className="p-2 bg-[#38712c]/10 rounded-lg">
              <Utensils className="w-5 h-5 text-[#38712c]" />
            </div>
            <div className="flex items-center text-xs text-green-600 font-medium">
              <TrendingUp className="w-3 h-3 mr-1" />
              +8%
            </div>
          </div>
          <div className="text-2xl font-bold text-[#403323] mb-1">1,895</div>
          <div className="text-sm text-gray-600">Repas servis aujourd'hui</div>
        </div>

        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-3">
            <div className="p-2 bg-[#ff7f27]/10 rounded-lg">
              <Coffee className="w-5 h-5 text-[#ff7f27]" />
            </div>
            <div className="flex items-center text-xs text-green-600 font-medium">
              <TrendingUp className="w-3 h-3 mr-1" />
              +5%
            </div>
          </div>
          <div className="text-2xl font-bold text-[#403323] mb-1">94%</div>
          <div className="text-sm text-gray-600">Satisfaction moyenne</div>
        </div>

        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-3">
            <div className="p-2 bg-[#403323]/10 rounded-lg">
              <Clock className="w-5 h-5 text-[#403323]" />
            </div>
            <div className="flex items-center text-xs text-red-600 font-medium">
              <TrendingDown className="w-3 h-3 mr-1" />
              -2%
            </div>
          </div>
          <div className="text-2xl font-bold text-[#403323] mb-1">12.4€</div>
          <div className="text-sm text-gray-600">Coût moyen par repas</div>
        </div>

        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-3">
            <div className="p-2 bg-gradient-to-r from-[#38712c] to-[#4a8c3a] rounded-lg">
              <Users className="w-5 h-5 text-white" />
            </div>
            <div className="flex items-center text-xs text-green-600 font-medium">
              <TrendingUp className="w-3 h-3 mr-1" />
              +3%
            </div>
          </div>
          <div className="text-2xl font-bold text-[#403323] mb-1">625</div>
          <div className="text-sm text-gray-600">Résidents servis</div>
        </div>
      </div>

      {/* Main Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Popular Dishes with enhanced design */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-[#38712c]/10 rounded-lg">
                <ChefHat className="w-5 h-5 text-[#38712c]" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#403323]">Plats Populaires</h3>
                <p className="text-sm text-gray-500">Top 6 cette semaine</p>
              </div>
            </div>
            <div className="flex gap-2">
              <select className="text-sm border border-gray-200 rounded-lg px-3 py-2 bg-white text-[#403323] focus:outline-none focus:border-[#38712c]">
                <option>Cette semaine</option>
                <option>Ce mois</option>
                <option>Ce trimestre</option>
              </select>
            </div>
          </div>
          
          <div className="space-y-4">
            {popularDishes.map((item, index) => (
              <div key={index} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors">
                <div className="flex items-center gap-4">
                  <div className="text-2xl">{item.icon}</div>
                  <div>
                    <div className="font-medium text-[#403323]">{item.dish}</div>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
                      <span>{item.satisfaction}% satisfaction</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <div className="font-bold text-lg text-[#403323]">{item.count}</div>
                    <div className="text-xs text-gray-500">repas</div>
                  </div>
                  <div className="w-2 h-10 rounded-full" style={{ backgroundColor: item.color }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Meal Frequency with enhanced design */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-[#ff7f27]/10 rounded-lg">
                <Clock className="w-5 h-5 text-[#ff7f27]" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#403323]">Fréquence des Repas</h3>
                <p className="text-sm text-gray-500">Distribution journalière</p>
              </div>
            </div>
            <div className="flex gap-2">
              <select className="text-sm border border-gray-200 rounded-lg px-3 py-2 bg-white text-[#403323] focus:outline-none focus:border-[#38712c]">
                <option>Tous types</option>
                <option>Végétarien</option>
                <option>Sans sel</option>
              </select>
            </div>
          </div>
          
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={mealFrequency}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis 
                  dataKey="period" 
                  tick={{ fontSize: 12, fill: "#403323" }}
                  stroke="#403323"
                />
                <YAxis 
                  tick={{ fontSize: 12, fill: "#403323" }}
                  stroke="#403323"
                />
                <Tooltip 
                  contentStyle={{ 
                    fontSize: '12px',
                    borderRadius: '8px',
                    border: '1px solid #e6e6e6',
                    backgroundColor: 'white'
                  }}
                  formatter={(value) => [`${value} repas`, 'Nombre']}
                />
                <Bar 
                  dataKey="count" 
                  radius={[8, 8, 0, 0]}
                >
                  {mealFrequency.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={index === 0 ? "#38712c" : index === 1 ? "#ff7f27" : index === 2 ? "#403323" : "#4a8c3a"} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          
          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
            {mealFrequency.map((item, index) => (
              <div key={index} className="text-center p-3 bg-gray-50 rounded-lg">
                <div className="text-sm text-gray-600">{item.period}</div>
                <div className="text-xl font-bold text-[#403323] mt-1">{item.count}</div>
                <div className="flex items-center justify-center gap-1 text-xs mt-1">
                  <Clock className="w-3 h-3" />
                  <span className="text-gray-500">{item.avgTime}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Second Row of Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Weekly Trend */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-[#403323]/10 rounded-lg">
              <TrendingUp className="w-5 h-5 text-[#403323]" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#403323]">Tendance Hebdomadaire</h3>
              <p className="text-sm text-gray-500">7 derniers jours</p>
            </div>
          </div>
          
          <div className="h-56">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={weeklyTrend}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis 
                  dataKey="day" 
                  tick={{ fontSize: 12, fill: "#403323" }}
                  stroke="#403323"
                />
                <YAxis 
                  tick={{ fontSize: 12, fill: "#403323" }}
                  stroke="#403323"
                />
                <Tooltip 
                  contentStyle={{ 
                    fontSize: '12px',
                    borderRadius: '8px',
                    border: '1px solid #e6e6e6',
                    backgroundColor: 'white'
                  }}
                  formatter={(value) => [`${value} repas`, 'Nombre']}
                />
                <Line 
                  type="monotone" 
                  dataKey="repas" 
                  stroke="#38712c" 
                  strokeWidth={3}
                  dot={{ r: 4, fill: "#38712c" }}
                  activeDot={{ r: 6, fill: "#ff7f27" }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Dietary Categories */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-[#4a8c3a]/10 rounded-lg">
              <Leaf className="w-5 h-5 text-[#4a8c3a]" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#403323]">Régimes Spéciaux</h3>
              <p className="text-sm text-gray-500">Répartition des régimes</p>
            </div>
          </div>
          
          <div className="h-56 flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={dietaryCategories}
                  cx="50%"
                  cy="50%"
                  innerRadius={40}
                  outerRadius={70}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {dietaryCategories.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  formatter={(value) => [`${value}%`, 'Pourcentage']}
                  contentStyle={{ 
                    fontSize: '12px',
                    borderRadius: '8px',
                    border: '1px solid #e6e6e6',
                    backgroundColor: 'white'
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          
          <div className="grid grid-cols-2 gap-3 mt-4">
            {dietaryCategories.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                <span className="text-sm text-gray-700">{item.name}</span>
                <span className="ml-auto text-sm font-medium text-[#403323]">{item.value}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Meals */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-gradient-to-r from-[#38712c] to-[#ff7f27] rounded-lg">
              <Flame className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#403323]">Repas Récents</h3>
              <p className="text-sm text-gray-500">Dernières prestations</p>
            </div>
          </div>
          
          <div className="space-y-4">
            {recentMeals.map((meal) => (
              <div key={meal.id} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg border border-gray-100 transition-colors">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${meal.type === 'Déjeuner' ? 'bg-[#38712c]/10' : meal.type === 'Petit-déj' ? 'bg-[#ff7f27]/10' : 'bg-[#403323]/10'}`}>
                    {meal.type === 'Déjeuner' ? '🍽️' : meal.type === 'Petit-déj' ? '☕' : '🌙'}
                  </div>
                  <div>
                    <div className="font-medium text-[#403323]">{meal.name}</div>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <span className="px-2 py-0.5 bg-gray-100 rounded-full">{meal.type}</span>
                      <span>•</span>
                      <span>{meal.time}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <div className="flex items-center gap-1">
                      <Users className="w-3 h-3 text-gray-500" />
                      <span className="text-sm font-medium text-[#403323]">{meal.residents}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
                      <span className="text-xs text-gray-500">{meal.rating}/5</span>
                    </div>
                  </div>
                  
                  <div className={`px-3 py-1 rounded-full text-xs font-medium ${meal.status === 'Terminé' 
                    ? 'bg-[#38712c]/10 text-[#38712c]' 
                    : meal.status === 'En cours'
                    ? 'bg-[#ff7f27]/10 text-[#ff7f27]'
                    : 'bg-gray-100 text-gray-600'}`}>
                    {meal.status}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Summary */}
      <div className="bg-gradient-to-r from-[#38712c] to-[#4a8c3a] rounded-xl p-6 text-white">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div>
            <h3 className="text-xl font-bold mb-2">Performance des Repas</h3>
            <p className="text-white/80">Ce mois, les repas ont satisfait 94% des résidents avec une augmentation de 8% par rapport au mois dernier.</p>
          </div>
          <div className="flex gap-6 mt-4 md:mt-0">
            <div className="text-center">
              <div className="text-3xl font-bold">12.4€</div>
              <div className="text-sm text-white/80">Coût moyen</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">94%</div>
              <div className="text-sm text-white/80">Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">98%</div>
              <div className="text-sm text-white/80">Résidents servis</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MealSection;
export { MealSection };