import React, { useState, useEffect } from 'react'
import Hero from './components/Hero'

const App = () => {
  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  return (
    <div className="min-h-screen bg-neutral-00 dark:bg-neutral-950 relative
    transition-all duration-300 isolate">
      <div className='absolute inset-0 -z-10 opacity-30 hidden' style={{
        backgroundImage:'linear-gradient(to right,rgba(0,0,0,0.05) 1px,transparent 1px),linear-gradient(to bottom, rgba(0,0,0,0.05) 1px,transparent 1px)',
        backgroundSize: '40px 40px',
        }}></div>
         <div className='absolute inset-0 -z-10 hidden' style={{
        backgroundImage:'linear-gradient(to right,rgba(0,0,0,0.05) 1px,transparent 1px),linear-gradient(to bottom, rgba(0,0,0,0.05) 1px,transparent 1px)',
        backgroundSize: '20px 20px',
        }}></div>
      <button
        onClick={toggleDarkMode}
        className="fixed top-3 lg:top-4 right-3 lg:right-4 w-9 h-9 lg:w-10
        lg:h-10 flex justify-between items-center rounded-full bg-green-600
        text-neutral-950 shadow-lg hover:bg-green-800 transition-colors p-2.5 z-10"
      >
        <i className={`bx bx-${darkMode ? 'sun' : 'moon'} text-lg lg:text-xl`}></i>
      </button>
      <Hero />
    </div>
  )
}

export default App
