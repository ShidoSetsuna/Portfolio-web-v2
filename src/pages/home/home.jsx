import { useState, useCallback, useRef } from "react";
import { useOutletContext } from "react-router";
import { useLanguage } from "../../store/languageStore.jsx";
import ProjectCard from "../../components/project_card/project_card.jsx";
import AnimatedBackground from "../../components/animated_background/animated_background.jsx";
import headlinerImg from "../../assets/headliner.png";
import toolboxImg from "../../assets/shidostoolbox.png";
import hifiImg from "../../assets/hifi.png";
import portfolioImg from "../../assets/portfolio.png";
import cinemaImg from "../../assets/cinema.png";
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
  const { t } = useLanguage();
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
          <h1 className="home__header">
            Valdemar{" "}
            <img
              src={me}
              alt=""
              aria-hidden="true"
              className="home__header-inline-img"
            />{" "}
            Andreas Larsen
          </h1>
          <h2 className="home__subheader">{t.home.subheader}</h2>
          <p className="home__description">
            {t.home.descriptionBefore}{" "}
            <img src={dk} className="home__description-flag" alt="Denmark" />{" "}
            {t.home.descriptionAfter}
          </p>
        </div>
        <div className="home__hero-image">
          <img src={me} alt="Valdemar Andreas Larsen" />
        </div>
      </section>

      <section className="home__featured" id="featured">
        <span className="home__featured-eyebrow">{t.home.featured.eyebrow}</span>
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
            <h3 className="home__featured-title">{t.home.featured.title}</h3>
            <div className="home__featured-tags">
              {["React", "SCSS", "Vite", "react-router", "tanstack-query"].map((tag) => (
                <span key={tag} className="home__featured-tag">{tag}</span>
              ))}
            </div>
            <p className="home__featured-description">{t.home.featured.description}</p>
            <div className="home__featured-actions">
              <a
                href="https://headliner-rho.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="project-card__link project-card__link--primary">
                {t.home.featured.liveDemo}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="home__about-me" id="about">
        <h2 className="home__about-me-header">{t.home.about.header}</h2>

        <h3 className="home__about-me-subheader">{t.home.about.whoIAm.title}</h3>
        <p className="home__about-me-description">{t.home.about.whoIAm.text}</p>

        <h3 className="home__about-me-subheader">{t.home.about.howIWork.title}</h3>
        <p className="home__about-me-description">{t.home.about.howIWork.text}</p>

        <h3 className="home__about-me-subheader">{t.home.about.whatImLearning.title}</h3>
        <p className="home__about-me-description">{t.home.about.whatImLearning.text}</p>

        <h3 className="home__about-me-subheader">{t.home.about.outsideOfCode.title}</h3>
        <p className="home__about-me-description">{t.home.about.outsideOfCode.text}</p>
      </section>

      <Skills />

      <section className="home__projects" id="projects">
        <h2 className="home__projects-header">{t.home.projects.header}</h2>
        <p className="home__projects-description">{t.home.projects.description}</p>
        <div className="home__projects-grid">
          <ProjectCard
            imgSrc={portfolioImg}
            title={t.home.projects.portfolio.title}
            tags={["React", "SCSS", "Vite", "GSAP", "Vercel", "Upstash Redis"]}
            description={t.home.projects.portfolio.description}
            onLiveClick={handlePortfolioLive}
            repoLink="https://github.com/ShidoSetsuna/Portfolio-web-v2"
          />
          <ProjectCard
            imgSrc={toolboxImg}
            title={t.home.projects.toolbox.title}
            tags={["React", "CSS", "pnpm", "cheerio", "nodemailer"]}
            description={t.home.projects.toolbox.description}
            liveLink="https://www.shidostoolbox.com/"
          />
          <ProjectCard
            imgSrc={hifiImg}
            title={t.home.projects.hifi.title}
            tags={["React", "SCSS", "vite", "render", "swiper", "zustand"]}
            description={t.home.projects.hifi.description}
            liveLink="https://hi-fi-project.vercel.app"
            repoLink="https://github.com/ShidoSetsuna/Hi-FI_Horizon_project"
          />
          <ProjectCard
            imgSrc={headlinerImg}
            title={t.home.projects.news.title}
            tags={["React", "SCSS", "Vite", "react-router", "tanstack-query"]}
            description={t.home.projects.news.description}
            liveLink="https://headliner-rho.vercel.app/"
          />
          <ProjectCard
            imgSrc={cinemaImg}
            title={t.home.projects.cinema.title}
            tags={["React TSX", "Tailwind v4", "Vite", "TanStack Router"]}
            description={t.home.projects.cinema.description}
            liveLink="cinema-demo-pied.vercel.app"
            repoLink="https://github.com/ShidoSetsuna/cinema_demo"
          />
        </div>
      </section>

      <section className="home__contact" id="contact">
        <h3 className="home__contact-header">{t.home.contact.header}</h3>
        <p className="home__contact-description">{t.home.contact.description}</p>
        <div className="home__contact-grid">
          <a
            href="mailto:andreas.devmail@gmail.com"
            className="home__contact-card">
            <div className="home__contact-card-icon">
              <IoMail />
            </div>
            <h4 className="home__contact-card-title">{t.home.contact.email}</h4>
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
            <h4 className="home__contact-card-title">{t.home.contact.linkedin}</h4>
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
            <h4 className="home__contact-card-title">{t.home.contact.github}</h4>
            <p className="home__contact-card-detail">github.com/shidosetsuna</p>
          </a>
        </div>
      </section>
      <section className="home__the-cube">
         <Cube /> 
      </section>

      <div className={`home__toast${toast ? " home__toast--visible" : ""}`} aria-live="polite">
        {t.home.toast}
      </div>
    </main>
  );
}

export default Home;
