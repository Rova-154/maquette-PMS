// src/components/ModalWrapper.tsx
import React from 'react';
import { X } from "lucide-react";

interface ModalWrapperProps {
  children: React.ReactNode;
  title: string;
  onClose?: () => void;
}

export function ModalWrapper({ children, title, onClose }: ModalWrapperProps) {
  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
        <p className="text-gray-600">Utilisez le formulaire ci-dessous pour ajouter de nouveaux éléments</p>
      </div>
      
      {/* Modal Content */}
      <div className="bg-white rounded-xl shadow-lg border border-gray-200">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-lg font-medium text-gray-900">{title}</h2>
          {onClose && (
            <button 
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>
          )}
        </div>
        
        {/* Modal Body */}
        <div className="p-6">
          {children}
        </div>
        
        {/* Modal Footer */}
        <div className="flex items-center justify-end gap-3 p-6 border-t border-gray-200 bg-gray-50">
          <button 
            onClick={onClose}
            className="px-5 py-2.5 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Annuler
          </button>
          <button className="px-5 py-2.5 bg-[#38712c] text-white rounded-lg text-sm font-medium hover:bg-[#2d5a23] transition-colors">
            Enregistrer
          </button>
        </div>
      </div>
    </div>
  );
}