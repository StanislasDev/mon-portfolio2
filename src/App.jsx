import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import NotFound from './pages/NotFound';
import { useDarkMode } from './hooks/useDarkMode'
import { createContext, useContext } from 'react'


export const ThemeContext = createContext()

export function useTheme() {
  return useContext(ThemeContext)
}

export default function App() {
  const { isDark, toggle } = useDarkMode()

  return (
    <ThemeContext.Provider value={{ isDark, toggle }}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </ThemeContext.Provider>
  )
}
