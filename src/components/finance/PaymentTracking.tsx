import { AlertTriangle, Clock, CheckCircle, XCircle, Bell, ChevronLeft, ChevronRight, FileText } from "lucide-react";
import { useState } from "react";

const overdueInvoices = [
  { id: 1, resident: "Thomas Bernard", amount: 820, dueDate: "15/11/2024", daysOverdue: 20, status: "critique" },
  { id: 2, resident: "Nicolas Laurent", amount: 810, dueDate: "20/11/2024", daysOverdue: 15, status: "élevé" },
  { id: 3, resident: "Pierre Dubois", amount: 900, dueDate: "25/11/2024", daysOverdue: 10, status: "moyen" },
  { id: 4, resident: "Marie Leroy", amount: 850, dueDate: "01/12/2024", daysOverdue: 4, status: "faible" },
];

const paymentStatus = [
  { id: 1, resident: "Sophie Martin", amountDue: 0, lastPayment: "01/12/2024", status: "À jour", invoice: "INV-2024-156" },
  { id: 2, resident: "Lucas Dubois", amountDue: 0, lastPayment: "02/12/2024", status: "À jour", invoice: "INV-2024-157" },
  { id: 3, resident: "Emma Leroy", amountDue: 450, lastPayment: "01/12/2024", status: "Partiel", invoice: "INV-2024-158" },
  { id: 4, resident: "Thomas Bernard", amountDue: 820, lastPayment: "28/10/2024", status: "En retard", invoice: "INV-2024-159" },
  { id: 5, resident: "Camille Moreau", amountDue: 0, lastPayment: "01/12/2024", status: "À jour", invoice: "INV-2024-160" },
  { id: 6, resident: "Alexandre Roux", amountDue: 300, lastPayment: "01/12/2024", status: "Partiel", invoice: "INV-2024-161" },
  { id: 7, resident: "Julie Durand", amountDue: 0, lastPayment: "30/11/2024", status: "À jour", invoice: "INV-2024-162" },
  { id: 8, resident: "Nicolas Laurent", amountDue: 810, lastPayment: "15/10/2024", status: "En retard", invoice: "INV-2024-163" },
];

