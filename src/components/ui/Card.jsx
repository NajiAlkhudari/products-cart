import React from "react";


const Card = ({  imageUrl, title, subtitle , onClick}) => {
  return (
    <div className="max-w-sm rounded overflow-hidden" onClick={onClick}>
      {imageUrl && (
        <img className="w-96 h-60 object-cover" src={imageUrl} alt={title} />
      )}
      <div className="px-6 py-4 flex justify-between">
        <div className="font-medium  mb-2">{title}</div>
        <p className="text-amber-900 text-base font-medium">{subtitle}</p>
      </div>
    </div>
  );
};

export default Card;


