import * as React from 'react';
import { wsConnection } from './utils/socker-connection';

const ws = wsConnection.wsConnect();
ws.on('current time', (message) => {
  console.log('message from server', message);
});

export const WithApp = (WrappedComponent) => {
  return class extends React.PureComponent {
    render() {
      return (
        <WrappedComponent
          ws={ws}  
          {...this.props}
        />
      );
    }
  };
};
