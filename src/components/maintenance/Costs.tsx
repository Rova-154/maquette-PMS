import { DollarSign, TrendingUp, TrendingDown, PieChart, Download, Filter, Calendar } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart as RechartsPieChart, Pie, Cell } from "recharts";

const monthlyCosts = [
  { month: "Jan", budget: 5000, actual: 4200 },
  { month: "Fév", budget: 5000, actual: 4800 },
  { month: "Mar", budget: 5000, actual: 5200 },
  { month: "Avr", budget: 5000, actual: 3900 },
  { month: "Mai", budget: 5000, actual: 4500 },
  { month: "Juin", budget: 5000, actual: 4700 },
];

const costByCategory = [
  { name: "Plomberie", value: 35, color: "#38712c" },
  { name: "Électricité", value: 25, color: "#ff7f27" },
  { name: "Climatisation", value: 20, color: "#403323" },
  { name: "Menuiserie", value: 15, color: "#8b5cf6" },
  { name: "Informatique", value: 5, color: "#3b82f6" },
];

const recentExpenses = [
  { id: 1, description: "Réparation climatisation", category: "Climatisation", amount: 320, date: "14/02/2025", technician: "Marc Lefebvre" },
  { id: 2, description: "Remplacement robinets", category: "Plomberie", amount: 180, date: "15/02/2025", technician: "Jean Dupont" },
  { id: 3, description: "Câbles électriques", category: "Électricité", amount: 120, date: "12/02/2025", technician: "Pierre Martin" },
  { id: 4, description: "Réparation fenêtre", category: "Menuiserie", amount: 200, date: "10/02/2025", technician: "Jean Dupont" },
  { id: 5, description: "Switch réseau", category: "Informatique", amount: 85, date: "08/02/2025", technician: "Pierre Martin" },
];

