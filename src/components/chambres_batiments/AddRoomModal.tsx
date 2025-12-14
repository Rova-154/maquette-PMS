import { X, Wifi, AirVent, Tv, Bed } from "lucide-react";

export function AddRoomModal() {
  return (
    <div className="flex-1 p-6 overflow-y-auto">
      <div className="max-w-full flex items-center justify-center min-h-full">
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
        
        {/* Modal */}
        <div className="relative w-[760px] bg-white rounded-xl shadow-2xl">
          {/* Modal Header */}
          <div className="flex items-center justify-between p-6 border-b border-[#e6e6e6]">
            <h2 className="text-lg text-[#403323]">Ajouter une nouvelle chambre</h2>
            <button className="p-2 hover:bg-[#f5f5f5] rounded-lg transition-colors">
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>

          {/* Modal Content */}
          <div className="p-6">
            {/* Basic Information */}
            <div className="mb-6">
              <h3 className="text-sm text-[#403323] mb-3 flex items-center gap-2">
                <div className="w-1 h-4 bg-[#38712c] rounded"></div>
                Informations de base
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-gray-600 mb-1 block">Numéro de chambre *</label>
                  <input
                    type="text"
                    placeholder="104"
                    className="w-full px-3 py-2 border border-[#e6e6e6] rounded-lg text-sm focus:outline-none focus:border-[#38712c]"
                  />
                </div>
                <div>
                  <label className="text-xs text-gray-600 mb-1 block">Code de la chambre</label>
                  <input
                    type="text"
                    placeholder="A-104"
                    className="w-full px-3 py-2 border border-[#e6e6e6] rounded-lg text-sm focus:outline-none focus:border-[#38712c]"
                  />
                </div>
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
              </div>
            </div>

            {/* Capacity & Type */}
            <div className="mb-6">
              <h3 className="text-sm text-[#403323] mb-3 flex items-center gap-2">
                <div className="w-1 h-4 bg-[#ff7f27] rounded"></div>
                Capacité et type
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-gray-600 mb-1 block">Capacité *</label>
                  <select className="w-full px-3 py-2 border border-[#e6e6e6] rounded-lg text-sm focus:outline-none focus:border-[#38712c]">
                    <option>Sélectionner</option>
                    <option>1 personne</option>
                    <option>2 personnes</option>
                    <option>3 personnes</option>
                    <option>4 personnes</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs text-gray-600 mb-1 block">Type de chambre</label>
                  <select className="w-full px-3 py-2 border border-[#e6e6e6] rounded-lg text-sm focus:outline-none focus:border-[#38712c]">
                    <option>Standard</option>
                    <option>Premium</option>
                    <option>Suite</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs text-gray-600 mb-1 block">Surface (m²)</label>
                  <input
                    type="number"
                    placeholder="18"
                    min="1"
                    className="w-full px-3 py-2 border border-[#e6e6e6] rounded-lg text-sm focus:outline-none focus:border-[#38712c]"
                  />
                </div>
                <div>
                  <label className="text-xs text-gray-600 mb-1 block">Prix mensuel (€)</label>
                  <input
                    type="number"
                    placeholder="650"
                    min="0"
                    className="w-full px-3 py-2 border border-[#e6e6e6] rounded-lg text-sm focus:outline-none focus:border-[#38712c]"
                  />
                </div>
              </div>
            </div>

            {/* Equipment */}
            <div className="mb-6">
              <h3 className="text-sm text-[#403323] mb-3 flex items-center gap-2">
                <div className="w-1 h-4 bg-[#403323] rounded"></div>
                Équipements
              </h3>
              <div className="grid grid-cols-2 gap-3">
                <label className="flex items-center gap-3 p-3 border border-[#e6e6e6] rounded-lg cursor-pointer hover:bg-[#f5f5f5] transition-colors">
                  <input type="checkbox" className="w-4 h-4" defaultChecked />
                  <Wifi className="w-4 h-4 text-[#38712c]" />
                  <span className="text-sm text-[#403323]">Wi-Fi</span>
                </label>
                <label className="flex items-center gap-3 p-3 border border-[#e6e6e6] rounded-lg cursor-pointer hover:bg-[#f5f5f5] transition-colors">
                  <input type="checkbox" className="w-4 h-4" defaultChecked />
                  <AirVent className="w-4 h-4 text-[#38712c]" />
                  <span className="text-sm text-[#403323]">Climatisation</span>
                </label>
                <label className="flex items-center gap-3 p-3 border border-[#e6e6e6] rounded-lg cursor-pointer hover:bg-[#f5f5f5] transition-colors">
                  <input type="checkbox" className="w-4 h-4" />
                  <Tv className="w-4 h-4 text-[#38712c]" />
                  <span className="text-sm text-[#403323]">Télévision</span>
                </label>
                <label className="flex items-center gap-3 p-3 border border-[#e6e6e6] rounded-lg cursor-pointer hover:bg-[#f5f5f5] transition-colors">
                  <input type="checkbox" className="w-4 h-4" defaultChecked />
                  <Bed className="w-4 h-4 text-[#38712c]" />
                  <span className="text-sm text-[#403323]">Lit simple</span>
                </label>
                <label className="flex items-center gap-3 p-3 border border-[#e6e6e6] rounded-lg cursor-pointer hover:bg-[#f5f5f5] transition-colors">
                  <input type="checkbox" className="w-4 h-4" />
                  <span className="text-sm text-[#403323]">Bureau</span>
                </label>
                <label className="flex items-center gap-3 p-3 border border-[#e6e6e6] rounded-lg cursor-pointer hover:bg-[#f5f5f5] transition-colors">
                  <input type="checkbox" className="w-4 h-4" />
                  <span className="text-sm text-[#403323]">Armoire</span>
                </label>
                <label className="flex items-center gap-3 p-3 border border-[#e6e6e6] rounded-lg cursor-pointer hover:bg-[#f5f5f5] transition-colors">
                  <input type="checkbox" className="w-4 h-4" />
                  <span className="text-sm text-[#403323]">Salle de bain privée</span>
                </label>
                <label className="flex items-center gap-3 p-3 border border-[#e6e6e6] rounded-lg cursor-pointer hover:bg-[#f5f5f5] transition-colors">
                  <input type="checkbox" className="w-4 h-4" />
                  <span className="text-sm text-[#403323]">Balcon</span>
                </label>
              </div>
            </div>

            {/* Initial Status */}
            <div>
              <label className="text-xs text-gray-600 mb-2 block">Statut initial *</label>
              <select className="w-full px-3 py-2 border border-[#e6e6e6] rounded-lg text-sm focus:outline-none focus:border-[#38712c]">
                <option>Disponible</option>
                <option>Maintenance</option>
                <option>Réservée</option>
              </select>
            </div>
          </div>

          {/* Modal Footer */}
          <div className="flex items-center justify-end gap-3 p-6 border-t border-[#e6e6e6] bg-[#f5f5f5]">
            <button className="px-5 py-2 border border-[#e6e6e6] rounded-lg text-sm text-[#403323] hover:bg-white transition-colors">
              Annuler
            </button>
            <button className="px-5 py-2 bg-[#38712c] text-white rounded-lg text-sm hover:bg-[#2d5a23] transition-colors">
              Enregistrer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}