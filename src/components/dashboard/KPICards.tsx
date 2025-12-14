import { Home, Users, DollarSign, AlertCircle } from "lucide-react";

const kpis = [
  {
    icon: Home,
    label: "Chambres Inoccupées",
    value: "24",
    subtext: "sur 120 chambres",
    color: "#38712c"
  },
  {
    icon: Users,
    label: "Pensionnaires Actuels",
    value: "96",
    subtext: "80% d'occupation",
    color: "#ff7f27"
  },
  {
    icon: DollarSign,
    label: "Solde Total",
    value: "€45,280",
    subtext: "+12% ce mois",
    color: "#403323"
  },
  {
    icon: AlertCircle,
    label: "Demandes Ouvertes",
    value: "7",
    subtext: "5 en cours",
    color: "#ff7f27"
  }
];

export function KPICards() {
  return (
    <div className="grid grid-cols-4 gap-4">
      {kpis.map((kpi, index) => (
        <div key={index} className="bg-white rounded-xl p-4 shadow-sm">
          <div className="flex items-start justify-between mb-2">
            <div 
              className="w-10 h-10 rounded-lg flex items-center justify-center"
              style={{ backgroundColor: `${kpi.color}15` }}
            >
              <kpi.icon className="w-5 h-5" style={{ color: kpi.color }} />
            </div>
          </div>
          <div className="text-2xl text-[#403323] mb-1">{kpi.value}</div>
          <div className="text-sm text-[#403323] mb-1">{kpi.label}</div>
          <div className="text-xs text-gray-500">{kpi.subtext}</div>
        </div>
      ))}
    </div>
  );
}
