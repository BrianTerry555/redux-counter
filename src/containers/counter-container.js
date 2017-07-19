import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "../actions/";


//Import components
import Counter from "../components/counter.js";


class CounterContainer extends React.Component {
  render() {
    return (
        <Counter handleAdd={this.props.add} handleSub={this.props.sub} counter={this.props.counter}/>
    )
  }
}


//handles putting our state into react
const mapStateToProps = (state) => {
  return state;
}


//handles putting our actionCreators into react
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
