import { Download, FileText, Calendar, User, Home, ArrowRight } from "lucide-react";


export function OccupantHistory() {
  return (
    <div className="flex-1 p-6 overflow-y-auto">
      <div className="max-w-full">
        {/* Title & Export Buttons */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-[#403323]">Historique des occupants</h1>
            <p className="text-sm text-gray-500 mt-1">Suivi complet de l'occupation des chambres</p>
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
        <div className="bg-white rounded-xl p-4 mb-6 shadow-sm">
          <div className="flex items-center gap-3">
            <select className="text-xs border border-[#e6e6e6] rounded px-3 py-2 bg-white text-[#403323]">
              <option>Toutes les chambres</option>
              <option>Ch. 104 - Bât. A</option>
              <option>Ch. 207 - Bât. A</option>
              <option>Ch. 315 - Bât. B</option>
            </select>
            <select className="text-xs border border-[#e6e6e6] rounded px-3 py-2 bg-white text-[#403323]">
              <option>Tous bâtiments</option>
              <option>Bâtiment A</option>
              <option>Bâtiment B</option>
              <option>Bâtiment C</option>
            </select>
            <select className="text-xs border border-[#e6e6e6] rounded px-3 py-2 bg-white text-[#403323]">
              <option>Tous statuts</option>
              <option>Actuel</option>
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
        <div className="grid grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-xl p-4 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#38712c]/10 rounded-lg flex items-center justify-center">
                <User className="w-5 h-5 text-[#38712c]" />
              </div>
              <div>
                <div className="text-xs text-gray-500">Total occupants</div>
                <div className="text-xl text-[#403323]">243</div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#ff7f27]/10 rounded-lg flex items-center justify-center">
                <Home className="w-5 h-5 text-[#ff7f27]" />
              </div>
              <div>
                <div className="text-xs text-gray-500">Actuels</div>
                <div className="text-xl text-[#403323]">96</div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#403323]/10 rounded-lg flex items-center justify-center">
                <Calendar className="w-5 h-5 text-[#403323]" />
              </div>
              <div>
                <div className="text-xs text-gray-500">Durée moyenne</div>
                <div className="text-xl text-[#403323]">6.2 mois</div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#38712c]/10 rounded-lg flex items-center justify-center">
                <ArrowRight className="w-5 h-5 text-[#38712c]" />
              </div>
              <div>
                <div className="text-xs text-gray-500">Taux rotation</div>
                <div className="text-xl text-[#403323]">18%</div>
              </div>
            </div>
          </div>
        </div>

        {/* History Table */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-[#f5f5f5]">
                <tr>
                  <th className="text-left px-6 py-3 text-xs text-[#403323] font-medium">Chambre</th>
                  <th className="text-left px-6 py-3 text-xs text-[#403323] font-medium">Pensionnaire</th>
                  <th className="text-left px-6 py-3 text-xs text-[#403323] font-medium">Arrivée</th>
                  <th className="text-left px-6 py-3 text-xs text-[#403323] font-medium">Départ</th>
                  <th className="text-left px-6 py-3 text-xs text-[#403323] font-medium">Durée</th>
                  <th className="text-left px-6 py-3 text-xs text-[#403323] font-medium">Statut</th>
                  <th className="text-left px-6 py-3 text-xs text-[#403323] font-medium">Notes</th>
                </tr>
              </thead>
              <tbody>
                {occupantHistory.map((entry) => (
                  <tr key={entry.id} className="border-b border-[#e6e6e6] hover:bg-[#f5f5f5]">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <Home className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-[#403323]">{entry.room}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 bg-[#38712c] rounded-full flex items-center justify-center text-white text-xs">
                          {entry.resident.split(' ').map(n => n[0]).join('')}
                        </div>
                        <span className="text-sm text-[#403323]">{entry.resident}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-3 h-3 text-gray-400" />
                        <span className="text-sm text-[#403323]">{entry.arrival}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      {entry.departure ? (
                        <div className="flex items-center gap-2">
                          <Calendar className="w-3 h-3 text-gray-400" />
                          <span className="text-sm text-[#403323]">{entry.departure}</span>
                        </div>
                      ) : (
                        <span className="text-sm text-gray-400">En cours</span>
                      )}
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm text-[#403323]">{entry.duration}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`text-xs px-2 py-1 rounded ${
                        entry.status === "Actuel"
                          ? "bg-[#38712c]/10 text-[#38712c]"
                          : "bg-gray-100 text-gray-600"
                      }`}>
                        {entry.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm text-gray-600">{entry.notes}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {/* Footer Stats */}
          <div className="border-t border-[#e6e6e6] px-6 py-4 bg-[#f5f5f5]">
            <div className="text-xs text-gray-500">
              Affichage 10 entrées sur un total de 243 occupations
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}