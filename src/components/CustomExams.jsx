import React from 'react'
import { motion } from 'framer-motion'
import { FileText, Zap, Infinity, Palette, Target, CheckCircle2, FileCheck } from 'lucide-react'
import { cn } from '../lib/utils'

export default function CustomExams() {
  const steps = [
    {
      title: 'Solicitud',
      description: 'Envías tu PDF, imagen o formato actual de examen.',
      icon: <FileText className='w-6 h-6' />
    },
    {
      title: 'Diseño y Calibración',
      description: 'Optimizamos la plantilla y entrenamos el motor de escaneo.',
      icon: <Palette className='w-6 h-6' />
    },
    {
      title: 'Entrega Digital',
      description: 'Activamos el examen en tu cuenta para uso ilimitado.',
      icon: <Zap className='w-6 h-6' />
    }
  ]

  const benefits = [
    'Compatible con detección automática',
    'Optimizado para escaneo rápido',
    'Entrenamiento de dataset incluido',
    'Validación de lectura de marcas',
    'Sin límite de impresiones o alumnos'
  ]

  return (
    <section id='custom-exams' className='py-24 bg-white overflow-hidden'>
      <div className='section-container'>
        <div className='grid lg:grid-cols-2 gap-16 items-center'>
          
          {/* Content Left */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className='space-y-8'
          >
            <div>
              <span className='inline-block px-4 py-1.5 bg-blue-50 text-[#0B3D91] text-sm font-bold rounded-full mb-6 border border-blue-100'>
                Servicio Premium
              </span>
              <h2 className='text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight mb-6'>
                Tu propio diseño, <br />
                <span className='text-[#0B3D91]'>entrenado para ganar.</span>
              </h2>
              <p className='text-lg text-slate-600 leading-relaxed font-light'>
                Si necesitas un formato exclusivo, diseñamos y entrenamos una plantilla personalizada para ti. Pagas una sola vez por la licencia del diseño y úsala ilimitadamente dentro de Evalix.
              </p>
            </div>

            <div className='space-y-4'>
              {benefits.map((benefit, i) => (
                <div key={i} className='flex items-center gap-3 text-slate-700 font-medium'>
                  <CheckCircle2 className='w-5 h-5 text-emerald-500 shrink-0' />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>

            <div className='pt-8'>
              <a href='#contact' className='btn-primary inline-flex items-center gap-3 px-8 py-4 group'>
                Solicitar cotización
                <ArrownRight className='w-5 h-5 group-hover:translate-x-1 transition-transform' />
              </a>
              <p className='mt-4 text-sm text-slate-400 font-medium italic'>
                Desde $500 MXN por licencia de diseño único
              </p>
            </div>
          </motion.div>

          {/* Visual Right */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className='relative'
          >
            <div className='absolute inset-0 bg-blue-600/5 rounded-[40px] rotate-3' />
            <div className='relative bg-slate-50 border border-slate-200 rounded-[40px] p-8 lg:p-12 shadow-2xl'>
              
              <div className='mb-12'>
                <h3 className='text-xl font-bold text-[#0B3D91] mb-8 flex items-center gap-2'>
                  <Target className='w-6 h-6' />
                  ¿Cómo funciona?
                </h3>
                <div className='space-y-8 relative'>
                  {/* Step Line */}
                  <div className='absolute left-6 top-8 bottom-8 w-0.5 bg-blue-100' />
                  
                  {steps.map((step, i) => (
                    <div key={i} className='flex gap-6 relative z-10'>
                      <div className='w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-md border border-slate-100 text-[#0B3D91] shrink-0'>
                        {step.icon}
                      </div>
                      <div>
                        <h4 className='font-bold text-slate-900 mb-1'>{step.title}</h4>
                        <p className='text-sm text-slate-600 leading-relaxed'>{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className='bg-[#0B3D91] rounded-3xl p-6 text-white'>
                <div className='flex items-center gap-3 mb-4'>
                  <FileCheck className='w-6 h-6 text-blue-300' />
                  <span className='font-bold text-lg'>Licencia Vitalicia</span>
                </div>
                <p className='text-sm text-blue-100 leading-relaxed mb-4'>
                  El cliente posee la licencia del diseño. Úsalo cuantas veces quieras mientras mantengas una suscripción activa.
                </p>
                <div className='flex items-baseline gap-2'>
                  <span className='text-xs opacity-60 font-bold uppercase tracking-wider'>Desde</span>
                  <span className='text-2xl font-black'>$500 MXN</span>
                </div>
              </div>
            </div>

            {/* Floating Badges */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className='absolute -top-6 -right-6 bg-emerald-500 text-white px-6 py-3 rounded-2xl shadow-xl font-bold flex items-center gap-2'
            >
              <Infinity className='w-5 h-5' />
              Uso Ilimitado
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

function ArrownRight(props) {
  return (
    <svg 
      {...props}
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
    </svg>
  )
}
