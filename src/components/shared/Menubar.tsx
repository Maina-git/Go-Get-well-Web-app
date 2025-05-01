import { Link, useLocation } from 'react-router-dom'
import { useThemeStore } from '@/store/themeStore'
import ThemeSelector from "./ThemeSelector"


const MenuBar = () => {
  const location = useLocation()
  const { specialty } = useThemeStore()

  return (
    <nav className={`bg-primary text-white p-4 theme-${specialty}`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex gap-4">
          <Link to="/" className={location.pathname === '/' ? 'underline font-bold px-1' : ''}>Home</Link>
          <Link to="/themes" className={location.pathname === '/Themes' ? 'font-bold' : ''}>Themes</Link>
        </div>
        <ThemeSelector />
      </div>
    </nav>
  )
}

export default MenuBar
