import { AlertTriangle, Clock, CheckCircle, XCircle, Plus, Search, Filter, Eye, Edit, Trash2 } from "lucide-react";

const incidents = [
  { id: 1, title: "Fuite d'eau dans salle de bain", room: "Ch. 104 - Bât. A", resident: "Sophie Martin", reported: "10/02/2025", status: "En cours", priority: "Haute", statusColor: "#ff7f27" },
  { id: 2, title: "Climatisation en panne", room: "Ch. 201 - Bât. A", resident: "Lucas Dubois", reported: "09/02/2025", status: "Ouvert", priority: "Moyenne", statusColor: "#403323" },
  { id: 3, title: "Ampoule grillée couloir", room: "Couloir - Étage 2", resident: "Équipe", reported: "08/02/2025", status: "Résolu", priority: "Basse", statusColor: "#38712c" },
  { id: 4, title: "Fenêtre bloquée", room: "Ch. 312 - Bât. B", resident: "Emma Leroy", reported: "07/02/2025", status: "En cours", priority: "Moyenne", statusColor: "#ff7f27" },
  { id: 5, title: "Problème de serrure", room: "Ch. 105 - Bât. A", resident: "Thomas Bernard", reported: "06/02/2025", status: "Résolu", priority: "Haute", statusColor: "#38712c" },
  { id: 6, title: "Wi-Fi non fonctionnel", room: "Salle commune", resident: "Tous", reported: "05/02/2025", status: "Ouvert", priority: "Moyenne", statusColor: "#403323" },
  { id: 7, title: "Robinets qui fuient", room: "Cuisine - Bât. B", resident: "Équipe", reported: "04/02/2025", status: "En cours", priority: "Moyenne", statusColor: "#ff7f27" },
  { id: 8, title: "Porte mal fermée", room: "Entrée principale", resident: "Sécurité", reported: "03/02/2025", status: "Résolu", priority: "Basse", statusColor: "#38712c" },
];

