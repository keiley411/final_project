import React from "react";

const Favourite = () => {
  const [favourite, setFavourite] = useState(0);
  const rankings = [1, 2, 3, 4, 5];
  return (
    <p className="favcomponent">
      {rankings.map((rank) => {
        return (
          <button className="favbutton" onClick={() => setFavourite(rank)}>
            {favourite >= rank ? "★" : "☆"}
          </button>
        );
      })}
    </p>
  );
};

export default Favourite;
