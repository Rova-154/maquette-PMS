import { Edit, Home, FileText, Archive, Phone, Mail, Calendar, MapPin, CreditCard, UtensilsCrossed } from "lucide-react";
import { useState } from "react";

const tabs = [
  { id: "info", label: "Informations" },
  { id: "stay", label: "Séjour" },
  { id: "rooms", label: "Historique chambres" },
  { id: "billing", label: "Facturation" },
  { id: "meals", label: "Statut repas" },
];

const roomHistory = [
  { date: "01/09/2024", room: "Ch. 104 - Bât. A", reason: "Nouvelle arrivée", status: "Actuel" },
  { date: "15/06/2024", room: "Ch. 215 - Bât. A", reason: "Changement demandé", status: "Terminé" },
  { date: "10/01/2024", room: "Ch. 308 - Bât. B", reason: "Première assignation", status: "Terminé" },
];

const invoices = [
  { id: "INV-2024-12", date: "01/12/2024", amount: "€850", status: "Payé" },
  { id: "INV-2024-11", date: "01/11/2024", amount: "€850", status: "Payé" },
  { id: "INV-2024-10", date: "01/10/2024", amount: "€850", status: "Payé" },
  { id: "INV-2024-09", date: "01/09/2024", amount: "€425", status: "Payé" },
];

