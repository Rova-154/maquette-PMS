import { X, Bed, Users, Wifi, AirVent, AlertTriangle } from "lucide-react";

export function AssignRoomModal() {
  return (
    <div className="flex-1 p-6 overflow-y-auto">
      <div className="max-w-full flex items-center justify-center min-h-full">
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
        
        {/* Modal */}
        <div className="relative w-[720px] bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col">
          {/* Modal Header */}
          <div className="flex items-center justify-between p-6 border-b border-[#e6e6e6]">
            <div>
              <h2 className="text-lg text-[#403323]">Assigner une chambre</h2>
              <p className="text-sm text-gray-500 mt-1">Pensionnaire: Sophie Martin</p>
            </div>
            <button className="p-2 hover:bg-[#f5f5f5] rounded-lg transition-colors">
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>

          {/* Modal Content */}
          <div className="p-6">
            {/* Selection Dropdowns */}
            <div className="mb-6">
              <h3 className="text-sm text-[#403323] mb-3 flex items-center gap-2">
                <div className="w-1 h-4 bg-[#38712c] rounded"></div>
                Sélectionner une chambre
              </h3>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="text-xs text-gray-600 mb-1 block">Bâtiment *</label>
                  <select className="w-full px-3 py-2 border border-[#e6e6e6] rounded-lg text-sm focus:outline-none focus:border-[#38712c]">
                    <option>Sélectionner</option>
                    <option>Bâtiment A</option>
                    <option>Bâtiment B</option>
                    <option>Bâtiment C</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs text-gray-600 mb-1 block">Étage *</label>
                  <select className="w-full px-3 py-2 border border-[#e6e6e6] rounded-lg text-sm focus:outline-none focus:border-[#38712c]">
                    <option>Sélectionner</option>
                    <option>Étage 1</option>
                    <option>Étage 2</option>
                    <option>Étage 3</option>
                    <option>Étage 4</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs text-gray-600 mb-1 block">Chambre *</label>
                  <select className="w-full px-3 py-2 border border-[#e6e6e6] rounded-lg text-sm focus:outline-none focus:border-[#38712c]">
                    <option>Sélectionner</option>
                    <option>Ch. 104</option>
                    <option>Ch. 105</option>
                    <option>Ch. 106</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Room Preview */}
            <div className="mb-6">
              <h3 className="text-sm text-[#403323] mb-3 flex items-center gap-2">
                <div className="w-1 h-4 bg-[#ff7f27] rounded"></div>
                Aperçu de la chambre
              </h3>
              <div className="bg-[#f5f5f5] rounded-xl p-5">
                {/* Room Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="text-lg text-[#403323] mb-1">Chambre 104</div>
                    <div className="text-sm text-gray-600">Bâtiment A - Étage 1</div>
                  </div>
                  <span className="px-3 py-1 bg-[#38712c]/10 text-[#38712c] rounded-lg text-xs">
                    Disponible
                  </span>
                </div>

                {/* Room Details Grid */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                      <Bed className="w-5 h-5 text-[#38712c]" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500">Type</div>
                      <div className="text-sm text-[#403323]">Chambre simple</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                      <Users className="w-5 h-5 text-[#ff7f27]" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500">Capacité</div>
                      <div className="text-sm text-[#403323]">1 personne</div>
                    </div>
                  </div>
                </div>

                {/* Amenities */}
                <div className="border-t border-[#e6e6e6] pt-4">
                  <div className="text-xs text-gray-500 mb-2">Équipements</div>
                  <div className="flex gap-2 flex-wrap">
                    <div className="flex items-center gap-1 px-2 py-1 bg-white rounded text-xs text-[#403323]">
                      <Wifi className="w-3 h-3" />
                      Wi-Fi
                    </div>
                    <div className="flex items-center gap-1 px-2 py-1 bg-white rounded text-xs text-[#403323]">
                      <AirVent className="w-3 h-3" />
                      Climatisation
                    </div>
                    <div className="flex items-center gap-1 px-2 py-1 bg-white rounded text-xs text-[#403323]">
                      <Bed className="w-3 h-3" />
                      Lit simple
                    </div>
                  </div>
                </div>

                {/* Current Status */}
                <div className="border-t border-[#e6e6e6] pt-4 mt-4">
                  <div className="text-xs text-gray-500 mb-2">Occupation actuelle</div>
                  <div className="text-sm text-[#38712c]">Chambre disponible</div>
                </div>
              </div>
            </div>

            {/* Warning Message (Example for occupied room) */}
            <div className="bg-[#ff7f27]/10 border border-[#ff7f27]/20 rounded-xl p-4 mb-6 hidden">
              <div className="flex gap-3">
                <AlertTriangle className="w-5 h-5 text-[#ff7f27] flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm text-[#403323] mb-1">Chambre actuellement occupée</div>
                  <div className="text-xs text-gray-600">
                    Cette chambre est actuellement occupée par Lucas Dubois. L'assignation créera un conflit.
                  </div>
                </div>
              </div>
            </div>

            {/* Assignment Reason */}
            <div>
              <label className="text-xs text-gray-600 mb-2 block">Raison de l'assignation</label>
              <textarea
                placeholder="Ex: Nouvelle arrivée, changement de chambre demandé..."
                className="w-full px-3 py-2 border border-[#e6e6e6] rounded-lg text-sm focus:outline-none focus:border-[#38712c] h-20 resize-none"
              />
            </div>
          </div>

          {/* Modal Footer */}
          <div className="flex items-center justify-end gap-3 p-6 border-t border-[#e6e6e6] bg-[#f5f5f5]">
            <button className="px-5 py-2 border border-[#e6e6e6] rounded-lg text-sm text-[#403323] hover:bg-white transition-colors">
              Annuler
            </button>
            <button className="px-5 py-2 bg-[#38712c] text-white rounded-lg text-sm hover:bg-[#2d5a23] transition-colors">
              Confirmer l'assignation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}