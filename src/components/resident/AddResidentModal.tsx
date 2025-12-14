import { X, Upload } from "lucide-react";

export function AddResidentModal() {
  return (
    <div className="flex-1 p-6 overflow-y-auto">
      <div className="max-w-full flex items-center justify-center min-h-full">
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
        
        {/* Modal */}
        <div className="relative w-[760px] bg-white rounded-xl shadow-2xl max-h-[90vh] overflow-hidden flex flex-col">
          {/* Modal Header */}
          <div className="flex items-center justify-between p-6 border-b border-[#e6e6e6]">
            <h2 className="text-lg text-[#403323]">Ajouter un nouveau pensionnaire</h2>
            <button className="p-2 hover:bg-[#f5f5f5] rounded-lg transition-colors">
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>

          {/* Modal Content */}
          <div className="p-6 overflow-y-auto">
            {/* Photo Upload */}
            <div className="mb-6">
              <label className="text-sm text-[#403323] mb-2 block">Photo du pensionnaire</label>
              <div className="flex items-center gap-4">
                <div className="w-24 h-24 bg-[#f5f5f5] rounded-full flex items-center justify-center border-2 border-dashed border-[#e6e6e6]">
                  <Upload className="w-8 h-8 text-gray-400" />
                </div>
                <button className="px-4 py-2 border border-[#e6e6e6] rounded-lg text-sm text-[#403323] hover:bg-[#f5f5f5] transition-colors">
                  Choisir une photo
                </button>
              </div>
            </div>

            {/* Personal Information */}
            <div className="mb-6">
              <h3 className="text-sm text-[#403323] mb-3 flex items-center gap-2">
                <div className="w-1 h-4 bg-[#38712c] rounded"></div>
                Informations personnelles
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-gray-600 mb-1 block">Nom *</label>
                  <input
                    type="text"
                    placeholder="Martin"
                    className="w-full px-3 py-2 border border-[#e6e6e6] rounded-lg text-sm focus:outline-none focus:border-[#38712c]"
                  />
                </div>
                <div>
                  <label className="text-xs text-gray-600 mb-1 block">Prénom *</label>
                  <input
                    type="text"
                    placeholder="Sophie"
                    className="w-full px-3 py-2 border border-[#e6e6e6] rounded-lg text-sm focus:outline-none focus:border-[#38712c]"
                  />
                </div>
                <div>
                  <label className="text-xs text-gray-600 mb-1 block">Date de naissance *</label>
                  <input
                    type="date"
                    className="w-full px-3 py-2 border border-[#e6e6e6] rounded-lg text-sm focus:outline-none focus:border-[#38712c]"
                  />
                </div>
                <div>
                  <label className="text-xs text-gray-600 mb-1 block">Genre *</label>
                  <select className="w-full px-3 py-2 border border-[#e6e6e6] rounded-lg text-sm focus:outline-none focus:border-[#38712c]">
                    <option>Sélectionner</option>
                    <option>Masculin</option>
                    <option>Féminin</option>
                    <option>Autre</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="mb-6">
              <h3 className="text-sm text-[#403323] mb-3 flex items-center gap-2">
                <div className="w-1 h-4 bg-[#ff7f27] rounded"></div>
                Coordonnées
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-gray-600 mb-1 block">Téléphone *</label>
                  <input
                    type="tel"
                    placeholder="+33 6 12 34 56 78"
                    className="w-full px-3 py-2 border border-[#e6e6e6] rounded-lg text-sm focus:outline-none focus:border-[#38712c]"
                  />
                </div>
                <div>
                  <label className="text-xs text-gray-600 mb-1 block">Email *</label>
                  <input
                    type="email"
                    placeholder="sophie.martin@email.com"
                    className="w-full px-3 py-2 border border-[#e6e6e6] rounded-lg text-sm focus:outline-none focus:border-[#38712c]"
                  />
                </div>
                <div className="col-span-2">
                  <label className="text-xs text-gray-600 mb-1 block">Contact d'urgence *</label>
                  <div className="grid grid-cols-2 gap-3">
                    <input
                      type="text"
                      placeholder="Nom du contact"
                      className="w-full px-3 py-2 border border-[#e6e6e6] rounded-lg text-sm focus:outline-none focus:border-[#38712c]"
                    />
                    <input
                      type="tel"
                      placeholder="Téléphone"
                      className="w-full px-3 py-2 border border-[#e6e6e6] rounded-lg text-sm focus:outline-none focus:border-[#38712c]"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Meal Status */}
            <div className="mb-6">
              <h3 className="text-sm text-[#403323] mb-3 flex items-center gap-2">
                <div className="w-1 h-4 bg-[#403323] rounded"></div>
                Statut de pension *
              </h3>
              <div className="space-y-2">
                <label className="flex items-center gap-3 p-3 border border-[#e6e6e6] rounded-lg cursor-pointer hover:bg-[#f5f5f5] transition-colors">
                  <input type="radio" name="meal-status" className="w-4 h-4" />
                  <div className="flex-1">
                    <div className="text-sm text-[#403323]">Pension complète</div>
                    <div className="text-xs text-gray-500">3 repas par jour inclus</div>
                  </div>
                  <div className="text-sm text-[#38712c]">+€200/mois</div>
                </label>
                <label className="flex items-center gap-3 p-3 border border-[#e6e6e6] rounded-lg cursor-pointer hover:bg-[#f5f5f5] transition-colors">
                  <input type="radio" name="meal-status" className="w-4 h-4" />
                  <div className="flex-1">
                    <div className="text-sm text-[#403323]">Demi-pension</div>
                    <div className="text-xs text-gray-500">Petit-déjeuner et déjeuner</div>
                  </div>
                  <div className="text-sm text-[#ff7f27]">+€100/mois</div>
                </label>
              </div>
            </div>

            {/* Stay Information */}
            <div className="mb-2">
              <h3 className="text-sm text-[#403323] mb-3 flex items-center gap-2">
                <div className="w-1 h-4 bg-[#38712c] rounded"></div>
                Informations de séjour
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-gray-600 mb-1 block">Date d'entrée *</label>
                  <input
                    type="date"
                    className="w-full px-3 py-2 border border-[#e6e6e6] rounded-lg text-sm focus:outline-none focus:border-[#38712c]"
                  />
                </div>
                <div>
                  <label className="text-xs text-gray-600 mb-1 block">Date de sortie prévue</label>
                  <input
                    type="date"
                    className="w-full px-3 py-2 border border-[#e6e6e6] rounded-lg text-sm focus:outline-none focus:border-[#38712c]"
                  />
                </div>
              </div>
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