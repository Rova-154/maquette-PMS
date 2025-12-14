import { Search, Filter, Eye, Download, Mail, ChevronLeft, ChevronRight } from "lucide-react";

const invoices = [
  { id: "INV-2024-156", resident: "Sophie Martin", amount: 930, status: "Payé", date: "01/12/2024", statusColor: "#38712c" },
  { id: "INV-2024-157", resident: "Lucas Dubois", amount: 800, status: "Payé", date: "01/12/2024", statusColor: "#38712c" },
  { id: "INV-2024-158", resident: "Emma Leroy", amount: 945, status: "Partiel", date: "01/12/2024", statusColor: "#ff7f27" },
  { id: "INV-2024-159", resident: "Thomas Bernard", amount: 820, status: "Impayé", date: "01/12/2024", statusColor: "#403323" },
  { id: "INV-2024-160", resident: "Camille Moreau", amount: 900, status: "Payé", date: "01/12/2024", statusColor: "#38712c" },
  { id: "INV-2024-161", resident: "Alexandre Roux", amount: 815, status: "Partiel", date: "01/12/2024", statusColor: "#ff7f27" },
  { id: "INV-2024-162", resident: "Julie Durand", amount: 935, status: "Payé", date: "01/12/2024", statusColor: "#38712c" },
  { id: "INV-2024-163", resident: "Nicolas Laurent", amount: 810, status: "Impayé", date: "01/12/2024", statusColor: "#403323" },
];

export function InvoiceList() {
  return (
    <div className="flex-1 p-6 overflow-y-auto">
      <div className="max-w-full">
        <div className="h-full flex flex-col">
          {/* Title */}
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-xl text-[#403323]">Factures</h1>
          </div>

          {/* Search & Filters */}
          <div className="bg-white rounded-xl p-4 mb-4 shadow-sm">
            <div className="flex gap-3 mb-3">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Rechercher par numéro ou pensionnaire..."
                  className="w-full pl-10 pr-4 py-2 border border-[#e6e6e6] rounded-lg text-sm text-[#403323] focus:outline-none focus:border-[#ff7f27]"
                />
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-[#403323]" />
              <select className="text-xs border border-[#e6e6e6] rounded px-3 py-1.5 bg-white text-[#403323]">
                <option>Tous statuts</option>
                <option>Payé</option>
                <option>Partiel</option>
                <option>Impayé</option>
              </select>
              <select className="text-xs border border-[#e6e6e6] rounded px-3 py-1.5 bg-white text-[#403323]">
                <option>Décembre 2024</option>
                <option>Novembre 2024</option>
                <option>Octobre 2024</option>
              </select>
              <input
                type="text"
                placeholder="Pensionnaire"
                className="text-xs border border-[#e6e6e6] rounded px-3 py-1.5 bg-white text-[#403323] w-40"
              />
            </div>
          </div>

          {/* Statistics Cards */}
          <div className="grid grid-cols-4 gap-4 mb-4">
            <div className="bg-white rounded-xl p-3 shadow-sm">
              <div className="text-xs text-gray-500 mb-1">Total factures</div>
              <div className="text-xl text-[#403323]">96</div>
            </div>
            <div className="bg-white rounded-xl p-3 shadow-sm border-l-4 border-[#38712c]">
              <div className="text-xs text-gray-500 mb-1">Payées</div>
              <div className="text-xl text-[#38712c]">72</div>
            </div>
            <div className="bg-white rounded-xl p-3 shadow-sm border-l-4 border-[#ff7f27]">
              <div className="text-xs text-gray-500 mb-1">Partielles</div>
              <div className="text-xl text-[#ff7f27]">16</div>
            </div>
            <div className="bg-white rounded-xl p-3 shadow-sm border-l-4 border-[#403323]">
              <div className="text-xs text-gray-500 mb-1">Impayées</div>
              <div className="text-xl text-[#403323]">8</div>
            </div>
          </div>

          {/* Table */}
          <div className="bg-white rounded-xl shadow-sm flex-1 overflow-hidden flex flex-col">
            <div className="overflow-auto flex-1">
              <table className="w-full">
                <thead className="bg-[#f5f5f5] sticky top-0">
                  <tr>
                    <th className="text-left px-4 py-3 text-xs text-[#403323]">Nº Facture</th>
                    <th className="text-left px-4 py-3 text-xs text-[#403323]">Pensionnaire</th>
                    <th className="text-left px-4 py-3 text-xs text-[#403323]">Montant</th>
                    <th className="text-left px-4 py-3 text-xs text-[#403323]">Statut</th>
                    <th className="text-left px-4 py-3 text-xs text-[#403323]">Date</th>
                    <th className="text-left px-4 py-3 text-xs text-[#403323]">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {invoices.map((invoice) => (
                    <tr key={invoice.id} className="border-b border-[#e6e6e6] hover:bg-[#f5f5f5]">
                      <td className="px-4 py-3 text-sm text-[#403323]">{invoice.id}</td>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-2">
                          <div className="w-7 h-7 bg-[#38712c] rounded-full flex items-center justify-center text-white text-xs">
                            {invoice.resident.split(' ').map(n => n[0]).join('')}
                          </div>
                          <span className="text-sm text-[#403323]">{invoice.resident}</span>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-sm text-[#403323]">€{invoice.amount}</td>
                      <td className="px-4 py-3">
                        <span 
                          className="text-xs px-2 py-1 rounded"
                          style={{
                            backgroundColor: `${invoice.statusColor}15`,
                            color: invoice.statusColor
                          }}
                        >
                          {invoice.status}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-sm text-[#403323]">{invoice.date}</td>
                      <td className="px-4 py-3">
                        <div className="flex gap-1">
                          <button className="p-1.5 hover:bg-[#f5f5f5] rounded transition-colors" title="Voir">
                            <Eye className="w-4 h-4 text-[#403323]" />
                          </button>
                          <button className="p-1.5 hover:bg-[#f5f5f5] rounded transition-colors" title="Télécharger">
                            <Download className="w-4 h-4 text-[#ff7f27]" />
                          </button>
                          <button className="p-1.5 hover:bg-[#f5f5f5] rounded transition-colors" title="Envoyer rappel">
                            <Mail className="w-4 h-4 text-gray-500" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="border-t border-[#e6e6e6] px-4 py-3 flex items-center justify-between">
              <div className="text-xs text-gray-500">
                Affichage 1-8 sur 96 factures
              </div>
              <div className="flex items-center gap-2">
                <button className="p-1.5 border border-[#e6e6e6] rounded hover:bg-[#f5f5f5] transition-colors">
                  <ChevronLeft className="w-4 h-4 text-[#403323]" />
                </button>
                <button className="px-3 py-1.5 bg-[#ff7f27] text-white rounded text-xs">1</button>
                <button className="px-3 py-1.5 border border-[#e6e6e6] rounded text-xs text-[#403323] hover:bg-[#f5f5f5]">2</button>
                <button className="px-3 py-1.5 border border-[#e6e6e6] rounded text-xs text-[#403323] hover:bg-[#f5f5f5]">3</button>
                <button className="px-3 py-1.5 border border-[#e6e6e6] rounded text-xs text-[#403323] hover:bg-[#f5f5f5]">...</button>
                <button className="px-3 py-1.5 border border-[#e6e6e6] rounded text-xs text-[#403323] hover:bg-[#f5f5f5]">12</button>
                <button className="p-1.5 border border-[#e6e6e6] rounded hover:bg-[#f5f5f5] transition-colors">
                  <ChevronRight className="w-4 h-4 text-[#403323]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}