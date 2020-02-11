import io from 'socket.io-client';

class WSConnection {
  wsConnect = () => {
    const url = process.env.REACT_APP_USER === 'developer'
      ? 'localhost:3002'
      : 'https://agile-everglades-37267.herokuapp.com';
    console.log('process.env', process.env);
    console.log('url', url);
    this.socket = io(url);
    this.socket.on('connect', () => {
      console.log('this.socket.connected');
    });

    this.socket.on('error', (error) => {
      console.log('Error', error);
    });

    this.socket.on('close', (event) => {
      if (event.wasClean) {
        console.log('Соединение закрыто чисто');
      } else {
        console.log('Обрыв соединения'); // например, "убит" процесс сервера
      }
      console.log('Код: ' + event.code + ' причина: ' + event.reason);
    });
    return this.socket;
  }

  // wsWatchPosition = (hasSending) => {
  //   const geoSuccess = (position) => {
  //     // position.coords.latitude, position.coords.longitude
  //     console.log('position', position);
  //     if(hasSending) {
  //       this.socket.send('current time', 'watch', position);
  //     }
  //   };
  //   const geoError = () => {

  //   };
  //   const geoOptions = {
  //     enableHighAccuracy: true,
  //     maximumAge: 30000,
  //     timeout: 27000,
  //   };
  //   const wpid = navigator.geolocation.watchPosition(geoSuccess,geoError,geoOptions);
  //   console.log('wpid', wpid);
  //   return wpid;
  // }
}

export const wsConnection = new WSConnection();
