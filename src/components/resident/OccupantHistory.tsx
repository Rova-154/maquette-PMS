import { Download, FileText, Calendar, User, Home, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const occupantHistory = [
  {
    id: 1,
    resident: "Sophie Martin",
    photo: "SM",
    room: "Ch. 104 - Bât. A",
    arrival: "01/09/2024",
    departure: null,
    duration: "4 mois",
    status: "Actuel",
    notes: "Étudiante"
  },
  {
    id: 2,
    resident: "Lucas Dubois",
    photo: "LD",
    room: "Ch. 207 - Bât. A",
    arrival: "15/09/2024",
    departure: null,
    duration: "3 mois",
    status: "Actuel",
    notes: "Professionnel"
  },
  {
    id: 3,
    resident: "Emma Leroy",
    photo: "EL",
    room: "Ch. 315 - Bât. B",
    arrival: "01/09/2024",
    departure: null,
    duration: "4 mois",
    status: "Actuel",
    notes: "Artiste"
  },
  {
    id: 4,
    resident: "Thomas Bernard",
    photo: "TB",
    room: "Ch. 412 - Bât. B",
    arrival: "10/09/2024",
    departure: null,
    duration: "3 mois",
    status: "Actuel",
    notes: "Chercheur"
  },
  {
    id: 5,
    resident: "Camille Moreau",
    photo: "CM",
    room: "Ch. 108 - Bât. A",
    arrival: "05/09/2024",
    departure: null,
    duration: "4 mois",
    status: "Actuel",
    notes: "Designer"
  },
  {
    id: 6,
    resident: "Alexandre Roux",
    photo: "AR",
    room: "Ch. 203 - Bât. A",
    arrival: "12/09/2024",
    departure: null,
    duration: "3 mois",
    status: "Actuel",
    notes: "Ingénieur"
  },
  {
    id: 7,
    resident: "Julie Durand",
    photo: "JD",
    room: "Ch. 310 - Bât. B",
    arrival: "01/09/2024",
    departure: null,
    duration: "4 mois",
    status: "Actuel",
    notes: "Médecin"
  },
  {
    id: 8,
    resident: "Nicolas Laurent",
    photo: "NL",
    room: "Ch. 405 - Bât. B",
    arrival: "08/09/2024",
    departure: null,
    duration: "3 mois",
    status: "Actuel",
    notes: "Avocat"
  },
  {
    id: 9,
    resident: "Marie Lambert",
    photo: "ML",
    room: "Ch. 215 - Bât. A",
    arrival: "01/06/2024",
    departure: "31/08/2024",
    duration: "3 mois",
    status: "Terminé",
    notes: "Stage terminé"
  },
  {
    id: 10,
    resident: "Pierre Garnier",
    photo: "PG",
    room: "Ch. 308 - Bât. B",
    arrival: "15/05/2024",
    departure: "30/08/2024",
    duration: "3.5 mois",
    status: "Terminé",
    notes: "Contrat terminé"
  },
];

export function OccupantHistory() {
  return (
    <div className="flex-1 p-6 overflow-y-auto">
      <div className="max-w-full">
        {/* Title & Export Buttons */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 mb-1">Historique des occupants</h1>
            <p className="text-sm text-gray-500">Suivi complet de l'occupation des chambres</p>
          </div>
          <div className="flex gap-2">
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm text-gray-700 flex items-center gap-2">
              <Download className="w-4 h-4" />
              Export CSV
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm text-gray-700 flex items-center gap-2">
              <FileText className="w-4 h-4" />
              Export PDF
            </button>
          </div>
        </div>

        {/* Filters Bar */}
        <div className="bg-white rounded-lg p-4 mb-4 border border-gray-200">
          <div className="flex items-center gap-4">
            <select className="text-sm border border-gray-300 rounded px-3 py-2">
              <option>Toutes les chambres</option>
              <option>Ch. 104 - Bât. A</option>
              <option>Ch. 207 - Bât. A</option>
              <option>Ch. 315 - Bât. B</option>
            </select>
            <select className="text-sm border border-gray-300 rounded px-3 py-2">
              <option>Tous bâtiments</option>
              <option>Bâtiment A</option>
              <option>Bâtiment B</option>
              <option>Bâtiment C</option>
            </select>
            <select className="text-sm border border-gray-300 rounded px-3 py-2">
              <option>Tous statuts</option>
              <option>Actuel</option>
              <option>Terminé</option>
            </select>
            <div className="flex items-center gap-2">
              <input
                type="date"
                className="text-sm border border-gray-300 rounded px-3 py-2"
                placeholder="Date début"
              />
              <span className="text-gray-400">à</span>
              <input
                type="date"
                className="text-sm border border-gray-300 rounded px-3 py-2"
                placeholder="Date fin"
              />
            </div>
          </div>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#38712c]/10 rounded-lg flex items-center justify-center">
                <User className="w-5 h-5 text-[#38712c]" />
              </div>
              <div>
                <div className="text-xs text-gray-500">Total occupants</div>
                <div className="text-xl font-semibold text-gray-900">243</div>
              </div>
            </div>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#ff7f27]/10 rounded-lg flex items-center justify-center">
                <Home className="w-5 h-5 text-[#ff7f27]" />
              </div>
              <div>
                <div className="text-xs text-gray-500">Actuels</div>
                <div className="text-xl font-semibold text-gray-900">96</div>
              </div>
            </div>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#403323]/10 rounded-lg flex items-center justify-center">
                <Calendar className="w-5 h-5 text-[#403323]" />
              </div>
              <div>
                <div className="text-xs text-gray-500">Durée moyenne</div>
                <div className="text-xl font-semibold text-gray-900">6.2 mois</div>
              </div>
            </div>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#38712c]/10 rounded-lg flex items-center justify-center">
                <ArrowRight className="w-5 h-5 text-[#38712c]" />
              </div>
              <div>
                <div className="text-xs text-gray-500">Taux rotation</div>
                <div className="text-xl font-semibold text-gray-900">18%</div>
              </div>
            </div>
          </div>
        </div>

        {/* History Table */}
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="text-left px-4 py-3 text-xs font-medium text-gray-500 uppercase">Pensionnaire</th>
                  <th className="text-left px-4 py-3 text-xs font-medium text-gray-500 uppercase">Chambre</th>
                  <th className="text-left px-4 py-3 text-xs font-medium text-gray-500 uppercase">Arrivée</th>
                  <th className="text-left px-4 py-3 text-xs font-medium text-gray-500 uppercase">Départ</th>
                  <th className="text-left px-4 py-3 text-xs font-medium text-gray-500 uppercase">Durée</th>
                  <th className="text-left px-4 py-3 text-xs font-medium text-gray-500 uppercase">Statut</th>
                  <th className="text-left px-4 py-3 text-xs font-medium text-gray-500 uppercase">Notes</th>
                </tr>
              </thead>
              <tbody>
                {occupantHistory.map((entry) => (
                  <tr key={entry.id} className="border-t border-gray-200 hover:bg-gray-50">
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-[#38712c] rounded-full flex items-center justify-center text-white text-xs font-medium">
                          {entry.photo}
                        </div>
                        <div className="font-medium text-gray-900 text-sm">{entry.resident}</div>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-900">{entry.room}</td>
                    <td className="px-4 py-3 text-sm text-gray-900">{entry.arrival}</td>
                    <td className="px-4 py-3 text-sm text-gray-900">
                      {entry.departure || <span className="text-gray-400">En cours</span>}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-900">{entry.duration}</td>
                    <td className="px-4 py-3">
                      <span className={`inline-block px-2 py-1 rounded text-xs ${
                        entry.status === "Actuel"
                          ? "bg-[#38712c]/10 text-[#38712c]"
                          : "bg-gray-100 text-gray-600"
                      }`}>
                        {entry.status}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-600 max-w-[120px] truncate">{entry.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="border-t border-gray-200 px-4 py-3 flex items-center justify-between">
            <div className="text-sm text-gray-500">
              Affichage 1-10 sur 243 occupants
            </div>
            <div className="flex items-center gap-1">
              <button className="p-1 border border-gray-300 rounded hover:bg-gray-50">
                <ChevronLeft className="w-4 h-4 text-gray-600" />
              </button>
              <button className="px-2 py-1 bg-[#38712c] text-white rounded text-xs">1</button>
              <button className="px-2 py-1 border border-gray-300 rounded text-xs hover:bg-gray-50">2</button>
              <button className="px-2 py-1 border border-gray-300 rounded text-xs hover:bg-gray-50">3</button>
              <span className="px-1 text-gray-500">...</span>
              <button className="px-2 py-1 border border-gray-300 rounded text-xs hover:bg-gray-50">12</button>
              <button className="p-1 border border-gray-300 rounded hover:bg-gray-50">
                <ChevronRight className="w-4 h-4 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}