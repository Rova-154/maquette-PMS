import { Wrench, CheckCircle, Clock, DollarSign, Search, Filter, Download } from "lucide-react";

const repairs = [
  { id: 1, incident: "Fuite d'eau salle de bain", technician: "Jean Dupont", room: "Ch. 104 - Bât. A", date: "15/02/2025", duration: "2h", cost: 180, status: "Terminée", statusColor: "#38712c" },
  { id: 2, incident: "Climatisation en panne", technician: "Marc Lefebvre", room: "Ch. 201 - Bât. A", date: "14/02/2025", duration: "4h", cost: 320, status: "En cours", statusColor: "#ff7f27" },
  { id: 3, incident: "Ampoule grillée couloir", technician: "Pierre Martin", room: "Couloir - Étage 2", date: "12/02/2025", duration: "0.5h", cost: 25, status: "Terminée", statusColor: "#38712c" },
  { id: 4, incident: "Fenêtre bloquée", technician: "Jean Dupont", room: "Ch. 312 - Bât. B", date: "10/02/2025", duration: "1.5h", cost: 120, status: "Terminée", statusColor: "#38712c" },
  { id: 5, incident: "Problème de serrure", technician: "Marc Lefebvre", room: "Ch. 105 - Bât. A", date: "08/02/2025", duration: "1h", cost: 90, status: "Terminée", statusColor: "#38712c" },
  { id: 6, incident: "Wi-Fi non fonctionnel", technician: "Pierre Martin", room: "Salle commune", date: "07/02/2025", duration: "3h", cost: 240, status: "Planifiée", statusColor: "#403323" },
  { id: 7, incident: "Robinets qui fuient", technician: "Jean Dupont", room: "Cuisine - Bât. B", date: "05/02/2025", duration: "2.5h", cost: 200, status: "Terminée", statusColor: "#38712c" },
  { id: 8, incident: "Porte mal fermée", technician: "Marc Lefebvre", room: "Entrée principale", date: "03/02/2025", duration: "1h", cost: 85, status: "Terminée", statusColor: "#38712c" },
];

