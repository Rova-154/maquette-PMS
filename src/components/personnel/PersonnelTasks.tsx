import React, { useState } from "react";
import { Search, Filter, Clock, Plus, ChevronLeft, ChevronRight, CheckCircle, Circle, AlertCircle, User, Calendar } from "lucide-react";

export default function PersonnelTasks() {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("Tous statuts");
  const [departmentFilter, setDepartmentFilter] = useState("Tous départements");

  const tasks = [
    { id: 1, name: "Surveillance nocturne", person: "Jean Dupont", department: "Sécurité", date: "15/03/2024", status: "Terminé", time: "22h00 - 06h00", description: "Surveillance du bâtiment principal et des accès extérieurs." },
    { id: 2, name: "Entretien système HVAC", person: "Marie Martin", department: "Maintenance", date: "16/03/2024", status: "En cours", time: "08h00 - 12h00", description: "Nettoyage complet des couloirs, salle de pause et sanitaires." },
    { id: 3, name: "Commande fournitures", person: "Pierre Leroy", department: "Administration", date: "17/03/2024", status: "Planifié", time: "14h00 - 18h00", description: "Vérification et inventaire du matériel de maintenance." },
    { id: 4, name: "Surveillance portail principal", person: "Jean Dupont", department: "Sécurité", date: "15/03/2024", status: "Terminé", time: "08h00 - 16h00", description: "Contrôle des entrées et sorties au portail principal." },
    { id: 5, name: "Maintenance ascenseur", person: "Thomas Petit", department: "Maintenance", date: "16/03/2024", status: "En cours", time: "09h00 - 17h00", description: "Contrôle technique et maintenance préventive de l'ascenseur." },
    { id: 6, name: "Archivage documents", person: "Claire Moreau", department: "Administration", date: "17/03/2024", status: "Planifié", time: "10h00 - 15h00", description: "Classement et archivage des documents administratifs." },
    { id: 7, name: "Ronde de sécurité", person: "Sophie Bernard", department: "Sécurité", date: "18/03/2024", status: "Planifié", time: "20h00 - 04h00", description: "Ronde de sécurité dans l'ensemble du complexe." },
    { id: 8, name: "Nettoyage chambres communes", person: "Marie Martin", department: "Maintenance", date: "18/03/2024", status: "En cours", time: "07h00 - 11h00", description: "Nettoyage approfondi des espaces communs." },
  ];

  // Filtrage
  const filteredTasks = tasks.filter(task => {
    const matchesSearch = searchTerm === "" || 
      task.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      task.person.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === "Tous statuts" || 
      task.status === statusFilter;
    
    const matchesDepartment = departmentFilter === "Tous départements" || 
      task.department === departmentFilter;
    
    return matchesSearch && matchesStatus && matchesDepartment;
  });

  // Pagination
  const totalItems = filteredTasks.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems);
  const currentTasks = filteredTasks.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // Statistiques
  const totalTasks = tasks.length;
  const tasksInProgress = tasks.filter(t => t.status === "En cours").length;
  const tasksCompleted = tasks.filter(t => t.status === "Terminé").length;
  const tasksDelayed = tasks.filter(t => t.status === "En retard").length;

  return (
    <div className="flex-1 p-4 md:p-6 overflow-y-auto">
      <div className="max-w-full">
        {/* Title & Add Button */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 md:mb-6">
          <div className="mb-4 md:mb-0">
            <h1 className="text-xl md:text-2xl font-bold text-[#403323] mb-1">Affectation des Tâches</h1>
            <p className="text-sm text-gray-600">Gérez les tâches de votre personnel</p>
          </div>
          <button className="bg-[#38712c] text-white px-4 py-2 rounded-md hover:bg-[#2d5a23] transition-colors text-sm font-medium flex items-center justify-center gap-2 w-full md:w-auto">
            <Plus className="w-4 h-4" />
            Nouvelle tâche
          </button>
        </div>

        {/* KPI Cards - Uniformisé avec icônes */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4 md:mb-6">
          <div className="bg-white rounded-lg p-3 border border-gray-200">
            <div className="flex items-center gap-2 text-xs text-gray-600 mb-1">
              <CheckCircle className="w-3 h-3" />
              Total tâches
            </div>
            <div className="text-lg md:text-xl font-bold text-[#38712c]">{totalTasks}</div>
          </div>
          <div className="bg-white rounded-lg p-3 border border-gray-200">
            <div className="flex items-center gap-2 text-xs text-gray-600 mb-1">
              <Clock className="w-3 h-3" />
              En cours
            </div>
            <div className="text-lg md:text-xl font-bold text-[#38712c]">{tasksInProgress}</div>
          </div>
          <div className="bg-white rounded-lg p-3 border border-gray-200">
            <div className="flex items-center gap-2 text-xs text-gray-600 mb-1">
              <CheckCircle className="w-3 h-3" />
              Terminées
            </div>
            <div className="text-lg md:text-xl font-bold text-[#ff7f27]">{tasksCompleted}</div>
          </div>
          <div className="bg-white rounded-lg p-3 border border-gray-200">
            <div className="flex items-center gap-2 text-xs text-gray-600 mb-1">
              <AlertCircle className="w-3 h-3" />
              En retard
            </div>
            <div className="text-lg md:text-xl font-bold text-[#403323]">{tasksDelayed}</div>
          </div>
        </div>

        {/* Search & Filters */}
        <div className="bg-white rounded-lg p-4 mb-6 border border-gray-200">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="flex-1 w-full md:w-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Rechercher une tâche..."
                  className="w-full pl-10 pr-4 py-2 border border-[#e6e6e6] rounded text-sm text-[#403323] focus:outline-none focus:border-[#38712c] focus:ring-1 focus:ring-[#38712c]"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            <div className="flex flex-wrap gap-2 w-full md:w-auto">
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-[#403323]" />
                <select 
                  className="text-sm border border-[#e6e6e6] rounded px-3 py-2 text-[#403323] w-full md:w-auto"
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                >
                  <option>Tous statuts</option>
                  <option>En cours</option>
                  <option>Terminé</option>
                  <option>Planifié</option>
                  <option>En retard</option>
                </select>
              </div>
              <select 
                className="text-sm border border-[#e6e6e6] rounded px-3 py-2 text-[#403323] w-full md:w-auto"
                value={departmentFilter}
                onChange={(e) => setDepartmentFilter(e.target.value)}
              >
                <option>Tous départements</option>
                <option>Sécurité</option>
                <option>Maintenance</option>
                <option>Administration</option>
              </select>
            </div>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
          {currentTasks.slice(0, 3).map((task) => (
            <div key={task.id} className="bg-white rounded-lg border border-gray-200 p-4 md:p-5 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <div className={`w-2 h-2 rounded-full ${task.status === "Terminé" ? "bg-[#38712c]" : task.status === "En cours" ? "bg-[#ff7f27]" : "bg-gray-400"}`}></div>
                    <h3 className="font-semibold text-[#403323] truncate">{task.name}</h3>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Clock className="w-3 h-3" />
                    <span>{task.time}</span>
                  </div>
                </div>
                <span className={`flex items-center gap-1 px-2 py-1 text-xs font-medium rounded-full ml-2 flex-shrink-0 ${task.status === "Terminé"
                    ? "bg-[#38712c]/10 text-[#38712c]"
                    : task.status === "En cours"
                    ? "bg-[#ff7f27]/10 text-[#ff7f27]"
                    : "bg-gray-100 text-gray-600"}`}>
                  {task.status === "Terminé" && <CheckCircle className="w-3 h-3" />}
                  {task.status === "En cours" && <Clock className="w-3 h-3" />}
                  {task.status}
                </span>
              </div>
              <p className="text-sm text-gray-700 mb-4 line-clamp-2">{task.description}</p>
              <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                <div className="flex items-center min-w-0">
                  <div className="w-6 h-6 rounded-full bg-[#38712c]/10 flex items-center justify-center mr-2 flex-shrink-0">
                    <User className="w-3 h-3 text-[#38712c]" />
                  </div>
                  <span className="text-sm text-[#403323] truncate">{task.person}</span>
                </div>
                <div className="flex items-center gap-1 text-xs text-gray-600 whitespace-nowrap ml-2">
                  <Calendar className="w-3 h-3" />
                  {task.date}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Table des tâches */}
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <div className="p-4 border-b border-gray-200 bg-[#f5f5f5]">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-[#403323]" />
              <h2 className="text-lg font-semibold text-[#403323]">Toutes les tâches</h2>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-[#f5f5f5] border-b border-gray-200">
                <tr>
                  <th className="text-left px-4 py-3 text-xs font-medium text-gray-600 uppercase tracking-wider">Tâche</th>
                  <th className="text-left px-4 py-3 text-xs font-medium text-gray-600 uppercase tracking-wider">Personnel</th>
                  <th className="text-left px-4 py-3 text-xs font-medium text-gray-600 uppercase tracking-wider">Département</th>
                  <th className="text-left px-4 py-3 text-xs font-medium text-gray-600 uppercase tracking-wider">Date</th>
                  <th className="text-left px-4 py-3 text-xs font-medium text-gray-600 uppercase tracking-wider">Statut</th>
                </tr>
              </thead>
              <tbody>
                {currentTasks.slice(3).map((task) => (
                  <tr key={task.id} className="border-t border-gray-200 hover:bg-[#f5f5f5]">
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full ${task.status === "Terminé" ? "bg-[#38712c]" : task.status === "En cours" ? "bg-[#ff7f27]" : "bg-gray-400"}`}></div>
                        <span className="text-sm text-[#403323]">{task.name}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center">
                        <div className="w-6 h-6 rounded-full bg-[#38712c]/10 flex items-center justify-center mr-2">
                          <User className="w-3 h-3 text-[#38712c]" />
                        </div>
                        <span className="text-sm text-[#403323]">{task.person}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full ${task.department === "Sécurité" ? "bg-[#403323]" : task.department === "Maintenance" ? "bg-[#38712c]" : "bg-[#ff7f27]"}`}></div>
                        <span className="text-sm text-[#403323]">{task.department}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2 text-sm text-gray-900">
                        <Calendar className="w-3 h-3" />
                        {task.date}
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full ${task.status === "Terminé" ? "bg-[#38712c]" : task.status === "En cours" ? "bg-[#ff7f27]" : "bg-gray-400"}`}></div>
                        <span className={`text-xs ${task.status === "Terminé" ? "text-[#38712c]" : task.status === "En cours" ? "text-[#ff7f27]" : "text-gray-600"}`}>
                          {task.status}
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {/* Pagination */}
          <div className="border-t border-gray-200 px-4 py-3 flex flex-col md:flex-row items-center justify-between gap-3">
            <div className="text-sm text-gray-600">
              Affichage {startIndex + 1}-{endIndex} sur {totalItems}
            </div>
            <div className="flex items-center gap-1">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`p-2 border border-gray-300 rounded hover:bg-gray-50 ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              {Array.from({ length: Math.min(totalPages, 3) }, (_, i) => {
                let pageNum;
                if (totalPages <= 3) {
                  pageNum = i + 1;
                } else if (currentPage === 1) {
                  pageNum = i + 1;
                } else if (currentPage === totalPages) {
                  pageNum = totalPages - 2 + i;
                } else {
                  pageNum = currentPage - 1 + i;
                }
                return (
                  <button
                    key={pageNum}
                    onClick={() => handlePageChange(pageNum)}
                    className={`px-3 py-1 border rounded text-sm ${currentPage === pageNum
                        ? 'bg-[#38712c] text-white border-[#38712c]'
                        : 'border-gray-300 text-gray-700 hover:bg-gray-50'}`}
                  >
                    {pageNum}
                  </button>
                );
              })}
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`p-2 border border-gray-300 rounded hover:bg-gray-50 ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}