import { useState } from 'react'
import {
  HashRouter,
  NavLink,
  Routes,
  Route,
  Link,
} from 'react-router-dom'

const projects = [
  {
    number: '01',
    category: 'ENGINEERING · APPLE',
    title: 'Building the systems behind the interface',
    description:
      'Software engineering work across tools and infrastructure. A place to explain the problem, the technical contribution, and what the experience revealed about the people using these systems.',
    tags: ['Software systems', 'Infrastructure', 'Engineering'],
    type: 'engineering',
    note: 'Replace this draft with a specific project, your role, and concrete outcomes you can publicly discuss.',
  },
  {
    number: '02',
    category: 'HCI · CARNEGIE MELLON',
    title: 'Language, learning, and adaptive agents',
    description:
      'A semester of exposure to human-computer interaction research through the Alex Project, exploring how an agent’s language can shape a child’s learning experience.',
    tags: ['HCI', 'Language', 'Learning'],
    type: 'research',
    note: 'Clarify your exact contribution, methods, and what you personally observed. Do not imply authorship or results beyond your role.',
  },
  {
    number: '03',
    category: 'INDEPENDENT · IN PROGRESS',
    title: 'Questions about agency in algorithmic environments',
    description:
      'An evolving collection of observations and small explorations about how computational systems shape attention, choice, identity, and everyday behavior.',
    tags: ['Social algorithms', 'Human agency', 'Exploration'],
    type: 'exploration',
    note: 'Add a real artifact here when you have one: an essay, prototype, interview study, visualization, or annotated reading.',
  },
]

function Header() {
  const links = [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
    { label: 'Projects', to: '/projects' },
    { label: 'CV & Contact', to: '/cv' },
  ]

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="site-header">
      <Link className="wordmark" to="/" onClick={() => setMenuOpen(false)}>
        CLAIRE CHEN
      </Link>

      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-expanded={menuOpen}
        aria-label="Toggle navigation"
      >
        {menuOpen ? 'CLOSE' : 'MENU'}
      </button>

      <nav className={menuOpen ? 'nav open' : 'nav'}>
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.to === '/'}
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
    </header>
  )
}

function PageHeading({ eyebrow, title, description }) {
  return (
    <div className="page-heading">
      <div className="eyebrow">{eyebrow}</div>
      <h1>{title}</h1>
      {description && <p>{description}</p>}
    </div>
  )
}

function Home() {
  return (
    <main className="page-container home-page">
      <div className="home-status">
        <span className="status-dot" />
        ENGINEER / INDEPENDENTLY EXPLORING HCI AND SOCIAL COMPUTING
      </div>

      <section className="home-intro">
        <h1>
          Technology shapes how we understand the world.
        </h1>

        <p className="home-description">
          I'm Claire, a software engineer interested in the relationship
          between computational systems, human behavior, and society.
          I'm particularly curious about how technology influences what
          we notice, choose, and understand.
        </p>

        <div className="home-actions">
          <Link className="primary-button" to="/about">
            More about me <span>→</span>
          </Link>
          <Link className="secondary-link" to="/projects">
            Explore my work →
          </Link>
        </div>
      </section>

      <section className="home-lower">
        <div className="home-block">
          <div className="eyebrow">BACKGROUND</div>
          <p>Computer engineering, software engineering, and an introduction to HCI research.</p>
        </div>

        <div className="home-block">
          <div className="eyebrow">CURRENT INTERESTS</div>
          <p>Social algorithms, human agency, interaction design, and technology's effects on society.</p>
        </div>

        <div className="home-block">
          <div className="eyebrow">ON THIS SITE</div>
          <p>Selected projects, research interests, working questions, and professional background.</p>
        </div>
      </section>

      <section className="home-feature">
        <div>
          <div className="eyebrow">SELECTED WORK</div>
          <h2>From engineering systems to studying their effects.</h2>
        </div>
        <Link to="/projects" className="text-link">
          View projects →
        </Link>
      </section>
    </main>
  )
}

