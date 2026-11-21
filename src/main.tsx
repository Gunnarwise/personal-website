import { StrictMode, useEffect, useRef, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { contactLinks, featured, moments, otherInterests, photos, smallProjects } from './content'
import '@fontsource-variable/manrope'
import './style.css'

const navigation = [
  ['/', 'Home'], ['/about', 'About Me'], ['/projects', 'Projects'],
  ['/life', 'Life & Interests'], ['/contact', 'Contact'],
]

function externalLinkProps(href: string) {
  const url = new URL(href, window.location.href)
  const isExternal = (url.protocol === 'https:' || url.protocol === 'http:') && url.origin !== window.location.origin
  return isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {}
}

function ArrowLink({ to, children, primary = false }: { to: string; children: string; primary?: boolean }) {
  return <a className={primary ? 'button primary' : 'text-link'} href={to} {...externalLinkProps(to)}>{children}{!primary && <span aria-hidden="true">›</span>}</a>
}

function Photo({ src, label, alt = '', className = '', eager = false }: { src: string; label?: string; alt?: string; className?: string; eager?: boolean }) {
  return <figure className={`photo ${className}`}><img src={`/media/${src}.jpg`} alt={alt} loading={eager ? 'eager' : 'lazy'} />{label && <figcaption>{label}</figcaption>}</figure>
}

function Home() {
  return <>
    <section className="hero wrap">
      <div className="hero-copy">
        <p className="eyebrow">Computer science · Arizona State University</p>
        <h1>Hey, I’m<br />Gunnar<span className="accent">.</span></h1>
        <p className="intro">I’m a computer science student at Arizona State Univeristy. I like building software, working on hands-on projects, and finding new things to learn.</p>
        <p>Outside of software development, I like to spend time bouldering, traveling, and practicing the drums.</p>
        <div className="actions"><ArrowLink to="/about" primary>Get to know me</ArrowLink><ArrowLink to="/projects">See my projects</ArrowLink><a className="text-link" href="/gunnar-wise-resume.pdf" target="_blank" rel="noopener noreferrer">View my resume<span aria-hidden="true">›</span></a></div>
      </div>
      <Photo src="portrait" alt="Gunnar Wise crouching on a steel railway bridge" className="hero-photo" eager />
    </section>
    <section className="explore"><div className="wrap">
      <h2>A little more about my world</h2>
      <div className="preview">
        <Photo src="home-coding-desk" alt="Laptop displaying code on a desk lit by orange lights" className="build-photo" />
        <div><h3>Things I build</h3><p>Software projects, hands-on experiments, and what I learn along the way.</p><ArrowLink to="/projects">Explore My Projects</ArrowLink></div>
      </div>
      <div className="preview reverse">
        <Photo src="home-summit" alt="A hiker with outstretched arms on a rocky summit overlooking the city" className="summit-photo" />
        <div><h3>Things I enjoy</h3><p>Bouldering, photography, drumming, and a reason to get outside.</p><ArrowLink to="/life">Explore My Life & Interests</ArrowLink></div>
      </div>
      <section className="home-closing" aria-labelledby="home-closing-heading">
        <h3 id="home-closing-heading">There's more to the story.</h3>
        <p>This site is a little look into what I build, what I enjoy, and what I'm curious about. If you'd like to know more about my background or how I got here, I've shared more on my About page.</p>
        <div className="actions">
          <a className="button primary" href="/about">More about me <span aria-hidden="true">→</span></a>
          <a className="text-link" href="/contact">Say hello <span aria-hidden="true">→</span></a>
        </div>
      </section>
    </div></section>
  </>
}

function About() {
  return <article className="wrap inner">
    <h1>About Me<span className="accent">.</span></h1>
    <p className="intro">I’m Gunnar Wise, a computer science student at Arizona State University. I’m interested in how software connects to the things we use and build.</p>
    <div className="about-grid">
      <div>
        <section className="ruled">
          <h2>Education</h2>
          <p>I'm studying computer science at Arizona State University, where I've had the opportunity to explore a wide range of technologies. My coursework has taken me from programming microcontrollers and working directly with hardware to understanding how neural networks are designed and trained. These experiences have given me a broader perspective on software development and taught me how different challenges require different approaches to problem-solving.</p>
        </section>
        <section className="ruled">
          <h2>Experience</h2>
          <p>My experience in software development extends beyond the classroom. As a Software Development Intern at Wise Agent, I've had the opportunity to work on a real-world web application, developing and improving features using C#, ASP.NET, JavaScript, and SQL. Working alongside experienced developers has helped me better understand the development process, from troubleshooting issues and implementing solutions to collaborating on code that people use every day.</p>
          <p>Outside of work, my coursework and personal projects have allowed me to explore different areas of computer science. One of my projects involved developing an autonomous car using a Raspberry Pi Pico 2, programming it to navigate and solve a maze using ultrasonic sensors. I've also explored digital forensics, including building a blockchain-based chain-of-custody system designed to track evidence records and help verify their integrity.</p>
          <p> Working on such different projects has given me experience with everything from hardware and embedded programming to web development and data integrity. More importantly, each project has introduced me to new challenges and strengthened my interest in learning how different technologies work.</p>
        </section>
        <section className="ruled">
          <h2>Technical interests</h2>
          <p>One of the things I enjoy most about computer science is being able to take what I've learned and use it to build something real. I'm particularly interested in robotics, computer vision, and cybersecurity, but I also enjoy exploring different areas of technology rather than limiting myself to one specialty.</p>
          <p>One of my favorite examples of this is a personal project I worked on with my roommate, who's studying mechanical engineering. We designed a laser-tracking system that uses a Raspberry Pi and two cameras to detect and track objects using stereo vision, with the goal of automatically pointing a laser at them.</p>
          <p>What I enjoyed most about this project was seeing how much of what I'd learned in school could come together in one place. I was able to combine my experience with hardware, my newly learned computer vision skills, and concepts from linear algebra to work with the two cameras and understand the position of objects in three-dimensional space. It was exciting to see things I'd learned in completely different classes become useful in the same project.</p>
          <p>Experiences like this are a big part of why I enjoy computer science. I like discovering connections between different technologies, and I'm excited to keep exploring new areas and seeing what I can build with them.</p>
          <ArrowLink to="/projects">Browse my projects</ArrowLink>
        </section>
      </div>
      <Photo src="about-sunset" alt="Four people sitting together with an ocean sunset behind them" />
    </div>
    <section className="note">
      <div>
        <h2>Outside of school</h2>
        <p>Outside of school and programming, I enjoy staying active, trying new things, and finding new hobbies to get into. Whether it's bouldering, photography, drumming, or getting outdoors, I like having a variety of interests that keep life interesting. I'm always looking for something new to learn or experience.</p>
        <p>If you'd like to know a little more about what I enjoy outside of technology, check out my Life & Interests page.</p>
        <ArrowLink to="/life">Life & Interests</ArrowLink>
      </div>
      <div className="about-outdoor-photos">
        <Photo src="about-pine-forest" alt="Gunnar walking through a sunny clearing in a pine forest" />
        <Photo src="about-creek" alt="Four people sitting on a fallen log above a rocky swimming hole" />
      </div>
    </section>
  </article>
}

function Projects() {
  return <article className="wrap inner">
    <h1>Projects<span className="accent">.</span></h1>
    <p className="intro">A look at what I’ve been building and learning.</p>
    <section className="ruled">
      <h2>Featured projects</h2>
      {featured.map((project) => {
        const github = project.links?.find((link) => link.label === 'View on GitHub')
        return <div className="project-row" key={project.slug}>
          {project.photo && <Photo {...project.photo} />}
          <div>
            <p className="eyebrow">{project.medium}</p>
            <h3>{project.title}</h3>
            <p>{project.summary}</p>
            <div className="actions project-actions">
              <ArrowLink to={`/projects/${project.slug}`} primary>Project details</ArrowLink>
              {project.game && <ArrowLink to={`/projects/${project.slug}#play`}>Play on this site</ArrowLink>}
              {github && <ArrowLink to={github.href}>View on GitHub</ArrowLink>}
            </div>
          </div>
        </div>
      })}
    </section>
    <section className="ruled"><h2>Smaller projects</h2><div className="cards">{smallProjects.map((project) => <article key={project.title}><h3>{project.title}</h3><p>{project.description}</p></article>)}</div></section>
  </article>
}

function GamePlayer({ title, src, width, height }: { title: string; src: string; width: number; height: number }) {
  const [playing, setPlaying] = useState(false)
  const [scale, setScale] = useState(1)
  const [muted, setMuted] = useState(false)
  const player = useRef<HTMLIFrameElement>(null)
  const frame = useRef<HTMLDivElement>(null)
  const playSection = useRef<HTMLElement>(null)

  useEffect(() => {
    if (window.location.hash === '#play') playSection.current?.scrollIntoView()
  }, [])

  useEffect(() => {
    const container = frame.current
    if (!container) return
    const resize = new ResizeObserver(([entry]) => {
      setScale(Math.min(1, entry.contentRect.width / width))
    })
    resize.observe(container)
    return () => resize.disconnect()
  }, [width])

  function updateAudio(value: boolean) {
    player.current?.contentWindow?.postMessage({ type: 'crossy-street-mute', muted: value }, window.location.origin)
  }

  return <section className="ruled" id="play" ref={playSection}>
    <h2>Play {title}</h2>
    <p>Use WASD to move. Click inside the game to enable keyboard controls and sound.</p>
    {playing && <button type="button" className="button game-mute" onClick={() => {
      setMuted(!muted)
      updateAudio(!muted)
    }}>{muted ? 'Unmute game' : 'Mute game'}</button>}
    <div className="game-frame" ref={frame} style={{ aspectRatio: `${width} / ${height}` }}>
      {playing
        ? <iframe ref={player} onLoad={() => updateAudio(muted)} title={title} src={src} width={width} height={height} allowFullScreen style={{ transform: `scale(${scale})` }} />
        : <button className="button primary" onClick={() => setPlaying(true)}>Load game</button>}
    </div>
  </section>
}

function ProjectDetail({ project }: { project: (typeof featured)[number] }) {
  return <article className={project.game ? "wrap inner game-project" : "wrap inner reading"}>
    <a className="text-link" href="/projects"><span aria-hidden="true">←</span>Back to Projects</a>
    <p className="eyebrow case-tag">{project.medium}</p>
    <h1>{project.title}<span className="accent">.</span></h1>
    <p className="intro">{project.summary}</p>
    {project.links && <div className="actions">
      {project.links.map(({ label, href }) => (
        <ArrowLink key={href} to={href}>{label}</ArrowLink>
      ))}
    </div>}
    {project.game && <GamePlayer title={project.title} {...project.game} />}
    <section className="ruled"><h2>Background</h2><p>{project.context}</p></section>
    <section className="ruled"><h2>Approach</h2><p>{project.approach}</p></section>
    {project.status && <section className="note"><h2>Project status</h2><p>{project.status}</p></section>}
  </article>
}

const climbingMedia: { image: string; caption: string; video?: string }[] = [
  { image: '/media/bouldering-gym.jpg', caption: 'Action shot of my first pink (V6)' },
  { image: '/media/bouldering-video-preview.jpg', video: '/media/bouldering-gym.mp4', caption: 'My first pink (V6) climb with a big paddle dyno' },
  { image: '/media/bouldering-blue-holds.jpg', caption: 'Finishing one of my first blue climbs (V5)' },
  { image: '/media/bouldering-steep-overhang.jpg', caption: 'Cool bat hang finish' },
  { image: '/media/bouldering-video-2-preview.jpg', video: '/media/bouldering-gym-2.mp4', caption: 'Technical V5 with toe start hook into bat hang' },
]

function ClimbingGallery() {
  const [selected, setSelected] = useState(0)
  const touchStart = useRef<number | null>(null)
  const item = climbingMedia[selected]

  function move(offset: number) {
    setSelected((current) => (current + offset + climbingMedia.length) % climbingMedia.length)
  }

  return <div aria-label="Bouldering gallery" className="carousel">
    <div className="gallery-controls">
      <button onClick={() => move(-1)} aria-label="Previous climbing media"><span aria-hidden="true">←</span> Previous</button>
      <span aria-live="polite" aria-atomic="true">{selected + 1} of {climbingMedia.length}</span>
      <button onClick={() => move(1)} aria-label="Next climbing media">Next <span aria-hidden="true">→</span></button>
    </div>
    <figure onTouchStart={(event) => {
      touchStart.current = (event.target as HTMLElement).closest('video') ? null : event.touches[0].clientX
    }} onTouchEnd={(event) => {
      if (touchStart.current === null) return
      const distance = event.changedTouches[0].clientX - touchStart.current
      touchStart.current = null
      if (Math.abs(distance) > 48) move(distance < 0 ? 1 : -1)
    }} onTouchCancel={() => { touchStart.current = null }}>
      {item.video
        ? <video key={item.video} controls playsInline preload="metadata" poster={item.image} src={item.video} aria-label={item.caption} />
        : <img src={item.image} alt={item.caption} loading="lazy" />}
      <figcaption>{item.caption}</figcaption>
    </figure>
  </div>
}

function GalleryViewer({ viewer, label, itemName, move, caption, counter, onClose, children }: {
  viewer: React.RefObject<HTMLDialogElement | null>
  label: string
  itemName: string
  move?: (offset: number) => void
  caption?: string
  counter?: string
  onClose?: () => void
  children: React.ReactNode
}) {
  return <dialog ref={viewer} aria-label={label} onClose={onClose} onClick={(event) => {
    if (event.target !== event.currentTarget) return
    const bounds = event.currentTarget.getBoundingClientRect()
    if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) {
      event.currentTarget.close()
    }
  }} onKeyDown={(event) => {
    if (event.target instanceof HTMLVideoElement || !move) return
    if (event.key === 'ArrowLeft') move(-1)
    if (event.key === 'ArrowRight') move(1)
  }}>
    <div className="viewer-controls">
      {counter && <span className="viewer-counter" aria-live="polite">{counter}</span>}
      <button type="button" onClick={() => viewer.current?.close()} aria-label="Close slideshow" autoFocus><span aria-hidden="true">×</span></button>
    </div>
    {children}
    <div className="viewer-controls">
      {move && <button type="button" aria-label={`Previous ${itemName}`} onClick={() => move(-1)}>←</button>}
      <span aria-live="polite">{caption}</span>
      {move && <button type="button" aria-label={`Next ${itemName}`} onClick={() => move(1)}>→</button>}
    </div>
  </dialog>
}

