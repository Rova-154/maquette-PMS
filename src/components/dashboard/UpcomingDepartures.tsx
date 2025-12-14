import { Calendar } from "lucide-react";

const departures = [
  { name: "Sophie Martin", room: "Ch. 104", date: "15 Déc 2025", days: 11 },
  { name: "Lucas Dubois", room: "Ch. 207", date: "18 Déc 2025", days: 14 },
  { name: "Emma Leroy", room: "Ch. 315", date: "20 Déc 2025", days: 16 },
  { name: "Thomas Bernard", room: "Ch. 412", date: "22 Déc 2025", days: 18 },
];

export function UpcomingDepartures() {
  return (
    <div className="bg-white rounded-xl p-4 shadow-sm">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-[#403323]">Départs Prochains</h3>
        <button className="text-xs text-[#38712c] hover:underline">Voir tout</button>
      </div>
      <div className="space-y-2">
        {departures.map((departure, index) => (
          <div key={index} className="flex items-center gap-3 p-2 hover:bg-[#f5f5f5] rounded-lg transition-colors">
            <div className="w-8 h-8 bg-[#38712c] rounded-full flex items-center justify-center text-white text-xs flex-shrink-0">
              {departure.name.split(' ').map(n => n[0]).join('')}
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm text-[#403323]">{departure.name}</div>
              <div className="text-xs text-gray-500">{departure.room}</div>
            </div>
            <div className="text-right">
              <div className="text-xs text-[#403323] flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {departure.date}
              </div>
              <div className="text-xs text-gray-500">{departure.days} jours</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
