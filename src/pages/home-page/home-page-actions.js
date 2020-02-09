import { HOME_PAGE_STORE_KEY } from './home-page-constants';

const getCurrentNamespace = (name) => `${HOME_PAGE_STORE_KEY}/${name}`;

export const WATCH_POSITION = getCurrentNamespace('WATCH_POSITION');
export const WATCH_POSITION_ID = getCurrentNamespace('WATCH_POSITION_ID');
export const wsWatchPosition = (hasSending, ws) => (dispatch, getState) => {
  const geoSuccess = (position) => {
    console.log('watch position', position);
    if(hasSending) {
      const payload = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      };
      ws.send('watch', payload);
      // ws.send('current time', 'watch', position);
      dispatch({
        type: WATCH_POSITION,
        payload,
      })
    }
  };
  const geoError = () => {

  };
  const geoOptions = {
    enableHighAccuracy: true,
    maximumAge: 30000,
    timeout: 27000,
  };
  const wpid = navigator.geolocation.watchPosition(geoSuccess,geoError,geoOptions);
  console.log('wpid', wpid);
  // return wpid;
  dispatch({
    type: WATCH_POSITION_ID,
    payload: wpid,
  });
}

export const CURRENT_POSITION = getCurrentNamespace('CURRENT_POSITION');
export const wsGetCurrentPosition = (ws) => (dispatch, getState) => {
  const geoSuccess = (position) => {
    console.log('current position', position);
    const payload = {
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    };
    ws.send('watch', payload);
    // ws.send('current time', 'watch', position);
    dispatch({
      type: CURRENT_POSITION,
      payload,
    });
  };
  const geoError = () => {

  };
  navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
};
