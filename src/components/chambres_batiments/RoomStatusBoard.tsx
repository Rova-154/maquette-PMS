import { Home, User, Wifi, AirVent, Tv, Eye, Edit } from "lucide-react";

const roomsByStatus = {
  available: [
    { number: "104", building: "Bât. A", floor: 1, capacity: 1, equipment: ["wifi", "ac", "tv"] },
    { number: "108", building: "Bât. A", floor: 1, capacity: 1, equipment: ["wifi", "ac"] },
    { number: "205", building: "Bât. A", floor: 2, capacity: 2, equipment: ["wifi"] },
    { number: "312", building: "Bât. B", floor: 3, capacity: 1, equipment: ["wifi", "ac", "tv"] },
    { number: "401", building: "Bât. B", floor: 4, capacity: 2, equipment: ["wifi", "ac"] },
  ],
  occupied: [
    { number: "207", building: "Bât. A", floor: 2, capacity: 1, resident: "Lucas Dubois", equipment: ["wifi", "ac"] },
    { number: "315", building: "Bât. B", floor: 3, capacity: 2, resident: "Emma Leroy", equipment: ["wifi", "ac", "tv"] },
    { number: "412", building: "Bât. B", floor: 4, capacity: 1, resident: "Thomas Bernard", equipment: ["wifi"] },
    { number: "203", building: "Bât. A", floor: 2, capacity: 1, resident: "Alexandre Roux", equipment: ["wifi", "ac"] },
    { number: "310", building: "Bât. B", floor: 3, capacity: 1, resident: "Julie Durand", equipment: ["wifi", "ac", "tv"] },
  ],
  maintenance: [
    { number: "201", building: "Bât. A", floor: 2, capacity: 1, issue: "Fuite d'eau", equipment: ["wifi", "ac"] },
    { number: "308", building: "Bât. B", floor: 3, capacity: 2, issue: "Panne électrique", equipment: ["wifi"] },
  ],
  reserved: [
    { number: "106", building: "Bât. A", floor: 1, capacity: 1, reservedFor: "Nouveau pensionnaire", equipment: ["wifi", "ac", "tv"] },
    { number: "214", building: "Bât. A", floor: 2, capacity: 2, reservedFor: "Transfer", equipment: ["wifi", "ac"] },
  ],
};

const equipmentIcons: Record<string, any> = {
  wifi: Wifi,
  ac: AirVent,
  tv: Tv,
};

