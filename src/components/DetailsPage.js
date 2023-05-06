import React from 'react'
import "./DetailsPage.css"

function DetailsPage() {
  return (
    <div>
      <div className="container details">
            <div className="row">
                <div className="col xs={12} md={4}">
                Column
                </div>
                <div className="col xs={12} md={8}">
                    <div className="row">
                        TITLE
                    </div>
                    <div className="row">
                        RATING
                    </div>
                    <div className="row">
                        LANGUAGE
                    </div>
                    <div className="row">
                        GENRE
                    </div>
                    <div className="row">
                        TIME
                    </div>
                    <div className="row">
                        SUMMARY Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque fugit hic est corrupti ea odio ducimus at veniam reprehenderit rem!
                    </div>
                </div>
            </div>
            </div>
    </div>
  )
}

export default DetailsPage
