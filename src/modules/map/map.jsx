import * as React from 'react';
import { Map as GMap, Marker } from 'google-maps-react';

export class Map extends React.PureComponent {
  render() {
    return (
      <GMap
        google={window.google}
        zoom={this.props.zoom}
        style={{width: '100%', height: '100%', position: 'relative'}}
        initialCenter={this.props.center}
        center={this.props.center}
        centerAroundCurrentLocation={this.props.centerAroundCurrentLocation}
      >
        <Marker position={this.props.center} />
      </GMap>
    );
  }
}
