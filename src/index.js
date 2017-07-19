import React from "react";
import ReactDOM from "react-dom";

//provides store to react
import { Provider } from "react-redux";

import { createStore } from "redux";
import reducers from "./reducers/";

//import css
import "./css/index.css";



//Import components
import CounterContainer from "./containers/counter-container.js";


//create store
const store = createStore(reducers);

class App extends React.Component {
  render() {
    return (
      <div className="container">
          <div className="row">
            <div className="col-md-4">
              <CounterContainer />
            </div>
          </div>
      </div>
    );
  }
}

ReactDOM.render(<Provider store={store}><App /></Provider>, document.querySelector("#root"));
