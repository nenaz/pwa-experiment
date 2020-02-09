import * as React from 'react';
// import { noop } from 'lodash';
// import { Link } from 'react-router-dom';
import logo from './assets/logo.svg';
import { wsConnection } from '@/utils/socker-connection';


export const Page = ({ title, ws }) => (
  <div className="App">
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>{title}</h2>
    </div>
    <button onClick={() => {
      const date = new Date();
      ws.emit('current time', title, date.getTime());
    }}>
      Отправить
    </button>
    <button onClick={() => {
      wsConnection.wsWatchPosition(true);
    }}>
      Watch positions
    </button>
    <p className="App-intro">
      This is the {title} page.
    </p>
    <p>
      {/* <Link to="/">Home</Link> */}
    </p>
    <p>
      {/* <Link to="/about">About</Link> */}
    </p>
    <p>
      {/* <Link to="/settings">Settings</Link> */}
    </p>
  </div>
);
