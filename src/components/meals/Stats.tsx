import { MealConsumptionChart } from "./MealConsumptionChart";
import { MealSection } from "./MealSection";
import { Users, Utensils, TrendingUp, Coffee } from "lucide-react";

export default function MealStats() {
  return (
    <div className="flex-1 p-6 overflow-y-auto">
      <div className="max-w-full">
        {/* Header avec titre */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-xl text-[#403323]">Statistiques des repas</h1>
            <p className="text-sm text-gray-500 mt-1">Suivi de la consommation et des préférences</p>
          </div>
          <div className="flex gap-2">
            <select className="text-xs border border-[#e6e6e6] rounded px-3 py-2 bg-white text-[#403323]">
              <option>Cette semaine</option>
              <option>Ce mois</option>
              <option>Ce trimestre</option>
            </select>
            <button className="px-4 py-2 bg-[#ff7f27] text-white rounded-lg hover:bg-[#e66f1f] transition-colors text-sm">
              Exporter les données
            </button>
          </div>
        </div>

        {/* Cartes de statistiques */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-xl p-4 shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-[#38712c]/10 rounded-lg flex items-center justify-center">
                <Utensils className="w-5 h-5 text-[#38712c]" />
              </div>
              <div>
                <div className="text-xs text-gray-500">Repas servis</div>
                <div className="text-xl text-[#403323]">2,450</div>
              </div>
            </div>
            <div className="text-xs text-gray-600">+12% vs. semaine dernière</div>
          </div>

          <div className="bg-white rounded-xl p-4 shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-[#ff7f27]/10 rounded-lg flex items-center justify-center">
                <Users className="w-5 h-5 text-[#ff7f27]" />
              </div>
              <div>
                <div className="text-xs text-gray-500">Participation</div>
                <div className="text-xl text-[#403323]">92%</div>
              </div>
            </div>
            <div className="text-xs text-gray-600">58 pensionnaires réguliers</div>
          </div>

          <div className="bg-white rounded-xl p-4 shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-[#403323]/10 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-[#403323]" />
              </div>
              <div>
                <div className="text-xs text-gray-500">Préféré</div>
                <div className="text-xl text-[#403323]">Poulet rôti</div>
              </div>
            </div>
            <div className="text-xs text-gray-600">145 consommations</div>
          </div>

          <div className="bg-white rounded-xl p-4 shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-[#ff7f27]/10 rounded-lg flex items-center justify-center">
                <Coffee className="w-5 h-5 text-[#ff7f27]" />
              </div>
              <div>
                <div className="text-xs text-gray-500">Petit-déjeuner</div>
                <div className="text-xl text-[#403323]">520</div>
              </div>
            </div>
            <div className="text-xs text-gray-600">Présence moyenne</div>
          </div>
        </div>

        {/* Section des graphiques */}
        <div className="mb-6">
          <MealConsumptionChart />
        </div>

        {/* Graphiques détaillés */}
        <div className="mb-6">
          <MealSection />
        </div>

        {/* Tableau des préférences par pensionnaire */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="p-4 border-b border-[#e6e6e6]">
            <h3 className="text-sm text-[#403323]">Préférences par pensionnaire</h3>
          </div>
          <div className="overflow-auto">
            <table className="w-full">
              <thead className="bg-[#f5f5f5]">
                <tr>
                  <th className="text-left px-4 py-3 text-xs text-[#403323]">Pensionnaire</th>
                  <th className="text-left px-4 py-3 text-xs text-[#403323]">Plat préféré</th>
                  <th className="text-left px-4 py-3 text-xs text-[#403323]">Consommations</th>
                  <th className="text-left px-4 py-3 text-xs text-[#403323]">Régime</th>
                  <th className="text-left px-4 py-3 text-xs text-[#403323]">Participation</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: "Sophie Martin", favorite: "Poulet rôti", count: 28, diet: "Standard", participation: "95%" },
                  { name: "Lucas Dubois", favorite: "Pasta carbonara", count: 24, diet: "Standard", participation: "88%" },
                  { name: "Emma Leroy", favorite: "Salade César", count: 32, diet: "Végétarien", participation: "100%" },
                  { name: "Thomas Bernard", favorite: "Couscous", count: 19, diet: "Standard", participation: "76%" },
                  { name: "Camille Moreau", favorite: "Pizza margherita", count: 26, diet: "Végétarien", participation: "92%" },
                ].map((resident, idx) => (
                  <tr key={idx} className="border-b border-[#e6e6e6] hover:bg-[#f5f5f5]">
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 bg-[#38712c] rounded-full flex items-center justify-center text-white text-xs">
                          {resident.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <span className="text-sm text-[#403323]">{resident.name}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-sm text-[#403323]">{resident.favorite}</td>
                    <td className="px-4 py-3 text-sm text-[#403323]">{resident.count}</td>
                    <td className="px-4 py-3">
                      <span className={`text-xs px-2 py-1 rounded ${
                        resident.diet === "Standard" 
                          ? "bg-[#38712c]/10 text-[#38712c]"
                          : "bg-[#ff7f27]/10 text-[#ff7f27]"
                      }`}>
                        {resident.diet}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <div className="w-full bg-gray-200 rounded-full h-1.5">
                          <div 
                            className="bg-[#38712c] h-1.5 rounded-full" 
                            style={{ width: resident.participation }}
                          ></div>
                        </div>
                        <span className="text-xs text-gray-600">{resident.participation}</span>
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