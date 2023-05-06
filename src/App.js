
import { useEffect, useState } from 'react';
import './App.css';
import DetailsPage from './components/DetailsPage';
import Home from './components/Home';

function App() {
  
  const [data, setData] = useState();

  //get API 
  
  useEffect(() => {
    
    const url = "https://api.tvmaze.com/search/shows?q=all"

    fetch(url)
      .then(response => response.json()).then(json => {
        console.log("API DATA SUCCESS", json)
        setData(json)
      }).catch(e => {
        console.log("e", e)
      })
  }, [])
  
  
  return (
    <div className="App">
      
      <Home />
      <DetailsPage/>
      

    </div>
  );
}

export default App;
