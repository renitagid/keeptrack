
import { Project } from "./Project";
import ProjectCard from "./ProjectCard";
import ProjectForm from "./ProjectForm";
import { useState } from 'react';

//An interface is a way to define the shape of an object. It includes the name of the properties and their types.
interface ProjectListProps {
  projects: Project[];
  onSave: (project: Project) => void;
}

//The ProjectList component is a functional component that takes a list of projects as a prop and renders them as JSON.
const ProjectList = ({ projects, onSave }: ProjectListProps) => {
  const [projectBeingEdited, setProjectBeingEdited] = useState({});
  const handleEdit = (project: Project) => {
    setProjectBeingEdited(project);
  }

  const cancelEditing = () => {
    setProjectBeingEdited({});
  };

  return (
    <ul className="row">
      {projects?.map((project) => (
        <div className="cols-sm" key={project.id}>
          {project === projectBeingEdited ? (
            <ProjectForm onCancel={cancelEditing} onSave={onSave}/>
          ) : (
            <ProjectCard project={project} onEdit={handleEdit} />
          )}
        </div>
      ))}
    </ul>
  );
};

export default ProjectList;
