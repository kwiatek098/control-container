import * as React from 'react';
import ControledComponent,{IControledComponenProps} from './controledComponent'
import { RouteComponentProps } from 'react-router';
import { connect } from 'react-redux';
import { ColumnEvent,SortChangedEvent,ColumnResizedEvent,ColDef,ColumnMovedEvent,ColumnVisibleEvent,GridReadyEvent,GridApi,ColumnApi,ModelUpdatedEvent} from 'ag-grid';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid/dist/styles/ag-grid.css';
import 'ag-grid/dist/styles/ag-theme-balham.css';

export interface IControledAgGridState{
    columnsState: any[],
    filterState :any[]
}

export interface IControledAgGridProps extends IControledComponenProps<IControledAgGridState>{
}

export interface IOption{
    value:string|number
    text:string
}

const Data = [
    {make: "Toyota", model: "Celica", price: 35000},
    {make: "Ford", model: "Mondeo", price: 32000},
    {make: "Porsche", model: "Boxter", price: 72000}
  ]

 const ColumnDefs = [
    {headerName: "Make", field: "make"},
    {headerName: "Model", field: "model"},
    {headerName: "Price", field: "price"}
  ]

export default class ControledAgGrid extends ControledComponent<IControledAgGridProps,IControledAgGridState,{}>
{   
    private gridApi: GridApi;
    private columnApi: ColumnApi;
    private jumpSetState: boolean = false;

    public render(){
        
        return     <div
        className="ag-theme-balham"
        style={{
          height: '500px',
          width: '600px' }}
      >
        <AgGridReact
          enableSorting={true}
          enableFilter={true}
          columnDefs={ColumnDefs}
          rowData={Data}
          showToolPanel ={true}
          onGridReady={this.onGridReady}
          onModelUpdated ={this.onModelUpdated}
          onColumnResized={this.updateCoumnsState}
          onColumnMoved={this.updateCoumnsState}
          onSortChanged={this.updateCoumnsState}
          onColumnVisible={this.updateCoumnsState}
        />

      </div>
    } 

    public setState(newState:IControledAgGridState){
        super.setState(newState,this.setStateCallback);
    }

    public setStateCallback=()=>{
        this.gridApi.setFilterModel(this.state.filterState);
        this.columnApi.setState(this.state.columnsState);
    }

    public onGridReady=(e: GridReadyEvent)=> {
        this.gridApi = e.api;
        this.columnApi = e.columnApi;
      
        this.setState({filterState:e.api.getFilterModel(),columnsState:e.columnApi.getState()});
    }

    public onModelUpdated = (e:ModelUpdatedEvent)=>{
        if(this.gridApi !== undefined){
            const model = e.api.getFilterModel();
            this.setState({filterState:model,columnsState:this.state.columnsState});
        }
    }

    private updateCoumnsState = ()=>{
        if(this.columnApi !== undefined){
            this.setState({filterState:this.state.filterState,columnsState:this.columnApi.getState()});
        }
    }

}

