import { Download, FileText, Calendar, CreditCard, AlertTriangle, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const transactions = [
  { id: 1, date: "05/12/2024", resident: "Sophie Martin", type: "Logement + Repas", amount: 930, method: "Virement", ref: "TRX-2024-3421", status: "payé" },
  { id: 2, date: "05/12/2024", resident: "Lucas Dubois", type: "Logement + Repas", amount: 800, method: "Carte", ref: "TRX-2024-3422", status: "payé" },
  { id: 3, date: "04/12/2024", resident: "Camille Moreau", type: "Logement + Repas", amount: 900, method: "Virement", ref: "TRX-2024-3419", status: "payé" },
  { id: 4, date: "03/12/2024", resident: "Emma Leroy", type: "Paiement partiel", amount: 495, method: "Espèces", ref: "TRX-2024-3415", status: "partiel" },
  { id: 5, date: "02/12/2024", resident: "Julie Durand", type: "Logement + Repas", amount: 935, method: "Virement", ref: "TRX-2024-3410", status: "payé" },
  { id: 6, date: "01/12/2024", resident: "Alexandre Roux", type: "Paiement partiel", amount: 515, method: "Carte", ref: "TRX-2024-3405", status: "partiel" },
  { id: 7, date: "30/11/2024", resident: "Marie Bernard", type: "Logement", amount: 650, method: "Virement", ref: "TRX-2024-3398", status: "payé" },
  { id: 8, date: "29/11/2024", resident: "Pierre Leroy", type: "Logement + Repas", amount: 850, method: "Chèque", ref: "TRX-2024-3392", status: "en retard" },
];

export function PaymentHistory() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const totalItems = 847;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  const handlePrevious = () => {
    setCurrentPage(prev => Math.max(1, prev - 1));
  };

  const handleNext = () => {
    setCurrentPage(prev => Math.min(totalPages, prev + 1));
  };

  const getStatusColor = (status: string) => {
    switch(status) {
      case "payé": return "bg-[#38712c]/10 text-[#38712c] border-[#38712c]/20";
      case "partiel": return "bg-[#ff7f27]/10 text-[#ff7f27] border-[#ff7f27]/20";
      case "en retard": return "bg-red-100 text-red-700 border-red-200";
      default: return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

  return (
    <div className="flex-1 p-4 md:p-6 overflow-y-auto">
      <div className="max-w-full h-full flex flex-col">
        {/* Title & Export Buttons */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
          <div>
            <h1 className="text-xl md:text-2xl font-bold text-[#403323]">Historique des transactions</h1>
            <p className="text-sm text-gray-500 mt-1">Suivi complet de tous les paiements reçus</p>
          </div>
          <div className="flex gap-2">
            <button className="px-3 md:px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm text-[#403323] flex items-center gap-2">
              <Download className="w-4 h-4" />
              <span className="hidden sm:inline">Export CSV</span>
            </button>
            <button className="px-3 md:px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm text-[#403323] flex items-center gap-2">
              <FileText className="w-4 h-4" />
              <span className="hidden sm:inline">Export PDF</span>
            </button>
          </div>
        </div>

        {/* Alertes impayés */}
        <div className="bg-gradient-to-r from-orange-50 to-red-50 border border-orange-200 rounded-lg p-4 mb-6">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
            <div>
              <h3 className="text-sm font-medium text-[#403323] mb-1">📊 Vue d'ensemble des paiements</h3>
              <p className="text-sm text-gray-600">
                Sur les <span className="font-medium text-[#38712c]">847 transactions</span> ce mois-ci, 
                <span className="font-medium text-[#ff7f27]"> 92% sont payées</span>, 
                <span className="font-medium text-orange-600"> 5% sont partielles</span> et 
                <span className="font-medium text-red-600"> 3% sont en retard</span>.
              </p>
            </div>
          </div>
        </div>

        {/* Filters Bar */}
        <div className="bg-white rounded-lg border border-gray-200 p-4 mb-6">
          <div className="flex flex-wrap gap-3">
            <div className="flex items-center gap-2 flex-1 min-w-[200px]">
              <Calendar className="w-4 h-4 text-gray-400" />
              <input
                type="date"
                className="text-xs border border-gray-300 rounded px-3 py-2 bg-white text-[#403323] focus:outline-none focus:border-[#38712c] flex-1"
              />
              <span className="text-xs text-gray-400">à</span>
              <input
                type="date"
                className="text-xs border border-gray-300 rounded px-3 py-2 bg-white text-[#403323] focus:outline-none focus:border-[#38712c] flex-1"
              />
            </div>
            <select className="text-xs border border-gray-300 rounded px-3 py-2 bg-white text-[#403323] focus:outline-none focus:border-[#38712c] flex-1 min-w-[140px]">
              <option>Tous types</option>
              <option>Logement</option>
              <option>Repas</option>
              <option>Services</option>
              <option>Extras</option>
            </select>
            <select className="text-xs border border-gray-300 rounded px-3 py-2 bg-white text-[#403323] focus:outline-none focus:border-[#38712c] flex-1 min-w-[160px]">
              <option>Tous statuts</option>
              <option>Payé</option>
              <option>Partiel</option>
              <option>En retard</option>
            </select>
          </div>
        </div>

        
        {/* Transactions Table */}
        <div className="bg-white rounded-lg border border-gray-200 flex-1 overflow-hidden flex flex-col">
          <div className="flex-1 overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="text-left px-6 py-4 text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                  <th className="text-left px-6 py-4 text-xs font-medium text-gray-500 uppercase tracking-wider">Pensionnaire</th>
                  <th className="text-left px-6 py-4 text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                  <th className="text-left px-6 py-4 text-xs font-medium text-gray-500 uppercase tracking-wider">Montant</th>
                  <th className="text-left px-6 py-4 text-xs font-medium text-gray-500 uppercase tracking-wider">Mode</th>
                  <th className="text-left px-6 py-4 text-xs font-medium text-gray-500 uppercase tracking-wider">Statut</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((transaction) => (
                  <tr key={transaction.id} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-[#403323]">{transaction.date}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-[#38712c] rounded-full flex items-center justify-center text-white text-xs font-medium">
                          {transaction.resident.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <div className="text-sm font-medium text-[#403323]">{transaction.resident}</div>
                          <div className="text-xs text-gray-500">{transaction.ref}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm text-gray-600">{transaction.type}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm font-medium text-[#403323]">€{transaction.amount}</span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <CreditCard className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-600">{transaction.method}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(transaction.status)}`}>
                        {transaction.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="border-t border-gray-200 px-6 py-4 bg-gray-50 flex items-center justify-between">
            <div className="text-sm text-gray-500">
              Affichage {startItem}-{endItem} sur {totalItems} transactions
            </div>
            <div className="flex items-center gap-1">
              <button 
                onClick={handlePrevious}
                disabled={currentPage === 1}
                className={`p-1.5 border border-gray-300 rounded hover:bg-gray-100 ${
                  currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                <ChevronLeft className="w-4 h-4 text-gray-600" />
              </button>
              <button 
                onClick={() => setCurrentPage(1)}
                className={`px-2.5 py-1 border rounded text-xs ${
                  currentPage === 1 
                    ? "bg-[#38712c] text-white border-[#38712c]" 
                    : "border-gray-300 text-[#403323] hover:bg-gray-100"
                }`}
              >
                1
              </button>
              <button 
                onClick={() => setCurrentPage(2)}
                className={`px-2.5 py-1 border rounded text-xs ${
                  currentPage === 2 
                    ? "bg-[#38712c] text-white border-[#38712c]" 
                    : "border-gray-300 text-[#403323] hover:bg-gray-100"
                }`}
              >
                2
              </button>
              <span className="px-2 text-gray-400">...</span>
              <button 
                onClick={() => setCurrentPage(totalPages)}
                className={`px-2.5 py-1 border rounded text-xs ${
                  currentPage === totalPages 
                    ? "bg-[#38712c] text-white border-[#38712c]" 
                    : "border-gray-300 text-[#403323] hover:bg-gray-100"
                }`}
              >
                {totalPages}
              </button>
              <button 
                onClick={handleNext}
                disabled={currentPage === totalPages}
                className={`p-1.5 border border-gray-300 rounded hover:bg-gray-100 ${
                  currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                <ChevronRight className="w-4 h-4 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}