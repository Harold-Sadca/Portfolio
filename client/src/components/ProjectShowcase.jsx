import Loader from 'react-loaders';
import LetterComponent from './LetterComponent';
import './projectShowcase.css';
import ProjectCard from './ProjectCard';
import { projects, InfiniteScrollLoop } from '../utils/projects';

console.log(projects);

const ProjectShowcase = () => {
  return (
    <>
      <div className='container'>
        <div className='text-zone'>
          <h1>
            <LetterComponent
              letterClass={'text-animate'}
              strArray={['P', 'r', 'o', 'j', 'e', 'c', 't', 's']}
              idx={15}
            />
          </h1>
        </div>
        <div className='projects'>
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
