import ContactForm from '@/components/ContactForm'

const projects = [
  {
    id: 1,
    title: 'E-Commerce Dashboard',
    description: 'Panel de administración con gráficas en tiempo real y gestión de inventario.',
    src: '/project1.jpg',
    tags: ['Next.js', 'TypeScript', 'Chart.js']
  },
  {
    id: 2,
    title: 'Task Manager App',
    description: 'Aplicación de gestión de tareas con drag & drop y colaboración en equipo.',
    src: '/project2.jpg',
    tags: ['React', 'Tailwind', 'Supabase']
  },
  {
    id: 3,
    title: 'Blog Personal',
    description: 'Blog con MDX, búsqueda full-text y modo oscuro.',
    src: '/project3.jpg',
    tags: ['Next.js', 'MDX', 'Vercel']
  },
  {
    id: 4,
    title: 'API REST con Auth',
    description: 'Backend con autenticación JWT, roles de usuario y documentación Swagger.',
    src: '/project4.jpg',
    tags: ['Node.js', 'Express', 'PostgreSQL']
  }
]

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white py-24 px-6 text-center">
        <h1 className="text-5xl font-bold mb-4">Hola, soy Alex</h1>
        <p className="text-xl font-medium mb-3 text-blue-100">Desarrollador Full Stack</p>
        <p className="max-w-2xl mx-auto text-blue-50 leading-relaxed">
          Construyo aplicaciones web modernas con React, Next.js y Node.js.
          Enfocado en rendimiento, accesibilidad y código limpio.
        </p>
      </section>

      {/* Gallery */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Proyectos destacados</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              {/* Problem 1: <img> without alt attribute — accessibility issue */}
              <img src={project.src} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-1">{project.title}</h3>
                <p className="text-sm text-gray-600 mb-3">{project.description}</p>
                <div className="flex flex-wrap gap-1">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">¿Trabajamos juntos?</h2>
        <p className="text-gray-600 mb-8 max-w-xl mx-auto">
          Estoy disponible para proyectos freelance y oportunidades full-time.
          Cuéntame tu idea y lo construimos.
        </p>
        {/* Problem 2: div acting as button — not keyboard accessible, no role */}
        <div
          onClick={() => window.location.href = '/contact'}
          className="cursor-pointer bg-blue-600 text-white px-8 py-3 rounded-lg inline-block hover:bg-blue-700"
        >
          Contáctame
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 px-6 max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Envíame un mensaje</h2>
        <ContactForm />
      </section>

      <footer className="bg-gray-900 text-gray-400 text-center py-6 text-sm">
        © {new Date().getFullYear()} Alex Dev · Todos los derechos reservados
      </footer>
    </main>
  )
}
