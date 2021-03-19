import React from 'react';

const Loading = ({color}) => {
  return (
    <div className={`spinner-border ${color}`} role="status"></div>
  );
};

export default Loading;