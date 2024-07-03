import React from "react";
import Card from "../Card/Card";
import "./Cardlist.css";
import Cardnotfound from "../Cardnotfound/Cardnotfound";
export default function Cardlist({ data }) {
  if (!data || data.length === 0) {
    return <Cardnotfound />;
  }
  return (
    <>
      <div className="card-grid">
        {data.map((card) => (
          <Card key={card.name} card={card} />
        ))}
      </div>
      <button
        style={{
          position: "relative",
          placeItems: "center",
          left: "50%",
          padding: "10px 20px",
          borderRadius: "50px",
          border: "none",
          fontSize: "12px",
          fontWeight: "600",
          color:"grey",
          fontFamily:
            '"Mona Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
        }}
      >
        Load More Work
      </button>
    </>
  );
}
