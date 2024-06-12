import React from 'react'
import './Cardnotfound.css';
const Cardnotfound = () => {
  return (
    <div className="notfoundcontainer">
        <img  src="./Dribblenotfound.jpg" className="images"/>
        <div className="result">
            <h3>No results found</h3>
            <p>It seems we can't find any results based on your search</p>

        </div>
    </div>
  )
}

export default Cardnotfound;