export default function Costs() {
  return (
    <div className="flex-1 p-6 overflow-y-auto">
      <div className="max-w-full">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-xl text-[#403323]">Suivi des coûts de maintenance</h1>
            <p className="text-sm text-gray-500 mt-1">Analyse budgétaire et dépenses</p>
          </div>
          <div className="flex gap-2">
            <button className="px-4 py-2 border border-[#e6e6e6] rounded-lg hover:bg-white transition-colors text-sm text-[#403323] flex items-center gap-2">
              <Download className="w-4 h-4" />
              Exporter rapport
            </button>
            <button className="px-4 py-2 bg-[#ff7f27] text-white rounded-lg hover:bg-[#e66f1f] transition-colors text-sm">
              + Nouvelle dépense
            </button>
          </div>
        </div>

        {/* Cartes de synthèse */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-xl p-4 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#38712c]/10 rounded-lg flex items-center justify-center">
                <DollarSign className="w-5 h-5 text-[#38712c]" />
              </div>
              <div>
                <div className="text-xs text-gray-500 mb-1">Budget mensuel</div>
                <div className="text-xl text-[#403323]">€5,000</div>
              </div>
            </div>
            <div className="text-xs text-gray-600 mt-2">Alloué pour février</div>
          </div>

          <div className="bg-white rounded-xl p-4 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#ff7f27]/10 rounded-lg flex items-center justify-center">
                <DollarSign className="w-5 h-5 text-[#ff7f27]" />
              </div>
              <div>
                <div className="text-xs text-gray-500 mb-1">Dépenses actuelles</div>
                <div className="text-xl text-[#403323]">€4,800</div>
              </div>
            </div>
            <div className="text-xs text-[#38712c] mt-2 flex items-center gap-1">
              <TrendingDown className="w-3 h-3" />
              4% sous budget
            </div>
          </div>

          <div className="bg-white rounded-xl p-4 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#403323]/10 rounded-lg flex items-center justify-center">
                <PieChart className="w-5 h-5 text-[#403323]" />
              </div>
              <div>
                <div className="text-xs text-gray-500 mb-1">Coût moyen/inter</div>
                <div className="text-xl text-[#403323]">€157</div>
              </div>
            </div>
            <div className="text-xs text-gray-600 mt-2">30 interventions</div>
          </div>

          <div className="bg-white rounded-xl p-4 shadow-sm border-l-4 border-[#ff7f27]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#ff7f27]/10 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-[#ff7f27]" />
              </div>
              <div>
                <div className="text-xs text-gray-500 mb-1">Vs. mois dernier</div>
                <div className="text-xl text-[#ff7f27]">+12%</div>
              </div>
            </div>
            <div className="text-xs text-gray-600 mt-2">Augmentation saisonnière</div>
          </div>
        </div>

        {/* Graphiques */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          {/* Graphique des coûts mensuels */}
          <div className="bg-white rounded-xl p-4 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-[#403323] text-sm">Évolution mensuelle</h3>
              <div className="flex gap-2">
                <select className="text-xs border border-[#e6e6e6] rounded px-2 py-1 bg-white text-[#403323]">
                  <option>6 mois</option>
                  <option>12 mois</option>
                </select>
                <select className="text-xs border border-[#e6e6e6] rounded px-2 py-1 bg-white text-[#403323]">
                  <option>2025</option>
                  <option>2024</option>
                </select>
              </div>
            </div>
            
            <ResponsiveContainer width="100%" height={180}>
              <BarChart data={monthlyCosts}>
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
                <Bar 
                  dataKey="budget" 
                  fill="#e6e6e6"
                  radius={[4, 4, 0, 0]}
                  name="Budget"
                />
                <Bar 
                  dataKey="actual" 
                  fill="#ff7f27"
                  radius={[4, 4, 0, 0]}
                  name="Réel"
                />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Graphique circulaire par catégorie */}
          <div className="bg-white rounded-xl p-4 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-[#403323] text-sm">Répartition par catégorie</h3>
              <div className="flex gap-2">
                <select className="text-xs border border-[#e6e6e6] rounded px-2 py-1 bg-white text-[#403323]">
                  <option>Ce mois</option>
                  <option>Ce trimestre</option>
                </select>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="w-1/2">
                <ResponsiveContainer width="100%" height={150}>
                  <RechartsPieChart>
                    <Pie
                      data={costByCategory}
                      cx="50%"
                      cy="50%"
                      innerRadius={40}
                      outerRadius={60}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {costByCategory.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </RechartsPieChart>
                </ResponsiveContainer>
              </div>
              <div className="w-1/2 pl-4">
                <div className="space-y-2">
                  {costByCategory.map((category) => (
                    <div key={category.name} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div 
                          className="w-3 h-3 rounded" 
                          style={{ backgroundColor: category.color }}
                        />
                        <span className="text-xs text-[#403323]">{category.name}</span>
                      </div>
                      <span className="text-xs text-gray-600">{category.value}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Barre de filtres */}
        <div className="bg-white rounded-xl p-4 mb-6 shadow-sm">
          <div className="flex items-center gap-3">
            <Calendar className="w-4 h-4 text-[#403323]" />
            <input
              type="date"
              className="text-xs border border-[#e6e6e6] rounded px-3 py-1.5 bg-white text-[#403323]"
              placeholder="Date début"
            />
            <span className="text-sm text-gray-500">à</span>
            <input
              type="date"
              className="text-xs border border-[#e6e6e6] rounded px-3 py-1.5 bg-white text-[#403323]"
              placeholder="Date fin"
            />
            <Filter className="w-4 h-4 text-[#403323]" />
            <select className="text-xs border border-[#e6e6e6] rounded px-3 py-1.5 bg-white text-[#403323]">
              <option>Toutes catégories</option>
              <option>Plomberie</option>
              <option>Électricité</option>
              <option>Climatisation</option>
              <option>Menuiserie</option>
              <option>Informatique</option>
            </select>
            <select className="text-xs border border-[#e6e6e6] rounded px-3 py-1.5 bg-white text-[#403323]">
              <option>Tous techniciens</option>
              <option>Jean Dupont</option>
              <option>Marc Lefebvre</option>
              <option>Pierre Martin</option>
            </select>
          </div>
        </div>

        {/* Dernières dépenses */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-6">
          <div className="p-4 border-b border-[#e6e6e6]">
            <h3 className="text-sm text-[#403323]">Dernières dépenses</h3>
          </div>
          
          <div className="overflow-auto">
            <table className="w-full">
              <thead className="bg-[#f5f5f5]">
                <tr>
                  <th className="text-left px-4 py-3 text-xs text-[#403323]">Description</th>
                  <th className="text-left px-4 py-3 text-xs text-[#403323]">Catégorie</th>
                  <th className="text-left px-4 py-3 text-xs text-[#403323]">Montant</th>
                  <th className="text-left px-4 py-3 text-xs text-[#403323]">Date</th>
                  <th className="text-left px-4 py-3 text-xs text-[#403323]">Technicien</th>
                  <th className="text-left px-4 py-3 text-xs text-[#403323]">Facture</th>
                </tr>
              </thead>
              <tbody>
                {recentExpenses.map((expense) => (
                  <tr key={expense.id} className="border-b border-[#e6e6e6] hover:bg-[#f5f5f5]">
                    <td className="px-4 py-3 text-sm text-[#403323]">{expense.description}</td>
                    <td className="px-4 py-3">
                      <span className={`text-xs px-2 py-1 rounded ${
                        expense.category === "Plomberie" 
                          ? "bg-[#38712c]/10 text-[#38712c]"
                          : expense.category === "Électricité"
                          ? "bg-[#ff7f27]/10 text-[#ff7f27]"
                          : expense.category === "Climatisation"
                          ? "bg-[#403323]/10 text-[#403323]"
                          : expense.category === "Menuiserie"
                          ? "bg-purple-100 text-purple-800"
                          : "bg-blue-100 text-blue-800"
                      }`}>
                        {expense.category}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-1">
                        <DollarSign className="w-3 h-3 text-[#38712c]" />
                        <span className="text-sm font-medium text-[#403323]">€{expense.amount}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-sm text-[#403323]">{expense.date}</td>
                    <td className="px-4 py-3 text-sm text-[#403323]">{expense.technician}</td>
                    <td className="px-4 py-3">
                      <button className="text-xs text-[#38712c] hover:text-[#2d5a23]">
                        Télécharger
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Footer avec total */}
          <div className="border-t border-[#e6e6e6] px-4 py-3 bg-[#f5f5f5] flex items-center justify-between">
            <div className="text-xs text-gray-500">
              5 dépenses affichées
            </div>
            <div className="text-sm font-medium text-[#403323]">
              Total: €905
            </div>
          </div>
        </div>

        {/* Vue budgétaire */}
        <div className="bg-gradient-to-r from-[#38712c] to-[#2d5a23] rounded-xl p-5 text-white shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm opacity-90 mb-1">Vue budgétaire annuelle</div>
              <div className="text-3xl">€28,500</div>
              <div className="text-sm opacity-90 mt-1">Dépenses totales sur 6 mois</div>
            </div>
            <div className="text-right">
              <div className="text-sm opacity-90 mb-1">Budget restant</div>
              <div className="text-2xl">€1,500</div>
              <div className="text-sm opacity-90 mt-1">Pour le reste de l'année</div>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-white/20">
            <div className="flex items-center justify-between text-sm">
              <span>Utilisation du budget annuel</span>
              <span>95%</span>
            </div>
            <div className="w-full bg-white/30 rounded-full h-2 mt-2">
              <div 
                className="bg-white h-2 rounded-full" 
                style={{ width: '95%' }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}