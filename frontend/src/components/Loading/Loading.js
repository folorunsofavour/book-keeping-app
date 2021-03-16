import React from 'react';

const Loading = ({color}) => {
  return (
    <div class={`spinner-border ${color}`} role="status"></div>
  );
};

export default Loading;