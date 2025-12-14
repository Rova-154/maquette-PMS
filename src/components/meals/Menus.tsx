import { Plus, Edit, Trash2, Users, Calendar } from "lucide-react";

export function Menus() {
  const menus = [
    { 
      id: 1, 
      day: "Lundi", 
      date: "10/02/2025",
      breakfast: "Pain complet, Confiture, Café/Thé, Fruits", 
      lunch: "Poulet rôti, Riz basmati, Légumes vapeur, Salade verte", 
      dinner: "Soupe de légumes, Quiche lorraine, Salade composée",
      assigned: 58,
      diet: "Standard et Végétarien"
    },
    { 
      id: 2, 
      day: "Mardi", 
      date: "11/02/2025",
      breakfast: "Céréales, Lait, Jus d'orange, Yaourt", 
      lunch: "Poisson grillé, Purée maison, Haricots verts, Compote", 
      dinner: "Pâtes carbonara, Salade tomate/mozza, Pain à l'ail",
      assigned: 56,
      diet: "Standard"
    },
    { 
      id: 3, 
      day: "Mercredi", 
      date: "12/02/2025",
      breakfast: "Œufs brouillés, Pain grillé, Jus de fruits", 
      lunch: "Steak haché, Frites maison, Salade coleslaw", 
      dinner: "Sandwiches variés, Soupe du jour, Fromage",
      assigned: 54,
      diet: "Standard et Sans gluten"
    },
    { 
      id: 4, 
      day: "Jeudi", 
      date: "13/02/2025",
      breakfast: "Pancakes, Sirop d'érable, Café/Thé, Fruits", 
      lunch: "Lasagnes, Salade italienne, Pain focaccia", 
      dinner: "Pizza margherita, Salade verte, Tiramisu",
      assigned: 58,
      diet: "Végétarien"
    },
    { 
      id: 5, 
      day: "Vendredi", 
      date: "14/02/2025",
      breakfast: "Viennoiseries, Café/Chocolat, Fruits secs", 
      lunch: "Couscous royal, Salade mechouia, Fruits frais", 
      dinner: "Filet de saumon, Riz pilaf, Ratatouille",
      assigned: 57,
      diet: "Standard et Halal"
    },
  ];

  return (
    <div className="flex-1 p-6 overflow-y-auto">
      <div className="max-w-full">
        {/* Header avec titre et boutons */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-xl text-[#403323]">Gestion des menus</h1>
            <p className="text-sm text-gray-500 mt-1">Planification et association des repas</p>
          </div>
          <div className="flex gap-2">
            <button className="px-4 py-2 border border-[#e6e6e6] rounded-lg hover:bg-white transition-colors text-sm text-[#403323] flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              Planifier la semaine
            </button>
            <button className="px-4 py-2 bg-[#ff7f27] text-white rounded-lg hover:bg-[#e66f1f] transition-colors text-sm flex items-center gap-2">
              <Plus className="w-4 h-4" />
              Nouveau menu
            </button>
          </div>
        </div>

        {/* Filtres et période */}
        <div className="bg-white rounded-xl p-4 mb-6 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[#403323]" />
              <span className="text-sm text-[#403323]">Semaine du 10 au 14 février 2025</span>
            </div>
            <div className="ml-auto flex gap-2">
              <select className="text-xs border border-[#e6e6e6] rounded px-3 py-1.5 bg-white text-[#403323]">
                <option>Tous les régimes</option>
                <option>Standard</option>
                <option>Végétarien</option>
                <option>Sans gluten</option>
                <option>Halal</option>
              </select>
              <button className="px-3 py-1.5 border border-[#e6e6e6] rounded text-xs text-[#403323] hover:bg-[#f5f5f5]">
                Copier semaine précédente
              </button>
            </div>
          </div>
        </div>

        {/* Résumé des menus */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-xl p-3 shadow-sm">
            <div className="text-xs text-gray-500 mb-1">Menus planifiés</div>
            <div className="text-xl text-[#403323]">5</div>
          </div>
          <div className="bg-white rounded-xl p-3 shadow-sm border-l-4 border-[#38712c]">
            <div className="text-xs text-gray-500 mb-1">Pensionnaires associés</div>
            <div className="text-xl text-[#38712c]">58</div>
          </div>
          <div className="bg-white rounded-xl p-3 shadow-sm border-l-4 border-[#ff7f27]">
            <div className="text-xs text-gray-500 mb-1">Régimes spéciaux</div>
            <div className="text-xl text-[#ff7f27]">4</div>
          </div>
          <div className="bg-white rounded-xl p-3 shadow-sm border-l-4 border-[#403323]">
            <div className="text-xs text-gray-500 mb-1">Coût moyen/repas</div>
            <div className="text-xl text-[#403323]">€8.50</div>
          </div>
        </div>

        {/* Liste des menus */}
        <div className="space-y-4 mb-6">
          {menus.map((menu) => (
            <div key={menu.id} className="bg-white rounded-xl p-5 shadow-sm">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="px-3 py-1 bg-[#38712c]/10 text-[#38712c] rounded-lg text-xs">
                      {menu.day}
                    </div>
                    <span className="text-sm text-gray-600">{menu.date}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1 text-xs text-gray-600">
                      <Users className="w-3 h-3" />
                      {menu.assigned} pensionnaires
                    </div>
                    <span className="text-xs px-2 py-1 bg-[#ff7f27]/10 text-[#ff7f27] rounded">
                      {menu.diet}
                    </span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="p-2 hover:bg-[#f5f5f5] rounded-lg transition-colors" title="Modifier">
                    <Edit className="w-4 h-4 text-[#ff7f27]" />
                  </button>
                  <button className="p-2 hover:bg-[#f5f5f5] rounded-lg transition-colors" title="Supprimer">
                    <Trash2 className="w-4 h-4 text-red-500" />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="bg-[#f5f5f5] rounded-lg p-3">
                  <h4 className="text-xs font-medium text-gray-700 mb-2">Petit-déjeuner</h4>
                  <p className="text-sm text-gray-600">{menu.breakfast}</p>
                </div>
                <div className="bg-[#f5f5f5] rounded-lg p-3">
                  <h4 className="text-xs font-medium text-gray-700 mb-2">Déjeuner</h4>
                  <p className="text-sm text-gray-600">{menu.lunch}</p>
                </div>
                <div className="bg-[#f5f5f5] rounded-lg p-3">
                  <h4 className="text-xs font-medium text-gray-700 mb-2">Dîner</h4>
                  <p className="text-sm text-gray-600">{menu.dinner}</p>
                </div>
              </div>

              {/* Section d'association */}
              <div className="mt-4 pt-4 border-t border-[#e6e6e6]">
                <h4 className="text-xs font-medium text-gray-700 mb-2">Association automatique</h4>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-600">
                    {menu.assigned} pensionnaires assignés automatiquement selon leur régime
                  </div>
                  <button className="text-xs text-[#38712c] hover:text-[#2d5a23]">
                    Modifier l'association
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Section d'association globale */}
        <div className="bg-white rounded-xl p-5 shadow-sm">
          <h3 className="text-sm text-[#403323] mb-3">Association automatique des repas</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-[#f5f5f5] rounded-lg">
              <div>
                <div className="text-sm text-[#403323]">Régime Standard</div>
                <div className="text-xs text-gray-600">42 pensionnaires</div>
              </div>
              <div className="text-sm text-[#403323]">Menus par défaut</div>
            </div>
            <div className="flex items-center justify-between p-3 bg-[#f5f5f5] rounded-lg">
              <div>
                <div className="text-sm text-[#403323]">Régime Végétarien</div>
                <div className="text-xs text-gray-600">12 pensionnaires</div>
              </div>
              <div className="text-sm text-[#403323]">Options végétariennes</div>
            </div>
            <div className="flex items-center justify-between p-3 bg-[#f5f5f5] rounded-lg">
              <div>
                <div className="text-sm text-[#403323]">Régime Sans gluten</div>
                <div className="text-xs text-gray-600">3 pensionnaires</div>
              </div>
              <div className="text-sm text-[#403323]">Adaptations spécifiques</div>
            </div>
            <div className="flex items-center justify-between p-3 bg-[#f5f5f5] rounded-lg">
              <div>
                <div className="text-sm text-[#403323]">Régime Halal</div>
                <div className="text-xs text-gray-600">1 pensionnaire</div>
              </div>
              <div className="text-sm text-[#403323]">Viandes certifiées</div>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-[#e6e6e6]">
            <button className="w-full px-4 py-2 border border-[#e6e6e6] rounded-lg hover:bg-[#f5f5f5] transition-colors text-sm text-[#403323]">
              Configurer les associations automatiques
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}