function About() {
  return (
    <main className="page-container">
      <PageHeading
        eyebrow="01 / ABOUT"
        title="About me"
        description="My background, interests, and the questions guiding my next steps."
      />

      <div className="about-layout">
        <aside className="about-sidebar">
          <div className="profile-placeholder">
            <span>PHOTO</span>
          </div>
          <div className="sidebar-detail">
            <span className="eyebrow">BACKGROUND</span>
            <p>Computer engineering</p>
            <p>Software engineering</p>
          </div>
          <div className="sidebar-detail">
            <span className="eyebrow">INTERESTS</span>
            <p>Human-computer interaction</p>
            <p>Social computing</p>
            <p>Algorithmic systems</p>
          </div>
        </aside>

        <article className="prose">
          <h2>Engineering gave me a way to build technology. Research made me curious about what technology builds in us.</h2>

          <p>
            I studied electrical and computer engineering and went on to work
            as a software engineer. My professional experience has given me
            a technical perspective on the systems and infrastructure that
            make digital products possible.
          </p>

          <p>
            Alongside engineering, I became interested in the relationship
            between technology and human behavior. During my time at Carnegie
            Mellon, I had an introduction to human-computer interaction
            research through the Alex Project.
          </p>

          <p>
            That experience helped me think about how an interactive agent's
            language and behavior can influence a learning experience.
            It also raised broader questions for me about the assumptions
            embedded in computational systems and the people those systems
            are designed to serve.
          </p>

          <h3>What I'm interested in studying</h3>

          <p>
            I'm interested in understanding how computational systems
            participate in social life: how they influence attention,
            behavior, identity, agency, and the ways people relate to one
            another.
          </p>

          <p>
            I want to bring together technical understanding and a
            human-centered perspective to study these questions more deeply.
          </p>

          <div className="interest-list">
            <span>Social algorithms</span>
            <span>Human agency</span>
            <span>Human-computer interaction</span>
            <span>Language and learning</span>
            <span>Technology and society</span>
          </div>
        </article>
      </div>
    </main>
  )
}

function Projects() {
  const [filter, setFilter] = useState('all')

  const visibleProjects =
    filter === 'all'
      ? projects
      : projects.filter((project) => project.type === filter)

  const filters = [
    ['all', 'All'],
    ['engineering', 'Engineering'],
    ['research', 'Research'],
    ['exploration', 'Explorations'],
  ]

  return (
    <main className="page-container">
      <PageHeading
        eyebrow="02 / PROJECTS"
        title="Selected work"
        description="Experiences and explorations that inform the questions I'm asking now."
      />

      <div className="filters">
        {filters.map(([value, label]) => (
          <button
            key={value}
            className={filter === value ? 'filter active' : 'filter'}
            onClick={() => setFilter(value)}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="project-list">
        {visibleProjects.map((project) => (
          <article className="project-card" key={project.number}>
            <div className="project-topline">
              <span>PROJECT {project.number}</span>
              <span>{project.category}</span>
            </div>

            <h2>{project.title}</h2>
            <p className="project-description">{project.description}</p>

            <div className="tags">
              {project.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>

            <details className="editing-note">
              <summary>Portfolio drafting note</summary>
              <p>{project.note}</p>
            </details>
          </article>
        ))}
      </div>

      <p className="disclaimer">
        Project descriptions are starter copy. Revise them to accurately
        reflect your individual role and contributions.
      </p>
    </main>
  )
}

function CV() {
  return (
    <main className="page-container">
      <PageHeading
        eyebrow="04 / CV & CONTACT"
        title="Background and contact"
        description="Professional experience, education, and ways to get in touch."
      />

      <section className="cv-section">
        <div className="cv-section-heading">
          <h2>Curriculum vitae</h2>
          <a className="primary-button" href="/cv.pdf" target="_blank" rel="noreferrer">
            View CV <span>↗</span>
          </a>
        </div>

        <p>
          My CV includes my education, professional experience, technical
          background, and research experience.
        </p>

        <p className="cv-note">
          Add your current CV as <code>public/cv.pdf</code> in your project.
        </p>
      </section>

      <section className="cv-section">
        <h2>Elsewhere</h2>
        <div className="contact-list">
          <a href="mailto:YOUR_EMAIL@example.com">
            <span>Email</span>
            <span>YOUR_EMAIL@example.com ↗</span>
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
            <span>LinkedIn</span>
            <span>Professional profile ↗</span>
          </a>
          <a href="https://github.com/cokeity" target="_blank" rel="noreferrer">
            <span>GitHub</span>
            <span>cokeity ↗</span>
          </a>
        </div>
      </section>
    </main>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <span>© 2026 CLAIRE CHEN</span>
      <span>PERSONAL WEBSITE</span>
      <a href="#/">BACK TO HOME ↑</a>
    </footer>
  )
}

function App() {
  return (
    <HashRouter>
      <div className="app-shell">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/cv" element={<CV />} />
        </Routes>

        <Footer />
      </div>
    </HashRouter>
  )
}

export default App