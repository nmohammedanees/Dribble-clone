import React from 'react';
import Card from '../Card/Card';
import './Cardlist.css';
import Cardnotfound from '../Cardnotfound/Cardnotfound';
export default function Cardlist({ data }) {
  if (!data || data.length === 0) {
    return <Cardnotfound />;
  }
  return (
    <>
    
    <div className="card-grid">
      {data.map(card => (
        <Card key={card.name} card={card} />
      ))}
    </div>

    </>

  );
}
