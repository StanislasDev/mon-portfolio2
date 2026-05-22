import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
    const [visible, setVisible] = useState(false)
    const location = useLocation()

    useEffect(() => {
        const onScroll = () => setVisible(window.scrollY > 300)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    if (!visible || location.pathname !== '/') return null

    return (
        <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Remonter en haut"
        // title="Remonter en haut"
        className="group fixed bottom-6 right-6 z-50 w-11 h-11 rounded-full bg-white dark:bg-gray-800 border border-cyan-200 dark:border-cyan-700 hover:text-cyan-500 dark:hover:text-cyan-400 flex items-center justify-center shadow-sm transition-all duration-200 hover:border-gray-400 dark:hover:border-gray-500 hover:-translate-y-0.5 active:scale-95">
            <span className="sr-only">Haut Remonter</span>

        <svg className="w-5 h-5 text-gray-700 dark:text-gray-200 transition-transform group-hover:-translate-y-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 18.75 7.5-7.5 7.5 7.5" />
            <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 7.5-7.5 7.5 7.5" />
        </svg>


        <span className="pointer-events-none absolute bottom-full mb-2
                left-1/2 -translate-x-1/2
                bg-white dark:bg-gray-800
                border border-gray-200 dark:border-gray-700
                text-gray-700 dark:text-gray-200
                text-xs px-2.5 py-1 rounded-md whitespace-nowrap
                opacity-0 group-hover:opacity-100
                translate-y-1 group-hover:translate-y-0
                transition-all duration-150"
        >
            Remonter en haut
        </span>
        </button>
    )
    }