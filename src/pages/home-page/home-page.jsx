import * as React from 'react';
import { Page } from '@/components/page';
import { PAGE_TITLE } from './home-page-constants';
import './home-page.scss';

export class HomePage extends React.PureComponent {
  render() {
    const {
      currentPosition = {},
      handleCurrentPositionClick,
      handleWatchPositionClick,
      isWatchDisabled,
      watchPosition = {},
      wsStopWatch,
    } = this.props;
    const { latitude = '', longitude = '' } = currentPosition;
    const { latitude: wLatitude = '', longitude: wLongitude = '' } = watchPosition;

    return (
      <Page
        title={PAGE_TITLE}
      >
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
          This is the {PAGE_TITLE} page.
        </p>
        <p>
          {`${latitude} ${longitude}`}
        </p>
        <p>
        {`${wLatitude} ${wLongitude}`}
        </p>
      </Page>
    );
  }
}
