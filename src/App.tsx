import { motion } from 'framer-motion'
import {
  BadgeCheck,
  BookOpen,
  Briefcase,
  CheckCircle2,
  GraduationCap,
  Mail,
  MapPin,
  MessageCircle,
} from 'lucide-react'

const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Perfil', href: '#perfil' },
  { label: 'Experiencia', href: '#experiencia' },
  { label: 'Enfoque', href: '#enfoque' },
  { label: 'Habilidades', href: '#habilidades' },
  { label: 'Contacto', href: '#contacto' },
]

const profileHighlights = [
  'Inglés C1',
  'Clases particulares 11-16 años',
  'Colegio Ramón Baltierra',
  'Chilchota, Michoacán',
  'Perfil paciente, claro y dinámico',
]

const trajectory = [
  {
    title: 'English Teacher',
    subtitle: 'Colegio Ramón Baltierra · Chilchota, Michoacán',
    period: 'Periodo: Un semestre',
    description:
      'Impartí clases de inglés en un entorno escolar, reforzando vocabulario, gramática, comprensión y participación activa en clase.',
  },
  {
    title: 'English Tutor',
    subtitle: 'Clases particulares · Estudiantes de 11 a 16 años',
    period: 'Experiencia continua en apoyo académico',
    description:
      'Apoyo personalizado para jóvenes en temas escolares, tareas, vocabulario, conversación básica, gramática y preparación para exámenes.',
  },
]

const languageLevels = [
  { area: 'Speaking', level: 'Advanced' },
  { area: 'Listening', level: 'Strong' },
  { area: 'Reading', level: 'Advanced' },
  { area: 'Writing', level: 'Strong' },
  { area: 'Grammar', level: 'Confident' },
]

const approachCards = [
  {
    title: 'Clarity first',
    description: 'Explicaciones simples y directas para que el alumno entienda sin sentirse saturado.',
  },
  {
    title: 'Confidence through practice',
    description: 'Actividades para que el estudiante pierda el miedo a equivocarse.',
  },
  {
    title: 'Grammar in context',
    description: 'Gramática conectada con ejemplos reales.',
  },
  {
    title: 'Youth-centered learning',
    description: 'Trabajo cercano con jóvenes, adaptando ritmo y ejemplos a su edad.',
  },
  {
    title: 'Dynamic resources',
    description: 'Uso de actividades, ejemplos y recursos variados para mantener la atención.',
  },
  {
    title: 'Constructive feedback',
    description: 'Retroalimentación clara para mejorar paso a paso.',
  },
]

const teachingSkills = [
  'Inglés C1',
  'Comunicación clara',
  'Paciencia',
  'Trabajo con jóvenes',
  'Explicación sencilla',
  'Planeación de clase',
  'Manejo de grupo',
  'Acompañamiento académico',
  'Retroalimentación constructiva',
  'Actividades dinámicas',
  'Adaptación al ritmo del estudiante',
  'Innovación en el aprendizaje',
]

const supportAreas = [
  'Regularización escolar',
  'Gramática',
  'Vocabulario',
  'Comprensión lectora',
  'Speaking practice',
  'Preparación para exámenes',
  'Apoyo con tareas',
  'Confianza para participar en clase',
]

