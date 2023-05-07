import React from 'react'
import "./Booking.css"
import { Link } from 'react-router-dom'

function Booking() {
  return (
    <div className='container booking'>
        <div className="col-12 col-md-8">
            <div><Link to="/details">
                    <button>BACK TO DETAILS PAGE</button>
                </Link>
            </div>
            <div className="row">
                <div className="col-6">
                    MOVIE NAME
                </div>
                <div className="col-6">
                    PRICE
                </div>
            </div>
            <div className="row">
                <div className="col-6">
                    DATE
                </div>
                <div className="col-6">
                    TIME
                </div>
            </div>
            <h2>PERSONAL DETAILS</h2>
            <form>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
                    </div>
                    <div class="form-group form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                        <label class="form-check-label" for="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Booking
