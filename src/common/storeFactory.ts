import { applyMiddleware,combineReducers, compose,createStore } from 'redux';
import { createLogger } from 'redux-logger';
import {IAppState} from './appState';
import {controlsReducer} from '../areas/control-container/controlsReducer'
const logger = createLogger();


export const storeFactory = () => {
  const devTools = ((window as any).devToolsExtension)
    ? ((window as any).devToolsExtension)
    : () => {};

  const createStoreWithMiddleware = compose(
    applyMiddleware(
      logger
    )
  )(createStore);

  return (createStoreWithMiddleware as any)(combineReducers<IAppState>({
    controls:controlsReducer
  }), devTools());
};
