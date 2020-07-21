import React, { Component } from "react";

export default class ClassProps extends Component {
  render() {
    const { image, name, age } = this.props.cho;
    return (
      <div>
        <h2>StateFull Component</h2>
        <div className="card text-left">
          {/* nhận props image từ component DemoProps */}
          <img
            className="card-img-top"
            src={image}
            alt="asdsa"
            style={{ width: "300px" }}
          />
          <div className="card-body">
            <h4 className="card-title">{name}</h4>
            <p className="card-text">{age}</p>
          </div>
        </div>
      </div>
    );
  }
}
