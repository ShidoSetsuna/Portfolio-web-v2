import { useOutletContext } from "react-router";
import ProjectCard from "../../components/project_card/project_card.jsx";
import AnimatedBackground from "../../components/animated_background/animated_background.jsx";
import headlinerImg from "../../assets/headliner.png";
import toolboxImg from "../../assets/shidostoolbox.png";
import { IoMail } from "react-icons/io5";
import { SiRefinedgithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import "./home.scss";
import Cube from "../../components/cube/cube.jsx";

function Home() {
  const context = useOutletContext();
  const isBgEnabled = context?.isBgEnabled ?? true;

  return (
    <main className="home">
      {isBgEnabled && <AnimatedBackground />}

      <section className="home__hero">
        <div className="home__hero-content">
          <h1 className="home__header" alt="Valdemar Andreas Larsen">
            Valdemar Andreas Larsen
          </h1>
          <Cube />
          <h2 className="home__subheader">Web Developer student</h2>
          <p className="home__description">
            Hello! I'm Valdemar, a passionate web developer student. Welcome to
            my portfolio!
          </p>
        </div>
        <div className="home__hero-image">
          <img src="https://via.placeholder.com/500x500" alt="Profile" />
        </div>
      </section>

      <section className="home__about-me">
        <h2 className="home__about-me-header">About Me</h2>
        <p className="home__about-me-description">
          I'm currently studying web development at Roskilde Tekniske School in
          Denmark, as of now im still very early in my web dev journey but im
          eager to learn and grow my skills! Look below to check out some of my
          projects!
        </p>
      </section>

      <section className="home__projects">
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
        </div>
      </section>

      <section className="home__contact">
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
            href="https://www.linkedin.com/in/valdemar-andreas-larsen-7a6932386"
            target="_blank"
            rel="noopener noreferrer"
            className="home__contact-card">
            <div className="home__contact-card-icon">
              <FaLinkedin />
            </div>
            <h4 className="home__contact-card-title">LinkedIn</h4>
            <p className="home__contact-card-detail">
              linkedin.com/in/valdemar
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
    </main>
  );
}

export default Home;
