import React from "react";
import {AllItems} from "./AllItems";
import Item from "./Item";
import "../style/Home.css";

function Items() {
  return (
    <div className="menu">
      <h1 className="menuTitle">our Clothes</h1>
      <div className="menuList">
        {AllItems.map((item, key) => {
          return (
            <Item
              key={key}
              image={item.image}
              name={item.name}
              price={item.price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Items;