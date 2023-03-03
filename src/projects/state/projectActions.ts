import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { projectAPI } from '../projectAPI';
import { Project } from '../Project';
import {
  LOAD_PROJECTS_REQUEST,
  LOAD_PROJECTS_SUCCESS,
  LOAD_PROJECTS_FAILURE,
  SAVE_PROJECT_REQUEST,
  SAVE_PROJECT_SUCCESS,
  SAVE_PROJECT_FAILURE,
  ProjectState,
} from './projectTypes';

//action creators
// This is a TypeScript function that takes a number and returns a ThunkAction object. A ThunkAction object is a function that takes a dispatch function and returns a Promise object. The Promise object represents the eventual completion (or failure) of an asynchronous operation, and its resulting value. 

//<void, ProjectState, null, Action<string>> is a TypeScript generic type that represents the return type of the function. The first generic type is the return type of the function. The second generic type is the type of the state object. The third generic type is the type of the extra argument passed to the function. The fourth generic type is the type of the action object.

export function loadProjects(
  page: number
): ThunkAction<void, ProjectState, null, Action<string>> {
  return (dispatch: any) => {
    dispatch({ type: LOAD_PROJECTS_REQUEST });
    return projectAPI
      .get()
      .then((data) => {
        dispatch({
          type: LOAD_PROJECTS_SUCCESS,
          payload: { projects: data, page },
        });
      })
      .catch((error) => {
        dispatch({ type: LOAD_PROJECTS_FAILURE, payload: error });
      });
  };
}

export function saveProject(
  project: Project
): ThunkAction<void, ProjectState, null, Action<string>> {
  return (dispatch: any) => {
    dispatch({ type: SAVE_PROJECT_REQUEST });
    return projectAPI
      .put(project)
      .then((data) => {
        dispatch({ type: SAVE_PROJECT_SUCCESS, payload: data });
      })
      .catch((error) => {
        dispatch({ type: SAVE_PROJECT_FAILURE, payload: error });
      });
  };
}