import * as React from 'react';
import ControlComponent from './controlComponent';
import {IControlComponenProps} from './controlComponent'

export interface ISampleControlState{
    controlValue:string
}

export default class SampleControl extends ControlComponent<IControlComponenProps<ISampleControlState>,ISampleControlState,{}>
{
    constructor(props: IControlComponenProps<ISampleControlState>) {
        super(props);
    
        this.state = {
            controlValue:'initial state'
        }
    }

    public render(){
        return <input type='text' value = {this.state.controlValue} onChange ={this.onChange}/>     
    } 

    private onChange=(e: React.ChangeEvent<HTMLInputElement>)=>{
        this.setState({controlValue:e.target.value})
    }
    
}

