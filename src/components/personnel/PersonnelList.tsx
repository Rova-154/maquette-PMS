import { Search, Filter, Eye, Edit, UserPlus } from "lucide-react";

export function PersonnelList() {
  const staff = [
    { id: 1, name: "Jean Dupont", role: "Surveillant", department: "Sécurité", status: "Actif" },
    { id: 2, name: "Marie Martin", role: "Agent d'entretien", department: "Maintenance", status: "Actif" },
    { id: 3, name: "Pierre Leroy", role: "Intendant", department: "Administration", status: "Actif" },
    { id: 4, name: "Sophie Bernard", role: "Surveillant", department: "Sécurité", status: "En congé" },
    { id: 5, name: "Thomas Petit", role: "Technicien", department: "Maintenance", status: "Actif" },
    { id: 6, name: "Claire Moreau", role: "Secrétaire", department: "Administration", status: "Actif" },
  ];

  return (
    <div className="flex-1 p-6 overflow-y-auto">
      <div className="max-w-full">
        {/* Title & Add Button */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-2xl font-bold text-[#403323] mb-1">Gestion du Personnel</h1>
            <p className="text-sm text-gray-500">Gérez tous les membres de votre équipe</p>
          </div>
          <button className="bg-[#38712c] text-white px-4 py-2 rounded-md hover:bg-[#2d5a23] transition-colors text-sm font-medium flex items-center gap-2">
            <UserPlus className="w-4 h-4" />
            Ajouter un membre
          </button>
        </div>

        {/* KPI Cards - Compact */}
        <div className="grid grid-cols-4 gap-3 mb-4">
          <div className="bg-white rounded-lg p-3 border border-gray-200">
            <div className="text-xs text-gray-500 mb-1">Total personnel</div>
            <div className="text-xl font-bold text-[#38712c]">6</div>
          </div>
          <div className="bg-white rounded-lg p-3 border border-gray-200 border-l-3 border-[#38712c]">
            <div className="text-xs text-gray-500 mb-1">Actifs</div>
            <div className="text-xl font-bold text-[#38712c]">5</div>
          </div>
          <div className="bg-white rounded-lg p-3 border border-gray-200 border-l-3 border-[#ff7f27]">
            <div className="text-xs text-gray-500 mb-1">Départements</div>
            <div className="text-xl font-bold text-[#ff7f27]">3</div>
          </div>
          <div className="bg-white rounded-lg p-3 border border-gray-200 border-l-3 border-[#403323]">
            <div className="text-xs text-gray-500 mb-1">Disponibilité</div>
            <div className="text-xl font-bold text-[#403323]">83%</div>
          </div>
        </div>

        {/* Search & Filters */}
        <div className="bg-white rounded-lg p-4 mb-4 border border-gray-200">
          <div className="flex items-center gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Rechercher par nom, rôle..."
                className="w-full pl-10 pr-4 py-2 border border-[#e6e6e6] rounded text-sm text-[#403323] focus:outline-none focus:border-[#ff7f27]"
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-[#403323]" />
              <select className="text-sm border border-[#e6e6e6] rounded px-3 py-2 text-[#403323]">
                <option>Tous départements</option>
                <option>Sécurité</option>
                <option>Maintenance</option>
                <option>Administration</option>
              </select>
              <select className="text-sm border border-[#e6e6e6] rounded px-3 py-2 text-[#403323]">
                <option>Tous statuts</option>
                <option>Actif</option>
                <option>En congé</option>
                <option>Absent</option>
              </select>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-[#f5f5f5]">
                <tr>
                  <th className="text-left px-4 py-3 text-xs font-medium text-[#403323] uppercase">Nom</th>
                  <th className="text-left px-4 py-3 text-xs font-medium text-[#403323] uppercase">Rôle</th>
                  <th className="text-left px-4 py-3 text-xs font-medium text-[#403323] uppercase">Département</th>
                  <th className="text-left px-4 py-3 text-xs font-medium text-[#403323] uppercase">Statut</th>
                  <th className="text-left px-4 py-3 text-xs font-medium text-[#403323] uppercase">Actions</th>
                </tr>
              </thead>
              <tbody>
                {staff.map((person) => (
                  <tr key={person.id} className="border-t border-[#e6e6e6] hover:bg-[#f5f5f5]">
                    <td className="px-4 py-3">
                      <div className="font-medium text-[#403323] text-sm">{person.name}</div>
                    </td>
                    <td className="px-4 py-3 text-sm text-[#403323]">{person.role}</td>
                    <td className="px-4 py-3">
                      <span className={`inline-block px-2 py-1 rounded text-xs ${
                        person.department === "Sécurité"
                          ? "bg-blue-50 text-blue-700 border border-blue-100"
                          : person.department === "Maintenance"
                          ? "bg-green-50 text-green-700 border border-green-100"
                          : "bg-purple-50 text-purple-700 border border-purple-100"
                      }`}>
                        {person.department}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <span className={`inline-block px-2 py-1 rounded text-xs ${
                        person.status === "Actif"
                          ? "bg-green-50 text-green-700 border border-green-100"
                          : "bg-amber-50 text-amber-700 border border-amber-100"
                      }`}>
                        {person.status}
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
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}