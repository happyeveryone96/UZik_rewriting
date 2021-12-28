import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { createBrowserHistory } from 'history';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import job from './modules/job';
import { connectRouter } from 'connected-react-router';
import userSlice from './modules/user';

export const history = createBrowserHistory();

const rootReducer = combineReducers({
  router: connectRouter(history),
  user: userSlice,
  job: job.reducer,
});

const middlewares = [thunk.withExtraArgument({ history }), logger];

const store = configureStore({
  reducer: rootReducer,
  middleware: [...middlewares],
});

export default store;