export default function Repairs() {
  return (
    <div className="flex-1 p-6 overflow-y-auto">
      <div className="max-w-full">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-xl text-[#403323]">Historique des réparations</h1>
            <p className="text-sm text-gray-500 mt-1">Suivi des interventions de maintenance</p>
          </div>
          <div className="flex gap-2">
            <button className="px-4 py-2 border border-[#e6e6e6] rounded-lg hover:bg-white transition-colors text-sm text-[#403323] flex items-center gap-2">
              <Download className="w-4 h-4" />
              Exporter
            </button>
            <button className="px-4 py-2 bg-[#ff7f27] text-white rounded-lg hover:bg-[#e66f1f] transition-colors text-sm flex items-center gap-2">
              <Wrench className="w-4 h-4" />
              Nouvelle intervention
            </button>
          </div>
        </div>

        {/* Statistiques */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-xl p-3 shadow-sm">
            <div className="text-xs text-gray-500 mb-1">Total interventions</div>
            <div className="text-xl text-[#403323]">36</div>
          </div>
          <div className="bg-white rounded-xl p-3 shadow-sm border-l-4 border-[#38712c]">
            <div className="text-xs text-gray-500 mb-1">Terminées</div>
            <div className="text-xl text-[#38712c]">28</div>
          </div>
          <div className="bg-white rounded-xl p-3 shadow-sm border-l-4 border-[#ff7f27]">
            <div className="text-xs text-gray-500 mb-1">En cours</div>
            <div className="text-xl text-[#ff7f27]">4</div>
          </div>
          <div className="bg-white rounded-xl p-3 shadow-sm border-l-4 border-[#403323]">
            <div className="text-xs text-gray-500 mb-1">Planifiées</div>
            <div className="text-xl text-[#403323]">4</div>
          </div>
        </div>

        {/* Barre de recherche et filtres */}
        <div className="bg-white rounded-xl p-4 mb-6 shadow-sm">
          <div className="flex gap-3 mb-3">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Rechercher une intervention..."
                className="w-full pl-10 pr-4 py-2 border border-[#e6e6e6] rounded-lg text-sm text-[#403323] focus:outline-none focus:border-[#ff7f27]"
              />
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-[#403323]" />
            <select className="text-xs border border-[#e6e6e6] rounded px-3 py-1.5 bg-white text-[#403323]">
              <option>Tous les statuts</option>
              <option>Terminée</option>
              <option>En cours</option>
              <option>Planifiée</option>
            </select>
            <select className="text-xs border border-[#e6e6e6] rounded px-3 py-1.5 bg-white text-[#403323]">
              <option>Tous les techniciens</option>
              <option>Jean Dupont</option>
              <option>Marc Lefebvre</option>
              <option>Pierre Martin</option>
            </select>
            <select className="text-xs border border-[#e6e6e6] rounded px-3 py-1.5 bg-white text-[#403323]">
              <option>Tous les bâtiments</option>
              <option>Bâtiment A</option>
              <option>Bâtiment B</option>
            </select>
          </div>
        </div>

        {/* Liste des réparations */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="overflow-auto">
            <table className="w-full">
              <thead className="bg-[#f5f5f5]">
                <tr>
                  <th className="text-left px-4 py-3 text-xs text-[#403323]">Intervention</th>
                  <th className="text-left px-4 py-3 text-xs text-[#403323]">Technicien</th>
                  <th className="text-left px-4 py-3 text-xs text-[#403323]">Localisation</th>
                  <th className="text-left px-4 py-3 text-xs text-[#403323]">Date</th>
                  <th className="text-left px-4 py-3 text-xs text-[#403323]">Durée</th>
                  <th className="text-left px-4 py-3 text-xs text-[#403323]">Coût</th>
                  <th className="text-left px-4 py-3 text-xs text-[#403323]">Statut</th>
                </tr>
              </thead>
              <tbody>
                {repairs.map((repair) => (
                  <tr key={repair.id} className="border-b border-[#e6e6e6] hover:bg-[#f5f5f5]">
                    <td className="px-4 py-3">
                      <div className="flex items-start gap-2">
                        <Wrench className="w-4 h-4 mt-0.5 text-[#403323]" />
                        <div>
                          <div className="text-sm text-[#403323]">{repair.incident}</div>
                          <div className="text-xs text-gray-500 mt-1">ID: REP-2025-{repair.id.toString().padStart(3, '0')}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-[#ff7f27] rounded-full flex items-center justify-center text-white text-xs">
                          {repair.technician.split(' ').map(n => n[0]).join('')}
                        </div>
                        <span className="text-sm text-[#403323]">{repair.technician}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-sm text-[#403323]">{repair.room}</td>
                    <td className="px-4 py-3 text-sm text-[#403323]">{repair.date}</td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-gray-400" />
                        <span className="text-sm text-[#403323]">{repair.duration}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-1">
                        <DollarSign className="w-3 h-3 text-[#38712c]" />
                        <span className="text-sm text-[#403323]">€{repair.cost}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <span 
                        className="text-xs px-2 py-1 rounded"
                        style={{
                          backgroundColor: `${repair.statusColor}15`,
                          color: repair.statusColor
                        }}
                      >
                        {repair.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Footer avec pagination */}
          <div className="border-t border-[#e6e6e6] px-4 py-3 flex items-center justify-between">
            <div className="text-xs text-gray-500">
              Affichage 1-8 sur 36 interventions
            </div>
            <div className="flex items-center gap-2">
              <button className="p-1.5 border border-[#e6e6e6] rounded hover:bg-[#f5f5f5] transition-colors">
                <svg className="w-4 h-4 text-[#403323]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button className="px-3 py-1.5 bg-[#ff7f27] text-white rounded text-xs">1</button>
              <button className="px-3 py-1.5 border border-[#e6e6e6] rounded text-xs text-[#403323] hover:bg-[#f5f5f5]">2</button>
              <button className="px-3 py-1.5 border border-[#e6e6e6] rounded text-xs text-[#403323] hover:bg-[#f5f5f5]">3</button>
              <button className="px-3 py-1.5 border border-[#e6e6e6] rounded text-xs text-[#403323] hover:bg-[#f5f5f5]">...</button>
              <button className="px-3 py-1.5 border border-[#e6e6e6] rounded text-xs text-[#403323] hover:bg-[#f5f5f5]">5</button>
              <button className="p-1.5 border border-[#e6e6e6] rounded hover:bg-[#f5f5f5] transition-colors">
                <svg className="w-4 h-4 text-[#403323]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Résumé des temps et coûts */}
        <div className="mt-6 grid grid-cols-2 gap-4">
          <div className="bg-white rounded-xl p-5 shadow-sm">
            <h3 className="text-sm text-[#403323] mb-3">Temps d'intervention</h3>
            <div className="space-y-3">
              {[
                { period: "Cette semaine", hours: 12.5, change: "+2.5h" },
                { period: "Ce mois", hours: 48, change: "+8h" },
                { period: "Ce trimestre", hours: 156, change: "+15%" },
              ].map((item) => (
                <div key={item.period} className="flex justify-between items-center">
                  <div>
                    <div className="text-sm text-[#403323]">{item.period}</div>
                    <div className="text-xs text-gray-500">{item.change}</div>
                  </div>
                  <div className="text-lg text-[#403323]">{item.hours}h</div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl p-5 shadow-sm">
            <h3 className="text-sm text-[#403323] mb-3">Répartition par technicien</h3>
            <div className="space-y-3">
              {[
                { technician: "Jean Dupont", count: 15, percentage: 42 },
                { technician: "Marc Lefebvre", count: 12, percentage: 33 },
                { technician: "Pierre Martin", count: 9, percentage: 25 },
              ].map((item) => (
                <div key={item.technician} className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className="text-[#403323]">{item.technician}</span>
                    <span className="text-gray-600">{item.count} interventions</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="h-2 rounded-full bg-[#38712c]" 
                      style={{ width: `${item.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}