import { AlertTriangle, DollarSign, Clock, CheckCircle, XCircle } from "lucide-react";

const overdueInvoices = [
  { id: 1, resident: "Thomas Bernard", amount: 820, dueDate: "15/11/2024", daysOverdue: 20 },
  { id: 2, resident: "Nicolas Laurent", amount: 810, dueDate: "20/11/2024", daysOverdue: 15 },
  { id: 3, resident: "Pierre Dubois", amount: 900, dueDate: "25/11/2024", daysOverdue: 10 },
  { id: 4, resident: "Marie Leroy", amount: 850, dueDate: "01/12/2024", daysOverdue: 4 },
];

const paymentStatus = [
  { id: 1, resident: "Sophie Martin", amountDue: 0, lastPayment: "01/12/2024", status: "À jour" },
  { id: 2, resident: "Lucas Dubois", amountDue: 0, lastPayment: "02/12/2024", status: "À jour" },
  { id: 3, resident: "Emma Leroy", amountDue: 450, lastPayment: "01/12/2024", status: "Partiel" },
  { id: 4, resident: "Thomas Bernard", amountDue: 820, lastPayment: "28/10/2024", status: "En retard" },
  { id: 5, resident: "Camille Moreau", amountDue: 0, lastPayment: "01/12/2024", status: "À jour" },
  { id: 6, resident: "Alexandre Roux", amountDue: 300, lastPayment: "01/12/2024", status: "Partiel" },
  { id: 7, resident: "Julie Durand", amountDue: 0, lastPayment: "30/11/2024", status: "À jour" },
  { id: 8, resident: "Nicolas Laurent", amountDue: 810, lastPayment: "15/10/2024", status: "En retard" },
];

export function PaymentTracking() {
  return (
    <div className="flex-1 p-6 overflow-y-auto">
      <div className="max-w-full">
        <div className="h-full flex flex-col">
          {/* Title */}
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-xl text-[#403323]">Suivi des paiements</h1>
          </div>

          {/* KPI Cards */}
          <div className="grid grid-cols-4 gap-4 mb-4">
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#38712c]/10 rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-[#38712c]" />
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-1">Total payé</div>
                  <div className="text-xl text-[#38712c]">€72,450</div>
                </div>
              </div>
              <div className="text-xs text-gray-600 mt-2">85% du total</div>
            </div>

            <div className="bg-white rounded-xl p-4 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#ff7f27]/10 rounded-lg flex items-center justify-center">
                  <Clock className="w-5 h-5 text-[#ff7f27]" />
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-1">Total partiel</div>
                  <div className="text-xl text-[#ff7f27]">€8,200</div>
                </div>
              </div>
              <div className="text-xs text-gray-600 mt-2">16 factures</div>
            </div>

            <div className="bg-white rounded-xl p-4 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#403323]/10 rounded-lg flex items-center justify-center">
                  <XCircle className="w-5 h-5 text-[#403323]" />
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-1">Total impayé</div>
                  <div className="text-xl text-[#403323]">€6,850</div>
                </div>
              </div>
              <div className="text-xs text-gray-600 mt-2">8 factures</div>
            </div>

            <div className="bg-white rounded-xl p-4 shadow-sm border-l-4 border-red-500">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center">
                  <AlertTriangle className="w-5 h-5 text-red-500" />
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-1">Retards</div>
                  <div className="text-xl text-red-500">4</div>
                </div>
              </div>
              <div className="text-xs text-red-600 mt-2">Action requise</div>
            </div>
          </div>

          {/* Alerts for Overdue Invoices */}
          <div className="bg-white rounded-xl p-4 mb-4 shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <AlertTriangle className="w-5 h-5 text-red-500" />
              <h2 className="text-sm text-[#403323]">Alertes - Factures en retard</h2>
            </div>
            <div className="space-y-2">
              {overdueInvoices.map((invoice) => (
                <div key={invoice.id} className="flex items-center justify-between p-3 bg-red-50 border border-red-100 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white text-xs">
                      {invoice.resident.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <div className="text-sm text-[#403323]">{invoice.resident}</div>
                      <div className="text-xs text-gray-600">
                        Échéance: {invoice.dueDate} • {invoice.daysOverdue} jours de retard
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="text-right">
                      <div className="text-sm text-red-600">€{invoice.amount}</div>
                    </div>
                    <button className="px-3 py-1.5 bg-[#ff7f27] text-white rounded text-xs hover:bg-[#e66f1f]">
                      Rappel
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Payment Status Table */}
          <div className="bg-white rounded-xl shadow-sm flex-1 overflow-hidden flex flex-col">
            <div className="px-4 py-3 border-b border-[#e6e6e6]">
              <h2 className="text-sm text-[#403323]">Statut de tous les pensionnaires</h2>
            </div>
            <div className="overflow-auto flex-1">
              <table className="w-full">
                <thead className="bg-[#f5f5f5] sticky top-0">
                  <tr>
                    <th className="text-left px-4 py-3 text-xs text-[#403323]">Pensionnaire</th>
                    <th className="text-left px-4 py-3 text-xs text-[#403323]">Montant dû</th>
                    <th className="text-left px-4 py-3 text-xs text-[#403323]">Dernier paiement</th>
                    <th className="text-left px-4 py-3 text-xs text-[#403323]">Statut</th>
                    <th className="text-left px-4 py-3 text-xs text-[#403323]">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {paymentStatus.map((payment) => (
                    <tr key={payment.id} className="border-b border-[#e6e6e6] hover:bg-[#f5f5f5]">
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-2">
                          <div className="w-7 h-7 bg-[#38712c] rounded-full flex items-center justify-center text-white text-xs">
                            {payment.resident.split(' ').map(n => n[0]).join('')}
                          </div>
                          <span className="text-sm text-[#403323]">{payment.resident}</span>
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        {payment.amountDue === 0 ? (
                          <span className="text-sm text-gray-400">-</span>
                        ) : (
                          <span className="text-sm text-[#403323]">€{payment.amountDue}</span>
                        )}
                      </td>
                      <td className="px-4 py-3 text-sm text-[#403323]">{payment.lastPayment}</td>
                      <td className="px-4 py-3">
                        <span className={`text-xs px-2 py-1 rounded ${
                          payment.status === "À jour" 
                            ? "bg-[#38712c]/10 text-[#38712c]"
                            : payment.status === "Partiel"
                            ? "bg-[#ff7f27]/10 text-[#ff7f27]"
                            : "bg-red-50 text-red-600"
                        }`}>
                          {payment.status}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        {payment.status !== "À jour" && (
                          <button className="px-3 py-1 bg-[#ff7f27] text-white rounded text-xs hover:bg-[#e66f1f]">
                            Relancer
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}