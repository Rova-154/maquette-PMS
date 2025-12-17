import { useState } from "react";
import { Bell, Search, Menu, User } from "lucide-react";

interface HeaderProps {
  onMenuClick: () => void;
}

export function Header({ onMenuClick }: HeaderProps) {
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 bg-white border-b border-gray-200 px-4 md:px-6 py-3">
      <div className="flex items-center justify-between">
        {/* Left side - Menu button for mobile */}
        <div className="flex items-center gap-4">
          <button
            onClick={onMenuClick}
            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg"
            aria-label="Toggle menu"
          >
            <Menu className="w-5 h-5" />
          </button>
          
          <div className="hidden md:flex items-center gap-2">
            <div className="w-8 h-8 bg-[#38712c] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">CH</span>
            </div>
            <span className="text-lg font-semibold text-gray-800">Campus Housing PMS</span>
          </div>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          {/* Search */}
          <div className="relative hidden md:block">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Rechercher..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#38712c] focus:border-transparent w-64"
            />
          </div>

          {/* Notifications */}
          <div className="relative">
            <button
              onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
              className="p-2 hover:bg-gray-100 rounded-lg relative"
              aria-label="Notifications"
            >
              <Bell className="w-5 h-5 text-gray-600" />
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                3
              </span>
            </button>
            
            {isNotificationsOpen && (
              <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                <div className="px-4 py-2 border-b border-gray-100">
                  <h3 className="font-semibold text-gray-800">Notifications</h3>
                </div>
                <div className="max-h-96 overflow-y-auto">
                  {[
                    { id: 1, text: "Nouveau pensionnaire enregistré", time: "Il y a 2h", unread: true },
                    { id: 2, text: "Paiement en attente - Ch. 205", time: "Il y a 4h", unread: true },
                    { id: 3, text: "Maintenance programmée demain", time: "Il y a 1 jour", unread: false },
                    { id: 4, text: "Rapport mensuel généré", time: "Il y a 2 jours", unread: false },
                  ].map((notification) => (
                    <div
                      key={notification.id}
                      className={`px-4 py-3 hover:bg-gray-50 cursor-pointer ${notification.unread ? 'bg-blue-50' : ''}`}
                    >
                      <p className="text-sm text-gray-800">{notification.text}</p>
                      <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                    </div>
                  ))}
                </div>
                <div className="px-4 py-2 border-t border-gray-100">
                  <button className="text-sm text-[#38712c] hover:underline w-full text-center">
                    Voir toutes les notifications
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* User profile */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
              <User className="w-4 h-4 text-gray-600" />
            </div>
            <div className="hidden md:block">
              <p className="text-sm font-medium text-gray-800">Admin</p>
              <p className="text-xs text-gray-500">Administrateur</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}