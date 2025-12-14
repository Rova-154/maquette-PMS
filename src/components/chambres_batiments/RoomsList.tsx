import { Search, Filter, Eye, Edit, Home, Wifi, AirVent, Bed, Tv, ChevronLeft, ChevronRight } from "lucide-react";

const rooms = [
  {
    id: 1,
    number: "104",
    building: "Bâtiment A",
    floor: 1,
    capacity: 1,
    equipment: ["wifi", "ac", "tv"],
    status: "Disponible",
    statusColor: "#38712c"
  },
  {
    id: 2,
    number: "207",
    building: "Bâtiment A",
    floor: 2,
    capacity: 1,
    equipment: ["wifi", "ac"],
    status: "Occupée",
    statusColor: "#ff7f27"
  },
  {
    id: 3,
    number: "315",
    building: "Bâtiment B",
    floor: 3,
    capacity: 2,
    equipment: ["wifi", "ac", "tv"],
    status: "Occupée",
    statusColor: "#ff7f27"
  },
  {
    id: 4,
    number: "412",
    building: "Bâtiment B",
    floor: 4,
    capacity: 1,
    equipment: ["wifi"],
    status: "Occupée",
    statusColor: "#ff7f27"
  },
  {
    id: 5,
    number: "108",
    building: "Bâtiment A",
    floor: 1,
    capacity: 1,
    equipment: ["wifi", "ac", "tv"],
    status: "Disponible",
    statusColor: "#38712c"
  },
  {
    id: 6,
    number: "203",
    building: "Bâtiment A",
    floor: 2,
    capacity: 2,
    equipment: ["wifi", "ac"],
    status: "Maintenance",
    statusColor: "#403323"
  },
  {
    id: 7,
    number: "310",
    building: "Bâtiment B",
    floor: 3,
    capacity: 1,
    equipment: ["wifi", "ac", "tv"],
    status: "Réservée",
    statusColor: "#999"
  },
  {
    id: 8,
    number: "405",
    building: "Bâtiment B",
    floor: 4,
    capacity: 2,
    equipment: ["wifi", "ac"],
    status: "Occupée",
    statusColor: "#ff7f27"
  },
];

const equipmentIcons: Record<string, any> = {
  wifi: Wifi,
  ac: AirVent,
  tv: Tv,
  bed: Bed,
};

