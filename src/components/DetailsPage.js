import React, { useEffect, useState } from 'react'
import "./DetailsPage.css"
import { Link } from 'react-router-dom';

function DetailsPage() {
  
    const [shows, setShows] = useState([]);

    const getDetail = async () => {
        const response = await fetch("https://api.tvmaze.com/search/shows?q=all");
        
        setShows(await response.json());
        
    }

    useEffect( () => {
        getDetail();
    }, []);
    
  
    return (
    <div>

        {


            shows.map((e) => {
                            
                const {show, score} = e;
                const {id, image, language, name, rating, runtime, summary, genres, type} = e.show;
                
                

                return (
                    <div className="container-fluid details">
                        <div className="row">
                            <div className="col-12 col-md-4">
                            <img src='https://static.tvmaze.com/uploads/images/medium_portrait/425/1064746.jpg' alt="" className='rounded' width={"200"}/>
                            </div>
                            <div className="col-12 col-md-8">
                                <div className="row">
                                    <h1>{name}</h1>
                                </div>
                                <div className="row">
                                    RATING
                                </div>
                                <div className="row">
                                    TYPE: {type}
                                </div>
                                <div className="row">
                                    LANGUAGE: {language}
                                </div>
                                <div className="row">
                                    GENRE: {genres}
                                </div>
                                <div className="row">
                                    RUNTIME: {runtime}
                                </div>
                                <div className="row">
                                    {summary}
                                </div>
                                <Link to="/booking">
                                <div className='row'>
                                        <button>Book Now</button>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        </div>
                )

            
            })
        }
        
        
    </div>
  )
}

export default DetailsPage
