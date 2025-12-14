import { Download, FileText, Calendar, CreditCard } from "lucide-react";

const transactions = [
  { id: 1, date: "05/12/2024", resident: "Sophie Martin", type: "Logement + Repas", amount: 930, method: "Virement", ref: "TRX-2024-3421" },
  { id: 2, date: "05/12/2024", resident: "Lucas Dubois", type: "Logement + Repas", amount: 800, method: "Carte", ref: "TRX-2024-3422" },
  { id: 3, date: "04/12/2024", resident: "Camille Moreau", type: "Logement + Repas", amount: 900, method: "Virement", ref: "TRX-2024-3419" },
  { id: 4, date: "03/12/2024", resident: "Emma Leroy", type: "Paiement partiel", amount: 495, method: "Espèces", ref: "TRX-2024-3415" },
  { id: 5, date: "02/12/2024", resident: "Julie Durand", type: "Logement + Repas", amount: 935, method: "Virement", ref: "TRX-2024-3410" },
  { id: 6, date: "01/12/2024", resident: "Alexandre Roux", type: "Paiement partiel", amount: 515, method: "Carte", ref: "TRX-2024-3405" },
  { id: 7, date: "30/11/2024", resident: "Marie Bernard", type: "Logement", amount: 650, method: "Virement", ref: "TRX-2024-3398" },
  { id: 8, date: "29/11/2024", resident: "Pierre Leroy", type: "Logement + Repas", amount: 850, method: "Chèque", ref: "TRX-2024-3392" },
];

export function PaymentHistory() {
  return (
    <div className="flex-1 p-6 overflow-y-auto">
      <div className="max-w-full">
        {/* Title & Export Buttons */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Historique des transactions</h1>
            <p className="text-gray-600 mt-1">Suivi complet de tous les paiements reçus</p>
          </div>
          <div className="flex gap-2">
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm text-gray-700 flex items-center gap-2">
              <Download className="w-4 h-4" />
              Export CSV
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm text-gray-700 flex items-center gap-2">
              <FileText className="w-4 h-4" />
              Export PDF
            </button>
          </div>
        </div>

        {/* Filters Bar */}
        <div className="bg-white rounded-xl p-4 mb-6 shadow border border-gray-200">
          <div className="flex items-center gap-3">
            <Calendar className="w-4 h-4 text-gray-500" />
            <input
              type="date"
              className="text-sm border border-gray-300 rounded px-3 py-2 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#38712c] focus:border-transparent"
              placeholder="Date début"
            />
            <span className="text-sm text-gray-500">à</span>
            <input
              type="date"
              className="text-sm border border-gray-300 rounded px-3 py-2 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#38712c] focus:border-transparent"
              placeholder="Date fin"
            />
            <select className="text-sm border border-gray-300 rounded px-3 py-2 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#38712c] focus:border-transparent">
              <option>Tous types</option>
              <option>Logement</option>
              <option>Repas</option>
              <option>Services</option>
              <option>Extras</option>
            </select>
            <select className="text-sm border border-gray-300 rounded px-3 py-2 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#38712c] focus:border-transparent">
              <option>Tous modes de paiement</option>
              <option>Virement</option>
              <option>Carte</option>
              <option>Espèces</option>
              <option>Chèque</option>
            </select>
          </div>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-xl p-4 shadow border border-gray-200">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#38712c]/10 rounded-lg flex items-center justify-center">
                <CreditCard className="w-5 h-5 text-[#38712c]" />
              </div>
              <div>
                <div className="text-sm text-gray-500">Total transactions</div>
                <div className="text-xl font-bold text-gray-900">847</div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-4 shadow border border-gray-200">
            <div className="text-sm text-gray-500 mb-1">Total encaissé</div>
            <div className="text-xl font-bold text-[#38712c]">€72,450</div>
          </div>
          <div className="bg-white rounded-xl p-4 shadow border border-gray-200">
            <div className="text-sm text-gray-500 mb-1">Ce mois</div>
            <div className="text-xl font-bold text-gray-900">€18,320</div>
          </div>
          <div className="bg-white rounded-xl p-4 shadow border border-gray-200">
            <div className="text-sm text-gray-500 mb-1">Moyenne</div>
            <div className="text-xl font-bold text-gray-900">€856</div>
          </div>
        </div>

        {/* Transactions Table */}
        <div className="bg-white rounded-xl shadow border border-gray-200 overflow-hidden">
          <div className="overflow-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                  <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Pensionnaire</th>
                  <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                  <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Montant</th>
                  <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Mode paiement</th>
                  <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Référence</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((transaction) => (
                  <tr key={transaction.id} className="border-t border-gray-200 hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-3 h-3 text-gray-400" />
                        <span className="text-sm text-gray-900">{transaction.date}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 bg-[#38712c] rounded-full flex items-center justify-center text-white text-xs font-medium">
                          {transaction.resident.split(' ').map(n => n[0]).join('')}
                        </div>
                        <span className="text-sm text-gray-900">{transaction.resident}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm text-gray-600">{transaction.type}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm font-medium text-[#38712c]">€{transaction.amount}</span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <CreditCard className="w-3 h-3 text-gray-400" />
                        <span className="text-sm text-gray-900">{transaction.method}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-xs text-gray-500 font-mono">{transaction.ref}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Footer Stats */}
          <div className="border-t border-gray-200 px-6 py-3 bg-gray-50 flex items-center justify-between">
            <div className="text-sm text-gray-500">
              Affichage 8 transactions sur un total de 847
            </div>
            <div className="text-sm font-medium text-[#38712c]">
              Total: €6,375
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}