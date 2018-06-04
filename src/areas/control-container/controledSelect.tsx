import * as React from 'react';
import ControledComponent,{IControledComponenProps} from './controledComponent'

export interface IControledSelectState{
    selectedValue:string|number
}

export interface IControledSelectProps extends IControledComponenProps<IControledSelectState>{
    options:IOption[]
}

export interface IOption{
    value:string|number
    text:string
}

export default class ControledSelect extends ControledComponent<IControledSelectProps,IControledSelectState,{}>
{   
    public render(){
        const options = this.props.options.map((val)=> <option key ={val.value} value={val.value}>{val.text}</option> )
        return <select onChange={this.onChange} value = {this.state.selectedValue}>
          {options}
        </select>    
    } 
 
    private onChange=(e: React.ChangeEvent<HTMLSelectElement>)=>{
        this.setState({selectedValue: e.target.value})
    }
    
}

