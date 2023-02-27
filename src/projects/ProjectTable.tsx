import { Project } from "./Project";
import ProjectForm from "./ProjectForm";
import { useState } from "react";
import ProjectDetail from "./ProjectDetail";
import { Button } from "@mui/material";
// ----------------------------------------------

//An interface is a way to define the shape of an object. It includes the name of the properties and their types.
interface ProjectListProps {
  projects: Project[];
}

//The ProjectList component is a functional component that takes a list of projects as a prop and renders them as JSON.
const ProjectTable = (props: ProjectListProps) => {
  const { projects } = props;
  const [form, setForm] = useState("closed");
  const [projectBeingEdited, setProjectBeingEdited] = useState<Project>(
    projects[0]
  );

  const cancelEditing = () => {
    setForm("closed");
  };

  const handleEditClick = (project: Project) => {
    setProjectBeingEdited(project);
    setForm("open");
  };

  const [details, setDetails] = useState("closed");
  const [projectDetails, setProjectDetails] = useState<Project>(projects[0]);

  const cancelDetails = () => {
    setDetails("closed");
  };

  const handleDetailsClick = (project: Project) => {
    setProjectDetails(project);
    setDetails("open");
  };

  return (
    <div style={{ height: "90%" }}>
      <table
        style={
          form === "open" || details === "open"
            ? { opacity: "15%", maxHeight: 600 }
            : { maxHeight: 600 }
        }
      >
        <thead>
          <tr>
            <th style={{ maxWidth: 100 }}></th>
            <th style={{}}>Name</th>
            <th style={{}}>County</th>
            <th style={{ minWidth: 400 }}>Description</th>
            <th>Budget</th>
            <th style={{ maxWidth: 100 }}>Active</th>
            <th style={{ maxWidth: 100 }}>Edit</th>
          </tr>
        </thead>
        <tbody>
          {projects?.map((project) => (
            <tr key={project.id} style={{ marginTop: 3 }}>
              <td style={{ maxWidth: 100 }}>
                <img
                  onClick={() => handleDetailsClick(project)}
                  src={project.imageUrl}
                  alt="preview"
                  style={{ width: 80, height: 80, objectFit: "cover" }}
                />
                <label style={{ fontSize: 12 }}>View Details</label>
              </td>
              <td style={{}} data-label="Name">
                {project.name}
              </td>
              <td style={{}} data-label="County">
                {project.county}
              </td>
              <td
                data-label="Description"
                style={{
                  minWidth: 400,
                  maxHeight: 100,
                  overflow: "scroll",
                }}
              >
                {project.description}
              </td>
              <td style={{}} data-label="Budget">
                ${project.budget.toLocaleString()}
              </td>
              <td data-label="Active?" style={{ maxWidth: 100 }}>
                {project.isActive ? (
                  <p style={{ margin: 0 }}>🟢</p>
                ) : (
                  <p style={{ margin: 0 }}>🔴</p>
                )}
              </td>
              <td data-label="Edit" style={{ maxWidth: 100 }}>
                <Button
                  style={{
                    fontFamily: "Jost, san-serif",
                    color: "white",
                    backgroundColor: "#b7c9e2",
                    padding: 1,
                    margin: 0,
                  }}
                  onClick={() => {
                    handleEditClick(project);
                  }}
                ></Button>
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
            left: "30%",
            zIndex: 999,
            opacity: "100%",
          }}
        >
          <ProjectForm project={projectBeingEdited} onCancel={cancelEditing} />
        </div>
      ) : null}
      {details === "open" ? (
        <div
          style={{
            position: "absolute",
            top: "9%",
            left: "30%",
            zIndex: 999,
            opacity: "100%",
          }}
        >
          <div
            style={{
              backgroundColor: "white",
              width: "500px",
              display: "flex",
              flexDirection: "column",
              padding: 20,
              border: "solid",
              borderWidth: 2,
              borderRadius: 10,
            }}
          >
            <Button
              style={{
                width: 40,
                margin: 0,
                marginBottom: 6,
                alignSelf: "end",
              }}
              onClick={cancelDetails}
            >
              X
            </Button>
            <ProjectDetail project={projectDetails} onCancel={cancelDetails} />
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default ProjectTable;
