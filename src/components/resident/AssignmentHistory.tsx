import { Download, FileText, Calendar, Home, ArrowRight } from "lucide-react";

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
  return (
    <div className="flex-1 p-6 overflow-y-auto">
      <div className="max-w-full h-full flex flex-col">
        {/* Title & Export Buttons */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-xl text-[#403323]">Historique des assignations</h1>
            <p className="text-sm text-gray-500 mt-1">Suivi complet de tous les changements de chambres</p>
          </div>
          <div className="flex gap-2">
            <button className="px-4 py-2 border border-[#e6e6e6] rounded-lg hover:bg-white transition-colors text-sm text-[#403323] flex items-center gap-2">
              <Download className="w-4 h-4" />
              Export CSV
            </button>
            <button className="px-4 py-2 border border-[#e6e6e6] rounded-lg hover:bg-white transition-colors text-sm text-[#403323] flex items-center gap-2">
              <FileText className="w-4 h-4" />
              Export PDF
            </button>
          </div>
        </div>

        {/* Filters Bar */}
        <div className="bg-white rounded-xl p-4 mb-4 shadow-sm">
          <div className="flex items-center gap-3">
            <select className="text-xs border border-[#e6e6e6] rounded px-3 py-2 bg-white text-[#403323]">
              <option>Tous les pensionnaires</option>
              <option>Sophie Martin</option>
              <option>Lucas Dubois</option>
              <option>Emma Leroy</option>
            </select>
            <select className="text-xs border border-[#e6e6e6] rounded px-3 py-2 bg-white text-[#403323]">
              <option>Tous bâtiments</option>
              <option>Bâtiment A</option>
              <option>Bâtiment B</option>
              <option>Bâtiment C</option>
            </select>
            <select className="text-xs border border-[#e6e6e6] rounded px-3 py-2 bg-white text-[#403323]">
              <option>Tous statuts</option>
              <option>Actif</option>
              <option>Terminé</option>
            </select>
            <input
              type="date"
              className="text-xs border border-[#e6e6e6] rounded px-3 py-2 bg-white text-[#403323]"
              placeholder="Date début"
            />
            <span className="text-xs text-gray-400">à</span>
            <input
              type="date"
              className="text-xs border border-[#e6e6e6] rounded px-3 py-2 bg-white text-[#403323]"
              placeholder="Date fin"
            />
          </div>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-4 gap-4 mb-4">
          <div className="bg-white rounded-xl p-4 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#38712c]/10 rounded-lg flex items-center justify-center">
                <Home className="w-5 h-5 text-[#38712c]" />
              </div>
              <div>
                <div className="text-xs text-gray-500">Total assignations</div>
                <div className="text-xl text-[#403323]">156</div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#ff7f27]/10 rounded-lg flex items-center justify-center">
                <Calendar className="w-5 h-5 text-[#ff7f27]" />
              </div>
              <div>
                <div className="text-xs text-gray-500">Ce mois</div>
                <div className="text-xl text-[#403323]">12</div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#403323]/10 rounded-lg flex items-center justify-center">
                <ArrowRight className="w-5 h-5 text-[#403323]" />
              </div>
              <div>
                <div className="text-xs text-gray-500">Changements</div>
                <div className="text-xl text-[#403323]">43</div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#38712c]/10 rounded-lg flex items-center justify-center">
                <Home className="w-5 h-5 text-[#38712c]" />
              </div>
              <div>
                <div className="text-xs text-gray-500">Actifs</div>
                <div className="text-xl text-[#403323]">96</div>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline Table */}
        <div className="bg-white rounded-xl shadow-sm flex-1 overflow-hidden flex flex-col">
          <div className="overflow-auto flex-1">
            <table className="w-full">
              <thead className="bg-[#f5f5f5] sticky top-0">
                <tr>
                  <th className="text-left px-4 py-3 text-xs text-[#403323]">Date</th>
                  <th className="text-left px-4 py-3 text-xs text-[#403323]">Pensionnaire</th>
                  <th className="text-left px-4 py-3 text-xs text-[#403323]">Mouvement</th>
                  <th className="text-left px-4 py-3 text-xs text-[#403323]">Raison</th>
                  <th className="text-left px-4 py-3 text-xs text-[#403323]">Assigné par</th>
                  <th className="text-left px-4 py-3 text-xs text-[#403323]">Statut</th>
                </tr>
              </thead>
              <tbody>
                {historyData.map((entry) => (
                  <tr key={entry.id} className="border-b border-[#e6e6e6] hover:bg-[#f5f5f5]">
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-[#403323]">{entry.date}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 bg-[#38712c] rounded-full flex items-center justify-center text-white text-xs">
                          {entry.resident.split(' ').map(n => n[0]).join('')}
                        </div>
                        <span className="text-sm text-[#403323]">{entry.resident}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2 text-sm">
                        {entry.fromRoom ? (
                          <>
                            <span className="text-gray-500">{entry.fromRoom}</span>
                            <ArrowRight className="w-3 h-3 text-gray-400" />
                            <span className="text-[#403323]">{entry.toRoom}</span>
                          </>
                        ) : (
                          <span className="text-[#38712c]">{entry.toRoom}</span>
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
                      <span className={`text-xs px-2 py-1 rounded ${
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

          {/* Footer Stats */}
          <div className="border-t border-[#e6e6e6] px-4 py-3 bg-[#f5f5f5]">
            <div className="text-xs text-gray-500">
              Affichage 10 entrées sur un total de 156 assignations
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}