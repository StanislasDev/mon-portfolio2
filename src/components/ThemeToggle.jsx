import { useTheme } from "../App";
import { FaSun, FaMoon } from 'react-icons/fa';

export default function ThemeToggle() {
  const { isDark, toggle } = useTheme()

  return (
    <button
      onClick={toggle}
      aria-label="Basculer le thème"
      className="p-2 rounded-full transition-all duration-300
        bg-gray-100 hover:bg-gray-200
        dark:bg-gray-800 dark:hover:bg-gray-700"
    >
      {isDark
        ? <FaSun size={20} className="text-gray-200 hover:text-yellow-500" />
        : <FaMoon size={20} className="text-gray-200 hover:text-gray-400" />
      }
    </button>
  )
}