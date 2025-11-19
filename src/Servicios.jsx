import React from 'react';

const Servicios = () => {
  const servicios = [
    {
      id: 1,
      titulo: "Programación IA",
      descripcion: "Desarrollo de soluciones con inteligencia artificial y machine learning para automatizar procesos y mejorar la toma de decisiones empresariales.",
      gradient: "from-purple-500 to-pink-500",
      avatar: "🤖",
      tags: ["ChatGPT", "N8N", "Python"],
      precio: "$120 USD",
      entrega: "4-6 semanas",
      whatsappMessage: "Hola Sebastian 👋, me interesa el servicio de Programación IA. Me gustaría conocer más detalles."
    },
    {
      id: 2,
      titulo: "Desarrollo Web",
      descripcion: "Creación de sitios web modernos y responsivos. Optimización SEO, integración de bases de datos y desarrollo con tecnologías actuales.",
      gradient: "from-blue-500 to-cyan-500",
      avatar: "💻",
      tags: ["ReactJS", "NodeJS", "TypeScript"],
      precio: "$220 USD",
      entrega: "1-3 semanas",
      whatsappMessage: "Hola Sebastian 👋, necesito desarrollar un sitio web. ¿Podemos conversar sobre mi proyecto?"
    },
    {
      id: 3,
      titulo: "Landing Pages",
      descripcion: "Diseño y desarrollo de landing pages optimizadas para conversión. Carga rápida, formularios de contacto e integración con herramientas de marketing.",
      gradient: "from-green-500 to-emerald-500",
      avatar: "🚀",
      tags: ["SEO", "Responsive", "Conversion"],
      precio: "$120 USD",
      entrega: "1-2 semanas",
      whatsappMessage: "Hola Sebastian 👋, quiero crear una Landing Page para mi negocio. ¿Hablamos?"
    },
    {
      id: 4,
      titulo: "Aplicaciones Web",
      descripcion: "Desarrollo de aplicaciones web completas y escalables. Arquitectura full-stack, autenticación de usuarios, APIs REST y despliegue en la nube.",
      gradient: "from-orange-500 to-red-500",
      avatar: "📱",
      tags: ["Full-Stack", "Cloud", "API REST"],
      precio: "$320 USD",
      entrega: "4-10 semanas",
      whatsappMessage: "Hola Sebastian 👋, tengo una idea para una aplicación web. Me gustaría discutir los detalles contigo."
    },
    {
      id: 5,
      titulo: "Integraciones API",
      descripcion: "Integración de sistemas mediante APIs. Pasarelas de pago, servicios de mensajería, automatización con Zapier y sincronización de datos entre plataformas.",
      gradient: "from-indigo-500 to-purple-500",
      avatar: "🔗",
      tags: ["Stripe", "WhatsApp", "Zapier"],
      precio: "$35 USD",
      entrega: "1-3 semanas",
      whatsappMessage: "Hola Sebastian 👋, necesito integrar APIs en mi sistema. ¿Puedes ayudarme?"
    },
    {
      id: 6,
      titulo: "Análisis de Datos",
      descripcion: "Procesamiento y análisis de datos. Análisis estadístico con Python y SQL, modelos predictivos y reportes con insights.",
      gradient: "from-teal-500 to-green-500",
      avatar: "📊",
      tags: ["Python", "SQL", "Machine Learning"],
      precio: "$220 USD",
      entrega: "1-3 semanas",
      whatsappMessage: "Hola Sebastian 👋, necesito realizar análisis de datos. ¿Podemos hablar sobre mi proyecto?"
    },
    {
      id: 7,
      titulo: "Visualización de Datos",
      descripcion: "Creación de dashboards interactivos y reportes visuales. Paneles personalizados con Power BI, visualizaciones de KPIs y gráficos dinámicos en tiempo real.",
      gradient: "from-pink-500 to-rose-500",
      avatar: "📈",
      tags: ["Power BI", "Dashboards", "KPIs"],
      precio: "$120 USD",
      entrega: "1-2 semanas",
      whatsappMessage: "Hola Sebastian 👋, quiero crear dashboards y visualizaciones de datos. ¿Me cuentas más?"
    },
    {
      id: 8,
      titulo: "Corrección de Errores",
      descripcion: "Servicio de corrección de bugs y errores en plazo fijo. Diagnóstico de problemas, solución de fallos críticos y optimización de código existente.",
      gradient: "from-yellow-500 to-orange-500",
      avatar: "🛠️",
      tags: ["Bug Fixes", "Debugging", "Optimización"],
      precio: "$50 USD",
      entrega: "3-14 días",
      whatsappMessage: "Hola Sebastian 👋, me interesa el servicio de Mantenimiento y Soporte para mi plataforma."
    },
    {
      id: 9,
      titulo: "Colaboración",
      descripcion: "Trabajo en equipo permanente. Añadir productos, actualizar catálogos, gestión de inventario, nuevas funcionalidades y soporte estratégico.",
      gradient: "from-violet-500 to-purple-500",
      avatar: "🤝",
      tags: ["Gestión", "Actualizaciones", "Soporte",],
      precio: "$120 USD/mes",
      entrega: "Continuo",
      whatsappMessage: "Hola Sebastian 👋, me interesa trabajar en equipo de forma continua. ¿Hablamos?"
    },
    {
      id: 10,
      titulo: "Ciberseguridad",
      descripcion: "Implementación de medidas de seguridad esenciales. Certificados SSL/TLS, firewall, protección DDoS, autenticación de dos factores y auditorías de seguridad.",
      gradient: "from-red-500 to-orange-500",
      avatar: "🔒",
      tags: ["SSL/TLS", "Firewall", "2FA"],
      precio: "$220 USD",
      entrega: "2-3 semanas",
      whatsappMessage: "Hola Sebastian 👋, necesito mejorar la seguridad de mi sitio web. ¿Podemos hablar?"
    },
    {
      id: 11,
      titulo: "Consultoría y Auditoría",
      descripcion: "Asesoramiento estratégico en tecnología y auditoría de sistemas. Consultoría en arquitectura, optimización de procesos, análisis de seguridad, revisión de código y evaluación de infraestructura tecnológica.",
      gradient: "from-cyan-500 to-blue-500",
      avatar: "💡",
      tags: ["Consultoría", "Auditoría", "Optimización"],
      precio: "$35 USD C/U",
      entrega: "Flexible",
      whatsappMessage: "Hola Sebastian 👋, necesito consultoría y auditoría para mi proyecto. ¿Conversamos?"
    }
  ];

  return (
    <div className="bg-white dark:bg-black min-h-screen px-4 py-4 pb-24">
      <div className="max-w-2xl mx-auto space-y-4">
        {servicios.map((servicio) => (
          <div
            key={servicio.id}
            className="bg-gray-50 dark:bg-zinc-900 rounded-3xl overflow-hidden border border-gray-200 dark:border-zinc-800 hover:border-gray-300 dark:hover:border-zinc-700 transition-all duration-300"
          >
            {/* Header tipo red social */}
            <div className="p-4 flex items-center gap-3">
              <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${servicio.gradient} flex items-center justify-center text-2xl shadow-lg`}>
                {servicio.avatar}
              </div>
              <div>
                <h3 className="text-black dark:text-white font-semibold text-lg">
                  {servicio.titulo}
                </h3>
              </div>
            </div>

            {/* Contenido principal */}
            <div className="px-4 pb-3">
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-3">
                {servicio.descripcion}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {servicio.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-200 dark:bg-zinc-800 text-gray-600 dark:text-gray-300 text-xs rounded-full border border-gray-300 dark:border-zinc-700 hover:border-gray-400 dark:hover:border-zinc-600 transition-colors"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Info cards - estilo moderno */}
              <div className="grid grid-cols-2 gap-2 mb-4">
                <div className="bg-gray-100 dark:bg-zinc-800/50 rounded-xl p-3 border border-gray-200 dark:border-zinc-800">
                  <div className="text-gray-500 dark:text-gray-400 text-xs mb-1">Precio inicial</div>
                  <div className="text-black dark:text-white font-bold text-lg">{servicio.precio}</div>
                </div>
                <div className="bg-gray-100 dark:bg-zinc-800/50 rounded-xl p-3 border border-gray-200 dark:border-zinc-800">
                  <div className="text-gray-500 dark:text-gray-400 text-xs mb-1">Entrega</div>
                  <div className="text-black dark:text-white font-bold text-lg">{servicio.entrega}</div>
                </div>
              </div>
            </div>

            {/* Footer con CTA */}
            <div className="border-t border-gray-200 dark:border-zinc-800 px-4 py-3">
              <button
                onClick={() => window.open(`https://wa.me/+56941771163?text=${encodeURIComponent(servicio.whatsappMessage)}`, '_blank')}
                className={`w-full py-3 bg-gradient-to-r ${servicio.gradient} text-white font-semibold rounded-full hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-300`}
              >
                Solicitar Servicio
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Servicios;
