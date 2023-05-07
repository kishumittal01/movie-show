
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import DetailsPage from './components/DetailsPage';
import Home from './components/Home';
import Booking from './components/Booking';
import Header from './components/Header';

function App() {
  
  return (
    
    <Router>
        <div className="App">
          
          <Routes>
            <Route exact path= "/" element={(
              <> 
                <Header />   
                <Home />
              </>
              )}
            />
            <Route exact path= "/details" element={(
              <> 
                <Header />   
                <DetailsPage/>
              </>
              )}
            />
            <Route exact path= "/booking" element={(
              <>    
                <Booking/>
              </>
              )}
            />
          
          
          </Routes>
        </div>
    </Router>
  );
}

export default App;
