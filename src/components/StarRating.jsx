import React, { useState } from "react";

const StarRating = () => {
  const [rating, setRating] = useState(0);

  const handleMouseOver = (index) => {
    setRating(index + 1);
  };

  const handleMouseOut = () => {
    setRating(0);
  };

  const handleClick = (index) => {
    setRating(index + 1);
  };

  return (
    <div>
      {[...Array(5)].map((_, index) => {
        return (
          <span
            key={index}
            onMouseOver={() => handleMouseOver(index)}
            onMouseOut={handleMouseOut}
            onClick={() => handleClick(index)}
            style={{
              size:"30px",
              cursor: "pointer",
              color: rating > index ? "yellow" : "gray",
            }}
          >
            &#9733;
          </span>
        );
      })}
      {/* <p>
        {rating} star{rating !== 1 && "s"}
      </p> */}
    </div>
  );
};

export default StarRating;
