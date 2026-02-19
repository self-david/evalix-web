export default function TestComponent() {
  return (
    <div className='p-8 bg-slate-900 text-white rounded-xl shadow-2xl border border-slate-700 animate-in fade-in duration-1000'>
      <h2 className='text-3xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent'>
        ¡Astro + React + Tailwind funcionando!
      </h2>
      <p className='mt-4 text-slate-400'>
        Este es un componente React con estilos de Tailwind CSS.
      </p>
      <button 
        className='mt-6 px-6 py-2 bg-blue-600 hover:bg-blue-500 transition-colors rounded-lg font-medium'
        onClick={() => alert('¡Funciona!')}
      >
        Probar Interactividad
      </button>
    </div>
  )
}