function Photography() {
  const [selected, setSelected] = useState(0)
  const [expanded, setExpanded] = useState(false)
  const viewer = useRef<HTMLDialogElement>(null)
  const previewCount = 6
  const visiblePhotos = expanded ? photos : photos.slice(0, previewCount)
  const [columnCount, setColumnCount] = useState(() => matchMedia('(max-width: 480px)').matches ? 2 : 3)

  useEffect(() => {
    const narrow = matchMedia('(max-width: 480px)')
    function updateColumns() {
      setColumnCount(narrow.matches ? 2 : 3)
    }
    narrow.addEventListener('change', updateColumns)
    updateColumns()
    return () => narrow.removeEventListener('change', updateColumns)
  }, [])

  const columns = Array.from({ length: columnCount }, () => ({ indices: [] as number[], height: 0 }))
  photos.forEach((photo, index) => {
    const shortest = columns.reduce((first, second) => first.height <= second.height ? first : second)
    shortest.indices.push(index)
    shortest.height += photo.height / photo.width
  })

  function move(offset: number) {
    setSelected((current) => (current + offset + photos.length) % photos.length)
  }

  function renderTile(photo: (typeof photos)[number], index: number) {
    return <button key={photo.src} aria-label={`Enlarge ${photo.label.toLowerCase()}`} onClick={() => {
      setSelected(index)
      viewer.current?.showModal()
    }}><img src={photo.thumb} width={photo.width} height={photo.height} alt={photo.label} loading="lazy" decoding="async" /></button>
  }

  return <>
    <div className="photo-grid" id="photography-grid">
      {columns.map(({ indices }, column) => {
        const firstHidden = indices.find((index) => index >= previewCount)
        return <div className="photo-grid-column" key={column}>
          {indices.filter((index) => index < visiblePhotos.length).map((index) => renderTile(photos[index], index))}
          {!expanded && firstHidden !== undefined && (
            <div className="photo-grid-peek" aria-hidden="true">
              <img src={photos[firstHidden].thumb} alt="" loading="lazy" decoding="async" />
            </div>
          )}
        </div>
      })}
    </div>
    {photos.length > previewCount && (
      <button
        className="button primary photo-grid-toggle"
        aria-expanded={expanded}
        aria-controls="photography-grid"
        onClick={() => {
          if (expanded && selected >= previewCount) setSelected(0)
          setExpanded(!expanded)
        }}
      >
        {expanded ? 'Show fewer photos' : `Show more photos`}
        <span aria-hidden="true">{expanded ? '↑' : '↓'}</span>
      </button>
    )}
    <GalleryViewer viewer={viewer} label="Photography viewer" itemName="photograph" move={move} caption={photos[selected].label} counter={`${selected + 1} of ${photos.length} photos`}>
      <img src={photos[selected].src} alt={photos[selected].label} loading="lazy" />
    </GalleryViewer>
  </>
}

