import React, { useState } from "react";
import { Bell, DollarSign, Home, AlertTriangle, CheckCircle, Clock, Mail, Settings, Filter } from "lucide-react";

export default function NotificationsPage() {
  const [activeFilter, setActiveFilter] = useState("all");
  
  const notifications = [
    { 
      id: 1, 
      type: "payment", 
      title: "Paiement en retard", 
      description: "Sophie Martin - Ch. 104 - 450€", 
      time: "Il y a 2 jours", 
      read: false, 
      icon: DollarSign, 
      color: "text-red-500",
      priority: "high"
    },
    { 
      id: 2, 
      type: "room", 
      title: "Chambre disponible", 
      description: "Ch. 207 - Bât. A - Disponible immédiatement", 
      time: "Il y a 1 jour", 
      read: false, 
      icon: Home, 
      color: "text-green-500",
      priority: "medium"
    },
    { 
      id: 3, 
      type: "maintenance", 
      title: "Maintenance requise", 
      description: "Fuite d'eau - Ch. 205 - Bât. A", 
      time: "Il y a 3 jours", 
      read: true, 
      icon: AlertTriangle, 
      color: "text-yellow-500",
      priority: "high"
    },
    { 
      id: 4, 
      type: "payment", 
      title: "Paiement reçu", 
      description: "Thomas Bernard - Ch. 412 - 650€", 
      time: "Il y a 4 jours", 
      read: true, 
      icon: CheckCircle, 
      color: "text-blue-500",
      priority: "low"
    },
    { 
      id: 5, 
      type: "reservation", 
      title: "Nouvelle réservation", 
      description: "Lucas Dubois - Ch. 208 - Arrivée 15/12", 
      time: "Il y a 5 jours", 
      read: true, 
      icon: Clock, 
      color: "text-purple-500",
      priority: "medium"
    },
    { 
      id: 6, 
      type: "system", 
      title: "Mise à jour système", 
      description: "Nouvelle version disponible - v2.3.1", 
      time: "Il y a 1 semaine", 
      read: true, 
      icon: Settings, 
      color: "text-gray-500",
      priority: "low"
    },
  ];

  const filteredNotifications = activeFilter === "all" 
    ? notifications 
    : notifications.filter(n => n.type === activeFilter || n.priority === activeFilter);

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div className="flex-1 p-6 overflow-y-auto">
      <div className="max-w-full">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold text-[#403323]">Notifications</h1>
            <p className="text-sm text-gray-500 mt-1">
              {unreadCount} notification{unreadCount !== 1 ? 's' : ''} non lue{unreadCount !== 1 ? 's' : ''}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button className="px-4 py-2 bg-[#38712c] text-white rounded-lg hover:bg-[#2d5a23]">
              Marquer tout comme lu
            </button>
            <button className="p-3 border border-gray-300 rounded-lg hover:bg-gray-50 relative">
              <Bell className="w-5 h-5" />
              {unreadCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                  {unreadCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Filtres de notification */}
        <div className="flex flex-wrap gap-2 mb-6">
          <button 
            onClick={() => setActiveFilter("all")}
            className={`px-4 py-2 rounded-lg ${activeFilter === "all" ? "bg-[#38712c] text-white" : "border border-gray-300 hover:bg-gray-50"}`}
          >
            Toutes
          </button>
          <button 
            onClick={() => setActiveFilter("payment")}
            className={`px-4 py-2 rounded-lg ${activeFilter === "payment" ? "bg-[#38712c] text-white" : "border border-gray-300 hover:bg-gray-50"}`}
          >
            Paiements
          </button>
          <button 
            onClick={() => setActiveFilter("room")}
            className={`px-4 py-2 rounded-lg ${activeFilter === "room" ? "bg-[#38712c] text-white" : "border border-gray-300 hover:bg-gray-50"}`}
          >
            Chambres
          </button>
          <button 
            onClick={() => setActiveFilter("maintenance")}
            className={`px-4 py-2 rounded-lg ${activeFilter === "maintenance" ? "bg-[#38712c] text-white" : "border border-gray-300 hover:bg-gray-50"}`}
          >
            Maintenance
          </button>
          <button 
            onClick={() => setActiveFilter("high")}
            className={`px-4 py-2 rounded-lg ${activeFilter === "high" ? "bg-[#38712c] text-white" : "border border-gray-300 hover:bg-gray-50"}`}
          >
            Prioritaire
          </button>
          <button 
            onClick={() => setActiveFilter("unread")}
            className={`px-4 py-2 rounded-lg flex items-center gap-2 ${activeFilter === "unread" ? "bg-[#38712c] text-white" : "border border-gray-300 hover:bg-gray-50"}`}
          >
            <Filter className="w-4 h-4" />
            Non lues
          </button>
        </div>

        {/* Liste des notifications */}
        <div className="bg-white rounded-xl shadow border border-gray-200 overflow-hidden">
          {filteredNotifications.length > 0 ? (
            filteredNotifications.map((notification) => (
              <div 
                key={notification.id} 
                className={`p-6 border-b border-gray-200 hover:bg-gray-50 transition-colors ${
                  !notification.read ? 'bg-blue-50' : ''
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-full ${notification.color} bg-opacity-10`}>
                    <notification.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <div>
                        <h3 className="font-semibold text-[#403323]">{notification.title}</h3>
                        <p className="text-gray-600 mt-1">{notification.description}</p>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <span className="text-sm text-gray-500">{notification.time}</span>
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                          notification.priority === "high" 
                            ? "bg-red-100 text-red-800"
                            : notification.priority === "medium"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-gray-100 text-gray-800"
                        }`}>
                          {notification.priority === "high" ? "Prioritaire" : 
                           notification.priority === "medium" ? "Moyenne" : "Basse"}
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-3 mt-4">
                      {!notification.read && (
                        <button className="text-sm text-blue-600 hover:text-blue-800">
                          Marquer comme lu
                        </button>
                      )}
                      <button className="text-sm text-[#38712c] hover:text-[#2d5a23]">
                        Voir les détails
                      </button>
                      {notification.type === "payment" && (
                        <button className="text-sm text-green-600 hover:text-green-800">
                          Envoyer rappel
                        </button>
                      )}
                    </div>
                  </div>
                  {!notification.read && (
                    <div className="w-3 h-3 bg-blue-500 rounded-full flex-shrink-0 mt-3"></div>
                  )}
                </div>
              </div>
            ))
          ) : (
            <div className="p-12 text-center">
              <Bell className="w-16 h-16 mx-auto mb-4 text-gray-300" />
              <p className="text-gray-500">Aucune notification correspondant aux filtres sélectionnés</p>
            </div>
          )}
        </div>

        {/* Paramètres des notifications */}
        <div className="bg-white rounded-xl shadow border border-gray-200 mt-8 p-6">
          <h2 className="text-lg font-semibold text-[#403323] mb-6 flex items-center gap-2">
            <Settings className="w-5 h-5" />
            Paramètres des notifications
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Notifications par email */}
            <div className="p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Mail className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium">Notifications par email</p>
                    <p className="text-sm text-gray-500">Recevoir des notifications par email</p>
                  </div>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#38712c]"></div>
                </label>
              </div>
              <div className="space-y-2 pl-14">
                <div className="flex items-center">
                  <input type="checkbox" id="email-payments" defaultChecked className="mr-2" />
                  <label htmlFor="email-payments" className="text-sm">Paiements en retard</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="email-reservations" defaultChecked className="mr-2" />
                  <label htmlFor="email-reservations" className="text-sm">Nouvelles réservations</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="email-maintenance" className="mr-2" />
                  <label htmlFor="email-maintenance" className="text-sm">Alertes maintenance</label>
                </div>
              </div>
            </div>

            {/* Notifications push */}
            <div className="p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <Bell className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="font-medium">Notifications push</p>
                    <p className="text-sm text-gray-500">Recevoir des notifications sur le tableau de bord</p>
                  </div>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#38712c]"></div>
                </label>
              </div>
              <div className="space-y-2 pl-14">
                <div className="flex items-center">
                  <input type="checkbox" id="push-urgent" defaultChecked className="mr-2" />
                  <label htmlFor="push-urgent" className="text-sm">Notifications urgentes</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="push-daily" defaultChecked className="mr-2" />
                  <label htmlFor="push-daily" className="text-sm">Résumé quotidien</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="push-system" className="mr-2" />
                  <label htmlFor="push-system" className="text-sm">Mises à jour système</label>
                </div>
              </div>
            </div>
          </div>

          {/* Fréquence des notifications */}
          <div className="mt-6 pt-6 border-t border-gray-200">
            <h3 className="font-medium text-[#403323] mb-4">Fréquence des rappels</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm text-gray-700 mb-2">Rappels paiements</label>
                <select className="w-full border border-gray-300 rounded-lg px-3 py-2">
                  <option>3 jours avant échéance</option>
                  <option>5 jours avant échéance</option>
                  <option>7 jours avant échéance</option>
                  <option>Jour de l'échéance</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-2">Rappels maintenance</label>
                <select className="w-full border border-gray-300 rounded-lg px-3 py-2">
                  <option>1 semaine avant</option>
                  <option>3 jours avant</option>
                  <option>1 jour avant</option>
                  <option>Jour même</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-2">Résumé hebdomadaire</label>
                <select className="w-full border border-gray-300 rounded-lg px-3 py-2">
                  <option>Lundi matin</option>
                  <option>Vendredi soir</option>
                  <option>Dimanche soir</option>
                  <option>Désactivé</option>
                </select>
              </div>
            </div>
          </div>

          <div className="flex justify-end mt-6">
            <button className="px-6 py-2 bg-[#38712c] text-white rounded-lg hover:bg-[#2d5a23]">
              Enregistrer les paramètres
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}