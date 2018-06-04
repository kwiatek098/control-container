import * as React from 'react';
// import { connect } from 'react-redux';
// import {IAppState} from '../../common/appState'
export interface IControledComponenProps<S>{
  state?:S
  onStateChange?: (newState:S,key:string)=>void
  id:string
}

export default class ControledComponent<P extends IControledComponenProps<S>,S={},SS=any> extends React.Component<P,S,SS>
{
  constructor(props: P) {
    super(props);

    if(this.props.state!==undefined){
      this.state = props.state!;
    }
  }

  public componentWillReceiveProps(props:P){
    if(props.state !== undefined && props.state!== {}){
      this.setState(props.state);
    }
  }

  public setState(newState:S,callback?:()=>void){

    if(JSON.stringify(this.state) === JSON.stringify(newState)){
      return;
    }

    if(this.props.onStateChange !== undefined){

      const combinedCallbacks =()=>{
        this.props.onStateChange!(this.state,this.props.id)
        if(callback!==undefined){
          callback();
        }
      }

      super.setState(newState,combinedCallbacks);
    }
    else{
      super.setState(newState,callback);
    } 
  }

}


