import React from 'react'
import { motion } from 'framer-motion'
import { Scan, FileEdit, CheckCircle2, BarChart } from 'lucide-react'

const steps = [
  {
    id: 1,
    title: 'Diseño Flexible',
    description: 'Trae tus propios exámenes. Nuestro sistema se integra con tus formatos actuales, adaptando el scanner para reconocer tus hojas de siempre.',
    icon: <FileEdit className='w-8 h-8 text-white' />,
    color: 'bg-blue-600'
  },
  {
    id: 2,
    title: 'Escanea las hojas',
    description: 'Usa la cámara de tu dispositivo o un escáner tradicional. Evalix detecta automáticamente los marcadores.',
    icon: <Scan className='w-8 h-8 text-white' />,
    color: 'bg-indigo-600'
  },
  {
    id: 3,
    title: 'Procesamiento de Alta Velocidad',
    description: 'Detección instantánea en 0.8s. Procesamiento completo en apenas unos segundos. Tu flujo de trabajo nunca se detiene.',
    icon: <CheckCircle2 className='w-8 h-8 text-white' />,
    color: 'bg-violet-600'
  },
  {
    id: 4,
    title: 'Analiza Resultados',
    description: 'Obtén calificaciones y gráficas de rendimiento por alumno y grupo inmediatamente después del escaneo.',
    icon: <BarChart className='w-8 h-8 text-white' />,
    color: 'bg-[#0B3D91]'
  }
]

export default function HowItWorks() {
  return (
    <section id='how-it-works' className='py-32 relative overflow-hidden'>
      {/* Background decoration */}
      <div className='absolute inset-0 bg-slate-50 -skew-y-3 transform origin-top-left -z-10 scale-110' />
      
      <div className='section-container'>
        <div className='text-center max-w-3xl mx-auto mb-20'>
          <h2 className='text-4xl lg:text-5xl mb-6 font-bold text-[#0B3D91]'>
            Flujo de trabajo <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600'>sin fricción</span>
          </h2>
          <p className='text-lg text-slate-600'>
            Olvídate de las máquinas costosas y el software complicado. Evalix se integra en tu rutina docente en cuatro pasos simples.
          </p>
        </div>

        <div className='relative'>
          {/* Connector Line (Desktop) */}
          <div className='hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-blue-200 via-indigo-200 to-violet-200 -translate-y-1/2 -z-10 rounded-full' />

          <div className='grid md:grid-cols-4 gap-8'>
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className='relative pt-8 md:pt-0'
              >
                <div className='flex flex-col items-center text-center group'>
                  <div className={`
                    w-16 h-16 rounded-2xl flex items-center justify-center mb-6 
                    shadow-lg shadow-blue-900/10 transform transition-transform duration-500 
                    group-hover:scale-110 group-hover:rotate-3 ${step.color}
                  `}>
                    {step.icon}
                  </div>
                  
                  <div className='bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-shadow duration-300 w-full min-h-[220px] flex flex-col justify-center'>
                    <div className='w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-sm font-bold text-slate-500 mb-4 mx-auto'>
                      {step.id}
                    </div>
                    <h3 className='text-xl font-bold text-slate-900 mb-3'>{step.title}</h3>
                    <p className='text-sm text-slate-600 leading-relaxed'>
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
