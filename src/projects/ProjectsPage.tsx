import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../state";
import ProjectList from "./ProjectList";
import { loadProjects } from "./state/projectActions";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { ProjectState } from "./state/projectTypes";
import ProjectTable from "./ProjectTable";

function ProjectsPage() {
  const loading = useSelector(
    (appState: AppState) => appState.projectState.loading
  );
  const projects = useSelector(
    (appState: AppState) => appState.projectState.projects
  );
  const error = useSelector(
    (appState: AppState) => appState.projectState.error
  );
  const currentPage = useSelector(
    (appState: AppState) => appState.projectState.page
  );
  const dispatch = useDispatch<ThunkDispatch<ProjectState, any, AnyAction>>();

  useEffect(() => {
    dispatch<any>(loadProjects(1));
  }, [dispatch]);

  const handleMoreClick = () => {
    dispatch(loadProjects(currentPage + 1));
  };

  const [view, setView] = useState("table");
  const [tableButtonColor, setTableButtonColor] = useState("#b7c9e2");
  const [cardButtonColor, setCardButtonColor] = useState("white");
  const handleViewClick = (view: string): void => {
    setView(view);
    if (view === "table") {
    setTableButtonColor("#b7c9e2");
    setCardButtonColor("white");
    } else if (view === "card") {
      setTableButtonColor("white");
      setCardButtonColor("#b7c9e2");
    }
  };

  return (
    <div>
      <div style={{ display: "flex" }}>
        <h1
          style={{ fontFamily: "Gloock, serif", padding: 4, color: "#01579b" }}
        >
          Current Projects
        </h1>
        <button onClick={() => handleViewClick("table")} style={{backgroundColor:`${tableButtonColor}`, fontFamily:"Jost, sans-serif"}}>Table View</button>
        <button onClick={() => handleViewClick("card")} style={{backgroundColor:`${cardButtonColor}`, fontFamily:"Jost, sans-serif"}}>Card View</button>
      </div>
      {error && (
        <div className="row">
          <div className="card large error">
            <section>
              <p>
                <span className="icon-alert inverse "></span>
                {error}
              </p>
            </section>
          </div>
        </div>
      )}
      {view==="table" && <ProjectTable projects={projects} />}
      {view==="card" && <ProjectList projects={projects} />}

      {!loading && !error && (
        <div className="row">
          <div className="col-sm-12">
            <div className="button-group fluid">
              <button className="button default" onClick={handleMoreClick}>
                More...
              </button>
            </div>
          </div>
        </div>
      )}

      {loading && (
        <div className="center-page">
          <span className="spinner primary"></span>
          <p>Loading...</p>
        </div>
      )}
    </div>
  );
}

export default ProjectsPage;
