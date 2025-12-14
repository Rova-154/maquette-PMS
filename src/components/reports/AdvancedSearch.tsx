import React, { useState } from "react";
import { Search, Filter, User, Home, Building, Calendar, Mail, Phone, MapPin } from "lucide-react";

export default function AdvancedSearch() {
  const [searchType, setSearchType] = useState("all");
  const [searchResults, setSearchResults] = useState<any[]>([]);

  const sampleData = {
    pensionnaires: [
      { id: 1, name: "Sophie Martin", room: "Ch. 104 - Bât. A", status: "Actif", email: "sophie@email.com", phone: "+33 6 12 34 56 78", arrival: "01/09/2024" },
      { id: 2, name: "Lucas Dubois", room: "Ch. 207 - Bât. A", status: "Actif", email: "lucas@email.com", phone: "+33 6 23 45 67 89", arrival: "01/12/2024" },
      { id: 3, name: "Emma Leroy", room: "Ch. 315 - Bât. B", status: "Actif", email: "emma@email.com", phone: "+33 6 34 56 78 90", arrival: "01/09/2024" },
    ],
    chambres: [
      { id: 101, number: "101", building: "Bâtiment A", type: "Simple", status: "Occupée", occupant: "Jean Dupont", price: "450€" },
      { id: 102, number: "102", building: "Bâtiment A", type: "Double", status: "Disponible", occupant: null, price: "650€" },
      { id: 201, number: "201", building: "Bâtiment B", type: "Simple", status: "Maintenance", occupant: null, price: "450€" },
    ],
    batiments: [
      { id: 1, name: "Bâtiment A", rooms: 60, occupied: 48, condition: "Excellent", manager: "Pierre Leroy" },
      { id: 2, name: "Bâtiment B", rooms: 40, occupied: 32, condition: "Bon", manager: "Marie Martin" },
      { id: 3, name: "Bâtiment C", rooms: 20, occupied: 16, condition: "Moyen", manager: "Thomas Petit" },
    ],
  };

  const handleSearch = () => {
    // Simulation de recherche
    if (searchType === "pensionnaires") {
      setSearchResults(sampleData.pensionnaires);
    } else if (searchType === "chambres") {
      setSearchResults(sampleData.chambres);
    } else if (searchType === "batiments") {
      setSearchResults(sampleData.batiments);
    } else {
      setSearchResults([...sampleData.pensionnaires, ...sampleData.chambres, ...sampleData.batiments]);
    }
  };

  return (
    <div className="flex-1 p-6 overflow-y-auto">
      <div className="max-w-full">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold text-[#403323]">Recherche Avancée</h1>
            <p className="text-sm text-gray-500 mt-1">Recherchez des pensionnaires, chambres ou bâtiments</p>
          </div>
        </div>

        {/* Barre de recherche principale */}
        <div className="bg-white rounded-xl shadow border border-gray-200 p-6 mb-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Rechercher par nom, chambre, bâtiment, email, téléphone..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#38712c] focus:border-transparent"
                />
              </div>
            </div>
            <button 
              onClick={handleSearch}
              className="px-6 py-3 bg-[#38712c] text-white rounded-lg hover:bg-[#2d5a23] flex items-center gap-2"
            >
              <Search className="w-5 h-5" />
              Rechercher
            </button>
          </div>

          {/* Filtres avancés */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <User className="w-4 h-4 inline mr-2" />
                Type de recherche
              </label>
              <select 
                className="w-full border border-gray-300 rounded-lg px-3 py-2"
                value={searchType}
                onChange={(e) => setSearchType(e.target.value)}
              >
                <option value="all">Tout</option>
                <option value="pensionnaires">Pensionnaires</option>
                <option value="chambres">Chambres</option>
                <option value="batiments">Bâtiments</option>
                <option value="personnel">Personnel</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Calendar className="w-4 h-4 inline mr-2" />
                Date d'arrivée
              </label>
              <input 
                type="date" 
                className="w-full border border-gray-300 rounded-lg px-3 py-2"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Filter className="w-4 h-4 inline mr-2" />
                Statut
              </label>
              <select className="w-full border border-gray-300 rounded-lg px-3 py-2">
                <option>Tous</option>
                <option>Actif</option>
                <option>Inactif</option>
                <option>En attente</option>
                <option>Terminé</option>
              </select>
            </div>
          </div>

          {/* Filtres supplémentaires */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Bâtiment</label>
              <select className="w-full border border-gray-300 rounded-lg px-3 py-2">
                <option>Tous les bâtiments</option>
                <option>Bâtiment A</option>
                <option>Bâtiment B</option>
                <option>Bâtiment C</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Type de chambre</label>
              <select className="w-full border border-gray-300 rounded-lg px-3 py-2">
                <option>Tous types</option>
                <option>Simple</option>
                <option>Double</option>
                <option>Suite</option>
              </select>
            </div>
          </div>

          <div className="flex justify-end mt-6">
            <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 flex items-center gap-2">
              <Filter className="w-4 h-4" />
              Réinitialiser les filtres
            </button>
          </div>
        </div>

        {/* Résultats de recherche */}
        <div className="bg-white rounded-xl shadow border border-gray-200 overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold text-[#403323]">Résultats de la recherche</h2>
              <span className="text-sm text-gray-500">{searchResults.length} résultats trouvés</span>
            </div>
          </div>
          
          <div className="p-6">
            {searchResults.length > 0 ? (
              <div className="space-y-4">
                {searchResults.map((result, index) => (
                  <div key={index} className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
                    {result.name && (
                      // Résultat pensionnaire
                      <div className="flex items-start justify-between">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-[#38712c] rounded-full flex items-center justify-center text-white">
                            <User className="w-6 h-6" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-[#403323]">{result.name}</h3>
                            <div className="flex items-center gap-4 mt-2">
                              <span className="flex items-center gap-1 text-sm text-gray-600">
                                <Home className="w-4 h-4" />
                                {result.room}
                              </span>
                              <span className="flex items-center gap-1 text-sm text-gray-600">
                                <Mail className="w-4 h-4" />
                                {result.email}
                              </span>
                              <span className="flex items-center gap-1 text-sm text-gray-600">
                                <Phone className="w-4 h-4" />
                                {result.phone}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                            result.status === "Actif" 
                              ? "bg-green-100 text-green-800" 
                              : "bg-gray-100 text-gray-800"
                          }`}>
                            {result.status}
                          </span>
                          <p className="text-sm text-gray-500 mt-2">Arrivée: {result.arrival}</p>
                        </div>
                      </div>
                    )}
                    
                    {result.number && (
                      // Résultat chambre
                      <div className="flex items-start justify-between">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                            <Home className="w-6 h-6 text-blue-600" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-[#403323]">Chambre {result.number}</h3>
                            <div className="flex items-center gap-4 mt-2">
                              <span className="flex items-center gap-1 text-sm text-gray-600">
                                <Building className="w-4 h-4" />
                                {result.building}
                              </span>
                              <span className="text-sm text-gray-600">Type: {result.type}</span>
                              <span className="text-sm text-gray-600">Prix: {result.price}/mois</span>
                            </div>
                            {result.occupant && (
                              <p className="text-sm text-gray-600 mt-1">Occupant: {result.occupant}</p>
                            )}
                          </div>
                        </div>
                        <div className="text-right">
                          <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                            result.status === "Disponible" 
                              ? "bg-green-100 text-green-800" 
                              : result.status === "Occupée"
                              ? "bg-blue-100 text-blue-800"
                              : "bg-yellow-100 text-yellow-800"
                          }`}>
                            {result.status}
                          </span>
                        </div>
                      </div>
                    )}
                    
                    {result.rooms && (
                      // Résultat bâtiment
                      <div className="flex items-start justify-between">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                            <Building className="w-6 h-6 text-purple-600" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-[#403323]">{result.name}</h3>
                            <div className="grid grid-cols-2 gap-4 mt-2">
                              <div>
                                <p className="text-sm text-gray-600">Chambres: {result.rooms}</p>
                                <p className="text-sm text-gray-600">Occupées: {result.occupied}</p>
                              </div>
                              <div>
                                <p className="text-sm text-gray-600">Taux: {(result.occupied / result.rooms * 100).toFixed(0)}%</p>
                                <p className="text-sm text-gray-600">Gestionnaire: {result.manager}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                            result.condition === "Excellent" 
                              ? "bg-green-100 text-green-800" 
                              : result.condition === "Bon"
                              ? "bg-blue-100 text-blue-800"
                              : "bg-yellow-100 text-yellow-800"
                          }`}>
                            {result.condition}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <Search className="w-16 h-16 mx-auto mb-4 text-gray-300" />
                <p className="text-gray-500">Aucun résultat trouvé. Essayez une recherche différente.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}