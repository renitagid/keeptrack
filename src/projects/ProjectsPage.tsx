import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../state";
import ProjectList from "./ProjectList";
import { loadProjects } from "./state/projectActions";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { ProjectState } from "./state/projectTypes";
import ProjectTable from "./ProjectTable";
import { Project } from "./Project";
import { Container, Stack } from "@mui/system";
import { Button } from "@mui/material";

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
  const dispatch = useDispatch<ThunkDispatch<ProjectState, any, AnyAction>>();

  useEffect(() => {
    dispatch<any>(loadProjects(1));
  }, [dispatch]);

  useEffect(() => {
    setFilteredProjects(projects);
  }, [projects]);

  const [filteredProjects, setFilteredProjects] = useState(projects);
  const filter = (projects: Project[], params: string) => {
    const filteredProjects = projects?.filter((project) => {
      return (
        project.name.toLowerCase().includes(params.toLowerCase()) ||
        project.description.toLowerCase().includes(params.toLowerCase()) ||
        project.county.toLowerCase().includes(params.toLowerCase())
      );
    });
    setFilteredProjects(filteredProjects);
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
  const [search, setSearch] = useState("");
  const handleChange = (e: { target: { value: string } }) => {
    setSearch(e.target.value);
  };
  const handleSearchClick = () => {
    filter(projects, search);
  };

  return (
    <Container>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <h1
          style={{ padding: 4, color: "#01579b" }}
        >
          Current Projects
        </h1>
        <div>
          <Button
            onClick={() => handleViewClick("table")}
            style={{
              backgroundColor: `${tableButtonColor}`,
            }}
          >
            Table View
          </Button>
          <Button
            onClick={() => handleViewClick("card")}
            style={{
              backgroundColor: `${cardButtonColor}`,
            }}
          >
            Card View
          </Button>
        </div>
        <div
          style={{ display: "flex", alignItems: "center", marginRight: "20px" }}
        >
          <input style={{}} onChange={handleChange}></input>
          <Button type="submit" onClick={handleSearchClick} style={{}}>
            Search
          </Button>
          <div style={{}}>Results: {filteredProjects.length}</div>
        </div>
      </Stack>
      {error && (
        <div>
          <div>
            <section>
              <p>{error}</p>
            </section>
          </div>
        </div>
      )}
      {!loading && view === "table" && (
        <ProjectTable projects={filteredProjects} />
      )}
      {!loading && view === "card" && (
        <ProjectList projects={filteredProjects} />
      )}

      {loading && (
        <div>
          <span></span>
          <p>Loading...</p>
        </div>
      )}
    </Container>
  );
}

export default ProjectsPage;
