import React, { useState } from "react";

type MaintenanceEvent = {
  id: string;
  title: string;
  type: "maintenance" | "repair" | "inspection" | "emergency" | "cleaning" | "upgrade";
  startDate: string;
  endDate: string;
  room: string;
  status: "pending" | "in-progress" | "completed" | "cancelled" | "scheduled";
  building: string;
  technician?: string;
  priority: "low" | "medium" | "high" | "urgent";
  notes?: string;
};

export default function MaintenanceDashboard() {
  const [currentMonth, setCurrentMonth] = useState(11); // Décembre
  const [currentYear, setCurrentYear] = useState(2024);
  const [selectedBuilding, setSelectedBuilding] = useState<string>("all");
  const [selectedEvent, setSelectedEvent] = useState<MaintenanceEvent | null>(null);
  const [showNewTicketModal, setShowNewTicketModal] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({
    maintenance: true,
    repair: true,
    inspection: true,
    emergency: true,
    cleaning: true,
    upgrade: true
  });
  const [selectedPriority, setSelectedPriority] = useState<string>("all");

  const monthNames = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", 
                      "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
  
  const dayNames = ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"];

  const buildings = [
    { id: "all", name: "Tous les bâtiments" },
    { id: "A", name: "Bâtiment A" },
    { id: "B", name: "Bâtiment B" },
    { id: "C", name: "Bâtiment C" }
  ];

  const priorities = [
    { id: "all", name: "Toutes priorités" },
    { id: "urgent", name: "Urgent" },
    { id: "high", name: "Haute" },
    { id: "medium", name: "Moyenne" },
    { id: "low", name: "Basse" }
  ];

  // DONNÉES DE MAINTENANCE
  const maintenanceEvents: MaintenanceEvent[] = [
    { id: "m1", title: "Contrôle Chauffage", type: "inspection", startDate: "2024-12-04", endDate: "2024-12-04", room: "Système Chauffage", status: "scheduled", building: "Bâtiment A", technician: "Jean Dupont", priority: "medium", notes: "Contrôle annuel obligatoire" },
    { id: "m2", title: "Révision Ascenseur B", type: "maintenance", startDate: "2024-12-08", endDate: "2024-12-08", room: "Ascenseur B", status: "scheduled", building: "Bâtiment B", technician: "Pierre Martin", priority: "medium", notes: "Révision trimestrielle" },
    { id: "m3", title: "Vérification Électrique", type: "inspection", startDate: "2024-12-12", endDate: "2024-12-12", room: "Tableau Principal", status: "scheduled", building: "Bâtiment A", technician: "Luc Bernard", priority: "high", notes: "Vérification sécurité" },
    { id: "m4", title: "Réparation Robinet", type: "repair", startDate: "2024-12-15", endDate: "2024-12-15", room: "Chambre 107", status: "in-progress", building: "Bâtiment B", technician: "Marc Leroy", priority: "high", notes: "Fuites constantes" },
    { id: "m5", title: "Inspection Toiture", type: "inspection", startDate: "2024-12-18", endDate: "2024-12-18", room: "Toit Bâtiment C", status: "pending", building: "Bâtiment C", technician: "", priority: "medium", notes: "Inspection après tempête" },
    { id: "m6", title: "Panne Ascenseur A", type: "emergency", startDate: "2024-12-05", endDate: "2024-12-05", room: "Ascenseur A", status: "completed", building: "Bâtiment A", technician: "Pierre Martin", priority: "urgent", notes: "Réparation urgente terminée" },
    { id: "m7", title: "Nettoyage Chaudièree", type: "cleaning", startDate: "2024-12-10", endDate: "2024-12-10", room: "Chaudière", status: "scheduled", building: "Bâtiment A", technician: "Thomas Petit", priority: "low" },
    { id: "m8", title: "Mise à jour Sécurité", type: "upgrade", startDate: "2024-12-22", endDate: "2024-12-22", room: "Système Alarme", status: "scheduled", building: "Bâtiment C", technician: "Alexandre Roux", priority: "medium", notes: "Installation nouveaux détecteurs" },
    { id: "m9", title: "Fuites Salle de Bain", type: "repair", startDate: "2024-12-03", endDate: "2024-12-03", room: "Chambre 205", status: "completed", building: "Bâtiment B", technician: "Marc Leroy", priority: "high", notes: "Joint à remplacer" },
    { id: "m10", title: "Entretien Mensuel", type: "maintenance", startDate: "2024-12-20", endDate: "2024-12-20", room: "Communs", status: "pending", building: "Bâtiment A", technician: "Jean Dupont", priority: "low" },
    { id: "m11", title: "Problème Éclairage", type: "repair", startDate: "2024-12-07", endDate: "2024-12-07", room: "Couloir B", status: "in-progress", building: "Bâtiment B", technician: "Luc Bernard", priority: "medium", notes: "Remplacement ampoules LED" },
    { id: "m12", title: "Contrôle Annuel", type: "inspection", startDate: "2024-12-28", endDate: "2024-12-28", room: "Toutes Zones", status: "scheduled", building: "Tous", technician: "Équipe complète", priority: "medium", notes: "Inspection annuelle complète" },
    { id: "m13", title: "Urgence Plomberie", type: "emergency", startDate: "2024-12-14", endDate: "2024-12-14", room: "Cuisine Commune", status: "completed", building: "Bâtiment C", technician: "Marc Leroy", priority: "urgent", notes: "Évacuation bouchée" },
    { id: "m14", title: "Installation Nouveau HVAC", type: "upgrade", startDate: "2024-12-25", endDate: "2024-12-26", room: "Salle Technique", status: "pending", building: "Bâtiment A", technician: "Spécialiste HVAC", priority: "high", notes: "Installation nouveau système" },
    { id: "m15", title: "Nettoyage Profond", type: "cleaning", startDate: "2024-12-30", endDate: "2024-12-30", room: "Toutes Chambres", status: "scheduled", building: "Bâtiment B", technician: "Équipe Nettoyage", priority: "low" },
  ];

  // Fonction pour obtenir la couleur selon le type d'événement - PALETTE SIMPLIFIÉE
  const getEventColor = (type: MaintenanceEvent["type"]) => {
    // PRIORITÉ 1 - BLEU (Interventions critiques)
    if (type === "emergency") return "#d32f2f"; // Rouge pour urgences
    
    // PRIORITÉ 2 - ORANGE (Maintenance)
    if (type === "maintenance") return "#f57c00"; // Orange
    
    // PRIORITÉ 3 - VERT (Vérifications)
    if (type === "inspection") return "#1976d2"; // Bleu
    
    // AUTRES
    switch(type) {
      case "repair": return "#7b1fa2"; // Violet
      case "cleaning": return "#5d4037"; // Marron
      case "upgrade": return "#388e3c"; // Vert foncé
      default: return "#757575"; // Gris
    }
  };

  // Fonction pour obtenir la couleur selon la priorité - PALETTE SIMPLIFIÉE
  const getPriorityColor = (priority: MaintenanceEvent["priority"]) => {
    switch(priority) {
      case "urgent": return "#d32f2f"; // Rouge
      case "high": return "#f57c00"; // Orange
      case "medium": return "#1976d2"; // Bleu
      case "low": return "#388e3c"; // Vert
      default: return "#757575"; // Gris
    }
  };

  // Fonction pour obtenir l'icône selon le type
  const getEventIcon = (type: MaintenanceEvent["type"]) => {
    switch(type) {
      case "maintenance": return "🔧";
      case "repair": return "🛠️";
      case "inspection": return "🔍";
      case "emergency": return "🚨";
      case "cleaning": return "🧹";
      case "upgrade": return "⚡";
      default: return "📋";
    }
  };

  // Fonction pour obtenir le libellé français
  const getEventTypeLabel = (type: MaintenanceEvent["type"]) => {
    switch(type) {
      case "maintenance": return "Maintenance";
      case "repair": return "Réparation";
      case "inspection": return "Inspection";
      case "emergency": return "Urgence";
      case "cleaning": return "Nettoyage";
      case "upgrade": return "Amélioration";
      default: return "Intervention";
    }
  };

  // Fonction pour obtenir le libellé de statut
  const getStatusLabel = (status: MaintenanceEvent["status"]) => {
    switch(status) {
      case "pending": return "En attente";
      case "in-progress": return "En cours";
      case "completed": return "Terminé";
      case "cancelled": return "Annulé";
      case "scheduled": return "Planifié";
      default: return "Inconnu";
    }
  };

  // Générer les jours du mois
  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  // Fonction corrigée pour obtenir le premier jour du mois (lundi = 0)
  const getFirstDayOfMonth = (year: number, month: number) => {
    const day = new Date(year, month, 1).getDay();
    // Convertir pour que lundi = 0, dimanche = 6
    return day === 0 ? 6 : day - 1;
  };

  // Générer les jours du calendrier
  const generateCalendarDays = () => {
    const daysInMonth = getDaysInMonth(currentYear, currentMonth);
    const firstDayOfMonth = getFirstDayOfMonth(currentYear, currentMonth);
    const days = [];

    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push({ day: 0, date: "", events: [], isToday: false, isWeekend: false });
    }

    for (let i = 1; i <= daysInMonth; i++) {
      const date = new Date(currentYear, currentMonth, i);
      const dateStr = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(i).padStart(2, '0')}`;
      
      // Filtrer les événements pour ce jour
      const dayEvents = maintenanceEvents.filter(event => {
        // Filtre par bâtiment
        if (selectedBuilding !== "all" && event.building !== selectedBuilding) {
          return false;
        }

        // Filtre par type d'événement
        const filterKey = event.type;
        if (!selectedFilters[filterKey]) {
          return false;
        }

        // Filtre par priorité
        if (selectedPriority !== "all" && event.priority !== selectedPriority) {
          return false;
        }

        // Vérifier si la date est dans l'intervalle
        const eventStart = new Date(event.startDate);
        const eventEnd = new Date(event.endDate);
        const currentDate = new Date(dateStr);
        
        return currentDate >= eventStart && currentDate <= eventEnd;
      });

      // Trier les événements par priorité (urgent > high > medium > low)
      dayEvents.sort((a, b) => {
        const priorityOrder = { urgent: 0, high: 1, medium: 2, low: 3 };
        return priorityOrder[a.priority] - priorityOrder[b.priority];
      });

      // Prendre seulement l'événement principal (le plus prioritaire)
      const mainEvent = dayEvents.length > 0 ? dayEvents[0] : null;

      days.push({
        day: i,
        date: dateStr,
        events: dayEvents,
        mainEvent: mainEvent,
        eventsCount: dayEvents.length,
        isToday: date.toDateString() === new Date().toDateString(),
        isWeekend: date.getDay() === 0 || date.getDay() === 6
      });
    }

    return days;
  };

  const calendarDays = generateCalendarDays();

  // Navigation du calendrier
  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const prevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const goToToday = () => {
    setCurrentMonth(new Date().getMonth());
    setCurrentYear(new Date().getFullYear());
  };

  // Gestion des filtres
  const handleFilterToggle = (filterKey: keyof typeof selectedFilters) => {
    setSelectedFilters(prev => ({
      ...prev,
      [filterKey]: !prev[filterKey]
    }));
  };

  // Calcul des statistiques
  const openTickets = maintenanceEvents.filter(e => e.status === "pending" || e.status === "in-progress").length;
  const inProgressTickets = maintenanceEvents.filter(e => e.status === "in-progress").length;
  const completedThisMonth = maintenanceEvents.filter(e => 
    e.status === "completed" && 
    new Date(e.startDate).getMonth() === currentMonth &&
    new Date(e.startDate).getFullYear() === currentYear
  ).length;
  const urgentTickets = maintenanceEvents.filter(e => e.priority === "urgent" && (e.status === "pending" || e.status === "in-progress")).length;

  // STYLES ÉQUILIBRÉS - NI TROP GRAND NI TROP PETIT
  const styles = {
    container: {
      minHeight: '100vh',
      backgroundColor: '#f5f7fa',
      fontFamily: "'Segoe UI', 'Roboto', 'Helvetica', 'Arial', sans-serif",
      color: '#2c3e50',
      padding: '20px'
    },
    header: {
      maxWidth: '1050px',
      margin: '0 auto 30px auto',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap' as const,
      gap: '20px'
    },
    headerTitle: {
      fontSize: '26px',
      fontWeight: 600,
      color: '#2c3e50',
      margin: 0
    },
    newTicketButton: {
      backgroundColor: '#f57c00',
      color: 'white',
      border: 'none',
      padding: '11px 22px',
      borderRadius: '7px',
      fontSize: '13px',
      fontWeight: 600,
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: '7px'
    },
    statsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))',
      gap: '16px',
      margin: '30px auto',
      maxWidth: '1050px'
    },
    statCard: {
      backgroundColor: 'white',
      padding: '18px',
      borderRadius: '9px',
      boxShadow: '0 3px 9px rgba(0,0,0,0.04)',
      borderLeft: '4px solid #f57c00'
    },
    statNumber: {
      fontSize: '26px',
      fontWeight: 700,
      color: '#2c3e50',
      marginBottom: '5px'
    },
    statLabel: {
      fontSize: '13px',
      color: '#7f8c8d',
      fontWeight: 500
    },
    calendarContainer: {
      maxWidth: '1050px',
      margin: '30px auto',
      backgroundColor: 'white',
      borderRadius: '11px',
      boxShadow: '0 4px 11px rgba(0,0,0,0.05)',
      overflow: 'hidden',
      border: '1px solid #eaeaea'
    },
    calendarHeader: {
      padding: '18px',
      borderBottom: '1px solid #eaeaea',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#f8f9fa',
      flexWrap: 'wrap' as const,
      gap: '15px'
    },
    monthNavigation: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      flexWrap: 'wrap' as const
    },
    navButton: {
      backgroundColor: 'transparent',
      border: '1px solid #ddd',
      borderRadius: '6px',
      padding: '7px 14px',
      cursor: 'pointer',
      fontSize: '13px',
      color: '#2c3e50',
      display: 'flex',
      alignItems: 'center',
      gap: '4px'
    },
    monthTitle: {
      fontSize: '18px',
      fontWeight: 600,
      color: '#2c3e50',
      minWidth: '180px',
      textAlign: 'center' as const
    },
    calendarGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(7, 1fr)',
      borderLeft: '1px solid #eaeaea',
      borderRight: '1px solid #eaeaea'
    },
    dayHeader: {
      padding: '12px 6px',
      textAlign: 'center' as const,
      fontWeight: 600,
      color: '#34495e',
      backgroundColor: '#f8f9fa',
      borderBottom: '1px solid #eaeaea',
      borderRight: '1px solid #eaeaea',
      fontSize: '13px'
    },
    dayCell: {
      minHeight: '92px',
      padding: '7px',
      borderBottom: '1px solid #eaeaea',
      borderRight: '1px solid #eaeaea',
      backgroundColor: 'white',
      position: 'relative' as const
    },
    dayNumber: {
      fontSize: '13px',
      fontWeight: 500,
      color: '#2c3e50',
      marginBottom: '6px'
    },
    todayIndicator: {
      backgroundColor: '#f57c00',
      color: 'white',
      width: '22px',
      height: '22px',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '11px',
      fontWeight: 600,
      position: 'absolute' as const,
      top: '6px',
      right: '6px'
    },
    eventBadge: {
      fontSize: '11px',
      padding: '5px 7px',
      borderRadius: '5px',
      marginBottom: '4px',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: '5px',
      color: 'white',
      fontWeight: 500,
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
    },
    moreEvents: {
      fontSize: '10px',
      color: '#7f8c8d',
      backgroundColor: '#f5f5f5',
      padding: '2px 6px',
      borderRadius: '3px',
      marginTop: '4px',
      display: 'inline-block'
    },
    legendContainer: {
      maxWidth: '1050px',
      margin: '30px auto',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '24px'
    },
    legendCard: {
      backgroundColor: 'white',
      padding: '18px',
      borderRadius: '9px',
      boxShadow: '0 3px 9px rgba(0,0,0,0.04)'
    },
    legendTitle: {
      fontSize: '15px',
      fontWeight: 600,
      marginBottom: '12px',
      color: '#2c3e50'
    },
    legendGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '10px'
    },
    legendItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      fontSize: '13px'
    },
    colorDot: {
      width: '12px',
      height: '12px',
      borderRadius: '3px',
      flexShrink: 0
    },
    filtersGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '10px'
    },
    filterCheckbox: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      fontSize: '13px',
      cursor: 'pointer'
    },
    priorityFilter: {
      marginTop: '12px',
      paddingTop: '12px',
      borderTop: '1px solid #eaeaea'
    },
    prioritySelect: {
      width: '100%',
      padding: '9px',
      borderRadius: '6px',
      border: '1px solid #ddd',
      backgroundColor: 'white',
      fontSize: '13px',
      color: '#2c3e50',
      marginTop: '6px'
    }
  };

  // Calculer le nombre total de lignes pour la dernière ligne
  const totalRows = Math.ceil(calendarDays.length / 7);

  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <h1 style={styles.headerTitle}>
          🔧 Tableau de Bord Maintenance
        </h1>
        <button 
          onClick={() => setShowNewTicketModal(true)}
          style={styles.newTicketButton}
        >
          + Nouveau ticket
        </button>
      </div>

      {/* Stats */}
      <div style={styles.statsGrid}>
        <div style={styles.statCard}>
          <div style={styles.statNumber}>{openTickets}</div>
          <div style={styles.statLabel}>Tickets ouverts</div>
        </div>
        <div style={{...styles.statCard, borderLeftColor: '#1976d2'}}>
          <div style={styles.statNumber}>{inProgressTickets}</div>
          <div style={styles.statLabel}>En cours</div>
        </div>
        <div style={{...styles.statCard, borderLeftColor: '#388e3c'}}>
          <div style={styles.statNumber}>{completedThisMonth}</div>
          <div style={styles.statLabel}>Résolus ce mois</div>
        </div>
        <div style={{...styles.statCard, borderLeftColor: '#d32f2f'}}>
          <div style={styles.statNumber}>{urgentTickets}</div>
          <div style={styles.statLabel}>Urgences</div>
        </div>
      </div>

      {/* Calendrier */}
      <div style={styles.calendarContainer}>
        <div style={styles.calendarHeader}>
          <div style={styles.monthNavigation}>
            <button 
              onClick={prevMonth}
              style={styles.navButton}
            >
              ← Préc.
            </button>
            <div style={styles.monthTitle}>
              {monthNames[currentMonth]} {currentYear}
            </div>
            <button 
              onClick={nextMonth}
              style={styles.navButton}
            >
              Suiv. →
            </button>
            <button 
              onClick={goToToday}
              style={{...styles.navButton, backgroundColor: '#f57c00', color: 'white', borderColor: '#f57c00'}}
            >
              Aujourd'hui
            </button>
          </div>
          
          <div style={{ display: 'flex', gap: '10px' }}>
            <select 
              value={selectedBuilding}
              onChange={(e) => setSelectedBuilding(e.target.value)}
              style={{
                padding: '8px 12px',
                borderRadius: '6px',
                border: '1px solid #ddd',
                backgroundColor: 'white',
                fontSize: '13px',
                color: '#2c3e50',
                minWidth: '150px'
              }}
            >
              {buildings.map(building => (
                <option key={building.id} value={building.id === "all" ? "all" : building.name}>
                  {building.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        
        {/* Grille du calendrier */}
        <div style={styles.calendarGrid}>
          {/* En-têtes des jours */}
          {dayNames.map((day, index) => (
            <div 
              key={day} 
              style={{
                ...styles.dayHeader,
                borderLeft: index === 0 ? '1px solid #eaeaea' : undefined
              }}
            >
              {day}
            </div>
          ))}
          
          {/* Jours du mois */}
          {calendarDays.map((day, index) => {
            const isFirstColumn = index % 7 === 0;
            const isLastColumn = index % 7 === 6;
            const currentRow = Math.floor(index / 7) + 1;
            const isLastRow = currentRow === totalRows;
            
            return (
              <div
                key={index}
                style={{
                  ...styles.dayCell,
                  borderLeft: isFirstColumn ? '1px solid #eaeaea' : undefined,
                  borderRight: isLastColumn ? '1px solid #eaeaea' : undefined,
                  borderBottom: isLastRow ? '1px solid #eaeaea' : undefined,
                  backgroundColor: day.isToday ? '#fff3e0' : 
                                 day.isWeekend ? '#f9f9f9' : 'white'
                }}
              >
                <div style={styles.dayNumber}>
                  {day.day > 0 && day.day}
                </div>
                
                {day.isToday && (
                  <div style={styles.todayIndicator}>
                    {day.day}
                  </div>
                )}
                
                {/* Événement principal (seulement 1 par case) */}
                {day.day > 0 && day.mainEvent && (
                  <div
                    style={{
                      ...styles.eventBadge,
                      backgroundColor: getEventColor(day.mainEvent.type)
                    }}
                    onClick={() => setSelectedEvent(day.mainEvent!)}
                    title={`${day.mainEvent.title} - ${getEventTypeLabel(day.mainEvent.type)} - Priorité: ${day.mainEvent.priority}`}
                  >
                    <span>{getEventIcon(day.mainEvent.type)}</span>
                    <span style={{ flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                      {day.mainEvent.title}
                    </span>
                  </div>
                )}
                
                {/* Indicateur d'événements supplémentaires */}
                {day.day > 0 && day.eventsCount > 1 && (
                  <div style={styles.moreEvents}>
                    +{day.eventsCount - 1} intervention{day.eventsCount > 2 ? 's' : ''}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Légende et Filtres */}
      <div style={styles.legendContainer}>
        {/* Légende */}
        <div style={styles.legendCard}>
          <h3 style={styles.legendTitle}>Légende des Interventions</h3>
          <div style={styles.legendGrid}>
            <div style={styles.legendItem}>
              <div style={{...styles.colorDot, backgroundColor: '#d32f2f'}}></div>
              <span>Urgences</span>
            </div>
            <div style={styles.legendItem}>
              <div style={{...styles.colorDot, backgroundColor: '#f57c00'}}></div>
              <span>Maintenance</span>
            </div>
            <div style={styles.legendItem}>
              <div style={{...styles.colorDot, backgroundColor: '#1976d2'}}></div>
              <span>Inspections</span>
            </div>
            <div style={styles.legendItem}>
              <div style={{...styles.colorDot, backgroundColor: '#7b1fa2'}}></div>
              <span>Réparations</span>
            </div>
            <div style={styles.legendItem}>
              <div style={{...styles.colorDot, backgroundColor: '#5d4037'}}></div>
              <span>Nettoyage</span>
            </div>
            <div style={styles.legendItem}>
              <div style={{...styles.colorDot, backgroundColor: '#388e3c'}}></div>
              <span>Améliorations</span>
            </div>
          </div>
        </div>

        {/* Filtres */}
        <div style={styles.legendCard}>
          <h3 style={styles.legendTitle}>Filtrer les Interventions</h3>
          <div style={styles.filtersGrid}>
            <label style={styles.filterCheckbox}>
              <input
                type="checkbox"
                checked={selectedFilters.maintenance}
                onChange={() => handleFilterToggle('maintenance')}
                style={{ width: '13px', height: '13px' }}
              />
              <span>Maintenance</span>
            </label>
            <label style={styles.filterCheckbox}>
              <input
                type="checkbox"
                checked={selectedFilters.repair}
                onChange={() => handleFilterToggle('repair')}
                style={{ width: '13px', height: '13px' }}
              />
              <span>Réparations</span>
            </label>
            <label style={styles.filterCheckbox}>
              <input
                type="checkbox"
                checked={selectedFilters.inspection}
                onChange={() => handleFilterToggle('inspection')}
                style={{ width: '13px', height: '13px' }}
              />
              <span>Inspections</span>
            </label>
            <label style={styles.filterCheckbox}>
              <input
                type="checkbox"
                checked={selectedFilters.emergency}
                onChange={() => handleFilterToggle('emergency')}
                style={{ width: '13px', height: '13px' }}
              />
              <span>Urgences</span>
            </label>
            <label style={styles.filterCheckbox}>
              <input
                type="checkbox"
                checked={selectedFilters.cleaning}
                onChange={() => handleFilterToggle('cleaning')}
                style={{ width: '13px', height: '13px' }}
              />
              <span>Nettoyage</span>
            </label>
            <label style={styles.filterCheckbox}>
              <input
                type="checkbox"
                checked={selectedFilters.upgrade}
                onChange={() => handleFilterToggle('upgrade')}
                style={{ width: '13px', height: '13px' }}
              />
              <span>Améliorations</span>
            </label>
          </div>
          
          <div style={styles.priorityFilter}>
            <label style={{ fontSize: '13px', fontWeight: 500, color: '#2c3e50' }}>
              Filtrer par priorité
            </label>
            <select 
              value={selectedPriority}
              onChange={(e) => setSelectedPriority(e.target.value)}
              style={styles.prioritySelect}
            >
              {priorities.map(priority => (
                <option key={priority.id} value={priority.id}>
                  {priority.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Modal Nouveau Ticket */}
      {showNewTicketModal && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
          padding: '20px'
        }} onClick={() => setShowNewTicketModal(false)}>
          <div style={{
            backgroundColor: 'white',
            borderRadius: '12px',
            maxWidth: '500px',
            width: '100%',
            maxHeight: '90vh',
            overflowY: 'auto'
          }} onClick={(e) => e.stopPropagation()}>
            <div style={{
              padding: '20px',
              borderBottom: '1px solid #eaeaea',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <h3 style={{ margin: 0, fontSize: '18px', fontWeight: 600, color: '#2c3e50' }}>
                Nouveau Ticket de Maintenance
              </h3>
              <button 
                onClick={() => setShowNewTicketModal(false)}
                style={{ background: 'none', border: 'none', fontSize: '24px', cursor: 'pointer', color: '#7f8c8d' }}
              >
                ×
              </button>
            </div>
            
            <div style={{ padding: '20px' }}>
              <form onSubmit={(e) => { e.preventDefault(); alert("Ticket créé avec succès!"); setShowNewTicketModal(false); }}>
                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: 500, color: '#2c3e50' }}>
                    Titre de l'intervention
                  </label>
                  <input 
                    type="text" 
                    style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #ddd', fontSize: '14px' }}
                    placeholder="Ex: Fuite salle de bain Ch. 205"
                    required
                  />
                </div>
                
                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: 500, color: '#2c3e50' }}>
                    Type d'intervention
                  </label>
                  <select style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #ddd', fontSize: '14px' }}>
                    <option>Maintenance</option>
                    <option>Réparation</option>
                    <option>Inspection</option>
                    <option>Urgence</option>
                    <option>Nettoyage</option>
                    <option>Amélioration</option>
                  </select>
                </div>
                
                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: 500, color: '#2c3e50' }}>
                    Priorité
                  </label>
                  <select style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #ddd', fontSize: '14px' }}>
                    <option>Basse</option>
                    <option>Moyenne</option>
                    <option>Haute</option>
                    <option>Urgente</option>
                  </select>
                </div>
                
                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: 500, color: '#2c3e50' }}>
                    Localisation
                  </label>
                  <select style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #ddd', fontSize: '14px' }}>
                    <option>Sélectionner un bâtiment...</option>
                    <option>Bâtiment A</option>
                    <option>Bâtiment B</option>
                    <option>Bâtiment C</option>
                  </select>
                </div>
                
                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: 500, color: '#2c3e50' }}>
                    Description du problème
                  </label>
                  <textarea 
                    style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #ddd', fontSize: '14px', minHeight: '100px' }}
                    placeholder="Décrivez le problème en détail..."
                    required
                  />
                </div>
                
                <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
                  <button 
                    type="button"
                    onClick={() => setShowNewTicketModal(false)}
                    style={{ padding: '10px 20px', borderRadius: '6px', border: '1px solid #ddd', background: 'white', color: '#2c3e50', cursor: 'pointer', fontSize: '14px' }}
                  >
                    Annuler
                  </button>
                  <button 
                    type="submit"
                    style={{ padding: '10px 20px', borderRadius: '6px', border: 'none', background: '#f57c00', color: 'white', cursor: 'pointer', fontSize: '14px', fontWeight: 500 }}
                  >
                    Créer le ticket
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Modal Détails Intervention */}
      {selectedEvent && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
          padding: '20px'
        }} onClick={() => setSelectedEvent(null)}>
          <div style={{
            backgroundColor: 'white',
            borderRadius: '12px',
            maxWidth: '500px',
            width: '100%',
            maxHeight: '90vh',
            overflowY: 'auto'
          }} onClick={(e) => e.stopPropagation()}>
            <div style={{
              padding: '20px',
              borderBottom: '1px solid #eaeaea',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              backgroundColor: getEventColor(selectedEvent.type),
              color: 'white',
              borderRadius: '12px 12px 0 0'
            }}>
              <h3 style={{ margin: 0, fontSize: '18px', fontWeight: 600 }}>
                Détails de l'intervention
              </h3>
              <button 
                onClick={() => setSelectedEvent(null)}
                style={{ background: 'none', border: 'none', fontSize: '24px', cursor: 'pointer', color: 'white' }}
              >
                ×
              </button>
            </div>
            
            <div style={{ padding: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '8px',
                  backgroundColor: getEventColor(selectedEvent.type),
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '20px'
                }}>
                  {getEventIcon(selectedEvent.type)}
                </div>
                <div>
                  <h4 style={{ margin: 0, fontSize: '18px', fontWeight: 600, color: '#2c3e50' }}>
                    {selectedEvent.title}
                  </h4>
                  <p style={{ margin: '5px 0 0 0', color: '#7f8c8d' }}>
                    {selectedEvent.room} • {selectedEvent.building}
                  </p>
                </div>
              </div>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '20px' }}>
                <div>
                  <div style={{ fontSize: '12px', color: '#95a5a6', marginBottom: '5px' }}>Type</div>
                  <div style={{
                    display: 'inline-block',
                    padding: '5px 10px',
                    borderRadius: '4px',
                    backgroundColor: getEventColor(selectedEvent.type),
                    color: 'white',
                    fontSize: '12px',
                    fontWeight: 500
                  }}>
                    {getEventTypeLabel(selectedEvent.type)}
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: '12px', color: '#95a5a6', marginBottom: '5px' }}>Statut</div>
                  <div style={{
                    display: 'inline-block',
                    padding: '5px 10px',
                    borderRadius: '4px',
                    backgroundColor: selectedEvent.status === 'completed' ? '#388e3c' :
                                    selectedEvent.status === 'in-progress' ? '#1976d2' :
                                    selectedEvent.status === 'scheduled' ? '#f57c00' : '#757575',
                    color: 'white',
                    fontSize: '12px',
                    fontWeight: 500
                  }}>
                    {getStatusLabel(selectedEvent.status)}
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: '12px', color: '#95a5a6', marginBottom: '5px' }}>Priorité</div>
                  <div style={{
                    display: 'inline-block',
                    padding: '5px 10px',
                    borderRadius: '4px',
                    backgroundColor: getPriorityColor(selectedEvent.priority),
                    color: 'white',
                    fontSize: '12px',
                    fontWeight: 500
                  }}>
                    {selectedEvent.priority === 'urgent' ? 'Urgente' :
                     selectedEvent.priority === 'high' ? 'Haute' :
                     selectedEvent.priority === 'medium' ? 'Moyenne' : 'Basse'}
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: '12px', color: '#95a5a6', marginBottom: '5px' }}>Date</div>
                  <div style={{ fontSize: '14px', fontWeight: 500 }}>
                    {selectedEvent.startDate.split('-').reverse().join('/')}
                  </div>
                </div>
              </div>
              
              {selectedEvent.technician && (
                <div style={{ marginBottom: '15px' }}>
                  <div style={{ fontSize: '12px', color: '#95a5a6', marginBottom: '5px' }}>Technicien assigné</div>
                  <div style={{ fontSize: '14px', fontWeight: 500 }}>{selectedEvent.technician}</div>
                </div>
              )}
              
              {selectedEvent.notes && (
                <div style={{ marginBottom: '20px' }}>
                  <div style={{ fontSize: '12px', color: '#95a5a6', marginBottom: '5px' }}>Notes</div>
                  <div style={{ 
                    fontSize: '14px', 
                    padding: '10px',
                    backgroundColor: '#f8f9fa',
                    borderRadius: '6px',
                    border: '1px solid #eaeaea'
                  }}>
                    {selectedEvent.notes}
                  </div>
                </div>
              )}
              
              <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
                <button 
                  style={{ 
                    flex: 1,
                    padding: '10px',
                    borderRadius: '6px',
                    border: '1px solid #ddd',
                    background: 'white',
                    color: '#2c3e50',
                    cursor: 'pointer',
                    fontSize: '14px'
                  }}
                >
                  Assigner un technicien
                </button>
                <button 
                  onClick={() => setSelectedEvent(null)}
                  style={{ 
                    flex: 1,
                    padding: '10px',
                    borderRadius: '6px',
                    border: 'none',
                    background: '#f57c00',
                    color: 'white',
                    cursor: 'pointer',
                    fontSize: '14px',
                    fontWeight: 500
                  }}
                >
                  Fermer
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}