import { X, Upload, User, Phone, Mail, Calendar, MapPin } from "lucide-react";
import { useState } from "react";

interface AddResidentModalProps {
  onClose: () => void;
  onSave?: (data: any) => void;
}

export function AddResidentModal({ onClose, onSave }: AddResidentModalProps) {
  const [formData, setFormData] = useState({
    lastName: "",
    firstName: "",
    birthDate: "",
    gender: "",
    phone: "",
    email: "",
    emergencyContactName: "",
    emergencyContactPhone: "",
    mealStatus: "full-board",
    entryDate: "",
    exitDate: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSave) onSave(formData);
    onClose();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
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
      
      {/* Modal avec largeur réduite */}
      <div className="relative w-full max-w-2xl bg-white rounded-lg shadow-xl max-h-[90vh] overflow-hidden flex flex-col z-10 transform transition-all duration-300 scale-100">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-white">
          <div>
            <h2 className="text-lg font-semibold text-[#403323]">Ajouter un nouveau pensionnaire</h2>
            <p className="text-sm text-gray-500 mt-1">Remplissez les informations ci-dessous</p>
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
        <form onSubmit={handleSubmit} className="p-4 overflow-y-auto flex-1 bg-gray-50">
          <div className="space-y-6">
            {/* Informations personnelles */}
            <div className="bg-white rounded-lg p-4 border border-gray-200">
              <h3 className="text-sm font-medium text-[#403323] mb-4 flex items-center gap-2">
                <User className="w-4 h-4" />
                Informations personnelles
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-gray-600 mb-1 block">Nom *</label>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Martin"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-[#38712c] focus:ring-1 focus:ring-[#38712c]"
                    required
                  />
                </div>
                <div>
                  <label className="text-xs text-gray-600 mb-1 block">Prénom *</label>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="Sophie"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-[#38712c] focus:ring-1 focus:ring-[#38712c]"
                    required
                  />
                </div>
                <div>
                  <label className="text-xs text-gray-600 mb-1 block">Date de naissance *</label>
                  <input
                    type="date"
                    name="birthDate"
                    value={formData.birthDate}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-[#38712c] focus:ring-1 focus:ring-[#38712c]"
                    required
                  />
                </div>
                <div>
                  <label className="text-xs text-gray-600 mb-1 block">Genre *</label>
                  <select 
                    name="gender"
                    value={formData.gender}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-[#38712c] focus:ring-1 focus:ring-[#38712c]"
                    required
                  >
                    <option value="">Sélectionner</option>
                    <option value="male">Masculin</option>
                    <option value="female">Féminin</option>
                    <option value="other">Autre</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Coordonnées */}
            <div className="bg-white rounded-lg p-4 border border-gray-200">
              <h3 className="text-sm font-medium text-[#403323] mb-4 flex items-center gap-2">
                <Phone className="w-4 h-4" />
                Coordonnées
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="text-xs text-gray-600 mb-1 block">Téléphone *</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+33 6 12 34 56 78"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-[#38712c] focus:ring-1 focus:ring-[#38712c]"
                    required
                  />
                </div>
                <div>
                  <label className="text-xs text-gray-600 mb-1 block">Email *</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="sophie.martin@email.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-[#38712c] focus:ring-1 focus:ring-[#38712c]"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Contact d'urgence */}
            <div className="bg-white rounded-lg p-4 border border-gray-200">
              <h3 className="text-sm font-medium text-[#403323] mb-4 flex items-center gap-2">
                <User className="w-4 h-4" />
                Contact d'urgence
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="text-xs text-gray-600 mb-1 block">Nom du contact *</label>
                  <input
                    type="text"
                    name="emergencyContactName"
                    placeholder="Marie Martin"
                    value={formData.emergencyContactName}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-[#38712c] focus:ring-1 focus:ring-[#38712c]"
                    required
                  />
                </div>
                <div>
                  <label className="text-xs text-gray-600 mb-1 block">Téléphone *</label>
                  <input
                    type="tel"
                    name="emergencyContactPhone"
                    placeholder="+33 6 98 76 54 32"
                    value={formData.emergencyContactPhone}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-[#38712c] focus:ring-1 focus:ring-[#38712c]"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Statut de pension */}
            <div className="bg-white rounded-lg p-4 border border-gray-200">
              <h3 className="text-sm font-medium text-[#403323] mb-4 flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Statut de pension *
              </h3>
              <div className="space-y-3">
                <label className="flex items-center justify-between p-3 border border-gray-300 rounded-lg cursor-pointer hover:border-[#38712c] transition-colors">
                  <div className="flex items-center gap-3">
                    <input 
                      type="radio" 
                      name="mealStatus"
                      value="full-board"
                      checked={formData.mealStatus === "full-board"}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-[#38712c]" 
                    />
                    <div>
                      <div className="text-sm font-medium text-[#403323]">Pension complète</div>
                      <div className="text-xs text-gray-500">3 repas par jour inclus</div>
                    </div>
                  </div>
                  <div className="text-sm font-medium text-[#38712c]">+€200/mois</div>
                </label>
                <label className="flex items-center justify-between p-3 border border-gray-300 rounded-lg cursor-pointer hover:border-[#ff7f27] transition-colors">
                  <div className="flex items-center gap-3">
                    <input 
                      type="radio" 
                      name="mealStatus"
                      value="half-board"
                      checked={formData.mealStatus === "half-board"}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-[#ff7f27]" 
                    />
                    <div>
                      <div className="text-sm font-medium text-[#403323]">Demi-pension</div>
                      <div className="text-xs text-gray-500">Petit-déjeuner et déjeuner</div>
                    </div>
                  </div>
                  <div className="text-sm font-medium text-[#ff7f27]">+€100/mois</div>
                </label>
              </div>
            </div>

            {/* Informations de séjour */}
            <div className="bg-white rounded-lg p-4 border border-gray-200">
              <h3 className="text-sm font-medium text-[#403323] mb-4 flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Informations de séjour
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-gray-600 mb-1 block">Date d'entrée *</label>
                  <input
                    type="date"
                    name="entryDate"
                    value={formData.entryDate}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-[#38712c] focus:ring-1 focus:ring-[#38712c]"
                    required
                  />
                </div>
                <div>
                  <label className="text-xs text-gray-600 mb-1 block">Date de sortie prévue</label>
                  <input
                    type="date"
                    name="exitDate"
                    value={formData.exitDate}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-[#38712c] focus:ring-1 focus:ring-[#38712c]"
                  />
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
            Enregistrer le pensionnaire
          </button>
        </div>
      </div>
    </div>
  );
}