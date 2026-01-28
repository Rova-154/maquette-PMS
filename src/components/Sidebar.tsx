import { memo, useState, useCallback } from "react";
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  Building2,
  CreditCard,
  Calendar as CalendarIcon,
  Wrench,
  UserCog,
  UtensilsCrossed,
  Package,
  BarChart3,
  Bell,
  Settings,
  LogOut,
  ChevronDown,
  ChevronRight,
  PlusCircle,
  FileText,
  History,
  AlertCircle,
  ClipboardList,
  TrendingUp,
  Home,
  Search,
  Users as UsersIcon,
  MapPin,
  DollarSign,
  Coffee,
  Box,
  PieChart,
  ShoppingCart,
  BellRing,
  LineChart,
  X
} from "lucide-react";

interface SidebarProps {
  onClose: () => void;
}

// Composant Sidebar responsive
export const Sidebar = memo(function Sidebar({ onClose }: SidebarProps) {
  const [openSections, setOpenSections] = useState<string[]>(["dashboard"]);

  const toggleSection = useCallback((section: string) => {
    setOpenSections(prev =>
      prev.includes(section)
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  }, []);

  const handleLinkClick = () => {
    // On mobile, close sidebar when clicking a link
    if (window.innerWidth < 1024) {
      onClose();
    }
  };

  const menuSections = [
    {
      id: "dashboard",
      label: "Tableau de bord",
      icon: LayoutDashboard,
      path: "/",
      hasDropdown: false
    },
    {
      id: "residents",
      label: "Pensionnaires",
      icon: Users,
      hasDropdown: true,
      items: [
        { label: "Liste des pensionnaires", path: "/residents", icon: UsersIcon },
        { label: "Ajouter un pensionnaire", path: "/residents/add", icon: PlusCircle },
        { label: "Affecter une chambre", path: "/residents/assign", icon: MapPin },
        { label: "Historique d'affectation", path: "/residents/history", icon: History },
        { label: "Historique des occupants", path: "/rooms/occupants", icon: History }
      ]
    },
    {
      id: "rooms",
      label: "Chambres & Bâtiments",
      icon: Building2,
      hasDropdown: true,
      items: [
        { label: "Liste des chambres", path: "/rooms", icon: MapPin },
        { label: "Ajouter une chambre", path: "/rooms/add", icon: PlusCircle },
        { label: "Statut des chambres", path: "/rooms/status", icon: AlertCircle },
        { label: "Gestion des bâtiments", path: "/buildings", icon: Building2 },
        { label: "Ajouter un bâtiment", path: "/buildings/add", icon: PlusCircle }
      ]
    },
    {
      id: "payments",
      label: "Paiements & Facturation",
      icon: CreditCard,
      hasDropdown: true,
      items: [
        { label: "Suivi des paiements", path: "/payments", icon: DollarSign },
        { label: "Historique des paiements", path: "/payments/history", icon: History },
        { label: "Facturation", path: "/invoices", icon: FileText },
        { label: "Génération des frais", path: "/fees/generate", icon: PlusCircle },
        { label: "Alertes d'impayés", path: "/payments/alerts", icon: AlertCircle }
      ]
    },
    {
      id: "reservations",
      label: "Réservations",
      icon: CalendarIcon,
      hasDropdown: true,
      items: [
        { label: "Liste des réservations", path: "/reservations", icon: CalendarIcon },
        { label: "Nouvelle réservation", path: "/reservations/new", icon: PlusCircle },
        { label: "Calendrier", path: "/reservations/calendar", icon: CalendarIcon },
        { label: "Blocage de chambre", path: "/rooms/block", icon: AlertCircle }
      ]
    },
    {
      id: "maintenance",
      label: "Maintenance",
      icon: Wrench,
      hasDropdown: true,
      items: [
        { label: "Tableau de bord", path: "/maintenance", icon: Wrench },
        { label: "Tickets d'incident", path: "/maintenance/incidents", icon: AlertCircle },
        { label: "Rapports de réparation", path: "/maintenance/reports", icon: FileText },
        { label: "Suivi des coûts", path: "/maintenance/costs", icon: TrendingUp }
      ]
    },
    {
      id: "personnel",
      label: "Personnel",
      icon: UserCog,
      hasDropdown: true,
      items: [
        { label: "Fiches du personnel", path: "/staff", icon: UsersIcon },
        { label: "Affectation des tâches", path: "/staff/tasks", icon: ClipboardList },
        { label: "Suivi des salaires", path: "/staff/salaries", icon: DollarSign },
        { label: "Suivi des coûts", path: "/staff/costs", icon: TrendingUp }
      ]
    },
    {
      id: "meals",
      label: "Gestion des repas",
      icon: UtensilsCrossed,
      hasDropdown: true,
      items: [
        { label: "Tableau de bord", path: "/meals", icon: Coffee },
        { label: "Gestion des menus", path: "/meals/menus", icon: ShoppingCart },
        { label: "Association aux pensionnaires", path: "/meals/association", icon: Users },
        { label: "Consommation des repas", path: "/meals/stats", icon: TrendingUp }
      ]
    },
    {
      id: "inventory",
      label: "Inventaire & Équipements",
      icon: Package,
      hasDropdown: true,
      items: [
        { label: "Équipements des chambres", path: "/inventory/equipment", icon: Package },
        { label: "Gestion des stocks", path: "/inventory/stocks", icon: Box },
        { label: "Maintenance des équipements", path: "/inventory/maintenance", icon: Wrench }
      ]
    },
    {
      id: "reports",
      label: "Rapports & Statistiques",
      icon: BarChart3,
      hasDropdown: true,
      items: [
        { label: "Taux d'occupation", path: "/reports/occupancy", icon: PieChart },
        { label: "Statistiques financières", path: "/reports/financial", icon: LineChart },
        { label: "Rapports de maintenance", path: "/reports/maintenance", icon: Wrench },
        { label: "Recherche avancée", path: "/reports/search", icon: Search },
        { label: "Statistiques détaillées", path: "/reports/statistics", icon: TrendingUp }
      ]
    }
  ];

  return (
    <div className="w-64 bg-[#38712c] text-white h-full flex flex-col">
      {/* Header with close button for mobile */}
      <div className="p-4 lg:p-6 border-b border-white/10 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
            <Home className="w-6 h-6 text-[#38712c]" />
          </div>
          <div>
            <h1 className="text-lg font-bold">Campus Housing PMS</h1>
            <p className="text-xs text-white/80 hidden lg:block">Admin Dashboard</p>
            <p className="text-xs text-white/80 lg:hidden">Admin</p>
          </div>
        </div>
                {/* Bouton de fermeture mobile - Positionné correctement */}
        <button
          onClick={onClose}
          className="lg:hidden p-2 hover:bg-white/20 rounded-lg transition-colors absolute right-3"
          aria-label="Close sidebar"
        >
          <X className="w-5 h-5" />
        </button>

      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
        {menuSections.map((section) => (
          <div key={section.id} className="mb-1">
            {section.hasDropdown ? (
              <>
                <button
                  onClick={() => toggleSection(section.id)}
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg transition-all ${
                    openSections.includes(section.id) 
                      ? 'bg-white/20' 
                      : 'hover:bg-white/10'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <section.icon className="w-4 h-4 flex-shrink-0" />
                    <span className="text-sm font-medium">{section.label}</span>
                  </div>
                  {openSections.includes(section.id) ? (
                    <ChevronDown className="w-4 h-4" />
                  ) : (
                    <ChevronRight className="w-4 h-4" />
                  )}
                </button>
                
                {openSections.includes(section.id) && (
                  <div className="ml-6 mt-1 space-y-1">
                    {section.items!.map((item) => (
                      <NavLink
                        key={item.path}
                        to={item.path}
                        onClick={handleLinkClick}
                        className={({ isActive }) => 
                          `flex items-center gap-2 px-3 py-2 text-sm rounded transition-all ${
                            isActive
                              ? 'bg-white/20 text-white' 
                              : 'text-white/80 hover:bg-white/5 hover:text-white'
                          }`
                        }
                      >
                        {item.icon && <item.icon className="w-3 h-3" />}
                        <span className="truncate">{item.label}</span>
                      </NavLink>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <NavLink
                to={section.path!}
                onClick={handleLinkClick}
                className={({ isActive }) => 
                  `flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all ${
                    isActive
                      ? 'bg-white/20' 
                      : 'hover:bg-white/10'
                  }`
                }
              >
                <section.icon className="w-4 h-4 flex-shrink-0" />
                <span className="text-sm font-medium">{section.label}</span>
              </NavLink>
            )}
          </div>
        ))}
      </nav>

      {/* Footer */}
      <div className="border-t border-white/10 p-4 space-y-1">
        <NavLink
          to="/notifications"
          onClick={handleLinkClick}
          className={({ isActive }) => 
            `flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
              isActive
                ? 'bg-white/20' 
                : 'hover:bg-white/10'
            }`
          }
        >
          <Bell className="w-4 h-4" />
          <span className="text-sm">Notifications</span>
          <span className="ml-auto w-5 h-5 bg-red-500 text-xs rounded-full flex items-center justify-center">
            3
          </span>
        </NavLink>
        
        <NavLink
          to="/upcoming-departures"
          onClick={handleLinkClick}
          className={({ isActive }) => 
            `flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
              isActive
                ? 'bg-white/20' 
                : 'hover:bg-white/10'
            }`
          }
        >
          <CalendarIcon className="w-4 h-4" />
          <span className="text-sm">Départs prochains</span>
        </NavLink>
        
        <NavLink
          to="/settings"
          onClick={handleLinkClick}
          className={({ isActive }) => 
            `flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
              isActive
                ? 'bg-white/20' 
                : 'hover:bg-white/10'
            }`
          }
        >
          <Settings className="w-4 h-4" />
          <span className="text-sm">Paramètres</span>
        </NavLink>
        
        <button
          onClick={() => {
            window.location.href = "/login";
          }}
          className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-red-500/20 transition-colors text-red-200"
        >
          <LogOut className="w-4 h-4" />
          <span className="text-sm">Déconnexion</span>
        </button>
      </div>
    </div>
  );
});