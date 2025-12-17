import { Filter, DollarSign, Home, UtensilsCrossed, Briefcase, Plus, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const residents = [
  { id: 1, name: "Sophie Martin", housing: 650, meals: 200, services: 50, extras: 30, total: 930 },
  { id: 2, name: "Lucas Dubois", housing: 650, meals: 100, services: 50, extras: 0, total: 800 },
  { id: 3, name: "Emma Leroy", housing: 650, meals: 200, services: 50, extras: 45, total: 945 },
  { id: 4, name: "Thomas Bernard", housing: 650, meals: 100, services: 50, extras: 20, total: 820 },
  { id: 5, name: "Camille Moreau", housing: 650, meals: 200, services: 50, extras: 0, total: 900 },
  { id: 6, name: "Alexandre Roux", housing: 650, meals: 100, services: 50, extras: 15, total: 815 },
  { id: 7, name: "Julie Durand", housing: 650, meals: 200, services: 50, extras: 35, total: 935 },
  { id: 8, name: "Nicolas Laurent", housing: 650, meals: 100, services: 50, extras: 10, total: 810 },
];

export function FeeGeneration() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const totalItems = residents.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  const handlePrevious = () => {
    setCurrentPage(prev => Math.max(1, prev - 1));
  };

  const handleNext = () => {
    setCurrentPage(prev => Math.min(totalPages, prev + 1));
  };

  const currentResidents = residents.slice(startItem - 1, endItem);

  return (
    <div className="flex-1 p-4 md:p-6 overflow-y-auto">
      <div className="max-w-full h-full flex flex-col">
        {/* Title & Action Button */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 md:mb-6 gap-4">
          <div>
            <h1 className="text-xl md:text-2xl font-bold text-[#403323]">Génération des frais mensuels</h1>
            <p className="text-sm text-gray-500 mt-1">Génération et gestion des factures mensuelles</p>
          </div>
          <button className="px-4 py-2 bg-[#38712c] text-white rounded-lg hover:bg-[#2d5a23] transition-colors text-sm font-medium">
            Générer les frais du mois
          </button>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg border border-gray-200 p-4 mb-4 md:mb-6">
          <div className="flex flex-wrap gap-2 md:gap-3">
            <select className="text-xs border border-gray-300 rounded px-3 py-2 bg-white text-[#403323] focus:outline-none focus:border-[#38712c] flex-1 min-w-[150px]">
              <option>Décembre 2024</option>
              <option>Janvier 2025</option>
              <option>Février 2025</option>
            </select>
            <select className="text-xs border border-gray-300 rounded px-3 py-2 bg-white text-[#403323] focus:outline-none focus:border-[#38712c] flex-1 min-w-[120px]">
              <option>2024</option>
              <option>2025</option>
            </select>
            <select className="text-xs border border-gray-300 rounded px-3 py-2 bg-white text-[#403323] focus:outline-none focus:border-[#38712c] flex-1 min-w-[140px]">
              <option>Tous types de frais</option>
              <option>Logement</option>
              <option>Restauration</option>
              <option>Services</option>
              <option>Extras</option>
            </select>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-4 md:mb-6">
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-[#38712c]/10 rounded-lg flex items-center justify-center">
                <Home className="w-5 h-5 text-[#38712c]" />
              </div>
              <div>
                <div className="text-xs text-gray-500">Logement</div>
                <div className="text-lg font-semibold text-[#403323]">€62,400</div>
              </div>
            </div>
            <div className="text-xs text-gray-600">96 pensionnaires</div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-[#ff7f27]/10 rounded-lg flex items-center justify-center">
                <UtensilsCrossed className="w-5 h-5 text-[#ff7f27]" />
              </div>
              <div>
                <div className="text-xs text-gray-500">Restauration</div>
                <div className="text-lg font-semibold text-[#403323]">€14,200</div>
              </div>
            </div>
            <div className="text-xs text-gray-600">58 pension complète</div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-[#403323]/10 rounded-lg flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-[#403323]" />
              </div>
              <div>
                <div className="text-xs text-gray-500">Services</div>
                <div className="text-lg font-semibold text-[#403323]">€4,800</div>
              </div>
            </div>
            <div className="text-xs text-gray-600">96 pensionnaires</div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-[#ff7f27]/10 rounded-lg flex items-center justify-center">
                <Plus className="w-5 h-5 text-[#ff7f27]" />
              </div>
              <div>
                <div className="text-xs text-gray-500">Extras</div>
                <div className="text-lg font-semibold text-[#403323]">€1,850</div>
              </div>
            </div>
            <div className="text-xs text-gray-600">Services additionnels</div>
          </div>
        </div>

        {/* Total Summary */}
        <div className="bg-gradient-to-r from-[#38712c] to-[#2d5a23] rounded-lg p-4 mb-4 md:mb-6 text-white">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <div className="text-sm opacity-90 mb-1">Total des frais générés</div>
              <div className="text-2xl md:text-3xl font-bold">€83,250</div>
            </div>
            <div className="text-right">
              <div className="text-sm opacity-90 mb-1">Période</div>
              <div className="text-lg">Décembre 2024</div>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-lg border border-gray-200 flex-1 overflow-hidden flex flex-col">
          <div className="overflow-x-auto flex-1">
            <table className="w-full min-w-[800px]">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="text-left px-4 py-3 text-xs font-medium text-gray-500 uppercase">Pensionnaire</th>
                  <th className="text-left px-4 py-3 text-xs font-medium text-gray-500 uppercase">Logement</th>
                  <th className="text-left px-4 py-3 text-xs font-medium text-gray-500 uppercase">Restauration</th>
                  <th className="text-left px-4 py-3 text-xs font-medium text-gray-500 uppercase">Services</th>
                  <th className="text-left px-4 py-3 text-xs font-medium text-gray-500 uppercase">Extras</th>
                  <th className="text-left px-4 py-3 text-xs font-medium text-gray-500 uppercase">Total</th>
                </tr>
              </thead>
              <tbody>
                {currentResidents.map((resident) => (
                  <tr key={resident.id} className="border-t border-gray-200 hover:bg-gray-50">
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 bg-[#38712c] rounded-full flex items-center justify-center text-white text-xs font-medium">
                          {resident.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <span className="text-sm text-[#403323]">{resident.name}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-sm text-[#403323]">€{resident.housing}</td>
                    <td className="px-4 py-3 text-sm text-[#403323]">€{resident.meals}</td>
                    <td className="px-4 py-3 text-sm text-[#403323]">€{resident.services}</td>
                    <td className="px-4 py-3 text-sm text-[#403323]">€{resident.extras}</td>
                    <td className="px-4 py-3 text-sm font-medium text-[#38712c]">€{resident.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="border-t border-gray-200 px-4 py-3 flex items-center justify-between">
            <div className="text-sm text-gray-500">
              Affichage {startItem}-{endItem} sur {totalItems}
            </div>
            <div className="flex items-center gap-1">
              <button 
                onClick={handlePrevious}
                disabled={currentPage === 1}
                className={`p-1.5 border border-gray-300 rounded hover:bg-gray-50 ${
                  currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                <ChevronLeft className="w-4 h-4 text-gray-600" />
              </button>
              <button 
                onClick={() => setCurrentPage(1)}
                className={`px-2.5 py-1 border rounded text-xs ${
                  currentPage === 1 
                    ? "bg-[#38712c] text-white border-[#38712c]" 
                    : "border-gray-300 text-[#403323] hover:bg-gray-50"
                }`}
              >
                1
              </button>
              <button 
                onClick={() => setCurrentPage(2)}
                className={`px-2.5 py-1 border rounded text-xs ${
                  currentPage === 2 
                    ? "bg-[#38712c] text-white border-[#38712c]" 
                    : "border-gray-300 text-[#403323] hover:bg-gray-50"
                }`}
              >
                2
              </button>
              <button 
                onClick={handleNext}
                disabled={currentPage === totalPages}
                className={`p-1.5 border border-gray-300 rounded hover:bg-gray-50 ${
                  currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                <ChevronRight className="w-4 h-4 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}