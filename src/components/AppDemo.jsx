import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Download, ShieldCheck, Zap, BarChart3, ChevronRight, Smartphone, Scan, CheckCircle2, QrCode } from 'lucide-react'
import { cn } from '../lib/utils'

export default function AppDemo() {
  const [activeTab, setActiveTab] = useState('scan')
  
  const features = [
    {
      id: 'scan',
      name: 'Escaneo en Vivo',
      icon: <Scan className="w-5 h-5" />,
      title: 'Detección inteligente',
      description: 'Apunta con la cámara de tu celular y deja que Evalix haga el resto. No necesitas un escáner físico.',
      items: ['Enfoque automático', 'Corrección de perspectiva', 'Detección en milisegundos']
    },
    {
      id: 'stats',
      name: 'Analíticas Móviles',
      icon: <BarChart3 className="w-5 h-5" />,
      title: 'Resultados al instante',
      description: 'Ve el progreso de tus alumnos en tiempo real desde cualquier lugar. Gráficas táctiles y fáciles de leer.',
      items: ['Dashboards interactivos', 'Filtros rápidos', 'Sincronización segura']
    },
    {
      id: 'export',
      name: 'Exportación',
      icon: <Zap className="w-5 h-5" />,
      title: 'Comparte resultados',
      description: 'Envía las calificaciones por WhatsApp, correo o súbelas a tu plataforma escolar directamente desde el APK.',
      items: ['Compartir nativo', 'XML / CSV / PDF', 'Historial offline']
    }
  ]

  // Animation States: 'idle', 'scanning', 'processing', 'zoomed', 'detected'
  const [scanStep, setScanStep] = useState('idle')

  useEffect(() => {
    if (activeTab !== 'scan') {
      setScanStep('idle')
      return
    }

    const sequence = async () => {
      setScanStep('idle')
      await new Promise(r => setTimeout(r, 1500))
      
      setScanStep('scanning')
      await new Promise(r => setTimeout(r, 3000))
      
      setScanStep('processing')
      await new Promise(r => setTimeout(r, 1500))
      
      setScanStep('zoomed')
      await new Promise(r => setTimeout(r, 1000))
      
      setScanStep('detected')
      await new Promise(r => setTimeout(r, 4000))
      
      sequence() // Loop
    }

    sequence()
  }, [activeTab])

  // Variants for the Exam Sheet
  const sheetVariants = {
    idle: { scale: 0.8, y: 20, opacity: 0.6 },
    scanning: { scale: 0.9, y: 0, opacity: 1 },
    processing: { scale: 0.9, y: 0, opacity: 1 },
    zoomed: { scale: 1.8, y: -40, opacity: 1 },
    detected: { scale: 1.8, y: -40, opacity: 1 }
  }

  return (
    <section id='demo' className='py-24 bg-slate-50 relative overflow-hidden'>
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-blue-100/30 rounded-full blur-[120px] -z-10" />

      <div className='section-container'>
        <div className='text-center max-w-3xl mx-auto mb-16'>
          <h2 className='text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6'>
            El poder de <span className="text-[#0B3D91]">Evalix en tu móvil</span>
          </h2>
          <p className='text-lg text-slate-600 font-light leading-relaxed'>
            Lleva el sistema de calificación más avanzado en tu bolsillo. Descarga el APK y experimenta la libertad de corregir donde sea.
          </p>
        </div>

        <div className='grid lg:grid-cols-12 gap-12 items-center'>
          
          {/* Features Detail (Left) */}
          <div className='lg:col-span-5 space-y-10 order-2 lg:order-1'>
            <div className='flex flex-col gap-3'>
              {features.map((f) => (
                <button
                  key={f.id}
                  onClick={() => setActiveTab(f.id)}
                  className={cn(
                    'flex items-center gap-4 p-5 rounded-2xl transition-all duration-300 text-left border-2',
                    activeTab === f.id 
                      ? 'bg-white border-[#0B3D91] shadow-xl shadow-blue-900/5 translate-x-2' 
                      : 'bg-transparent border-transparent text-slate-500 hover:bg-white/50'
                  )}
                >
                  <div className={cn(
                    'w-10 h-10 rounded-xl flex items-center justify-center transition-colors',
                    activeTab === f.id ? 'bg-[#0B3D91] text-white' : 'bg-slate-200 text-slate-500'
                  )}>
                    {f.icon}
                  </div>
                  <div>
                    <h4 className={cn('font-bold', activeTab === f.id ? 'text-[#0B3D91]' : 'text-slate-700')}>
                      {f.name}
                    </h4>
                  </div>
                </button>
              ))}
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100 min-h-[220px]">
              <AnimatePresence mode='wait'>
                {features.map((f) => f.id === activeTab && (
                  <motion.div
                    key={f.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    className="space-y-6"
                  >
                    <h3 className="text-2xl font-extrabold text-[#0B3D91]">{f.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{f.description}</p>
                    <ul className="grid grid-cols-1 gap-3">
                      {f.items.map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm font-medium text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>

          {/* Smartphone Mockup & Download Section (Right) */}
          <div className='lg:col-span-7 flex flex-col items-center gap-16 order-1 lg:order-2'>
             <div className="relative">
                {/* Device Frame */}
                <div className="relative w-[280px] h-[580px] bg-slate-900 rounded-[3rem] p-3 shadow-[0_0_60px_-15px_rgba(11,61,145,0.5)] border-8 border-slate-800 z-10">
                   {/* Notch */}
                   <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-slate-800 rounded-b-2xl z-40" />
                   
                   <div className="bg-black rounded-4xl overflow-hidden w-full h-full relative group">
                      <AnimatePresence mode='wait'>
                         {activeTab === 'scan' && (
                           <motion.div 
                            key="scan-view" 
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                            className="w-full h-full relative overflow-hidden"
                           >
                              {/* Camera Background Layer */}
                              <div className="absolute inset-0 bg-slate-800 flex items-center justify-center">
                                 {/* Interactive Exam Sheet */}
                                 <motion.div 
                                    variants={sheetVariants}
                                    animate={scanStep}
                                    transition={{ type: 'spring', damping: 20, stiffness: 100 }}
                                    className="w-[85%] bg-white rounded-lg shadow-2xl p-6 flex flex-col gap-4 origin-top"
                                 >
                                    <div className="flex justify-between items-start mb-2">
                                       <div className="space-y-1.5 w-full">
                                          <div className="h-2 w-2/3 bg-slate-200 rounded-full" />
                                          <div className="h-1.5 w-1/3 bg-slate-100 rounded-full" />
                                       </div>
                                       <div className="w-8 h-8 bg-slate-100 rounded flex items-center justify-center">
                                          <div className="w-4 h-4 border-2 border-slate-300" />
                                       </div>
                                    </div>

                                    {/* Bubble Grid Simulation */}
                                    <div className="space-y-4">
                                       {[...Array(6)].map((_, row) => (
                                          <div key={row} className="flex items-center justify-between gap-2">
                                             <div className="w-3 h-3 bg-slate-100 rounded-full flex-none text-[6px] flex items-center justify-center font-bold text-slate-400">{row+1}</div>
                                             {[...Array(5)].map((_, col) => (
                                                <div key={col} className="relative">
                                                   <div className="w-4 h-4 rounded-full border border-slate-200" />
                                                   {/* Simulated hand-marked bubble */}
                                                   {((row === 0 && col === 1) || (row === 1 && col === 3) || (row === 2 && col === 0) || (row === 3 && col === 4) || (row === 4 && col === 2) || (row === 5 && col === 1)) && (
                                                      <div className="absolute inset-0.5 bg-slate-900 rounded-full opacity-80" />
                                                   )}
                                                   
                                                   {/* Detection Mark Overlay */}
                                                   {scanStep === 'detected' && ((row === 0 && col === 1) || (row === 1 && col === 3) || (row === 2 && col === 0) || (row === 3 && col === 4) || (row === 4 && col === 2) || (row === 5 && col === 1)) && (
                                                      <motion.div 
                                                         initial={{ scale: 0, opacity: 0 }}
                                                         animate={{ scale: 1.4, opacity: 1 }}
                                                         className="absolute -inset-0.5 border-2 border-emerald-500 rounded-full z-10"
                                                      >
                                                         <div className="absolute top-0 right-0 w-1.5 h-1.5 bg-emerald-500 rounded-full translate-x-1/2 -translate-y-1/2 shadow-[0_0_5px_#10b981]" />
                                                      </motion.div>
                                                   )}
                                                </div>
                                             ))}
                                          </div>
                                       ))}
                                    </div>

                                    <div className="mt-2 h-1.5 w-full bg-slate-50 rounded-full" />
                                 </motion.div>
                              </div>

                              {/* UI Overlays based on scanStep */}
                              
                              {/* 1. Target Frame (Visible mostly during idle/scanning) */}
                              <AnimatePresence>
                                {(scanStep === 'idle' || scanStep === 'scanning') && (
                                  <motion.div 
                                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                                    className="absolute inset-8 border-2 border-dashed border-white/20 rounded-3xl flex items-center justify-center pointer-events-none z-20"
                                  >
                                    <QrCode className="w-12 h-12 text-white/10" />
                                  </motion.div>
                                )}
                              </AnimatePresence>

                              {/* 2. Scanning Laser */}
                              <AnimatePresence>
                                {scanStep === 'scanning' && (
                                  <motion.div 
                                    key="laser"
                                    initial={{ top: '15%' }}
                                    animate={{ top: ['15%', '85%', '15%'] }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 2.5, repeat: Infinity, ease: 'linear' }}
                                    className="absolute left-4 right-4 h-1 bg-blue-500 shadow-[0_0_20px_rgba(59,130,246,1)] z-30"
                                  >
                                     <div className="absolute inset-0 bg-blue-400 blur-sm" />
                                  </motion.div>
                                )}
                              </AnimatePresence>

                               {/* 3. Processing Feedback */}
                               <AnimatePresence>
                                {scanStep === 'processing' && (
                                  <motion.div 
                                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                                    className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-[2px] z-30"
                                  >
                                     <div className="flex flex-col items-center gap-4">
                                        <div className="w-12 h-12 border-4 border-blue-500/30 border-t-blue-500 rounded-full animate-spin" />
                                        <p className="text-white text-[10px] font-black uppercase tracking-widest bg-[#0B3D91] px-3 py-1 rounded-full shadow-xl">Procesando...</p>
                                     </div>
                                  </motion.div>
                                )}
                              </AnimatePresence>

                              {/* 4. Detection Info Overlay */}
                              <AnimatePresence>
                                {scanStep === 'detected' && (
                                  <motion.div 
                                    initial={{ y: 50, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    className="absolute bottom-6 left-0 right-0 px-6 z-30"
                                  >
                                     <div className="bg-slate-900/90 backdrop-blur-xl border border-white/10 rounded-2xl p-4 flex items-center justify-between shadow-2xl">
                                        <div className="flex items-center gap-3">
                                           <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
                                              <CheckCircle2 className="w-5 h-5 text-white" />
                                           </div>
                                           <div>
                                              <p className="text-[10px] text-white/50 uppercase font-bold tracking-tight">Análisis Completo</p>
                                              <p className="text-white text-xs font-bold leading-none">Hoja detectada al 100%</p>
                                           </div>
                                        </div>
                                        <div className="text-right">
                                           <p className="text-emerald-400 text-lg font-black leading-none">8.5</p>
                                           <p className="text-[8px] text-white/40 font-bold uppercase">Calific.</p>
                                        </div>
                                     </div>
                                  </motion.div>
                                )}
                              </AnimatePresence>

                              {/* Constant Camera Elements */}
                              <div className="absolute top-12 left-6 flex items-center gap-2 z-20">
                                 <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
                                 <span className="text-[10px] text-white/80 font-bold uppercase tracking-widest">Live</span>
                              </div>
                           </motion.div>
                         )}

                         {activeTab === 'stats' && (
                           <motion.div 
                            key="stats-view" 
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                            className="w-full h-full p-6 bg-slate-900 flex flex-col gap-6"
                           >
                              <div className="pt-8 space-y-2">
                                 <div className="h-4 w-24 bg-slate-800 rounded-full" />
                                 <div className="h-8 w-40 bg-white/90 rounded-xl" />
                              </div>
                              <div className="grid grid-cols-2 gap-3">
                                 <div className="h-24 bg-blue-600/10 border border-blue-500/20 rounded-2xl p-4 flex flex-col justify-end">
                                    <p className="text-slate-400 text-[10px] uppercase font-bold">Promedio</p>
                                    <p className="text-white text-2xl font-black">8.4</p>
                                 </div>
                                 <div className="h-24 bg-slate-800 rounded-2xl p-4 flex flex-col justify-end">
                                    <p className="text-slate-400 text-[10px] uppercase font-bold">Total</p>
                                    <p className="text-white text-2xl font-black">124</p>
                                 </div>
                              </div>
                              <div className="grow bg-slate-800/50 rounded-3xl border border-slate-800 p-4 flex items-end justify-between gap-1 pb-4">
                                 {[40, 60, 45, 90, 70, 85, 55, 100].map((h, i) => (
                                    <motion.div 
                                      key={i}
                                      initial={{ height: 0 }} animate={{ height: `${h}%` }}
                                      className="w-full bg-linear-to-t from-blue-600 to-blue-400 rounded-t-lg"
                                    />
                                 ))}
                              </div>
                           </motion.div>
                         )}

                         {activeTab === 'export' && (
                           <motion.div 
                            key="export-view" 
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                            className="w-full h-full p-6 bg-slate-900 flex flex-col items-center justify-center gap-8"
                           >
                              <div className="w-24 h-24 bg-blue-600/20 rounded-full flex items-center justify-center border-2 border-blue-500/30">
                                 <Zap className="w-10 h-10 text-blue-500 animate-pulse" />
                              </div>
                              <div className="text-center space-y-4">
                                 <h4 className="text-white font-bold text-xl">¿A dónde enviamos?</h4>
                                 <div className="grid grid-cols-2 gap-4">
                                    {['WhatsApp', 'Excel', 'Correo', 'PDF'].map((app) => (
                                      <div key={app} className="bg-slate-800 px-6 py-4 rounded-2xl border border-slate-700 text-slate-400 text-xs font-bold hover:text-white hover:border-blue-500 transition-colors cursor-pointer">
                                        {app}
                                      </div>
                                    ))}
                                 </div>
                              </div>
                           </motion.div>
                         )}
                      </AnimatePresence>
                   </div>
                </div>

                {/* Status Floating Badges */}
                <motion.div 
                   initial={{ x: 20, opacity: 0 }}
                   animate={{ x: 0, opacity: 1 }}
                   transition={{ delay: 1 }}
                   className="absolute -top-6 -right-12 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-blue-50 z-20 hidden lg:flex items-center gap-3"
                >
                   <div className="w-2 h-2 bg-emerald-500 rounded-full animate-ping" />
                   <p className="text-[10px] font-black text-slate-900 uppercase tracking-widest text-nowrap">Conexión Segura v1.0</p>
                </motion.div>
             </div>

             {/* High Impact Download Panel (Bottom) */}
             <motion.div 
               initial={{ y: 20, opacity: 0 }}
               whileInView={{ y: 0, opacity: 1 }}
               viewport={{ once: true }}
               className="w-full max-w-2xl bg-white rounded-4xl p-8 shadow-[0_30px_100px_-20px_rgba(11,61,145,0.15)] border border-slate-100 relative group overflow-hidden"
             >
                <div className="absolute inset-0 bg-linear-to-b from-blue-50/50 to-transparent rounded-4xl -z-10" />
                
                {/* Decorative background circle */}
                <div className="absolute -right-20 -top-20 w-64 h-64 bg-blue-50/30 rounded-full blur-3xl -z-10" />

                <div className="flex flex-col md:flex-row items-center justify-between gap-10">
                   <div className="flex items-center gap-6">
                      <div className="w-20 h-20 bg-[#0B3D91] rounded-3xl flex items-center justify-center shadow-2xl shadow-blue-900/30 relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
                        <div className="absolute inset-0 bg-linear-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        <Smartphone className="w-10 h-10 text-white" />
                      </div>
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                           <span className="flex items-center gap-1.5 text-[10px] font-black text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full uppercase tracking-widest border border-emerald-100/50">
                              <ShieldCheck className="w-3.5 h-3.5" /> Direct Download
                           </span>
                           <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">v1.0.0</span>
                        </div>
                        <h4 className="text-slate-900 font-black text-3xl tracking-tight leading-none mb-1">evalix.apk</h4>
                        <div className="flex items-center gap-4">
                           <span className="text-xs font-bold text-slate-500">Android 8.0+</span>
                           <div className="w-1 h-1 bg-slate-300 rounded-full" />
                           <span className="text-xs font-bold text-slate-450 uppercase">62 MB</span>
                        </div>
                      </div>
                   </div>

                   <div className="flex flex-col gap-3 w-full md:w-auto">
                      <button className="btn-primary bg-[#0B3D91] hover:bg-[#051C42] border-[#0B3D91] px-12 py-5 text-xl flex items-center justify-center gap-3 group ring-8 ring-blue-50/50 hover:ring-blue-100/50 transition-all shadow-xl shadow-blue-900/20">
                         Instalar Aplicación
                         <Download className="w-6 h-6 group-hover:translate-y-1 transition-transform" />
                      </button>
                      <p className="text-center text-[10px] text-slate-400 font-black uppercase tracking-tighter">Sin recolección de datos sensibles</p>
                   </div>
                </div>

                {/* Performance & Trust Stats */}
                <div className="mt-10 pt-8 border-t border-slate-100 grid grid-cols-3 gap-6">
                   {[
                      { label: 'Seguridad', value: 'Datos Locales', color: 'text-blue-600' },
                      { label: 'Precisión', value: 'Análisis IA', color: 'text-emerald-600' },
                      { label: 'Autonomía', value: 'Modo Offline', color: 'text-[#0B3D91]' }
                   ].map(stat => (
                      <div key={stat.label} className="text-center px-4 relative last:after:hidden after:content-[''] after:absolute after:right-0 after:top-1/4 after:h-1/2 after:w-px after:bg-slate-100">
                         <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest mb-1">{stat.label}</p>
                         <p className={cn("font-black text-sm", stat.color)}>{stat.value}</p>
                      </div>
                   ))}
                </div>
             </motion.div>
          </div>

        </div>

        {/* Support Section */}
        <div className="mt-32 grid md:grid-cols-3 gap-8 border-t border-slate-200 pt-12 items-center text-center md:text-left">
           <div>
              <p className="text-slate-400 text-sm font-bold uppercase tracking-widest mb-2">Compatibilidad</p>
              <h4 className="text-xl font-extrabold text-[#0B3D91]">Android 8.0 en adelante</h4>
           </div>
           <div className="flex justify-center flex-col md:items-start items-center">
              <div className="flex -space-x-2 mb-2">
                 {[1,2,3].map(i => <div key={i} className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white overflow-hidden"><img src={`https://i.pravatar.cc/100?u=${i}`} alt="" /></div>)}
              </div>
              <p className="text-slate-600 text-sm font-medium">Calificado con 4.9/5 por docentes</p>
           </div>
           <div className="md:text-right">
              <a href="#how-it-works" className="text-[#0B3D91] font-bold text-sm inline-flex items-center gap-1 group">
                ¿Cómo instalar un APK?
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
           </div>
        </div>
      </div>
    </section>
  )
}
