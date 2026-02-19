import React, { useState, useEffect } from 'react'
import { Menu, X, Rocket } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '../lib/utils'

const navigation = [
  { name: 'Características', href: '#features' },
  { name: 'Cómo funciona', href: '#how-it-works' },
  { name: 'Resultados', href: '#results' },
  { name: 'Precios', href: '#pricing' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled ? 'bg-white/80 backdrop-blur-lg shadow-md py-4' : 'bg-transparent py-6'
      )}
    >
      <nav className='max-w-7xl mx-auto px-6 md:px-12 lg:px-16 flex items-center justify-between'>
        <div className='flex items-center gap-2'>
          <div className='w-10 h-10 bg-[#0B3D91] rounded-xl flex items-center justify-center shadow-lg shadow-blue-900/20'>
            <Rocket className='text-white w-6 h-6' />
          </div>
          <span className='text-2xl font-extrabold tracking-tight text-[#0B3D91]'>
            Evalix
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className='hidden md:flex items-center gap-8'>
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className='text-sm font-medium text-slate-600 hover:text-[#0B3D91] transition-colors'
            >
              {item.name}
            </a>
          ))}
          <a href='#contact' className='btn-primary px-6 py-2.5 text-sm'>
            Empezar ahora
          </a>
        </div>

        {/* Mobile menu button */}
        <button 
          className='md:hidden p-2 text-slate-600'
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className='md:hidden bg-white border-b border-slate-100 overflow-hidden'
          >
            <div className='px-6 py-8 space-y-4'>
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className='block text-lg font-medium text-slate-600 hover:text-[#0B3D91]'
                >
                  {item.name}
                </a>
              ))}
              <a 
                href='#contact' 
                onClick={() => setIsOpen(false)}
                className='btn-primary w-full'
              >
                Empezar ahora
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
