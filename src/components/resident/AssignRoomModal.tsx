import { X, Bed, Users, Wifi, AirVent, AlertTriangle, Home, Calendar } from "lucide-react";
import { useState } from "react";

interface AssignRoomModalProps {
  onClose: () => void;
  onAssign?: (data: any) => void;
  residentName?: string;
}

export function AssignRoomModal({ onClose, onAssign, residentName = "Sophie Martin" }: AssignRoomModalProps) {
  const [formData, setFormData] = useState({
    building: "",
    floor: "",
    room: "",
    reason: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logique d'assignation
    if (onAssign) onAssign(formData);
    onClose();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Overlay avec animation */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />
      
      {/* Modal avec animation */}
      <div className="relative w-full max-w-3xl bg-white rounded-lg shadow-xl max-h-[90vh] overflow-hidden flex flex-col z-10 transform transition-all duration-300 scale-100">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-white">
          <div>
            <h2 className="text-lg font-semibold text-[#403323]">Assigner une chambre</h2>
            <p className="text-sm text-gray-500 mt-1">Pensionnaire: <span className="font-medium">{residentName}</span></p>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
            aria-label="Fermer"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* Modal Content */}
        <form onSubmit={handleSubmit} className="p-4 md:p-6 overflow-y-auto flex-1 bg-gray-50">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Colonne de gauche - Sélection */}
            <div className="space-y-6">
              {/* Sélection de chambre */}
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <h3 className="text-sm font-medium text-[#403323] mb-4 flex items-center gap-2">
                  <Home className="w-4 h-4" />
                  Sélectionner une chambre
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="text-xs text-gray-600 mb-1 block">Bâtiment *</label>
                    <select 
                      name="building"
                      value={formData.building}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-[#38712c] focus:ring-1 focus:ring-[#38712c]"
                      required
                    >
                      <option value="">Sélectionner un bâtiment</option>
                      <option value="A">Bâtiment A</option>
                      <option value="B">Bâtiment B</option>
                      <option value="C">Bâtiment C</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-xs text-gray-600 mb-1 block">Étage *</label>
                    <select 
                      name="floor"
                      value={formData.floor}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-[#38712c] focus:ring-1 focus:ring-[#38712c]"
                      required
                    >
                      <option value="">Sélectionner un étage</option>
                      <option value="1">Étage 1</option>
                      <option value="2">Étage 2</option>
                      <option value="3">Étage 3</option>
                      <option value="4">Étage 4</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-xs text-gray-600 mb-1 block">Chambre *</label>
                    <select 
                      name="room"
                      value={formData.room}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-[#38712c] focus:ring-1 focus:ring-[#38712c]"
                      required
                    >
                      <option value="">Sélectionner une chambre</option>
                      <option value="104">Ch. 104</option>
                      <option value="105">Ch. 105</option>
                      <option value="106">Ch. 106</option>
                      <option value="207">Ch. 207</option>
                      <option value="215">Ch. 215</option>
                      <option value="310">Ch. 310</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Raison d'assignation */}
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <h3 className="text-sm font-medium text-[#403323] mb-4 flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Raison de l'assignation
                </h3>
                <div>
                  <label className="text-xs text-gray-600 mb-1 block">Description *</label>
                  <textarea
                    name="reason"
                    placeholder="Ex: Nouvelle arrivée, changement de chambre demandé, problème technique..."
                    value={formData.reason}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-[#38712c] focus:ring-1 focus:ring-[#38712c] h-32 resize-none"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Colonne de droite - Aperçu */}
            <div>
              {/* Aperçu de la chambre */}
              <div className="bg-white rounded-lg p-4 border border-gray-200 h-full">
                <h3 className="text-sm font-medium text-[#403323] mb-4 flex items-center gap-2">
                  <Bed className="w-4 h-4" />
                  Aperçu de la chambre
                </h3>
                
                {/* Header de la chambre */}
                <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-200">
                  <div>
                    <div className="text-lg font-semibold text-[#403323]">Chambre 104</div>
                    <div className="text-sm text-gray-500">Bâtiment A - Étage 1</div>
                  </div>
                  <span className="px-3 py-1 bg-[#38712c]/10 text-[#38712c] rounded-full text-xs font-medium">
                    Disponible
                  </span>
                </div>

                {/* Détails */}
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-[#38712c]/10 rounded-lg flex items-center justify-center">
                        <Bed className="w-5 h-5 text-[#38712c]" />
                      </div>
                      <div>
                        <div className="text-xs text-gray-500">Type</div>
                        <div className="text-sm font-medium text-[#403323]">Chambre simple</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-[#ff7f27]/10 rounded-lg flex items-center justify-center">
                        <Users className="w-5 h-5 text-[#ff7f27]" />
                      </div>
                      <div>
                        <div className="text-xs text-gray-500">Capacité</div>
                        <div className="text-sm font-medium text-[#403323]">1 personne</div>
                      </div>
                    </div>
                  </div>

                  {/* Équipements */}
                  <div>
                    <div className="text-xs text-gray-500 mb-2">Équipements inclus</div>
                    <div className="flex flex-wrap gap-2">
                      <span className="inline-flex items-center gap-1 px-2 py-1 bg-gray-100 rounded text-xs text-gray-700">
                        <Wifi className="w-3 h-3" />
                        Wi-Fi
                      </span>
                      <span className="inline-flex items-center gap-1 px-2 py-1 bg-gray-100 rounded text-xs text-gray-700">
                        <AirVent className="w-3 h-3" />
                        Climatisation
                      </span>
                      <span className="inline-flex items-center gap-1 px-2 py-1 bg-gray-100 rounded text-xs text-gray-700">
                        <Bed className="w-3 h-3" />
                        Lit simple
                      </span>
                    </div>
                  </div>

                  {/* Statut */}
                  <div className="pt-4 border-t border-gray-200">
                    <div className="text-xs text-gray-500 mb-2">Occupation actuelle</div>
                    <div className="text-sm text-[#38712c] font-medium">Chambre disponible</div>
                  </div>

                  {/* Avertissement (optionnel) */}
                  <div className="bg-[#ff7f27]/10 border border-[#ff7f27]/20 rounded-lg p-3 mt-4">
                    <div className="flex gap-2">
                      <AlertTriangle className="w-4 h-4 text-[#ff7f27] flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="text-xs font-medium text-[#403323] mb-1">Vérification nécessaire</div>
                        <div className="text-xs text-gray-600">
                          Vérifiez la disponibilité et la compatibilité avant d'assigner.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>

        {/* Modal Footer */}
        <div className="flex items-center justify-end gap-3 p-4 border-t border-gray-200 bg-white">
          <button 
            type="button"
            onClick={onClose}
            className="px-5 py-2 border border-gray-300 rounded-lg text-sm text-[#403323] hover:bg-gray-50 transition-colors"
          >
            Annuler
          </button>
          <button 
            type="submit"
            onClick={handleSubmit}
            className="px-5 py-2 bg-[#38712c] text-white rounded-lg text-sm font-medium hover:bg-[#2d5a23] transition-colors"
          >
            Confirmer l'assignation
          </button>
        </div>
      </div>
    </div>
  );
}