import * as React from 'react';
import Container from './areas/control-container/container';
import SampleControl,{ISampleControlState} from './areas/control-container/sampleControl';

export default class App extends React.Component<{},{someValue:string}>
{
  constructor(props: any) {
    super(props);

    this.state = {
      someValue: ""
    }
  }

  public render(){
    const children: JSX.Element[]= [];
    children.push(<SampleControl saveToRedux={false} onStateChange={this.onStateChange} key='fName' newState ={{controlValue: this.state.someValue}} />)
    children.push(<SampleControl saveToRedux={false} onStateChange={this.onStateChange} key='lName'/>)

    return (
      <div>
      <Container>
        {children}
      </Container>
      <button onClick={this.onClick}>Click</button>
      </div>
    );
  }
 
  public onStateChange = (newState: ISampleControlState,key: string) =>{
    // console.log(newState)
  }

  private onClick =(e: any)=>{
    this.setState({someValue: "dupa"})
  }
}


