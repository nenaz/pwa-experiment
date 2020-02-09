import * as React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { isNil } from 'lodash';
import { WithApp } from '@/withApp';
import { HomePage } from './home-page';
import { wsWatchPosition, wsGetCurrentPosition, wsStopWatch } from './home-page-actions';
import { getCurrentPosition, getWatchPosition, getWatchId } from './home-page-selectors';

export class HomePageComponent extends React.PureComponent {
  handleWatchPositionClick = () => {
    this.props.wsWatchPosition(true, this.props.ws);
  }

  handleCurrentPositionClick = () => {
    this.props.wsGetCurrentPosition(this.props.ws);
  }

  get isWatchDisabled() {
    return !isNil(this.props.watchId);
  }
  
  render() {
    return (
      <HomePage
        ws={this.props.ws}
        handleWatchPositionClick={this.handleWatchPositionClick}
        handleCurrentPositionClick={this.handleCurrentPositionClick}
        currentPosition={this.props.currentPosition}
        watchPosition={this.props.watchPosition}
        wsStopWatch={this.props.wsStopWatch}
        isWatchDisabled={this.isWatchDisabled}
      />
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentPosition: getCurrentPosition,
  watchPosition: getWatchPosition,
  watchId: getWatchId,
});

const mapDispatchToProps = {
  wsWatchPosition,
  wsGetCurrentPosition,
  wsStopWatch,
};

export const HomePageController = compose(
  connect(mapStateToProps, mapDispatchToProps),
  WithApp
)(HomePageComponent);
