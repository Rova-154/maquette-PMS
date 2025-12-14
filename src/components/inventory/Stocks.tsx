import React from "react";
import { Search, Filter, Plus, Package, AlertTriangle, TrendingUp } from "lucide-react";

export default function Stocks() {
  const inventory = [
    { id: 1, item: "Matelas Standard", category: "Literie", currentStock: 120, minStock: 50, maxStock: 200, unit: "unité", status: "Normal" },
    { id: 2, item: "Draps Coton", category: "Literie", currentStock: 240, minStock: 100, maxStock: 300, unit: "paire", status: "Normal" },
    { id: 3, item: "Oreillers", category: "Literie", currentStock: 180, minStock: 80, maxStock: 250, unit: "unité", status: "Normal" },
    { id: 4, item: "Serviettes de bain", category: "Hygiène", currentStock: 300, minStock: 150, maxStock: 400, unit: "unité", status: "Normal" },
    { id: 5, item: "Produits nettoyants", category: "Entretien", currentStock: 45, minStock: 30, maxStock: 100, unit: "litre", status: "Faible" },
    { id: 6, item: "Ampoules LED", category: "Électricité", currentStock: 60, minStock: 40, maxStock: 120, unit: "unité", status: "Normal" },
    { id: 7, item: "Papier toilette", category: "Hygiène", currentStock: 85, minStock: 50, maxStock: 150, unit: "rouleau", status: "Normal" },
    { id: 8, item: "Produits vaisselle", category: "Entretien", currentStock: 25, minStock: 20, maxStock: 60, unit: "litre", status: "Critique" },
  ];

  const stockValue = inventory.reduce((sum, item) => {
    const values: Record<string, number> = {
      "Matelas Standard": 150,
      "Draps Coton": 25,
      "Oreillers": 40,
      "Serviettes de bain": 15,
      "Produits nettoyants": 8,
      "Ampoules LED": 5,
      "Papier toilette": 2,
      "Produits vaisselle": 6,
    };
    return sum + (values[item.item] || 0) * item.currentStock;
  }, 0);

  return (
    <div className="flex-1 p-6 overflow-y-auto">
      <div className="max-w-full">
        {/* Title & Actions */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-2xl font-bold text-[#403323] mb-1">Gestion des Stocks</h1>
            <p className="text-sm text-gray-500">Suivi et gestion des inventaires</p>
          </div>
          <div className="flex gap-2">
            <button className="bg-[#38712c] text-white px-4 py-2 rounded-md hover:bg-[#2d5a23] transition-colors text-sm font-medium flex items-center gap-2">
              <Plus className="w-4 h-4" />
              Nouvelle commande
            </button>
            <button className="border border-[#e6e6e6] text-[#403323] px-4 py-2 rounded-md hover:bg-[#f5f5f5] transition-colors text-sm font-medium">
              Inventaire complet
            </button>
          </div>
        </div>

        {/* KPI Cards - Compact */}
        <div className="grid grid-cols-4 gap-3 mb-4">
          <div className="bg-white rounded-lg p-3 border border-gray-200">
            <div className="text-xs text-gray-500 mb-1">Valeur totale</div>
            <div className="text-xl font-bold text-[#38712c]">{Math.round(stockValue/1000)}K€</div>
          </div>
          <div className="bg-white rounded-lg p-3 border border-gray-200 border-l-3 border-[#38712c]">
            <div className="text-xs text-gray-500 mb-1">Articles</div>
            <div className="text-xl font-bold text-[#38712c]">{inventory.length}</div>
          </div>
          <div className="bg-white rounded-lg p-3 border border-gray-200 border-l-3 border-[#ff7f27]">
            <div className="text-xs text-gray-500 mb-1">Stock faible</div>
            <div className="text-xl font-bold text-[#ff7f27]">2</div>
          </div>
          <div className="bg-white rounded-lg p-3 border border-gray-200 border-l-3 border-[#403323]">
            <div className="text-xs text-gray-500 mb-1">Taux rotation</div>
            <div className="text-xl font-bold text-[#403323]">85%</div>
          </div>
        </div>

        {/* Search & Filters */}
        <div className="bg-white rounded-lg p-4 mb-6 border border-gray-200">
          <div className="flex items-center gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Rechercher par article, catégorie..."
                className="w-full pl-10 pr-4 py-2 border border-[#e6e6e6] rounded text-sm text-[#403323] focus:outline-none focus:border-[#ff7f27]"
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-[#403323]" />
              <select className="text-sm border border-[#e6e6e6] rounded px-3 py-2 text-[#403323]">
                <option>Toutes catégories</option>
                <option>Literie</option>
                <option>Hygiène</option>
                <option>Entretien</option>
                <option>Électricité</option>
              </select>
              <select className="text-sm border border-[#e6e6e6] rounded px-3 py-2 text-[#403323]">
                <option>Tous statuts</option>
                <option>Normal</option>
                <option>Faible</option>
                <option>Critique</option>
              </select>
            </div>
          </div>
        </div>

        {/* Tableau des stocks */}
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden mb-6">
          <div className="p-4 border-b border-gray-200 bg-[#f5f5f5]">
            <h2 className="text-lg font-semibold text-[#403323]">Inventaire détaillé</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-[#f5f5f5]">
                <tr>
                  <th className="text-left px-4 py-3 text-xs font-medium text-[#403323] uppercase">Article</th>
                  <th className="text-left px-4 py-3 text-xs font-medium text-[#403323] uppercase">Catégorie</th>
                  <th className="text-left px-4 py-3 text-xs font-medium text-[#403323] uppercase">Stock actuel</th>
                  <th className="text-left px-4 py-3 text-xs font-medium text-[#403323] uppercase">Stock min</th>
                  <th className="text-left px-4 py-3 text-xs font-medium text-[#403323] uppercase">Stock max</th>
                  <th className="text-left px-4 py-3 text-xs font-medium text-[#403323] uppercase">Unité</th>
                  <th className="text-left px-4 py-3 text-xs font-medium text-[#403323] uppercase">Statut</th>
                  <th className="text-left px-4 py-3 text-xs font-medium text-[#403323] uppercase">Actions</th>
                </tr>
              </thead>
              <tbody>
                {inventory.map((item) => (
                  <tr key={item.id} className="border-t border-[#e6e6e6] hover:bg-[#f5f5f5]">
                    <td className="px-4 py-3">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-gradient-to-r from-[#38712c] to-[#4a8c3a] rounded-lg flex items-center justify-center mr-2">
                          <Package className="w-4 h-4 text-white" />
                        </div>
                        <div className="font-medium text-[#403323] text-sm">{item.item}</div>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <span className="inline-block px-2 py-1 rounded text-xs bg-gray-100 text-gray-700 border border-gray-200">
                        {item.category}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-sm font-medium text-[#403323]">{item.currentStock}</td>
                    <td className="px-4 py-3 text-sm text-[#403323]">{item.minStock}</td>
                    <td className="px-4 py-3 text-sm text-[#403323]">{item.maxStock}</td>
                    <td className="px-4 py-3 text-sm text-[#403323]">{item.unit}</td>
                    <td className="px-4 py-3">
                      <span className={`inline-block px-2 py-1 rounded text-xs font-medium ${
                        item.status === "Normal" 
                          ? "bg-green-50 text-green-700 border border-green-100" 
                          : item.status === "Faible"
                          ? "bg-amber-50 text-amber-700 border border-amber-100"
                          : "bg-red-50 text-red-700 border border-red-100"
                      }`}>
                        {item.status}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex gap-2">
                        <button className="text-sm text-[#38712c] hover:text-[#2d5a23]">
                          Commander
                        </button>
                        <button className="text-sm text-[#403323] hover:text-[#ff7f27]">
                          Détails
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Niveaux critiques */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-[#403323]">Niveaux de stock critiques</h2>
              <AlertTriangle className="w-5 h-5 text-[#403323]" />
            </div>
            <div className="space-y-4">
              {inventory
                .filter(item => item.status !== "Normal")
                .map(item => {
                  const percentage = (item.currentStock / item.maxStock) * 100;
                  return (
                    <div key={item.id} className="p-4 border border-gray-200 rounded-lg hover:bg-[#f5f5f5]">
                      <div className="flex justify-between mb-2">
                        <span className="font-medium text-[#403323]">{item.item}</span>
                        <span className="font-medium text-[#403323]">{item.currentStock}/{item.maxStock}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full ${
                            percentage < 30 ? 'bg-red-500' : 'bg-amber-500'
                          }`}
                          style={{ width: `${percentage}%` }}
                        ></div>
                      </div>
                      <div className="flex justify-between text-sm text-gray-500 mt-1">
                        <span>Seuil critique: {item.minStock}</span>
                        <span className={`font-medium ${
                          percentage < 30 ? 'text-red-600' : 'text-amber-600'
                        }`}>
                          {percentage.toFixed(0)}%
                        </span>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>

          {/* Répartition par catégorie */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-[#403323]">Répartition par catégorie</h2>
              <TrendingUp className="w-5 h-5 text-[#403323]" />
            </div>
            <div className="space-y-4">
              {[
                { category: "Literie", value: 540, color: "from-blue-500 to-cyan-500", percentage: 45 },
                { category: "Hygiène", value: 385, color: "from-green-500 to-emerald-500", percentage: 32 },
                { category: "Entretien", value: 70, color: "from-amber-500 to-orange-500", percentage: 6 },
                { category: "Électricité", value: 60, color: "from-purple-500 to-violet-500", percentage: 5 },
                { category: "Divers", value: 150, color: "from-gray-500 to-slate-500", percentage: 12 },
              ].map((cat, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-[#403323]">{cat.category}</span>
                    <span className="font-medium text-[#403323]">{cat.value} unités</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div 
                      className={`h-2.5 rounded-full bg-gradient-to-r ${cat.color}`}
                      style={{ width: `${cat.percentage}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-sm text-gray-500 mt-1">
                    <span>{cat.percentage}% du total</span>
                    <span>{cat.value} unités</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}