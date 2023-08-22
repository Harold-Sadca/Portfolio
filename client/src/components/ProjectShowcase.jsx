import Loader from 'react-loaders';
import LetterComponent from './LetterComponent';
import './projectShowcase.css';
import ProjectCard from './ProjectCard';
import { projects, InfiniteScrollLoop } from '../utils/projects';

console.log(projects);

const ProjectShowcase = () => {
  return (
    <>
      <div className='container project-showcase'>
        <div className='text-zone'>
          <h1>
            <LetterComponent
              letterClass={'text-animate'}
              strArray={['S', 'k', 'i', 'l', 'l', 's']}
              idx={15}
            />
          </h1>
          <p className='skills-container'>
            <h2 className='skills-label'>Front-End</h2>
            TypeScript, JavaScript, React, Next.js, Socket.io, Redux, Axios,
            Angular, Cloudinary, Cypress, HTML, CSS, jQuery
          </p>
          <p className='skills-container'>
            <h2 className='skills-label'>Back-End</h2>
            TypeScript, JavaScript, MongoDB, MySQL, PostgreSQL Express,
            Socket.io, Koa, Sequelize, Cloudinary, Cypress, Mongoose, GraphQL,
            Apollo, Node.js, RESTful API
          </p>
        </div>
        <div className='projects'>
          <h1 className='projects-label'>
            <LetterComponent
              letterClass={'text-animate'}
              strArray={['P', 'r', 'o', 'j', 'e', 'c', 't', 's']}
              idx={15}
            />
          </h1>
          <InfiniteScrollLoop>
            <div>
              {projects.map((project, idx) => {
                return (
                  <div key={idx} className='project'>
                    <ProjectCard
                      project={project.name}
                      tech={project.tech}
                      description={project.description}
                      contribution={project.contribution}
                      code={project.code}
                      link={project.link}
                    />
                  </div>
                );
              })}
            </div>
          </InfiniteScrollLoop>
        </div>
      </div>
      <Loader type='pacman' />
    </>
  );
};

export default ProjectShowcase;
