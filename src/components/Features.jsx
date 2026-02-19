import React from 'react'
import { motion } from 'framer-motion'
import { Shield, Zap, Sliders, BarChart3, Cloud, Layout, MousePointer2 } from 'lucide-react'

const features = [
  {
    icon: <Sliders className='w-6 h-6' />,
    title: 'Personalización total',
    description: 'Nos ajustamos a tus evaluaciones. Nuestros modelos se calibran para reconocer tus formatos de examen existentes.',
    color: 'bg-blue-100 text-[#0B3D91]',
    visual: (
      <div className='absolute inset-0 opacity-10 flex items-center justify-center pointer-events-none'>
        <div className='w-32 h-40 border-2 border-dashed border-[#0B3D91] rounded-lg rotate-12 transform translate-x-10 translate-y-4' />
        <div className='w-32 h-40 border-2 border-[#0B3D91] rounded-lg -rotate-6 bg-white absolute' />
      </div>
    )
  },
  {
    icon: <Zap className='w-6 h-6' />,
    title: 'Velocidad optimizada',
    description: 'Detección de hoja en 0.8s y análisis completo súper rápido. Diseñado para procesar grupos enteros en minutos.',
    color: 'bg-amber-100 text-amber-700',
    visual: (
      <div className='absolute right-4 top-4'>
        <span className='flex h-3 w-3 relative'>
          <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75'></span>
          <span className='relative inline-flex rounded-full h-3 w-3 bg-amber-500'></span>
        </span>
      </div>
    )
  },
  {
    icon: <Shield className='w-6 h-6' />,
    title: 'Seguridad y Privacidad',
    description: 'Tus datos son tuyos. Procesamiento local que garantiza la privacidad de tus alumnos y tu institución.',
    color: 'bg-green-100 text-green-700',
    visual: (
      <div className='absolute bottom-4 right-4'>
        <Shield className='w-24 h-24 text-green-500/10 rotate-12' />
      </div>
    )
  }
]

const extraFeatures = [
  { icon: <BarChart3 />, text: 'Analíticas visuales avanzadas' },
  { icon: <Cloud />, text: 'Sincronización opcional en la nube' },
  { icon: <Layout />, text: 'Dashboard intuitivo' }
]

export default function Features() {
  return (
    <section id='features' className='bg-[#F8FAFC] py-24 relative'>
      <div className='section-container'>
        <div className='text-center max-w-3xl mx-auto mb-20'>
          <h2 className='text-4xl lg:text-5xl mb-6 font-bold'>
            Diseñado para la <span className='text-[#0B3D91]'>excelencia</span> docente
          </h2>
          <p className='text-lg text-slate-600'>
            Combinamos tecnología de vanguardia con las necesidades reales del aula para ofrecerte una herramienta sin fricciones.
          </p>
        </div>

        <div className='grid md:grid-cols-3 gap-10'>
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className='glass-card p-10 group relative overflow-hidden bg-white hover:bg-white/90'
            >
              {feature.visual}
              
              <div className='relative z-10'>
                <div className={cn('w-14 h-14 rounded-2xl flex items-center justify-center mb-8 transition-transform group-hover:scale-110 shadow-sm', feature.color)}>
                  {feature.icon}
                </div>
                <h3 className='text-2xl font-bold mb-4 group-hover:text-[#0B3D91] transition-colors'>{feature.title}</h3>
                <p className='text-slate-600 leading-relaxed mb-6'>
                  {feature.description}
                </p>
                <div className='h-1 w-12 bg-slate-200 group-hover:w-20 group-hover:bg-[#0B3D91] transition-all duration-500 rounded-full' />
              </div>
            </motion.div>
          ))}
        </div>

        <div className='mt-20 pt-20 border-t border-slate-200 flex flex-wrap justify-center gap-12'>
          {extraFeatures.map((item, i) => (
            <div key={i} className='flex items-center gap-3 text-slate-500 font-medium group cursor-default transition-colors hover:text-[#0B3D91]'>
              <div className='text-[#0B3D91] group-hover:scale-110 transition-transform duration-300'>{item.icon}</div>
              {item.text}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function cn(...inputs) {
  return inputs.filter(Boolean).join(' ')
}
