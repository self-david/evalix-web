import React, { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, X, Shield, Cloud, HardDrive, Users, Building2, Calculator, Info } from 'lucide-react'
import { cn } from '../lib/utils'

export default function Pricing() {
  const [userCount, setUserCount] = useState(10)
  const [isAnnual, setIsAnnual] = useState(false)

  const calculateInstitutePrice = (users, annual) => {
    // Base: 10 users for 1200
    // 11-20: 110 extra
    // 21-30: 100 extra
    // 31-40: 90 extra
    // 41+: 85 extra
    
    let total = 0
    const count = Math.max(10, users)

    if (count <= 10) {
      total = 1200
    } else if (count <= 20) {
      total = 1200 + (count - 10) * 110
    } else if (count <= 30) {
      total = 2300 + (count - 20) * 100 // 1200 + 1100
    } else if (count <= 40) {
      total = 3300 + (count - 30) * 90 // 2300 + 1000
    } else {
      total = 4200 + (count - 40) * 85 // 3300 + 900
    }

    return annual ? Math.round(total * 10) : total
  }

  const institutePrice = useMemo(() => calculateInstitutePrice(userCount, isAnnual), [userCount, isAnnual])

  const plans = [
    {
      name: 'Plan Personal',
      price: isAnnual ? `$790 MXN` : '$79 MXN',
      period: isAnnual ? '/ año' : '/ mes',
      description: 'Eficiencia individual para profesores que dan el primer paso.',
      features: [
        'Sincronización Local',
        'Reportes personalizados',
        'Análisis avanzados',
        'Comparativas entre clases',
        'Soporte prioritario',
      ],
      notIncluded: ['Acceso colaborativo', 'Historial institucional'],
      icon: <Users className='w-8 h-8 text-[#0B3D91]' />,
      color: 'bg-slate-50 border border-slate-200',
      btnText: 'Comenzar ahora',
      featured: false
    },
    {
      name: 'Plan Profesional',
      price: isAnnual ? '$1,600 MXN' : '$160 MXN',
      period: isAnnual ? '/ año' : '/ mes',
      description: 'Potencia avanzada para docentes con múltiples grupos.',
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
      isDynamic: true,
      price: `$${institutePrice.toLocaleString()} MXN`,
      period: isAnnual ? '/ año' : '/ mes',
      description: 'Colaboración total para escuelas y academias.',
      features: [
        'Desde 10 usuarios',
        'Sincronización institucional',
        'Historial compartido',
        'Analíticas colaborativas',
        'Cuenta administrador p/ directivos',
        'Soporte técnico 24/7'
      ],
      notIncluded: [],
      icon: <Building2 className='w-8 h-8 text-white' />,
      color: 'bg-[#0B3D91] text-white',
      btnText: 'Solicitar acceso',
      featured: false
    }
  ]

  return (
    <section id='pricing' className='py-24 bg-slate-50/50'>
      <div className='section-container'>
        <div className='text-center max-w-3xl mx-auto mb-16'>
          <h2 className='text-4xl lg:text-5xl mb-6 text-[#0B3D91] font-extrabold tracking-tight'>
            Precios competitivos, <span className='text-slate-900 underline decoration-blue-500/30 underline-offset-8'>sin sorpresas</span>
          </h2>
          <p className='text-lg text-slate-600 mb-10 leading-relaxed font-light'>
            Ajustamos nuestros costos para apoyarte. Usa el calculador institucional para ver tu ahorro por volumen.
          </p>

          {/* Controls Container */}
          <div className='bg-white p-8 rounded-3xl shadow-xl border border-slate-100 mb-24 flex flex-col items-center gap-10 max-w-2xl mx-auto'>
             {/* Annual Toggle */}
             <div className='flex items-center gap-4 bg-slate-50 p-1 rounded-full'>
                <button 
                  onClick={() => setIsAnnual(false)}
                  className={cn(
                    'px-6 py-2 rounded-full text-sm font-bold transition-all',
                    !isAnnual ? 'bg-[#0B3D91] text-white shadow-md' : 'text-slate-500 hover:text-slate-700'
                  )}
                >
                  Mensual
                </button>
                <button 
                  onClick={() => setIsAnnual(true)}
                  className={cn(
                    'px-6 py-2 rounded-full text-sm font-bold transition-all relative',
                    isAnnual ? 'bg-[#0B3D91] text-white shadow-md' : 'text-slate-500 hover:text-slate-700'
                  )}
                >
                  Anual
                  {isAnnual && (
                    <span className='absolute -top-6 -right-4 bg-emerald-500 text-white text-[10px] px-2 py-0.5 rounded-full shadow-sm'>
                      Paga 10, usa 12 meses
                    </span>
                  )}
                </button>
             </div>

             {/* User Slider (Solo para Institutos) */}
             <div className='w-full space-y-6'>
                <div className='flex justify-between items-center'>
                   <div className='flex items-center gap-2 text-[#0B3D91] font-bold'>
                      <Building2 className='w-5 h-5' />
                      <span>Usuarios Institucionales</span>
                   </div>
                   <div className='bg-blue-50 px-4 py-1 rounded-lg text-[#0B3D91] font-black text-xl border border-blue-100'>
                      {userCount}
                   </div>
                </div>
                <input 
                  type='range' 
                  min='10' 
                  max='49' 
                  step='1'
                  value={userCount}
                  onChange={(e) => setUserCount(parseInt(e.target.value))}
                  className='w-full h-2 bg-blue-100 rounded-lg appearance-none cursor-pointer accent-[#0B3D91]'
                />
                <div className='flex justify-between text-[10px] font-bold text-slate-400 uppercase tracking-widest'>
                  <span>Base (10)</span>
                  <span>Plus (30)</span>
                  <span>Enterprise (50+)</span>
                </div>
             </div>
          </div>
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
                'rounded-3xl p-8 lg:p-10 flex flex-col relative transition-all duration-500',
                plan.color,
                plan.featured && 'md:-mt-8 md:mb-8 z-10 scale-105 shadow-2xl shadow-blue-900/10'
              )}
            >
              {plan.featured && (
                <div className='absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg'>
                  Más Recomendado
                </div>
              )}

              <div className='mb-8'>
                <div className={cn('mb-6 p-3 rounded-2xl inline-flex', plan.name === 'Institutos' ? 'bg-white/10' : 'bg-white shadow-sm')}>
                    {plan.icon}
                </div>
                <h3 className={cn('text-xl font-bold mb-2', plan.name === 'Institutos' ? 'text-white' : 'text-slate-900')}>{plan.name}</h3>
                <div className='flex items-baseline gap-1'>
                    <AnimatePresence mode='wait'>
                        <motion.span 
                          key={plan.price}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.9 }}
                          transition={{ duration: 0.2 }}
                          className={cn('text-3xl font-black', plan.name === 'Institutos' ? 'text-white' : 'text-[#0B3D91]')}
                        >
                            {plan.price}
                        </motion.span>
                    </AnimatePresence>
                    <span className={cn('text-sm font-medium', plan.name === 'Institutos' ? 'text-blue-200' : 'text-slate-500')}>{plan.period}</span>
                </div>
                {plan.isDynamic && (
                  <p className={cn('text-[10px] mt-2 font-bold uppercase tracking-tighter opacity-70', plan.name === 'Institutos' ? 'text-blue-100' : 'text-slate-500')}>
                    Ajustado para {userCount} usuarios
                  </p>
                )}
              </div>
              
              <p className={cn('mb-8 text-sm leading-relaxed font-medium', plan.name === 'Institutos' ? 'text-blue-100/80' : 'text-slate-600')}>
                {plan.description}
              </p>

              <div className='space-y-4 mb-10 grow'>
                {plan.features.map(feature => (
                  <div key={feature} className='flex gap-3 text-sm font-medium items-start group'>
                    <Check className={cn('w-5 h-5 shrink-0 transition-transform group-hover:scale-125', plan.name === 'Institutos' ? 'text-blue-300' : 'text-emerald-500')} />
                    <span className={cn(plan.name === 'Institutos' ? 'text-gray-100' : 'text-slate-700')}>{feature}</span>
                  </div>
                ))}
                {plan.notIncluded.map(feature => (
                  <div key={feature} className='flex gap-3 text-sm font-medium items-start opacity-30'>
                    <X className={cn('w-5 h-5 shrink-0', plan.name === 'Institutos' ? 'text-blue-400' : 'text-slate-400')} />
                    <span className={cn(plan.name === 'Institutos' ? 'text-blue-200' : 'text-slate-500')}>{feature}</span>
                  </div>
                ))}
              </div>

              <button className={cn(
                'w-full py-4 rounded-xl font-bold transition-all duration-300 active:scale-95 shadow-lg flex items-center justify-center gap-2 group',
                plan.featured ? 'bg-[#0B3D91] text-white hover:bg-[#051C42] shadow-blue-900/20' : 
                plan.name === 'Institutos' ? 'bg-white text-[#0B3D91] hover:bg-blue-50' :
                'bg-white text-[#0B3D91] border border-blue-100 hover:bg-blue-50'
              )}>
                {plan.btnText}
                {plan.isDynamic && <Calculator className='w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity' />}
              </button>
            </motion.div>
          ))}
        </div>

        <div className='mt-16 bg-blue-900/5 rounded-3xl p-6 border border-blue-100 flex items-start gap-4 max-w-4xl mx-auto'>
           <Info className='w-6 h-6 text-blue-600 shrink-0 mt-1' />
           <div className='text-sm text-slate-600 leading-relaxed'>
             <p className='font-bold text-slate-900 mb-2'>Beneficios por Pago Anual:</p>
             <ul className='list-disc ml-4 space-y-1'>
               <li>Paga solo <strong className='text-emerald-600'>10 meses</strong> y recibe acceso por un año completo (15% de descuento).</li>
               <li>Plan Institutos: $1,200 base (10 usuarios). Usuarios extra con tarifa decreciente.</li>
               <li><strong>Exámenes Personalizados:</strong> Diseñamos tu formato ideal desde $500 MXN (Solo requiere suscripción activa).</li>
             </ul>
           </div>
        </div>
      </div>
    </section>
  )
}
