import { configureStore } from '@reduxjs/toolkit';
import { projectReducer } from './projects/state/projectReducer';

const store = configureStore({
  reducer: {
    projectState: projectReducer,
  },
});

export default store;

export type AppDispatch = typeof store.dispatch;

// configureStore is a function provided by Redux Toolkit that simplifies the process of creating a Redux store. It automatically sets up several features like Redux DevTools and preloaded state, and provides a simpler syntax for defining middleware and reducers.
// In the configureStore function, we pass an object that contains the store configuration options.
// The reducer option is set to an empty object because we haven't defined any reducers yet. You can add them later as you build your application.
// The preloadedState option is set to initialAppState, which is an empty object in this example. You can replace it with your own initial state.
// The middleware option is set to use the default middleware provided by Redux Toolkit. This includes middleware like Redux Thunk and Redux-Logger, but you can add your own middleware as well.
// The devTools option is set to true, which enables the Redux DevTools extension in the browser. You can set it to false if you don't want to use the extension.