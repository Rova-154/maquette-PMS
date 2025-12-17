import React, { useState } from "react";
import { Download, TrendingUp, TrendingDown, Search, Filter, ChevronLeft, ChevronRight, DollarSign, TrendingUp as UpIcon, TrendingDown as DownIcon, PieChart, AlertCircle, User } from "lucide-react";

export default function PersonnelCosts() {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const [searchTerm, setSearchTerm] = useState("");
  const [periodFilter, setPeriodFilter] = useState("Tous périodes");
  const [departmentFilter, setDepartmentFilter] = useState("Tous départements");

  const costData = [
    { id: 1, category: "Salaires", monthly: "14000€", annual: "168000€", trend: "+3%" },
    { id: 2, category: "Formations", monthly: "800€", annual: "9600€", trend: "+15%" },
    { id: 3, category: "Équipements", monthly: "1200€", annual: "14400€", trend: "+5%" },
    { id: 4, category: "Avantages sociaux", monthly: "2500€", annual: "30000€", trend: "+2%" },
    { id: 5, category: "Frais de déplacement", monthly: "600€", annual: "7200€", trend: "-10%" },
    { id: 6, category: "Assurances", monthly: "1500€", annual: "18000€", trend: "+3%" },
    { id: 7, category: "Matériel de bureau", monthly: "400€", annual: "4800€", trend: "+1%" },
  ];

  // Filtrage
  const filteredData = costData.filter(item => {
    const matchesSearch = searchTerm === "" || 
      item.category.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSearch;
  });

  // Pagination
  const totalItems = filteredData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems);
  const currentData = filteredData.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="flex-1 p-4 md:p-6 overflow-y-auto">
      <div className="max-w-full">
        {/* Title & Actions */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 md:mb-6">
          <div className="mb-4 md:mb-0">
            <h1 className="text-xl md:text-2xl font-bold text-[#403323] mb-1">Suivi des Coûts du Personnel</h1>
            <p className="text-sm text-gray-600">Analyse et gestion des dépenses liées au personnel</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <button className="bg-[#38712c] text-white px-4 py-2 rounded-md hover:bg-[#2d5a23] transition-colors text-sm font-medium w-full md:w-auto">
              Générer rapport
            </button>
            <button className="flex items-center justify-center gap-2 border border-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-50 transition-colors text-sm font-medium w-full md:w-auto">
              <Download className="w-4 h-4" />
              Exporter
            </button>
          </div>
        </div>

        {/* KPI Cards - Uniformisé avec icônes */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4 md:mb-6">
          <div className="bg-white rounded-lg p-3 border border-gray-200">
            <div className="flex items-center gap-2 text-xs text-gray-600 mb-1">
              <DollarSign className="w-3 h-3" />
              Coût mensuel
            </div>
            <div className="text-lg md:text-xl font-bold text-[#38712c]">18,100€</div>
          </div>
          <div className="bg-white rounded-lg p-3 border border-gray-200">
            <div className="flex items-center gap-2 text-xs text-gray-600 mb-1">
              <DollarSign className="w-3 h-3" />
              Coût annuel
            </div>
            <div className="text-lg md:text-xl font-bold text-[#38712c]">217,200€</div>
          </div>
          <div className="bg-white rounded-lg p-3 border border-gray-200">
            <div className="flex items-center gap-2 text-xs text-gray-600 mb-1">
              <User className="w-3 h-3" />
              Par employé
            </div>
            <div className="text-lg md:text-xl font-bold text-[#ff7f27]">3,016€</div>
          </div>
          <div className="bg-white rounded-lg p-3 border border-gray-200">
            <div className="flex items-center gap-2 text-xs text-gray-600 mb-1">
              <TrendingUp className="w-3 h-3" />
              Tendance
            </div>
            <div className="text-lg md:text-xl font-bold text-[#403323]">+2.5%</div>
          </div>
        </div>

        {/* Search & Filters */}
        <div className="bg-white rounded-lg p-4 mb-6 border border-gray-200">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="flex-1 w-full md:w-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Rechercher par catégorie..."
                  className="w-full pl-10 pr-4 py-2 border border-[#e6e6e6] rounded text-sm text-[#403323] focus:outline-none focus:border-[#38712c] focus:ring-1 focus:ring-[#38712c]"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            <div className="flex flex-wrap gap-2 w-full md:w-auto">
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-[#403323]" />
                <select 
                  className="text-sm border border-[#e6e6e6] rounded px-3 py-2 text-[#403323] w-full md:w-auto"
                  value={periodFilter}
                  onChange={(e) => setPeriodFilter(e.target.value)}
                >
                  <option>Tous périodes</option>
                  <option>Mensuel</option>
                  <option>Trimestriel</option>
                  <option>Annuel</option>
                </select>
              </div>
              <select 
                className="text-sm border border-[#e6e6e6] rounded px-3 py-2 text-[#403323] w-full md:w-auto"
                value={departmentFilter}
                onChange={(e) => setDepartmentFilter(e.target.value)}
              >
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
              <div className="flex items-center gap-2">
                <PieChart className="w-5 h-5 text-[#403323]" />
                <h2 className="text-lg font-semibold text-[#403323]">Détail des coûts par catégorie</h2>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-[#f5f5f5] border-b border-gray-200">
                  <tr>
                    <th className="text-left px-4 py-3 text-xs font-medium text-gray-600 uppercase tracking-wider">Catégorie</th>
                    <th className="text-left px-4 py-3 text-xs font-medium text-gray-600 uppercase tracking-wider">Mensuel</th>
                    <th className="text-left px-4 py-3 text-xs font-medium text-gray-600 uppercase tracking-wider">Annuel</th>
                    <th className="text-left px-4 py-3 text-xs font-medium text-gray-600 uppercase tracking-wider">Tendance</th>
                  </tr>
                </thead>
                <tbody>
                  {currentData.map((item) => (
                    <tr key={item.id} className="border-t border-gray-200 hover:bg-[#f5f5f5]">
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-2">
                          <div className={`w-2 h-2 rounded-full ${item.category.includes("Salaire") ? "bg-[#38712c]" : item.category.includes("Formation") ? "bg-[#ff7f27]" : "bg-[#403323]"}`}></div>
                          <span className="text-sm font-medium text-[#403323]">{item.category}</span>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-900">{item.monthly}</td>
                      <td className="px-4 py-3 text-sm text-gray-900">{item.annual}</td>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-1">
                          {item.trend.startsWith('+') ? (
                            <UpIcon className="w-4 h-4 text-[#38712c]" />
                          ) : (
                            <DownIcon className="w-4 h-4 text-[#ff7f27]" />
                          )}
                          <span className={`text-sm font-medium ${item.trend.startsWith('+') ? 'text-[#38712c]' : 'text-[#ff7f27]'}`}>
                            {item.trend}
                          </span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            {/* Pagination */}
            <div className="border-t border-gray-200 px-4 py-3 flex flex-col md:flex-row items-center justify-between gap-3">
              <div className="text-sm text-gray-600">
                Affichage {startIndex + 1}-{endIndex} sur {totalItems}
              </div>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className={`p-2 border border-gray-300 rounded hover:bg-gray-50 ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                {Array.from({ length: Math.min(totalPages, 3) }, (_, i) => {
                  let pageNum;
                  if (totalPages <= 3) {
                    pageNum = i + 1;
                  } else if (currentPage === 1) {
                    pageNum = i + 1;
                  } else if (currentPage === totalPages) {
                    pageNum = totalPages - 2 + i;
                  } else {
                    pageNum = currentPage - 1 + i;
                  }
                  return (
                    <button
                      key={pageNum}
                      onClick={() => handlePageChange(pageNum)}
                      className={`px-3 py-1 border rounded text-sm ${currentPage === pageNum
                          ? 'bg-[#38712c] text-white border-[#38712c]'
                          : 'border-gray-300 text-gray-700 hover:bg-gray-50'}`}
                    >
                      {pageNum}
                    </button>
                  );
                })}
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className={`p-2 border border-gray-300 rounded hover:bg-gray-50 ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Graphique */}
          <div className="bg-white rounded-lg border border-gray-200 p-4 md:p-6">
            <div className="flex items-center gap-2 mb-6">
              <TrendingUp className="w-5 h-5 text-[#403323]" />
              <h2 className="text-lg font-semibold text-[#403323]">Évolution des coûts sur 12 mois</h2>
            </div>
            <div className="flex items-end h-48 gap-1 md:gap-2">
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
                  <span className="text-xs text-gray-600 mt-2">{item.month}</span>
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
        <div className="bg-white rounded-lg border border-gray-200 p-4 md:p-6">
          <div className="flex items-center gap-2 mb-4">
            <AlertCircle className="w-5 h-5 text-[#403323]" />
            <h2 className="text-lg font-semibold text-[#403323]">Recommandations d'optimisation</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-[#38712c]/5 rounded-lg border border-[#38712c]/20">
              <div className="flex items-center gap-2 mb-2">
                <TrendingDown className="w-4 h-4 text-[#38712c]" />
                <h4 className="font-medium text-[#38712c]">Réduire les coûts de formation</h4>
              </div>
              <p className="text-sm text-gray-700">
                Considérer des formations en ligne pour réduire les frais de 30%
              </p>
            </div>
            <div className="p-4 bg-[#ff7f27]/5 rounded-lg border border-[#ff7f27]/20">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="w-4 h-4 text-[#ff7f27]" />
                <h4 className="font-medium text-[#ff7f27]">Optimiser les équipements</h4>
              </div>
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