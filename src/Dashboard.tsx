// Dashboard.tsx
import { KPICards } from "./components/KPICards";
import { ImportantTickets } from "./components/ImportantTickets";
import { UpcomingDepartures } from "./components/UpcomingDepartures";
import { RoomStatusChart } from "./components/RoomStatusChart";
import { OccupancyTrendsChart } from "./components/OccupancyTrendsChart";
import { MealConsumptionChart } from "./components/MealConsumptionChart";
import { MealSection } from "./components/MealSection";

export default function Dashboard() {
  return (
    <div className="p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Tableau de bord</h1>
        <KPICards />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <ImportantTickets />
          <UpcomingDepartures />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <RoomStatusChart />
          <OccupancyTrendsChart />
          <MealConsumptionChart />
        </div>
        <MealSection />
      </div>
    </div>
  );
}