function MomentPlaceholder({ name, type }: { name: string; type: 'image' | 'video' }) {
  return <span className="moment-placeholder">
    <span>{type === 'image' ? 'Photo placeholder' : 'Video preview'}</span>
    <strong>{name}</strong>
  </span>
}

function OutAndAbout() {
  const previewCount = 6
  const [expanded, setExpanded] = useState(false)
  const [selected, setSelected] = useState<number | null>(null)
  const viewer = useRef<HTMLDialogElement>(null)
  const visibleMoments = expanded ? moments : moments.slice(0, previewCount)
  const active = selected === null ? undefined : visibleMoments[selected]

  function move(offset: number) {
    setSelected((current) => current === null ? null : (current + offset + visibleMoments.length) % visibleMoments.length)
  }

  return <section className="ruled life-section" id="out-and-about" aria-labelledby="out-and-about-heading">
    <h2 id="out-and-about-heading">Out & About</h2>
    <p>A collection of adventures, places I've explored, and moments I've wanted to remember. From hiking and wakeboarding to traveling somewhere new, here are a few glimpses of what I've been up to.</p>
    <div className="moments-grid" id="moments-grid">
      {visibleMoments.map((moment, index) => {
        const preview = moment.type === 'video' ? moment.poster : moment.src
        return <button
          key={`${moment.src ?? moment.alt}-${index}`}
          type="button"
          className={moment.orientation === 'portrait' ? 'moment-tile portrait-moment' : 'moment-tile'}
          aria-label={`Open ${moment.type === 'video' ? 'video' : moment.src ? 'photo' : 'photo placeholder'}: ${moment.alt}`}
          onClick={() => {
            setSelected(index)
            viewer.current?.showModal()
          }}
        >
          {preview
            ? <img src={preview} alt={moment.alt} loading="lazy" decoding="async" />
            : <MomentPlaceholder name={moment.alt} type={moment.type} />}
          {moment.type === 'video' && preview && <span className="moment-video-label" aria-hidden="true">▶ Video</span>}
        </button>
      })}
    </div>
    {moments.length > previewCount && (
      <button type="button" className="button primary photo-grid-toggle moments-toggle"
        aria-expanded={expanded} aria-controls="moments-grid" onClick={() => setExpanded(!expanded)}>
        {expanded ? 'Show Fewer Moments' : 'Show More Moments'}
        <span aria-hidden="true">{expanded ? '↑' : '↓'}</span>
      </button>
    )}
    <GalleryViewer viewer={viewer} label="Out & About viewer" itemName="moment"
      move={visibleMoments.length > 1 ? move : undefined} caption={active?.caption} onClose={() => setSelected(null)}>
      {active && <div className="moment-viewer-media" key={selected}>
        {!active.src
          ? <MomentPlaceholder name={active.alt} type={active.type} />
          : active.type === 'video'
            ? <video src={active.src} poster={active.poster} aria-label={active.alt} controls playsInline preload="metadata" />
            : <img src={active.src} alt={active.alt} />}
      </div>}
    </GalleryViewer>
  </section>
}

