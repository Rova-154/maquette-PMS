import React from "react";
import { Download, TrendingUp, TrendingDown, Search, Filter } from "lucide-react";

export default function PersonnelCosts() {
  const costData = [
    { id: 1, category: "Salaires", monthly: "14000€", annual: "168000€", trend: "+3%" },
    { id: 2, category: "Formations", monthly: "800€", annual: "9600€", trend: "+15%" },
    { id: 3, category: "Équipements", monthly: "1200€", annual: "14400€", trend: "+5%" },
    { id: 4, category: "Avantages sociaux", monthly: "2500€", annual: "30000€", trend: "+2%" },
    { id: 5, category: "Frais de déplacement", monthly: "600€", annual: "7200€", trend: "-10%" },
  ];

  return (
    <div className="flex-1 p-6 overflow-y-auto">
      <div className="max-w-full">
        {/* Title & Actions */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-2xl font-bold text-[#403323] mb-1">Suivi des Coûts du Personnel</h1>
            <p className="text-sm text-gray-500">Analyse et gestion des dépenses liées au personnel</p>
          </div>
          <div className="flex gap-2">
            <button className="bg-[#38712c] text-white px-4 py-2 rounded-md hover:bg-[#2d5a23] transition-colors text-sm font-medium">
              Générer rapport
            </button>
            <button className="flex items-center gap-2 border border-[#e6e6e6] text-[#403323] px-4 py-2 rounded-md hover:bg-[#f5f5f5] transition-colors text-sm font-medium">
              <Download className="w-4 h-4" />
              Exporter
            </button>
          </div>
        </div>

        {/* KPI Cards - Compact */}
        <div className="grid grid-cols-4 gap-3 mb-4">
          <div className="bg-white rounded-lg p-3 border border-gray-200">
            <div className="text-xs text-gray-500 mb-1">Coût mensuel</div>
            <div className="text-xl font-bold text-[#38712c]">18,100€</div>
          </div>
          <div className="bg-white rounded-lg p-3 border border-gray-200 border-l-3 border-[#38712c]">
            <div className="text-xs text-gray-500 mb-1">Coût annuel</div>
            <div className="text-xl font-bold text-[#38712c]">217,200€</div>
          </div>
          <div className="bg-white rounded-lg p-3 border border-gray-200 border-l-3 border-[#ff7f27]">
            <div className="text-xs text-gray-500 mb-1">Par employé</div>
            <div className="text-xl font-bold text-[#ff7f27]">3,016€</div>
          </div>
          <div className="bg-white rounded-lg p-3 border border-gray-200 border-l-3 border-[#403323]">
            <div className="text-xs text-gray-500 mb-1">Tendance</div>
            <div className="text-xl font-bold text-[#403323]">+2.5%</div>
          </div>
        </div>

        {/* Search & Filters */}
        <div className="bg-white rounded-lg p-4 mb-6 border border-gray-200">
          <div className="flex items-center gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Rechercher par catégorie..."
                className="w-full pl-10 pr-4 py-2 border border-[#e6e6e6] rounded text-sm text-[#403323] focus:outline-none focus:border-[#ff7f27]"
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-[#403323]" />
              <select className="text-sm border border-[#e6e6e6] rounded px-3 py-2 text-[#403323]">
                <option>Tous périodes</option>
                <option>Mensuel</option>
                <option>Trimestriel</option>
                <option>Annuel</option>
              </select>
              <select className="text-sm border border-[#e6e6e6] rounded px-3 py-2 text-[#403323]">
                <option>Tous départements</option>
                <option>Sécurité</option>
                <option>Maintenance</option>
                <option>Administration</option>
              </select>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Tableau des coûts */}
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="p-4 border-b border-gray-200 bg-[#f5f5f5]">
              <h2 className="text-lg font-semibold text-[#403323]">Détail des coûts par catégorie</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-[#f5f5f5]">
                  <tr>
                    <th className="text-left px-4 py-3 text-xs font-medium text-[#403323] uppercase">Catégorie</th>
                    <th className="text-left px-4 py-3 text-xs font-medium text-[#403323] uppercase">Mensuel</th>
                    <th className="text-left px-4 py-3 text-xs font-medium text-[#403323] uppercase">Annuel</th>
                    <th className="text-left px-4 py-3 text-xs font-medium text-[#403323] uppercase">Tendance</th>
                  </tr>
                </thead>
                <tbody>
                  {costData.map((item) => (
                    <tr key={item.id} className="border-t border-[#e6e6e6] hover:bg-[#f5f5f5]">
                      <td className="px-4 py-3 text-sm font-medium text-[#403323]">{item.category}</td>
                      <td className="px-4 py-3 text-sm text-[#403323]">{item.monthly}</td>
                      <td className="px-4 py-3 text-sm text-[#403323]">{item.annual}</td>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-1">
                          {item.trend.startsWith('+') ? (
                            <TrendingUp className="w-4 h-4 text-[#ff7f27]" />
                          ) : (
                            <TrendingDown className="w-4 h-4 text-[#38712c]" />
                          )}
                          <span className={`text-sm font-medium ${
                            item.trend.startsWith('+') ? 'text-[#ff7f27]' : 'text-[#38712c]'
                          }`}>
                            {item.trend}
                          </span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Graphique */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-[#403323] mb-6">Évolution des coûts sur 12 mois</h2>
            <div className="flex items-end h-48 gap-2">
              {[
                { month: 'J', value: 17000 },
                { month: 'F', value: 17200 },
                { month: 'M', value: 17500 },
                { month: 'A', value: 17400 },
                { month: 'M', value: 17600 },
                { month: 'J', value: 17800 },
                { month: 'J', value: 18000 },
                { month: 'A', value: 17900 },
                { month: 'S', value: 18100 },
                { month: 'O', value: 18200 },
                { month: 'N', value: 18300 },
                { month: 'D', value: 18100 },
              ].map((item, index) => (
                <div key={index} className="flex-1 flex flex-col items-center">
                  <div 
                    className="w-full bg-gradient-to-t from-[#38712c] to-[#4a8c3a] rounded-t-lg hover:from-[#2d5a23] hover:to-[#38712c] transition-all cursor-pointer"
                    style={{ height: `${(item.value / 20000) * 100}%` }}
                    title={`${item.value}€`}
                  ></div>
                  <span className="text-xs text-gray-500 mt-2">{item.month}</span>
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-4">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-[#38712c] to-[#4a8c3a]"></div>
                <span>Coûts mensuels (€)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Recommandations */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-[#403323] mb-4">Recommandations d'optimisation</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-100">
              <h4 className="font-medium text-[#38712c] mb-2">Réduire les coûts de formation</h4>
              <p className="text-sm text-gray-700">
                Considérer des formations en ligne pour réduire les frais de 30%
              </p>
            </div>
            <div className="p-4 bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg border border-amber-100">
              <h4 className="font-medium text-[#ff7f27] mb-2">Optimiser les équipements</h4>
              <p className="text-sm text-gray-700">
                Étendre la durée de vie des équipements de 12 à 18 mois
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}