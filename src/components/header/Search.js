import React, { useEffect, useState } from "react";
import Icon from "@mdi/react";
import { mdiMagnify } from "@mdi/js";

import "./Search.scss";

const categories = [
  "All Categories",
  "Deals",
  "Alexa Skills",
  "Amazon Devices",
  "Amazon Fashion",
  "Amazon Pantry",
  "Appliances",
  "Apps & Games",
  "Baby",
  "Beauty",
  "Big Bazaar",
  "Books",
  "Car & Motorbike",
  "Clothing & Accessories",
  "Collectibles",
  "Computers & Accessories",
  "Electronics",
  "Furniture",
  "Garden & Outdoors",
  "Gift Cards",
  "Grocery & Gourmet Foods",
  "Health & Personal Care",
  "Home & Kitchen",
  "Industrial & Scientific",
  "Jewellery",
  "Kindle Store",
  "Luggage & Bags",
  "Luxury Beauty",
  "Movies & TV Shows",
  "Music",
  "Musical Instruments",
  "Office Products",
  "Pet Supplies",
  "Prime Video",
  "Shoes & Handbags",
  "Software",
  "Sports, Fitness & Outdoors",
  "Tools & Home Improvement",
  "Toys & Games",
  "Under ₹500",
  "Video Games",
  "Watches"
];

function Search() {
  const [category, setCategory] = useState(10);
  const [count, setCount] = useState(10);

  useEffect(() => {
    console.log(category);
  }, [category]);
  return (
    <div className="search">
      <select
        className="search__select"
        value={category}
        onChange={(e) => setCategory(+e.target.value)}
      >
        {categories.map((o, i) => (
          <option key={i} value={i}>
            {o}
          </option>
        ))}
      </select>
      <input className="search__input" type="text" />
      <button className="search__button" onClick={(e) => setCount(count + 1)}>
        <Icon path={mdiMagnify} size={1.4} />
      </button>
    </div>
  );
}

export default Search;
