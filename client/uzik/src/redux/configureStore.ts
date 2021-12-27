import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { createBrowserHistory } from 'history';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import job from './modules/JobModule/job';
import { connectRouter } from 'connected-react-router';
import user from './modules/UserModule/user';

export const history = createBrowserHistory();

const rootReducer = combineReducers({
  job: job.reducer,
  // user: user.reducer,
  router: connectRouter(history),
});

const middlewares = [thunk.withExtraArgument({ history }), logger];

const store = configureStore({
  reducer: rootReducer,
  middleware: [...middlewares],
});

export type RootState = ReturnType<typeof store.getState>;
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
export default store;