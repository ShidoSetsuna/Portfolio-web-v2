import "./home.scss";

function Home() {
  return (
    <main className="home">
      <section className="home__intro">
        <h1 className="home__header">Valdemar Andreas Larsen</h1>
        <h2 className="home__subheader">Web Developer student</h2>
        <p className="home__description">
          Hello! I'm Valdemar, a passionate web developer student. Welcome to my
          portfolio!
        </p>
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
      </section>

      <section className="home__contact">
        <h3 className="home__contact-header">Contact Me</h3>
        <p className="home__contact-description">
          Feel free to reach out if you'd like to connect!
        </p>
      </section>
    </main>
  );
}

export default Home;
