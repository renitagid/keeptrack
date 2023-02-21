import { MOCK_PROJECTS } from './MockProjects';
import { Project } from './Project';
import ProjectList from './ProjectList';

const ProjectsPage = () => {
  const saveProject = (project: Project) => {
    console.log('Saving project: ', project);
  }


  return (
    <div>
        <h1>Projects</h1>
        <ProjectList projects={MOCK_PROJECTS} onSave={saveProject} />
    </div>
  )
}

export default ProjectsPage