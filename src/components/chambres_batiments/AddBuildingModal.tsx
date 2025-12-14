// components/AddBuildingModal.tsx - VERSION CORRECTE
import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function AddBuildingModal() {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate(-1); // Retour à la page précédente
  };

  return (
    <div className="p-6">
      <div className="max-w-4xl mx-auto">
        {/* En-tête de page */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold text-gray-900">Ajouter un nouveau bâtiment</h1>
            <button 
              onClick={handleClose}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>
          <p className="text-gray-600">Remplissez les informations ci-dessous pour créer un nouveau bâtiment</p>
        </div>

        {/* Formulaire */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-200">
          <div className="p-6">
            {/* Basic Information */}
            <div className="mb-6">
              <h3 className="text-sm text-[#403323] mb-3 flex items-center gap-2">
                <div className="w-1 h-4 bg-[#38712c] rounded"></div>
                Informations de base
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-gray-600 mb-1 block">Nom du bâtiment *</label>
                  <input
                    type="text"
                    placeholder="Bâtiment A"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#38712c] focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="text-xs text-gray-600 mb-1 block">Type *</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#38712c] focus:border-transparent">
                    <option>Sélectionner</option>
                    <option>Bloc</option>
                    <option>Dortoir</option>
                    <option>Autre</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs text-gray-600 mb-1 block">Nombre d'étages *</label>
                  <input
                    type="number"
                    placeholder="4"
                    min="1"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#38712c] focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="text-xs text-gray-600 mb-1 block">Code du bâtiment</label>
                  <input
                    type="text"
                    placeholder="BAT-A"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#38712c] focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            {/* Capacity Information */}
            <div className="mb-6">
              <h3 className="text-sm text-[#403323] mb-3 flex items-center gap-2">
                <div className="w-1 h-4 bg-[#ff7f27] rounded"></div>
                Capacité
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-gray-600 mb-1 block">Nombre total de chambres</label>
                  <input
                    type="number"
                    placeholder="48"
                    min="1"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#38712c] focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="text-xs text-gray-600 mb-1 block">Capacité maximale</label>
                  <input
                    type="number"
                    placeholder="52"
                    min="1"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#38712c] focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            {/* Address & Location */}
            <div className="mb-6">
              <h3 className="text-sm text-[#403323] mb-3 flex items-center gap-2">
                <div className="w-1 h-4 bg-[#403323] rounded"></div>
                Localisation
              </h3>
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label className="text-xs text-gray-600 mb-1 block">Adresse</label>
                  <input
                    type="text"
                    placeholder="123 Rue des Étudiants"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#38712c] focus:border-transparent"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-gray-600 mb-1 block">Code postal</label>
                    <input
                      type="text"
                      placeholder="75001"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#38712c] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-gray-600 mb-1 block">Ville</label>
                    <input
                      type="text"
                      placeholder="Paris"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#38712c] focus:border-transparent"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Description */}
            <div>
              <label className="text-xs text-gray-600 mb-1 block">Description</label>
              <textarea
                placeholder="Informations supplémentaires sur le bâtiment..."
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#38712c] focus:border-transparent h-32 resize-none"
              />
            </div>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-end gap-3 p-6 border-t border-gray-200 bg-gray-50">
            <button 
              onClick={handleClose}
              className="px-5 py-2.5 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Annuler
            </button>
            <button className="px-5 py-2.5 bg-[#38712c] text-white rounded-lg text-sm font-medium hover:bg-[#2d5a23] transition-colors">
              Enregistrer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}