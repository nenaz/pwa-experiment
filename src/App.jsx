import * as React from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
// import { noop } from 'lodash';
// import { Page } from '@/components/page';
import { Home } from '@/pages/home-page';
import { WithApp } from './withApp';
import './App.css';

class App extends React.PureComponent {  
  render() {
    console.log('render', this.props);
    return (
      // <Router>
      //   <Route path="/" component={this.thisHomeProps()}/>
      //   <Route path="/about" component={About}/>
      //   <Route path="/settings" component={Settings}/>
      // </Router>
      <Home ws={this.props.ws} />
    );
  }
}

export const AppComponent = WithApp(App);