function Life() {
  return <article className="wrap inner">
    <h1>Life & Interests<span className="accent">.</span></h1>
    <p className="intro">A few things I enjoy away from the computer.</p>
    <section className="ruled hobby"><div><h2>Bouldering</h2><p>I got into climbing in the summer of 2023 and have been loving it ever since. I love how easy it is to see progress every session, and it's so fun always having another puzzle to solve!</p></div><ClimbingGallery /></section>
    <section className="ruled" id="photography"><h2>Photography</h2><p>I got into photography when I took a photography class in 2024. I haven't taken much time to take a lot of pictures, but here are a few of my favorites.</p><p className="photography-instruction">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
        <path d="M4 7H3a1 1 0 0 0-1 1v12a2 2 0 0 0 2 2h12a1 1 0 0 0 1-1v-1" />
        <rect x="6" y="2" width="16" height="16" rx="2" />
        <circle cx="11" cy="7" r="1" />
        <path d="m22 12-4-4-8 10" />
      </svg>
      <span>Click any photo to open the slideshow</span>
    </p><Photography /></section>
    {/* Hidden for now. Uncomment to restore the sections below Photography.
    <OutAndAbout />
    <section className="ruled life-section">
      <h2>A Few Other Interests</h2>
      <div className="other-interests">
        {otherInterests.map(({ title, description }) => (
          <article key={title}>
            <h3>{title}</h3>
            <p>{description}</p>
          </article>
        ))}
      </div>
    </section>
    */}
  </article>
}

