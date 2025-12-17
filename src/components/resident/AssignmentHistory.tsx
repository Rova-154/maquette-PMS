import { Download, FileText, Calendar, Home, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const historyData = [
  {
    id: 1,
    date: "01/09/2024",
    resident: "Sophie Martin",
    fromRoom: null,
    toRoom: "Ch. 104 - Bât. A",
    reason: "Nouvelle arrivée",
    assignedBy: "Admin Principal",
    status: "Actif"
  },
  {
    id: 2,
    date: "15/06/2024",
    resident: "Sophie Martin",
    fromRoom: "Ch. 215 - Bât. A",
    toRoom: "Ch. 104 - Bât. A",
    reason: "Changement demandé - Préférence étage inférieur",
    assignedBy: "Admin Principal",
    status: "Terminé"
  },
  {
    id: 3,
    date: "10/01/2024",
    resident: "Sophie Martin",
    fromRoom: "Ch. 308 - Bât. B",
    toRoom: "Ch. 215 - Bât. A",
    reason: "Problème de chauffage dans l'ancienne chambre",
    assignedBy: "Responsable Maintenance",
    status: "Terminé"
  },
  {
    id: 4,
    date: "01/12/2024",
    resident: "Lucas Dubois",
    fromRoom: null,
    toRoom: "Ch. 207 - Bât. A",
    reason: "Nouvelle arrivée",
    assignedBy: "Admin Principal",
    status: "Actif"
  },
  {
    id: 5,
    date: "25/11/2024",
    resident: "Emma Leroy",
    fromRoom: "Ch. 310 - Bât. B",
    toRoom: "Ch. 315 - Bât. B",
    reason: "Upgrade vers chambre plus grande",
    assignedBy: "Admin Principal",
    status: "Actif"
  },
  {
    id: 6,
    date: "20/11/2024",
    resident: "Thomas Bernard",
    fromRoom: null,
    toRoom: "Ch. 412 - Bât. B",
    reason: "Nouvelle arrivée",
    assignedBy: "Admin Principal",
    status: "Actif"
  },
  {
    id: 7,
    date: "15/10/2024",
    resident: "Camille Moreau",
    fromRoom: "Ch. 105 - Bât. A",
    toRoom: "Ch. 108 - Bât. A",
    reason: "Demande de chambre plus proche de l'ascenseur",
    assignedBy: "Admin Principal",
    status: "Actif"
  },
  {
    id: 8,
    date: "05/10/2024",
    resident: "Alexandre Roux",
    fromRoom: null,
    toRoom: "Ch. 203 - Bât. A",
    reason: "Nouvelle arrivée",
    assignedBy: "Responsable Accueil",
    status: "Actif"
  },
  {
    id: 9,
    date: "28/09/2024",
    resident: "Julie Durand",
    fromRoom: "Ch. 405 - Bât. B",
    toRoom: "Ch. 310 - Bât. B",
    reason: "Réduction de loyer - changement pour chambre standard",
    assignedBy: "Admin Principal",
    status: "Terminé"
  },
  {
    id: 10,
    date: "12/09/2024",
    resident: "Nicolas Laurent",
    fromRoom: null,
    toRoom: "Ch. 405 - Bât. B",
    reason: "Nouvelle arrivée",
    assignedBy: "Admin Principal",
    status: "Actif"
  },
];

export function AssignmentHistory() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const totalItems = 156;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePrevious = () => {
    setCurrentPage(prev => Math.max(1, prev - 1));
  };

  const handleNext = () => {
    setCurrentPage(prev => Math.min(totalPages, prev + 1));
  };

  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  return (
    <div className="flex-1 p-4 md:p-6 overflow-y-auto">
      <div className="max-w-full h-full flex flex-col">
        {/* Title & Export Buttons */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
          <div>
            <h1 className="text-xl md:text-2xl font-bold text-[#403323]">Historique des assignations</h1>
            <p className="text-sm text-gray-500 mt-1">Suivi complet de tous les changements de chambres</p>
          </div>
          <div className="flex gap-2">
            <button className="px-3 md:px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm text-[#403323] flex items-center gap-2">
              <Download className="w-4 h-4" />
              <span className="hidden sm:inline">Export CSV</span>
            </button>
            <button className="px-3 md:px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm text-[#403323] flex items-center gap-2">
              <FileText className="w-4 h-4" />
              <span className="hidden sm:inline">Export PDF</span>
            </button>
          </div>
        </div>

        {/* Filters Bar */}
        <div className="bg-white rounded-lg border border-gray-200 p-4 mb-6">
          <div className="flex flex-wrap gap-3">
            <select className="text-xs border border-gray-300 rounded px-3 py-2 bg-white text-[#403323] focus:outline-none focus:border-[#38712c] flex-1 min-w-[150px]">
              <option>Tous les pensionnaires</option>
              <option>Sophie Martin</option>
              <option>Lucas Dubois</option>
              <option>Emma Leroy</option>
            </select>
            <select className="text-xs border border-gray-300 rounded px-3 py-2 bg-white text-[#403323] focus:outline-none focus:border-[#38712c] flex-1 min-w-[120px]">
              <option>Tous bâtiments</option>
              <option>Bâtiment A</option>
              <option>Bâtiment B</option>
              <option>Bâtiment C</option>
            </select>
            <select className="text-xs border border-gray-300 rounded px-3 py-2 bg-white text-[#403323] focus:outline-none focus:border-[#38712c] flex-1 min-w-[100px]">
              <option>Tous statuts</option>
              <option>Actif</option>
              <option>Terminé</option>
            </select>
            <div className="flex items-center gap-2 flex-1 min-w-[200px]">
              <input
                type="date"
                className="text-xs border border-gray-300 rounded px-3 py-2 bg-white text-[#403323] focus:outline-none focus:border-[#38712c] flex-1"
                placeholder="Date début"
              />
              <span className="text-xs text-gray-400">à</span>
              <input
                type="date"
                className="text-xs border border-gray-300 rounded px-3 py-2 bg-white text-[#403323] focus:outline-none focus:border-[#38712c] flex-1"
                placeholder="Date fin"
              />
            </div>
          </div>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#38712c]/10 rounded-lg flex items-center justify-center">
                <Home className="w-5 h-5 text-[#38712c]" />
              </div>
              <div>
                <div className="text-xs text-gray-500">Total assignations</div>
                <div className="text-lg text-[#403323] font-semibold">156</div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#ff7f27]/10 rounded-lg flex items-center justify-center">
                <Calendar className="w-5 h-5 text-[#ff7f27]" />
              </div>
              <div>
                <div className="text-xs text-gray-500">Ce mois</div>
                <div className="text-lg text-[#403323] font-semibold">12</div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#403323]/10 rounded-lg flex items-center justify-center">
                <ArrowRight className="w-5 h-5 text-[#403323]" />
              </div>
              <div>
                <div className="text-xs text-gray-500">Changements</div>
                <div className="text-lg text-[#403323] font-semibold">43</div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#38712c]/10 rounded-lg flex items-center justify-center">
                <Home className="w-5 h-5 text-[#38712c]" />
              </div>
              <div>
                <div className="text-xs text-gray-500">Actifs</div>
                <div className="text-lg text-[#403323] font-semibold">96</div>
              </div>
            </div>
          </div>
        </div>

        {/* Table Container */}
        <div className="bg-white rounded-lg border border-gray-200 flex-1 overflow-hidden flex flex-col">
          <div className="overflow-x-auto flex-1">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="text-left px-4 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Pensionnaire</th>
                  <th className="text-left px-4 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                  <th className="text-left px-4 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Mouvement</th>
                  <th className="text-left px-4 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Raison</th>
                  <th className="text-left px-4 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Assigné par</th>
                  <th className="text-left px-4 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Statut</th>
                </tr>
              </thead>
              <tbody>
                {historyData.map((entry) => (
                  <tr key={entry.id} className="border-t border-gray-200 hover:bg-gray-50">
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-[#38712c] rounded-full flex items-center justify-center text-white text-sm font-medium">
                          {entry.resident.split(' ').map(n => n[0]).join('')}
                        </div>
                        <span className="text-sm text-[#403323]">{entry.resident}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-[#403323]">{entry.date}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2 text-sm">
                        {entry.fromRoom ? (
                          <>
                            <span className="text-gray-500">{entry.fromRoom}</span>
                            <ArrowRight className="w-4 h-4 text-gray-400 flex-shrink-0" />
                            <span className="text-[#403323]">{entry.toRoom}</span>
                          </>
                        ) : (
                          <span className="text-[#38712c] font-medium">{entry.toRoom}</span>
                        )}
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <span className="text-sm text-gray-600">{entry.reason}</span>
                    </td>
                    <td className="px-4 py-3">
                      <span className="text-sm text-[#403323]">{entry.assignedBy}</span>
                    </td>
                    <td className="px-4 py-3">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        entry.status === "Actif"
                          ? "bg-[#38712c]/10 text-[#38712c]"
                          : "bg-gray-100 text-gray-600"
                      }`}>
                        {entry.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="border-t border-gray-200 px-4 py-3 flex items-center justify-between">
            <div className="text-sm text-gray-500">
              Affichage {startItem}-{endItem} sur un total de {totalItems} assignations
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
              <span className="px-1 text-gray-400">...</span>
              <button 
                onClick={() => setCurrentPage(totalPages - 1)}
                className={`px-2.5 py-1 border rounded text-xs ${
                  currentPage === totalPages - 1 
                    ? "bg-[#38712c] text-white border-[#38712c]" 
                    : "border-gray-300 text-[#403323] hover:bg-gray-50"
                }`}
              >
                {totalPages - 1}
              </button>
              <button 
                onClick={() => setCurrentPage(totalPages)}
                className={`px-2.5 py-1 border rounded text-xs ${
                  currentPage === totalPages 
                    ? "bg-[#38712c] text-white border-[#38712c]" 
                    : "border-gray-300 text-[#403323] hover:bg-gray-50"
                }`}
              >
                {totalPages}
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