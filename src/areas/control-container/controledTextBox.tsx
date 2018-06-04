import * as React from 'react';
import ControledComponent,{IControledComponenProps} from './controledComponent'

export interface IControledTextBoxState{
    value:string
}

export default class ControledTextBox extends ControledComponent<IControledComponenProps<IControledTextBoxState>,IControledTextBoxState,{}>
{
 
    constructor(props: IControledComponenProps<IControledTextBoxState>) {
        super(props);
    }

    public render(){
        return <input type='text' value = {this.state.value} onChange ={this.onChange}/>     
    } 

    private onChange=(e: React.ChangeEvent<HTMLInputElement>)=>{
        this.setState({value:e.target.value})
    }
    
}

