import { createBrowserRouter } from 'react-router-dom';
import Layout from '../Layout';

// Import dashboard
import DashboardPage from '../components/dashboard/DashboardPage';
import { ImportantTickets } from '../components/dashboard/ImportantTickets';
import { UpcomingDepartures } from '../components/dashboard/UpcomingDepartures';
import { OccupancyTrendsChart } from '../components/dashboard/OccupancyTrendsChart';

// Import residents components
import { ResidentsList } from '../components/resident/ResidentsList';
import { ResidentProfile } from '../components/resident/ResidentProfile';
import { AddResidentModal } from '../components/resident/AddResidentModal';
import { AssignRoomModal } from '../components/resident/AssignRoomModal';
import { AssignmentHistory } from '../components/resident/AssignmentHistory';
import { OccupantHistory } from '../components/resident/OccupantHistory';

// Import rooms/buildings components
import { BuildingsList } from '../components/chambres_batiments/BuildingsList';
import { AddBuildingModal } from '../components/chambres_batiments/AddBuildingModal';
import { RoomsList } from '../components/chambres_batiments/RoomsList';
import { AddRoomModal } from '../components/chambres_batiments/AddRoomModal';
import { RoomStatusBoard } from '../components/chambres_batiments/RoomStatusBoard';

// Import payments components
import { FeeGeneration } from '../components/finance/FeeGeneration';
import { InvoiceList } from '../components/finance/InvoiceList';
import { PaymentTracking } from '../components/finance/PaymentTracking';
import { PaymentHistory } from '../components/finance/PaymentHistory';
import { InvoiceDetails } from '../components/finance/InvoiceDetails';
import { Alerts } from '../components/finance/Alerts';

// Import reservations components
import { ReservationsList } from '../components/reservations/ReservationsList';
import { NewReservationModal } from '../components/reservations/NewReservationModal';
import { BlockRoomModal } from '../components/reservations/BlockRoomModal';
import { ReservationDetails } from '../components/reservations/ReservationDetails';
import ReservationsCalendar from '../components/reservations/ReservationsCalendar';

// Import personnel components
import { PersonnelList } from '../components/personnel/PersonnelList';
import PersonnelProfile from '../components/personnel/PersonnelProfile';
import PersonnelTasks from '../components/personnel/PersonnelTasks';
import PersonnelSalaries from '../components/personnel/PersonnelSalaries';
import PersonnelCosts from '../components/personnel/PersonnelCosts';

// Import inventory components
import { Equipments } from '../components/inventory/Equipments';
import Stocks from '../components/inventory/Stocks';
import EquipmentMaintenance from '../components/inventory/EquipmentMaintenance';

// Import meals components
import MealSection from '../components/meals/MealSection';
import { Menus } from '../components/meals/Menus';
import MealsStats from '../components/meals/Stats';
import MealPreferences from '../components/meals/MealPreferences';

// Import maintenance components
import Incidents from '../components/maintenance/Incidents';
import Repairs from '../components/maintenance/Repairs';
import Costs from '../components/maintenance/Costs';
import MaintenanceDashboard from '../components/maintenance/MaintenanceDashboard';

// Import reports components
import AdvancedSearch from '../components/reports/AdvancedSearch';
import StatisticsPage from '../components/reports/StatisticsPage';
import NotificationsPage from '../components/reports/NotificationsPage';

// Import profile page
import ProfilePage from '../components/profile/ProfilePage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
      
      // Profile page
      {
        path: 'profile',
        element: <ProfilePage />,
      },
      
      // Pensionnaires
      {
        path: 'residents',
        element: <ResidentsList />,
      },
      {
        path: 'residents/:id',
        element: <ResidentProfile />,
      },
      {
        path: 'residents/add',
        element: <AddResidentModal />,
      },
      {
        path: 'residents/assign',
        element: <AssignRoomModal />,
      },
      {
        path: 'residents/history',
        element: <AssignmentHistory />,
      },
      
      // Chambres & Bâtiments
      {
        path: 'rooms',
        element: <RoomsList />,
      },
      {
        path: 'rooms/add',
        element: <AddRoomModal />,
      },
      {
        path: 'rooms/status',
        element: <RoomStatusBoard />,
      },
      {
        path: 'rooms/occupants',
        element: <OccupantHistory />,
      },
      {
        path: 'buildings',
        element: <BuildingsList />,
      },
      {
        path: 'buildings/add',
        element: <AddBuildingModal />,
      },
      
      // Paiements & Facturation
      {
        path: 'payments',
        element: <PaymentTracking />,
      },
      {
        path: 'payments/history',
        element: <PaymentHistory />,
      },
      {
        path: 'invoices',
        element: <InvoiceList />,
      },
      {
        path: 'invoices/:id',
        element: <InvoiceDetails />,
      },
      {
        path: 'fees/generate',
        element: <FeeGeneration />,
      },
      {
        path: 'payments/alerts',
        element: <Alerts />,
      },
      
      // Réservations
      {
        path: 'reservations',
        element: <ReservationsList />,
      },
      {
        path: 'reservations/new',
        element: <NewReservationModal />,
      },
      {
        path: 'reservations/:id',
        element: <ReservationDetails />,
      },
      {
        path: 'reservations/calendar',
        element: <ReservationsCalendar />,
      },
      {
        path: 'rooms/block',
        element: <BlockRoomModal />,
      },
      
      // Maintenance
      {
        path: 'maintenance',
        element: <MaintenanceDashboard />,
      },
      {
        path: 'maintenance/incidents',
        element: <Incidents />,
      },
      {
        path: 'maintenance/reports',
        element: <Repairs />,
      },
      {
        path: 'maintenance/costs',
        element: <Costs />,
      },
      
      // Personnel
      {
        path: 'staff',
        element: <PersonnelList />,
      },
      {
        path: 'staff/:id',
        element: <PersonnelProfile />,
      },
      {
        path: 'staff/tasks',
        element: <PersonnelTasks />,
      },
      {
        path: 'staff/salaries',
        element: <PersonnelSalaries />,
      },
      {
        path: 'staff/costs',
        element: <PersonnelCosts />,
      },
      
      // Repas
      {
        path: 'meals',
        element: <MealSection />,
      },
      {
        path: 'meals/menus',
        element: <Menus />,
      },
      {
        path: 'meals/stats',
        element: <MealsStats />,
      },
      {
        path: 'meals/association',
        element: <MealPreferences />,
      },
      
      // Inventaire
      {
        path: 'inventory/equipment',
        element: <Equipments />,
      },
      {
        path: 'inventory/stocks',
        element: <Stocks />,
      },
      {
        path: 'inventory/maintenance',
        element: <EquipmentMaintenance />,
      },
      
      // Rapports
      {
        path: 'reports/occupancy',
        element: <div className="p-6">Rapport d'occupation</div>,
      },
      {
        path: 'reports/financial',
        element: <StatisticsPage />,
      },
      {
        path: 'reports/maintenance',
        element: <div className="p-6">Rapports de maintenance</div>,
      },
      {
        path: 'reports/search',
        element: <AdvancedSearch />,
      },
      {
        path: 'reports/statistics',
        element: <StatisticsPage />,
      },
      
      // Notifications
      {
        path: 'notifications',
        element: <NotificationsPage />,
      },
      
      // Utilitaires
      {
        path: 'settings',
        element: <div className="p-6">Paramètres</div>,
      },
      
      // Départs prochains
      {
        path: 'upcoming-departures',
        element: <UpcomingDepartures />,
      },
      
      // Route fallback
      {
        path: '*',
        element: <DashboardPage />,
      },
    ],
  },
]);