import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      
      <Route exact path= '/' element= {<LandingPage />} />
     
    </div>
    </BrowserRouter>
  );
}

export default App;
