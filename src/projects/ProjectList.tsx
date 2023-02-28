import { Project } from "./Project";
import ProjectCard from "./ProjectCard";
import ProjectForm from "./ProjectForm";
import { useState } from "react";
import { Grid } from "@mui/material";

//An interface is a way to define the shape of an object. It includes the name of the properties and their types.
interface ProjectListProps {
  projects: Project[];
}

//The ProjectList component is a functional component that takes a list of projects as a prop and renders them as JSON.
const ProjectList = ({ projects }: ProjectListProps) => {
  const [projectBeingEdited, setProjectBeingEdited] = useState({});
  const handleEdit = (project: Project) => {
    setProjectBeingEdited(project);
  };

  const cancelEditing = () => {
    setProjectBeingEdited({});
  };

  return (
    <Grid container spacing={2} justifyContent="center">
      {/* //the type of project does not need to be defined because it is defined in the Project interface and imported from Project.tsx in the interface ProjectListProps */}

      {projects?.map((project) => (
        <Grid item key={project.id}>
          {project === projectBeingEdited ? (
            <ProjectForm project={project} onCancel={cancelEditing} />
          ) : (
            <ProjectCard project={project} onEdit={handleEdit} />
          )}
        </Grid>
      ))}
    </Grid>
  );
};

export default ProjectList;
