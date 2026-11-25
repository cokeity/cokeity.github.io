import { useState } from 'react'

const projects = [
  {
    number: '01',
    category: 'ENGINEERING · APPLE',
    title: 'Building the systems behind the interface',
    description: 'Software engineering work across tools and infrastructure. A place to explain the problem, the technical contribution, and what the experience revealed about the people using these systems.',
    tags: ['Software systems', 'Infrastructure', 'Engineering'],
    type: 'engineering',
    note: 'Replace this draft with a specific project, your role, and concrete outcomes you can publicly discuss.'
  },
  {
    number: '02',
    category: 'HCI · CARNEGIE MELLON',
    title: 'Language, learning, and adaptive agents',
    description: 'A semester of exposure to human-computer interaction research through the Alex Project, exploring how an agent’s language can shape a child’s learning experience.',
    tags: ['HCI', 'Language', 'Learning'],
    type: 'research',
    note: 'Clarify your exact contribution, methods, and what you personally observed. Do not imply authorship or results beyond your role.'
  },
  {
    number: '03',
    category: 'INDEPENDENT · IN PROGRESS',
    title: 'Questions about agency in algorithmic environments',
    description: 'An evolving collection of observations and small explorations about how computational systems shape attention, choice, identity, and everyday behavior.',
    tags: ['Social algorithms', 'Human agency', 'Exploration'],
    type: 'exploration',
    note: 'Add a real artifact here when you have one: an essay, prototype, interview study, visualization, or annotated reading.'
  },
]

const notes = [
  { date: 'QUESTION 01', title: 'When does assistance become substitution?', text: 'Where is the line between a tool that extends our thinking and one that quietly replaces it?' },
  { date: 'QUESTION 02', title: 'Who gets to shape an algorithmic environment?', text: 'What would meaningful participation look like for the people most affected by automated systems?' },
  { date: 'QUESTION 03', title: 'How do interfaces teach us to behave?', text: 'The design of a system can make some actions feel natural, difficult, visible, or impossible.' },
]

function Arrow() {
  return <span aria-hidden="true" className="arrow">↗</span>
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const links = [['About', '#about'], ['Work', '#work'], ['Notes', '#notes'], ['CV', '#contact']]
  return (
    <header className="site-header">
      <a className="wordmark" href="#top" aria-label="Back to top">YOUR NAME<span>®</span></a>
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen}>
        {menuOpen ? 'CLOSE −' : 'MENU +'}
      </button>
      <nav className={menuOpen ? 'nav open' : 'nav'}>
        {links.map(([label, href]) => <a key={label} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}
      </nav>
    </header>
  )
}

function SectionLabel({ number, children }) {
  return <div className="section-label"><span>{number}</span><span>{children}</span></div>
}

function App() {
  const [filter, setFilter] = useState('all')
  const visibleProjects = filter === 'all' ? projects : projects.filter(p => p.type === filter)

  return (
    <>
      <Header />
      <main id="top">
        <section className="hero page-wrap">
          <div className="hero-kicker"><span className="dot" /> ENGINEER · CURIOUS OBSERVER · ASPIRING RESEARCHER</div>
          <h1>Understanding the systems that shape <em>how we live.</em></h1>
          <div className="hero-bottom">
            <p className="hero-intro">I’m interested in the relationship between technology, human behavior, and society — especially the ways computational systems influence what we notice, choose, and understand.</p>
            <a className="text-link" href="#about">A LITTLE ABOUT ME <Arrow /></a>
          </div>
          <div className="hero-index"><span>PORTFOLIO / 2026</span><span>BASED IN THE UNITED STATES</span></div>
        </section>

        <section id="about" className="about-section page-wrap section-pad">
          <SectionLabel number="01">ABOUT</SectionLabel>
          <div className="about-grid">
            <div className="portrait-placeholder">
              <div className="portrait-mark">A<br/>PORTRAIT<br/>GOES HERE</div>
              <span className="image-caption">IMAGE / OPTIONAL</span>
            </div>
            <div className="about-copy">
              <p className="lede">I came to software through computer engineering. Over time, I became just as interested in the questions around the technology as in the technology itself.</p>
              <p>My experience spans software engineering and an introduction to human-computer interaction research. I’m now interested in studying how algorithmic systems participate in social life — and how we might design, understand, and govern them more thoughtfully.</p>
              <p>This site is a working collection of projects, questions, and ideas. It will evolve as my interests do.</p>
              <div className="about-meta">
                <div><span className="meta-label">BACKGROUND</span><strong>Computer engineering · Software</strong></div>
                <div><span className="meta-label">CURRENT CURIOSITIES</span><strong>Human agency · Social algorithms · HCI</strong></div>
              </div>
            </div>
          </div>
        </section>

        <section id="work" className="work-section section-pad">
          <div className="page-wrap">
            <SectionLabel number="02">SELECTED WORK</SectionLabel>
            <div className="section-heading-row">
              <h2>Things I’ve worked on<span className="asterisk">*</span></h2>
              <p>A few experiences that inform the questions I’m asking now.</p>
            </div>
            <div className="filters" aria-label="Filter projects">
              {[['all','ALL'], ['engineering','ENGINEERING'], ['research','RESEARCH'], ['exploration','EXPLORATIONS']].map(([value,label]) =>
                <button key={value} className={filter === value ? 'filter active' : 'filter'} onClick={() => setFilter(value)}>{label}</button>
              )}
            </div>
            <div className="project-list">
              {visibleProjects.map(project => (
                <article className="project" key={project.number}>
                  <div className="project-number">{project.number}</div>
                  <div className="project-main">
                    <div className="project-category">{project.category}</div>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
                    <details className="editing-note"><summary>Portfolio drafting note</summary><p>{project.note}</p></details>
                  </div>
                  <div className="project-symbol" aria-hidden="true">{project.number === '01' ? '↗' : project.number === '02' ? '◌' : '✳'}</div>
                </article>
              ))}
            </div>
            <p className="footnote">* Project descriptions are starter copy. Edit them to accurately reflect your role and work.</p>
          </div>
        </section>

        <section id="notes" className="notes-section page-wrap section-pad">
          <SectionLabel number="03">NOTES & QUESTIONS</SectionLabel>
          <div className="section-heading-row">
            <h2>Ideas I keep<br/><em>coming back to.</em></h2>
            <p>Not conclusions — starting points for inquiry.</p>
          </div>
          <div className="notes-grid">
            {notes.map((note, i) => (
              <article className="note-card" key={note.date}>
                <span>{note.date}</span>
                <div className="note-index">0{i + 1}</div>
                <h3>{note.title}</h3>
                <p>{note.text}</p>
              </article>
            ))}
          </div>
          <p className="notes-instruction">Replace these prompts with short essays, reading notes, experiments, or observations as you develop them.</p>
        </section>

        <section id="contact" className="contact-section">
          <div className="page-wrap contact-inner">
            <SectionLabel number="04">ELSEWHERE</SectionLabel>
            <h2>Let’s keep<br/><em>the conversation going.</em></h2>
            <p>For research, collaboration, or just a good question.</p>
            <div className="contact-links">
              <a href="mailto:YOUR_EMAIL@example.com">EMAIL <Arrow /></a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LINKEDIN <Arrow /></a>
              <a href="/cv.pdf">CV <Arrow /></a>
            </div>
            <footer><span>© 2026 YOUR NAME</span><a href="#top">BACK TO TOP ↑</a><span>BUILT WITH CURIOSITY</span></footer>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
