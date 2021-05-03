import "./Main.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import Home from "../pages/Home";
import Portfolio from "../pages/Portfolio";

function Main(props) {
  return (
    <div style={{height:'100%'}}>
      <Router>
        <Header />
        <main style={{height:'calc(100% - 150px)'}}>
        <Switch>
          <Route path="/Portfolio">
            <Portfolio />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default Main;