export function RoomsList() {
  return (
    <div className="flex-1 p-6 overflow-y-auto">
      <div className="max-w-full h-full flex flex-col">
        {/* Title & Add Button */}
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-xl text-[#403323]">Chambres</h1>
          <button className="bg-[#38712c] text-white px-4 py-2 rounded-lg hover:bg-[#2d5a23] transition-colors text-sm">
            + Ajouter une chambre
          </button>
        </div>

        {/* Search & Filters */}
        <div className="bg-white rounded-xl p-4 mb-4 shadow-sm">
          <div className="flex gap-3 mb-3">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Rechercher par numéro de chambre..."
                className="w-full pl-10 pr-4 py-2 border border-[#e6e6e6] rounded-lg text-sm text-[#403323] focus:outline-none focus:border-[#38712c]"
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
              <option>Disponible</option>
              <option>Occupée</option>
              <option>Maintenance</option>
              <option>Réservée</option>
            </select>
            <select className="text-xs border border-[#e6e6e6] rounded px-3 py-1.5 bg-white text-[#403323]">
              <option>Capacité</option>
              <option>1 personne</option>
              <option>2 personnes</option>
              <option>3+ personnes</option>
            </select>
            <select className="text-xs border border-[#e6e6e6] rounded px-3 py-1.5 bg-white text-[#403323]">
              <option>Équipements</option>
              <option>Wi-Fi</option>
              <option>Climatisation</option>
              <option>TV</option>
            </select>
          </div>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-4 gap-4 mb-4">
          <div className="bg-white rounded-xl p-3 shadow-sm">
            <div className="text-xs text-gray-500 mb-1">Total chambres</div>
            <div className="text-xl text-[#403323]">120</div>
          </div>
          <div className="bg-white rounded-xl p-3 shadow-sm">
            <div className="text-xs text-gray-500 mb-1">Disponibles</div>
            <div className="text-xl text-[#38712c]">24</div>
          </div>
          <div className="bg-white rounded-xl p-3 shadow-sm">
            <div className="text-xs text-gray-500 mb-1">Occupées</div>
            <div className="text-xl text-[#ff7f27]">88</div>
          </div>
          <div className="bg-white rounded-xl p-3 shadow-sm">
            <div className="text-xs text-gray-500 mb-1">Maintenance</div>
            <div className="text-xl text-[#403323]">8</div>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-xl shadow-sm flex-1 overflow-hidden flex flex-col">
          <div className="overflow-auto flex-1">
            <table className="w-full">
              <thead className="bg-[#f5f5f5] sticky top-0">
                <tr>
                  <th className="text-left px-4 py-3 text-xs text-[#403323]">Nº Chambre</th>
                  <th className="text-left px-4 py-3 text-xs text-[#403323]">Bâtiment</th>
                  <th className="text-left px-4 py-3 text-xs text-[#403323]">Étage</th>
                  <th className="text-left px-4 py-3 text-xs text-[#403323]">Capacité</th>
                  <th className="text-left px-4 py-3 text-xs text-[#403323]">Équipements</th>
                  <th className="text-left px-4 py-3 text-xs text-[#403323]">Statut</th>
                  <th className="text-left px-4 py-3 text-xs text-[#403323]">Actions</th>
                </tr>
              </thead>
              <tbody>
                {rooms.map((room) => (
                  <tr key={room.id} className="border-b border-[#e6e6e6] hover:bg-[#f5f5f5]">
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-[#38712c]/10 rounded flex items-center justify-center">
                          <Home className="w-4 h-4 text-[#38712c]" />
                        </div>
                        <span className="text-sm text-[#403323]">{room.number}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-sm text-[#403323]">{room.building}</td>
                    <td className="px-4 py-3 text-sm text-[#403323]">{room.floor}</td>
                    <td className="px-4 py-3 text-sm text-[#403323]">{room.capacity} pers.</td>
                    <td className="px-4 py-3">
                      <div className="flex gap-1">
                        {room.equipment.map((eq, idx) => {
                          const Icon = equipmentIcons[eq];
                          return Icon ? (
                            <div
                              key={idx}
                              className="w-6 h-6 bg-[#f5f5f5] rounded flex items-center justify-center"
                              title={eq}
                            >
                              <Icon className="w-3 h-3 text-gray-600" />
                            </div>
                          ) : null;
                        })}
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <span 
                        className="text-xs px-2 py-1 rounded"
                        style={{
                          backgroundColor: `${room.statusColor}15`,
                          color: room.statusColor
                        }}
                      >
                        {room.status}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex gap-1">
                        <button className="p-1.5 hover:bg-[#f5f5f5] rounded transition-colors" title="Voir">
                          <Eye className="w-4 h-4 text-[#38712c]" />
                        </button>
                        <button className="p-1.5 hover:bg-[#f5f5f5] rounded transition-colors" title="Modifier">
                          <Edit className="w-4 h-4 text-[#ff7f27]" />
                        </button>
                        <button className="p-1.5 hover:bg-[#f5f5f5] rounded transition-colors" title="Assigner">
                          <Home className="w-4 h-4 text-[#403323]" />
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
              Affichage 1-8 sur 120 chambres
            </div>
            <div className="flex items-center gap-2">
              <button className="p-1.5 border border-[#e6e6e6] rounded hover:bg-[#f5f5f5] transition-colors">
                <ChevronLeft className="w-4 h-4 text-[#403323]" />
              </button>
              <button className="px-3 py-1.5 bg-[#38712c] text-white rounded text-xs">1</button>
              <button className="px-3 py-1.5 border border-[#e6e6e6] rounded text-xs text-[#403323] hover:bg-[#f5f5f5]">2</button>
              <button className="px-3 py-1.5 border border-[#e6e6e6] rounded text-xs text-[#403323] hover:bg-[#f5f5f5]">3</button>
              <button className="px-3 py-1.5 border border-[#e6e6e6] rounded text-xs text-[#403323] hover:bg-[#f5f5f5]">...</button>
              <button className="px-3 py-1.5 border border-[#e6e6e6] rounded text-xs text-[#403323] hover:bg-[#f5f5f5]">15</button>
              <button className="p-1.5 border border-[#e6e6e6] rounded hover:bg-[#f5f5f5] transition-colors">
                <ChevronRight className="w-4 h-4 text-[#403323]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}