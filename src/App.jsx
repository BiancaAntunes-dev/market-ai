import { useState } from 'react'
import Left from './components/Left.jsx'
import Right from './components/Right.jsx'
import { Moon, Sun } from 'lucide-react'

function App() {
  const [isDark, setIsDark] = useState(false)

  const toggleTheme = () => {
    setIsDark(isDark ? false : true)
    const html = document.documentElement;
    html.classList.toggle('dark');
  }

  return (
    <main className='flex h-dvh'>
      <button
        onClick={toggleTheme}
        className='fixed left-5 top-7 w-10 h-10 flex items-center justify-center rounded-full hover:cursor-pointer bg-white/80 dark:bg-slate-800/80 backdrop-blur border border-blue-100 dark:border-slate-700 text-blue-600 dark:text-blue-400 shadow-sm transition-transform hover:scale-105'
      >
        {isDark ? <Sun size={20} /> : <Moon size={20} />}
    
      </button>
      <Left />
      <Right />
    </main>
  )
}

export default App
