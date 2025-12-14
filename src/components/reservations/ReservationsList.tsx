import { Search, Filter, Eye, Edit, X, ChevronLeft, ChevronRight } from "lucide-react";

const reservations = [
  { id: 1, resident: "Marie Dubois", room: "Ch. 106 - Bât. A", arrivalDate: "15/01/2025", departureDate: "30/06/2025", status: "Confirmée", statusColor: "#38712c" },
  { id: 2, resident: "Pierre Laurent", room: "Ch. 214 - Bât. A", arrivalDate: "20/01/2025", departureDate: "15/07/2025", status: "En attente", statusColor: "#ff7f27" },
  { id: 3, resident: "Claire Martin", room: "Ch. 312 - Bât. B", arrivalDate: "01/02/2025", departureDate: "30/06/2025", status: "Confirmée", statusColor: "#38712c" },
  { id: 4, resident: "Jean Moreau", room: "Ch. 405 - Bât. B", arrivalDate: "10/12/2024", departureDate: "05/12/2024", status: "Expirée", statusColor: "#403323" },
  { id: 5, resident: "Sophie Bernard", room: "Ch. 201 - Bât. A", arrivalDate: "25/01/2025", departureDate: "20/06/2025", status: "Confirmée", statusColor: "#38712c" },
  { id: 6, resident: "Marc Leroy", room: "Ch. 308 - Bât. B", arrivalDate: "15/01/2025", departureDate: "15/05/2025", status: "En attente", statusColor: "#ff7f27" },
  { id: 7, resident: "Julie Roux", room: "Ch. 410 - Bât. B", arrivalDate: "05/02/2025", departureDate: "30/07/2025", status: "Confirmée", statusColor: "#38712c" },
  { id: 8, resident: "David Durand", room: "Ch. 103 - Bât. A", arrivalDate: "01/01/2025", departureDate: "30/06/2025", status: "Confirmée", statusColor: "#38712c" },
];

