import * as React from 'react';
import { Page } from '@/components/page';
import '@/App.css';

export class HomePage extends React.PureComponent {
  render() {
    return (
      <Page
        title="Home_v6"
        ws={this.props.ws}
        handleWatchPositionClick={this.props.handleWatchPositionClick}
        handleCurrentPositionClick={this.props.handleCurrentPositionClick}
        currentPosition={this.props.currentPosition}
        watchPosition={this.props.watchPosition}
      />
    );
  }
}
