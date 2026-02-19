import React from 'react'
import { motion } from 'framer-motion'
import { Check, X, Shield, Cloud, HardDrive, Users, Building2 } from 'lucide-react'

const plans = [
  {
    name: 'Plan Personal',
    price: '$80 MXN',
    period: '/ mes',
    description: 'Para profesores que buscan eficiencia y control personal.',
    features: [
      'Sincronización Nube + Local',
      'Reportes personalizados',
      'Análisis avanzados',
      'Comparativas entre clases',
      'Login con Google',
      'Soporte prioritario'
    ],
    notIncluded: ['Persistencia multi-dispositivo', 'Historial colaborativo'],
    icon: <Users className='w-8 h-8 text-[#0B3D91]' />,
    color: 'bg-slate-50 border border-slate-200',
    btnText: 'Comenzar ahora',
    featured: false
  },
  {
    name: 'Plan Profesional',
    price: '$180 MXN',
    period: '/ mes',
    description: 'Potencia total en la nube para docentes exigentes.',
    features: [
      'Todo lo del Plan Personal',
      'Persistencia de datos total',
      'Sincronización multi-dispositivo',
      'Historial académico completo',
      'Analíticas profundas',
      'Soporte prioritario VIP'
    ],
    notIncluded: ['Gestión de múltiples usuarios'],
    icon: <Cloud className='w-8 h-8 text-blue-600' />,
    color: 'bg-blue-50 border-2 border-blue-200 shadow-xl shadow-blue-900/10',
    btnText: 'Suscribirse',
    featured: true
  },
  {
    name: 'Institutos',
    price: '$1,500 MXN',
    period: '/ 10 usuarios',
    description: 'Solución integral para escuelas y academias.',
    features: [
      'Licencia para 10 usuarios',
      '$140 MXN por usuario extra',
      'Sincronización institucional',
      'Historial compartido',
      'Analíticas colaborativas',
      'Paquetes de 10, 20, 30+'
    ],
    notIncluded: [],
    icon: <Building2 className='w-8 h-8 text-white' />,
    color: 'bg-[#0B3D91] text-white',
    btnText: 'Cotizar a medida',
    featured: false
  }
]

export default function Pricing() {
  return (
    <section id='pricing' className='py-32'>
      <div className='section-container'>
        <div className='text-center max-w-3xl mx-auto mb-20'>
          <h2 className='text-4xl lg:text-5xl mb-6 text-[#0B3D91]'>Precios claros, <span className='text-slate-900'>sin sorpresas</span></h2>
          <p className='text-lg text-slate-600'>
            Elige el plan que se adapte a tu ritmo de trabajo. Desde uso individual hasta implementación institucional.
          </p>
        </div>

        <div className='grid md:grid-cols-3 gap-8 items-start'>
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={cn(
                'rounded-3xl p-8 lg:p-10 flex flex-col relative',
                plan.color,
                plan.featured && 'md:-mt-8 md:mb-8 z-10' // Lift featured card
              )}
            >
              {plan.featured && (
                <div className='absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg'>
                  Más Popular
                </div>
              )}

              <div className='mb-8'>
                <div className={cn('mb-6 p-3 rounded-2xl inline-flex', plan.name === 'Institutos' ? 'bg-white/10' : 'bg-white shadow-sm')}>
                    {plan.icon}
                </div>
                <h3 className={cn('text-xl font-bold mb-2', plan.name === 'Institutos' ? 'text-white' : 'text-slate-900')}>{plan.name}</h3>
                <div className='flex items-baseline gap-1'>
                    <span className={cn('text-4xl font-extrabold', plan.name === 'Institutos' ? 'text-white' : 'text-[#0B3D91]')}>{plan.price}</span>
                    <span className={cn('text-sm font-medium', plan.name === 'Institutos' ? 'text-blue-200' : 'text-slate-500')}>{plan.period}</span>
                </div>
              </div>
              
              <p className={cn('mb-8 text-sm leading-relaxed', plan.name === 'Institutos' ? 'text-blue-100' : 'text-slate-600')}>
                {plan.description}
              </p>

              <div className='space-y-4 mb-10 flex-grow'>
                {plan.features.map(feature => (
                  <div key={feature} className='flex gap-3 text-sm font-medium items-start'>
                    <Check className={cn('w-5 h-5 shrink-0', plan.name === 'Institutos' ? 'text-blue-300' : 'text-emerald-500')} />
                    <span className={cn(plan.name === 'Institutos' ? 'text-gray-100' : 'text-slate-700')}>{feature}</span>
                  </div>
                ))}
                {plan.notIncluded.map(feature => (
                  <div key={feature} className='flex gap-3 text-sm font-medium items-start opacity-50'>
                    <X className={cn('w-5 h-5 shrink-0', plan.name === 'Institutos' ? 'text-blue-400' : 'text-slate-400')} />
                    <span className={cn(plan.name === 'Institutos' ? 'text-blue-200' : 'text-slate-500')}>{feature}</span>
                  </div>
                ))}
              </div>

              <button className={cn(
                'w-full py-4 rounded-xl font-bold transition-all duration-300 active:scale-95 shadow-lg',
                plan.featured ? 'bg-[#0B3D91] text-white hover:bg-[#051C42] shadow-blue-900/20' : 
                plan.name === 'Institutos' ? 'bg-white text-[#0B3D91] hover:bg-blue-50' :
                'bg-[#0B3D91] text-white hover:bg-[#051C42] shadow-blue-900/10'
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