export function ReservationsList() {
  return (
    <div className="flex-1 p-6 overflow-y-auto">
      <div className="max-w-full">
        <div className="h-full flex flex-col">
          {/* Title & Add Button */}
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-xl text-[#403323]">Réservations de chambres</h1>
            <button className="bg-[#ff7f27] text-white px-4 py-2 rounded-lg hover:bg-[#e66f1f] transition-colors text-sm">
              + Créer une réservation
            </button>
          </div>

          {/* Search & Filters */}
          <div className="bg-white rounded-xl p-4 mb-4 shadow-sm">
            <div className="flex gap-3 mb-3">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Rechercher par pensionnaire ou chambre..."
                  className="w-full pl-10 pr-4 py-2 border border-[#e6e6e6] rounded-lg text-sm text-[#403323] focus:outline-none focus:border-[#ff7f27]"
                />
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-[#403323]" />
              <select className="text-xs border border-[#e6e6e6] rounded px-3 py-1.5 bg-white text-[#403323]">
                <option>Tous bâtiments</option>
                <option>Bâtiment A</option>
                <option>Bâtiment B</option>
                <option>Bâtiment C</option>
              </select>
              <select className="text-xs border border-[#e6e6e6] rounded px-3 py-1.5 bg-white text-[#403323]">
                <option>Tous étages</option>
                <option>Étage 1</option>
                <option>Étage 2</option>
                <option>Étage 3</option>
                <option>Étage 4</option>
              </select>
              <select className="text-xs border border-[#e6e6e6] rounded px-3 py-1.5 bg-white text-[#403323]">
                <option>Tous statuts</option>
                <option>Confirmée</option>
                <option>En attente</option>
                <option>Expirée</option>
              </select>
            </div>
          </div>

          {/* Statistics Cards */}
          <div className="grid grid-cols-4 gap-4 mb-4">
            <div className="bg-white rounded-xl p-3 shadow-sm">
              <div className="text-xs text-gray-500 mb-1">Total réservations</div>
              <div className="text-xl text-[#403323]">24</div>
            </div>
            <div className="bg-white rounded-xl p-3 shadow-sm border-l-4 border-[#38712c]">
              <div className="text-xs text-gray-500 mb-1">Confirmées</div>
              <div className="text-xl text-[#38712c]">18</div>
            </div>
            <div className="bg-white rounded-xl p-3 shadow-sm border-l-4 border-[#ff7f27]">
              <div className="text-xs text-gray-500 mb-1">En attente</div>
              <div className="text-xl text-[#ff7f27]">5</div>
            </div>
            <div className="bg-white rounded-xl p-3 shadow-sm border-l-4 border-[#403323]">
              <div className="text-xs text-gray-500 mb-1">Expirées</div>
              <div className="text-xl text-[#403323]">1</div>
            </div>
          </div>

          {/* Table */}
          <div className="bg-white rounded-xl shadow-sm flex-1 overflow-hidden flex flex-col">
            <div className="overflow-auto flex-1">
              <table className="w-full">
                <thead className="bg-[#f5f5f5] sticky top-0">
                  <tr>
                    <th className="text-left px-4 py-3 text-xs text-[#403323]">Pensionnaire</th>
                    <th className="text-left px-4 py-3 text-xs text-[#403323]">Chambre</th>
                    <th className="text-left px-4 py-3 text-xs text-[#403323]">Date d'arrivée</th>
                    <th className="text-left px-4 py-3 text-xs text-[#403323]">Date de départ</th>
                    <th className="text-left px-4 py-3 text-xs text-[#403323]">Statut</th>
                    <th className="text-left px-4 py-3 text-xs text-[#403323]">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {reservations.map((reservation) => (
                    <tr key={reservation.id} className="border-b border-[#e6e6e6] hover:bg-[#f5f5f5]">
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-2">
                          <div className="w-7 h-7 bg-[#38712c] rounded-full flex items-center justify-center text-white text-xs">
                            {reservation.resident.split(' ').map(n => n[0]).join('')}
                          </div>
                          <span className="text-sm text-[#403323]">{reservation.resident}</span>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-sm text-[#403323]">{reservation.room}</td>
                      <td className="px-4 py-3 text-sm text-[#403323]">{reservation.arrivalDate}</td>
                      <td className="px-4 py-3 text-sm text-[#403323]">{reservation.departureDate}</td>
                      <td className="px-4 py-3">
                        <span 
                          className="text-xs px-2 py-1 rounded"
                          style={{
                            backgroundColor: `${reservation.statusColor}15`,
                            color: reservation.statusColor
                          }}
                        >
                          {reservation.status}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex gap-1">
                          <button className="p-1.5 hover:bg-[#f5f5f5] rounded transition-colors" title="Voir">
                            <Eye className="w-4 h-4 text-[#403323]" />
                          </button>
                          <button className="p-1.5 hover:bg-[#f5f5f5] rounded transition-colors" title="Modifier">
                            <Edit className="w-4 h-4 text-[#ff7f27]" />
                          </button>
                          <button className="p-1.5 hover:bg-[#f5f5f5] rounded transition-colors" title="Annuler">
                            <X className="w-4 h-4 text-red-500" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="border-t border-[#e6e6e6] px-4 py-3 flex items-center justify-between">
              <div className="text-xs text-gray-500">
                Affichage 1-8 sur 24 réservations
              </div>
              <div className="flex items-center gap-2">
                <button className="p-1.5 border border-[#e6e6e6] rounded hover:bg-[#f5f5f5] transition-colors">
                  <ChevronLeft className="w-4 h-4 text-[#403323]" />
                </button>
                <button className="px-3 py-1.5 bg-[#ff7f27] text-white rounded text-xs">1</button>
                <button className="px-3 py-1.5 border border-[#e6e6e6] rounded text-xs text-[#403323] hover:bg-[#f5f5f5]">2</button>
                <button className="px-3 py-1.5 border border-[#e6e6e6] rounded text-xs text-[#403323] hover:bg-[#f5f5f5]">3</button>
                <button className="p-1.5 border border-[#e6e6e6] rounded hover:bg-[#f5f5f5] transition-colors">
                  <ChevronRight className="w-4 h-4 text-[#403323]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}