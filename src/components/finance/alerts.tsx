import { AlertTriangle, Bell, Clock, FileText, CheckCircle, XCircle, Mail, Phone } from "lucide-react";
import { useState } from "react";

interface AlertItem {
  id: number;
  type: "overdue" | "warning" | "info" | "success";
  title: string;
  description: string;
  resident: string;
  amount?: number;
  dueDate: string;
  daysOverdue?: number;
  invoiceNumber: string;
  priority: "high" | "medium" | "low";
  read: boolean;
}

interface AlertStats {
  total: number;
  overdue: number;
  highPriority: number;
  unread: number;
  totalAmount: number;
}

export function Alerts() {
  const [alerts, setAlerts] = useState<AlertItem[]>([
    {
      id: 1,
      type: "overdue",
      title: "Facture impayée - Retard critique",
      description: "Facture en retard de plus de 15 jours, risque de suspension de service",
      resident: "Thomas Bernard",
      amount: 820,
      dueDate: "15/11/2024",
      daysOverdue: 20,
      invoiceNumber: "INV-2024-159",
      priority: "high",
      read: false
    },
    {
      id: 2,
      type: "overdue",
      title: "Paiement partiel reçu",
      description: "Paiement partiel effectué, solde restant à régler",
      resident: "Emma Leroy",
      amount: 450,
      dueDate: "01/12/2024",
      daysOverdue: 4,
      invoiceNumber: "INV-2024-158",
      priority: "medium",
      read: true
    },
    {
      id: 3,
      type: "warning",
      title: "Échéance approchant",
      description: "Facture à échéance dans 3 jours",
      resident: "Lucas Dubois",
      amount: 800,
      dueDate: "18/12/2024",
      invoiceNumber: "INV-2024-160",
      priority: "medium",
      read: false
    },
    {
      id: 4,
      type: "overdue",
      title: "Retard de paiement",
      description: "Premier rappel envoyé, aucun paiement reçu",
      resident: "Nicolas Laurent",
      amount: 810,
      dueDate: "20/11/2024",
      daysOverdue: 15,
      invoiceNumber: "INV-2024-163",
      priority: "high",
      read: false
    },
    {
      id: 5,
      type: "info",
      title: "Changement de mode de paiement",
      description: "Le pensionnaire a changé son mode de paiement",
      resident: "Sophie Martin",
      dueDate: "01/12/2024",
      invoiceNumber: "INV-2024-156",
      priority: "low",
      read: true
    },
    {
      id: 6,
      type: "warning",
      title: "Problème de prélèvement",
      description: "Prélèvement automatique refusé par la banque",
      resident: "Alexandre Roux",
      amount: 300,
      dueDate: "05/12/2024",
      invoiceNumber: "INV-2024-161",
      priority: "high",
      read: false
    },
    {
      id: 7,
      type: "success",
      title: "Paiement reçu",
      description: "Facture réglée intégralement",
      resident: "Julie Durand",
      amount: 935,
      dueDate: "01/12/2024",
      invoiceNumber: "INV-2024-162",
      priority: "low",
      read: true
    },
    {
      id: 8,
      type: "overdue",
      title: "Retard modéré",
      description: "En attente de régularisation",
      resident: "Marie Leroy",
      amount: 850,
      dueDate: "01/12/2024",
      daysOverdue: 4,
      invoiceNumber: "INV-2024-164",
      priority: "medium",
      read: false
    }
  ]);

  const stats: AlertStats = {
    total: alerts.length,
    overdue: alerts.filter(a => a.type === "overdue").length,
    highPriority: alerts.filter(a => a.priority === "high").length,
    unread: alerts.filter(a => !a.read).length,
    totalAmount: alerts
      .filter(a => a.type === "overdue" && a.amount)
      .reduce((sum, alert) => sum + (alert.amount || 0), 0)
  };

  const markAsRead = (id: number) => {
    setAlerts(prev => prev.map(alert => 
      alert.id === id ? { ...alert, read: true } : alert
    ));
  };

  const markAllAsRead = () => {
    setAlerts(prev => prev.map(alert => ({ ...alert, read: true })));
  };

  const getTypeIcon = (type: string) => {
    switch(type) {
      case "overdue": return <AlertTriangle className="w-5 h-5" />;
      case "warning": return <Clock className="w-5 h-5" />;
      case "success": return <CheckCircle className="w-5 h-5" />;
      case "info": return <FileText className="w-5 h-5" />;
      default: return <AlertTriangle className="w-5 h-5" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch(type) {
      case "overdue": return "bg-red-50 border-red-200 text-red-700";
      case "warning": return "bg-orange-50 border-orange-200 text-orange-700";
      case "success": return "bg-[#38712c]/10 border-[#38712c]/20 text-[#38712c]";
      case "info": return "bg-blue-50 border-blue-200 text-blue-700";
      default: return "bg-gray-50 border-gray-200 text-gray-700";
    }
  };

  const getPriorityBadge = (priority: string) => {
    switch(priority) {
      case "high": return <span className="px-2 py-1 bg-red-100 text-red-700 rounded-full text-xs font-medium">Haute</span>;
      case "medium": return <span className="px-2 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-medium">Moyenne</span>;
      case "low": return <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">Basse</span>;
      default: return null;
    }
  };

  return (
    <div className="flex-1 p-4 md:p-6 overflow-y-auto">
      <div className="max-w-full h-full flex flex-col">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
          <div>
            <h1 className="text-xl md:text-2xl font-bold text-[#403323]">Alertes et notifications</h1>
            <p className="text-sm text-gray-500 mt-1">Gestion des impayés et notifications importantes</p>
          </div>
          <div className="flex gap-2">
            <button 
              onClick={markAllAsRead}
              className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm text-[#403323] flex items-center gap-2"
            >
              <CheckCircle className="w-4 h-4" />
              Tout marquer comme lu
            </button>
            <button className="px-4 py-2 bg-[#ff7f27] text-white rounded-lg hover:bg-[#e66f1f] transition-colors text-sm flex items-center gap-2">
              <Bell className="w-4 h-4" />
              Envoyer tous les rappels
            </button>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-red-500" />
              </div>
              <div>
                <div className="text-xs text-gray-500">Alertes totales</div>
                <div className="text-lg font-semibold text-[#403323]">{stats.total}</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center">
                <Clock className="w-5 h-5 text-orange-500" />
              </div>
              <div>
                <div className="text-xs text-gray-500">Impayés</div>
                <div className="text-lg font-semibold text-red-500">{stats.overdue}</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <div className="text-xs text-gray-500 mb-1">Montant impayé</div>
            <div className="text-lg font-semibold text-red-600">€{stats.totalAmount.toLocaleString()}</div>
            <div className="text-xs text-gray-600">En attente</div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-[#38712c]/10 rounded-lg flex items-center justify-center">
                <XCircle className="w-5 h-5 text-[#38712c]" />
              </div>
              <div>
                <div className="text-xs text-gray-500">Non lues</div>
                <div className="text-lg font-semibold text-[#403323]">{stats.unread}</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <div className="text-xs text-gray-500 mb-1">Priorité haute</div>
            <div className="text-lg font-semibold text-red-500">{stats.highPriority}</div>
            <div className="text-xs text-red-600 font-medium">Action requise</div>
          </div>
        </div>

        {/* Critical Alert */}
        <div className="bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 rounded-lg p-4 mb-6">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
            <div className="flex-1">
              <h3 className="text-sm font-medium text-[#403323] mb-1">Action immédiate requise</h3>
              <p className="text-sm text-gray-600 mb-3">
                <span className="font-medium text-red-600">{stats.overdue} factures</span> sont en retard de paiement 
                pour un total de <span className="font-medium text-red-600">€{stats.totalAmount.toLocaleString()}</span>. 
                Les retards critiques (&gt;15 jours) nécessitent une intervention immédiate.
              </p>
              <div className="flex gap-2">
                <button className="px-3 py-1.5 bg-red-600 text-white rounded text-xs hover:bg-red-700 flex items-center gap-1">
                  <Mail className="w-3 h-3" />
                  Envoyer rappels
                </button>
                <button className="px-3 py-1.5 border border-red-300 text-red-600 rounded text-xs hover:bg-red-50 flex items-center gap-1">
                  <Phone className="w-3 h-3" />
                  Contacter
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg border border-gray-200 p-4 mb-6">
          <div className="flex flex-wrap gap-3">
            <button className="px-3 py-1.5 bg-red-50 text-red-700 rounded-lg text-xs font-medium hover:bg-red-100">
              Tous
            </button>
            <button className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-lg text-xs hover:bg-gray-200">
              Impayés
            </button>
            <button className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-lg text-xs hover:bg-gray-200">
              Non lues
            </button>
            <button className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-lg text-xs hover:bg-gray-200">
              Priorité haute
            </button>
            <select className="ml-auto text-xs border border-gray-300 rounded px-3 py-1.5 bg-white text-[#403323] focus:outline-none focus:border-[#38712c]">
              <option>Trier par : Priorité</option>
              <option>Trier par : Date</option>
              <option>Trier par : Montant</option>
              <option>Trier par : Retard</option>
            </select>
          </div>
        </div>

        {/* Alerts List */}
        <div className="bg-white rounded-lg border border-gray-200 flex-1 overflow-hidden flex flex-col">
          <div className="border-b border-gray-200 px-4 py-3 bg-gray-50">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Bell className="w-5 h-5 text-[#403323]" />
                <h2 className="text-sm font-medium text-[#403323]">Toutes les alertes</h2>
              </div>
              <div className="text-xs text-gray-500">
                {stats.unread} non lues • {stats.overdue} impayés
              </div>
            </div>
          </div>
          
          <div className="flex-1 overflow-y-auto">
            <div className="divide-y divide-gray-100">
              {alerts.map((alert) => (
                <div 
                  key={alert.id} 
                  className={`p-4 hover:bg-gray-50 transition-colors ${!alert.read ? 'bg-blue-50/50' : ''}`}
                >
                  <div className="flex gap-4">
                    {/* Icon */}
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${getTypeColor(alert.type).split(' ')[0]}`}>
                      {getTypeIcon(alert.type)}
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="text-sm font-medium text-[#403323]">{alert.title}</h3>
                            {getPriorityBadge(alert.priority)}
                            {!alert.read && (
                              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                            )}
                          </div>
                          <p className="text-sm text-gray-600 mb-2">{alert.description}</p>
                        </div>
                        {alert.amount && (
                          <div className="text-right">
                            <div className="text-sm font-medium text-[#403323]">€{alert.amount}</div>
                            {alert.daysOverdue && (
                              <div className="text-xs text-red-600">{alert.daysOverdue} jours de retard</div>
                            )}
                          </div>
                        )}
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-xs text-gray-500">
                          <div className="flex items-center gap-1">
                            <FileText className="w-3 h-3" />
                            {alert.invoiceNumber}
                          </div>
                          <div className="flex items-center gap-1">
                            <span className="w-6 h-6 bg-[#38712c] rounded-full flex items-center justify-center text-white text-xs">
                              {alert.resident.split(' ').map(n => n[0]).join('')}
                            </span>
                            {alert.resident}
                          </div>
                          <div>
                            Échéance: {alert.dueDate}
                          </div>
                        </div>

                        <div className="flex gap-2">
                          {!alert.read && (
                            <button 
                              onClick={() => markAsRead(alert.id)}
                              className="px-3 py-1 border border-gray-300 rounded text-xs text-[#403323] hover:bg-gray-100"
                            >
                              Marquer comme lu
                            </button>
                          )}
                          <button className="px-3 py-1 bg-[#ff7f27] text-white rounded text-xs hover:bg-[#e66f1f]">
                            Action
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="border-t border-gray-200 px-4 py-3 bg-gray-50 flex items-center justify-between">
            <div className="text-sm text-gray-500">
              Affichage {alerts.length} alertes
            </div>
            <div className="flex items-center gap-4">
              <button className="text-xs text-[#403323] hover:text-[#38712c]">
                Exporter la liste
              </button>
              <button className="text-xs text-[#403323] hover:text-[#38712c]">
                Voir l'historique complet
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}