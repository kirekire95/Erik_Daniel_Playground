import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { GlobalStyle } from "./components/styles/GlobalStyles";
import Layout from "./components/Layout/Layout";
import NotFoundPage from "./components/pages/NotFoundPage";
import Home from "./components/pages/Home";
import About from "./components/pages/About";



function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Router>
        <Layout>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/About" exact>
              <About />
            </Route>
            <Route path="*">
              <NotFoundPage />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </React.Fragment>
  );
}

export default App;
