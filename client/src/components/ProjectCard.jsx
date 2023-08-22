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
      <p className='tech'>{tech}</p>
      <p className='description'>{description}</p>
      <p className='contribution'>{contribution}</p>
      <div className='links'>
        <p>{code}</p>
        {link && <p>{link}</p>}
      </div>
    </div>
  );
};

export default ProjectCard;
