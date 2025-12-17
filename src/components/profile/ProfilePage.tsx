// ProfilePage.tsx - New profile page component
import { User, Mail, Phone, MapPin, Calendar, Edit } from "lucide-react";

export default function ProfilePage() {
  return (
    <div className="p-4 md:p-6 max-w-4xl mx-auto">
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        {/* Profile header */}
        <div className="bg-gradient-to-r from-[#38712c] to-[#4c9c3d] p-6 md:p-8">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            <div className="relative">
              <div className="w-24 h-24 md:w-32 md:h-32 bg-white rounded-full flex items-center justify-center">
                <User className="w-12 h-12 md:w-16 md:h-16 text-[#38712c]" />
              </div>
              <button className="absolute bottom-0 right-0 bg-white p-2 rounded-full shadow-md hover:bg-gray-50 transition-colors">
                <Edit className="w-4 h-4 text-gray-600" />
              </button>
            </div>
            
            <div className="text-white text-center md:text-left">
              <h1 className="text-2xl md:text-3xl font-bold">Administrateur</h1>
              <p className="text-white/90 mt-1">Admin Principal</p>
              <p className="text-white/80 mt-2">Campus Housing PMS</p>
            </div>
          </div>
        </div>
        
        {/* Profile content */}
        <div className="p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Personal Information */}
            <div className="space-y-4">
              <h2 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                <User className="w-5 h-5" />
                Informations personnelles
              </h2>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="font-medium">admin@campus-housing.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-500">Téléphone</p>
                    <p className="font-medium">+33 1 23 45 67 89</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-500">Membre depuis</p>
                    <p className="font-medium">15 Janvier 2023</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Account Information */}
            <div className="space-y-4">
              <h2 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                Informations du compte
              </h2>
              
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-gray-500">Rôle</p>
                  <div className="inline-block bg-[#38712c]/10 text-[#38712c] px-3 py-1 rounded-full text-sm font-medium mt-1">
                    Administrateur
                  </div>
                </div>
                
                <div>
                  <p className="text-sm text-gray-500">Permissions</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">Tous les accès</span>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Super admin</span>
                    <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs">Gestion complète</span>
                  </div>
                </div>
                
                <div>
                  <p className="text-sm text-gray-500">Statut</p>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="font-medium text-green-600">Actif</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Action buttons */}
          <div className="mt-8 pt-6 border-t border-gray-200 flex flex-col sm:flex-row gap-3">
            <button className="flex-1 bg-[#38712c] text-white py-3 px-4 rounded-lg font-medium hover:bg-[#2d5a24] transition-colors">
              Modifier le profil
            </button>
            <button className="flex-1 border border-gray-300 text-gray-700 py-3 px-4 rounded-lg font-medium hover:bg-gray-50 transition-colors">
              Changer le mot de passe
            </button>
            <button className="flex-1 border border-red-300 text-red-600 py-3 px-4 rounded-lg font-medium hover:bg-red-50 transition-colors">
              Désactiver le compte
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}