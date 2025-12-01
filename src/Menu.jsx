// Menu.jsx
import React, { useState } from 'react';
import Projects from './Projects';
import Servicios from './Servicios';

const Menu = () => {
  const [tabActivo, setTabActivo] = useState('proyectos');

  return (
    <div className="bg-white dark:bg-black min-h-screen pb-20">
      {/* Tabs */}
      <div className="flex border-b border-gray-200 dark:border-white/10 max-w-6xl mx-auto">
        {/* Proyectos Tab */}
        <button
          onClick={() => setTabActivo('proyectos')}
          className={`flex-1 flex items-center justify-center gap-2 py-4 border-b-2 transition-all ${
            tabActivo === 'proyectos'
              ? 'border-[#00d9ff]'
              : 'border-transparent'
          }`}
        >
          <svg
            className={`w-5 h-5 ${
              tabActivo === 'proyectos' ? 'text-gray-900 dark:text-white' : 'text-gray-500'
            }`}
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z" />
          </svg>
          <span className={`font-semibold ${
            tabActivo === 'proyectos' ? 'text-gray-900 dark:text-white' : 'text-gray-500'
          }`}>
            Proyectos
          </span>
        </button>

        {/* Servicios Tab */}
        <button
          onClick={() => setTabActivo('servicios')}
          className={`flex-1 flex items-center justify-center gap-2 py-4 border-b-2 transition-all ${
            tabActivo === 'servicios'
              ? 'border-[#00d9ff]'
              : 'border-transparent'
          }`}
        >
          <svg
            className={`w-5 h-5 ${
              tabActivo === 'servicios' ? 'text-gray-900 dark:text-white' : 'text-gray-500'
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          <span className={`font-semibold ${
            tabActivo === 'servicios' ? 'text-gray-900 dark:text-white' : 'text-gray-500'
          }`}>
            Servicios
          </span>
        </button>
      </div>

      {/* Contenido dinámico según el tab activo */}
      <div className="min-h-screen">
        {tabActivo === 'proyectos' ? <Projects /> : <Servicios />}
      </div>

      {/* Footer Branding */}
      <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-black py-4 border-t border-gray-200 dark:border-white/10">
        <div className="flex items-center justify-between px-6 max-w-lg mx-auto">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-[#00d9ff] rounded-full flex items-center justify-center">
              <span className="text-black text-xs font-bold">S</span>
            </div>
            <span className="text-gray-900 dark:text-white font-semibold">sebadev</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gray-500 text-sm">Software</span>
            <span className="text-gray-900 dark:text-white font-semibold">Developer</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
