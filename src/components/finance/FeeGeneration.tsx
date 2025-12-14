import { Filter, DollarSign, Home, UtensilsCrossed, Briefcase, Plus } from "lucide-react";

const residents = [
  { id: 1, name: "Sophie Martin", housing: 650, meals: 200, services: 50, extras: 30, total: 930 },
  { id: 2, name: "Lucas Dubois", housing: 650, meals: 100, services: 50, extras: 0, total: 800 },
  { id: 3, name: "Emma Leroy", housing: 650, meals: 200, services: 50, extras: 45, total: 945 },
  { id: 4, name: "Thomas Bernard", housing: 650, meals: 100, services: 50, extras: 20, total: 820 },
  { id: 5, name: "Camille Moreau", housing: 650, meals: 200, services: 50, extras: 0, total: 900 },
  { id: 6, name: "Alexandre Roux", housing: 650, meals: 100, services: 50, extras: 15, total: 815 },
  { id: 7, name: "Julie Durand", housing: 650, meals: 200, services: 50, extras: 35, total: 935 },
  { id: 8, name: "Nicolas Laurent", housing: 650, meals: 100, services: 50, extras: 10, total: 810 },
];

export function FeeGeneration() {
  return (
    <div className="flex-1 p-6 overflow-y-auto">
      <div className="max-w-full">
        <div className="h-full flex flex-col">
          {/* Title & Action Button */}
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-xl text-[#403323]">Génération des frais mensuels</h1>
            <button className="bg-[#ff7f27] text-white px-4 py-2 rounded-lg hover:bg-[#e66f1f] transition-colors text-sm">
              Générer les frais du mois
            </button>
          </div>

          {/* Filters */}
          <div className="bg-white rounded-xl p-4 mb-4 shadow-sm">
            <div className="flex items-center gap-3">
              <Filter className="w-4 h-4 text-[#403323]" />
              <select className="text-xs border border-[#e6e6e6] rounded px-3 py-2 bg-white text-[#403323]">
                <option>Décembre 2024</option>
                <option>Janvier 2025</option>
                <option>Février 2025</option>
              </select>
              <select className="text-xs border border-[#e6e6e6] rounded px-3 py-2 bg-white text-[#403323]">
                <option>2024</option>
                <option>2025</option>
              </select>
              <select className="text-xs border border-[#e6e6e6] rounded px-3 py-2 bg-white text-[#403323]">
                <option>Tous types de frais</option>
                <option>Logement</option>
                <option>Restauration</option>
                <option>Services</option>
                <option>Extras</option>
              </select>
            </div>
          </div>

          {/* Summary Cards */}
          <div className="grid grid-cols-4 gap-4 mb-4">
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-[#38712c]/10 rounded-lg flex items-center justify-center">
                  <Home className="w-5 h-5 text-[#38712c]" />
                </div>
                <div>
                  <div className="text-xs text-gray-500">Logement</div>
                  <div className="text-xl text-[#403323]">€62,400</div>
                </div>
              </div>
              <div className="text-xs text-gray-600">96 pensionnaires</div>
            </div>

            <div className="bg-white rounded-xl p-4 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-[#ff7f27]/10 rounded-lg flex items-center justify-center">
                  <UtensilsCrossed className="w-5 h-5 text-[#ff7f27]" />
                </div>
                <div>
                  <div className="text-xs text-gray-500">Restauration</div>
                  <div className="text-xl text-[#403323]">€14,200</div>
                </div>
              </div>
              <div className="text-xs text-gray-600">58 pension complète, 38 demi</div>
            </div>

            <div className="bg-white rounded-xl p-4 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-[#403323]/10 rounded-lg flex items-center justify-center">
                  <Briefcase className="w-5 h-5 text-[#403323]" />
                </div>
                <div>
                  <div className="text-xs text-gray-500">Services</div>
                  <div className="text-xl text-[#403323]">€4,800</div>
                </div>
              </div>
              <div className="text-xs text-gray-600">96 pensionnaires</div>
            </div>

            <div className="bg-white rounded-xl p-4 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-[#ff7f27]/10 rounded-lg flex items-center justify-center">
                  <Plus className="w-5 h-5 text-[#ff7f27]" />
                </div>
                <div>
                  <div className="text-xs text-gray-500">Extras</div>
                  <div className="text-xl text-[#403323]">€1,850</div>
                </div>
              </div>
              <div className="text-xs text-gray-600">Divers services additionnels</div>
            </div>
          </div>

          {/* Total Summary */}
          <div className="bg-gradient-to-r from-[#38712c] to-[#2d5a23] rounded-xl p-4 mb-4 text-white shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm opacity-90 mb-1">Total des frais générés</div>
                <div className="text-3xl">€83,250</div>
              </div>
              <div className="text-right">
                <div className="text-sm opacity-90 mb-1">Période</div>
                <div className="text-lg">Décembre 2024</div>
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="bg-white rounded-xl shadow-sm flex-1 overflow-hidden flex flex-col">
            <div className="overflow-auto flex-1">
              <table className="w-full">
                <thead className="bg-[#f5f5f5] sticky top-0">
                  <tr>
                    <th className="text-left px-4 py-3 text-xs text-[#403323]">Pensionnaire</th>
                    <th className="text-left px-4 py-3 text-xs text-[#403323]">Logement</th>
                    <th className="text-left px-4 py-3 text-xs text-[#403323]">Restauration</th>
                    <th className="text-left px-4 py-3 text-xs text-[#403323]">Services</th>
                    <th className="text-left px-4 py-3 text-xs text-[#403323]">Extras</th>
                    <th className="text-left px-4 py-3 text-xs text-[#403323]">Total</th>
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
                      <td className="px-4 py-3 text-sm text-[#403323]">€{resident.housing}</td>
                      <td className="px-4 py-3 text-sm text-[#403323]">€{resident.meals}</td>
                      <td className="px-4 py-3 text-sm text-[#403323]">€{resident.services}</td>
                      <td className="px-4 py-3 text-sm text-[#403323]">€{resident.extras}</td>
                      <td className="px-4 py-3 text-sm text-[#38712c]">€{resident.total}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}