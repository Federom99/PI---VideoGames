import './App.css';
import { BrowserRouter, Route, Switch  } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Home from './components/Home';
import Details from './components/Details'
import CreateGame from './components/CreateGame';
import NotFound from './components/NotFound';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Switch>
      <Route exact path= '/'><LandingPage /></Route>
      <Route exact path= '/home'><Home /></Route>
      <Route  path='/videogames/:id' ><Details /> </Route> 
      <Route  path= '/videogames' ><CreateGame /></Route>
      <Route path="*" component={NotFound} />
      
                        
           
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
