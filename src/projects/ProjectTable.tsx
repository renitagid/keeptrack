import { Project } from "./Project";
import ProjectForm from "./ProjectForm";
import { useState } from "react";
// ----------------------------------------------

//An interface is a way to define the shape of an object. It includes the name of the properties and their types.
interface ProjectListProps {
  projects: Project[];
}

//The ProjectList component is a functional component that takes a list of projects as a prop and renders them as JSON.
const ProjectTable = (props: ProjectListProps) => {
  const { projects } = props;
  const [form, setForm] = useState("closed");
  const [projectBeingEdited, setProjectBeingEdited] = useState<Project>(projects[0]);

  const cancelEditing = () => {
    setForm("closed");
  };

  //_______________________________________________
  const handleEditClick = (project: Project) => {
    setProjectBeingEdited(project);
    setForm("open");
  };
  //_______________________________________________

  return (
    <div style={{ height: 550 }}>
      <table style={form==="open"?{opacity:"25%", maxHeight: 550}: {maxHeight: 550 }}>
        <thead>
          <tr>
            <th style={{ maxWidth: 100 }}></th>
            <th style={{ fontFamily: "Jost, sans-serif" }}>Name</th>
            <th style={{ fontFamily: "Jost, sans-serif" }}>County</th>
            <th style={{ minWidth: 400, fontFamily: "Jost, sans-serif" }}>
              Description
            </th>
            <th>Budget</th>
            <th style={{ maxWidth: 100, fontFamily: "Jost, sans-serif" }}>
              Active
            </th>
            <th style={{ maxWidth: 100, fontFamily: "Jost, sans-serif" }}>
              Edit
            </th>
          </tr>
        </thead>
        <tbody>
          {projects?.map((project) => (
            <tr key={project.id} style={{ marginTop: 3 }}>
              <td style={{ maxWidth: 100 }}>
                <img
                  src={project.imageUrl}
                  alt="preview"
                  style={{ width: 80, height: 80, objectFit: "cover" }}
                />
              </td>
              <td style={{ fontFamily: "Jost, sans-serif" }} data-label="Name">
                {project.name}
              </td>
              <td
                style={{ fontFamily: "Jost, sans-serif" }}
                data-label="County"
              >
                {project.county}
              </td>
              <td
                data-label="Description"
                style={{
                  minWidth: 400,
                  maxHeight: 100,
                  overflow: "scroll",
                  fontFamily: "Jost, sans-serif",
                }}
              >
                {project.description}
              </td>
              <td
                style={{ fontFamily: "Jost, sans-serif" }}
                data-label="Budget"
              >
                {project.budget}
              </td>
              <td data-label="Active?" style={{ maxWidth: 100 }}>
                {project.isActive ? <p>✅</p> : <p>🔴</p>}
              </td>
              <td data-label="Edit" style={{ maxWidth: 100 }}>
                <button
                  style={{
                    fontFamily: "Jost, san-serif",
                    color: "white",
                    backgroundColor: "#b7c9e2",
                  }}
                  className=" bordered"
                  onClick={() => {
                    handleEditClick(project);
                  }}
                >
                  <span className="icon-edit inverse"></span>
                </button>
              </td>

            </tr>
          ))}
        </tbody>
      </table>
      {form === "open" ? (
                <div
                  style={{
                    position: "absolute",
                    top: "20%",
                    left: "40%",
                    zIndex: 999,
                    opacity:"100%"
                  }}
                >
                  <ProjectForm project={projectBeingEdited} onCancel={cancelEditing} formStyle="table"/>
                </div>
              ) : null}
    </div>
  );
};

export default ProjectTable;
