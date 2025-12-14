import { Edit, X, Lock, User, Home, Calendar, CheckCircle } from "lucide-react";

export function ReservationDetails() {
  return (
    <div className="flex-1 p-6 overflow-y-auto">
      <div className="max-w-full">
        <div className="h-full flex flex-col">
          {/* Title & Actions */}
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-xl text-[#403323]">Détails de la réservation</h1>
              <p className="text-sm text-gray-500 mt-1">RES-2025-012</p>
            </div>
            <div className="flex gap-2">
              <button className="px-4 py-2 border border-[#e6e6e6] rounded-lg hover:bg-white transition-colors text-sm text-[#403323] flex items-center gap-2">
                <Edit className="w-4 h-4" />
                Modifier
              </button>
              <button className="px-4 py-2 border border-[#e6e6e6] rounded-lg hover:bg-white transition-colors text-sm text-[#403323] flex items-center gap-2">
                <Lock className="w-4 h-4" />
                Bloquer chambre
              </button>
              <button className="px-4 py-2 border border-red-200 rounded-lg hover:bg-red-50 transition-colors text-sm text-red-600 flex items-center gap-2">
                <X className="w-4 h-4" />
                Annuler
              </button>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 flex-1 overflow-hidden">
            {/* Left Column - Main Details */}
            <div className="col-span-2 flex flex-col gap-4 overflow-y-auto">
              {/* Reservation Status */}
              <div className="bg-gradient-to-r from-[#38712c] to-[#2d5a23] rounded-xl p-5 text-white shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle className="w-5 h-5" />
                      <span className="text-sm opacity-90">Statut</span>
                    </div>
                    <div className="text-2xl mb-1">Confirmée</div>
                    <div className="text-sm opacity-90">Créée le 15/11/2024</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm opacity-90 mb-1">ID Réservation</div>
                    <div className="text-lg">RES-2025-012</div>
                  </div>
                </div>
              </div>

              {/* Resident Information */}
              <div className="bg-white rounded-xl p-5 shadow-sm">
                <h3 className="text-sm text-[#403323] mb-4 flex items-center gap-2">
                  <User className="w-4 h-4" />
                  Informations du pensionnaire
                </h3>
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-[#38712c] rounded-full flex items-center justify-center text-white text-xl">
                    MD
                  </div>
                  <div className="flex-1">
                    <div className="text-lg text-[#403323] mb-1">Marie Dubois</div>
                    <div className="text-sm text-gray-600 mb-3">ID: RES-NEW-2025-012</div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <div className="text-xs text-gray-500 mb-1">Téléphone</div>
                        <div className="text-sm text-[#403323]">+33 6 45 67 89 12</div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-500 mb-1">Email</div>
                        <div className="text-sm text-[#403323]">marie.dubois@email.com</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Room Information */}
              <div className="bg-white rounded-xl p-5 shadow-sm">
                <h3 className="text-sm text-[#403323] mb-4 flex items-center gap-2">
                  <Home className="w-4 h-4" />
                  Informations de la chambre
                </h3>
                <div className="bg-[#f5f5f5] rounded-lg p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="text-lg text-[#403323] mb-1">Chambre 106</div>
                      <div className="text-sm text-gray-600">Bâtiment A - Étage 1</div>
                    </div>
                    <span className="px-3 py-1 bg-[#38712c]/10 text-[#38712c] rounded-lg text-xs">
                      Réservée
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-3 pt-3 border-t border-[#e6e6e6]">
                    <div>
                      <div className="text-xs text-gray-500 mb-1">Type</div>
                      <div className="text-sm text-[#403323]">Simple</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 mb-1">Capacité</div>
                      <div className="text-sm text-[#403323]">1 personne</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 mb-1">Loyer mensuel</div>
                      <div className="text-sm text-[#38712c]">€650</div>
                    </div>
                  </div>
                  <div className="mt-3 pt-3 border-t border-[#e6e6e6]">
                    <div className="text-xs text-gray-500 mb-2">Équipements</div>
                    <div className="flex gap-2 flex-wrap">
                      <span className="text-xs px-2 py-1 bg-white rounded">Wi-Fi</span>
                      <span className="text-xs px-2 py-1 bg-white rounded">Climatisation</span>
                      <span className="text-xs px-2 py-1 bg-white rounded">TV</span>
                      <span className="text-xs px-2 py-1 bg-white rounded">Bureau</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stay Dates */}
              <div className="bg-white rounded-xl p-5 shadow-sm">
                <h3 className="text-sm text-[#403323] mb-4 flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Dates du séjour
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-[#f5f5f5] rounded-lg p-4">
                    <div className="text-xs text-gray-500 mb-1">Date d'arrivée</div>
                    <div className="text-lg text-[#403323]">15/01/2025</div>
                    <div className="text-xs text-gray-600 mt-1">Dans 35 jours</div>
                  </div>
                  <div className="bg-[#f5f5f5] rounded-lg p-4">
                    <div className="text-xs text-gray-500 mb-1">Date de départ</div>
                    <div className="text-lg text-[#403323]">30/06/2025</div>
                    <div className="text-xs text-gray-600 mt-1">Dans 202 jours</div>
                  </div>
                </div>
                <div className="mt-3 text-center py-3 bg-[#f5f5f5] rounded-lg">
                  <div className="text-xs text-gray-500 mb-1">Durée totale du séjour</div>
                  <div className="text-lg text-[#403323]">5 mois et 15 jours</div>
                </div>
              </div>

              {/* Notes */}
              <div className="bg-white rounded-xl p-5 shadow-sm">
                <h3 className="text-sm text-[#403323] mb-3">Notes</h3>
                <div className="text-sm text-gray-600 bg-[#f5f5f5] p-3 rounded-lg">
                  Étudiante en première année. Préfère les chambres calmes et bien éclairées.
                </div>
              </div>
            </div>

            {/* Right Column - Timeline & Actions */}
            <div className="flex flex-col gap-4 overflow-y-auto">
              {/* Quick Actions */}
              <div className="bg-white rounded-xl p-5 shadow-sm">
                <h3 className="text-sm text-[#403323] mb-3">Actions rapides</h3>
                <div className="space-y-2">
                  <button className="w-full px-4 py-2 bg-[#ff7f27] text-white rounded-lg hover:bg-[#e66f1f] transition-colors text-sm flex items-center justify-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                    Confirmer arrivée
                  </button>
                  <button className="w-full px-4 py-2 border border-[#e6e6e6] rounded-lg hover:bg-[#f5f5f5] transition-colors text-sm text-[#403323] flex items-center justify-center gap-2">
                    <Edit className="w-4 h-4" />
                    Modifier réservation
                  </button>
                  <button className="w-full px-4 py-2 border border-[#e6e6e6] rounded-lg hover:bg-[#f5f5f5] transition-colors text-sm text-[#403323]">
                    Envoyer confirmation
                  </button>
                </div>
              </div>

              {/* Timeline */}
              <div className="bg-white rounded-xl p-5 shadow-sm">
                <h3 className="text-sm text-[#403323] mb-4">Chronologie</h3>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <div className="w-2 h-2 bg-[#38712c] rounded-full mt-1.5"></div>
                    <div className="flex-1">
                      <div className="text-sm text-[#403323] mb-1">Réservation créée</div>
                      <div className="text-xs text-gray-500">15/11/2024 - 10:30</div>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-2 h-2 bg-[#38712c] rounded-full mt-1.5"></div>
                    <div className="flex-1">
                      <div className="text-sm text-[#403323] mb-1">Confirmation envoyée</div>
                      <div className="text-xs text-gray-500">15/11/2024 - 11:45</div>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-2 h-2 bg-[#e6e6e6] rounded-full mt-1.5"></div>
                    <div className="flex-1">
                      <div className="text-sm text-gray-400 mb-1">Arrivée prévue</div>
                      <div className="text-xs text-gray-500">15/01/2025</div>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-2 h-2 bg-[#e6e6e6] rounded-full mt-1.5"></div>
                    <div className="flex-1">
                      <div className="text-sm text-gray-400 mb-1">Fin du séjour</div>
                      <div className="text-xs text-gray-500">30/06/2025</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Financial Summary */}
              <div className="bg-white rounded-xl p-5 shadow-sm">
                <h3 className="text-sm text-[#403323] mb-3">Résumé financier</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Loyer mensuel</span>
                    <span className="text-sm text-[#403323]">€650</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Durée (5.5 mois)</span>
                    <span className="text-sm text-[#403323]">€3,575</span>
                  </div>
                  <div className="flex justify-between items-center pt-3 border-t border-[#e6e6e6]">
                    <span className="text-sm text-[#403323]">Total estimé</span>
                    <span className="text-lg text-[#38712c]">€3,575</span>
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