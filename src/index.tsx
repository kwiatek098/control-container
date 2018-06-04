import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {storeFactory} from './common/storeFactory'

const store = storeFactory();
ReactDOM.render(
 
  <App store={store}/>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