export function ResidentProfile() {
  const [activeTab, setActiveTab] = useState("info");

  return (
    <div className="flex-1 p-6 overflow-y-auto">
      <div className="max-w-full h-full flex flex-col">
        {/* Header with Actions */}
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-xl text-[#403323]">Profil du pensionnaire</h1>
          <div className="flex gap-2">
            <button className="px-3 py-2 border border-[#e6e6e6] rounded-lg hover:bg-white transition-colors text-sm text-[#403323] flex items-center gap-2">
              <Edit className="w-4 h-4" />
              Modifier
            </button>
            <button className="px-3 py-2 border border-[#e6e6e6] rounded-lg hover:bg-white transition-colors text-sm text-[#403323] flex items-center gap-2">
              <Home className="w-4 h-4" />
              Assigner
            </button>
            <button className="px-3 py-2 border border-[#e6e6e6] rounded-lg hover:bg-white transition-colors text-sm text-[#403323] flex items-center gap-2">
              <FileText className="w-4 h-4" />
              Facture
            </button>
            <button className="px-3 py-2 border border-[#e6e6e6] rounded-lg hover:bg-white transition-colors text-sm text-[#ff7f27] flex items-center gap-2">
              <Archive className="w-4 h-4" />
              Archiver
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-sm flex-1 overflow-hidden flex flex-col">
          <div className="border-b border-[#e6e6e6] px-6">
            <div className="flex gap-6">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-3 text-sm border-b-2 transition-colors ${
                    activeTab === tab.id
                      ? "border-[#38712c] text-[#38712c]"
                      : "border-transparent text-gray-500 hover:text-[#403323]"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="flex-1 overflow-auto p-6">
            {/* Informations Tab */}
            {activeTab === "info" && (
              <div className="grid grid-cols-2 gap-6">
                {/* Identity Section */}
                <div className="bg-[#f5f5f5] rounded-xl p-5">
                  <h3 className="text-[#403323] mb-4 flex items-center gap-2">
                    <div className="w-1 h-5 bg-[#38712c] rounded"></div>
                    Identité
                  </h3>
                  <div className="flex gap-4 mb-4">
                    <div className="w-20 h-20 bg-[#38712c] rounded-full flex items-center justify-center text-white text-2xl">
                      SM
                    </div>
                    <div className="flex-1">
                      <div className="text-xl text-[#403323] mb-1">Sophie Martin</div>
                      <div className="text-sm text-gray-500">ID: RES-2024-001</div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Calendar className="w-4 h-4 text-gray-400" />
                      <div>
                        <div className="text-xs text-gray-500">Date de naissance</div>
                        <div className="text-sm text-[#403323]">15 Mars 2002</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 text-gray-400 flex items-center justify-center text-xs">⚧</div>
                      <div>
                        <div className="text-xs text-gray-500">Genre</div>
                        <div className="text-sm text-[#403323]">Féminin</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="w-4 h-4 text-gray-400" />
                      <div>
                        <div className="text-xs text-gray-500">Nationalité</div>
                        <div className="text-sm text-[#403323]">Française</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contacts Section */}
                <div className="bg-[#f5f5f5] rounded-xl p-5">
                  <h3 className="text-[#403323] mb-4 flex items-center gap-2">
                    <div className="w-1 h-5 bg-[#ff7f27] rounded"></div>
                    Contacts
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Phone className="w-4 h-4 text-gray-400 mt-1" />
                      <div>
                        <div className="text-xs text-gray-500">Téléphone principal</div>
                        <div className="text-sm text-[#403323]">+33 6 12 34 56 78</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Mail className="w-4 h-4 text-gray-400 mt-1" />
                      <div>
                        <div className="text-xs text-gray-500">Email</div>
                        <div className="text-sm text-[#403323]">sophie.martin@email.com</div>
                      </div>
                    </div>
                    <div className="border-t border-[#e6e6e6] pt-4 mt-4">
                      <div className="text-xs text-gray-500 mb-2">Contact d'urgence</div>
                      <div className="text-sm text-[#403323] mb-1">Marie Martin (Mère)</div>
                      <div className="text-sm text-gray-600">+33 6 98 76 54 32</div>
                    </div>
                  </div>
                </div>

                {/* Current Stay */}
                <div className="bg-[#f5f5f5] rounded-xl p-5">
                  <h3 className="text-[#403323] mb-4 flex items-center gap-2">
                    <div className="w-1 h-5 bg-[#403323] rounded"></div>
                    Séjour actuel
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <div className="text-xs text-gray-500">Chambre actuelle</div>
                      <div className="text-sm text-[#403323]">Ch. 104 - Bâtiment A</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-500">Date d'entrée</div>
                      <div className="text-sm text-[#403323]">01 Septembre 2024</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-500">Date de sortie prévue</div>
                      <div className="text-sm text-[#403323]">30 Juin 2025</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-500">Durée du séjour</div>
                      <div className="text-sm text-[#403323]">10 mois</div>
                    </div>
                  </div>
                </div>

                {/* Financial Status */}
                <div className="bg-[#f5f5f5] rounded-xl p-5">
                  <h3 className="text-[#403323] mb-4 flex items-center gap-2">
                    <div className="w-1 h-5 bg-[#38712c] rounded"></div>
                    Statut financier
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <div className="text-xs text-gray-500">Montant mensuel</div>
                      <div className="text-xl text-[#38712c]">€850</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-500">Dernière facturation</div>
                      <div className="text-sm text-[#403323]">01 Décembre 2024</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-500">Statut de paiement</div>
                      <span className="inline-block text-xs px-2 py-1 rounded bg-[#38712c]/10 text-[#38712c]">
                        À jour
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Stay Tab */}
            {activeTab === "stay" && (
              <div className="max-w-3xl">
                <div className="bg-[#f5f5f5] rounded-xl p-6">
                  <h3 className="text-[#403323] mb-6">Détails du séjour</h3>
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label className="text-xs text-gray-500 mb-2 block">Date d'entrée</label>
                      <input 
                        type="date" 
                        value="2024-09-01"
                        className="w-full px-4 py-2 border border-[#e6e6e6] rounded-lg text-sm"
                        readOnly
                      />
                    </div>
                    <div>
                      <label className="text-xs text-gray-500 mb-2 block">Date de sortie prévue</label>
                      <input 
                        type="date" 
                        value="2025-06-30"
                        className="w-full px-4 py-2 border border-[#e6e6e6] rounded-lg text-sm"
                        readOnly
                      />
                    </div>
                    <div className="col-span-2">
                      <label className="text-xs text-gray-500 mb-2 block">Notes</label>
                      <textarea 
                        className="w-full px-4 py-2 border border-[#e6e6e6] rounded-lg text-sm h-24"
                        readOnly
                        value="Étudiante en deuxième année. Préfère les chambres calmes."
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Room History Tab */}
            {activeTab === "rooms" && (
              <div>
                <div className="bg-white border border-[#e6e6e6] rounded-xl overflow-hidden">
                  <table className="w-full">
                    <thead className="bg-[#f5f5f5]">
                      <tr>
                        <th className="text-left px-4 py-3 text-xs text-[#403323]">Date</th>
                        <th className="text-left px-4 py-3 text-xs text-[#403323]">Chambre</th>
                        <th className="text-left px-4 py-3 text-xs text-[#403323]">Raison</th>
                        <th className="text-left px-4 py-3 text-xs text-[#403323]">Statut</th>
                      </tr>
                    </thead>
                    <tbody>
                      {roomHistory.map((entry, index) => (
                        <tr key={index} className="border-b border-[#e6e6e6]">
                          <td className="px-4 py-3 text-sm text-[#403323]">{entry.date}</td>
                          <td className="px-4 py-3 text-sm text-[#403323]">{entry.room}</td>
                          <td className="px-4 py-3 text-sm text-gray-600">{entry.reason}</td>
                          <td className="px-4 py-3">
                            <span className={`text-xs px-2 py-1 rounded ${
                              entry.status === "Actuel"
                                ? "bg-[#38712c]/10 text-[#38712c]"
                                : "bg-gray-100 text-gray-600"
                            }`}>
                              {entry.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Billing Tab */}
            {activeTab === "billing" && (
              <div>
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="bg-[#38712c]/10 rounded-xl p-4">
                    <div className="text-xs text-gray-600 mb-1">Total payé</div>
                    <div className="text-2xl text-[#38712c]">€3,400</div>
                  </div>
                  <div className="bg-[#ff7f27]/10 rounded-xl p-4">
                    <div className="text-xs text-gray-600 mb-1">En attente</div>
                    <div className="text-2xl text-[#ff7f27]">€0</div>
                  </div>
                  <div className="bg-gray-100 rounded-xl p-4">
                    <div className="text-xs text-gray-600 mb-1">Prochaine facture</div>
                    <div className="text-sm text-[#403323]">01 Jan 2025</div>
                  </div>
                </div>
                
                <div className="bg-white border border-[#e6e6e6] rounded-xl overflow-hidden">
                  <table className="w-full">
                    <thead className="bg-[#f5f5f5]">
                      <tr>
                        <th className="text-left px-4 py-3 text-xs text-[#403323]">N° Facture</th>
                        <th className="text-left px-4 py-3 text-xs text-[#403323]">Date</th>
                        <th className="text-left px-4 py-3 text-xs text-[#403323]">Montant</th>
                        <th className="text-left px-4 py-3 text-xs text-[#403323]">Statut</th>
                      </tr>
                    </thead>
                    <tbody>
                      {invoices.map((invoice, index) => (
                        <tr key={index} className="border-b border-[#e6e6e6]">
                          <td className="px-4 py-3 text-sm text-[#403323]">{invoice.id}</td>
                          <td className="px-4 py-3 text-sm text-[#403323]">{invoice.date}</td>
                          <td className="px-4 py-3 text-sm text-[#403323]">{invoice.amount}</td>
                          <td className="px-4 py-3">
                            <span className="text-xs px-2 py-1 rounded bg-[#38712c]/10 text-[#38712c]">
                              {invoice.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Meals Tab */}
            {activeTab === "meals" && (
              <div className="max-w-3xl">
                <div className="bg-[#f5f5f5] rounded-xl p-6">
                  <h3 className="text-[#403323] mb-6 flex items-center gap-2">
                    <UtensilsCrossed className="w-5 h-5" />
                    Statut de pension
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <input 
                        type="radio" 
                        id="full-board" 
                        name="meal-status" 
                        checked 
                        className="w-4 h-4"
                      />
                      <label htmlFor="full-board" className="flex-1">
                        <div className="text-sm text-[#403323]">Pension complète</div>
                        <div className="text-xs text-gray-500">Petit-déjeuner, déjeuner et dîner inclus</div>
                      </label>
                      <div className="text-sm text-[#38712c]">+€200/mois</div>
                    </div>
                    <div className="flex items-center gap-4">
                      <input 
                        type="radio" 
                        id="half-board" 
                        name="meal-status" 
                        className="w-4 h-4"
                      />
                      <label htmlFor="half-board" className="flex-1">
                        <div className="text-sm text-[#403323]">Demi-pension</div>
                        <div className="text-xs text-gray-500">Petit-déjeuner et déjeuner inclus</div>
                      </label>
                      <div className="text-sm text-[#ff7f27]">+€100/mois</div>
                    </div>
                    <div className="border-t border-[#e6e6e6] pt-4 mt-4">
                      <div className="text-xs text-gray-500 mb-2">Historique de consommation</div>
                      <div className="text-sm text-[#403323]">Moyenne: 18 repas/semaine</div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}