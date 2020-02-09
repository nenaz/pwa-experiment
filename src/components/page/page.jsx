import * as React from 'react';
// import { noop } from 'lodash';
// import { Link } from 'react-router-dom';
import logo from './assets/logo.svg';


export class Page extends React.PureComponent {
  render () {
    const {
      title,
      ws,
      handleWatchPositionClick,
      handleCurrentPositionClick,
      currentPosition = {},
      watchPosition = {},
      wsStopWatch,
      isWatchDisabled,
    } = this.props;
    const { latitude = '', longitude = '' } = currentPosition;
    const { latitude: wLatitude = '', longitude: wLongitude = '' } = watchPosition;

    return (
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
        <button onClick={handleWatchPositionClick} disabled={isWatchDisabled}>
          Watch positions
        </button>
        <button onClick={wsStopWatch}  disabled={!isWatchDisabled}>
          Stop Watch
        </button>
        <button onClick={handleCurrentPositionClick}>
          Current positions
        </button>
        <p className="App-intro">
          This is the {title} page.
        </p>
        <p>
          {`${latitude} ${longitude}`}
        </p>
        <p>
        {`${wLatitude} ${wLongitude}`}
        </p>
        <p>
          {/* <Link to="/settings">Settings</Link> */}
        </p>
      </div>
    );
  }
}
