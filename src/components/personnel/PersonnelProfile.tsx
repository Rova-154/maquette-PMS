import React from "react";
import { Edit, Download, Mail, Phone, MapPin, Calendar, Award, FileText, User } from "lucide-react";

export default function PersonnelProfile() {
  const employee = {
    name: "Jean Dupont",
    role: "Surveillant",
    department: "Sécurité",
    employeeId: "EMP-2023-001",
    hireDate: "15/01/2023",
    email: "jean.dupont@entreprise.com",
    phone: "+33 6 12 34 56 78",
    address: "123 Rue de Paris, 75001 Paris",
    status: "Actif",
    contractType: "CDI",
    salary: "2800€",
    lastEvaluation: "15/12/2023",
    evaluationScore: "4.2/5",
  };

  const skills = ["Surveillance", "Gestion de crise", "Premiers secours", "Rapport d'incident"];
  const recentTasks = [
    { id: 1, task: "Surveillance nocturne", date: "14/03/2024", status: "Terminé" },
    { id: 2, task: "Formation sécurité", date: "10/03/2024", status: "Terminé" },
    { id: 3, task: "Vérification équipements", date: "16/03/2024", status: "En cours" },
  ];

  return (
    <div className="flex-1 p-6 overflow-y-auto">
      <div className="max-w-full">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-2xl font-bold text-[#403323] mb-1">Profil du Personnel</h1>
            <p className="text-sm text-gray-500">Informations détaillées du membre</p>
          </div>
          <div className="flex gap-2">
            <button className="flex items-center gap-2 bg-[#38712c] text-white px-4 py-2 rounded-md hover:bg-[#2d5a23] transition-colors text-sm font-medium">
              <Edit className="w-4 h-4" />
              Modifier
            </button>
            <button className="flex items-center gap-2 border border-[#e6e6e6] text-[#403323] px-4 py-2 rounded-md hover:bg-[#f5f5f5] transition-colors text-sm font-medium">
              <Download className="w-4 h-4" />
              Exporter PDF
            </button>
          </div>
        </div>

        {/* KPI Cards - Compact */}
        <div className="grid grid-cols-4 gap-3 mb-4">
          <div className="bg-white rounded-lg p-3 border border-gray-200">
            <div className="text-xs text-gray-500 mb-1">Ancienneté</div>
            <div className="text-xl font-bold text-[#38712c]">1 an</div>
          </div>
          <div className="bg-white rounded-lg p-3 border border-gray-200 border-l-3 border-[#38712c]">
            <div className="text-xs text-gray-500 mb-1">Évaluation</div>
            <div className="text-xl font-bold text-[#38712c]">4.2/5</div>
          </div>
          <div className="bg-white rounded-lg p-3 border border-gray-200 border-l-3 border-[#ff7f27]">
            <div className="text-xs text-gray-500 mb-1">Salaire</div>
            <div className="text-xl font-bold text-[#ff7f27]">2,800€</div>
          </div>
          <div className="bg-white rounded-lg p-3 border border-gray-200 border-l-3 border-[#403323]">
            <div className="text-xs text-gray-500 mb-1">Tâches actives</div>
            <div className="text-xl font-bold text-[#403323]">3</div>
          </div>
        </div>

        {/* Profile Card */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
          <div className="flex items-start gap-6">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#38712c] to-[#4a8c3a] flex items-center justify-center">
              <User className="w-12 h-12 text-white" />
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-[#403323]">{employee.name}</h2>
                  <p className="text-lg text-[#ff7f27]">{employee.role} • {employee.department}</p>
                </div>
                <span className="px-3 py-1 text-sm font-medium bg-green-50 text-green-700 rounded-full border border-green-100">
                  {employee.status}
                </span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-3 bg-[#f5f5f5] rounded-lg">
                  <div className="w-10 h-10 rounded-full bg-[#38712c] flex items-center justify-center">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="font-medium text-[#403323]">{employee.email}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-[#f5f5f5] rounded-lg">
                  <div className="w-10 h-10 rounded-full bg-[#ff7f27] flex items-center justify-center">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Téléphone</p>
                    <p className="font-medium text-[#403323]">{employee.phone}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-[#f5f5f5] rounded-lg">
                  <div className="w-10 h-10 rounded-full bg-[#403323] flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Date d'embauche</p>
                    <p className="font-medium text-[#403323]">{employee.hireDate}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-[#f5f5f5] rounded-lg">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#38712c] to-[#ff7f27] flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Adresse</p>
                    <p className="font-medium text-[#403323]">{employee.address}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Compétences */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-[#403323] mb-4">Compétences</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span key={index} className="px-3 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 rounded-lg text-sm font-medium border border-blue-100">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Évaluation */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-[#403323] mb-4">Dernière évaluation</h3>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-3xl font-bold text-[#38712c]">{employee.evaluationScore}</p>
                <p className="text-sm text-gray-500">Date: {employee.lastEvaluation}</p>
              </div>
              <div className="relative">
                <Award className="w-12 h-12 text-[#ff7f27]" />
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-[#38712c] rounded-full flex items-center justify-center">
                  <span className="text-xs text-white">1er</span>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-gradient-to-r from-[#38712c] to-[#4a8c3a] h-2 rounded-full" style={{ width: '84%' }}></div>
              </div>
              <p className="text-xs text-gray-500 mt-2 text-right">84% performance</p>
            </div>
          </div>

          {/* Tâches récentes */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-[#403323] mb-4">Tâches récentes</h3>
            <div className="space-y-3">
              {recentTasks.map((task) => (
                <div key={task.id} className="flex items-center justify-between p-3 hover:bg-[#f5f5f5] rounded-lg border border-gray-100">
                  <div>
                    <p className="font-medium text-[#403323]">{task.task}</p>
                    <p className="text-sm text-gray-500">{task.date}</p>
                  </div>
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                    task.status === "Terminé" 
                      ? "bg-green-50 text-green-700 border border-green-100" 
                      : "bg-blue-50 text-blue-700 border border-blue-100"
                  }`}>
                    {task.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Documents */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-[#403323] mb-4">Documents</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 hover:bg-[#f5f5f5] rounded-lg border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-red-50 to-red-100 rounded flex items-center justify-center">
                    <FileText className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <span className="font-medium text-[#403323]">Contrat de travail</span>
                    <p className="text-xs text-gray-500">PDF • 1.2 MB</p>
                  </div>
                </div>
                <button className="text-sm text-[#38712c] hover:text-[#2d5a23] font-medium">
                  Télécharger
                </button>
              </div>
              <div className="flex items-center justify-between p-3 hover:bg-[#f5f5f5] rounded-lg border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-50 to-blue-100 rounded flex items-center justify-center">
                    <FileText className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <span className="font-medium text-[#403323]">Fiche de paie - Février</span>
                    <p className="text-xs text-gray-500">PDF • 0.8 MB</p>
                  </div>
                </div>
                <button className="text-sm text-[#38712c] hover:text-[#2d5a23] font-medium">
                  Télécharger
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}