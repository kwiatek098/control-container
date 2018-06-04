import { IControlsState } from '../../common/appState';
import { Reducer } from 'redux';
import {SetState} from '../control-container/controlContainerActions'

const initialState: IControlsState = {
  states: []
};


type ActionTypes = SetState;

export const controlsReducer: Reducer<IControlsState> = (state = initialState, action: ActionTypes) => {
  switch (action.type) {
    case 'SET_STATE':
   // let x = action.payload!.key

      return { ...state};
    default:
      return state;
  }
}
