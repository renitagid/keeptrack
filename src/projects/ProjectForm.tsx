import React, { SyntheticEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { Project } from "./Project";
import { saveProject } from "./state/projectActions";
import { ThunkDispatch } from "redux-thunk";
import { ProjectState } from "./state/projectTypes";
import { AnyAction } from "redux";

interface ProjectFormProps {
  project: Project;
  onCancel: () => void;
}

function ProjectForm({
  project: initialProject,
  onCancel,
}: ProjectFormProps) {
  const [project, setProject] = useState(initialProject);
  const [errors, setErrors] = useState({
    name: "",
    description: "",
    budget: "",
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
    let errors: any = { name: "", description: "", budget: "" };
    if (project.name.length === 0) {
      errors.name = "Name is required";
    }
    if (project.name.length > 0 && project.name.length < 3) {
      errors.name = "Name needs to be at least 3 characters.";
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
      errors.description.length === 0 &&
      errors.budget.length === 0
    );
  }

  return (
    <div style={{width:"500px", border:"solid", borderColor:"lightgray", backgroundColor:"white", borderRadius:10}}>
      <form
        className="input-group vertical"
        onSubmit={handleSubmit}
        style={{fontFamily: "Jost, sans-serif", height:"378px", borderRadius:10}}
      >
        <label
          htmlFor="name"
          style={{  fontFamily: "Jost, sans-serif" }}
        >
          Project Name
        </label>
        <input
          type="text"
          name="name"
          placeholder="enter name"
          value={project.name}
          onChange={handleChange}
          style={{fontFamily: "Jost, sans-serif" }}
        />
        {errors.name.length > 0 && (
          <div
            className="card error"
            style={{  fontFamily: "Jost, sans-serif" }}
          >
            <p>{errors.name}</p>
          </div>
        )}

        <label
          htmlFor="description"
          style={{  fontFamily: "Jost, sans-serif" }}
        >
          Project Description
        </label>
        <textarea
          name="description"
          placeholder="enter description"
          value={project.description}
          onChange={handleChange}
          style={{  fontFamily: "Jost, sans-serif" }}
        />
        {errors.description.length > 0 && (
          <div
            className="card error"
            style={{  fontFamily: "Jost, sans-serif" }}
          >
            <p>{errors.description}</p>
          </div>
        )}

        <label
          htmlFor="budget"
          style={{  fontFamily: "Jost, sans-serif" }}
        >
          Project Budget
        </label>
        <input
          type="number"
          name="budget"
          placeholder="enter budget"
          value={project.budget}
          onChange={handleChange}
          style={{  fontFamily: "Jost, sans-serif" }}
        />
        {errors.budget.length > 0 && (
          <div
            className="card error"
            style={{  fontFamily: "Jost, sans-serif" }}
          >
            <p>{errors.budget}</p>
          </div>
        )}

        <label
          htmlFor="isActive"
          style={{  fontFamily: "Jost, sans-serif" }}
        >
          Active?
        </label>
        <input
          type="checkbox"
          name="isActive"
          checked={project.isActive}
          onChange={handleChange}
          style={{  fontFamily: "Jost, sans-serif" }}
        />
        <div className="input-group">
          <button
            className="primary bordered medium"
            style={{  fontFamily: "Jost, sans-serif" }}
          >
            Save
          </button>
          <span />
          <button
            type="button"
            className="bordered medium"
            onClick={onCancel}
            style={{  fontFamily: "Jost, sans-serif" }}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default ProjectForm;
