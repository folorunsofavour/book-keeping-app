import React from 'react';
import { Loader, Dimmer } from 'semantic-ui-react'

const Loading = ({size, inverted}) => {
  return (
    // <Dimmer active>
    <Loader size={size} active inverted={inverted} inline='centered'/>
    // </Dimmer>
  );
};

export default Loading;