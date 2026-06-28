import { lazy, Suspense, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { ToastContainer } from 'react-toastify';
import Lenis from 'lenis';

import BackgroundEffect from '@/components/BackgroundEffect';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import { useTheme } from '@/context/ThemeContext';

import Hero from '@/components/sections/Hero';

import 'react-toastify/dist/ReactToastify.css';

const About = lazy(() => import('@/components/sections/About'));
const Stats = lazy(() => import('@/components/sections/Stats'));
const Skills = lazy(() => import('@/components/sections/Skills'));
const Experience = lazy(() => import('@/components/sections/Experience'));
const Projects = lazy(() => import('@/components/sections/Projects'));
const Services = lazy(() => import('@/components/sections/Services'));
const Testimonials = lazy(() => import('@/components/sections/Testimonials'));
const Contact = lazy(() => import('@/components/sections/Contact'));

const SectionFallback = () => (
  <div className="py-16" aria-hidden="true">
    <div className="mx-auto h-24 max-w-5xl rounded-3xl bg-slate-100/70 dark:bg-slate-900/40" />
  </div>
);

function App() {
  const { theme } = useTheme();

  // Smooth scroll initialization with Lenis
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      {/* SEO Optimization */}
      <Helmet>
        <title>Sunil Bairwa | Premium Portfolio | Lead React Native & Full Stack Developer</title>
        <meta
          name="description"
          content="Explore the premium portfolio of Sunil Bairwa, a senior React Native and Full Stack Developer with over 4 years of experience building high-performance, scalable web and mobile apps."
        />
        <meta
          name="keywords"
          content="React Native Developer, Full Stack Developer, Node.js, TypeScript, Mobile App Developer, Blockchain Developer, Web3 Portfolio"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <link rel="icon" type="image/svg+xml" href="/vite.svg" />
      </Helmet>

      {/* Background patterns */}
      <BackgroundEffect />

      {/* Layout Content */}
      <div className="relative min-h-screen flex flex-col justify-between">
        <Navbar />

        <main className="flex-1 w-full max-w-[88rem] mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16">
          <Hero />
          <Suspense fallback={<SectionFallback />}>
            <About />
            <Stats />
            <Skills />
            <Experience />
            <Projects />
            <Services />
            <Testimonials />
            <Contact />
          </Suspense>
        </main>

        <Footer />
        <BackToTop />
      </div>

      {/* Toast Notification Provider */}
      <ToastContainer
        position="bottom-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={theme === 'dark' ? 'dark' : 'light'}
      />
    </>
  );
}

export default App;
