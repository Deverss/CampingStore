import React, { useState, useEffect } from "react";
import cn from "classnames";
import Breadcrumbs from "../../components/Breadcrumbs";
import styles from "./Search.module.sass";
import Filters from "../../components/Filters";
import DropdownMultiple from "../../components/DropdownMultiple";
import ProductItem from "../../components/ProductItem";
import Newsletter from "../../components/Newsletter";

import { products } from "../../mocks/products";

const breadcrumbs = [
  {
    title: "Home Page",
    url: "/",
  },
  {
    title: "Search",
    url: "/search",
  },
  {
    title: "Search Results",
  },
];

const colorOptions = ["Red", "Green", "Blue", "Black"];
const categoryOptions = ["Treatments", "Moisturizers", "Featured"];
const priceOptions = ["$0 - $10", "$10 - $50", "$50 +"];

function Search() {
  const [color, setColor] = useState([]);
  const [category, setCategory] = useState([]);
  const [price, setPrice] = useState([]);
  const [tags, setTags] = useState([]);

  useEffect(() => {
    setTags([...color, ...category, ...price]);
  }, [color, category, price]);
  return (
    <>
      <Breadcrumbs className={styles.breadcrumbs} value={breadcrumbs} />
      <div className={cn("section", styles.category)}>
        <div className={cn("center")}>
          <div className={cn("stage")}>- Search Results</div>
          <h2 className={cn("title title_mb-md")}>
            Eye Care Products for <br />
            Tired Eyes
          </h2>

          <div className={styles.result}>
            <span className={styles.counter}>6</span> products found
          </div>

          <Filters tags={tags} setTags={setTags}>
            <DropdownMultiple title="Color" value={color} setValue={setColor} options={colorOptions} />
            <DropdownMultiple title="Category" value={category} setValue={setCategory} options={categoryOptions} />
            <DropdownMultiple title="Price Range" value={price} setValue={setPrice} options={priceOptions} />
          </Filters>

          <div className={styles.list}>
            {products.map((x, i) => (
              <ProductItem className={styles.product} item={x} key={i} />
            ))}
          </div>
        </div>
      </div>
      <Newsletter />
    </>
  );
}

export default Search;
