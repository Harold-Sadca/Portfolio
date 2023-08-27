import './projectCard.css';
import '../App.css';

const ProjectCard = ({
  project,
  tech,
  description,
  contribution,
  code,
  link,
}) => {
  return (
    <div className='project-card-container'>
      <h2 className='title'>{project}</h2>
      <div className='tech-container'>
        {tech.map((el, idx) => {
          return (
            <p className='tech' key={idx}>
              {el}
            </p>
          );
        })}
      </div>
      <p className='description'>{description}</p>
      <div className='contribution-container'>
        {contribution.map((el, idx) => {
          return (
            <p className='contribution' key={idx}>
              {el}
            </p>
          );
        })}
      </div>
      <div className='links'>
        {/* <a className='link' target='blank' href={code}>
          GitHub
        </a> */}
        {link && (
          <a className='link' target='blank' href={link}>
            Website
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