function Contact() {
  const [email, ...otherLinks] = contactLinks

  return <article className="wrap inner contact">
    <h1>Say hello<span className="accent">.</span></h1>
    <p className="intro">Have a project in mind, want to talk about work, or just feel like saying hi? I’d love to hear from you.</p>
    <a className="contact-email" href={email.href}>{email.detail}</a>
    <ul className="contact-links" aria-label="Other ways to reach me">
      {otherLinks.map(({ label, detail, href }) => (
        <li key={href}><a href={href} {...externalLinkProps(href)}>{href.startsWith('tel:') ? detail : label}</a></li>
      ))}
    </ul>
  </article>
}

const pathname = window.location.pathname.replace(/\/+$/, '') || '/'
const sectionPath = pathname.startsWith('/projects/') ? '/projects' : pathname
const project = featured.find(({ slug }) => pathname === `/projects/${slug}`)
const pages: Record<string, { title: string; view: () => React.JSX.Element }> = {
  '/': { title: 'Home', view: Home },
  '/about': { title: 'About Me', view: About },
  '/projects': { title: 'Projects', view: Projects },
  '/life': { title: 'Life & Interests', view: Life },
  '/contact': { title: 'Contact', view: Contact },
}
const page = pages[pathname]
document.title = pathname === '/' ? 'Gunnar Wise' : `${page?.title ?? project?.title ?? 'Page not found'} | Gunnar Wise`

