import React from 'react';

const StarRating = ({ stars }) => {
  const fullStars = Math.floor(stars);
  const hasHalfStar = stars % 1 !== 0;

  const renderStars = () => {
    const starElements = [];

    for (let i = 0; i < fullStars; i++) {
      starElements.push(<span key={i}>&#9733;</span>);
    }

    if (hasHalfStar) {
      starElements.push(<span key="half" style={{ width: '50%', overflow: 'hidden' }}>&#9733;</span>);
    }

    return starElements;
  };

  return <div>{renderStars()}</div>;
};

export default StarRating;
