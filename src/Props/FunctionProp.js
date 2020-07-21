import React from "react";

export default function FunctionProp(props) {
  return (
    <div>
      <h2>StateLess Component</h2>
      <div className="card text-left">
        <img className="card-img-top" src={props.meo.srcImg} alt="asdasds" />
        <div className="card-body">
          <h4 className="card-title">Title</h4>
          <p className="card-text">Body</p>
        </div>
      </div>
    </div>
  );
}
