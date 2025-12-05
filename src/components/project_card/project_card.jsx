import "./project_card.scss";

export default function ProjectCard({
  imgSrc,
  title,
  tags,
  description,
  repoLink,
  liveLink,
}) {
  return (
    <div className="project-card">
      <div className="project-card__image-wrapper">
        <img src={imgSrc} alt={title} className="project-card__image" />
      </div>
      <div className="project-card__content">
        <h3 className="project-card__title">{title}</h3>
        <div className="project-card__tags">
          {tags.map((tag) => (
            <span key={tag} className="project-card__tag">
              {tag}
            </span>
          ))}
        </div>
        <p className="project-card__description">{description}</p>
        <div className="project-card__links">
          {repoLink && (
            <a
              href={repoLink}
              className="project-card__link"
              target="_blank"
              rel="noopener noreferrer">
              Repository
            </a>
          )}
          {liveLink && (
            <a
              href={liveLink}
              className="project-card__link project-card__link--primary"
              target="_blank"
              rel="noopener noreferrer">
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
