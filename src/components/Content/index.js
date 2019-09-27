import React from 'react';
import Calculator from '../Calculator';
// import History from "./History";

function Content() {
  return (
    <div className="container mt-4 text-center">
      <div className="row">
        <div className="col-sm-12"><Calculator /></div>
        <hr />
        {/* <div className="col-sm-12"><History /></div> */}
      </div>
    </div>
  );
}

export default Content;
