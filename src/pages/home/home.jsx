import { useState, useCallback, useRef } from "react";
import { useOutletContext } from "react-router";
import ProjectCard from "../../components/project_card/project_card.jsx";
import AnimatedBackground from "../../components/animated_background/animated_background.jsx";
import headlinerImg from "../../assets/headliner.png";
import toolboxImg from "../../assets/shidostoolbox.png";
import hifiImg from "../../assets/hifi.png";
import portfolioImg from "../../assets/portfolio.png";
import me from "../../assets/me.jpg";
import { IoMail } from "react-icons/io5";
import { SiRefinedgithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import dk from "../../assets/dk.svg";
import Skills from "../../components/skills/skills.jsx";
import "./home.scss";
import Cube from "../../components/cube/cube.jsx";

function Home() {
  const context = useOutletContext();
  const isBgEnabled = context?.isBgEnabled ?? true;
  const [toast, setToast] = useState(false);
  const toastTimer = useRef(null);

  const handlePortfolioLive = useCallback(() => {
    setToast(true);
    clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(false), 2200);
  }, []);

  return (
    <main className="home">
      {isBgEnabled && <AnimatedBackground />}

      <section className="home__hero" id="home">
        <div className="home__hero-content">
          <h1 className="home__header" alt="Valdemar Andreas Larsen">
            Valdemar{" "}
            <img
              src={me}
              alt="Valdemar Andreas Larsen"
              className="home__header-inline-img"
            />{" "}
            Andreas Larsen
          </h1>
          <h2 className="home__subheader">Web Developer student</h2>
          <p className="home__description">
            Hello! I'm Valdemar, a passionate web developer student. From and located in Denmark! {<img src={dk} className="home__description-flag" alt="Denmark" />} Welcome to
            my portfolio!
          </p>
        </div>
        <div className="home__hero-image">
          <img src={me} alt="Valdemar Andreas Larsen" />
        </div>
      </section>

      <section className="home__featured" id="featured">
        <span className="home__featured-eyebrow">Featured Project</span>
        <div className="home__featured-card">
          <a
            href="https://headliner-rho.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="home__featured-image-link">
            <img
              src={headlinerImg}
              alt="Headliner news website"
              className="home__featured-image"
            />
          </a>
          <div className="home__featured-content">
            <h3 className="home__featured-title">Headliner — News Website</h3>
            <div className="home__featured-tags">
              {["React", "SCSS", "Vite", "react-router", "tanstack-query"].map((tag) => (
                <span key={tag} className="home__featured-tag">{tag}</span>
              ))}
            </div>
            <p className="home__featured-description">
              A news aggregator powered by the New York Times API. The main
              challenge was working within tight API rate limits (5 req/min,
              500 req/day), so I implemented smart caching and deduplication
              strategies with TanStack Query to keep the UI snappy without
              burning through the quota.
            </p>
            <div className="home__featured-actions">
              <a
                href="https://headliner-rho.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="project-card__link project-card__link--primary">
                Live Demo
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="home__about-me" id="about">
        <h2 className="home__about-me-header">About Me</h2>

        <h3 className="home__about-me-subheader">Who I Am</h3>
        <p className="home__about-me-description">
          Hey there! I'm Valdemar, a
          25-year-old web development student at Roskilde Tekniske School in
          Denmark with a genuine passion for building apps that
          just <em>work</em>. The kind of developer who spots a tiny bug and
          won't stop trying to fix it until it's resolved, even if it takes days. It's probably a bit of
          perfectionism on my part, but I care about delivering quality work that I myself can 
          stand by and be proud of. That all said, I still have much to learn,
          and I still make a ton of mistakes, but each mistake makes me slightly better!
        </p>

        <h3 className="home__about-me-subheader">How I Work</h3>
        <p className="home__about-me-description">
          What really motivates me is building modular, maintainable systems.
          Hardcoded, hard-to-refactor code is something I avoid at all costs.
          I love taking
          complex problems and breaking them down into smaller, manageable
          pieces - and I thrive in teams where open communication matters more
          than rigid structure.
        </p>

        <h3 className="home__about-me-subheader">What I'm Learning</h3>
        <p className="home__about-me-description">
          Right now I'm diving into TanStack and TypeScript, which is a perfect
          fit for me since TanStack is so modular and flexible. My favourite
          language is C# - a bit ironic for a web dev, I know, but I
          just find it incredibly readable.
        </p>

        <h3 className="home__about-me-subheader">Outside of Code</h3>
        <p className="home__about-me-description">
          I'm still early in my web dev journey, but I'm hungry to learn and
          excited about what's ahead. In my free time, I do still code a lot,
          but I'm also a big football fan. Currently hoping to see Wrexham make it to the
          Premier League! Thanks for reading! Take a look at some
          of my projects below!
        </p>
      </section>

      <Skills />

      <section className="home__projects" id="projects">
        <h2 className="home__projects-header">My Projects</h2>
        <p className="home__projects-description">
          Here are some of the projects I've worked on during my studies:
        </p>
        <div className="home__projects-grid">
          <ProjectCard
            imgSrc={portfolioImg}
            title="Portfolio website"
            tags={["React", "SCSS", "Vite", "GSAP", "Vercel", "Upstash Redis"]}
            description="The site you're looking at right now! Built from scratch as a way to showcase my work and experiment with things I find interesting.
            Features a physics-based interactive 3D cube, a global click counter backed by a serverless API, dark/light theming, and fully responsive layout."
            onLiveClick={handlePortfolioLive}
            repoLink="https://github.com/ShidoSetsuna/Portfolio-web-v2"
          />
          <ProjectCard
            imgSrc={toolboxImg}
            title="Useful tools website"
            tags={["React", "CSS", "pnpm", "cheerio", "nodemailer"]}
            description="A collection of useful tools and resources for web developers. That I made awhile ago, this was
            more a personal little project of mine that I made because I thought it would be nice to have 1 website for all
            these small tools that you usually need to find on many different websites.
            The name of the website comes from my online nickname 'Shido Setsuna', hence the name 'Shido's Toolbox'."
            liveLink="https://www.shidostoolbox.com/"
          />
          <ProjectCard
            imgSrc={hifiImg}
            title="Hi-Fi tech store website"
            tags={["React", "SCSS", "vite", "render", "swiper", "zustand"]}
            description="A demo e-commerce website for Hi-Fi audio equipment. This project was created as part of my web development studies.
            This was a group project where I worked together with 1 other classmate to create a fully functional online store.
            I mainly worked on setting up the render API for loading products and the shop page, as well as the chat bot on the product page.
            I also worked on the contact, about us and user profile pages."
            liveLink="https://hi-fi-project.vercel.app"
            repoLink="https://github.com/ShidoSetsuna/Hi-FI_Horizon_project"
          />
          <ProjectCard
            imgSrc={headlinerImg}
            title="News website"
            tags={["React", "SCSS", "Vite", "react-router", "tanstack-query"]}
            description="A simple demo news website using New York Times API to fetch and display articles. In this project, 
            I had to work with limited API requests (5 per minute, 500 per day), so I implemented efficient data fetching and 
            caching strategies using TanStack Query to optimize performance and user experience."
            liveLink="https://headliner-rho.vercel.app/"
          />
        </div>
      </section>

      <section className="home__contact" id="contact">
        <h3 className="home__contact-header">Contact Me</h3>
        <p className="home__contact-description">
          Feel free to reach out if you'd like to connect!
        </p>
        <div className="home__contact-grid">
          <a
            href="mailto:andreas.devmail@gmail.com"
            className="home__contact-card">
            <div className="home__contact-card-icon">
              <IoMail />
            </div>
            <h4 className="home__contact-card-title">Email</h4>
            <p className="home__contact-card-detail">
              andreas.devmail@gmail.com
            </p>
          </a>
          <a
            href="https://www.linkedin.com/in/valdemar-andreas-larsen"
            target="_blank"
            rel="noopener noreferrer"
            className="home__contact-card">
            <div className="home__contact-card-icon">
              <FaLinkedin />
            </div>
            <h4 className="home__contact-card-title">LinkedIn</h4>
            <p className="home__contact-card-detail">
              linkedin.com/in/valdemar-andreas-larsen
            </p>
          </a>
          <a
            href="https://github.com/shidosetsuna"
            target="_blank"
            rel="noopener noreferrer"
            className="home__contact-card">
            <div className="home__contact-card-icon">
              <SiRefinedgithub />
            </div>
            <h4 className="home__contact-card-title">GitHub</h4>
            <p className="home__contact-card-detail">github.com/shidosetsuna</p>
          </a>
        </div>
      </section>
      <section className="home__the-cube">
        <Cube />
      </section>

      <div className={`home__toast${toast ? " home__toast--visible" : ""}`} aria-live="polite">
        You&apos;re already here! 👋
      </div>
    </main>
  );
}

export default Home;
