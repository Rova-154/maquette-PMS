import React from "react";
import { KPICards } from "./KPICards";
import { ImportantTickets } from "./ImportantTickets";
import { OccupancyTrendsChart } from "./OccupancyTrendsChart";
import { UpcomingDepartures } from "./UpcomingDepartures";

export default function DashboardPage() {
  return (
    <div className="flex-1 p-6 overflow-y-auto">
      <div className="max-w-full">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold text-[#403323]">Tableau de Bord</h1>
            <p className="text-sm text-gray-500 mt-1">Vue d'ensemble des activités et métriques clés</p>
          </div>
          <div className="flex gap-3">
            <select className="px-4 py-2 border border-gray-300 rounded-lg text-sm">
              <option>Aujourd'hui</option>
              <option>Cette semaine</option>
              <option>Ce mois</option>
              <option>Cette année</option>
            </select>
            <button className="px-4 py-2 bg-[#38712c] text-white rounded-lg hover:bg-[#2d5a23]">
              Rafraîchir
            </button>
          </div>
        </div>

        {/* KPI Cards */}
        <div className="mb-6">
          <KPICards />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-3 gap-6">
          {/* Colonne gauche - Graphiques */}
          <div className="col-span-2 space-y-6">
            {/* Graphique d'occupation */}
            <div className="bg-white rounded-xl shadow border border-gray-200 p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-[#403323]">Tendances d'Occupation</h2>
                <div className="flex gap-2">
                  <select className="text-xs border border-gray-300 rounded px-2 py-1">
                    <option>2024</option>
                    <option>2023</option>
                  </select>
                  <select className="text-xs border border-gray-300 rounded px-2 py-1">
                    <option>Tous bâtiments</option>
                    <option>Bâtiment A</option>
                    <option>Bâtiment B</option>
                  </select>
                </div>
              </div>
              <div className="h-64">
                <OccupancyTrendsChart />
              </div>
            </div>

            {/* Dernières activités */}
            <div className="bg-white rounded-xl shadow border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-[#403323] mb-4">Dernières Activités</h2>
              <div className="space-y-4">
                {[
                  { action: "Nouveau pensionnaire", details: "Sophie Martin - Ch. 104", time: "Il y a 2h", type: "success" },
                  { action: "Paiement reçu", details: "Thomas Bernard - 650€", time: "Il y a 4h", type: "payment" },
                  { action: "Maintenance programmée", details: "Ch. 205 - Fuite d'eau", time: "Il y a 1 jour", type: "warning" },
                  { action: "Réservation annulée", details: "Ch. 208 - Lucas Dubois", time: "Il y a 2 jours", type: "error" },
                ].map((activity, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      activity.type === "success" ? "bg-green-100 text-green-600" :
                      activity.type === "payment" ? "bg-blue-100 text-blue-600" :
                      activity.type === "warning" ? "bg-yellow-100 text-yellow-600" :
                      "bg-red-100 text-red-600"
                    }`}>
                      {activity.type === "success" ? "✓" : 
                       activity.type === "payment" ? "€" : 
                       activity.type === "warning" ? "!" : "✕"}
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-[#403323]">{activity.action}</p>
                      <p className="text-sm text-gray-600">{activity.details}</p>
                    </div>
                    <span className="text-sm text-gray-500">{activity.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Colonne droite - Widgets */}
          <div className="space-y-6">
            {/* Tickets importants */}
            <ImportantTickets />

            {/* Départs prochains */}
            <UpcomingDepartures />

            {/* Alertes rapides */}
            <div className="bg-white rounded-xl shadow border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-[#403323] mb-4">Alertes Rapides</h2>
              <div className="space-y-3">
                <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="font-medium text-red-800">Paiements en retard</span>
                  </div>
                  <p className="text-sm text-red-600">3 pensionnaires avec paiements en attente</p>
                </div>
                <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <span className="font-medium text-yellow-800">Maintenance urgente</span>
                  </div>
                  <p className="text-sm text-yellow-600">2 interventions prioritaires requises</p>
                </div>
                <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="font-medium text-green-800">Chambres disponibles</span>
                  </div>
                  <p className="text-sm text-green-600">5 chambres prêtes pour occupation</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-6 bg-white rounded-xl shadow border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-[#403323] mb-4">Actions Rapides</h2>
          <div className="grid grid-cols-4 gap-4">
            <button className="p-4 border border-gray-300 rounded-lg hover:bg-gray-50 text-center">
              <div className="text-2xl mb-2">📝</div>
              <span className="text-sm">Nouvelle réservation</span>
            </button>
            <button className="p-4 border border-gray-300 rounded-lg hover:bg-gray-50 text-center">
              <div className="text-2xl mb-2">💸</div>
              <span className="text-sm">Enregistrer paiement</span>
            </button>
            <button className="p-4 border border-gray-300 rounded-lg hover:bg-gray-50 text-center">
              <div className="text-2xl mb-2">🔧</div>
              <span className="text-sm">Créer ticket maintenance</span>
            </button>
            <button className="p-4 border border-gray-300 rounded-lg hover:bg-gray-50 text-center">
              <div className="text-2xl mb-2">📊</div>
              <span className="text-sm">Générer rapport</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}