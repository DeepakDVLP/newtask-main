import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <>
      <Router>
        <Switch>
         
          <Route exact path='/' component={Home} />
          {/* <Route exact path='/nav' component={Navbar} /> */}
        </Switch>
      </Router>
    </>
  );
}

export default App;
