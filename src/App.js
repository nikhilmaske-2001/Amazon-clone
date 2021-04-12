import './App.css';
import Header from './Header'
import Home from './Home'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    // We will use the BEM convention for naming
    // Router is used to sync more than one pages to each other
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Header />
            {/* Header */}
            <h1>
              I am a checkout page
            </h1>
          </Route>
          <Route path="/">
            <Header />
            {/* Header */}
            <Home />
            {/* Home */}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
