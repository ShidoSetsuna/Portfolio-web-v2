import { useOutletContext } from "react-router";
import ProjectCard from "../../components/project_card/project_card.jsx";
import AnimatedBackground from "../../components/animated_background/animated_background.jsx";
import headlinerImg from "../../assets/headliner.png";
import toolboxImg from "../../assets/shidostoolbox.png";
import hifiImg from "../../assets/hifi.png";
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

      <section className="home__about-me" id="about">
        <h2 className="home__about-me-header">About Me</h2>
        <p className="home__about-me-description">
          Hey there! I'm Valdemar I'm a
          25-year-old web development student at Roskilde Tekniske School in
          Denmark with a genuine passion for building apps that
          just <em>work</em>. The kind of developer who spots a tiny bug and
          won't stop trying to fix it until it's resolved, even if it takes days. It's probably a bit of
          perfectionism on my part, but I care about delivering quality work that I myself can 
          stand by and be proud of. That all said, I still have much to learn,
          and I still make a ton of mistakes, but each mistake makes me slightly better!
        </p>
        <p className="home__about-me-description">
          What really motivates me is building modular, maintainable systems.
          Hardcoded, hard-to-refactor code is something I avoid at all costs.
          I love taking
          complex problems and breaking them down into smaller, manageable
          pieces - and I thrive in teams where open communication matters more
          than rigid structure.
        </p>
        <p className="home__about-me-description">
          Right now I'm diving into TanStack and TypeScript, which is a perfect
          fit for me since TanStack is so modular and flexible. My favourite
          language is C# - a bit ironic for a web dev, I know, but I
          just find it incredibly readable.
        </p>
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
            imgSrc={headlinerImg}
            title="News website"
            tags={["React", "SCSS", "Vite", "react-router", "tanstack-query"]}
            description="A simple demo news website using New York Times API to fetch and display articles. In this project, 
            I had to work with limited API requests (5 per minute, 500 per day), so I implemented efficient data fetching and 
            caching strategies using TanStack Query to optimize performance and user experience."
            liveLink="https://headliner-rho.vercel.app/"
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
    </main>
  );
}

export default Home;
