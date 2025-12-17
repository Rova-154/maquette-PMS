import { Search, Filter, Eye, Edit, UserPlus, ChevronLeft, ChevronRight, User } from "lucide-react";
import { useState } from "react";

export function PersonnelList() {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const [searchTerm, setSearchTerm] = useState("");
  const [departmentFilter, setDepartmentFilter] = useState("Tous départements");
  const [statusFilter, setStatusFilter] = useState("Tous statuts");

  const staff = [
    { id: 1, name: "Jean Dupont", role: "Surveillant", department: "Sécurité", status: "Actif", avatar: "JD" },
    { id: 2, name: "Marie Martin", role: "Agent d'entretien", department: "Maintenance", status: "Actif", avatar: "MM" },
    { id: 3, name: "Pierre Leroy", role: "Intendant", department: "Administration", status: "Actif", avatar: "PL" },
    { id: 4, name: "Sophie Bernard", role: "Surveillant", department: "Sécurité", status: "En congé", avatar: "SB" },
    { id: 5, name: "Thomas Petit", role: "Technicien", department: "Maintenance", status: "Actif", avatar: "TP" },
    { id: 6, name: "Claire Moreau", role: "Secrétaire", department: "Administration", status: "Actif", avatar: "CM" },
    { id: 7, name: "Luc Dubois", role: "Surveillant", department: "Sécurité", status: "Actif", avatar: "LD" },
    { id: 8, name: "Emma Laurent", role: "Agent d'entretien", department: "Maintenance", status: "En congé", avatar: "EL" },
  ];

  // Filtrage
  const filteredStaff = staff.filter(person => {
    const matchesSearch = searchTerm === "" || 
      person.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      person.role.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesDepartment = departmentFilter === "Tous départements" || 
      person.department === departmentFilter;
    
    const matchesStatus = statusFilter === "Tous statuts" || 
      person.status === statusFilter;
    
    return matchesSearch && matchesDepartment && matchesStatus;
  });

  // Pagination
  const totalItems = filteredStaff.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems);
  const currentStaff = filteredStaff.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="flex-1 p-4 md:p-6 overflow-y-auto">
      <div className="max-w-full">
        {/* Title & Add Button */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 md:mb-6">
          <div className="mb-4 md:mb-0">
            <h1 className="text-xl md:text-2xl font-bold text-[#403323] mb-1">Gestion du Personnel</h1>
            <p className="text-sm text-gray-600">Gérez tous les membres de votre équipe</p>
          </div>
          <button className="bg-[#38712c] text-white px-4 py-2 rounded-md hover:bg-[#2d5a23] transition-colors text-sm font-medium flex items-center justify-center gap-2 w-full md:w-auto">
            <UserPlus className="w-4 h-4" />
            Ajouter un membre
          </button>
        </div>

        {/* KPI Cards - Uniformisé avec icônes */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4 md:mb-6">
          <div className="bg-white rounded-lg p-3 border border-gray-200">
            <div className="flex items-center gap-2 text-xs text-gray-600 mb-1">
              <User className="w-3 h-3" />
              Total personnel
            </div>
            <div className="text-lg md:text-xl font-bold text-[#38712c]">{staff.length}</div>
          </div>
          <div className="bg-white rounded-lg p-3 border border-gray-200">
            <div className="flex items-center gap-2 text-xs text-gray-600 mb-1">
              <div className="w-3 h-3 rounded-full bg-[#38712c]"></div>
              Actifs
            </div>
            <div className="text-lg md:text-xl font-bold text-[#38712c]">{staff.filter(p => p.status === "Actif").length}</div>
          </div>
          <div className="bg-white rounded-lg p-3 border border-gray-200">
            <div className="flex items-center gap-2 text-xs text-gray-600 mb-1">
              <div className="w-3 h-3 rounded-full bg-[#ff7f27]"></div>
              Départements
            </div>
            <div className="text-lg md:text-xl font-bold text-[#ff7f27]">3</div>
          </div>
          <div className="bg-white rounded-lg p-3 border border-gray-200">
            <div className="flex items-center gap-2 text-xs text-gray-600 mb-1">
              <div className="w-3 h-3 rounded-full bg-[#403323]"></div>
              Disponibilité
            </div>
            <div className="text-lg md:text-xl font-bold text-[#403323]">83%</div>
          </div>
        </div>

        {/* Search & Filters */}
        <div className="bg-white rounded-lg p-4 mb-4 md:mb-6 border border-gray-200">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="flex-1 w-full md:w-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Rechercher par nom, rôle..."
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
                  value={departmentFilter}
                  onChange={(e) => setDepartmentFilter(e.target.value)}
                >
                  <option>Tous départements</option>
                  <option>Sécurité</option>
                  <option>Maintenance</option>
                  <option>Administration</option>
                </select>
              </div>
              <select 
                className="text-sm border border-[#e6e6e6] rounded px-3 py-2 text-[#403323] w-full md:w-auto"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                <option>Tous statuts</option>
                <option>Actif</option>
                <option>En congé</option>
                <option>Absent</option>
              </select>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-[#f5f5f5] border-b border-gray-200">
                <tr>
                  <th className="text-left px-4 py-3 text-xs font-medium text-gray-600 uppercase tracking-wider">Nom</th>
                  <th className="text-left px-4 py-3 text-xs font-medium text-gray-600 uppercase tracking-wider">Rôle</th>
                  <th className="text-left px-4 py-3 text-xs font-medium text-gray-600 uppercase tracking-wider">Département</th>
                  <th className="text-left px-4 py-3 text-xs font-medium text-gray-600 uppercase tracking-wider">Statut</th>
                  <th className="text-left px-4 py-3 text-xs font-medium text-gray-600 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody>
                {currentStaff.map((person) => (
                  <tr key={person.id} className="border-t border-gray-200 hover:bg-[#f5f5f5] transition-colors">
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-[#38712c]/10 flex items-center justify-center">
                          <User className="w-4 h-4 text-[#38712c]" />
                        </div>
                        <div>
                          <div className="font-medium text-[#403323] text-sm">{person.name}</div>
                          <div className="text-xs text-gray-500">ID: EMP-{person.id.toString().padStart(3, '0')}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-900">{person.role}</td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full ${person.department === "Sécurité" ? "bg-[#403323]" : person.department === "Maintenance" ? "bg-[#38712c]" : "bg-[#ff7f27]"}`}></div>
                        <span className="text-sm text-[#403323]">{person.department}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full ${person.status === "Actif" ? "bg-[#38712c]" : "bg-[#ff7f27]"}`}></div>
                        <span className={`text-xs ${person.status === "Actif" ? "text-[#38712c]" : "text-[#ff7f27]"}`}>
                          {person.status}
                        </span>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex gap-2">
                        <button className="p-2 hover:bg-gray-100 rounded transition-colors" title="Voir">
                          <Eye className="w-4 h-4 text-[#403323]" />
                        </button>
                        <button className="p-2 hover:bg-gray-100 rounded transition-colors" title="Modifier">
                          <Edit className="w-4 h-4 text-[#ff7f27]" />
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
                className={`p-2 border border-gray-300 rounded hover:bg-gray-50 transition-colors ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
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
                className={`p-2 border border-gray-300 rounded hover:bg-gray-50 transition-colors ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
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