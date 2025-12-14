import React from "react";
import { BarChart3, PieChart, TrendingUp, Users, Home, DollarSign, Calendar, Building, Activity } from "lucide-react";

export default function StatisticsPage() {
  const statistics = {
    occupancy: {
      current: 80,
      previous: 75,
      trend: "+5%",
      monthly: [85, 82, 88, 90, 78, 75, 80, 95, 98, 92, 88, 85]
    },
    revenue: {
      current: 45280,
      previous: 40420,
      trend: "+12%",
      monthly: [38000, 39500, 41000, 42500, 40500, 39800, 42000, 44000, 46000, 45000, 43500, 45280]
    },
    residents: {
      current: 96,
      previous: 92,
      trend: "+4%",
      newThisMonth: 12
    },
    rooms: {
      total: 120,
      occupied: 96,
      available: 24,
      maintenance: 8
    }
  };

  return (
    <div className="flex-1 p-6 overflow-y-auto">
      <div className="max-w-full">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold text-[#403323]">Statistiques & Rapports</h1>
            <p className="text-sm text-gray-500 mt-1">Analyses détaillées et métriques de performance</p>
          </div>
          <div className="flex gap-3">
            <select className="px-4 py-2 border border-gray-300 rounded-lg text-sm">
              <option>Ce mois</option>
              <option>3 derniers mois</option>
              <option>Cette année</option>
              <option>Année dernière</option>
            </select>
            <button className="px-4 py-2 bg-[#38712c] text-white rounded-lg hover:bg-[#2d5a23]">
              Exporter rapport
            </button>
          </div>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Taux d'occupation</p>
                <p className="text-3xl font-bold text-[#38712c] mt-2">{statistics.occupancy.current}%</p>
              </div>
              <div className="p-3 bg-[#38712c]/10 rounded-lg">
                <Home className="w-6 h-6 text-[#38712c]" />
              </div>
            </div>
            <div className="mt-4">
              <div className={`flex items-center text-sm ${statistics.occupancy.trend.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                <TrendingUp className="w-4 h-4 mr-1" />
                {statistics.occupancy.trend} vs mois dernier
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Revenus mensuels</p>
                <p className="text-3xl font-bold text-blue-600 mt-2">{statistics.revenue.current.toLocaleString()}€</p>
              </div>
              <div className="p-3 bg-blue-100 rounded-lg">
                <DollarSign className="w-6 h-6 text-blue-600" />
              </div>
            </div>
            <div className="mt-4">
              <div className={`flex items-center text-sm ${statistics.revenue.trend.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                <TrendingUp className="w-4 h-4 mr-1" />
                {statistics.revenue.trend} vs mois dernier
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Pensionnaires</p>
                <p className="text-3xl font-bold text-purple-600 mt-2">{statistics.residents.current}</p>
              </div>
              <div className="p-3 bg-purple-100 rounded-lg">
                <Users className="w-6 h-6 text-purple-600" />
              </div>
            </div>
            <div className="mt-4">
              <div className={`flex items-center text-sm ${statistics.residents.trend.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                <TrendingUp className="w-4 h-4 mr-1" />
                {statistics.residents.trend} ({statistics.residents.newThisMonth} nouveaux)
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Chambres disponibles</p>
                <p className="text-3xl font-bold text-green-600 mt-2">{statistics.rooms.available}</p>
              </div>
              <div className="p-3 bg-green-100 rounded-lg">
                <Building className="w-6 h-6 text-green-600" />
              </div>
            </div>
            <div className="mt-4">
              <div className="text-sm text-gray-600">
                {statistics.rooms.maintenance} en maintenance
              </div>
            </div>
          </div>
        </div>

        {/* Graphiques */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Graphique d'occupation */}
          <div className="bg-white rounded-xl shadow border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-[#403323]">Évolution de l'occupation</h2>
              <Activity className="w-5 h-5 text-gray-400" />
            </div>
            <div className="h-64">
              {/* Graphique simplifié avec barres */}
              <div className="flex items-end h-48 space-x-1">
                {statistics.occupancy.monthly.map((value, index) => (
                  <div key={index} className="flex-1 flex flex-col items-center">
                    <div 
                      className="w-full bg-[#38712c] rounded-t-lg hover:bg-[#2d5a23] transition-all"
                      style={{ height: `${value}%` }}
                      title={`${value}%`}
                    ></div>
                    <span className="text-xs text-gray-500 mt-2">
                      {['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'][index]}
                    </span>
                  </div>
                ))}
              </div>
              <div className="flex justify-center mt-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-[#38712c] mr-2"></div>
                  <span className="text-sm text-gray-600">Taux d'occupation (%)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Graphique de revenus */}
          <div className="bg-white rounded-xl shadow border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-[#403323]">Évolution des revenus</h2>
              <TrendingUp className="w-5 h-5 text-gray-400" />
            </div>
            <div className="h-64">
              {/* Graphique simplifié avec lignes */}
              <div className="relative h-48">
                {statistics.revenue.monthly.map((value, index, array) => {
                  const nextValue = array[index + 1];
                  if (!nextValue) return null;
                  
                  const x1 = (index / 11) * 100;
                  const x2 = ((index + 1) / 11) * 100;
                  const y1 = 100 - ((value - 35000) / 15000) * 100;
                  const y2 = 100 - ((nextValue - 35000) / 15000) * 100;
                  
                  return (
                    <React.Fragment key={index}>
                      <line
                        x1={`${x1}%`}
                        y1={`${y1}%`}
                        x2={`${x2}%`}
                        y2={`${y2}%`}
                        stroke="#38712c"
                        strokeWidth="2"
                        className="chart-line"
                      />
                      <circle
                        cx={`${x1}%`}
                        cy={`${y1}%`}
                        r="3"
                        fill="#38712c"
                        className="chart-dot"
                      />
                    </React.Fragment>
                  );
                })}
              </div>
              <div className="flex justify-center mt-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-blue-600 mr-2"></div>
                  <span className="text-sm text-gray-600">Revenus mensuels (€)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Statistiques détaillées */}
        <div className="bg-white rounded-xl shadow border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-[#403323] mb-6">Métriques détaillées</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-4">
              <div className="text-2xl font-bold text-[#38712c] mb-2">6.2</div>
              <p className="text-sm text-gray-500">Durée moyenne (mois)</p>
            </div>
            
            <div className="text-center p-4">
              <div className="text-2xl font-bold text-blue-600 mb-2">18%</div>
              <p className="text-sm text-gray-500">Taux de rotation</p>
            </div>
            
            <div className="text-center p-4">
              <div className="text-2xl font-bold text-purple-600 mb-2">92%</div>
              <p className="text-sm text-gray-500">Satisfaction clients</p>
            </div>
            
            <div className="text-center p-4">
              <div className="text-2xl font-bold text-green-600 mb-2">15%</div>
              <p className="text-sm text-gray-500">Croissance annuelle</p>
            </div>
          </div>

          {/* Répartition par type */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <h3 className="text-md font-semibold text-[#403323] mb-4">Répartition par type de chambre</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium">Simples</span>
                  <span className="text-sm font-medium">60%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-[#38712c] h-2 rounded-full" style={{ width: '60%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium">Doubles</span>
                  <span className="text-sm font-medium">30%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: '30%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium">Suites</span>
                  <span className="text-sm font-medium">10%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-purple-600 h-2 rounded-full" style={{ width: '10%' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Tableau des performances */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <h3 className="text-md font-semibold text-[#403323] mb-4">Performances par bâtiment</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500">Bâtiment</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500">Chambres</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500">Occupées</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500">Taux</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500">Revenus</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500">Performance</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {[
                    { building: "Bâtiment A", rooms: 60, occupied: 52, revenue: "24,500€", performance: "Excellent" },
                    { building: "Bâtiment B", rooms: 40, occupied: 32, revenue: "15,200€", performance: "Bon" },
                    { building: "Bâtiment C", rooms: 20, occupied: 12, revenue: "5,580€", performance: "Moyen" },
                  ].map((item, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-4 py-4">{item.building}</td>
                      <td className="px-4 py-4">{item.rooms}</td>
                      <td className="px-4 py-4">{item.occupied}</td>
                      <td className="px-4 py-4">
                        {Math.round((item.occupied / item.rooms) * 100)}%
                      </td>
                      <td className="px-4 py-4 font-medium">{item.revenue}</td>
                      <td className="px-4 py-4">
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                          item.performance === "Excellent" 
                            ? "bg-green-100 text-green-800"
                            : item.performance === "Bon"
                            ? "bg-blue-100 text-blue-800"
                            : "bg-yellow-100 text-yellow-800"
                        }`}>
                          {item.performance}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}