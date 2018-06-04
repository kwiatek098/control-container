import * as React from 'react';
import { Store } from 'redux';
import {IAppState} from './common/appState';
import { Provider } from 'react-redux';
import {
  HashRouter as Router,
  Route
} from 'react-router-dom';
import HomePage from './areas/home/homePage';

interface IAppComponentProps {
  store: Store<IAppState>;
}

interface IError {
  name: string;
  message: string;
  stack?: string;
}

interface IAppComponentState {
  error: IError|null
  errorInfo: React.ErrorInfo|null
}

export default class App extends React.Component<IAppComponentProps,IAppComponentState>
{
  constructor(props: any) {
    super(props);

    this.state = {
        error: null,
      errorInfo: null  
    }
  }

  public componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    this.setState((s) => s.error === error ? null : ({
      error, errorInfo
    }))
  }

  public render(){
    return (
      <Provider store={this.props.store}>
          <Router>
              <Route path="/" strict={true} exact={true} component={HomePage} />
          </Router>
      </Provider> )
  }
 

}


