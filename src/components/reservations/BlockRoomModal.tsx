import { X, AlertTriangle } from "lucide-react";

export function BlockRoomModal() {
  return (
    <>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm z-50"></div>
      
      {/* Modal */}
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[720px] bg-white rounded-xl shadow-2xl z-50">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b border-[#e6e6e6]">
          <h2 className="text-lg text-[#403323]">Blocage temporaire de chambre</h2>
          <button className="p-2 hover:bg-[#f5f5f5] rounded-lg transition-colors">
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6">
          {/* Warning Message */}
          <div className="bg-[#ff7f27]/10 border border-[#ff7f27]/20 rounded-xl p-4 mb-6">
            <div className="flex gap-3">
              <AlertTriangle className="w-5 h-5 text-[#ff7f27] flex-shrink-0 mt-0.5" />
              <div>
                <div className="text-sm text-[#403323] mb-1">Attention</div>
                <div className="text-xs text-gray-600">
                  Le blocage d'une chambre empêchera toute réservation ou assignation durant la période spécifiée.
                </div>
              </div>
            </div>
          </div>

          {/* Room Selection */}
          <div className="mb-6">
            <h3 className="text-sm text-[#403323] mb-3 flex items-center gap-2">
              <div className="w-1 h-4 bg-[#38712c] rounded"></div>
              Chambre à bloquer
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
                  <option>Ch. 201</option>
                  <option>Ch. 202</option>
                  <option>Ch. 203</option>
                </select>
              </div>
            </div>
          </div>

          {/* Reason */}
          <div className="mb-6">
            <h3 className="text-sm text-[#403323] mb-3 flex items-center gap-2">
              <div className="w-1 h-4 bg-[#ff7f27] rounded"></div>
              Raison du blocage
            </h3>
            <div>
              <label className="text-xs text-gray-600 mb-2 block">Motif *</label>
              <select className="w-full px-3 py-2 border border-[#e6e6e6] rounded-lg text-sm focus:outline-none focus:border-[#ff7f27] mb-3">
                <option>Sélectionner</option>
                <option>Inspection</option>
                <option>Préparation</option>
                <option>Nettoyage approfondi</option>
                <option>Maintenance</option>
                <option>Rénovation</option>
                <option>Autre</option>
              </select>
              
              <label className="text-xs text-gray-600 mb-2 block">Description</label>
              <textarea
                placeholder="Détails supplémentaires..."
                className="w-full px-3 py-2 border border-[#e6e6e6] rounded-lg text-sm focus:outline-none focus:border-[#ff7f27] h-20 resize-none"
              />
            </div>
          </div>

          {/* Dates */}
          <div className="mb-6">
            <h3 className="text-sm text-[#403323] mb-3 flex items-center gap-2">
              <div className="w-1 h-4 bg-[#403323] rounded"></div>
              Période du blocage
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-gray-600 mb-1 block">Date de début *</label>
                <input
                  type="date"
                  className="w-full px-3 py-2 border border-[#e6e6e6] rounded-lg text-sm focus:outline-none focus:border-[#ff7f27]"
                />
              </div>
              <div>
                <label className="text-xs text-gray-600 mb-1 block">Date de fin *</label>
                <input
                  type="date"
                  className="w-full px-3 py-2 border border-[#e6e6e6] rounded-lg text-sm focus:outline-none focus:border-[#ff7f27]"
                />
              </div>
            </div>
            <div className="mt-2 text-xs text-gray-500">
              Durée estimée: 7 jours
            </div>
          </div>

          {/* Notification Option */}
          <div className="bg-[#f5f5f5] rounded-lg p-4">
            <label className="flex items-start gap-3 cursor-pointer">
              <input type="checkbox" className="mt-1" defaultChecked />
              <div>
                <div className="text-sm text-[#403323] mb-1">Notifier l'équipe</div>
                <div className="text-xs text-gray-600">
                  Envoyer une notification à l'équipe de maintenance et de gestion
                </div>
              </div>
            </label>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-end gap-3 p-6 border-t border-[#e6e6e6] bg-[#f5f5f5]">
          <button className="px-5 py-2 border border-[#e6e6e6] rounded-lg text-sm text-[#403323] hover:bg-white transition-colors">
            Annuler
          </button>
          <button className="px-5 py-2 bg-[#ff7f27] text-white rounded-lg text-sm hover:bg-[#e66f1f] transition-colors">
            Confirmer le blocage
          </button>
        </div>
      </div>
    </>
  );
}