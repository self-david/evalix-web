import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2, QrCode, Maximize2, MoreHorizontal } from 'lucide-react'

export default function Hero() {
  return (
    <section className='relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-to-b from-white to-slate-50'>
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
            Evalúa con <br/>
            <span className='bg-gradient-to-r from-[#0B3D91] via-blue-700 to-indigo-600 bg-clip-text text-transparent'>
              precisión absoluta.
            </span>
          </h1>
          
          <p className='text-xl text-slate-600 mb-10 leading-relaxed max-w-xl font-light'>
            Transforma tu dispositivo en un escáner óptico avanzado. Corrige exámenes en segundos con nuestra tecnología de visión artificial local.
          </p>
          
          <div className='flex flex-col sm:flex-row gap-4 mb-12'>
            <a href='#demo' className='btn-primary flex items-center justify-center gap-2 group shadow-blue-900/20 shadow-lg hover:shadow-blue-900/30'>
              Ver demostración
              <ArrowRight className='w-5 h-5 transition-transform group-hover:translate-x-1' />
            </a>
            <a href='#how-it-works' className='btn-secondary flex items-center justify-center backdrop-blur-sm bg-white/50'>
              Cómo funciona
            </a>
          </div>
          
          <div className='flex items-center gap-4 text-sm font-medium text-slate-500'>
            <div className='flex -space-x-3'>
               {[1, 2, 3, 4].map((i) => (
                <div key={i} className={`w-10 h-10 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center overflow-hidden bg-cover bg-center`} style={{backgroundImage: `url('https://i.pravatar.cc/100?img=${i + 10}')`}}>
                </div>
              ))}
              <div className='w-10 h-10 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-600'>
                +1k
              </div>
            </div>
            <p>Usado por docentes innovadores</p>
          </div>
        </motion.div>

        {/* Premium Mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className='relative perspective-1000'
        >
          <div className='relative z-10 bg-slate-900 rounded-3xl p-3 shadow-2xl shadow-blue-900/40 border-4 border-slate-800 transform rotate-y-[-5deg] rotate-x-[5deg] hover:rotate-y-0 hover:rotate-x-0 transition-transform duration-700'>
            {/* Mockup Screen Content */}
            <div className='bg-slate-950 rounded-2xl overflow-hidden aspect-[16/10] relative'>
              {/* Header Mockup */}
              <div className='h-12 border-b border-slate-800 flex items-center justify-between px-4 bg-slate-900/50'>
                <div className='flex items-center gap-2'>
                  <div className='w-3 h-3 rounded-full bg-red-500/80'></div>
                  <div className='w-3 h-3 rounded-full bg-yellow-500/80'></div>
                  <div className='w-3 h-3 rounded-full bg-green-500/80'></div>
                </div>
                <div className='text-xs text-slate-500 font-mono'>evalix_app.exe</div>
              </div>

              {/* Grid Content Mockup */}
              <div className='p-6 grid grid-cols-12 gap-6 h-full'>
                {/* Sidebar */}
                <div className='col-span-3 border-r border-slate-800 pr-4 space-y-4'>
                   <div className='w-full h-8 bg-blue-600/20 rounded-lg animate-pulse'></div>
                   <div className='w-3/4 h-4 bg-slate-800 rounded-lg'></div>
                   <div className='w-1/2 h-4 bg-slate-800 rounded-lg'></div>
                   <div className='w-full h-32 bg-slate-800/50 rounded-xl mt-8 border border-dashed border-slate-700 flex items-center justify-center'>
                      <QrCode className='text-slate-600 w-8 h-8' />
                   </div>
                </div>

                {/* Main Area */}
                <div className='col-span-9 space-y-6'>
                  <div className='flex justify-between items-center'>
                    <div className='h-8 w-40 bg-slate-800 rounded-lg'></div>
                    <div className='h-8 w-24 bg-green-900/30 text-green-400 text-xs flex items-center justify-center rounded-full border border-green-800'>En línea</div>
                  </div>

                  {/* Exam List Mockup */}
                  <div className='space-y-3'>
                    {[1, 2, 3].map((i) => (
                       <div key={i} className='h-16 w-full bg-slate-900 rounded-xl border border-slate-800 flex items-center px-4 justify-between'>
                          <div className='flex items-center gap-3'>
                             <div className='w-8 h-8 rounded bg-slate-800'></div>
                             <div className='space-y-1'>
                                <div className='w-24 h-3 bg-slate-700 rounded'></div>
                                <div className='w-16 h-2 bg-slate-800 rounded'></div>
                             </div>
                          </div>
                          <div className='w-12 h-6 bg-blue-900/20 rounded text-blue-400 text-xs flex items-center justify-center'>9.{i}</div>
                       </div>
                    ))}
                  </div>

                  {/* Chart Mockup */}
                  <div className='h-32 w-full bg-slate-900 rounded-xl border border-slate-800 relative overflow-hidden flex items-end justify-around px-4 pb-2'>
                      {[40, 70, 50, 90, 60, 80, 50].map((h, i) => (
                        <div key={i} style={{height: `${h}%`}} className='w-4 bg-blue-600/40 rounded-t-sm hover:bg-blue-500/60 transition-colors'></div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className='absolute -bottom-6 -right-6 glass-card p-4 backdrop-blur-xl bg-white/90 shadow-2xl z-20 border-l-4 border-l-emerald-500'
          >
            <div className='flex items-center gap-3'>
              <div className='w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600'>
                <CheckCircle2 className='w-6 h-6' />
              </div>
              <div>
                <p className='text-xs text-slate-500 font-bold uppercase'>Estado</p>
                <p className='text-slate-900 font-bold'>Análisis Completado</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
