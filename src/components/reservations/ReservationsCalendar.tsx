import React, { useState } from "react";

type CalendarEvent = {
  id: string;
  title: string;
  type: "arrival" | "departure" | "maintenance" | "payment" | "reservation" | "cleaning" | "reminder";
  startDate: string;
  endDate: string;
  room: string;
  status: "active" | "completed" | "pending" | "confirmed" | "expired";
  building: string;
  notes?: string;
  pensionnaire?: string;
};

const ReservationsCalendar = () => {
  const [currentMonth, setCurrentMonth] = useState(11);
  const [currentYear, setCurrentYear] = useState(2024);
  const [selectedBuilding, setSelectedBuilding] = useState<string>("all");
  const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | null>(null);
  const [showNewBookingModal, setShowNewBookingModal] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({
    reservations: true,
    maintenance: true,
    arrivals: true,
    departures: true,
    payments: true,
    reminders: true
  });

  const monthNames = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", 
                      "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
  
  const dayNames = ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"];

  const buildings = [
    { id: "all", name: "Tous les bâtiments" },
    { id: "A", name: "Bâtiment A" },
    { id: "B", name: "Bâtiment B" },
    { id: "C", name: "Bâtiment C" }
  ];

  // DONNÉES SIMPLIFIÉES - moins d'événements pour un affichage plus clair
  const events: CalendarEvent[] = [
    // Arrivées - VERT
    { id: "d1", title: "Arrivée Ch. 101", type: "arrival", startDate: "2024-12-01", endDate: "2024-12-01", room: "Chambre 101", status: "confirmed", building: "Bâtiment A", pensionnaire: "Lucas Martin" },
    { id: "d4", title: "Arrivée Ch. 107", type: "arrival", startDate: "2024-12-08", endDate: "2024-12-08", room: "Chambre 107", status: "confirmed", building: "Bâtiment B", pensionnaire: "Clara Laurent" },
    { id: "d6", title: "Arrivée Suite 301", type: "arrival", startDate: "2024-12-12", endDate: "2024-12-12", room: "Suite 301", status: "confirmed", building: "Bâtiment C", pensionnaire: "Sophie Roux" },
    { id: "d7", title: "Arrivée Ch. 108", type: "arrival", startDate: "2024-12-15", endDate: "2024-12-15", room: "Chambre 108", status: "pending", building: "Bâtiment A", pensionnaire: "Nicolas Leroy" },
    
    // Réservations - VERT FONCÉ
    { id: "d15", title: "Noël Famille", type: "reservation", startDate: "2024-12-20", endDate: "2024-12-27", room: "Suite 301", status: "confirmed", building: "Bâtiment C", pensionnaire: "Famille Martin" },
    { id: "d17", title: "Stage Étudiant", type: "reservation", startDate: "2024-12-01", endDate: "2024-12-14", room: "Chambre 106", status: "confirmed", building: "Bâtiment A", pensionnaire: "Étudiant Étranger" },
    
    // Maintenance - ORANGE
    { id: "d31", title: "Maintenance Chauffage", type: "maintenance", startDate: "2024-12-04", endDate: "2024-12-05", room: "Système Chauffage", status: "pending", building: "Bâtiment A", notes: "Contrôle annuel" },
    { id: "d33", title: "Maintenance Électricité", type: "maintenance", startDate: "2024-12-12", endDate: "2024-12-13", room: "Tableau Électrique", status: "pending", building: "Bâtiment A", notes: "Vérification sécurité" },
    
    // Rappels - MARRON
    { id: "d46", title: "Rappel Paiement", type: "reminder", startDate: "2024-12-03", endDate: "2024-12-03", room: "Toutes", status: "pending", building: "Tous", notes: "Rappel échéance 5 décembre" },
    { id: "d48", title: "Rappel Arrivée", type: "reminder", startDate: "2024-12-19", endDate: "2024-12-19", room: "Chambre 108", status: "pending", building: "Bâtiment A", notes: "Arrivée le 20 décembre" },
    
    // Départs - BLEU
    { id: "d25", title: "Départ Ch. 102", type: "departure", startDate: "2024-12-02", endDate: "2024-12-02", room: "Chambre 102", status: "completed", building: "Bâtiment A", pensionnaire: "Pierre Martin" },
    { id: "d27", title: "Départ Ch. 201", type: "departure", startDate: "2024-12-15", endDate: "2024-12-15", room: "Chambre 201", status: "active", building: "Bâtiment B", pensionnaire: "Émilie Rousseau" },
    
    // Paiements - ROUGE
    { id: "d36", title: "Paiement Loyer", type: "payment", startDate: "2024-12-05", endDate: "2024-12-05", room: "Toutes", status: "pending", building: "Tous", notes: "Échéance mensuelle" },
    { id: "d38", title: "Paiement Ch. 204", type: "payment", startDate: "2024-12-15", endDate: "2024-12-15", room: "Chambre 204", status: "pending", building: "Bâtiment B" },
  ];

  // Fonction pour obtenir la couleur selon le type d'événement (vos couleurs)
  const getEventColor = (type: CalendarEvent["type"]) => {
    // PRIORITÉ 1 - VERT
    if (type === "arrival") return "#27ae60"; // Vert
    if (type === "reservation") return "#2e7d32"; // Vert foncé
    
    // PRIORITÉ 2 - ORANGE
    if (type === "maintenance") return "#f57c00"; // Orange
    
    // PRIORITÉ 3 - MARRON
    if (type === "reminder") return "#5d4037"; // Marron
    
    // AUTRES TYPES
    switch(type) {
      case "departure": return "#1976d2"; // Bleu
      case "payment": return "#d32f2f"; // Rouge
      case "cleaning": return "#7b1fa2"; // Violet
      default: return "#757575"; // Gris
    }
  };

  // Fonction pour obtenir l'icône selon le type
  const getEventIcon = (type: CalendarEvent["type"]) => {
    switch(type) {
      case "arrival": return "→";
      case "departure": return "←";
      case "maintenance": return "⚙";
      case "payment": return "€";
      case "reservation": return "✓";
      case "cleaning": return "🧹";
      case "reminder": return "!";
      default: return "•";
    }
  };

  const getEventTypeLabel = (type: CalendarEvent["type"]) => {
    switch(type) {
      case "arrival": return "Arrivée";
      case "departure": return "Départ";
      case "maintenance": return "Maintenance";
      case "payment": return "Paiement";
      case "reservation": return "Réservation";
      case "cleaning": return "Nettoyage";
      case "reminder": return "Rappel";
      default: return "Événement";
    }
  };

  const getEventPriority = (type: CalendarEvent["type"]) => {
    if (type === "arrival" || type === "reservation") return 1;
    if (type === "maintenance") return 2;
    if (type === "reminder") return 3;
    return 4;
  };

  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (year: number, month: number) => {
    const day = new Date(year, month, 1).getDay();
    return day === 0 ? 6 : day - 1;
  };

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
      
      const dayEvents = events.filter(event => {
        if (selectedBuilding !== "all" && event.building !== selectedBuilding) {
          return false;
        }

        const filterKey = event.type === "arrival" ? "arrivals" : 
                         event.type === "departure" ? "departures" :
                         event.type === "maintenance" ? "maintenance" :
                         event.type === "payment" ? "payments" :
                         event.type === "reservation" ? "reservations" :
                         event.type === "reminder" ? "reminders" : "reservations";
        
        if (!selectedFilters[filterKey]) {
          return false;
        }

        const eventStart = new Date(event.startDate);
        const eventEnd = new Date(event.endDate);
        const currentDate = new Date(dateStr);
        
        return currentDate >= eventStart && currentDate <= eventEnd;
      });

      dayEvents.sort((a, b) => getEventPriority(a.type) - getEventPriority(b.type));

      // Prendre seulement l'événement principal (le premier)
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

  const handleFilterToggle = (filterKey: keyof typeof selectedFilters) => {
    setSelectedFilters(prev => ({
      ...prev,
      [filterKey]: !prev[filterKey]
    }));
  };

  const handleOpenNewBooking = () => setShowNewBookingModal(true);
  const handleCloseNewBooking = () => setShowNewBookingModal(false);
  const handleCreateNewBooking = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Nouvelle réservation créée avec succès !");
    handleCloseNewBooking();
  };

  // Styles minimalistes et épurés
  const styles = {
    container: {
      minHeight: '100vh',
      backgroundColor: '#f5f7fa',
      fontFamily: "'Segoe UI', 'Roboto', 'Helvetica', 'Arial', sans-serif",
      color: '#2c3e50',
      padding: '20px'
    },
    header: {
      maxWidth: '1200px',
      margin: '0 auto 30px auto',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap' as const,
      gap: '20px'
    },
    headerTitle: {
      fontSize: '28px',
      fontWeight: 600,
      color: '#2c3e50',
      margin: 0
    },
    headerActions: {
      display: 'flex',
      gap: '15px',
      alignItems: 'center'
    },
    newBookingButton: {
      backgroundColor: '#27ae60',
      color: 'white',
      border: 'none',
      padding: '12px 24px',
      borderRadius: '8px',
      fontSize: '14px',
      fontWeight: 600,
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    },
    calendarContainer: {
      maxWidth: '1200px',
      margin: '0 auto',
      backgroundColor: 'white',
      borderRadius: '12px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
      overflow: 'hidden'
    },
    calendarHeader: {
      padding: '20px',
      borderBottom: '1px solid #eaeaea',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#f8f9fa'
    },
    monthNavigation: {
      display: 'flex',
      alignItems: 'center',
      gap: '15px'
    },
    navButton: {
      backgroundColor: 'transparent',
      border: '1px solid #ddd',
      borderRadius: '6px',
      padding: '8px 16px',
      cursor: 'pointer',
      fontSize: '14px',
      color: '#2c3e50',
      display: 'flex',
      alignItems: 'center',
      gap: '5px'
    },
    monthTitle: {
      fontSize: '20px',
      fontWeight: 600,
      color: '#2c3e50',
      minWidth: '200px',
      textAlign: 'center' as const
    },
    calendarGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(7, 1fr)',
      borderTop: '1px solid #eaeaea'
    },
    dayHeader: {
      padding: '15px',
      textAlign: 'center' as const,
      fontWeight: 600,
      color: '#34495e',
      backgroundColor: '#f8f9fa',
      borderBottom: '1px solid #eaeaea',
      borderRight: '1px solid #eaeaea',
      fontSize: '14px'
    },
    dayCell: {
      minHeight: '100px',
      padding: '10px',
      borderBottom: '1px solid #eaeaea',
      borderRight: '1px solid #eaeaea',
      backgroundColor: 'white',
      position: 'relative' as const
    },
    dayNumber: {
      fontSize: '14px',
      fontWeight: 500,
      color: '#2c3e50',
      marginBottom: '8px'
    },
    todayIndicator: {
      backgroundColor: '#27ae60',
      color: 'white',
      width: '24px',
      height: '24px',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '12px',
      fontWeight: 600,
      position: 'absolute' as const,
      top: '8px',
      right: '8px'
    },
    eventBadge: {
      fontSize: '12px',
      padding: '6px 10px',
      borderRadius: '6px',
      marginBottom: '5px',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: '6px',
      color: 'white',
      fontWeight: 500,
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    },
    moreEvents: {
      fontSize: '11px',
      color: '#7f8c8d',
      backgroundColor: '#f5f5f5',
      padding: '3px 8px',
      borderRadius: '4px',
      marginTop: '5px',
      display: 'inline-block'
    },
    legendContainer: {
      maxWidth: '1200px',
      margin: '30px auto',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '30px'
    },
    legendCard: {
      backgroundColor: 'white',
      padding: '20px',
      borderRadius: '12px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
    },
    legendTitle: {
      fontSize: '16px',
      fontWeight: 600,
      marginBottom: '15px',
      color: '#2c3e50'
    },
    legendGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '12px'
    },
    legendItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      fontSize: '14px'
    },
    colorDot: {
      width: '14px',
      height: '14px',
      borderRadius: '3px',
      flexShrink: 0
    },
    filterCheckbox: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      fontSize: '14px',
      cursor: 'pointer'
    },
    statsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '20px',
      margin: '30px auto',
      maxWidth: '1200px'
    },
    statCard: {
      backgroundColor: 'white',
      padding: '20px',
      borderRadius: '12px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
      borderLeft: '4px solid #27ae60'
    },
    statNumber: {
      fontSize: '32px',
      fontWeight: 700,
      color: '#2c3e50',
      marginBottom: '5px'
    },
    statLabel: {
      fontSize: '14px',
      color: '#7f8c8d',
      fontWeight: 500
    }
  };

  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <h1 style={styles.headerTitle}>
          📅 Calendrier des Réservations
        </h1>
        <div style={styles.headerActions}>
          <button 
            onClick={handleOpenNewBooking}
            style={styles.newBookingButton}
          >
            + Nouvelle Réservation
          </button>
        </div>
      </div>

      {/* Stats */}
      <div style={styles.statsGrid}>
        <div style={styles.statCard}>
          <div style={styles.statNumber}>8</div>
          <div style={styles.statLabel}>Réservations Actives</div>
        </div>
        <div style={{...styles.statCard, borderLeftColor: '#27ae60'}}>
          <div style={styles.statNumber}>22</div>
          <div style={styles.statLabel}>Chambres Disponibles</div>
        </div>
        <div style={{...styles.statCard, borderLeftColor: '#f57c00'}}>
          <div style={styles.statNumber}>4</div>
          <div style={styles.statLabel}>Arrivées Cette Semaine</div>
        </div>
        <div style={{...styles.statCard, borderLeftColor: '#1976d2'}}>
          <div style={styles.statNumber}>2</div>
          <div style={styles.statLabel}>Départs Cette Semaine</div>
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
              ← Précédent
            </button>
            <div style={styles.monthTitle}>
              {monthNames[currentMonth]} {currentYear}
            </div>
            <button 
              onClick={nextMonth}
              style={styles.navButton}
            >
              Suivant →
            </button>
            <button 
              onClick={goToToday}
              style={{...styles.navButton, backgroundColor: '#27ae60', color: 'white', borderColor: '#27ae60'}}
            >
              Aujourd'hui
            </button>
          </div>
          
          <select 
            value={selectedBuilding}
            onChange={(e) => setSelectedBuilding(e.target.value)}
            style={{
              padding: '10px 15px',
              borderRadius: '6px',
              border: '1px solid #ddd',
              backgroundColor: 'white',
              fontSize: '14px',
              color: '#2c3e50',
              minWidth: '200px'
            }}
          >
            {buildings.map(building => (
              <option key={building.id} value={building.id === "all" ? "all" : building.name}>
                {building.name}
              </option>
            ))}
          </select>
        </div>
        
        {/* Grille du calendrier */}
        <div style={styles.calendarGrid}>
          {/* En-têtes des jours */}
          {dayNames.map(day => (
            <div key={day} style={styles.dayHeader}>
              {day}
            </div>
          ))}
          
          {/* Jours du mois */}
          {calendarDays.map((day, index) => (
            <div
              key={index}
              style={{
                ...styles.dayCell,
                backgroundColor: day.isToday ? '#f0f9f0' : 
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
                  title={`${day.mainEvent.title} - ${getEventTypeLabel(day.mainEvent.type)}`}
                >
                  <span>{getEventIcon(day.mainEvent.type)}</span>
                  <span style={{ flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                    {day.mainEvent.title}
                  </span>
                </div>
              )}
              
              {/* Indicateur d'événements supplémentaires (discret) */}
              {day.day > 0 && day.eventsCount > 1 && (
                <div style={styles.moreEvents}>
                  +{day.eventsCount - 1} autre{day.eventsCount > 2 ? 's' : ''}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Légende et Filtres */}
      <div style={styles.legendContainer}>
        {/* Légende */}
        <div style={styles.legendCard}>
          <h3 style={styles.legendTitle}>Légende des Couleurs</h3>
          <div style={styles.legendGrid}>
            <div style={styles.legendItem}>
              <div style={{...styles.colorDot, backgroundColor: '#27ae60'}}></div>
              <span>Arrivées (Vert)</span>
            </div>
            <div style={styles.legendItem}>
              <div style={{...styles.colorDot, backgroundColor: '#2e7d32'}}></div>
              <span>Réservations (Vert foncé)</span>
            </div>
            <div style={styles.legendItem}>
              <div style={{...styles.colorDot, backgroundColor: '#f57c00'}}></div>
              <span>Maintenance (Orange)</span>
            </div>
            <div style={styles.legendItem}>
              <div style={{...styles.colorDot, backgroundColor: '#5d4037'}}></div>
              <span>Rappels (Marron)</span>
            </div>
            <div style={styles.legendItem}>
              <div style={{...styles.colorDot, backgroundColor: '#1976d2'}}></div>
              <span>Départs (Bleu)</span>
            </div>
            <div style={styles.legendItem}>
              <div style={{...styles.colorDot, backgroundColor: '#d32f2f'}}></div>
              <span>Paiements (Rouge)</span>
            </div>
          </div>
        </div>

        {/* Filtres */}
        <div style={styles.legendCard}>
          <h3 style={styles.legendTitle}>Filtrer les Événements</h3>
          <div style={styles.legendGrid}>
            <label style={styles.filterCheckbox}>
              <input
                type="checkbox"
                checked={selectedFilters.arrivals}
                onChange={() => handleFilterToggle('arrivals')}
                style={{ width: '16px', height: '16px' }}
              />
              <span>Arrivées</span>
            </label>
            <label style={styles.filterCheckbox}>
              <input
                type="checkbox"
                checked={selectedFilters.reservations}
                onChange={() => handleFilterToggle('reservations')}
                style={{ width: '16px', height: '16px' }}
              />
              <span>Réservations</span>
            </label>
            <label style={styles.filterCheckbox}>
              <input
                type="checkbox"
                checked={selectedFilters.maintenance}
                onChange={() => handleFilterToggle('maintenance')}
                style={{ width: '16px', height: '16px' }}
              />
              <span>Maintenance</span>
            </label>
            <label style={styles.filterCheckbox}>
              <input
                type="checkbox"
                checked={selectedFilters.reminders}
                onChange={() => handleFilterToggle('reminders')}
                style={{ width: '16px', height: '16px' }}
              />
              <span>Rappels</span>
            </label>
            <label style={styles.filterCheckbox}>
              <input
                type="checkbox"
                checked={selectedFilters.departures}
                onChange={() => handleFilterToggle('departures')}
                style={{ width: '16px', height: '16px' }}
              />
              <span>Départs</span>
            </label>
            <label style={styles.filterCheckbox}>
              <input
                type="checkbox"
                checked={selectedFilters.payments}
                onChange={() => handleFilterToggle('payments')}
                style={{ width: '16px', height: '16px' }}
              />
              <span>Paiements</span>
            </label>
          </div>
        </div>
      </div>

      {/* Modal Nouvelle Réservation */}
      {showNewBookingModal && (
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
        }} onClick={handleCloseNewBooking}>
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
                Nouvelle Réservation
              </h3>
              <button 
                onClick={handleCloseNewBooking}
                style={{ background: 'none', border: 'none', fontSize: '24px', cursor: 'pointer', color: '#7f8c8d' }}
              >
                ×
              </button>
            </div>
            
            <div style={{ padding: '20px' }}>
              <form onSubmit={handleCreateNewBooking}>
                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: 500, color: '#2c3e50' }}>
                    Pensionnaire
                  </label>
                  <select style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #ddd', fontSize: '14px' }}>
                    <option>Sélectionner...</option>
                    <option>Marie Dubois</option>
                    <option>Pierre Laurent</option>
                    <option>Claire Martin</option>
                  </select>
                </div>
                
                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: 500, color: '#2c3e50' }}>
                    Chambre
                  </label>
                  <select style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #ddd', fontSize: '14px' }}>
                    <option>Sélectionner...</option>
                    <option>Ch. 203 - Disponible</option>
                    <option>Ch. 205 - Disponible</option>
                    <option>Suite 301 - Disponible</option>
                  </select>
                </div>
                
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '20px' }}>
                  <div>
                    <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: 500, color: '#2c3e50' }}>
                      Date d'arrivée
                    </label>
                    <input 
                      type="date" 
                      style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #ddd', fontSize: '14px' }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: 500, color: '#2c3e50' }}>
                      Date de départ
                    </label>
                    <input 
                      type="date" 
                      style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #ddd', fontSize: '14px' }}
                    />
                  </div>
                </div>
                
                <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
                  <button 
                    type="button"
                    onClick={handleCloseNewBooking}
                    style={{ padding: '10px 20px', borderRadius: '6px', border: '1px solid #ddd', background: 'white', color: '#2c3e50', cursor: 'pointer', fontSize: '14px' }}
                  >
                    Annuler
                  </button>
                  <button 
                    type="submit"
                    style={{ padding: '10px 20px', borderRadius: '6px', border: 'none', background: '#27ae60', color: 'white', cursor: 'pointer', fontSize: '14px', fontWeight: 500 }}
                  >
                    Créer
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Modal Détails Événement */}
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
              alignItems: 'center'
            }}>
              <h3 style={{ margin: 0, fontSize: '18px', fontWeight: 600, color: '#2c3e50' }}>
                Détails de l'événement
              </h3>
              <button 
                onClick={() => setSelectedEvent(null)}
                style={{ background: 'none', border: 'none', fontSize: '24px', cursor: 'pointer', color: '#7f8c8d' }}
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
                  fontSize: '20px',
                  fontWeight: 'bold'
                }}>
                  {getEventIcon(selectedEvent.type)}
                </div>
                <div>
                  <h4 style={{ margin: 0, fontSize: '18px', fontWeight: 600, color: '#2c3e50' }}>
                    {selectedEvent.title}
                  </h4>
                  <p style={{ margin: '5px 0 0 0', color: '#7f8c8d' }}>
                    {selectedEvent.room}
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
                    backgroundColor: selectedEvent.status === 'confirmed' ? '#27ae60' :
                                    selectedEvent.status === 'pending' ? '#f57c00' : '#7f8c8d',
                    color: 'white',
                    fontSize: '12px',
                    fontWeight: 500
                  }}>
                    {selectedEvent.status === 'confirmed' ? 'Confirmé' : 
                     selectedEvent.status === 'pending' ? 'En attente' : 'Terminé'}
                  </div>
                </div>
              </div>
              
              <div style={{ marginBottom: '15px' }}>
                <div style={{ fontSize: '12px', color: '#95a5a6', marginBottom: '5px' }}>Dates</div>
                <div style={{ fontSize: '14px', fontWeight: 500 }}>
                  {selectedEvent.startDate.split('-').reverse().join('/')} → {selectedEvent.endDate.split('-').reverse().join('/')}
                </div>
              </div>
              
              <div style={{ marginBottom: '15px' }}>
                <div style={{ fontSize: '12px', color: '#95a5a6', marginBottom: '5px' }}>Bâtiment</div>
                <div style={{ fontSize: '14px', fontWeight: 500 }}>{selectedEvent.building}</div>
              </div>
              
              {selectedEvent.pensionnaire && (
                <div style={{ marginBottom: '15px' }}>
                  <div style={{ fontSize: '12px', color: '#95a5a6', marginBottom: '5px' }}>Pensionnaire</div>
                  <div style={{ fontSize: '14px', fontWeight: 500 }}>{selectedEvent.pensionnaire}</div>
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
                  Modifier
                </button>
                <button 
                  onClick={() => setSelectedEvent(null)}
                  style={{ 
                    flex: 1,
                    padding: '10px',
                    borderRadius: '6px',
                    border: 'none',
                    background: '#27ae60',
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
};

export default ReservationsCalendar;