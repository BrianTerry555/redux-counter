import React from "react";

class Counter extends React.Component {
  render() {
    return (
      <div className="custom-button">
        <h3>{this.props.counter}</h3>
        <button className="btn btn-danger btn-md addButton" onClick={this.props.handleAdd}>+</button>
        <button className="btn btn-danger btn-md subButton" onClick={this.props.handleSub}>-</button>
      </div>
    );
  }
}

export default Counter;