function App() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 text-slate-100">
      <div className="pointer-events-none absolute -left-24 top-16 h-64 w-64 rounded-full bg-emerald-400/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 top-56 h-72 w-72 rounded-full bg-sky-400/20 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 pb-16 pt-6 sm:px-6 lg:px-8">
        <header className="sticky top-4 z-20 rounded-2xl border border-white/20 bg-white/10 px-4 py-3 backdrop-blur-xl sm:px-6">
          <nav className="flex flex-wrap items-center justify-between gap-3">
            <p className="text-lg font-semibold tracking-wide">Moisés Medina Moreno</p>
            <div className="hidden items-center gap-6 md:flex">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} className="text-sm text-slate-200 transition hover:text-emerald-300">
                  {link.label}
                </a>
              ))}
            </div>
            <a href="#contacto" className="inline-flex items-center gap-2 rounded-full bg-emerald-300 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-emerald-200">
              <MessageCircle size={16} /> Contacto
            </a>
          </nav>
        </header>

        <section id="inicio" className="pt-14 sm:pt-20">
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="rounded-3xl border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-xl sm:p-12">
              <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1 text-sm text-emerald-200">
                <GraduationCap size={16} /> English Teacher & Tutor
              </p>
              <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl">Moisés Medina Moreno</h1>
              <p className="mt-3 text-lg text-slate-200">English Teacher & Tutor | C1 English Certified</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {['C1 English Certified', 'Teaching experience', 'Youth learning'].map((badge) => (
                  <span key={badge} className="rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs text-slate-100">{badge}</span>
                ))}
              </div>
              <p className="mt-6 max-w-3xl leading-relaxed text-slate-300">
                Portafolio docente enfocado en la enseñanza del inglés para jóvenes, con experiencia en clases particulares y aula. Mi estilo combina paciencia, claridad, cercanía e innovación para crear experiencias de aprendizaje dinámicas y significativas.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#experiencia" className="inline-flex items-center gap-2 rounded-full bg-emerald-300 px-5 py-3 font-semibold text-slate-900 transition hover:bg-emerald-200">Ver trayectoria</a>
                <a href="#contacto" className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-5 py-3 font-semibold transition hover:bg-white/20">Contactar</a>
                <a href="mailto:moisesmed2482@gmail.com" className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-5 py-3 font-semibold transition hover:bg-white/20"><Mail size={18} /> Enviar correo</a>
              </div>
            </motion.div>

            <motion.aside initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} className="rounded-3xl border border-emerald-300/30 bg-emerald-100/10 p-6 shadow-xl backdrop-blur-xl">
              <p className="text-sm uppercase tracking-wider text-emerald-200">Profile card</p>
              <h3 className="mt-2 text-2xl font-semibold text-white">Perfil docente</h3>
              <div className="mt-5 space-y-3">
                {profileHighlights.map((item) => (
                  <p key={item} className="flex items-start gap-2 rounded-xl border border-white/20 bg-white/10 p-3 text-sm text-slate-100">
                    <BadgeCheck size={16} className="mt-0.5 shrink-0 text-emerald-300" /> {item}
                  </p>
                ))}
              </div>
            </motion.aside>
          </div>
        </section>

        <section id="perfil" className="mt-16 rounded-3xl border border-white/20 bg-white/10 p-8 backdrop-blur-xl sm:p-10">
          <h2 className="text-3xl font-semibold text-white">Perfil profesional</h2>
          <p className="mt-5 max-w-4xl leading-relaxed text-slate-200">
            Soy un maestro de inglés con certificación C1 y experiencia trabajando con jóvenes de 11 a 16 años, tanto en clases particulares como en entorno escolar. Me interesa crear clases claras, pacientes y dinámicas, donde el estudiante pueda aprender con confianza, resolver dudas y usar el idioma de manera práctica.
          </p>
        </section>

        <section id="experiencia" className="mt-16">
          <h2 className="text-3xl font-semibold text-white">Trayectoria</h2>
          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            {trajectory.map((item, index) => (
              <motion.article key={item.title} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.08 }} whileHover={{ y: -4 }} className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-md">
                <p className="flex items-center gap-2 text-emerald-300"><Briefcase size={18} /> {item.title}</p>
                <p className="mt-2 text-sm text-slate-300">{item.subtitle}</p>
                <p className="mt-2 text-sm text-slate-400">{item.period}</p>
                <p className="mt-4 text-slate-200">{item.description}</p>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="mt-16 grid gap-8 lg:grid-cols-2">
          <article className="rounded-3xl border border-white/20 bg-white/10 p-8 backdrop-blur-xl">
            <h2 className="text-3xl font-semibold text-white">Formación y nivel de inglés</h2>
            <div className="mt-6 rounded-2xl border border-emerald-300/30 bg-emerald-100/10 p-5">
              <p className="flex items-center gap-2 font-medium text-emerald-200"><GraduationCap size={18} /> Certificado de inglés C1</p>
              <p className="mt-3 text-slate-200">Nivel avanzado de dominio del idioma inglés, con capacidad para comprender, explicar y trabajar contenidos académicos y conversacionales.</p>
            </div>
          </article>

          <article className="rounded-3xl border border-white/20 bg-white/10 p-8 backdrop-blur-xl">
            <h3 className="text-xl font-semibold text-white">Competencias lingüísticas</h3>
            <div className="mt-5 space-y-3">
              {languageLevels.map((item) => (
                <div key={item.area} className="rounded-xl border border-white/20 bg-white/10 p-3">
                  <div className="flex items-center justify-between text-sm">
                    <span>{item.area}</span>
                    <span className="rounded-full bg-emerald-300/20 px-3 py-1 text-emerald-200">{item.level}</span>
                  </div>
                </div>
              ))}
            </div>
          </article>
        </section>

        <section id="enfoque" className="mt-16">
          <h2 className="text-3xl font-semibold text-white">Enfoque de enseñanza</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {approachCards.map((item) => (
              <motion.article key={item.title} whileHover={{ y: -4 }} className="rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur-md">
                <p className="flex items-center gap-2 font-medium text-emerald-200"><BookOpen size={18} /> {item.title}</p>
                <p className="mt-3 text-sm text-slate-300">{item.description}</p>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="habilidades" className="mt-16 grid gap-8 lg:grid-cols-2">
          <article>
            <h2 className="text-3xl font-semibold text-white">Habilidades docentes</h2>
            <div className="mt-6 flex flex-wrap gap-3">
              {teachingSkills.map((skill) => (
                <span key={skill} className="rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm text-slate-100 backdrop-blur-md">{skill}</span>
              ))}
            </div>
          </article>

          <article>
            <h2 className="text-3xl font-semibold text-white">Áreas de apoyo</h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {supportAreas.map((item) => (
                <p key={item} className="rounded-2xl border border-white/20 bg-white/10 p-4 text-slate-200 backdrop-blur-md">{item}</p>
              ))}
            </div>
          </article>
        </section>

        <section className="mt-16 rounded-3xl border border-emerald-200/30 bg-emerald-100/10 p-8 text-center backdrop-blur-xl sm:p-10">
          <p className="text-2xl font-semibold text-emerald-100">“Learning English is easier when students feel confident enough to try.”</p>
          <p className="mx-auto mt-4 max-w-3xl text-slate-200">Mi objetivo es que cada estudiante se sienta escuchado, acompañado y motivado a avanzar paso a paso.</p>
        </section>

        <section id="contacto" className="mt-16 rounded-3xl border border-white/20 bg-white/10 p-8 backdrop-blur-xl sm:p-12">
          <h2 className="text-3xl font-semibold text-white">Contacto</h2>
          <p className="mt-4 max-w-3xl text-slate-200">Estoy abierto a oportunidades docentes, clases particulares y proyectos educativos relacionados con la enseñanza del inglés.</p>
          <div className="mt-6 space-y-3 text-slate-200">
            <p className="flex items-center gap-2"><Mail size={16} className="text-emerald-300" /> Correo: moisesmed2482@gmail.com</p>
            <p className="flex items-center gap-2"><MessageCircle size={16} className="text-emerald-300" /> WhatsApp: 351 134 5108</p>
            <p className="flex items-center gap-2"><MapPin size={16} className="text-emerald-300" /> Ubicación: Chilchota, Michoacán</p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="mailto:moisesmed2482@gmail.com" className="inline-flex items-center gap-2 rounded-full bg-emerald-300 px-5 py-3 font-semibold text-slate-900 transition hover:bg-emerald-200"><Mail size={18} /> Enviar correo</a>
            <a href="https://wa.me/523511345108" className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-5 py-3 font-semibold transition hover:bg-white/20"><MessageCircle size={18} /> Contactar por WhatsApp</a>
          </div>
        </section>

        <footer className="mt-12 text-center text-sm text-slate-300">
          <p className="inline-flex items-center gap-1"><CheckCircle2 size={14} className="text-emerald-300" /> Moisés Medina Moreno · English Teacher & Tutor · C1 English Certified</p>
        </footer>
      </div>
    </main>
  )
}

export default App
