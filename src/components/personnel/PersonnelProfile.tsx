import React, { useState } from "react";
import { Edit, Download, Mail, Phone, MapPin, Calendar, Award, FileText, User, ChevronLeft, ChevronRight, Briefcase, DollarSign, Clock, CheckCircle } from "lucide-react";

export default function PersonnelProfile() {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(3);

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

  const skills = ["Surveillance", "Gestion de crise", "Premiers secours", "Rapport d'incident", "Contrôle d'accès", "Gestion d'équipe"];
  const documents = [
    { id: 1, name: "Contrat de travail", type: "PDF", size: "1.2 MB" },
    { id: 2, name: "Fiche de paie - Février", type: "PDF", size: "0.8 MB" },
    { id: 3, name: "Évaluation annuelle", type: "PDF", size: "0.5 MB" },
    { id: 4, name: "Certificat de formation", type: "PDF", size: "0.3 MB" },
  ];

  const recentTasks = [
    { id: 1, task: "Surveillance nocturne", date: "14/03/2024", status: "Terminé" },
    { id: 2, task: "Formation sécurité", date: "10/03/2024", status: "Terminé" },
    { id: 3, task: "Vérification équipements", date: "16/03/2024", status: "En cours" },
    { id: 4, task: "Ronde de sécurité", date: "15/03/2024", status: "Terminé" },
    { id: 5, task: "Rapport mensuel", date: "17/03/2024", status: "Planifié" },
  ];

  // Pagination pour les documents
  const totalPages = Math.ceil(documents.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, documents.length);
  const currentDocuments = documents.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="flex-1 p-4 md:p-6 overflow-y-auto">
      <div className="max-w-full">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 md:mb-6">
          <div className="mb-4 md:mb-0">
            <h1 className="text-xl md:text-2xl font-bold text-[#403323] mb-1">Profil du Personnel</h1>
            <p className="text-sm text-gray-600">Informations détaillées du membre</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <button className="flex items-center justify-center gap-2 bg-[#38712c] text-white px-4 py-2 rounded-md hover:bg-[#2d5a23] transition-colors text-sm font-medium w-full md:w-auto">
              <Edit className="w-4 h-4" />
              Modifier
            </button>
            <button className="flex items-center justify-center gap-2 border border-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-50 transition-colors text-sm font-medium w-full md:w-auto">
              <Download className="w-4 h-4" />
              Exporter PDF
            </button>
          </div>
        </div>

        {/* KPI Cards - Uniformisé avec icônes */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4 md:mb-6">
          <div className="bg-white rounded-lg p-3 border border-gray-200">
            <div className="flex items-center gap-2 text-xs text-gray-600 mb-1">
              <Calendar className="w-3 h-3" />
              Ancienneté
            </div>
            <div className="text-lg md:text-xl font-bold text-[#38712c]">1 an</div>
          </div>
          <div className="bg-white rounded-lg p-3 border border-gray-200">
            <div className="flex items-center gap-2 text-xs text-gray-600 mb-1">
              <Award className="w-3 h-3" />
              Évaluation
            </div>
            <div className="text-lg md:text-xl font-bold text-[#38712c]">4.2/5</div>
          </div>
          <div className="bg-white rounded-lg p-3 border border-gray-200">
            <div className="flex items-center gap-2 text-xs text-gray-600 mb-1">
              <DollarSign className="w-3 h-3" />
              Salaire
            </div>
            <div className="text-lg md:text-xl font-bold text-[#ff7f27]">2,800€</div>
          </div>
          <div className="bg-white rounded-lg p-3 border border-gray-200">
            <div className="flex items-center gap-2 text-xs text-gray-600 mb-1">
              <Clock className="w-3 h-3" />
              Tâches actives
            </div>
            <div className="text-lg md:text-xl font-bold text-[#403323]">3</div>
          </div>
        </div>

        {/* Profile Card */}
        <div className="bg-white rounded-lg border border-gray-200 p-4 md:p-6 mb-6">
          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-[#38712c] to-[#4a8c3a] flex items-center justify-center mx-auto md:mx-0">
              <User className="w-8 h-8 md:w-12 md:h-12 text-white" />
            </div>
            <div className="flex-1 w-full">
              <div className="flex flex-col md:flex-row justify-between items-start mb-6">
                <div className="mb-4 md:mb-0">
                  <h2 className="text-xl md:text-2xl font-bold text-[#403323]">{employee.name}</h2>
                  <div className="flex items-center gap-2 mt-1">
                    <Briefcase className="w-4 h-4 text-[#ff7f27]" />
                    <p className="text-base md:text-lg text-[#ff7f27]">{employee.role} • {employee.department}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#38712c]"></div>
                  <span className="px-3 py-1 text-sm font-medium bg-[#38712c]/10 text-[#38712c] rounded-full border border-[#38712c]/20">
                    {employee.status}
                  </span>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-3 bg-[#f5f5f5] rounded-lg">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#38712c] flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4 md:w-5 md:h-5 text-white" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-gray-600">Email</p>
                    <p className="font-medium text-[#403323] truncate">{employee.email}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-[#f5f5f5] rounded-lg">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#ff7f27] flex items-center justify-center flex-shrink-0">
                    <Phone className="w-4 h-4 md:w-5 md:h-5 text-white" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-gray-600">Téléphone</p>
                    <p className="font-medium text-[#403323]">{employee.phone}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-[#f5f5f5] rounded-lg">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#403323] flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-4 h-4 md:w-5 md:h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-600">Date d'embauche</p>
                    <p className="font-medium text-[#403323]">{employee.hireDate}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-[#f5f5f5] rounded-lg">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-r from-[#38712c] to-[#ff7f27] flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 md:w-5 md:h-5 text-white" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-gray-600">Adresse</p>
                    <p className="font-medium text-[#403323] truncate">{employee.address}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Compétences */}
          <div className="bg-white rounded-lg border border-gray-200 p-4 md:p-6">
            <div className="flex items-center gap-2 mb-4">
              <Award className="w-5 h-5 text-[#403323]" />
              <h3 className="text-lg font-semibold text-[#403323]">Compétences</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <div key={index} className="flex items-center gap-2 px-3 py-2 bg-[#38712c]/10 text-[#38712c] rounded-lg text-sm font-medium border border-[#38712c]/20">
                  <CheckCircle className="w-3 h-3" />
                  {skill}
                </div>
              ))}
            </div>
          </div>

          {/* Évaluation */}
          <div className="bg-white rounded-lg border border-gray-200 p-4 md:p-6">
            <div className="flex items-center gap-2 mb-4">
              <Award className="w-5 h-5 text-[#403323]" />
              <h3 className="text-lg font-semibold text-[#403323]">Dernière évaluation</h3>
            </div>
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-2xl md:text-3xl font-bold text-[#38712c]">{employee.evaluationScore}</p>
                <p className="text-sm text-gray-600">Date: {employee.lastEvaluation}</p>
              </div>
              <div className="relative">
                <Award className="w-10 h-10 md:w-12 md:h-12 text-[#ff7f27]" />
                <div className="absolute -top-1 -right-1 w-5 h-5 md:w-6 md:h-6 bg-[#38712c] rounded-full flex items-center justify-center">
                  <span className="text-xs text-white">1er</span>
                </div>
              </div>
            </div>
            <div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-gradient-to-r from-[#38712c] to-[#4a8c3a] h-2 rounded-full" style={{ width: '84%' }}></div>
              </div>
              <p className="text-xs text-gray-600 mt-2 text-right">84% performance</p>
            </div>
          </div>

          {/* Tâches récentes */}
          <div className="bg-white rounded-lg border border-gray-200 p-4 md:p-6">
            <div className="flex items-center gap-2 mb-4">
              <Clock className="w-5 h-5 text-[#403323]" />
              <h3 className="text-lg font-semibold text-[#403323]">Tâches récentes</h3>
            </div>
            <div className="space-y-3">
              {recentTasks.map((task) => (
                <div key={task.id} className="flex items-center justify-between p-3 hover:bg-[#f5f5f5] rounded-lg border border-gray-100">
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${task.status === "Terminé" ? "bg-[#38712c]" : task.status === "En cours" ? "bg-[#ff7f27]" : "bg-gray-400"}`}></div>
                      <p className="font-medium text-[#403323] truncate">{task.task}</p>
                    </div>
                    <p className="text-sm text-gray-600 ml-4">{task.date}</p>
                  </div>
                  <span className={`flex items-center gap-1 px-2 py-1 text-xs font-medium rounded-full ${task.status === "Terminé" 
                      ? "bg-[#38712c]/10 text-[#38712c]" 
                      : task.status === "En cours"
                      ? "bg-[#ff7f27]/10 text-[#ff7f27]"
                      : "bg-gray-100 text-gray-600"}`}>
                    {task.status === "Terminé" && <CheckCircle className="w-3 h-3" />}
                    {task.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Documents */}
          <div className="bg-white rounded-lg border border-gray-200 p-4 md:p-6">
            <div className="flex items-center gap-2 mb-4">
              <FileText className="w-5 h-5 text-[#403323]" />
              <h3 className="text-lg font-semibold text-[#403323]">Documents</h3>
            </div>
            <div className="space-y-3 mb-4">
              {currentDocuments.map((doc) => (
                <div key={doc.id} className="flex items-center justify-between p-3 hover:bg-[#f5f5f5] rounded-lg border border-gray-100">
                  <div className="flex items-center gap-3 min-w-0 flex-1">
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-[#38712c]/10 rounded flex items-center justify-center flex-shrink-0">
                      <FileText className="w-4 h-4 md:w-5 md:h-5 text-[#38712c]" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="font-medium text-[#403323] truncate">{doc.name}</p>
                      <p className="text-xs text-gray-600">{doc.type} • {doc.size}</p>
                    </div>
                  </div>
                  <button className="flex items-center gap-1 text-sm text-[#38712c] hover:text-[#2d5a23] font-medium whitespace-nowrap ml-2">
                    <Download className="w-3 h-3" />
                    Télécharger
                  </button>
                </div>
              ))}
            </div>
            
            {/* Pagination pour documents */}
            {documents.length > itemsPerPage && (
              <div className="border-t border-gray-200 pt-3 flex items-center justify-between">
                <div className="text-sm text-gray-600">
                  {startIndex + 1}-{endIndex} sur {documents.length}
                </div>
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`p-1 border border-gray-300 rounded hover:bg-gray-50 ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      onClick={() => handlePageChange(page)}
                      className={`px-2 py-1 text-xs border rounded ${currentPage === page
                          ? 'bg-[#38712c] text-white border-[#38712c]'
                          : 'border-gray-300 text-gray-700 hover:bg-gray-50'}`}
                    >
                      {page}
                    </button>
                  ))}
                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className={`p-1 border border-gray-300 rounded hover:bg-gray-50 ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}