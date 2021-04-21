import './App.css';
import Header from './Header'
import Home from './Home'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from './Checkout';
function App() {
  return (
    // We will use the BEM convention for naming
    // Router is used to sync more than one pages to each other
    <Router>
      <div className="app">
        {/* Placing header outside because we want it to render always */}

        <Switch>
          <Route path="/login">
            <h1>This is login</h1>
          </Route>
          <Route path="/checkout">
            <Header />

            <Checkout />
          </Route>
          <Route path="/">
            <Header />

            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
