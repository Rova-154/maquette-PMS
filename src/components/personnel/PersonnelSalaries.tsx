import React from "react";
import { Download, Eye, FileText, Search, Filter, Plus } from "lucide-react";

export default function PersonnelSalaries() {
  const salaries = [
    { id: 1, name: "Jean Dupont", role: "Surveillant", baseSalary: "2500€", bonus: "300€", total: "2800€", status: "Payé", date: "28/02/2024" },
    { id: 2, name: "Marie Martin", role: "Agent d'entretien", baseSalary: "2200€", bonus: "200€", total: "2400€", status: "Payé", date: "28/02/2024" },
    { id: 3, name: "Pierre Leroy", role: "Intendant", baseSalary: "3000€", bonus: "400€", total: "3400€", status: "Payé", date: "28/02/2024" },
    { id: 4, name: "Sophie Bernard", role: "Surveillant", baseSalary: "2500€", bonus: "250€", total: "2750€", status: "En attente", date: "31/03/2024" },
    { id: 5, name: "Thomas Petit", role: "Technicien", baseSalary: "2700€", bonus: "350€", total: "3050€", status: "Payé", date: "28/02/2024" },
  ];

  const monthlyTotal = salaries.reduce((sum, salary) => {
    const total = parseInt(salary.total.replace('€', '').replace(',', ''));
    return sum + total;
  }, 0);

  return (
    <div className="flex-1 p-6 overflow-y-auto">
      <div className="max-w-full">
        {/* Title & Actions */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-2xl font-bold text-[#403323] mb-1">Gestion des Salaires</h1>
            <p className="text-sm text-gray-500">Suivi et gestion des rémunérations du personnel</p>
          </div>
          <div className="flex gap-2">
            <button className="bg-[#38712c] text-white px-4 py-2 rounded-md hover:bg-[#2d5a23] transition-colors text-sm font-medium flex items-center gap-2">
              <Plus className="w-4 h-4" />
              Nouvelle paie
            </button>
            <button className="flex items-center gap-2 border border-[#e6e6e6] text-[#403323] px-4 py-2 rounded-md hover:bg-[#f5f5f5] transition-colors text-sm font-medium">
              <Download className="w-4 h-4" />
              Exporter
            </button>
          </div>
        </div>

        {/* KPI Cards - Compact */}
        <div className="grid grid-cols-4 gap-3 mb-4">
          <div className="bg-white rounded-lg p-3 border border-gray-200">
            <div className="text-xs text-gray-500 mb-1">Masse salariale</div>
            <div className="text-xl font-bold text-[#38712c]">{monthlyTotal.toLocaleString()}€</div>
          </div>
          <div className="bg-white rounded-lg p-3 border border-gray-200 border-l-3 border-[#38712c]">
            <div className="text-xs text-gray-500 mb-1">Personnel payé</div>
            <div className="text-xl font-bold text-[#38712c]">4/5</div>
          </div>
          <div className="bg-white rounded-lg p-3 border border-gray-200 border-l-3 border-[#ff7f27]">
            <div className="text-xs text-gray-500 mb-1">Salaire moyen</div>
            <div className="text-xl font-bold text-[#ff7f27]">2,800€</div>
          </div>
          <div className="bg-white rounded-lg p-3 border border-gray-200 border-l-3 border-[#403323]">
            <div className="text-xs text-gray-500 mb-1">Coûts annuels</div>
            <div className="text-xl font-bold text-[#403323]">{(monthlyTotal * 12).toLocaleString()}€</div>
          </div>
        </div>

        {/* Search & Filters */}
        <div className="bg-white rounded-lg p-4 mb-6 border border-gray-200">
          <div className="flex items-center gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Rechercher par nom, poste..."
                className="w-full pl-10 pr-4 py-2 border border-[#e6e6e6] rounded text-sm text-[#403323] focus:outline-none focus:border-[#ff7f27]"
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-[#403323]" />
              <select className="text-sm border border-[#e6e6e6] rounded px-3 py-2 text-[#403323]">
                <option>Tous statuts</option>
                <option>Payé</option>
                <option>En attente</option>
                <option>Annulé</option>
              </select>
              <select className="text-sm border border-[#e6e6e6] rounded px-3 py-2 text-[#403323]">
                <option>Tous départements</option>
                <option>Sécurité</option>
                <option>Maintenance</option>
                <option>Administration</option>
              </select>
              <select className="text-sm border border-[#e6e6e6] rounded px-3 py-2 text-[#403323]">
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
            <h2 className="text-lg font-semibold text-[#403323]">Feuille de paie - Mars 2024</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-[#f5f5f5]">
                <tr>
                  <th className="text-left px-4 py-3 text-xs font-medium text-[#403323] uppercase">Employé</th>
                  <th className="text-left px-4 py-3 text-xs font-medium text-[#403323] uppercase">Poste</th>
                  <th className="text-left px-4 py-3 text-xs font-medium text-[#403323] uppercase">Salaire base</th>
                  <th className="text-left px-4 py-3 text-xs font-medium text-[#403323] uppercase">Prime</th>
                  <th className="text-left px-4 py-3 text-xs font-medium text-[#403323] uppercase">Total</th>
                  <th className="text-left px-4 py-3 text-xs font-medium text-[#403323] uppercase">Statut</th>
                  <th className="text-left px-4 py-3 text-xs font-medium text-[#403323] uppercase">Date paiement</th>
                  <th className="text-left px-4 py-3 text-xs font-medium text-[#403323] uppercase">Actions</th>
                </tr>
              </thead>
              <tbody>
                {salaries.map((salary) => (
                  <tr key={salary.id} className="border-t border-[#e6e6e6] hover:bg-[#f5f5f5]">
                    <td className="px-4 py-3">
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#38712c] to-[#4a8c3a] flex items-center justify-center mr-2">
                          <span className="text-xs font-medium text-white">
                            {salary.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <div className="font-medium text-[#403323] text-sm">{salary.name}</div>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-sm text-[#403323]">{salary.role}</td>
                    <td className="px-4 py-3 text-sm text-[#403323]">{salary.baseSalary}</td>
                    <td className="px-4 py-3">
                      <span className="text-sm text-green-600 font-medium">{salary.bonus}</span>
                    </td>
                    <td className="px-4 py-3">
                      <span className="text-lg font-bold text-[#38712c]">{salary.total}</span>
                    </td>
                    <td className="px-4 py-3">
                      <span className={`inline-block px-2 py-1 rounded text-xs font-medium ${
                        salary.status === "Payé" 
                          ? "bg-green-50 text-green-700 border border-green-100" 
                          : "bg-amber-50 text-amber-700 border border-amber-100"
                      }`}>
                        {salary.status}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-sm text-[#403323]">{salary.date}</td>
                    <td className="px-4 py-3">
                      <div className="flex gap-2">
                        <button className="flex items-center gap-1 text-sm text-[#403323] hover:text-[#ff7f27]">
                          <Eye className="w-3 h-3" />
                          Détails
                        </button>
                        <button className="flex items-center gap-1 text-sm text-[#38712c] hover:text-[#2d5a23]">
                          <FileText className="w-3 h-3" />
                          Bulletin
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Graphique de répartition */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-[#403323] mb-6">Répartition des coûts salariaux</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-4">
              {[
                { department: "Sécurité", cost: "5550€", percentage: 40, color: "from-blue-500 to-cyan-500" },
                { department: "Maintenance", cost: "5450€", percentage: 39, color: "from-green-500 to-emerald-500" },
                { department: "Administration", cost: "3400€", percentage: 25, color: "from-purple-500 to-violet-500" },
              ].map((dept, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-[#403323]">{dept.department}</span>
                    <span className="font-medium text-[#403323]">{dept.cost}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div 
                      className={`h-2.5 rounded-full bg-gradient-to-r ${dept.color}`}
                      style={{ width: `${dept.percentage}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-sm text-gray-500 mt-1">
                    <span>{dept.percentage}% du total</span>
                    <span>{dept.cost}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="text-center mb-4">
                <div className="text-4xl font-bold text-[#38712c] mb-2">{monthlyTotal.toLocaleString()}€</div>
                <p className="text-gray-600">Coût salarial mensuel total</p>
              </div>
              <div className="relative w-48 h-48">
                <div className="absolute inset-0 rounded-full border-8 border-gray-100 flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-[#403323]">100%</p>
                    <p className="text-sm text-gray-500">Répartition</p>
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