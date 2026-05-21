import { motion } from 'framer-motion'
import {
  BadgeCheck,
  BookOpen,
  Briefcase,
  CalendarCheck,
  CheckCircle2,
  GraduationCap,
  Handshake,
  Languages,
  Mail,
  MessageCircle,
  School,
  Sparkles,
  Users,
} from 'lucide-react'

const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Enfoque', href: '#enfoque' },
  { label: 'Experiencia', href: '#experiencia' },
  { label: 'Clases', href: '#clases' },
  { label: 'Contacto', href: '#contacto' },
]

const trustBadges = [
  { icon: BadgeCheck, text: 'Inglés C1 certificado' },
  { icon: Users, text: 'Clases particulares 11-16 años' },
  { icon: School, text: 'Experiencia en aula' },
  { icon: Handshake, text: 'Enfoque paciente' },
  { icon: Sparkles, text: 'Aprendizaje dinámico' },
  { icon: Languages, text: 'Apoyo escolar y conversación' },
]

const focusCards = [
  'Grammar without fear',
  'Speaking practice',
  'Vocabulary in context',
  'School support',
  'Confidence first',
  'Dynamic learning',
]

const targetStudents = [
  'Estudiantes de secundaria o preparatoria que necesitan reforzar inglés.',
  'Jóvenes que quieren mejorar su speaking.',
  'Alumnos que se sienten inseguros con gramática.',
  'Estudiantes que necesitan apoyo para tareas o exámenes.',
  'Personas que quieren aprender con paciencia y claridad.',
]

const teachingSkills = [
  'Comunicación clara',
  'Paciencia',
  'Manejo de grupo',
  'Explicación sencilla',
  'Adaptación al ritmo del alumno',
  'Planeación de clase',
  'Inglés C1',
  'Actividades dinámicas',
  'Trabajo con jóvenes',
  'Retroalimentación constructiva',
]

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
}

