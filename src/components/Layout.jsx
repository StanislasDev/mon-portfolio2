import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import AnimatedBackground from './App/AnimatedBackground';
import ScrollToTop from './App/ScrollToTop';

function Layout() {
  return (
    <div className="bg-white dark:bg-black text-slate-900 dark:text-white min-h-screen relative overflow-x-hidden transition-colors duration-300">
      <AnimatedBackground />
      <Navbar />
      <main className="relative z-10">
        <Outlet />
      </main>
      <ScrollToTop />
      <Footer />
    </div>
  );
}

export default Layout;