export function PaymentTracking() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const totalItems = paymentStatus.length;
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
      case "À jour": return { bg: "bg-[#38712c]/10", text: "text-[#38712c]", border: "border-[#38712c]/20" };
      case "Partiel": return { bg: "bg-[#ff7f27]/10", text: "text-[#ff7f27]", border: "border-[#ff7f27]/20" };
      case "En retard": return { bg: "bg-red-100", text: "text-red-700", border: "border-red-200" };
      default: return { bg: "bg-gray-100", text: "text-gray-700", border: "border-gray-200" };
    }
  };

  return (
    <div className="flex-1 p-4 md:p-6 overflow-y-auto">
      <div className="max-w-full h-full flex flex-col">
        {/* Title */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
          <div>
            <h1 className="text-xl md:text-2xl font-bold text-[#403323]">Suivi des paiements</h1>
            <p className="text-sm text-gray-500 mt-1">Gestion et suivi des factures impayées</p>
          </div>
          <button className="px-4 py-2 bg-[#38712c] text-white rounded-lg hover:bg-[#2d5a23] transition-colors text-sm font-medium flex items-center gap-2">
            <Bell className="w-4 h-4" />
            Envoyer tous les rappels
          </button>
        </div>

        {/* Alertes impayés */}
        <div className="bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 rounded-lg p-4 mb-6">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
            <div>
              <h3 className="text-sm font-medium text-[#403323] mb-1">⚠️ Attention - Factures en impayé</h3>
              <p className="text-sm text-gray-600">
                <span className="font-medium text-red-600">4 factures</span> sont en retard de paiement pour un total de <span className="font-medium text-red-600">€3,380</span>. 
                Des rappels automatiques ont été envoyés.
              </p>
            </div>
          </div>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-[#38712c]/10 rounded-lg flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-[#38712c]" />
              </div>
              <div>
                <div className="text-xs text-gray-500">Total payé</div>
                <div className="text-lg font-semibold text-[#38712c]">€72,450</div>
              </div>
            </div>
            <div className="text-xs text-gray-600">85% du total</div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-[#ff7f27]/10 rounded-lg flex items-center justify-center">
                <Clock className="w-5 h-5 text-[#ff7f27]" />
              </div>
              <div>
                <div className="text-xs text-gray-500">Total partiel</div>
                <div className="text-lg font-semibold text-[#ff7f27]">€8,200</div>
              </div>
            </div>
            <div className="text-xs text-gray-600">16 factures partielles</div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-[#403323]/10 rounded-lg flex items-center justify-center">
                <XCircle className="w-5 h-5 text-[#403323]" />
              </div>
              <div>
                <div className="text-xs text-gray-500">Total impayé</div>
                <div className="text-lg font-semibold text-[#403323]">€6,850</div>
              </div>
            </div>
            <div className="text-xs text-gray-600">8 factures en attente</div>
          </div>

          <div className="bg-white rounded-lg border-l-4 border-red-500 p-4">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-red-500" />
              </div>
              <div>
                <div className="text-xs text-gray-500">Retards</div>
                <div className="text-lg font-semibold text-red-500">4</div>
              </div>
            </div>
            <div className="text-xs text-red-600 font-medium">Action requise</div>
          </div>
        </div>

        {/* Factures en retard - Section améliorée */}
        <div className="bg-white rounded-lg border border-gray-200 mb-6 overflow-hidden">
          <div className="border-b border-gray-200 px-4 py-3 bg-gray-50">
            <div className="flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-red-500" />
              <h2 className="text-sm font-medium text-[#403323]">Factures en retard de paiement</h2>
            </div>
          </div>
          <div className="p-4">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[600px]">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left pb-3 text-xs font-medium text-gray-500 uppercase">Pensionnaire</th>
                    <th className="text-left pb-3 text-xs font-medium text-gray-500 uppercase">Montant</th>
                    <th className="text-left pb-3 text-xs font-medium text-gray-500 uppercase">Échéance</th>
                    <th className="text-left pb-3 text-xs font-medium text-gray-500 uppercase">Retard</th>
                    <th className="text-left pb-3 text-xs font-medium text-gray-500 uppercase">Statut</th>
                    <th className="text-left pb-3 text-xs font-medium text-gray-500 uppercase">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {overdueInvoices.map((invoice) => (
                    <tr key={invoice.id} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center text-red-700 text-xs font-medium">
                            {invoice.resident.split(' ').map(n => n[0]).join('')}
                          </div>
                          <div>
                            <div className="text-sm font-medium text-[#403323]">{invoice.resident}</div>
                          </div>
                        </div>
                      </td>
                      <td className="py-3">
                        <div className="text-sm font-medium text-red-600">€{invoice.amount}</div>
                      </td>
                      <td className="py-3">
                        <div className="text-sm text-gray-600">{invoice.dueDate}</div>
                      </td>
                      <td className="py-3">
                        <div className="text-sm font-medium text-red-600">{invoice.daysOverdue} jours</div>
                      </td>
                      <td className="py-3">
                        <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                          invoice.status === "critique" ? "bg-red-100 text-red-700" :
                          invoice.status === "élevé" ? "bg-orange-100 text-orange-700" :
                          invoice.status === "moyen" ? "bg-yellow-100 text-yellow-700" :
                          "bg-blue-100 text-blue-700"
                        }`}>
                          {invoice.status}
                        </span>
                      </td>
                      <td className="py-3">
                        <div className="flex gap-2">
                          <button className="px-3 py-1 bg-[#ff7f27] text-white rounded text-xs hover:bg-[#e66f1f]">
                            Rappel
                          </button>
                          <button className="px-3 py-1 border border-gray-300 rounded text-xs text-[#403323] hover:bg-gray-50">
                            Détails
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Statut complet des paiements */}
        <div className="bg-white rounded-lg border border-gray-200 flex-1 overflow-hidden flex flex-col">
          <div className="border-b border-gray-200 px-4 py-3 bg-gray-50">
            <div className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-[#403323]" />
              <h2 className="text-sm font-medium text-[#403323]">Statut complet des paiements</h2>
            </div>
          </div>
          
          <div className="flex-1 overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="text-left px-4 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Pensionnaire</th>
                  <th className="text-left px-4 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Facture</th>
                  <th className="text-left px-4 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Montant dû</th>
                  <th className="text-left px-4 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Dernier paiement</th>
                  <th className="text-left px-4 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Statut</th>
                  <th className="text-left px-4 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody>
                {paymentStatus.map((payment) => {
                  const statusColor = getStatusColor(payment.status);
                  return (
                    <tr key={payment.id} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-[#38712c] rounded-full flex items-center justify-center text-white text-xs font-medium">
                            {payment.resident.split(' ').map(n => n[0]).join('')}
                          </div>
                          <div>
                            <div className="text-sm font-medium text-[#403323]">{payment.resident}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        <div className="text-sm text-gray-600">{payment.invoice}</div>
                      </td>
                      <td className="px-4 py-3">
                        {payment.amountDue === 0 ? (
                          <span className="text-sm text-gray-400">-</span>
                        ) : (
                          <span className="text-sm font-medium text-[#403323]">€{payment.amountDue}</span>
                        )}
                      </td>
                      <td className="px-4 py-3">
                        <div className="text-sm text-gray-600">{payment.lastPayment}</div>
                      </td>
                      <td className="px-4 py-3">
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${statusColor.bg} ${statusColor.text} ${statusColor.border}`}>
                          {payment.status}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex gap-2">
                          {payment.status !== "À jour" && (
                            <>
                              <button className="px-3 py-1 bg-[#ff7f27] text-white rounded text-xs hover:bg-[#e66f1f]">
                                Relancer
                              </button>
                              <button className="px-3 py-1 border border-gray-300 rounded text-xs text-[#403323] hover:bg-gray-50">
                                Détails
                              </button>
                            </>
                          )}
                          {payment.status === "À jour" && (
                            <button className="px-3 py-1 border border-gray-300 rounded text-xs text-[#403323] hover:bg-gray-50">
                              Voir
                            </button>
                          )}
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="border-t border-gray-200 px-4 py-3 flex items-center justify-between bg-gray-50">
            <div className="text-sm text-gray-500">
              Affichage {startItem}-{endItem} sur {totalItems} entrées
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