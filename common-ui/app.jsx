import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter,Route} from 'react-router-dom';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Personal from './components/form/index.jsx';
import Education from './components/form/education.jsx';
import Address from './components/form/address.jsx';
import Exp from './components/form/experience.jsx';
import Profile from './components/form/profile.jsx';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import allReducers from './reducers/index.js';

const store = createStore(
    allReducers
);



injectTapEventPlugin();

export class App extends React.Component {
  render(){
    return(
    <MuiThemeProvider muiTheme={getMuiTheme()}>
    <HashRouter>
      <Provider store={store}>
          <div>
          <Route path = "/profile" component={Profile} />
          <Route path = "/exp" component={Exp} />
          <Route path = "/education" component = {Education} />
          <Route path = "/address" component = {Address} />
          <Route path = "/personal" component = {Personal} />
          </div>
      </Provider>
    </HashRouter>
    </MuiThemeProvider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
