import React from "react";
import { Search, Filter, Clock, Plus } from "lucide-react";

export default function PersonnelTasks() {
  return (
    <div className="flex-1 p-6 overflow-y-auto">
      <div className="max-w-full">
        {/* Title & Add Button */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-2xl font-bold text-[#403323] mb-1">Affectation des Tâches</h1>
            <p className="text-sm text-gray-500">Gérez les tâches de votre personnel</p>
          </div>
          <button className="bg-[#38712c] text-white px-4 py-2 rounded-md hover:bg-[#2d5a23] transition-colors text-sm font-medium flex items-center gap-2">
            <Plus className="w-4 h-4" />
            Nouvelle tâche
          </button>
        </div>

        {/* KPI Cards - Compact */}
        <div className="grid grid-cols-4 gap-3 mb-4">
          <div className="bg-white rounded-lg p-3 border border-gray-200">
            <div className="text-xs text-gray-500 mb-1">Total tâches</div>
            <div className="text-xl font-bold text-[#38712c]">24</div>
          </div>
          <div className="bg-white rounded-lg p-3 border border-gray-200 border-l-3 border-[#38712c]">
            <div className="text-xs text-gray-500 mb-1">En cours</div>
            <div className="text-xl font-bold text-[#38712c]">8</div>
          </div>
          <div className="bg-white rounded-lg p-3 border border-gray-200 border-l-3 border-[#ff7f27]">
            <div className="text-xs text-gray-500 mb-1">Terminées</div>
            <div className="text-xl font-bold text-[#ff7f27]">12</div>
          </div>
          <div className="bg-white rounded-lg p-3 border border-gray-200 border-l-3 border-[#403323]">
            <div className="text-xs text-gray-500 mb-1">En retard</div>
            <div className="text-xl font-bold text-[#403323]">4</div>
          </div>
        </div>

        {/* Search & Filters */}
        <div className="bg-white rounded-lg p-4 mb-6 border border-gray-200">
          <div className="flex items-center gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Rechercher une tâche..."
                className="w-full pl-10 pr-4 py-2 border border-[#e6e6e6] rounded text-sm text-[#403323] focus:outline-none focus:border-[#ff7f27]"
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-[#403323]" />
              <select className="text-sm border border-[#e6e6e6] rounded px-3 py-2 text-[#403323]">
                <option>Tous statuts</option>
                <option>En cours</option>
                <option>Terminé</option>
                <option>Planifié</option>
              </select>
              <select className="text-sm border border-[#e6e6e6] rounded px-3 py-2 text-[#403323]">
                <option>Tous départements</option>
                <option>Sécurité</option>
                <option>Maintenance</option>
                <option>Administration</option>
              </select>
            </div>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {/* Tâche 1 */}
          <div className="bg-white rounded-lg border border-gray-200 p-5 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="font-semibold text-[#403323]">Surveillance nocturne</h3>
                <div className="flex items-center gap-1 text-sm text-gray-500 mt-1">
                  <Clock className="w-3 h-3" />
                  22h00 - 06h00
                </div>
              </div>
              <span className="px-2 py-1 text-xs font-medium bg-blue-50 text-blue-700 rounded-full border border-blue-100">
                En cours
              </span>
            </div>
            <p className="text-sm text-gray-700 mb-4">Surveillance du bâtiment principal et des accès extérieurs.</p>
            <div className="flex items-center justify-between pt-3 border-t border-gray-100">
              <div className="flex items-center">
                <div className="w-6 h-6 rounded-full bg-[#38712c] flex items-center justify-center mr-2">
                  <span className="text-xs font-medium text-white">JD</span>
                </div>
                <span className="text-sm text-[#403323]">Jean Dupont</span>
              </div>
              <span className="text-xs text-gray-500">Aujourd'hui</span>
            </div>
          </div>

          {/* Tâche 2 */}
          <div className="bg-white rounded-lg border border-gray-200 p-5 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="font-semibold text-[#403323]">Nettoyage espaces communs</h3>
                <div className="flex items-center gap-1 text-sm text-gray-500 mt-1">
                  <Clock className="w-3 h-3" />
                  08h00 - 12h00
                </div>
              </div>
              <span className="px-2 py-1 text-xs font-medium bg-green-50 text-green-700 rounded-full border border-green-100">
                Terminé
              </span>
            </div>
            <p className="text-sm text-gray-700 mb-4">Nettoyage complet des couloirs, salle de pause et sanitaires.</p>
            <div className="flex items-center justify-between pt-3 border-t border-gray-100">
              <div className="flex items-center">
                <div className="w-6 h-6 rounded-full bg-[#ff7f27] flex items-center justify-center mr-2">
                  <span className="text-xs font-medium text-white">MM</span>
                </div>
                <span className="text-sm text-[#403323]">Marie Martin</span>
              </div>
              <span className="text-xs text-gray-500">Hier</span>
            </div>
          </div>

          {/* Tâche 3 */}
          <div className="bg-white rounded-lg border border-gray-200 p-5 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="font-semibold text-[#403323]">Inventaire matériel</h3>
                <div className="flex items-center gap-1 text-sm text-gray-500 mt-1">
                  <Clock className="w-3 h-3" />
                  14h00 - 18h00
                </div>
              </div>
              <span className="px-2 py-1 text-xs font-medium bg-amber-50 text-amber-700 rounded-full border border-amber-100">
                Planifié
              </span>
            </div>
            <p className="text-sm text-gray-700 mb-4">Vérification et inventaire du matériel de maintenance.</p>
            <div className="flex items-center justify-between pt-3 border-t border-gray-100">
              <div className="flex items-center">
                <div className="w-6 h-6 rounded-full bg-[#403323] flex items-center justify-center mr-2">
                  <span className="text-xs font-medium text-white">PL</span>
                </div>
                <span className="text-sm text-[#403323]">Pierre Leroy</span>
              </div>
              <span className="text-xs text-gray-500">Demain</span>
            </div>
          </div>
        </div>

        {/* Table des tâches */}
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <div className="p-4 border-b border-gray-200 bg-[#f5f5f5]">
            <h2 className="text-lg font-semibold text-[#403323]">Toutes les tâches</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-[#f5f5f5]">
                <tr>
                  <th className="text-left px-4 py-3 text-xs font-medium text-[#403323] uppercase">Tâche</th>
                  <th className="text-left px-4 py-3 text-xs font-medium text-[#403323] uppercase">Personnel</th>
                  <th className="text-left px-4 py-3 text-xs font-medium text-[#403323] uppercase">Département</th>
                  <th className="text-left px-4 py-3 text-xs font-medium text-[#403323] uppercase">Date</th>
                  <th className="text-left px-4 py-3 text-xs font-medium text-[#403323] uppercase">Statut</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-[#e6e6e6] hover:bg-[#f5f5f5]">
                  <td className="px-4 py-3 text-sm text-[#403323]">Surveillance portail principal</td>
                  <td className="px-4 py-3">
                    <div className="flex items-center">
                      <div className="w-6 h-6 rounded-full bg-[#38712c] flex items-center justify-center mr-2">
                        <span className="text-xs font-medium text-white">JD</span>
                      </div>
                      <span className="text-sm text-[#403323]">Jean Dupont</span>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <span className="inline-block px-2 py-1 rounded text-xs bg-blue-50 text-blue-700 border border-blue-100">
                      Sécurité
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm text-[#403323]">15/03/2024</td>
                  <td className="px-4 py-3">
                    <span className="inline-block px-2 py-1 rounded text-xs bg-green-50 text-green-700 border border-green-100">
                      Terminé
                    </span>
                  </td>
                </tr>
                <tr className="border-t border-[#e6e6e6] hover:bg-[#f5f5f5]">
                  <td className="px-4 py-3 text-sm text-[#403323]">Entretien système HVAC</td>
                  <td className="px-4 py-3">
                    <div className="flex items-center">
                      <div className="w-6 h-6 rounded-full bg-[#ff7f27] flex items-center justify-center mr-2">
                        <span className="text-xs font-medium text-white">MM</span>
                      </div>
                      <span className="text-sm text-[#403323]">Marie Martin</span>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <span className="inline-block px-2 py-1 rounded text-xs bg-green-50 text-green-700 border border-green-100">
                      Maintenance
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm text-[#403323]">16/03/2024</td>
                  <td className="px-4 py-3">
                    <span className="inline-block px-2 py-1 rounded text-xs bg-blue-50 text-blue-700 border border-blue-100">
                      En cours
                    </span>
                  </td>
                </tr>
                <tr className="border-t border-[#e6e6e6] hover:bg-[#f5f5f5]">
                  <td className="px-4 py-3 text-sm text-[#403323]">Commande fournitures</td>
                  <td className="px-4 py-3">
                    <div className="flex items-center">
                      <div className="w-6 h-6 rounded-full bg-[#403323] flex items-center justify-center mr-2">
                        <span className="text-xs font-medium text-white">PL</span>
                      </div>
                      <span className="text-sm text-[#403323]">Pierre Leroy</span>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <span className="inline-block px-2 py-1 rounded text-xs bg-purple-50 text-purple-700 border border-purple-100">
                      Administration
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm text-[#403323]">17/03/2024</td>
                  <td className="px-4 py-3">
                    <span className="inline-block px-2 py-1 rounded text-xs bg-amber-50 text-amber-700 border border-amber-100">
                      Planifié
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}