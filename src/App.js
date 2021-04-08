import './App.css';
import Header from './Header'
import Home from './Home'

function App() {
  return (
    // We will use the BEM convention for naming
    <div className="app">
      <Header />
      {/* Header */}
      <Home />
      {/* Home */}
    </div>
  );
}

export default App;
