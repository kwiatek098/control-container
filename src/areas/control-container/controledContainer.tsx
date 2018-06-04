import * as React from 'react';



export interface IControledContainerComponentState{
  controledStates:{[index:string]:any}
}
  
export default class ControledContainerComponent<P,S extends IControledContainerComponentState> extends React.Component<P,S>
{
  public onStateChange = (newState: any, componentId: string) =>{
    const states = this.state.controledStates;
    states[componentId] = newState;
    this.setState({controledStates:states});
  }
}


