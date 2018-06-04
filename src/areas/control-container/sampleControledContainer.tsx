import * as React from 'react';
import ControledContainerComponent from '../control-container/controledContainer';
import ControledTextBox, { IControledTextBoxState } from '../control-container/controledTextBox';
import ControledSelect, { IControledSelectState } from '../control-container/controledSelect'
import ControledContainer, { IControledContainerComponentState } from '../control-container/controledContainer'
import ControledAgGrid, { IControledAgGridState } from '../control-container/controledAgGrid'
import { getCookie, setCookie } from '../../utils/cookies';

const Options = [{ value: 1, text: 'Poland' }, { value: 2, text: 'USA' }]

export interface ISampleControledContainerState {
    controledStates: {
        lName: IControledTextBoxState
        fName: IControledTextBoxState
        countries: IControledSelectState
        grid: IControledAgGridState
    }
}

export default class SampleControledContainer extends ControledContainer<{}, ISampleControledContainerState>
{
    constructor(props: any) {
        super(props);
        this.state = {
            controledStates: {
                countries: { selectedValue: '0' },
                fName: { value: 'Placek' },
                grid: { filterState: [], columnsState: [] },
                lName: { value: 'Jacek' }
            }
        }
    }

    public render() {
        return (
            <div>
                <ControledTextBox onStateChange={this.onStateChange} id='lName' key='lName' state={this.state.controledStates.lName} />
                <ControledTextBox onStateChange={this.onStateChange} id='fName' key='fName' state={this.state.controledStates.fName} />
                <ControledSelect onStateChange={this.onStateChange} id='countries' key='countries' state={this.state.controledStates.countries} options={Options} />
                <ControledAgGrid onStateChange={this.onStateChange} id='grid' key='grid' state={this.state.controledStates.grid} />
                <button onClick= {this.saveState}>Save</button>
                <button onClick= {this.loadState}>Load</button>
            </div>
        );
    }

    private saveState = ()=> {
        setCookie('cookie', JSON.stringify(this.state.controledStates), 100);
    }

    private loadState=()=> {
        const states = JSON.parse(getCookie('cookie'));
        this.setState({ controledStates: states });
    }

}
