import React, { useEffect, useState } from "react";
import { projectAPI } from "./projectAPI";
import ProjectDetail from "./ProjectDetail";
import { Project } from "./Project";
import { useParams } from "react-router-dom";

//props any means that we can pass any type of data to this component, it is similar to the props object in React class components and required for functional components.
function ProjectPage(props: any) {
  const [loading, setLoading] = useState(false);
  const [project, setProject] = useState<Project | null>(null);
  const [error, setError] = useState<string | null>(null);
  const params = useParams();

  useEffect(() => {
    let id: number;
    if (params.id) id = Number(params.id);
    else id = props.id;
    setLoading(true);
    projectAPI
      .find(id)
      .then((data) => {
        setProject(data);
        setLoading(false);
      })
      .catch((e) => {
        setError(e);
        setLoading(false);
      });
  }, [params.id, props.id]);

  return (
    <div style={{backgroundColor:"lightgray", position:"relative", top:-20, display:"flex", flexDirection:"column", alignItems:"center"}}>
      <div style={{backgroundColor:"white", width:"50%", borderWidth:2, border:"solid", borderRadius:10, margin:20, position:"relative", top:10, padding:10, display:"flex", flexDirection:"column", alignItems:"center" }}>
        <div style={{width:"75%" }}>
        <span style={{ display: "flex", justifyContent: "space-between" }}>
          <h1 style={{ fontFamily: "Gloock, serif" }}>Project Details</h1>
        </span>
        {loading && (
          <div className="center-page">
            <span className="spinner primary"></span>
            <p>Loading...</p>
          </div>
        )}

        {error && (
          <div className="row">
            <div className="card large error">
              <section>
                <p>
                  <span className="icon-alert inverse "></span> {error}
                </p>
              </section>
            </div>
          </div>
        )}

        {project && (
          <ProjectDetail project={project} onCancel={props.onCancel} />
        )}
      </div>
      </div>
    </div>
  );
}

export default ProjectPage;
