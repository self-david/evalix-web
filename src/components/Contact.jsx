import React from 'react'
import { Mail, MessageSquare, Send } from 'lucide-react'

export default function Contact() {
  return (
    <section id='contact' className='py-24 bg-[#0B3D91] text-white overflow-hidden relative'>
      {/* Decorative circle */}
      <div className='absolute -top-64 -right-64 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-3xl' />
      
      <div className='section-container grid lg:grid-cols-2 gap-20 items-center relative z-10'>
        <div>
          <h2 className='text-4xl lg:text-5xl text-white mb-8'>¿Listo para modernizar tu institución?</h2>
          <p className='text-xl text-blue-100 mb-12 leading-relaxed'>
            Nuestro equipo técnico está listo para ayudarte con la implementación. Escríbenos y resolveremos todas tus dudas.
          </p>

          <div className='space-y-8'>
            <div className='flex items-center gap-6'>
              <div className='w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center'>
                <Mail className='w-6 h-6' />
              </div>
              <div>
                <p className='text-blue-200 text-sm font-semibold uppercase tracking-widest'>Email directo</p>
                <p className='text-xl font-bold italic'>hola@evalix.com.mx</p>
              </div>
            </div>
            <div className='flex items-center gap-6'>
              <div className='w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center'>
                <MessageSquare className='w-6 h-6' />
              </div>
              <div>
                <p className='text-blue-200 text-sm font-semibold uppercase tracking-widest'>Soporte</p>
                <p className='text-xl font-bold italic'>Respuesta en menos de 24h</p>
              </div>
            </div>
          </div>
        </div>

        <div className='bg-white rounded-3xl p-8 lg:p-12 text-slate-900 shadow-2xl'>
          <form className='space-y-6' onSubmit={(e) => e.preventDefault()}>
            <div className='grid md:grid-cols-2 gap-6'>
              <div className='space-y-2'>
                <label className='text-sm font-bold text-slate-700 ml-1'>Nombre</label>
                <input 
                  type='text' 
                  className='w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:border-[#0B3D91] transition-colors outline-none'
                  placeholder='Tu nombre'
                />
              </div>
              <div className='space-y-2'>
                <label className='text-sm font-bold text-slate-700 ml-1'>Email</label>
                <input 
                  type='email' 
                  className='w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:border-[#0B3D91] transition-colors outline-none'
                  placeholder='email@ejemplo.com'
                />
              </div>
            </div>
            <div className='space-y-2'>
              <label className='text-sm font-bold text-slate-700 ml-1'>Mensaje</label>
              <textarea 
                className='w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:border-[#0B3D91] transition-colors outline-none min-h-[150px]'
                placeholder='¿En qué podemos ayudarte?'
              ></textarea>
            </div>
            <button className='w-full py-5 bg-[#0B3D91] text-white rounded-xl font-bold text-lg flex items-center justify-center gap-3 transition-transform hover:scale-[1.02] active:scale-95 shadow-xl shadow-blue-900/20'>
              Enviar mensaje
              <Send className='w-5 h-5' />
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
