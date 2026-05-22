import { useTheme } from "../../App";
import { FaSun, FaMoon } from 'react-icons/fa';

export default function ThemeToggle() {
  const { isDark, toggle } = useTheme()

  return (
    <button
      onClick={toggle}
      aria-label="Basculer le thème"
      className="p-2 rounded-full transition-all duration-300
        bg-slate-100 hover:bg-slate-200
        dark:bg-slate-800 dark:hover:bg-slate-700
        border border-slate-200 dark:border-slate-700"
    >
      {isDark
        ? <FaSun size={20} className="text-yellow-400 hover:text-yellow-500" />
        : <FaMoon size={20} className="text-slate-700 hover:text-slate-900" />
      }
    </button>
  )
}