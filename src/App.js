import React from "react";
import Home from "./pages/Home";
import GlobalStyles from "./GlobalStyles";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Home />
    </Router>
  );
}

export default App;