export default function Incidents() {
  return (
    <div className="flex-1 p-6 overflow-y-auto">
      <div className="max-w-full">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-xl text-[#403323]">Gestion des incidents</h1>
            <p className="text-sm text-gray-500 mt-1">Déclaration et suivi des problèmes de maintenance</p>
          </div>
          <div className="flex gap-2">
            <button className="px-4 py-2 border border-[#e6e6e6] rounded-lg hover:bg-white transition-colors text-sm text-[#403323] flex items-center gap-2">
              <Filter className="w-4 h-4" />
              Filtrer
            </button>
            <button className="px-4 py-2 bg-[#ff7f27] text-white rounded-lg hover:bg-[#e66f1f] transition-colors text-sm flex items-center gap-2">
              <Plus className="w-4 h-4" />
              Nouvel incident
            </button>
          </div>
        </div>

        {/* Statistiques */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-xl p-3 shadow-sm">
            <div className="text-xs text-gray-500 mb-1">Total incidents</div>
            <div className="text-xl text-[#403323]">48</div>
          </div>
          <div className="bg-white rounded-xl p-3 shadow-sm border-l-4 border-[#403323]">
            <div className="text-xs text-gray-500 mb-1">Ouverts</div>
            <div className="text-xl text-[#403323]">12</div>
          </div>
          <div className="bg-white rounded-xl p-3 shadow-sm border-l-4 border-[#ff7f27]">
            <div className="text-xs text-gray-500 mb-1">En cours</div>
            <div className="text-xl text-[#ff7f27]">8</div>
          </div>
          <div className="bg-white rounded-xl p-3 shadow-sm border-l-4 border-[#38712c]">
            <div className="text-xs text-gray-500 mb-1">Résolus</div>
            <div className="text-xl text-[#38712c]">28</div>
          </div>
        </div>

        {/* Barre de recherche et filtres */}
        <div className="bg-white rounded-xl p-4 mb-6 shadow-sm">
          <div className="flex gap-3 mb-3">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Rechercher un incident..."
                className="w-full pl-10 pr-4 py-2 border border-[#e6e6e6] rounded-lg text-sm text-[#403323] focus:outline-none focus:border-[#ff7f27]"
              />
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <select className="text-xs border border-[#e6e6e6] rounded px-3 py-1.5 bg-white text-[#403323]">
              <option>Tous les statuts</option>
              <option>Ouvert</option>
              <option>En cours</option>
              <option>Résolu</option>
            </select>
            <select className="text-xs border border-[#e6e6e6] rounded px-3 py-1.5 bg-white text-[#403323]">
              <option>Toutes les priorités</option>
              <option>Haute</option>
              <option>Moyenne</option>
              <option>Basse</option>
            </select>
            <select className="text-xs border border-[#e6e6e6] rounded px-3 py-1.5 bg-white text-[#403323]">
              <option>Tous les bâtiments</option>
              <option>Bâtiment A</option>
              <option>Bâtiment B</option>
              <option>Bâtiment C</option>
            </select>
            <input
              type="date"
              className="text-xs border border-[#e6e6e6] rounded px-3 py-1.5 bg-white text-[#403323]"
              placeholder="Date de déclaration"
            />
          </div>
        </div>

        {/* Liste des incidents */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="overflow-auto">
            <table className="w-full">
              <thead className="bg-[#f5f5f5]">
                <tr>
                  <th className="text-left px-4 py-3 text-xs text-[#403323]">Incident</th>
                  <th className="text-left px-4 py-3 text-xs text-[#403323]">Localisation</th>
                  <th className="text-left px-4 py-3 text-xs text-[#403323]">Signalé par</th>
                  <th className="text-left px-4 py-3 text-xs text-[#403323]">Date</th>
                  <th className="text-left px-4 py-3 text-xs text-[#403323]">Statut</th>
                  <th className="text-left px-4 py-3 text-xs text-[#403323]">Priorité</th>
                  <th className="text-left px-4 py-3 text-xs text-[#403323]">Actions</th>
                </tr>
              </thead>
              <tbody>
                {incidents.map((incident) => (
                  <tr key={incident.id} className="border-b border-[#e6e6e6] hover:bg-[#f5f5f5]">
                    <td className="px-4 py-3">
                      <div className="flex items-start gap-2">
                        <AlertTriangle className={`w-4 h-4 mt-0.5 ${
                          incident.priority === "Haute" ? "text-red-500" :
                          incident.priority === "Moyenne" ? "text-[#ff7f27]" : "text-gray-400"
                        }`} />
                        <div>
                          <div className="text-sm text-[#403323]">{incident.title}</div>
                          <div className="text-xs text-gray-500 mt-1">ID: INC-2025-{incident.id.toString().padStart(3, '0')}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-sm text-[#403323]">{incident.room}</td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-[#38712c] rounded-full flex items-center justify-center text-white text-xs">
                          {incident.resident.split(' ').map(n => n[0]).join('')}
                        </div>
                        <span className="text-sm text-[#403323]">{incident.resident}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-sm text-[#403323]">{incident.reported}</td>
                    <td className="px-4 py-3">
                      <span 
                        className="text-xs px-2 py-1 rounded"
                        style={{
                          backgroundColor: `${incident.statusColor}15`,
                          color: incident.statusColor
                        }}
                      >
                        {incident.status}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <span className={`text-xs px-2 py-1 rounded ${
                        incident.priority === "Haute" 
                          ? "bg-red-50 text-red-600"
                          : incident.priority === "Moyenne"
                          ? "bg-[#ff7f27]/10 text-[#ff7f27]"
                          : "bg-gray-100 text-gray-600"
                      }`}>
                        {incident.priority}
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
                        <button className="p-1.5 hover:bg-[#f5f5f5] rounded transition-colors" title="Supprimer">
                          <Trash2 className="w-4 h-4 text-red-500" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Footer avec pagination */}
          <div className="border-t border-[#e6e6e6] px-4 py-3 flex items-center justify-between">
            <div className="text-xs text-gray-500">
              Affichage 1-8 sur 48 incidents
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
              <button className="px-3 py-1.5 border border-[#e6e6e6] rounded text-xs text-[#403323] hover:bg-[#f5f5f5]">6</button>
              <button className="p-1.5 border border-[#e6e6e6] rounded hover:bg-[#f5f5f5] transition-colors">
                <svg className="w-4 h-4 text-[#403323]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Section pour déclarer un nouvel incident */}
        <div className="mt-6 bg-white rounded-xl p-5 shadow-sm">
          <h3 className="text-sm text-[#403323] mb-3">Déclarer un nouvel incident</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-xs text-gray-600 mb-1 block">Titre *</label>
              <input
                type="text"
                placeholder="Description courte du problème"
                className="w-full px-3 py-2 border border-[#e6e6e6] rounded-lg text-sm focus:outline-none focus:border-[#ff7f27]"
              />
            </div>
            <div>
              <label className="text-xs text-gray-600 mb-1 block">Localisation *</label>
              <select className="w-full px-3 py-2 border border-[#e6e6e6] rounded-lg text-sm focus:outline-none focus:border-[#ff7f27]">
                <option>Sélectionner une localisation</option>
                <option>Chambre 104 - Bâtiment A</option>
                <option>Chambre 201 - Bâtiment A</option>
                <option>Salle commune</option>
                <option>Cuisine - Bâtiment B</option>
              </select>
            </div>
            <div>
              <label className="text-xs text-gray-600 mb-1 block">Type d'incident *</label>
              <select className="w-full px-3 py-2 border border-[#e6e6e6] rounded-lg text-sm focus:outline-none focus:border-[#ff7f27]">
                <option>Sélectionner un type</option>
                <option>Plomberie</option>
                <option>Électricité</option>
                <option>Climatisation</option>
                <option>Menuiserie</option>
                <option>Informatique</option>
                <option>Autre</option>
              </select>
            </div>
            <div>
              <label className="text-xs text-gray-600 mb-1 block">Priorité *</label>
              <select className="w-full px-3 py-2 border border-[#e6e6e6] rounded-lg text-sm focus:outline-none focus:border-[#ff7f27]">
                <option>Sélectionner une priorité</option>
                <option>Haute</option>
                <option>Moyenne</option>
                <option>Basse</option>
              </select>
            </div>
            <div className="col-span-2">
              <label className="text-xs text-gray-600 mb-1 block">Description détaillée *</label>
              <textarea
                placeholder="Décrivez le problème en détails..."
                className="w-full px-3 py-2 border border-[#e6e6e6] rounded-lg text-sm focus:outline-none focus:border-[#ff7f27] h-24 resize-none"
              />
            </div>
          </div>
          <div className="mt-4 flex justify-end">
            <button className="px-5 py-2 bg-[#ff7f27] text-white rounded-lg text-sm hover:bg-[#e66f1f] transition-colors">
              Déclarer l'incident
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}