import React, { useEffect } from "react";
import ListItem from "./ListItem";
import Header from "../Header";
import "./style.css";

const Listing = (props) => {
  const { getProducts, items } = props;
  console.log("props::", props);
  useEffect(() => {
    console.log("useEffect");
    getProducts();
  }, [getProducts]);

  return (
    <>
      <Header />
      <div className="listing">
        {items &&
          items.map((item) => {
            return <ListItem key={`item_${item.id}`} {...item} />;
          })}
      </div>
    </>
  );
};

export default Listing;
