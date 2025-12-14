import { Check, X, AlertCircle } from "lucide-react";

export default function MealPreferences() {
  const residents = [
    { id: 1, name: "Sophie Martin", diet: "Standard", allergies: "Aucune", preferences: "Pas de champignons", status: "Actif" },
    { id: 2, name: "Lucas Dubois", diet: "Standard", allergies: "Crustacés", preferences: "Préfère le poisson", status: "Actif" },
    { id: 3, name: "Emma Leroy", diet: "Végétarien", allergies: "Lactose", preferences: "Options végé", status: "Actif" },
    { id: 4, name: "Thomas Bernard", diet: "Standard", allergies: "Arachides", preferences: "Repas copieux", status: "Inactif" },
    { id: 5, name: "Camille Moreau", diet: "Végétarien", allergies: "Aucune", preferences: "Légumes de saison", status: "Actif" },
    { id: 6, name: "Alexandre Roux", diet: "Sans gluten", allergies: "Gluten", preferences: "Pain sans gluten", status: "Actif" },
    { id: 7, name: "Julie Durand", diet: "Standard", allergies: "Œufs", preferences: "Repas légers", status: "Actif" },
    { id: 8, name: "Nicolas Laurent", diet: "Halal", allergies: "Porc", preferences: "Viande halal", status: "Actif" },
  ];

  return (
    <div className="flex-1 p-6 overflow-y-auto">
      <div className="max-w-full">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-xl text-[#403323]">Préférences et régimes alimentaires</h1>
            <p className="text-sm text-gray-500 mt-1">Gestion des allergies et préférences individuelles</p>
          </div>
          <div className="flex gap-2">
            <button className="px-4 py-2 border border-[#e6e6e6] rounded-lg hover:bg-white transition-colors text-sm text-[#403323]">
              Importer les données
            </button>
            <button className="px-4 py-2 bg-[#ff7f27] text-white rounded-lg hover:bg-[#e66f1f] transition-colors text-sm">
              + Ajouter une préférence
            </button>
          </div>
        </div>

        {/* Statistiques */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-xl p-3 shadow-sm">
            <div className="text-xs text-gray-500 mb-1">Régimes suivis</div>
            <div className="text-xl text-[#403323]">5 types</div>
          </div>
          <div className="bg-white rounded-xl p-3 shadow-sm border-l-4 border-[#38712c]">
            <div className="text-xs text-gray-500 mb-1">Sans allergies</div>
            <div className="text-xl text-[#38712c]">42</div>
          </div>
          <div className="bg-white rounded-xl p-3 shadow-sm border-l-4 border-[#ff7f27]">
            <div className="text-xs text-gray-500 mb-1">Allergies déclarées</div>
            <div className="text-xl text-[#ff7f27]">16</div>
          </div>
          <div className="bg-white rounded-xl p-3 shadow-sm border-l-4 border-red-500">
            <div className="text-xs text-gray-500 mb-1">Alertes actives</div>
            <div className="text-xl text-red-500">3</div>
          </div>
        </div>

        {/* Alertes importantes */}
        <div className="bg-red-50 border border-red-100 rounded-xl p-4 mb-6">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
            <div className="flex-1">
              <div className="text-sm text-red-700 mb-1">Alertes de sécurité alimentaire</div>
              <div className="text-xs text-red-600">
                3 pensionnaires ont des allergies graves nécessitant une attention particulière
              </div>
            </div>
            <button className="text-xs text-red-700 hover:text-red-800">
              Voir les détails
            </button>
          </div>
        </div>

        {/* Table des préférences */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="p-4 border-b border-[#e6e6e6] flex items-center justify-between">
            <h3 className="text-sm text-[#403323]">Préférences individuelles</h3>
            <div className="flex items-center gap-2">
              <input
                type="text"
                placeholder="Rechercher un pensionnaire..."
                className="text-xs border border-[#e6e6e6] rounded px-3 py-1.5 bg-white text-[#403323] w-48"
              />
              <select className="text-xs border border-[#e6e6e6] rounded px-3 py-1.5 bg-white text-[#403323]">
                <option>Tous les régimes</option>
                <option>Standard</option>
                <option>Végétarien</option>
                <option>Sans gluten</option>
                <option>Halal</option>
              </select>
            </div>
          </div>
          
          <div className="overflow-auto">
            <table className="w-full">
              <thead className="bg-[#f5f5f5]">
                <tr>
                  <th className="text-left px-4 py-3 text-xs text-[#403323]">Pensionnaire</th>
                  <th className="text-left px-4 py-3 text-xs text-[#403323]">Régime</th>
                  <th className="text-left px-4 py-3 text-xs text-[#403323]">Allergies</th>
                  <th className="text-left px-4 py-3 text-xs text-[#403323]">Préférences</th>
                  <th className="text-left px-4 py-3 text-xs text-[#403323]">Statut</th>
                  <th className="text-left px-4 py-3 text-xs text-[#403323]">Actions</th>
                </tr>
              </thead>
              <tbody>
                {residents.map((resident) => (
                  <tr key={resident.id} className="border-b border-[#e6e6e6] hover:bg-[#f5f5f5]">
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 bg-[#38712c] rounded-full flex items-center justify-center text-white text-xs">
                          {resident.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <span className="text-sm text-[#403323]">{resident.name}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <span className={`text-xs px-2 py-1 rounded ${
                        resident.diet === "Standard" 
                          ? "bg-[#38712c]/10 text-[#38712c]"
                          : resident.diet === "Végétarien"
                          ? "bg-[#ff7f27]/10 text-[#ff7f27]"
                          : "bg-purple-100 text-purple-800"
                      }`}>
                        {resident.diet}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      {resident.allergies === "Aucune" ? (
                        <span className="text-xs text-gray-400">-</span>
                      ) : (
                        <span className="text-xs text-red-600">{resident.allergies}</span>
                      )}
                    </td>
                    <td className="px-4 py-3 text-sm text-[#403323]">{resident.preferences}</td>
                    <td className="px-4 py-3">
                      <span className={`text-xs px-2 py-1 rounded ${
                        resident.status === "Actif" 
                          ? "bg-[#38712c]/10 text-[#38712c]"
                          : "bg-gray-100 text-gray-600"
                      }`}>
                        {resident.status}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex gap-1">
                        <button className="p-1.5 hover:bg-[#f5f5f5] rounded transition-colors" title="Modifier">
                          <Check className="w-4 h-4 text-[#38712c]" />
                        </button>
                        <button className="p-1.5 hover:bg-[#f5f5f5] rounded transition-colors" title="Désactiver">
                          <X className="w-4 h-4 text-red-500" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Section de synthèse des régimes */}
        <div className="mt-6 grid grid-cols-2 gap-4">
          <div className="bg-white rounded-xl p-5 shadow-sm">
            <h3 className="text-sm text-[#403323] mb-3">Répartition des régimes</h3>
            <div className="space-y-3">
              {[
                { diet: "Standard", count: 42, percentage: 75, color: "#38712c" },
                { diet: "Végétarien", count: 12, percentage: 21, color: "#ff7f27" },
                { diet: "Sans gluten", count: 3, percentage: 5, color: "#8b5cf6" },
                { diet: "Halal", count: 1, percentage: 2, color: "#3b82f6" },
              ].map((item) => (
                <div key={item.diet} className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className="text-[#403323]">{item.diet}</span>
                    <span className="text-gray-600">{item.count} pensionnaires ({item.percentage}%)</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="h-2 rounded-full" 
                      style={{ width: `${item.percentage}%`, backgroundColor: item.color }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl p-5 shadow-sm">
            <h3 className="text-sm text-[#403323] mb-3">Allergies courantes</h3>
            <div className="space-y-3">
              {[
                { allergy: "Aucune", count: 42 },
                { allergy: "Crustacés", count: 6 },
                { allergy: "Arachides", count: 4 },
                { allergy: "Lactose", count: 3 },
                { allergy: "Gluten", count: 2 },
              ].map((item) => (
                <div key={item.allergy} className="flex justify-between items-center">
                  <span className="text-sm text-[#403323]">{item.allergy}</span>
                  <span className="text-xs text-gray-600">{item.count} pensionnaires</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}