import React, { useEffect, useState } from "react";
import "./newcollections.css";
import Item from "../item/item";

const NewCollections = () => {
  const [newCollections, setNewCollections] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/newcollections")
      .then((Response) => Response.json())
      .then((data) => setNewCollections(data));
  }, []);
  return (
    <div className="newcollections">
      <h1>New Collections</h1>
      <hr />
      <div className="collections">
        {newCollections.map((item, i) => (
          <Item
            key={i}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
    </div>
  );
};

export default NewCollections;
