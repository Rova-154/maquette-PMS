import { AlertTriangle, Droplet, Zap, Wind } from "lucide-react";

const tickets = [
  { id: "T-001", issue: "Fuite d'eau - Ch. 205", priority: "Urgent", icon: Droplet, color: "#ff7f27" },
  { id: "T-002", issue: "Panne électrique - Bât. A", priority: "Élevé", icon: Zap, color: "#ff7f27" },
  { id: "T-003", issue: "Climatisation - Ch. 312", priority: "Moyen", icon: Wind, color: "#38712c" },
  { id: "T-004", issue: "Serrure défectueuse", priority: "Faible", icon: AlertTriangle, color: "#403323" },
];

export function ImportantTickets() {
  return (
    <div className="bg-white rounded-xl p-4 shadow-sm">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-[#403323]">Tickets Importants</h3>
        <button className="text-xs text-[#38712c] hover:underline">Voir tout</button>
      </div>
      <div className="space-y-2">
        {tickets.map((ticket) => (
          <div key={ticket.id} className="flex items-center gap-3 p-2 hover:bg-[#f5f5f5] rounded-lg transition-colors">
            <div 
              className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: `${ticket.color}15` }}
            >
              <ticket.icon className="w-4 h-4" style={{ color: ticket.color }} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm text-[#403323] truncate">{ticket.issue}</div>
              <div className="text-xs text-gray-500">{ticket.id}</div>
            </div>
            <span 
              className="text-xs px-2 py-1 rounded"
              style={{ 
                backgroundColor: `${ticket.color}15`,
                color: ticket.color
              }}
            >
              {ticket.priority}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
