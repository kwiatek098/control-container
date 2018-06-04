
export interface IControlsState {
    states: Array<{key:string,state:any}>
}

export interface IAppState {
 controls:IControlsState
}