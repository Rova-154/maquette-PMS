import { X, Wifi, AirVent, Tv, Bed, Maximize, DollarSign } from "lucide-react";
import { useState } from "react";

interface AddRoomModalProps {
  onClose: () => void;
  onSave?: (data: any) => void;
}

export function AddRoomModal({ onClose, onSave }: AddRoomModalProps) {
  const [formData, setFormData] = useState({
    roomNumber: "",
    roomCode: "",
    building: "",
    floor: "",
    capacity: "",
    roomType: "standard",
    area: "",
    price: "",
    status: "available",
    wifi: true,
    airConditioning: true,
    television: false,
    singleBed: true,
    desk: false,
    wardrobe: false,
    privateBathroom: false,
    balcony: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSave) onSave(formData);
    onClose();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: checked }));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative w-full max-w-2xl bg-white rounded-lg shadow-xl max-h-[90vh] flex flex-col z-10">
        {/* Header - Fixed */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-white">
          <div>
            <h2 className="text-lg font-semibold text-[#403323]">Ajouter une nouvelle chambre</h2>
            <p className="text-sm text-gray-500 mt-1">Remplissez les informations de la chambre</p>
          </div>
          <button 
            type="button"
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg"
            aria-label="Fermer"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* Contenu - Scrollable */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-4">
            <form onSubmit={handleSubmit}>
              {/* Informations de base */}
              <div className="bg-white rounded-lg p-4 border border-gray-200 mb-4">
                <h3 className="text-sm font-medium text-[#403323] mb-4 flex items-center gap-2">
                  <div className="w-1 h-4 bg-[#38712c] rounded"></div>
                  Informations de base
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-gray-600 mb-1 block">Numéro de chambre *</label>
                    <input
                      type="text"
                      name="roomNumber"
                      placeholder="104"
                      value={formData.roomNumber}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-[#38712c]"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-xs text-gray-600 mb-1 block">Code de la chambre</label>
                    <input
                      type="text"
                      name="roomCode"
                      placeholder="A-104"
                      value={formData.roomCode}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-[#38712c]"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-gray-600 mb-1 block">Bâtiment *</label>
                    <select 
                      name="building"
                      value={formData.building}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-[#38712c]"
                      required
                    >
                      <option value="">Sélectionner</option>
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
                      className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-[#38712c]"
                      required
                    >
                      <option value="">Sélectionner</option>
                      <option value="1">Étage 1</option>
                      <option value="2">Étage 2</option>
                      <option value="3">Étage 3</option>
                      <option value="4">Étage 4</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Capacité et type */}
              <div className="bg-white rounded-lg p-4 border border-gray-200 mb-4">
                <h3 className="text-sm font-medium text-[#403323] mb-4 flex items-center gap-2">
                  <div className="w-1 h-4 bg-[#ff7f27] rounded"></div>
                  Capacité et type
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-gray-600 mb-1 block">Capacité *</label>
                    <select 
                      name="capacity"
                      value={formData.capacity}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-[#38712c]"
                      required
                    >
                      <option value="">Sélectionner</option>
                      <option value="1">1 personne</option>
                      <option value="2">2 personnes</option>
                      <option value="3">3 personnes</option>
                      <option value="4">4 personnes</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-xs text-gray-600 mb-1 block">Type de chambre</label>
                    <select 
                      name="roomType"
                      value={formData.roomType}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-[#38712c]"
                    >
                      <option value="standard">Standard</option>
                      <option value="premium">Premium</option>
                      <option value="suite">Suite</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-xs text-gray-600 mb-1 block">Surface (m²)</label>
                    <div className="relative">
                      <input
                        type="number"
                        name="area"
                        placeholder="18"
                        min="1"
                        value={formData.area}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-[#38712c]"
                      />
                      <Maximize className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs text-gray-600 mb-1 block">Prix mensuel (€)</label>
                    <div className="relative">
                      <input
                        type="number"
                        name="price"
                        placeholder="650"
                        min="0"
                        value={formData.price}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-[#38712c]"
                      />
                      <DollarSign className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Équipements */}
              <div className="bg-white rounded-lg p-4 border border-gray-200 mb-4">
                <h3 className="text-sm font-medium text-[#403323] mb-4 flex items-center gap-2">
                  <div className="w-1 h-4 bg-[#403323] rounded"></div>
                  Équipements
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <label className="flex items-center gap-3 p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                    <input 
                      type="checkbox" 
                      name="wifi"
                      checked={formData.wifi}
                      onChange={handleCheckboxChange}
                      className="w-4 h-4 text-[#38712c] rounded" 
                    />
                    <Wifi className="w-4 h-4 text-[#38712c]" />
                    <span className="text-sm text-[#403323]">Wi-Fi</span>
                  </label>
                  <label className="flex items-center gap-3 p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                    <input 
                      type="checkbox" 
                      name="airConditioning"
                      checked={formData.airConditioning}
                      onChange={handleCheckboxChange}
                      className="w-4 h-4 text-[#38712c] rounded" 
                    />
                    <AirVent className="w-4 h-4 text-[#38712c]" />
                    <span className="text-sm text-[#403323]">Climatisation</span>
                  </label>
                  <label className="flex items-center gap-3 p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                    <input 
                      type="checkbox" 
                      name="television"
                      checked={formData.television}
                      onChange={handleCheckboxChange}
                      className="w-4 h-4 text-[#38712c] rounded" 
                    />
                    <Tv className="w-4 h-4 text-[#38712c]" />
                    <span className="text-sm text-[#403323]">Télévision</span>
                  </label>
                  <label className="flex items-center gap-3 p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                    <input 
                      type="checkbox" 
                      name="singleBed"
                      checked={formData.singleBed}
                      onChange={handleCheckboxChange}
                      className="w-4 h-4 text-[#38712c] rounded" 
                    />
                    <Bed className="w-4 h-4 text-[#38712c]" />
                    <span className="text-sm text-[#403323]">Lit simple</span>
                  </label>
                  <label className="flex items-center gap-3 p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                    <input 
                      type="checkbox" 
                      name="desk"
                      checked={formData.desk}
                      onChange={handleCheckboxChange}
                      className="w-4 h-4 text-[#38712c] rounded" 
                    />
                    <span className="text-sm text-[#403323]">Bureau</span>
                  </label>
                  <label className="flex items-center gap-3 p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                    <input 
                      type="checkbox" 
                      name="wardrobe"
                      checked={formData.wardrobe}
                      onChange={handleCheckboxChange}
                      className="w-4 h-4 text-[#38712c] rounded" 
                    />
                    <span className="text-sm text-[#403323]">Armoire</span>
                  </label>
                  <label className="flex items-center gap-3 p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                    <input 
                      type="checkbox" 
                      name="privateBathroom"
                      checked={formData.privateBathroom}
                      onChange={handleCheckboxChange}
                      className="w-4 h-4 text-[#38712c] rounded" 
                    />
                    <span className="text-sm text-[#403323]">Salle de bain privée</span>
                  </label>
                  <label className="flex items-center gap-3 p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                    <input 
                      type="checkbox" 
                      name="balcony"
                      checked={formData.balcony}
                      onChange={handleCheckboxChange}
                      className="w-4 h-4 text-[#38712c] rounded" 
                    />
                    <span className="text-sm text-[#403323]">Balcon</span>
                  </label>
                </div>
              </div>

              {/* Statut initial */}
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div>
                  <label className="text-xs text-gray-600 mb-2 block">Statut initial *</label>
                  <select 
                    name="status"
                    value={formData.status}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-[#38712c]"
                    required
                  >
                    <option value="available">Disponible</option>
                    <option value="maintenance">Maintenance</option>
                    <option value="reserved">Réservée</option>
                  </select>
                </div>
              </div>

              {/* Bouton de soumission masqué pour le formulaire */}
              <button type="submit" className="hidden">Submit</button>
            </form>
          </div>
        </div>

        {/* Footer - Fixed */}
        <div className="flex items-center justify-end gap-3 p-4 border-t border-gray-200 bg-white">
          <button 
            type="button"
            onClick={onClose}
            className="px-5 py-2 border border-gray-300 rounded-lg text-sm text-[#403323] hover:bg-gray-50"
          >
            Annuler
          </button>
          <button 
            onClick={handleSubmit}
            className="px-5 py-2 bg-[#38712c] text-white rounded-lg text-sm font-medium hover:bg-[#2d5a23]"
          >
            Enregistrer la chambre
          </button>
        </div>
      </div>
    </div>
  );
}