export function RoomStatusBoard() {
  return (
    <div className="flex-1 p-6 overflow-y-auto">
      <div className="max-w-full h-full flex flex-col">
        {/* Title */}
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-xl text-[#403323]">Statuts des chambres</h1>
          <div className="flex gap-2">
            <select className="text-xs border border-[#e6e6e6] rounded px-3 py-2 bg-white text-[#403323]">
              <option>Tous bâtiments</option>
              <option>Bâtiment A</option>
              <option>Bâtiment B</option>
            </select>
            <select className="text-xs border border-[#e6e6e6] rounded px-3 py-2 bg-white text-[#403323]">
              <option>Tous étages</option>
              <option>Étage 1</option>
              <option>Étage 2</option>
              <option>Étage 3</option>
              <option>Étage 4</option>
            </select>
          </div>
        </div>

        {/* Status Summary */}
        <div className="grid grid-cols-4 gap-4 mb-4">
          <div className="bg-white rounded-xl p-3 shadow-sm border-l-4 border-[#38712c]">
            <div className="text-xs text-gray-500 mb-1">Disponible</div>
            <div className="text-2xl text-[#38712c]">{roomsByStatus.available.length}</div>
          </div>
          <div className="bg-white rounded-xl p-3 shadow-sm border-l-4 border-[#ff7f27]">
            <div className="text-xs text-gray-500 mb-1">Occupée</div>
            <div className="text-2xl text-[#ff7f27]">{roomsByStatus.occupied.length}</div>
          </div>
          <div className="bg-white rounded-xl p-3 shadow-sm border-l-4 border-[#403323]">
            <div className="text-xs text-gray-500 mb-1">Maintenance</div>
            <div className="text-2xl text-[#403323]">{roomsByStatus.maintenance.length}</div>
          </div>
          <div className="bg-white rounded-xl p-3 shadow-sm border-l-4 border-gray-400">
            <div className="text-xs text-gray-500 mb-1">Réservée</div>
            <div className="text-2xl text-gray-600">{roomsByStatus.reserved.length}</div>
          </div>
        </div>

        {/* Kanban Board */}
        <div className="grid grid-cols-4 gap-4 flex-1 overflow-hidden">
          {/* Available Column */}
          <div className="bg-white rounded-xl p-4 shadow-sm flex flex-col overflow-hidden">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-3 h-3 bg-[#38712c] rounded-full"></div>
              <h3 className="text-sm text-[#403323]">Disponible</h3>
              <span className="ml-auto text-xs bg-[#38712c]/10 text-[#38712c] px-2 py-0.5 rounded">
                {roomsByStatus.available.length}
              </span>
            </div>
            <div className="flex-1 overflow-y-auto space-y-2">
              {roomsByStatus.available.map((room, idx) => (
                <div key={idx} className="bg-[#f5f5f5] rounded-lg p-3 border-l-2 border-[#38712c]">
                  <div className="flex items-center gap-2 mb-2">
                    <Home className="w-4 h-4 text-[#38712c]" />
                    <span className="text-sm text-[#403323]">Ch. {room.number}</span>
                  </div>
                  <div className="text-xs text-gray-600 mb-2">
                    {room.building} - Étage {room.floor}
                  </div>
                  <div className="text-xs text-gray-500 mb-2">
                    Capacité: {room.capacity} pers.
                  </div>
                  <div className="flex gap-1 mb-2">
                    {room.equipment.map((eq, i) => {
                      const Icon = equipmentIcons[eq];
                      return Icon ? (
                        <div key={i} className="w-5 h-5 bg-white rounded flex items-center justify-center">
                          <Icon className="w-3 h-3 text-gray-600" />
                        </div>
                      ) : null;
                    })}
                  </div>
                  <div className="flex gap-1 pt-2 border-t border-[#e6e6e6]">
                    <button className="flex-1 text-xs py-1 bg-[#38712c] text-white rounded hover:bg-[#2d5a23]">
                      Assigner
                    </button>
                    <button className="p-1 hover:bg-white rounded">
                      <Eye className="w-3 h-3 text-gray-600" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Occupied Column */}
          <div className="bg-white rounded-xl p-4 shadow-sm flex flex-col overflow-hidden">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-3 h-3 bg-[#ff7f27] rounded-full"></div>
              <h3 className="text-sm text-[#403323]">Occupée</h3>
              <span className="ml-auto text-xs bg-[#ff7f27]/10 text-[#ff7f27] px-2 py-0.5 rounded">
                {roomsByStatus.occupied.length}
              </span>
            </div>
            <div className="flex-1 overflow-y-auto space-y-2">
              {roomsByStatus.occupied.map((room, idx) => (
                <div key={idx} className="bg-[#f5f5f5] rounded-lg p-3 border-l-2 border-[#ff7f27]">
                  <div className="flex items-center gap-2 mb-2">
                    <Home className="w-4 h-4 text-[#ff7f27]" />
                    <span className="text-sm text-[#403323]">Ch. {room.number}</span>
                  </div>
                  <div className="text-xs text-gray-600 mb-2">
                    {room.building} - Étage {room.floor}
                  </div>
                  <div className="flex items-center gap-2 mb-2 p-2 bg-white rounded">
                    <User className="w-3 h-3 text-[#ff7f27]" />
                    <span className="text-xs text-[#403323]">{room.resident}</span>
                  </div>
                  <div className="flex gap-1 mb-2">
                    {room.equipment.map((eq, i) => {
                      const Icon = equipmentIcons[eq];
                      return Icon ? (
                        <div key={i} className="w-5 h-5 bg-white rounded flex items-center justify-center">
                          <Icon className="w-3 h-3 text-gray-600" />
                        </div>
                      ) : null;
                    })}
                  </div>
                  <div className="flex gap-1 pt-2 border-t border-[#e6e6e6]">
                    <button className="flex-1 text-xs py-1 border border-[#e6e6e6] rounded hover:bg-white">
                      Détails
                    </button>
                    <button className="p-1 hover:bg-white rounded">
                      <Edit className="w-3 h-3 text-gray-600" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Maintenance Column */}
          <div className="bg-white rounded-xl p-4 shadow-sm flex flex-col overflow-hidden">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-3 h-3 bg-[#403323] rounded-full"></div>
              <h3 className="text-sm text-[#403323]">Maintenance</h3>
              <span className="ml-auto text-xs bg-[#403323]/10 text-[#403323] px-2 py-0.5 rounded">
                {roomsByStatus.maintenance.length}
              </span>
            </div>
            <div className="flex-1 overflow-y-auto space-y-2">
              {roomsByStatus.maintenance.map((room, idx) => (
                <div key={idx} className="bg-[#f5f5f5] rounded-lg p-3 border-l-2 border-[#403323]">
                  <div className="flex items-center gap-2 mb-2">
                    <Home className="w-4 h-4 text-[#403323]" />
                    <span className="text-sm text-[#403323]">Ch. {room.number}</span>
                  </div>
                  <div className="text-xs text-gray-600 mb-2">
                    {room.building} - Étage {room.floor}
                  </div>
                  <div className="text-xs bg-red-50 text-red-700 p-2 rounded mb-2">
                    {room.issue}
                  </div>
                  <div className="flex gap-1 mb-2">
                    {room.equipment.map((eq, i) => {
                      const Icon = equipmentIcons[eq];
                      return Icon ? (
                        <div key={i} className="w-5 h-5 bg-white rounded flex items-center justify-center">
                          <Icon className="w-3 h-3 text-gray-600" />
                        </div>
                      ) : null;
                    })}
                  </div>
                  <div className="flex gap-1 pt-2 border-t border-[#e6e6e6]">
                    <button className="flex-1 text-xs py-1 bg-[#403323] text-white rounded hover:bg-[#2d2419]">
                      Réparer
                    </button>
                    <button className="p-1 hover:bg-white rounded">
                      <Eye className="w-3 h-3 text-gray-600" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Reserved Column */}
          <div className="bg-white rounded-xl p-4 shadow-sm flex flex-col overflow-hidden">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
              <h3 className="text-sm text-[#403323]">Réservée</h3>
              <span className="ml-auto text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded">
                {roomsByStatus.reserved.length}
              </span>
            </div>
            <div className="flex-1 overflow-y-auto space-y-2">
              {roomsByStatus.reserved.map((room, idx) => (
                <div key={idx} className="bg-[#f5f5f5] rounded-lg p-3 border-l-2 border-gray-400">
                  <div className="flex items-center gap-2 mb-2">
                    <Home className="w-4 h-4 text-gray-600" />
                    <span className="text-sm text-[#403323]">Ch. {room.number}</span>
                  </div>
                  <div className="text-xs text-gray-600 mb-2">
                    {room.building} - Étage {room.floor}
                  </div>
                  <div className="text-xs bg-blue-50 text-blue-700 p-2 rounded mb-2">
                    Pour: {room.reservedFor}
                  </div>
                  <div className="flex gap-1 mb-2">
                    {room.equipment.map((eq, i) => {
                      const Icon = equipmentIcons[eq];
                      return Icon ? (
                        <div key={i} className="w-5 h-5 bg-white rounded flex items-center justify-center">
                          <Icon className="w-3 h-3 text-gray-600" />
                        </div>
                      ) : null;
                    })}
                  </div>
                  <div className="flex gap-1 pt-2 border-t border-[#e6e6e6]">
                    <button className="flex-1 text-xs py-1 border border-[#e6e6e6] rounded hover:bg-white">
                      Confirmer
                    </button>
                    <button className="p-1 hover:bg-white rounded">
                      <Eye className="w-3 h-3 text-gray-600" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}