import * as React from 'react';

export interface IControlComponenProps<S>{
  newState?:S
  onStateChange?: (newState:S,key:string)=>void
  key:string
  saveToRedux:boolean
}

export default class ControlComponent<P extends IControlComponenProps<S>,S={},SS=any> extends React.Component<P,S,SS>
{
  public componentWillReceiveProps(props:P){
    if(props.newState !== undefined && props.newState!== {}){
      this.setState(props.newState);
    }
  }

  public setState(newState:S){
    if(this.props.onStateChange !== undefined){
      super.setState(newState,()=>this.props.onStateChange!(this.state,this.props.key));
    }
    else{
      super.setState(newState);
    } 
  }
}

