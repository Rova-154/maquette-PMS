// components/ResidentsList.tsx - STYLE CORRIGÉ
import { Search, Filter, Eye, Edit, Home, History, ChevronLeft, ChevronRight } from "lucide-react";

const residents = [
  {
    id: 1,
    photo: "SM",
    name: "Sophie Martin",
    mealStatus: "Pension complète",
    room: "Ch. 104 - Bât. A",
    entryDate: "01/09/2024",
    phone: "+33 6 12 34 56 78",
  },
  {
    id: 2,
    photo: "LD",
    name: "Lucas Dubois",
    mealStatus: "Demi-pension",
    room: "Ch. 207 - Bât. A",
    entryDate: "15/09/2024",
    phone: "+33 6 23 45 67 89",
  },
  {
    id: 3,
    photo: "EL",
    name: "Emma Leroy",
    mealStatus: "Pension complète",
    room: "Ch. 315 - Bât. B",
    entryDate: "01/09/2024",
    phone: "+33 6 34 56 78 90",
  },
  {
    id: 4,
    photo: "TB",
    name: "Thomas Bernard",
    mealStatus: "Demi-pension",
    room: "Ch. 412 - Bât. B",
    entryDate: "10/09/2024",
    phone: "+33 6 45 67 89 01",
  },
  {
    id: 5,
    photo: "CM",
    name: "Camille Moreau",
    mealStatus: "Pension complète",
    room: "Ch. 108 - Bât. A",
    entryDate: "05/09/2024",
    phone: "+33 6 56 78 90 12",
  },
  {
    id: 6,
    photo: "AR",
    name: "Alexandre Roux",
    mealStatus: "Demi-pension",
    room: "Ch. 203 - Bât. A",
    entryDate: "12/09/2024",
    phone: "+33 6 67 89 01 23",
  },
  {
    id: 7,
    photo: "JD",
    name: "Julie Durand",
    mealStatus: "Pension complète",
    room: "Ch. 310 - Bât. B",
    entryDate: "01/09/2024",
    phone: "+33 6 78 90 12 34",
  },
  {
    id: 8,
    photo: "NL",
    name: "Nicolas Laurent",
    mealStatus: "Demi-pension",
    room: "Ch. 405 - Bât. B",
    entryDate: "08/09/2024",
    phone: "+33 6 89 01 23 45",
  },
];

export function ResidentsList() {
  return (
    <div className="flex-1 p-6 overflow-y-auto">
      <div className="max-w-full">
        {/* Title & Add Button */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 mb-1">Liste des pensionnaires</h1>
            <p className="text-sm text-gray-500">Gérez tous les pensionnaires de votre établissement</p>
          </div>
          <button className="bg-[#38712c] text-white px-4 py-2 rounded-md hover:bg-[#2d5a23] transition-colors text-sm font-medium">
            + Ajouter un pensionnaire
          </button>
        </div>

        {/* Search & Filters */}
        <div className="bg-white rounded-lg p-4 mb-4 border border-gray-200">
          <div className="flex items-center gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Rechercher par nom, téléphone..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-[#38712c]"
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-gray-500" />
              <select className="text-sm border border-gray-300 rounded px-3 py-2">
                <option>Tous bâtiments</option>
                <option>Bâtiment A</option>
                <option>Bâtiment B</option>
              </select>
              <select className="text-sm border border-gray-300 rounded px-3 py-2">
                <option>Tous étages</option>
                <option>Étage 1</option>
                <option>Étage 2</option>
                <option>Étage 3</option>
                <option>Étage 4</option>
              </select>
              <select className="text-sm border border-gray-300 rounded px-3 py-2">
                <option>Tous statuts</option>
                <option>Pension complète</option>
                <option>Demi-pension</option>
              </select>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left px-4 py-3 text-xs font-medium text-gray-500 uppercase">Photo</th>
                  <th className="text-left px-4 py-3 text-xs font-medium text-gray-500 uppercase">Nom complet</th>
                  <th className="text-left px-4 py-3 text-xs font-medium text-gray-500 uppercase">Statut repas</th>
                  <th className="text-left px-4 py-3 text-xs font-medium text-gray-500 uppercase">Chambre actuelle</th>
                  <th className="text-left px-4 py-3 text-xs font-medium text-gray-500 uppercase">Date d'entrée</th>
                  <th className="text-left px-4 py-3 text-xs font-medium text-gray-500 uppercase">Téléphone</th>
                  <th className="text-left px-4 py-3 text-xs font-medium text-gray-500 uppercase">Actions</th>
                </tr>
              </thead>
              <tbody>
                {residents.map((resident) => (
                  <tr key={resident.id} className="border-t border-gray-200 hover:bg-gray-50">
                    <td className="px-4 py-3">
                      <div className="w-8 h-8 bg-[#38712c] rounded-full flex items-center justify-center text-white text-xs">
                        {resident.photo}
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <div className="font-medium text-gray-900 text-sm">{resident.name}</div>
                    </td>
                    <td className="px-4 py-3">
                      <span className={`inline-block px-2 py-1 rounded text-xs ${
                        resident.mealStatus === "Pension complète"
                          ? "bg-[#38712c]/10 text-[#38712c]"
                          : "bg-[#ff7f27]/10 text-[#ff7f27]"
                      }`}>
                        {resident.mealStatus}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-900">{resident.room}</td>
                    <td className="px-4 py-3 text-sm text-gray-900">{resident.entryDate}</td>
                    <td className="px-4 py-3 text-sm text-gray-900">{resident.phone}</td>
                    <td className="px-4 py-3">
                      <div className="flex gap-1">
                        <button className="p-1 hover:bg-gray-100 rounded" title="Voir">
                          <Eye className="w-4 h-4 text-gray-600" />
                        </button>
                        <button className="p-1 hover:bg-gray-100 rounded" title="Modifier">
                          <Edit className="w-4 h-4 text-gray-600" />
                        </button>
                        <button className="p-1 hover:bg-gray-100 rounded" title="Assigner">
                          <Home className="w-4 h-4 text-gray-600" />
                        </button>
                        <button className="p-1 hover:bg-gray-100 rounded" title="Historique">
                          <History className="w-4 h-4 text-gray-600" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="border-t border-gray-200 px-4 py-3 flex items-center justify-between">
            <div className="text-sm text-gray-500">
              Affichage 1-8 sur 96 pensionnaires
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