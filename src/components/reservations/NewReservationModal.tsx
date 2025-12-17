import { X } from "lucide-react";

export function NewReservationModal() {
  return (
    <>
      {/* Overlay avec défilement */}
      <div className="fixed inset-0 z-50 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4">
          {/* Overlay sombre */}
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm"></div>
          
          {/* Modal */}
          <div className="relative w-[760px] max-h-[90vh] bg-white rounded-xl shadow-2xl flex flex-col">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-[#e6e6e6] flex-shrink-0">
              <h2 className="text-lg text-[#403323]">Créer une nouvelle réservation</h2>
              <button className="p-2 hover:bg-[#f5f5f5] rounded-lg transition-colors">
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            {/* Modal Content - Scrollable */}
            <div className="overflow-y-auto px-6 py-4">
              {/* Resident Selection */}
              <div className="mb-6">
                <h3 className="text-sm text-[#403323] mb-3 flex items-center gap-2">
                  <div className="w-1 h-4 bg-[#38712c] rounded"></div>
                  Pensionnaire
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-2">
                    <label className="text-xs text-gray-600 mb-1 block">Sélectionner un pensionnaire *</label>
                    <select className="w-full px-3 py-2 border border-[#e6e6e6] rounded-lg text-sm focus:outline-none focus:border-[#ff7f27]">
                      <option>Sélectionner</option>
                      <option>Marie Dubois</option>
                      <option>Pierre Laurent</option>
                      <option>Claire Martin</option>
                      <option>+ Nouveau pensionnaire</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Room Selection */}
              <div className="mb-6">
                <h3 className="text-sm text-[#403323] mb-3 flex items-center gap-2">
                  <div className="w-1 h-4 bg-[#ff7f27] rounded"></div>
                  Chambre
                </h3>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <label className="text-xs text-gray-600 mb-1 block">Bâtiment *</label>
                    <select className="w-full px-3 py-2 border border-[#e6e6e6] rounded-lg text-sm focus:outline-none focus:border-[#ff7f27]">
                      <option>Sélectionner</option>
                      <option>Bâtiment A</option>
                      <option>Bâtiment B</option>
                      <option>Bâtiment C</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-xs text-gray-600 mb-1 block">Étage *</label>
                    <select className="w-full px-3 py-2 border border-[#e6e6e6] rounded-lg text-sm focus:outline-none focus:border-[#ff7f27]">
                      <option>Sélectionner</option>
                      <option>Étage 1</option>
                      <option>Étage 2</option>
                      <option>Étage 3</option>
                      <option>Étage 4</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-xs text-gray-600 mb-1 block">Chambre *</label>
                    <select className="w-full px-3 py-2 border border-[#e6e6e6] rounded-lg text-sm focus:outline-none focus:border-[#ff7f27]">
                      <option>Sélectionner</option>
                      <option>Ch. 104</option>
                      <option>Ch. 105</option>
                      <option>Ch. 106</option>
                    </select>
                  </div>
                </div>
                
                {/* Room Preview */}
                <div className="mt-3 p-3 bg-[#f5f5f5] rounded-lg">
                  <div className="text-xs text-gray-500 mb-1">Aperçu de la chambre</div>
                  <div className="text-sm text-[#403323]">Ch. 106 - Bâtiment A, Étage 1</div>
                  <div className="text-xs text-gray-600 mt-1">Capacité: 1 personne • Wi-Fi, Climatisation, TV</div>
                </div>
              </div>

              {/* Dates */}
              <div className="mb-6">
                <h3 className="text-sm text-[#403323] mb-3 flex items-center gap-2">
                  <div className="w-1 h-4 bg-[#403323] rounded"></div>
                  Dates du séjour
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-gray-600 mb-1 block">Date d'arrivée *</label>
                    <input
                      type="date"
                      className="w-full px-3 py-2 border border-[#e6e6e6] rounded-lg text-sm focus:outline-none focus:border-[#ff7f27]"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-gray-600 mb-1 block">Date de départ *</label>
                    <input
                      type="date"
                      className="w-full px-3 py-2 border border-[#e6e6e6] rounded-lg text-sm focus:outline-none focus:border-[#ff7f27]"
                    />
                  </div>
                </div>
                <div className="mt-2 text-xs text-gray-500">
                  Durée estimée: 5 mois et 15 jours
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="text-xs text-gray-600 mb-2 block">Notes</label>
                <textarea
                  placeholder="Informations supplémentaires sur la réservation..."
                  className="w-full px-3 py-2 border border-[#e6e6e6] rounded-lg text-sm focus:outline-none focus:border-[#ff7f27] h-20 resize-none"
                />
              </div>
            </div>

            {/* Modal Footer */}
            <div className="flex items-center justify-end gap-3 p-6 border-t border-[#e6e6e6] bg-[#f5f5f5] flex-shrink-0">
              <button className="px-5 py-2 border border-[#e6e6e6] rounded-lg text-sm text-[#403323] hover:bg-white transition-colors">
                Annuler
              </button>
              <button className="px-5 py-2 bg-[#38712c] text-white rounded-lg text-sm hover:bg-[#2d5a23] transition-colors">
                Réserver
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}