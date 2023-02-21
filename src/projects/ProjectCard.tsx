import { Project } from "./Project";
import React from "react";

//formatDescription is a helper function that takes a string and returns a substring of the first 60 characters followed by an ellipsis. It is used to format the project description. description is the string to be formatted.
function formatDescription(description: string): string {
  return description.substring(0, 60) + "...";
}

//ProjectCardProps is an interface that defines the shape of the props object that will be passed to the ProjectCard component. It includes the name of the properties and their types.
interface ProjectCardProps {
  project: Project;
  //onEdit is a function that takes a project as a parameter and returns void. It is used to handle the edit button click event.
  onEdit: (project: Project) => void;
}

//The ProjectCard component is a functional component that takes a project as a prop and renders it as JSON.
function ProjectCard(props: ProjectCardProps) {
  //The project prop is destructured from the props object.
  const { project, onEdit } = props;
  const handleEditClick = (projectBeingEdited: Project) => {
    onEdit(projectBeingEdited);
  };
  return (
    <div className="card">
      <img src={project.imageUrl} alt={project.name} />
      <section className="section dark">
        <h5 className="strong">
          <strong>{project.name}</strong>
        </h5>
        <p>{formatDescription(project.description)}</p>
        <p>Budget: ${project.budget.toLocaleString()}</p>
        <button
          className="bordered"
          onClick={() => {
            handleEditClick(project);
          }}
        >
          <span className="icon-edit "></span>
          Edit
        </button>
      </section>
    </div>
  );
}

export default ProjectCard;
