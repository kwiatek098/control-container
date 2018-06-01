import * as React from 'react';

// export interface IContainerProps{
//   children: Array<ControlComponent<any>>
// }

export default class Container extends React.Component<{},{}>
{
  constructor(props:any) {
    super(props);
    this.state = {

    }
  }

  // onStateChange(newState,key){
  //   console.log(newState)
  // }

  public render() {    
    // this.props.children.forEach((item, index)=>{
    //   // item.props.onStateChange = (newState)=>this.onStateChange(newState,item.props.key);
    //   // console.log(item);
    // })


    return (
      this.props.children
    );
  }
}


