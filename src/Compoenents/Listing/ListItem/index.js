import React from "react";
import "./style.css";

const ListItem = (props) => {
  const { name, image, language, summary, genres, rating } = props;
  const imageSrc = image.medium;

  return (
    <div className="list-item">
      <div className="item-img">
        <img className="thumbnail" src={imageSrc} alt="" />
      </div>
      <div className="item-desc">
        <div className="item-header">{`${name} (${language})`} </div>
        <div className="genre">Genre: {genres.join(", ")} </div>
        <div className="rating">Rating: {rating.average} </div>
      </div>
    </div>
  );
};

export default ListItem;
