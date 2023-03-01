import React, { SyntheticEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { Project } from "./Project";
import { saveProject } from "./state/projectActions";
import { ThunkDispatch } from "redux-thunk";
import { ProjectState } from "./state/projectTypes";
import { AnyAction } from "redux";
import { Button, Card, CardContent } from "@mui/material";

interface ProjectFormProps {
  project: Project;
  onCancel: () => void;
}

function ProjectForm({ project: initialProject, onCancel }: ProjectFormProps) {
  const [project, setProject] = useState(initialProject);
  const [errors, setErrors] = useState({
    name: "",
    description: "",
    budget: "",
    county:""
  });
  const dispatch = useDispatch<ThunkDispatch<ProjectState, any, AnyAction>>();

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    if (!isValid()) return;
    dispatch(saveProject(project));
    onCancel();
  };

  const handleChange = (event: any) => {
    const { type, name, value, checked } = event.target;
    // if input type is checkbox use checked
    // otherwise it's type is text, number etc. so use value
    let updatedValue = type === "checkbox" ? checked : value;

    //if input type is number convert the updatedValue string to a number
    if (type === "number") {
      updatedValue = Number(updatedValue);
    }
    const change = {
      [name]: updatedValue,
    };

    let updatedProject: Project;
    // need to do functional update b/c
    // the new project state is based on the previous project state
    // so we can keep the project properties that aren't being edited like project.id
    // the spread operator (...) is used to
    // spread the previous project properties and the new change
    setProject((p) => {
      updatedProject = new Project({ ...p, ...change });
      return updatedProject;
    });
    setErrors(() => validate(updatedProject));
  };

  function validate(project: Project) {
    let errors: any = { name: "", county:"", description: "", budget: "" };
    if (project.name.length === 0) {
      errors.name = "Name is required";
    }
    if (project.name.length > 0 && project.name.length < 3) {
      errors.name = "Name needs to be at least 3 characters.";
    }
    if (project.county.length === 0) {
      errors.county = "County is required";
    }
    if (project.county.length > 0 && project.county.length < 3) {
      errors.county = "County needs to be at least 3 characters.";
    }
    if (project.description.length === 0) {
      errors.description = "Description is required.";
    }
    if (project.budget === 0) {
      errors.budget = "Budget must be more than $0.";
    }
    return errors;
  }

  function isValid() {
    return (
      errors.name.length === 0 &&
      errors.county.length === 0 && 
      errors.description.length === 0 &&
      errors.budget.length === 0
    );
  }

  return (
    <Card
    elevation={5}
    sx={{ width: 250, borderRadius: 2, height: 420, position: "relative" }}
    >
      <CardContent>
        <form
          onSubmit={handleSubmit}
          style={{
            height: "378px",
            borderRadius: 10,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            color: "black",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <label htmlFor="name" style={{}}>
              Project Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter name"
              value={project.name}
              onChange={handleChange}
              style={{ fontFamily: "Jost, san-serif" }}
            />
            {errors.name.length > 0 && (
              <div style={{color:"red", fontSize:12, lineHeight:0}}>
                <p>{errors.name}</p>
              </div>
            )}
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <label htmlFor="county" style={{}}>
              County
            </label>
            <input
              type="text"
              name="county"
              placeholder="Enter county"
              value={project.county}
              onChange={handleChange}
              style={{ fontFamily: "Jost, san-serif" }}
            />
            {errors.county.length > 0 && (
              <div style={{color:"red", fontSize:12, lineHeight:0}}>
                <p>{errors.county}</p>
              </div>
            )}
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <label htmlFor="description">Project Description</label>
            <textarea
              name="description"
              placeholder="Enter description"
              value={project.description}
              onChange={handleChange}
              style={{ fontFamily: "Jost, san-serif" }}
            />
            {errors.description.length > 0 && (
              <div style={{color:"red", fontSize:12, lineHeight:0}}>
                <p>{errors.description}</p>
              </div>
            )}
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <label htmlFor="budget" style={{}}>
              Project Budget
            </label>
            <input
              type="number"
              name="budget"
              placeholder="enter budget"
              value={project.budget}
              onChange={handleChange}
              style={{ fontFamily: "Jost, san-serif" }}
            />
            {errors.budget.length > 0 && (
              <div style={{color:"red", fontSize:12, lineHeight:0}}>
                <p>{errors.budget}</p>
              </div>
            )}
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
            }}
          >
            <label htmlFor="isActive" style={{}}>
              Active?
            </label>
            <input
              type="checkbox"
              name="isActive"
              checked={project.isActive}
              onChange={handleChange}
              style={{}}
            />
          </div>
          <div style={{display:"flex", justifyContent:"space-evenly"}}>
            <Button type="submit" variant="outlined">Save</Button>
            <span />
            <Button variant="outlined" onClick={onCancel}>
              Cancel
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}

export default ProjectForm;
