import React from "react";
import "./App.css";
import LandingView from "./components/landingView/landingView";
import { ToDoProvider } from "./store/toDosContext";
function App() {
  return (
    <div className="App">
      <ToDoProvider>
        <LandingView />
      </ToDoProvider>
    </div>
  );
}

export default App;
