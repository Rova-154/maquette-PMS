import React, { useState } from "react";
import { Download, Eye, FileText, Search, Filter, Plus, ChevronLeft, ChevronRight, DollarSign, User, Calendar, CheckCircle, Clock } from "lucide-react";

export default function PersonnelSalaries() {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("Tous statuts");
  const [departmentFilter, setDepartmentFilter] = useState("Tous départements");
  const [monthFilter, setMonthFilter] = useState("Tous mois");

  const salaries = [
    { id: 1, name: "Jean Dupont", role: "Surveillant", department: "Sécurité", baseSalary: "2500€", bonus: "300€", total: "2800€", status: "Payé", date: "28/02/2024" },
    { id: 2, name: "Marie Martin", role: "Agent d'entretien", department: "Maintenance", baseSalary: "2200€", bonus: "200€", total: "2400€", status: "Payé", date: "28/02/2024" },
    { id: 3, name: "Pierre Leroy", role: "Intendant", department: "Administration", baseSalary: "3000€", bonus: "400€", total: "3400€", status: "Payé", date: "28/02/2024" },
    { id: 4, name: "Sophie Bernard", role: "Surveillant", department: "Sécurité", baseSalary: "2500€", bonus: "250€", total: "2750€", status: "En attente", date: "31/03/2024" },
    { id: 5, name: "Thomas Petit", role: "Technicien", department: "Maintenance", baseSalary: "2700€", bonus: "350€", total: "3050€", status: "Payé", date: "28/02/2024" },
    { id: 6, name: "Claire Moreau", role: "Secrétaire", department: "Administration", baseSalary: "2300€", bonus: "150€", total: "2450€", status: "Payé", date: "28/02/2024" },
    { id: 7, name: "Luc Dubois", role: "Surveillant", department: "Sécurité", baseSalary: "2600€", bonus: "300€", total: "2900€", status: "En attente", date: "31/03/2024" },
    { id: 8, name: "Emma Laurent", role: "Agent d'entretien", department: "Maintenance", baseSalary: "2250€", bonus: "200€", total: "2450€", status: "Payé", date: "28/02/2024" },
  ];

  // Filtrage
  const filteredSalaries = salaries.filter(salary => {
    const matchesSearch = searchTerm === "" || 
      salary.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      salary.role.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === "Tous statuts" || 
      salary.status === statusFilter;
    
    const matchesDepartment = departmentFilter === "Tous départements" || 
      salary.department === departmentFilter;
    
    return matchesSearch && matchesStatus && matchesDepartment;
  });

  // Pagination
  const totalItems = filteredSalaries.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems);
  const currentSalaries = filteredSalaries.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // Calculs
  const monthlyTotal = salaries.reduce((sum, salary) => {
    const total = parseInt(salary.total.replace('€', '').replace(/\./g, '').replace(',', ''));
    return sum + total;
  }, 0);

  const paidStaff = salaries.filter(s => s.status === "Payé").length;
  const averageSalary = Math.round(monthlyTotal / salaries.length);

  return (
    <div className="flex-1 p-4 md:p-6 overflow-y-auto">
      <div className="max-w-full">
        {/* Title & Actions */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 md:mb-6">
          <div className="mb-4 md:mb-0">
            <h1 className="text-xl md:text-2xl font-bold text-[#403323] mb-1">Gestion des Salaires</h1>
            <p className="text-sm text-gray-600">Suivi et gestion des rémunérations du personnel</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <button className="bg-[#38712c] text-white px-4 py-2 rounded-md hover:bg-[#2d5a23] transition-colors text-sm font-medium flex items-center justify-center gap-2 w-full md:w-auto">
              <Plus className="w-4 h-4" />
              Nouvelle paie
            </button>
            <button className="flex items-center justify-center gap-2 border border-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-50 transition-colors text-sm font-medium w-full md:w-auto">
              <Download className="w-4 h-4" />
              Exporter
            </button>
          </div>
        </div>

        {/* KPI Cards - Uniformisé avec icônes */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4 md:mb-6">
          <div className="bg-white rounded-lg p-3 border border-gray-200">
            <div className="flex items-center gap-2 text-xs text-gray-600 mb-1">
              <DollarSign className="w-3 h-3" />
              Masse salariale
            </div>
            <div className="text-lg md:text-xl font-bold text-[#38712c]">{monthlyTotal.toLocaleString()}€</div>
          </div>
          <div className="bg-white rounded-lg p-3 border border-gray-200">
            <div className="flex items-center gap-2 text-xs text-gray-600 mb-1">
              <CheckCircle className="w-3 h-3" />
              Personnel payé
            </div>
            <div className="text-lg md:text-xl font-bold text-[#38712c]">{paidStaff}/{salaries.length}</div>
          </div>
          <div className="bg-white rounded-lg p-3 border border-gray-200">
            <div className="flex items-center gap-2 text-xs text-gray-600 mb-1">
              <DollarSign className="w-3 h-3" />
              Salaire moyen
            </div>
            <div className="text-lg md:text-xl font-bold text-[#ff7f27]">{averageSalary.toLocaleString()}€</div>
          </div>
          <div className="bg-white rounded-lg p-3 border border-gray-200">
            <div className="flex items-center gap-2 text-xs text-gray-600 mb-1">
              <DollarSign className="w-3 h-3" />
              Coûts annuels
            </div>
            <div className="text-lg md:text-xl font-bold text-[#403323]">{(monthlyTotal * 12).toLocaleString()}€</div>
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
                  placeholder="Rechercher par nom, poste..."
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
                  <option>Payé</option>
                  <option>En attente</option>
                  <option>Annulé</option>
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
              <select 
                className="text-sm border border-[#e6e6e6] rounded px-3 py-2 text-[#403323] w-full md:w-auto"
                value={monthFilter}
                onChange={(e) => setMonthFilter(e.target.value)}
              >
                <option>Tous mois</option>
                <option>Mars 2024</option>
                <option>Février 2024</option>
                <option>Janvier 2024</option>
              </select>
            </div>
          </div>
        </div>

        {/* Table des salaires */}
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden mb-6">
          <div className="p-4 border-b border-gray-200 bg-[#f5f5f5]">
            <div className="flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-[#403323]" />
              <h2 className="text-lg font-semibold text-[#403323]">Feuille de paie - Mars 2024</h2>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-[#f5f5f5] border-b border-gray-200">
                <tr>
                  <th className="text-left px-4 py-3 text-xs font-medium text-gray-600 uppercase tracking-wider">Employé</th>
                  <th className="text-left px-4 py-3 text-xs font-medium text-gray-600 uppercase tracking-wider">Poste</th>
                  <th className="text-left px-4 py-3 text-xs font-medium text-gray-600 uppercase tracking-wider">Salaire base</th>
                  <th className="text-left px-4 py-3 text-xs font-medium text-gray-600 uppercase tracking-wider">Prime</th>
                  <th className="text-left px-4 py-3 text-xs font-medium text-gray-600 uppercase tracking-wider">Total</th>
                  <th className="text-left px-4 py-3 text-xs font-medium text-gray-600 uppercase tracking-wider">Statut</th>
                  <th className="text-left px-4 py-3 text-xs font-medium text-gray-600 uppercase tracking-wider">Date paiement</th>
                  <th className="text-left px-4 py-3 text-xs font-medium text-gray-600 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody>
                {currentSalaries.map((salary) => (
                  <tr key={salary.id} className="border-t border-gray-200 hover:bg-[#f5f5f5]">
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="w-8 h-8 rounded-full bg-[#38712c]/10 flex items-center justify-center flex-shrink-0">
                          <User className="w-4 h-4 text-[#38712c]" />
                        </div>
                        <div>
                          <div className="font-medium text-[#403323] text-sm truncate">{salary.name}</div>
                          <div className="text-xs text-gray-500">ID: EMP-{salary.id.toString().padStart(3, '0')}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full ${salary.department === "Sécurité" ? "bg-[#403323]" : salary.department === "Maintenance" ? "bg-[#38712c]" : "bg-[#ff7f27]"}`}></div>
                        <span className="text-sm text-gray-900">{salary.role}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-900">{salary.baseSalary}</td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-1">
                        <Plus className="w-3 h-3 text-[#38712c]" />
                        <span className="text-sm text-[#38712c] font-medium">{salary.bonus}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-1">
                        <DollarSign className="w-3 h-3 text-[#38712c]" />
                        <span className="text-base md:text-lg font-bold text-[#38712c]">{salary.total}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full ${salary.status === "Payé" ? "bg-[#38712c]" : "bg-[#ff7f27]"}`}></div>
                        <span className={`text-xs ${salary.status === "Payé" ? "text-[#38712c]" : "text-[#ff7f27]"}`}>
                          {salary.status}
                        </span>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2 text-sm text-gray-900">
                        <Calendar className="w-3 h-3" />
                        {salary.date}
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex gap-3">
                        <button className="flex items-center gap-1 text-sm text-[#403323] hover:text-[#ff7f27] whitespace-nowrap">
                          <Eye className="w-3 h-3" />
                          <span className="hidden md:inline">Détails</span>
                        </button>
                        <button className="flex items-center gap-1 text-sm text-[#38712c] hover:text-[#2d5a23] whitespace-nowrap">
                          <FileText className="w-3 h-3" />
                          <span className="hidden md:inline">Bulletin</span>
                        </button>
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

        {/* Graphique de répartition */}
        <div className="bg-white rounded-lg border border-gray-200 p-4 md:p-6">
          <div className="flex items-center gap-2 mb-6">
            <DollarSign className="w-5 h-5 text-[#403323]" />
            <h2 className="text-lg font-semibold text-[#403323]">Répartition des coûts salariaux</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-4">
              {[
                { department: "Sécurité", cost: "5550€", percentage: 40, icon: "🔒" },
                { department: "Maintenance", cost: "5450€", percentage: 39, icon: "🔧" },
                { department: "Administration", cost: "3400€", percentage: 25, icon: "📋" },
              ].map((dept, index) => (
                <div key={index}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span>{dept.icon}</span>
                      <span className="font-medium text-[#403323]">{dept.department}</span>
                    </div>
                    <span className="font-medium text-[#403323]">{dept.cost}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div 
                      className={`h-2.5 rounded-full ${dept.department === "Sécurité" ? "bg-[#403323]" : dept.department === "Maintenance" ? "bg-[#38712c]" : "bg-[#ff7f27]"}`}
                      style={{ width: `${dept.percentage}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-sm text-gray-600 mt-1">
                    <span>{dept.percentage}% du total</span>
                    <span>{dept.cost}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="text-center mb-4">
                <div className="flex items-center justify-center gap-2">
                  <DollarSign className="w-6 h-6 text-[#38712c]" />
                  <div className="text-3xl md:text-4xl font-bold text-[#38712c] mb-2">{monthlyTotal.toLocaleString()}€</div>
                </div>
                <p className="text-gray-600">Coût salarial mensuel total</p>
              </div>
              <div className="relative w-40 h-40 md:w-48 md:h-48">
                <div className="absolute inset-0 rounded-full border-8 border-gray-100 flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-xl md:text-2xl font-bold text-[#403323]">100%</p>
                    <p className="text-sm text-gray-600">Répartition</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}