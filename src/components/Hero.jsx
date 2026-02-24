import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2, QrCode, Maximize2, MoreHorizontal } from 'lucide-react'

export default function Hero() {
  return (
    <section className='relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden bg-linear-to-b from-white to-slate-50'>
      {/* Premium Background animations */}
      <div className='absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[800px] bg-indigo-50/40 rounded-full blur-[100px] -z-10 animate-pulse decoration-slate-900/5' />
      <div className='absolute bottom-0 right-0 w-[800px] h-[800px] bg-blue-50/40 rounded-full blur-[100px] -z-10' />

      <div className='section-container grid lg:grid-cols-2 gap-16 items-center'>
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className='inline-flex items-center gap-2 px-4 py-2 bg-white border border-blue-100 rounded-full text-[#0B3D91] text-sm font-semibold mb-8 shadow-sm hover:shadow-md transition-shadow cursor-default'>
            <span className='relative flex h-2 w-2'>
              <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75'></span>
              <span className='relative inline-flex rounded-full h-2 w-2 bg-[#0B3D91]'></span>
            </span>
            <span className='tracking-wide'>Evalix 1.0 ya está aquí</span>
          </div>
          
          <h1 className='text-5xl lg:text-7xl mb-8 font-extrabold tracking-tight leading-[1.1]'>
            Tu aula en <br/>
            <span className='bg-linear-to-r from-[#0B3D91] via-blue-700 to-indigo-600 bg-clip-text text-transparent'>
              la palma de tu mano.
            </span>
          </h1>
          
          <p className='text-xl text-slate-600 mb-10 leading-relaxed max-w-xl font-light'>
            Transforma tu celular en un escáner óptico de alta precisión. Corrige exámenes en segundos usando solo tu cámara y nuestra tecnología local.
          </p>
          
          <div className='flex flex-col sm:flex-row gap-4 mb-12'>
            <a href='#demo' className='btn-primary flex items-center justify-center gap-2 group shadow-blue-900/20 shadow-lg hover:shadow-blue-900/30'>
              Ver demostración
                <ArrowRight className='w-5 h-5 group-hover:translate-x-1 transition-transform' />
            </a>
            <a href='#how-it-works' className='btn-secondary flex items-center justify-center backdrop-blur-sm bg-white/50'>
              Cómo funciona
            </a>
          </div>
          
          <div className='flex items-center gap-4 text-sm font-medium text-slate-500'>
            <div className='flex items-center gap-3 bg-blue-50 border border-blue-100 px-4 py-2 rounded-full'>
              <span className='relative flex h-2 w-2'>
                <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75'></span>
                <span className='relative inline-flex rounded-full h-2 w-2 bg-[#0B3D91]'></span>
              </span>
              <p className='text-[#0B3D91] font-semibold'>Lanzamiento oficial — Sé de los primeros</p>
            </div>
          </div>
        </motion.div>

        {/* Mobile Smartphone Mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className='relative flex justify-center lg:justify-end'
        >
          <div className='relative w-[300px] h-[600px] bg-slate-900 rounded-[3rem] p-3 shadow-[0_0_50px_-12px_rgba(11,61,145,0.4)] border-8 border-slate-800 z-10'>
            {/* Notch */}
            <div className='absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-800 rounded-b-2xl z-20' />
            
            <div className='bg-slate-950 rounded-4xl overflow-hidden w-full h-full relative'>
              {/* App UI Mockup */}
              <div className='p-6 h-full flex flex-col bg-linear-to-b from-[#0B3D91]/20 to-slate-950'>
                <div className='flex justify-between items-center mb-8 pt-4'>
                  <div className='w-8 h-8 bg-blue-600 rounded-lg' />
                  <div className='h-4 w-20 bg-slate-800 rounded-full' />
                </div>
                
                <h4 className='text-white text-lg font-bold mb-6'>Exámenes Recientes</h4>
                
                <div className='space-y-4 grow'>
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className='bg-slate-900/50 border border-slate-800 p-4 rounded-2xl flex items-center justify-between'>
                      <div className='flex items-center gap-3'>
                        <div className='w-10 h-10 bg-slate-800 rounded-xl' />
                        <div>
                          <div className='w-20 h-3 bg-slate-700 rounded mb-1' />
                          <div className='w-12 h-2 bg-slate-800 rounded' />
                        </div>
                      </div>
                      <div className='text-blue-400 text-xs font-bold'>8.5</div>
                    </div>
                  ))}
                </div>
                
                {/* Floating Scan Button */}
                <div className='absolute bottom-8 left-1/2 -translate-x-1/2'>
                   <div className='w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center shadow-xl shadow-blue-600/40'>
                      <QrCode className='text-white w-8 h-8' />
                   </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Verification Badge */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 }}
            className='absolute top-20 -right-4 lg:-right-8 glass-card p-4 backdrop-blur-xl bg-white/90 shadow-2xl z-20 border-l-4 border-l-emerald-500'
          >
            <div className='flex items-center gap-3'>
              <div className='w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600'>
                <CheckCircle2 className='w-6 h-6' />
              </div>
              <div>
                <p className='text-[10px] text-slate-500 font-bold uppercase'>Detección AI</p>
                <p className='text-slate-900 font-bold'>Detección Activa</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
