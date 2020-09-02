import React from "react";
import "./App.css";
import LandingView from "./components/landingView/landingView";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "../src/redux/store";
function App() {
  return (
    <div className="App">
      <Provider store={createStore(reducers)}>
        <LandingView />
      </Provider>
    </div>
  );
}

export default App;
