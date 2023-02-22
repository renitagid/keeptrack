import { combineReducers } from '@reduxjs/toolkit';
import { projectReducer } from './projects/state/projectReducer';

// Define the RootState type
export type RootState = ReturnType<typeof rootReducer>;

// Combine all the reducers using combineReducers
export const rootReducer = combineReducers({
  projectState: projectReducer,
  // Add other reducers here if you have them
});
