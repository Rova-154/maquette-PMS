import { Download, Mail, Check, FileText, User, Home, Printer } from "lucide-react";

const invoiceData = {
  number: "INV-2024-156",
  date: "01/12/2024",
  dueDate: "15/12/2024",
  status: "Payé",
  resident: {
    name: "Sophie Martin",
    id: "RES-2024-001",
    room: "Ch. 104 - Bâtiment A",
    email: "sophie.martin@email.com",
    phone: "+33 6 12 34 56 78"
  },
  items: [
    { description: "Logement mensuel", quantity: 1, unitPrice: 650, total: 650 },
    { description: "Pension complète", quantity: 1, unitPrice: 200, total: 200 },
    { description: "Services communs", quantity: 1, unitPrice: 50, total: 50 },
    { description: "Blanchisserie", quantity: 2, unitPrice: 15, total: 30 },
  ],
  subtotal: 930,
  tax: 0,
  total: 930
};

export function InvoiceDetails() {
  return (
    <div className="flex-1 p-4 md:p-6 overflow-y-auto">
      <div className="max-w-full h-full flex flex-col">
        {/* Title & Actions */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 md:mb-6 gap-4">
          <div>
            <h1 className="text-xl md:text-2xl font-bold text-[#403323]">Détails de la facture</h1>
            <p className="text-sm text-gray-500 mt-1">{invoiceData.number}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <button className="px-3 md:px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm text-[#403323] flex items-center gap-2">
              <Download className="w-4 h-4" />
              <span className="hidden sm:inline">PDF</span>
            </button>
            <button className="px-3 md:px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm text-[#403323] flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span className="hidden sm:inline">Rappel</span>
            </button>
            <button className="px-3 md:px-4 py-2 bg-[#38712c] text-white rounded-lg hover:bg-[#2d5a23] transition-colors text-sm flex items-center gap-2">
              <Check className="w-4 h-4" />
              <span className="hidden sm:inline">Marquer payé</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 flex-1">
          {/* Left Column - Invoice Details */}
          <div className="lg:col-span-2 flex flex-col gap-4 md:gap-6">
            {/* Invoice Header */}
            <div className="bg-white rounded-lg border border-gray-200 p-4 md:p-5">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <FileText className="w-5 h-5 text-[#403323]" />
                    <h2 className="text-lg font-medium text-[#403323]">{invoiceData.number}</h2>
                  </div>
                  <div className="text-sm text-gray-600">
                    Date d'émission: {invoiceData.date}
                  </div>
                  <div className="text-sm text-gray-600">
                    Date d'échéance: {invoiceData.dueDate}
                  </div>
                </div>
                <span className="px-3 py-1 bg-[#38712c]/10 text-[#38712c] rounded-lg text-sm font-medium self-start">
                  {invoiceData.status}
                </span>
              </div>
            </div>

            {/* Resident Information */}
            <div className="bg-white rounded-lg border border-gray-200 p-4 md:p-5">
              <h3 className="text-sm font-medium text-[#403323] mb-4 flex items-center gap-2">
                <User className="w-4 h-4" />
                Informations du pensionnaire
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <div className="text-xs text-gray-500 mb-1">Nom complet</div>
                  <div className="text-sm text-[#403323]">{invoiceData.resident.name}</div>
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-1">ID Pensionnaire</div>
                  <div className="text-sm text-[#403323]">{invoiceData.resident.id}</div>
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-1">Chambre</div>
                  <div className="text-sm text-[#403323] flex items-center gap-1">
                    <Home className="w-3 h-3" />
                    {invoiceData.resident.room}
                  </div>
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-1">Email</div>
                  <div className="text-sm text-[#403323]">{invoiceData.resident.email}</div>
                </div>
              </div>
            </div>

            {/* Invoice Items */}
            <div className="bg-white rounded-lg border border-gray-200 p-4 md:p-5">
              <h3 className="text-sm font-medium text-[#403323] mb-4">Services facturés</h3>
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[600px]">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="text-left px-4 py-3 text-xs font-medium text-gray-500 uppercase">Description</th>
                        <th className="text-center px-4 py-3 text-xs font-medium text-gray-500 uppercase">Qté</th>
                        <th className="text-right px-4 py-3 text-xs font-medium text-gray-500 uppercase">Prix unitaire</th>
                        <th className="text-right px-4 py-3 text-xs font-medium text-gray-500 uppercase">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {invoiceData.items.map((item, idx) => (
                        <tr key={idx} className="border-t border-gray-200 hover:bg-gray-50">
                          <td className="px-4 py-3 text-sm text-[#403323]">{item.description}</td>
                          <td className="px-4 py-3 text-sm text-center text-[#403323]">{item.quantity}</td>
                          <td className="px-4 py-3 text-sm text-right text-[#403323]">€{item.unitPrice}</td>
                          <td className="px-4 py-3 text-sm text-right text-[#403323]">€{item.total}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Totals */}
            <div className="bg-white rounded-lg border border-gray-200 p-4 md:p-5">
              <div className="space-y-3">
                <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                  <span className="text-sm text-gray-600">Sous-total</span>
                  <span className="text-sm text-[#403323]">€{invoiceData.subtotal}</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                  <span className="text-sm text-gray-600">Taxes (TVA 0%)</span>
                  <span className="text-sm text-[#403323]">€{invoiceData.tax}</span>
                </div>
                <div className="flex justify-between items-center pt-2">
                  <span className="text-lg font-medium text-[#403323]">Total</span>
                  <span className="text-xl md:text-2xl font-bold text-[#38712c]">€{invoiceData.total}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Summary & Actions */}
          <div className="flex flex-col gap-4 md:gap-6">
            {/* Status Card */}
            <div className="bg-gradient-to-br from-[#38712c] to-[#2d5a23] rounded-lg p-4 md:p-5 text-white">
              <div className="flex items-center gap-2 mb-3">
                <Check className="w-5 h-5" />
                <span className="text-sm">Statut de paiement</span>
              </div>
              <div className="text-xl md:text-2xl font-bold mb-2">{invoiceData.status}</div>
              <div className="text-sm opacity-90">Payé le 01/12/2024</div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-lg border border-gray-200 p-4 md:p-5">
              <h3 className="text-sm font-medium text-[#403323] mb-4">Actions rapides</h3>
              <div className="space-y-2">
                <button className="w-full px-4 py-2 bg-[#38712c] text-white rounded-lg hover:bg-[#2d5a23] transition-colors text-sm flex items-center justify-center gap-2">
                  <Download className="w-4 h-4" />
                  Télécharger PDF
                </button>
                <button className="w-full px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm text-[#403323] flex items-center justify-center gap-2">
                  <Mail className="w-4 h-4" />
                  Envoyer par email
                </button>
                <button className="w-full px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm text-[#403323] flex items-center justify-center gap-2">
                  <Printer className="w-4 h-4" />
                  Imprimer
                </button>
              </div>
            </div>

            {/* Payment Details */}
            <div className="bg-white rounded-lg border border-gray-200 p-4 md:p-5">
              <h3 className="text-sm font-medium text-[#403323] mb-4">Détails du paiement</h3>
              <div className="space-y-3">
                <div>
                  <div className="text-xs text-gray-500 mb-1">Mode de paiement</div>
                  <div className="text-sm text-[#403323]">Virement bancaire</div>
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-1">Référence transaction</div>
                  <div className="text-xs font-mono text-[#403323]">TRX-2024-3421</div>
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-1">Date de paiement</div>
                  <div className="text-sm text-[#403323]">01/12/2024</div>
                </div>
              </div>
            </div>

            {/* Notes */}
            <div className="bg-white rounded-lg border border-gray-200 p-4 md:p-5">
              <h3 className="text-sm font-medium text-[#403323] mb-4">Notes</h3>
              <textarea
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#38712c] focus:ring-1 focus:ring-[#38712c] resize-none"
                rows={4}
                placeholder="Ajouter une note..."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}