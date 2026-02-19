import React from 'react'
import { Rocket } from 'lucide-react'

export default function Footer() {
  return (
    <footer className='bg-slate-50 pt-20 pb-10 border-t border-slate-100'>
      <div className='section-container'>
        <div className='grid md:grid-cols-4 gap-12 mb-16'>
          <div className='col-span-2'>
            <div className='flex items-center gap-2 mb-6'>
              <div className='w-8 h-8 bg-[#0B3D91] rounded-lg flex items-center justify-center'>
                <Rocket className='text-white w-5 h-5' />
              </div>
              <span className='text-xl font-bold tracking-tight text-[#0B3D91]'>
                Evalix
              </span>
            </div>
            <p className='text-slate-500 max-w-sm mb-8 italic'>
              Revolucionando la forma en que los docentes evalúan resultados. Precisión académica, innovación digital.
            </p>
          </div>
          
          <div>
            <h4 className='font-bold mb-6 text-sm uppercase tracking-widest text-[#0B3D91]'>Producto</h4>
            <ul className='space-y-4 text-slate-600 font-medium'>
              <li><a href='#features' className='hover:text-[#0B3D91] transition-colors'>Características</a></li>
              <li><a href='#pricing' className='hover:text-[#0B3D91] transition-colors'>Precios</a></li>
              <li><a href='#' className='hover:text-[#0B3D91] transition-colors'>FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className='font-bold mb-6 text-sm uppercase tracking-widest text-[#0B3D91]'>Comunidad</h4>
            <ul className='space-y-4 text-slate-600 font-medium'>
              <li><a href='#' className='hover:text-[#0B3D91] transition-colors'>Guías</a></li>
              <li><a href='#' className='hover:text-[#0B3D91] transition-colors'>Videos</a></li>
              <li><a href='#' className='hover:text-[#0B3D91] transition-colors'>Blog</a></li>
            </ul>
          </div>
        </div>

        <div className='pt-10 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6'>
          <p className='text-slate-400 text-sm'>
            &copy; {new Date().getFullYear()} Evalix. Todos los derechos reservados.
          </p>
          <div className='flex gap-8 text-sm text-slate-400 font-medium'>
            <a href='#' className='hover:text-[#0B3D91]'>Privacidad</a>
            <a href='#' className='hover:text-[#0B3D91] text-italic'>Términos</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
