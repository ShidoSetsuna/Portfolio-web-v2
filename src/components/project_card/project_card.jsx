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
      <img src={imgSrc} alt={title} className="project-card__image" />
      <h2 className="project-card__title">{title}</h2>
      <p className="project-card__description">{description}</p>
      <div className="project-card__tags">
        {tags.map((tag) => (
          <span key={tag} className="project-card__tag">
            {tag}
          </span>
        ))}
      </div>
      <div className="project-card__links">
        <a href={repoLink} className="project-card__link">
          View Repository
        </a>
        <a href={liveLink} className="project-card__link">
          View Live
        </a>
      </div>
    </div>
  );
}
