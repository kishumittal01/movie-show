import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import "./Home.css"

function Home() {
    
    const [shows, setShows] = useState([]);

    const getDetail = async () => {
        const response = await fetch("https://api.tvmaze.com/search/shows?q=all");
        
        setShows(await response.json());
        
    }

    useEffect( () => {
        getDetail();
    }, []);
    

    return (
    <div className='container mt-5'>
        <div className="row text-center">


            {
                shows.map((e) => {
                  
                    const {show, score} = e;
                    const {id, image, language, name, rating, schedule, summary, genres} = e.show;
                    
                    
                  
                return (
                  <div className="col-10 col-md-6 mt-5">
                        <div className="card p-2">
                            <div className="d-flex align-items-center">
                                <div className="image">
                                    <img src='https://static.tvmaze.com/uploads/images/medium_portrait/425/1064746.jpg' alt="" className='rounded' width={"200"}/>
                                </div>
                                <div className="ml-3 w-100">
                                    <h4 className="mb-0 mt-0 textLeft">{name}</h4> <span className="textLeft">{score}</span>
                                    <div className="p-2 mt-2 d-flex justify-content-between rounded text-white stats homeCard">
                                        <div className="d-flex flex-column">
                                            <span className="articles">{id}</span>
                                             <span className="number1">{genres}</span>
                                             <a >{show.url}</a>
                                        </div>
                                    </div>
                                    
                                    <Link to="/details">
                                        <div className="button"><button>View Details</button></div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                  )
                })
            }


            
        </div>
    </div>
  )
}

export default Home
