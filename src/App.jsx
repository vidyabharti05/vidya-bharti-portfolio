import React, { useEffect, useRef, useState } from "react";
import "./App.css";

function Reveal({ children, className = "", as: Tag = "div", ...rest }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    io.observe(el);

    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal ${inView ? "in" : ""} ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  );
}

export default function App() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <>
      <div className="vb-root">

        {/* ================= NAVBAR ================= */}

        <nav className="vbnav">
          <div className="nav-inner">

            <div className="logo">
              Vidya <span>Bharti</span>
            </div>

            <div className={`nav-links ${navOpen ? "open" : ""}`}>
              <a href="#about" onClick={() => setNavOpen(false)}>
                About
              </a>

              <a href="#skills" onClick={() => setNavOpen(false)}>
                Skills
              </a>

              <a href="#projects" onClick={() => setNavOpen(false)}>
                Projects
              </a>

              <a href="#contact" onClick={() => setNavOpen(false)}>
                Contact
              </a>
            </div>

            <a href="#contact" className="nav-cta mono">
              Hire me →
            </a>

            <button
              className="nav-toggle"
              aria-label="Menu"
              onClick={() => setNavOpen((value) => !value)}
            >
              ☰
            </button>

          </div>
        </nav>


        {/* ================= HERO ================= */}

        <header className="hero">

          <div className="wrap hero-grid">

            <div>

              <div className="eyebrow">
                Full-Stack Developer
              </div>

              <h1>
                I build modern web experiences —{" "}
                <em>from idea to working product.</em>
              </h1>

              <p className="role">
                Hi, I'm Vidya Bharti, a fresher passionate about building responsive &amp;
                and user-friendly web application using React,
                Next.js, then build the systems underneath in Java &amp;
                Spring Boot. Currently:{" "}
                <span className="role-typed">
                  open to full-stack roles.
                </span>
              </p>

              <div className="hero-actions">

                <a
                  href="#projects"
                  className="btn btn-primary"
                >
                  View projects
                </a>

                <a
                  href="/vidya-bharti-portfolio/Resume.png"
                  className="btn btn-ghost"
                  download="Vidya-Bharti-Resume.png"
                >
                  Download résumé
                </a>

              </div>

            </div>


            {/* STACK VISUAL */}

            <Reveal className="stack-visual">

              <div className="connector"></div>

              <div className="stack-layer layer-1">

                <span className="tag">
                  Layer 01 — Interface
                </span>

                <div className="name">
                  React · Next.js · TypeScript
                </div>

                <div className="items">
                  What the user touches
                </div>

              </div>


              <div className="stack-layer layer-2">

                <span className="tag">
                  Layer 02 — Logic
                </span>

                <div className="name">
                  Java · Spring Boot
                </div>

                <div className="items">
                  APIs, auth, business rules
                </div>

              </div>


              <div className="stack-layer layer-3">

                <span className="tag">
                  Layer 03 — Data
                </span>

                <div className="name">
                  MySQL · PostgreSQL
                </div>

                <div className="items">
                  Where it all persists
                </div>

              </div>

            </Reveal>

          </div>

        </header>


        {/* ================= ABOUT ================= */}

        <section id="about">

          <div className="wrap about-grid">

            <Reveal>

              <div className="eyebrow">
                About
              </div>

              <h2
                style={{
                  fontSize: "30px",
                  marginBottom: "20px",
                }}
              >
              I'm a fresher who loves building real apllications.
              </h2>

              <p>
                I'm a passionate developer focused on building modern, responsive
                and user-friendly web applications. I work with <strong> HTML, CSS, JavaScript, React, Next.js, Java and Spring Boot</strong>.
              </p>

              <p>
                I enjoy building projects that connect the
                 <strong> frontend, backend, APIs and databases </strong> together.
                Through my projects, I've been learning how real-world applications
                are designed, developed and deployed.
              </p>

              <p>
                As a fresher, I'm currently looking for an opportunity where I can 
                  <strong> apply my skills, learn from experienced developers and grow
                as a software developer</strong>.
              </p>
            </Reveal>


            <Reveal>

              <div className="stat-row">

                <div className="stat">
                  <div className="num">2</div>
                  <div className="label">
                    Sides of the stack, one developer
                  </div>
                </div>

                <div className="stat">
                  <div className="num">2+</div>
                  <div className="label">
                      Major &amp; projects built
                  </div>
                </div>

                <div className="stat">
                  <div className="num">JWT</div>
                  <div className="label">
                    Auth implemented from scratch
                  </div>
                </div>

                <div className="stat">
                  <div className="num">REST</div>
                  <div className="label">
                    APIs designed &amp; consumed
                  </div>
                </div>

              </div>

            </Reveal>

          </div>

        </section>


        {/* ================= SKILLS ================= */}

        <section id="skills">

          <div className="wrap">

            <Reveal className="section-head">

              <div className="eyebrow">
                Skills
              </div>

              <h2>
                The stack, layer by layer.
              </h2>

            </Reveal>


            <Reveal className="strata">

              {/* Layer 01 */}

              <div className="stratum">

                <div>

                  <div className="layer-label">
                    Layer 01
                  </div>

                  <div className="layer-title">
                    Interface
                  </div>

                </div>

                <div className="chip-row">

                  <span className="chip">
                    React
                  </span>

                  <span className="chip">
                    Next.js
                  </span>

                  <span className="chip">
                    TypeScript
                  </span>

                  <span className="chip">
                    JavaScript
                  </span>

                  <span className="chip">
                    HTML5
                  </span>

                  <span className="chip">
                    CSS3
                  </span>

                </div>

              </div>


              {/* Layer 02 */}

              <div className="stratum">

                <div>

                  <div className="layer-label">
                    Layer 02
                  </div>

                  <div className="layer-title">
                    Logic &amp; APIs
                  </div>

                </div>

                <div className="chip-row">

                  <span className="chip">
                    Java
                  </span>

                  <span className="chip">
                    Spring Boot
                  </span>

                  <span className="chip">
                    REST APIs
                  </span>

                  <span className="chip">
                    JWT Auth
                  </span>

                </div>

              </div>


              {/* Layer 03 */}

              <div className="stratum">

                <div>

                  <div className="layer-label">
                    Layer 03
                  </div>

                  <div className="layer-title">
                    Programming & Data &amp; Tools
                  </div>

                </div>

                <div className="chip-row">

                  <span className="chip">
                    Python
                  </span>

                  <span className="chip">
                    MySQL
                  </span>

                  <span className="chip">
                    MongoDB
                  </span>

                  <span className="chip">
                    Git &amp; GitHub
                  </span>

                 

                </div>

              </div>

            </Reveal>

          </div>

        </section>


        {/* ================= PROJECTS ================= */}

        <section id="projects">

          <div className="wrap">

            <Reveal className="section-head">

              <div className="eyebrow">
                Projects
              </div>

              <h2>
                Selected work.
              </h2>

            </Reveal>


            {/* FLAGSHIP PROJECT */}

            <Reveal className="project-flagship">

              <div className="pf-content">

                <div className="flag-tag">
                  Flagship — full-stack
                </div>

                <h3>
                   [ AI Project Manager ]
                </h3>

                <p>
                  A full-stack project management application where users can create
                  projects, manage tasks, track progress and securely authenticate
                  using JWT.
                </p>

                <div className="tech-tags">

                  <span>Next.js</span>
                  <span>TypeScript</span>
                  <span>Java</span>
                  <span>Spring Boot</span>
                  <span>PostgreSQL</span>
                  <span>JWT</span>

                </div>

                <div className="pf-links">

                  <a
                    href="YOUR_LIVE_PROJECT_LINK"
                    target="_blank"
                    rel="noreferrer"
                    className="primary"
                  >
                    Live demo ↗
                  </a>

                  <a
                  href="https://github.com/vidyabharti05/AI-Project-Manager"
                  target="_blank"
                  rel="noreferrer"
                  className="secondary"
                  >
                    GitHub ↗
                  </a>

                </div>

              </div>


              {/* PROJECT MOCKUP */}

              <div className="pf-visual">

                <div className="mock">
                 
                  <div className="dots">

                    <span></span>
                    <span></span>
                    <span></span>

                  </div>

                  <div className="bar w80"></div>

                  <div className="bar w60"></div>

                  <div className="bar w40"></div>

                </div>

              </div>

            </Reveal>


            {/* SECONDARY PROJECTS */}

            <div className="project-grid">

              <Reveal className="project-card">

                <h3>
                  [EveryTask]
                </h3>

                <p>
                  A task management application designed to help users organize,
                  manage and track their daily tasks with a simple and user-friendly interface.
                </p>

                <div className="tech-tags">

                  <span>HTML</span>
                  <span>CSS</span>
                   <span>JavaScript</span>

                </div>

                <div className="pf-links">

                  <a
                    href="https://vidyabharti05.github.io/EveryDaytask/"
                    target="_blank"
                    rel="noreferrer"
                    className="secondary"
                  >
                    Live ↗
                  </a>

                  <a
                    href="https://github.com/vidyabharti05/EveryDaytask"
                    target="_blank"
                    rel="noreferrer"
                    className="secondary"
                  >
                    GitHub ↗
                  </a>

                </div>

              </Reveal>


              <Reveal className="project-card">

                <h3>
                 [Calculator]
                </h3>

                <p>
                  A simple calculator application built to perform basic arithmetic
                  operations with an interactive user interface.
                </p>

                <div className="tech-tags">

                  <span>HTML</span>
                  <span>CSS</span>
                  <span>JavaScript</span>

                </div>

                <div className="pf-links">

                  <a
                    href="https://vidyabharti05.github.io/calculators/"
                    target="_blank"
                    rel="noreferrer"
                    className="secondary"
                  >
                    Live ↗
                  </a>

                  <a
                    href="https://github.com/vidyabharti05/calculators"
                    target="_blank"
                    rel="noreferrer"
                    className="secondary"
                  >
                    GitHub ↗
                  </a>

                </div>

              </Reveal>


              <Reveal className="add-project">

                + Swap in your next full-stack build here.
                <br />

                Drop calculator / tic-tac-toe style practice
                projects from the public view.

              </Reveal>

            </div>

          </div>

        </section>


        {/* ================= CONTACT ================= */}

        <section id="contact">

          <Reveal className="wrap contact-inner">

            <h2>
              Let's build
              <br />
              something real. →
            </h2>


            <div className="contact-links">

              <a href="mailto:you@example.com">
                Email —  vidyabharti2605@gmail.com
              </a>

              <a href="#">
                GitHub — github.com/vidyabharti05
              </a>

              <a href="#">
                LinkedIn — https://linkedin.com/in/vidya-bharti-224767376/
              </a>

            </div>

          </Reveal>

        </section>


        {/* ================= FOOTER ================= */}

        <footer className="wrap">

          <span>
            © 2026 Vidya Bharti
          </span>

          <span className="mono">
            Built with React on paper, HTML in production.
          </span>

        </footer>

      </div>
    </>
  );
}