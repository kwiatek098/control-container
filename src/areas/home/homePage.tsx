import * as React from 'react';
import ControledContainerComponent from '../control-container/controledContainer';
import ControledTextBox,{IControledTextBoxState} from '../control-container/controledTextBox';
import ControledSelect from '../control-container/controledSelect'
import SampleControledContainer from '../control-container/sampleControledContainer'


export default class HomePage extends React.Component<{},{someValue:string}>
{


  public render(){
    return (
      <SampleControledContainer/>
    );
  }
 
}

