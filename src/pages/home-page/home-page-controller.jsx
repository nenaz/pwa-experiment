import * as React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { WithApp } from '@/withApp';
import { HomePage } from './home-page';
import { wsWatchPosition, wsGetCurrentPosition } from './home-page-actions';
import { getCurrentPosition, getWatchPosition } from './home-page-selectors';

export class HomePageComponent extends React.PureComponent {
  handleWatchPositionClick = () => {
    console.log('this.props', this.props);
    this.props.wsWatchPosition(true, this.props.ws);
  }

  handleCurrentPositionClick = () => {
    console.log('this.props', this.props);
    this.props.wsGetCurrentPosition(this.props.ws);
  }
  render() {
    return (
      <HomePage
        ws={this.props.ws}
        handleWatchPositionClick={this.handleWatchPositionClick}
        handleCurrentPositionClick={this.handleCurrentPositionClick}
        currentPosition={this.props.currentPosition}
        watchPosition={this.props.watchPosition}
      />
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentPosition: getCurrentPosition,
  watchPosition: getWatchPosition,
});

const mapDispatchToProps = {
  wsWatchPosition,
  wsGetCurrentPosition,
};

export const HomePageController = compose(
  connect(mapStateToProps, mapDispatchToProps),
  WithApp
)(HomePageComponent);