function App() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-emerald-950 text-slate-100">
      <div className="mx-auto max-w-6xl px-4 pb-16 pt-6 sm:px-6 lg:px-8">
        <header className="sticky top-4 z-20 rounded-2xl border border-white/20 bg-white/10 px-4 py-3 backdrop-blur-xl sm:px-6">
          <nav className="flex flex-wrap items-center justify-between gap-3">
            <p className="text-lg font-semibold tracking-wide">Moisés Medina</p>
            <div className="hidden items-center gap-6 md:flex">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} className="text-sm text-slate-200 transition hover:text-emerald-300">
                  {link.label}
                </a>
              ))}
            </div>
            <a href="https://wa.me/5210000000000" className="inline-flex items-center gap-2 rounded-full bg-emerald-300 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-emerald-200">
              <CalendarCheck size={16} /> Agendar clase
            </a>
          </nav>
        </header>

        <section id="inicio" className="pt-14 sm:pt-20">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.7 }} className="rounded-3xl border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-xl sm:p-12">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1 text-sm text-emerald-200"><GraduationCap size={16} /> English Teacher & Tutor</p>
            <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl">English Teacher & Tutor</h1>
            <p className="mt-6 text-lg text-slate-200">Clases de inglés claras, pacientes y dinámicas para jóvenes que quieren aprender con confianza.</p>
            <p className="mt-5 max-w-3xl leading-relaxed text-slate-300">Soy Moisés Medina Moreno, cuento con certificación de inglés C1 y experiencia enseñando a estudiantes de 11 a 16 años en clases particulares y en aula. Mi enfoque combina paciencia, claridad y actividades prácticas para que cada alumno entienda, participe y pierda el miedo a usar el idioma.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="https://wa.me/5210000000000" className="inline-flex items-center gap-2 rounded-full bg-emerald-300 px-5 py-3 font-semibold text-slate-900 transition hover:bg-emerald-200"><MessageCircle size={18} /> Contactar por WhatsApp</a>
              <a href="mailto:hello@example.com" className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-5 py-3 font-semibold transition hover:bg-white/20"><Mail size={18} /> Enviar correo</a>
            </div>
          </motion.div>
        </section>

        <section className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {trustBadges.map(({ icon: Icon, text }, index) => (
            <motion.article key={text} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35, delay: index * 0.06 }} whileHover={{ scale: 1.02 }} className="rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-md">
              <p className="flex items-center gap-3 text-sm font-medium text-slate-100"><Icon size={18} className="text-emerald-300" /> {text}</p>
            </motion.article>
          ))}
        </section>

        <section id="enfoque" className="mt-16">
          <h2 className="text-3xl font-semibold text-white">Mi enfoque</h2>
          <p className="mt-4 max-w-3xl text-slate-300">Mi forma de enseñar parte de una idea simple: aprender inglés no debe sentirse como memorizar reglas sin sentido. Busco que cada clase tenga explicación clara, práctica guiada y actividades que conecten el idioma con situaciones reales.</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {focusCards.map((item) => (
              <motion.div key={item} whileHover={{ y: -4 }} className="rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur-md">
                <p className="flex items-center gap-2 font-medium"><BookOpen size={18} className="text-emerald-300" /> {item}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="experiencia" className="mt-16">
          <h2 className="text-3xl font-semibold text-white">Experiencia</h2>
          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            <article className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-md">
              <p className="flex items-center gap-2 text-emerald-300"><Briefcase size={18} /> English Teacher — Colegio Ramón Baltierra</p>
              <p className="mt-2 text-sm text-slate-300">Chilchota, Michoacán · Un semestre</p>
              <p className="mt-4 text-slate-200">Impartí clases de inglés en un entorno escolar, trabajando con jóvenes y reforzando habilidades como vocabulario, gramática, comprensión y participación en clase.</p>
            </article>
            <article className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-md">
              <p className="flex items-center gap-2 text-emerald-300"><Users size={18} /> Clases particulares de inglés</p>
              <p className="mt-2 text-sm text-slate-300">Estudiantes de 11 a 16 años</p>
              <p className="mt-4 text-slate-200">He apoyado a niños y jóvenes en el aprendizaje del inglés mediante clases personalizadas, enfocadas en reforzar temas escolares, mejorar comprensión y aumentar la confianza al usar el idioma.</p>
            </article>
          </div>
        </section>

        <section id="clases" className="mt-16 grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold text-white">¿Para quién son mis clases?</h2>
            <div className="mt-6 space-y-3">
              {targetStudents.map((item) => (
                <p key={item} className="rounded-2xl border border-white/20 bg-white/10 p-4 text-slate-200 backdrop-blur-md">{item}</p>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-semibold text-white">Habilidades docentes</h2>
            <div className="mt-6 flex flex-wrap gap-3">
              {teachingSkills.map((skill) => (
                <span key={skill} className="rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm text-slate-100 backdrop-blur-md">{skill}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-16 rounded-3xl border border-emerald-200/30 bg-emerald-100/10 p-8 text-center backdrop-blur-xl sm:p-10">
          <p className="text-2xl font-semibold text-emerald-100">“Learning English is easier when you feel confident enough to try.”</p>
          <p className="mx-auto mt-4 max-w-3xl text-slate-200">Mi objetivo es que cada estudiante se sienta acompañado, escuchado y motivado a avanzar paso a paso.</p>
        </section>

        <section id="contacto" className="mt-16 rounded-3xl border border-white/20 bg-white/10 p-8 backdrop-blur-xl sm:p-12">
          <h2 className="text-3xl font-semibold text-white">¿Buscas clases de inglés claras y personalizadas?</h2>
          <p className="mt-4 max-w-3xl text-slate-200">Estoy disponible para apoyar a estudiantes que quieran reforzar su inglés, mejorar su conversación o prepararse mejor para sus clases y exámenes.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="https://wa.me/5210000000000" className="inline-flex items-center gap-2 rounded-full bg-emerald-300 px-5 py-3 font-semibold text-slate-900 transition hover:bg-emerald-200"><MessageCircle size={18} /> Contactarme por WhatsApp</a>
            <a href="mailto:hello@example.com" className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-5 py-3 font-semibold transition hover:bg-white/20"><Mail size={18} /> Enviar correo</a>
          </div>
        </section>

        <footer className="mt-12 text-center text-sm text-slate-300">
          <p className="inline-flex items-center gap-1"><CheckCircle2 size={14} className="text-emerald-300" /> Moisés Medina Moreno · English Teacher & Tutor</p>
        </footer>
      </div>
    </main>
  )
}

export default App
