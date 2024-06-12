import React, { useState } from 'react';
import "./Card.css";
import { FaRegHeart, FaEye, FaRegBookmark, FaHeart } from 'react-icons/fa';

export default function Card({ card }) {
  const [isLiked, setIsLiked] = useState(card.isliked);
  const [likeCount, setLikeCount] = useState(card.likecount);
  function formatNumber(num) {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'k';
    }
    return num;
  }
  
  const toggleHeart = () => {
    if (isLiked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
    setIsLiked(!isLiked);
  };

  return (
    <div className="card">
      <div className="card-body">
        <div className="card-picture" style={{ backgroundImage: `url(${card.imagelink})` }}>
          <div className="card-hover">
            <h4>{card.name}</h4>
            <div className="card-hover-icons">
              <div className="carddyy">
                <FaRegBookmark />
              </div>
              <div className="carddyy" onClick={toggleHeart}>
                {isLiked ? <FaHeart style={{ color: 'pink' }} /> : <FaRegHeart />}
              </div>
            </div>
          </div>
        </div>
        <div className="card-likes">
          <div className="card-profile">
            <img src={card.profilephotolink} alt="" className="avatar" />
            <a href="#">{card.authorname}</a>
          </div>
          <ul className="card-list-inline">
            <li>{isLiked ? <FaHeart style={{ color: 'pink' }} /> : <FaRegHeart />} {formatNumber(likeCount)}</li>
            <li><FaEye /> {formatNumber(card.viewcount)}</li>
          </ul>
        </div>
      </div>
      <div className="card-footer"></div>
    </div>
  );
};
