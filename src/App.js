import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="App">
        <Router>
          <Header></Header>
          <Switch>
              <Route path="/">
                  <Home></Home>
              </Route>
              <Route path= "/home">
                  <Home></Home>
              </Route>
              <Route path="/contact">
                  <Contact></Contact>
              </Route>
          </Switch>
          <Footer></Footer>
        </Router>
    </div>
  );
}

export default App;
