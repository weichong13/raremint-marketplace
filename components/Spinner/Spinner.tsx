import React from 'react';
import { Spinner as ReactSpiner } from 'react-bootstrap';

const Spinner = () => {
  return (
    <div className="spinner-wrapper">
      <ReactSpiner animation="border" />
    </div>
  );
};

export default Spinner;
