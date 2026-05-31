import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import Section from './Section'
import Layout from './Layout'
import { sections, navLabels } from './sections'

export default function LandingPage() {
  const [activeSection, setActiveSection] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ container: containerRef })
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 })

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const scrollPosition = containerRef.current.scrollTop
        const windowHeight = window.innerHeight
        const newActiveSection = Math.round(scrollPosition / windowHeight)
        setActiveSection(Math.min(newActiveSection, sections.length - 1))
      }
    }
    const container = containerRef.current
    if (container) container.addEventListener('scroll', handleScroll)
    return () => { if (container) container.removeEventListener('scroll', handleScroll) }
  }, [])

  const handleNavClick = (index: number) => {
    if (containerRef.current) {
      containerRef.current.scrollTo({ top: index * window.innerHeight, behavior: 'smooth' })
    }
  }

  return (
    <Layout>
      {/* Sticky top nav */}
      <div
        className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 md:px-16 h-14"
        style={{ background: 'rgba(10,22,40,0.85)', backdropFilter: 'blur(10px)', borderBottom: '1px solid rgba(15,76,129,0.3)' }}
      >
        <button
          onClick={() => handleNavClick(0)}
          className="font-bold text-white text-sm tracking-wider hover:text-[#2ECC71] transition"
        >
          Energo<span className="text-[#2ECC71]">Contour</span>
        </button>
        <nav className="hidden md:flex items-center gap-6">
          {navLabels.slice(0, 6).map((label, i) => (
            <button
              key={label}
              onClick={() => handleNavClick(i)}
              className="text-xs font-medium tracking-wide transition"
              style={{ color: activeSection === i ? '#2ECC71' : '#a8bbd4' }}
            >
              {label}
            </button>
          ))}
        </nav>
        <button
          onClick={() => handleNavClick(5)}
          className="text-xs font-semibold px-4 py-2 rounded-lg transition hover:opacity-90"
          style={{ background: '#0F4C81', color: '#fff' }}
        >
          Запросить демо
        </button>
      </div>

      {/* Progress bar */}
      <motion.div
        className="fixed top-14 left-0 right-0 h-0.5 origin-left z-40"
        style={{ scaleX, background: '#2ECC71' }}
      />

      {/* Dot nav */}
      <nav className="fixed right-4 top-1/2 -translate-y-1/2 flex flex-col gap-2 z-40">
        {sections.map((section, index) => (
          <button
            key={section.id}
            title={navLabels[index]}
            onClick={() => handleNavClick(index)}
            className="transition-all rounded-full"
            style={{
              width: index === activeSection ? 10 : 7,
              height: index === activeSection ? 10 : 7,
              background: index === activeSection ? '#2ECC71' : '#0F4C81',
              border: index === activeSection ? '2px solid #2ECC71' : '2px solid #0F4C81',
            }}
          />
        ))}
      </nav>

      {/* Scroll container */}
      <div
        ref={containerRef}
        className="h-full overflow-y-auto snap-y snap-mandatory pt-14"
      >
        {sections.map((section, index) => (
          <Section
            key={section.id}
            {...section}
            isActive={index === activeSection}
          />
        ))}
      </div>
    </Layout>
  )
}