function SiteHeader() {
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    const threshold = 8
    let previousY = 0
    let frame: number | null = null

    function scrollPosition() {
      const max = Math.max(0, document.documentElement.scrollHeight - window.innerHeight)
      return Math.min(max, Math.max(0, window.scrollY))
    }

    function updateVisibility() {
      frame = null
      const y = scrollPosition()
      if (y <= threshold) {
        previousY = y
        setHidden(false)
      } else if (Math.abs(y - previousY) >= threshold) {
        setHidden(y > previousY)
        previousY = y
      }
    }

    function handleScroll() {
      if (frame === null) frame = window.requestAnimationFrame(updateVisibility)
    }

    function showOnPageLoad() {
      previousY = scrollPosition()
      setHidden(false)
    }

    // Let initial fragment navigation and restored scroll positions settle first.
    const initialFrame = window.requestAnimationFrame(() => {
      showOnPageLoad()
      window.addEventListener('scroll', handleScroll, { passive: true })
    })
    window.addEventListener('pageshow', showOnPageLoad)

    return () => {
      window.cancelAnimationFrame(initialFrame)
      if (frame !== null) window.cancelAnimationFrame(frame)
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('pageshow', showOnPageLoad)
    }
  }, [])

  return (
    <header className={hidden ? "site-header site-header-hidden" : "site-header"}><div className="wrap header-row">
      <a href="/" className="wordmark">Gunnar Wise<span className="accent">.</span></a>
      <nav aria-label="Main navigation">{navigation.map(([href, label]) => <a href={href} key={href} aria-current={href === sectionPath ? (href === pathname ? 'page' : 'location') : undefined}>{label}</a>)}</nav>
    </div></header>
  )
}

function App() {
  const Page = page?.view
  return <>
    <a className="skip" href="#main">Skip to content</a>
    <SiteHeader />
    <main id="main">{Page ? <Page /> : project ? <ProjectDetail project={project} /> : <div className="wrap inner"><h1>Page not found</h1><ArrowLink to="/">Back to Home</ArrowLink></div>}</main>
    <footer><div className="wrap footer-row"><a href="/" className="wordmark">Gunnar Wise<span className="accent">.</span></a><ArrowLink to="/contact">Say hello</ArrowLink></div></footer>
  </>
}

createRoot(document.getElementById('root')!).render(<StrictMode><App /></StrictMode>)
