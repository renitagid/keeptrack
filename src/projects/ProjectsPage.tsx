import { useEffect } from "react";
import ProjectList from "./ProjectList";
import { useSelector, useDispatch } from 'react-redux';
import { loadProjects } from './state/projectActions';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { ProjectState } from './state/projectTypes';
import { RootState } from "../rootReducer";

const ProjectsPage = () => {
  //useDispatch is a hook that returns a reference to the dispatch function from the Redux store. You may use it to dispatch actions as needed.
  const dispatch = useDispatch<ThunkDispatch<ProjectState, any, AnyAction>>();

//useSelector is a hook that allows you to extract data from the Redux store state, using a selector function. useSelector takes a selector function as an argument. The selector function should be written so that it takes the entire store state as an argument and returns data that is needed by the component. useSelector will use reference equality to check if the output of the selector has changed. This means that a selector should always return the same output for the same input. Otherwise, the component may not be updated when expected.
  const loading = useSelector((state: RootState) => state.projectState.loading);
  const projects = useSelector((state: RootState) => state.projectState.projects);
  const error = useSelector((state: RootState) => state.projectState.error);
  const currentPage = useSelector((state: RootState) => state.projectState.page);

  //type of handleMoreClick is a function that takes no arguments and returns void.
  const handleMoreClick = () => {
    dispatch(loadProjects(currentPage + 1));
  };

    useEffect(() => {
      //loadProjects is a function that takes a number as an argument and returns void. it was imported from projectActions.ts
        dispatch(loadProjects(1));
      }, [dispatch]);

  

  return (
    <div>
      <h1>Projects</h1>

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

<ProjectList projects={projects} />

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
};

export default ProjectsPage;
