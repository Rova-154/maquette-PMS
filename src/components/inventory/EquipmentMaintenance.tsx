import React from "react";
import { Search, Filter, Plus, Calendar, Wrench, AlertTriangle } from "lucide-react";

export default function EquipmentMaintenance() {
  const maintenanceTasks = [
    { id: 1, equipment: "Matelas Standard", type: "Nettoyage", frequency: "Mensuel", lastDone: "15/03/2024", nextDue: "15/04/2024", status: "Planifié", technician: "Marie Martin" },
    { id: 2, equipment: "Système HVAC", type: "Contrôle", frequency: "Trimestriel", lastDone: "05/01/2024", nextDue: "05/04/2024", status: "En retard", technician: "Thomas Petit" },
    { id: 3, equipment: "Ascenseurs", type: "Vérification", frequency: "Bimestriel", lastDone: "10/02/2024", nextDue: "10/04/2024", status: "Planifié", technician: "Jean Dupont" },
    { id: 4, equipment: "Système incendie", type: "Test", frequency: "Mensuel", lastDone: "28/02/2024", nextDue: "28/03/2024", status: "Critique", technician: "Pierre Leroy" },
    { id: 5, equipment: "Éclairage", type: "Remplacement", frequency: "Semestriel", lastDone: "15/12/2023", nextDue: "15/06/2024", status: "Planifié", technician: "Marie Martin" },
  ];

  return (
    <div className="flex-1 p-6 overflow-y-auto">
      <div className="max-w-full">
        {/* Title & Actions */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-2xl font-bold text-[#403323] mb-1">Maintenance des Équipements</h1>
            <p className="text-sm text-gray-500">Gestion et suivi des opérations de maintenance</p>
          </div>
          <div className="flex gap-2">
            <button className="bg-[#38712c] text-white px-4 py-2 rounded-md hover:bg-[#2d5a23] transition-colors text-sm font-medium flex items-center gap-2">
              <Plus className="w-4 h-4" />
              Nouvelle intervention
            </button>
            <button className="border border-[#e6e6e6] text-[#403323] px-4 py-2 rounded-md hover:bg-[#f5f5f5] transition-colors text-sm font-medium">
              Planifier maintenance
            </button>
          </div>
        </div>

        {/* KPI Cards - Compact */}
        <div className="grid grid-cols-4 gap-3 mb-4">
          <div className="bg-white rounded-lg p-3 border border-gray-200">
            <div className="text-xs text-gray-500 mb-1">Interventions</div>
            <div className="text-xl font-bold text-[#38712c]">18</div>
          </div>
          <div className="bg-white rounded-lg p-3 border border-gray-200 border-l-3 border-[#38712c]">
            <div className="text-xs text-gray-500 mb-1">En retard</div>
            <div className="text-xl font-bold text-[#38712c]">3</div>
          </div>
          <div className="bg-white rounded-lg p-3 border border-gray-200 border-l-3 border-[#ff7f27]">
            <div className="text-xs text-gray-500 mb-1">Coût mensuel</div>
            <div className="text-xl font-bold text-[#ff7f27]">4,800€</div>
          </div>
          <div className="bg-white rounded-lg p-3 border border-gray-200 border-l-3 border-[#403323]">
            <div className="text-xs text-gray-500 mb-1">Temps moyen</div>
            <div className="text-xl font-bold text-[#403323]">2.5h</div>
          </div>
        </div>

        {/* Search & Filters */}
        <div className="bg-white rounded-lg p-4 mb-6 border border-gray-200">
          <div className="flex items-center gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Rechercher par équipement, technicien..."
                className="w-full pl-10 pr-4 py-2 border border-[#e6e6e6] rounded text-sm text-[#403323] focus:outline-none focus:border-[#ff7f27]"
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-[#403323]" />
              <select className="text-sm border border-[#e6e6e6] rounded px-3 py-2 text-[#403323]">
                <option>Tous statuts</option>
                <option>Planifié</option>
                <option>En cours</option>
                <option>Terminé</option>
                <option>En retard</option>
              </select>
              <select className="text-sm border border-[#e6e6e6] rounded px-3 py-2 text-[#403323]">
                <option>Tous types</option>
                <option>Nettoyage</option>
                <option>Contrôle</option>
                <option>Vérification</option>
                <option>Test</option>
              </select>
              <select className="text-sm border border-[#e6e6e6] rounded px-3 py-2 text-[#403323]">
                <option>Tous techniciens</option>
                <option>Marie Martin</option>
                <option>Thomas Petit</option>
                <option>Jean Dupont</option>
                <option>Pierre Leroy</option>
              </select>
            </div>
          </div>
        </div>

        {/* Tableau des tâches */}
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden mb-6">
          <div className="p-4 border-b border-gray-200 bg-[#f5f5f5]">
            <h2 className="text-lg font-semibold text-[#403323]">Tâches de maintenance</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-[#f5f5f5]">
                <tr>
                  <th className="text-left px-4 py-3 text-xs font-medium text-[#403323] uppercase">Équipement</th>
                  <th className="text-left px-4 py-3 text-xs font-medium text-[#403323] uppercase">Type</th>
                  <th className="text-left px-4 py-3 text-xs font-medium text-[#403323] uppercase">Fréquence</th>
                  <th className="text-left px-4 py-3 text-xs font-medium text-[#403323] uppercase">Dernière</th>
                  <th className="text-left px-4 py-3 text-xs font-medium text-[#403323] uppercase">Prochaine</th>
                  <th className="text-left px-4 py-3 text-xs font-medium text-[#403323] uppercase">Technicien</th>
                  <th className="text-left px-4 py-3 text-xs font-medium text-[#403323] uppercase">Statut</th>
                  <th className="text-left px-4 py-3 text-xs font-medium text-[#403323] uppercase">Actions</th>
                </tr>
              </thead>
              <tbody>
                {maintenanceTasks.map((task) => (
                  <tr key={task.id} className="border-t border-[#e6e6e6] hover:bg-[#f5f5f5]">
                    <td className="px-4 py-3 text-sm font-medium text-[#403323]">{task.equipment}</td>
                    <td className="px-4 py-3">
                      <span className="inline-block px-2 py-1 rounded text-xs bg-blue-50 text-blue-700 border border-blue-100">
                        {task.type}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-sm text-[#403323]">{task.frequency}</td>
                    <td className="px-4 py-3 text-sm text-[#403323]">{task.lastDone}</td>
                    <td className="px-4 py-3 text-sm font-medium text-[#403323]">{task.nextDue}</td>
                    <td className="px-4 py-3 text-sm text-[#403323]">{task.technician}</td>
                    <td className="px-4 py-3">
                      <span className={`inline-block px-2 py-1 rounded text-xs font-medium ${
                        task.status === "Planifié" 
                          ? "bg-green-50 text-green-700 border border-green-100" 
                          : task.status === "En retard"
                          ? "bg-amber-50 text-amber-700 border border-amber-100"
                          : "bg-red-50 text-red-700 border border-red-100"
                      }`}>
                        {task.status}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex gap-2">
                        <button className="text-sm text-[#38712c] hover:text-[#2d5a23]">
                          Exécuter
                        </button>
                        <button className="text-sm text-[#403323] hover:text-[#ff7f27]">
                          Reporter
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
          {/* Calendrier */}
          {/* <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-[#403323]">Calendrier des maintenances</h2>
              <Calendar className="w-5 h-5 text-[#403323]" />
            </div>
            <div className="space-y-4">
              {[
                { date: "28/03/2024", day: "Jeu", tasks: ["Test système incendie", "Vérification extincteurs"] },
                { date: "05/04/2024", day: "Ven", tasks: ["Contrôle HVAC", "Nettoyage filtres"] },
                { date: "10/04/2024", day: "Mer", tasks: ["Vérification ascenseurs"] },
                { date: "15/04/2024", day: "Lun", tasks: ["Nettoyage matelas", "Rotation literie"] },
              ].map((day, index) => (
                <div key={index} className="p-4 border border-gray-200 rounded-lg hover:bg-[#f5f5f5]">
                  <div className="flex items-center mb-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#38712c] to-[#4a8c3a] text-white rounded-lg flex flex-col items-center justify-center mr-3">
                      <span className="text-xs">{day.day}</span>
                      <span className="text-lg font-bold">{day.date.split('/')[0]}</span>
                    </div>
                    <div>
                      <h3 className="font-medium text-[#403323]">{day.date}</h3>
                      <p className="text-sm text-gray-500">{day.tasks.length} tâches planifiées</p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {day.tasks.map((task, taskIndex) => (
                      <li key={taskIndex} className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-[#38712c] rounded-full mr-2"></div>
                        <span className="text-[#403323]">{task}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div> */}

          {/* Rapports */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-[#403323]">Rapport d'efficacité</h2>
              <Wrench className="w-5 h-5 text-[#403323]" />
            </div>
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 border border-gray-200 rounded-lg">
                  <div className="text-2xl font-bold text-[#38712c] mb-1">92%</div>
                  <p className="text-xs text-gray-600">Taux de complétion</p>
                </div>
                <div className="text-center p-4 border border-gray-200 rounded-lg">
                  <div className="text-2xl font-bold text-[#ff7f27] mb-1">15%</div>
                  <p className="text-xs text-gray-600">Réduction pannes</p>
                </div>
                <div className="text-center p-4 border border-gray-200 rounded-lg">
                  <div className="text-2xl font-bold text-[#403323] mb-1">8%</div>
                  <p className="text-xs text-gray-600">Économies</p>
                </div>
                <div className="text-center p-4 border border-gray-200 rounded-lg">
                  <div className="text-2xl font-bold text-[#38712c] mb-1">8.4/10</div>
                  <p className="text-xs text-gray-600">Fiabilité</p>
                </div>
              </div>
              
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-[#403323]">Indice de fiabilité</span>
                  <span className="text-sm font-medium text-[#403323]">8.4/10</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-gradient-to-r from-[#38712c] to-[#4a8c3a] h-2 rounded-full" style={{ width: '84%' }}></div>
                </div>
              </div>
              
              <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-100">
                <div className="flex items-center gap-2 mb-2">
                  <AlertTriangle className="w-4 h-4 text-[#38712c]" />
                  <h4 className="font-medium text-[#38712c]">Recommandation</h4>
                </div>
                <p className="text-sm text-gray-700">
                  Optimisez la fréquence des maintenances préventives pour réduire les coûts de 15%
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}