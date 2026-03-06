import { useState } from 'react'
import Left from './components/Left.jsx'
import Right from './components/Right.jsx'
import { Moon } from 'lucide-react'

function App() {
  const [isDark, setIsDark] = useState(false)

  const toggleTheme = () => {
    setIsDark(isDark ? false : true)
  }

  return (
    <main className='flex h-dvh'>
      <button
        onClick={toggleTheme}
        className='fixed left-5 top-7 bg-cyan-700 w-10 h-10 flex items-center justify-center rounded-full'
      >
        {isDark ? "dark" : "light"}
      {/* </main>Moon color='white' /> */}
      </button>
      <Left />
      <Right />
    </main>
  )
}

export default App
