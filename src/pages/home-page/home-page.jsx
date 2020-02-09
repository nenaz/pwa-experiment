import * as React from 'react';
import { Page } from '@/components/page';

export const Home = (props) => {
 console.log('props', props);
  return (
    <Page title="Home_v6" ws={props.ws} />
  );
};
