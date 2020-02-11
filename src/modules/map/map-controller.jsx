import * as React from 'react';
import { GoogleApiWrapper } from 'google-maps-react';
import { get } from 'lodash';
import { Map } from './map';
import {
  G_MAP_API_KEY,
  G_MAP_ZOOM,
  CENTER_AROUND_CURRENT_LOCATION,
} from './map-constants';
import './map.scss';

class MapContainer extends React.PureComponent {
  
  render() {
    const { coordinates } = this.props;
    const center = {
      lat: get(coordinates, 'latitude', 0),
      lng: get(coordinates, 'longitude', 0),
    };

    return (
      <div className="map">
        <Map
          {...this.props}
          zoom={G_MAP_ZOOM}
          initialCenter={center}
          center={center}
          centerAroundCurrentLocation={CENTER_AROUND_CURRENT_LOCATION}
        />
      </div>
    );
  }
}

export const MapController =  GoogleApiWrapper({
  apiKey: G_MAP_API_KEY,
})(MapContainer);
