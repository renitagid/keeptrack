import { Project } from "./Project";
import ProjectCard from "./ProjectCard";
import ProjectForm from "./ProjectForm";
import { useState } from "react";
// ----------------------------------------------

//An interface is a way to define the shape of an object. It includes the name of the properties and their types.
interface ProjectListProps {
  projects: Project[];
}

function formatDescription(description: string): string {
    return description.substring(0, 70) + '...';
  }

//The ProjectList component is a functional component that takes a list of projects as a prop and renders them as JSON.
const ProjectTable = ({ projects }: ProjectListProps) => {
  const [projectBeingEdited, setProjectBeingEdited] = useState({});
  const handleEdit = (project: Project) => {
    setProjectBeingEdited(project);
  };

  const cancelEditing = () => {
    setProjectBeingEdited({});
  };

  //_______________________________________________

  //_______________________________________________

  return (
    <>
      <table >
        <thead>
          <tr>
            <th style={{maxWidth:100}}></th>
            <th style={{fontFamily:"Jost, sans-serif"}}>Name</th>
            <th style={{fontFamily:"Jost, sans-serif"}}>County</th>
            <th style={{minWidth:400, fontFamily:"Jost, sans-serif"}}>Description</th>
            <th>Budget</th>
            <th style={{maxWidth:100, fontFamily:"Jost, sans-serif"}}>Active</th>
            <th style={{maxWidth:100, fontFamily:"Jost, sans-serif"}}>Edit</th>
          </tr>
        </thead>
        <tbody>
          {projects?.map((project) => (
            <tr key={project.id} style={{marginTop:3, }}>
              <td style={{maxWidth:100}}>
                <img
                  src={project.imageUrl}
                  alt="preview"
                  style={{ width: 80, height: 80, objectFit: "cover" }}
                />
              </td>
              <td style={{fontFamily:"Jost, sans-serif"}}data-label="Name">{project.name}</td>
              <td style={{fontFamily:"Jost, sans-serif"}}data-label="County">{project.county}</td>
              <td data-label="Description"style={{minWidth:400, maxHeight:100, overflow:"scroll" , fontFamily:"Jost, sans-serif"}}>{project.description}</td>
              <td style={{fontFamily:"Jost, sans-serif"}}data-label="Budget">{project.budget}</td>
              <td data-label="Active?" style={{maxWidth:100}}>
                {project.isActive ? <p>✅</p> : <p>🔴</p>}
              </td>
              <td data-label="Edit" style={{maxWidth:100}}>
                <button
                  style={{
                    fontFamily: "Jost, san-serif",
                    color: "white",
                    backgroundColor: "#b7c9e2",

                  }}
                  className=" bordered"
                  onClick={() => {
                    handleEdit(project);
                  }}
                >
                  <span className="icon-edit inverse"></span>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ProjectTable;
