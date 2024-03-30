import React,{useState} from "react";
import "./Rating.scss"
const Rating = () => {
  const [rating, setRating] = useState(0);
  const rankings = [1, 2, 3, 4, 5];
  return (
    <p className="favcomponent">
      {rankings.map((rank) => {
        return (
          <button className="favbutton" onClick={() => setRating(rank)}>
            {rating >= rank ? "★" : "☆"}
          </button>
        );
      })}
    </p>
  );
};

export default Rating;
