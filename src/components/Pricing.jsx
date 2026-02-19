import React from 'react'
import { motion } from 'framer-motion'
import { Check, X, Shield, Cloud, HardDrive } from 'lucide-react'

const plans = [
  {
    name: 'Local',
    price: 'Suscripción única',
    description: 'Ideal para profesores independientes y dispositivos únicos.',
    features: [
      'Base de datos local (SQL)',
      'Escaneo on-device ilimitado',
      'Exportación PDF',
      'Sin dependencia de internet',
    ],
    notIncluded: ['Sincronización multiusuario', 'Respaldo en la nube'],
    icon: <HardDrive className='w-8 h-8' />,
    color: 'bg-slate-50',
    btnText: 'Comprar licencia',
    featured: false
  },
  {
    name: 'Nube',
    price: 'Plan Mensual/Anual',
    description: 'Perfecto para quienes necesitan acceso desde múltiples dispositivos.',
    features: [
      'Todo lo del plan Local',
      'Sincronización en la nube',
      'Persistencia multiusuario',
      'Históricos compartidos',
    ],
    notIncluded: [],
    icon: <Cloud className='w-8 h-8 text-blue-600' />,
    color: 'bg-blue-50 border-2 border-blue-200',
    btnText: 'Suscribirse ahora',
    featured: true
  },
  {
    name: 'Personalizado',
    price: 'A medida',
    description: 'Soluciones enterprise para instituciones académicas completas.',
    features: [
      'Consultoría técnica',
      'Hosting dedicado',
      'Integración con sus propios LMS',
      'Soporte prioritario 24/7',
    ],
    notIncluded: [],
    icon: <Shield className='w-8 h-8 text-slate-800' />,
    color: 'bg-slate-900 text-white',
    btnText: 'Contactar ventas',
    featured: false
  }
]

export default function Pricing() {
  return (
    <section id='pricing' className='py-32'>
      <div className='section-container'>
        <div className='text-center max-w-3xl mx-auto mb-20'>
          <h2 className='text-4xl lg:text-5xl mb-6 text-[#0B3D91]'>Planes flexibles para cada <span className='text-slate-900'>necesidad</span></h2>
          <p className='text-lg text-slate-600'>
            Desde el procesamiento 100% local hasta soluciones robustas en la nube para instituciones. Elige el modelo que mejor te funcione.
          </p>
        </div>

        <div className='grid md:grid-cols-3 gap-8'>
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={cn(
                'rounded-3xl p-10 flex flex-col',
                plan.color,
                !plan.featured && 'border border-slate-100'
              )}
            >
              <div className='mb-8'>
                <div className='mb-4'>{plan.icon}</div>
                <h3 className={cn('text-2xl mb-2', plan.name === 'Personalizado' ? 'text-white' : 'text-[#0B3D91]')}>{plan.name}</h3>
                <p className={cn('text-sm font-semibold', plan.name === 'Personalizado' ? 'text-blue-200' : 'text-slate-500')}>{plan.price}</p>
              </div>
              
              <p className={cn('mb-8 text-sm', plan.name === 'Personalizado' ? 'text-slate-300' : 'text-slate-600')}>
                {plan.description}
              </p>

              <div className='space-y-4 mb-10 flex-grow'>
                {plan.features.map(feature => (
                  <div key={feature} className='flex gap-3 text-sm font-medium'>
                    <Check className='w-5 h-5 text-emerald-500 shrink-0' />
                    <span>{feature}</span>
                  </div>
                ))}
                {plan.notIncluded.map(feature => (
                  <div key={feature} className='flex gap-3 text-sm text-slate-400 font-medium'>
                    <X className='w-5 h-5 shrink-0' />
                    <span className='line-through'>{feature}</span>
                  </div>
                ))}
              </div>

              <button className={cn(
                'w-full py-4 rounded-xl font-bold transition-all duration-300 active:scale-95',
                plan.featured ? 'bg-[#0B3D91] text-white hover:bg-[#051C42]' : 
                plan.name === 'Personalizado' ? 'bg-white text-slate-900 hover:bg-slate-100' :
                'bg-slate-200 text-slate-800 hover:bg-slate-300'
              )}>
                {plan.btnText}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function cn(...inputs) {
  return inputs.filter(Boolean).join(' ')
}
