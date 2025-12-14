import { Search, Filter, Plus, Home, Settings, CheckCircle, AlertCircle, XCircle } from "lucide-react";

export function Equipments() {
  const equipment = [
    { id: 1, name: "Matelas Standard", category: "Chambre", quantity: 120, status: "Bon état", location: "Bâtiment A", lastMaintenance: "15/02/2024" },
    { id: 2, name: "Draps Coton", category: "Chambre", quantity: 240, status: "Bon état", location: "Tous bâtiments", lastMaintenance: "10/03/2024" },
    { id: 3, name: "Table de chevet", category: "Chambre", quantity: 120, status: "Bon état", location: "Bâtiment A", lastMaintenance: "20/02/2024" },
    { id: 4, name: "Armoire", category: "Chambre", quantity: 60, status: "À réparer", location: "Bâtiment B", lastMaintenance: "05/01/2024" },
    { id: 5, name: "Chaise bureau", category: "Salle commune", quantity: 40, status: "Bon état", location: "Bâtiment C", lastMaintenance: "12/03/2024" },
    { id: 6, name: "Table repas", category: "Salle commune", quantity: 20, status: "À réparer", location: "Bâtiment A", lastMaintenance: "08/02/2024" },
    { id: 7, name: "Fauteuil", category: "Salle commune", quantity: 35, status: "Hors service", location: "Bâtiment B", lastMaintenance: "15/12/2023" },
    { id: 8, name: "Télévision", category: "Salle commune", quantity: 15, status: "Bon état", location: "Bâtiment C", lastMaintenance: "22/03/2024" },
  ];

  const buildings = [
    { name: "Bâtiment A", equipmentCount: 285, rooms: 40, condition: "Excellent" },
    { name: "Bâtiment B", equipmentCount: 195, rooms: 30, condition: "Bon" },
    { name: "Bâtiment C", equipmentCount: 110, rooms: 20, condition: "Moyen" },
  ];

  return (
    <div className="flex-1 p-6 overflow-y-auto">
      <div className="max-w-full">
        {/* Title & Add Button */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-2xl font-bold text-[#403323] mb-1">Équipements & Matériel</h1>
            <p className="text-sm text-gray-500">Gestion du parc d'équipements</p>
          </div>
          <button className="bg-[#38712c] text-white px-4 py-2 rounded-md hover:bg-[#2d5a23] transition-colors text-sm font-medium flex items-center gap-2">
            <Plus className="w-4 h-4" />
            Ajouter un équipement
          </button>
        </div>

        {/* KPI Cards - Compact */}
        <div className="grid grid-cols-4 gap-3 mb-4">
          <div className="bg-white rounded-lg p-3 border border-gray-200">
            <div className="text-xs text-gray-500 mb-1">Total équipements</div>
            <div className="text-xl font-bold text-[#38712c]">650</div>
          </div>
          <div className="bg-white rounded-lg p-3 border border-gray-200 border-l-3 border-[#38712c]">
            <div className="text-xs text-gray-500 mb-1">Bon état</div>
            <div className="text-xl font-bold text-[#38712c]">535</div>
          </div>
          <div className="bg-white rounded-lg p-3 border border-gray-200 border-l-3 border-[#ff7f27]">
            <div className="text-xs text-gray-500 mb-1">À réparer</div>
            <div className="text-xl font-bold text-[#ff7f27]">80</div>
          </div>
          <div className="bg-white rounded-lg p-3 border border-gray-200 border-l-3 border-[#403323]">
            <div className="text-xs text-gray-500 mb-1">Hors service</div>
            <div className="text-xl font-bold text-[#403323]">35</div>
          </div>
        </div>

        {/* Search & Filters */}
        <div className="bg-white rounded-lg p-4 mb-6 border border-gray-200">
          <div className="flex items-center gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Rechercher par équipement, catégorie..."
                className="w-full pl-10 pr-4 py-2 border border-[#e6e6e6] rounded text-sm text-[#403323] focus:outline-none focus:border-[#ff7f27]"
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-[#403323]" />
              <select className="text-sm border border-[#e6e6e6] rounded px-3 py-2 text-[#403323]">
                <option>Toutes catégories</option>
                <option>Chambre</option>
                <option>Salle commune</option>
                <option>Bureaux</option>
              </select>
              <select className="text-sm border border-[#e6e6e6] rounded px-3 py-2 text-[#403323]">
                <option>Tous statuts</option>
                <option>Bon état</option>
                <option>À réparer</option>
                <option>Hors service</option>
              </select>
              <select className="text-sm border border-[#e6e6e6] rounded px-3 py-2 text-[#403323]">
                <option>Tous bâtiments</option>
                <option>Bâtiment A</option>
                <option>Bâtiment B</option>
                <option>Bâtiment C</option>
              </select>
            </div>
          </div>
        </div>

        {/* Tableau des équipements */}
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden mb-6">
          <div className="p-4 border-b border-gray-200 bg-[#f5f5f5]">
            <h2 className="text-lg font-semibold text-[#403323]">Listing des équipements</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-[#f5f5f5]">
                <tr>
                  <th className="text-left px-4 py-3 text-xs font-medium text-[#403323] uppercase">Équipement</th>
                  <th className="text-left px-4 py-3 text-xs font-medium text-[#403323] uppercase">Catégorie</th>
                  <th className="text-left px-4 py-3 text-xs font-medium text-[#403323] uppercase">Quantité</th>
                  <th className="text-left px-4 py-3 text-xs font-medium text-[#403323] uppercase">Localisation</th>
                  <th className="text-left px-4 py-3 text-xs font-medium text-[#403323] uppercase">Dernière maintenance</th>
                  <th className="text-left px-4 py-3 text-xs font-medium text-[#403323] uppercase">Statut</th>
                  <th className="text-left px-4 py-3 text-xs font-medium text-[#403323] uppercase">Actions</th>
                </tr>
              </thead>
              <tbody>
                {equipment.map((item) => (
                  <tr key={item.id} className="border-t border-[#e6e6e6] hover:bg-[#f5f5f5]">
                    <td className="px-4 py-3">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-gradient-to-r from-[#38712c] to-[#4a8c3a] rounded-lg flex items-center justify-center mr-2">
                          <span className="text-xs font-medium text-white">EQ</span>
                        </div>
                        <div>
                          <div className="text-sm font-medium text-[#403323]">{item.name}</div>
                          <div className="text-xs text-gray-500">ID: EQ-{item.id.toString().padStart(3, '0')}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <span className="inline-block px-2 py-1 rounded text-xs bg-gray-100 text-gray-700 border border-gray-200">
                        {item.category}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-sm font-medium text-[#403323]">{item.quantity}</td>
                    <td className="px-4 py-3 text-sm text-[#403323]">{item.location}</td>
                    <td className="px-4 py-3 text-sm text-[#403323]">{item.lastMaintenance}</td>
                    <td className="px-4 py-3">
                      <span className={`inline-block px-2 py-1 rounded text-xs font-medium ${
                        item.status === "Bon état" 
                          ? "bg-green-50 text-green-700 border border-green-100" 
                          : item.status === "À réparer"
                          ? "bg-amber-50 text-amber-700 border border-amber-100"
                          : "bg-red-50 text-red-700 border border-red-100"
                      }`}>
                        {item.status}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex gap-2">
                        <button className="text-sm text-[#38712c] hover:text-[#2d5a23]">
                          Modifier
                        </button>
                        <button className="text-sm text-[#403323] hover:text-[#ff7f27]">
                          Maintenir
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
          {/* Vue par bâtiment */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-[#403323]">Répartition par bâtiment</h2>
              <Home className="w-5 h-5 text-[#403323]" />
            </div>
            <div className="space-y-4">
              {buildings.map((building, index) => (
                <div key={index} className="p-4 border border-gray-200 rounded-lg hover:bg-[#f5f5f5]">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-semibold text-[#403323]">{building.name}</h3>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                      building.condition === "Excellent" 
                        ? "bg-green-50 text-green-700 border border-green-100"
                        : building.condition === "Bon"
                        ? "bg-blue-50 text-blue-700 border border-blue-100"
                        : "bg-amber-50 text-amber-700 border border-amber-100"
                    }`}>
                      {building.condition}
                    </span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-500">Équipements:</span>
                      <span className="font-medium text-[#403323]">{building.equipmentCount}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-500">Chambres:</span>
                      <span className="font-medium text-[#403323]">{building.rooms}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-500">Taux d'occupation:</span>
                      <span className="font-medium text-[#38712c]">{(building.rooms / 40 * 100).toFixed(0)}%</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Maintenance préventive */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-[#403323]">Maintenance préventive</h2>
              <Settings className="w-5 h-5 text-[#403323]" />
            </div>
            <div className="space-y-4">
              {[
                { equipment: "Matelas Standard", nextMaintenance: "15/04/2024", daysLeft: 15, priority: "Normale" },
                { equipment: "Système HVAC", nextMaintenance: "05/04/2024", daysLeft: 5, priority: "Élevée" },
                { equipment: "Ascenseurs", nextMaintenance: "10/04/2024", daysLeft: 10, priority: "Normale" },
                { equipment: "Système incendie", nextMaintenance: "30/03/2024", daysLeft: -2, priority: "Critique" },
              ].map((item, index) => (
                <div key={index} className="p-4 border border-gray-200 rounded-lg hover:bg-[#f5f5f5]">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium text-[#403323]">{item.equipment}</p>
                      <p className="text-sm text-gray-500">Prochaine: {item.nextMaintenance}</p>
                    </div>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                      item.priority === "Critique" 
                        ? "bg-red-50 text-red-700 border border-red-100"
                        : item.priority === "Élevée"
                        ? "bg-amber-50 text-amber-700 border border-amber-100"
                        : "bg-blue-50 text-blue-700 border border-blue-100"
                    }`}>
                      {item.daysLeft < 0 ? "En retard" : `${item.daysLeft} jours`}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-4 px-4 py-2 text-sm border border-[#38712c] text-[#38712c] rounded-md hover:bg-[#38712c] hover:text-white transition-colors">
              Planifier une maintenance
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}