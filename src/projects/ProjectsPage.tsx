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
import ProjectsCharts from "./ProjectsCharts";

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

  const [view, setView] = useState("card");
  const [tableButtonColor, setTableButtonColor] = useState("white");
  const [chartButtonColor, setChartButtonColor] = useState("white");
  const [cardButtonColor, setCardButtonColor] = useState("#203966");
  const handleViewClick = (view: string): void => {
    setView(view);
    if (view === "table") {
      setTableButtonColor("#203966");
      setCardButtonColor("white");

      setChartButtonColor("white");
    } else if (view === "card") {
      setTableButtonColor("white");
      setCardButtonColor("white");

      setChartButtonColor("#203966");
    } else if (view === "chart") {

      setCardButtonColor("white");
      setTableButtonColor("white");
      setChartButtonColor("#203966");
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
    <Container sx={{ width: "95%", padding: 3 }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <h1 style={{ padding: 4, color: "#01579b" }}>Current Projects</h1>
        {view !== "table" && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginRight: "20px",
            }}
          >
            <input style={{}} onChange={handleChange}></input>
            <Button type="submit" onClick={handleSearchClick} style={{}}>
              Search
            </Button>
            <div style={{}}>Results: {filteredProjects.length}</div>
          </div>
        )}
        <div>
          <Button
            variant="outlined"
            onClick={() => handleViewClick("table")}
            style={{
              backgroundColor: `${tableButtonColor}`,
              borderTopRightRadius: 0,
              borderBottomRightRadius: 0,
            }}
          >
            Table View
          </Button>
          <Button
            variant="outlined"
            onClick={() => handleViewClick("chart")}
            style={{
              backgroundColor: `${chartButtonColor}`,
              borderRadius: 0,
            }}
          >
            Charts View
          </Button>
          <Button
            variant="outlined"
            onClick={() => handleViewClick("card")}
            style={{
              backgroundColor: `${cardButtonColor}`,
              borderTopLeftRadius: 0,
              borderBottomLeftRadius: 0,
            }}
          >
            Card View
          </Button>
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
      {!loading && view === "chart" && (
<ProjectsCharts projects={filteredProjects} />
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
