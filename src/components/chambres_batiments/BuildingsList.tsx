import { Search, Filter, Eye, Edit, Trash2, Building2 } from "lucide-react";

const buildings = [
  {
    id: 1,
    name: "Bâtiment A",
    type: "Bloc",
    floors: 4,
    totalRooms: 48,
    capacity: 52,
    occupancy: "88%",
  },
  {
    id: 2,
    name: "Bâtiment B",
    type: "Bloc",
    floors: 4,
    totalRooms: 48,
    capacity: 56,
    occupancy: "82%",
  },
  {
    id: 3,
    name: "Bâtiment C",
    type: "Dortoir",
    floors: 3,
    totalRooms: 24,
    capacity: 30,
    occupancy: "73%",
  },
];

export function BuildingsList() {
  return (
    <div className="flex-1 p-6 overflow-y-auto">
      <div className="max-w-full h-full flex flex-col">
        {/* Title & Add Button */}
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-xl text-[#403323]">Bâtiments</h1>
          <button className="bg-[#38712c] text-white px-4 py-2 rounded-lg hover:bg-[#2d5a23] transition-colors text-sm">
            + Ajouter un bâtiment
          </button>
        </div>

        {/* Search & Filters */}
        <div className="bg-white rounded-xl p-4 mb-4 shadow-sm">
          <div className="flex gap-3 mb-3">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Rechercher un bâtiment..."
                className="w-full pl-10 pr-4 py-2 border border-[#e6e6e6] rounded-lg text-sm text-[#403323] focus:outline-none focus:border-[#38712c]"
              />
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-[#403323]" />
            <select className="text-xs border border-[#e6e6e6] rounded px-3 py-1.5 bg-white text-[#403323]">
              <option>Tous types</option>
              <option>Bloc</option>
              <option>Dortoir</option>
              <option>Autre</option>
            </select>
            <select className="text-xs border border-[#e6e6e6] rounded px-3 py-1.5 bg-white text-[#403323]">
              <option>Nombre d'étages</option>
              <option>1 étage</option>
              <option>2 étages</option>
              <option>3 étages</option>
              <option>4+ étages</option>
            </select>
            <input
              type="number"
              placeholder="Capacité min"
              className="text-xs border border-[#e6e6e6] rounded px-3 py-1.5 bg-white text-[#403323] w-32"
            />
            <input
              type="number"
              placeholder="Capacité max"
              className="text-xs border border-[#e6e6e6] rounded px-3 py-1.5 bg-white text-[#403323] w-32"
            />
          </div>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-4 gap-4 mb-4">
          <div className="bg-white rounded-xl p-4 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#38712c]/10 rounded-lg flex items-center justify-center">
                <Building2 className="w-5 h-5 text-[#38712c]" />
              </div>
              <div>
                <div className="text-xs text-gray-500">Total bâtiments</div>
                <div className="text-xl text-[#403323]">3</div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm">
            <div className="text-xs text-gray-500 mb-1">Total chambres</div>
            <div className="text-xl text-[#403323]">120</div>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm">
            <div className="text-xs text-gray-500 mb-1">Capacité totale</div>
            <div className="text-xl text-[#403323]">138</div>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm">
            <div className="text-xs text-gray-500 mb-1">Occupation moyenne</div>
            <div className="text-xl text-[#38712c]">81%</div>
          </div>
        </div>

        {/* Buildings Grid */}
        <div className="grid grid-cols-3 gap-4 flex-1 overflow-auto">
          {buildings.map((building) => (
            <div key={building.id} className="bg-white rounded-xl p-5 shadow-sm h-fit">
              {/* Building Icon & Name */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#38712c]/10 rounded-lg flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-[#38712c]" />
                  </div>
                  <div>
                    <h3 className="text-[#403323]">{building.name}</h3>
                    <span className="text-xs text-gray-500">{building.type}</span>
                  </div>
                </div>
              </div>

              {/* Building Stats */}
              <div className="space-y-3 mb-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Étages</span>
                  <span className="text-sm text-[#403323]">{building.floors}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Chambres</span>
                  <span className="text-sm text-[#403323]">{building.totalRooms}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Capacité</span>
                  <span className="text-sm text-[#403323]">{building.capacity}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Occupation</span>
                  <span className="text-sm text-[#38712c]">{building.occupancy}</span>
                </div>
              </div>

              {/* Occupancy Bar */}
              <div className="mb-4">
                <div className="h-2 bg-[#e6e6e6] rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-[#38712c] rounded-full"
                    style={{ width: building.occupancy }}
                  ></div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-2 pt-3 border-t border-[#e6e6e6]">
                <button className="flex-1 px-3 py-2 border border-[#e6e6e6] rounded-lg hover:bg-[#f5f5f5] transition-colors text-sm text-[#403323] flex items-center justify-center gap-2">
                  <Eye className="w-4 h-4" />
                  Voir
                </button>
                <button className="flex-1 px-3 py-2 border border-[#e6e6e6] rounded-lg hover:bg-[#f5f5f5] transition-colors text-sm text-[#403323] flex items-center justify-center gap-2">
                  <Edit className="w-4 h-4" />
                  Modifier
                </button>
                <button className="px-3 py-2 border border-[#e6e6e6] rounded-lg hover:bg-red-50 transition-colors text-sm text-red-600 flex items-center justify-center">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Table View Alternative (Hidden by default, can be toggled) */}
        <div className="bg-white rounded-xl shadow-sm flex-1 overflow-hidden hidden">
          <table className="w-full">
            <thead className="bg-[#f5f5f5]">
              <tr>
                <th className="text-left px-4 py-3 text-xs text-[#403323]">Nom bâtiment</th>
                <th className="text-left px-4 py-3 text-xs text-[#403323]">Type</th>
                <th className="text-left px-4 py-3 text-xs text-[#403323]">Étages</th>
                <th className="text-left px-4 py-3 text-xs text-[#403323]">Total chambres</th>
                <th className="text-left px-4 py-3 text-xs text-[#403323]">Capacité</th>
                <th className="text-left px-4 py-3 text-xs text-[#403323]">Occupation</th>
                <th className="text-left px-4 py-3 text-xs text-[#403323]">Actions</th>
              </tr>
            </thead>
            <tbody>
              {buildings.map((building) => (
                <tr key={building.id} className="border-b border-[#e6e6e6] hover:bg-[#f5f5f5]">
                  <td className="px-4 py-3 text-sm text-[#403323]">{building.name}</td>
                  <td className="px-4 py-3 text-sm text-[#403323]">{building.type}</td>
                  <td className="px-4 py-3 text-sm text-[#403323]">{building.floors}</td>
                  <td className="px-4 py-3 text-sm text-[#403323]">{building.totalRooms}</td>
                  <td className="px-4 py-3 text-sm text-[#403323]">{building.capacity}</td>
                  <td className="px-4 py-3">
                    <span className="text-sm text-[#38712c]">{building.occupancy}</span>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex gap-1">
                      <button className="p-1.5 hover:bg-[#f5f5f5] rounded transition-colors">
                        <Eye className="w-4 h-4 text-[#38712c]" />
                      </button>
                      <button className="p-1.5 hover:bg-[#f5f5f5] rounded transition-colors">
                        <Edit className="w-4 h-4 text-[#ff7f27]" />
                      </button>
                      <button className="p-1.5 hover:bg-[#f5f5f5] rounded transition-colors">
                        <Trash2 className="w-4 h-4 text-red-500" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}