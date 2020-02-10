import * as React from 'react';
import logo from './assets/logo.svg';

export class Page extends React.PureComponent {
  render () {
    const {
      title,
    } = this.props;

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>{title}</h2>
        </div>
        {this.props.children}
      </div>
    );
  }
}
