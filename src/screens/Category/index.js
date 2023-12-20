import React, { useState, useEffect } from "react";
import cn from "classnames";
import Breadcrumbs from "../../components/Breadcrumbs";
import styles from "./Category.module.sass";
import Filters from "../../components/Filters";
import DropdownMultiple from "../../components/DropdownMultiple";
import ProductItem from "../../components/ProductItem";
import Newsletter from "../../components/Newsletter";
import { useDispatch, useSelector } from "react-redux";
const breadcrumbs = [
  {
    title: "Home Page",
    url: "/",
  },
  {
    title: "Navigation",
    url: "/category",
  },
  {
    title: "Eye Care",
  },
];

const colorOptions = ["Red", "Green", "Blue", "Black"];
const categoryOptions = ["Treatments", "Moisturizers", "Featured"];
const priceOptions = ["$0 - $10", "$10 - $50", "$50 +"];

function Category() {
  const [color, setColor] = useState([]);
  const [category, setCategory] = useState([]);
  const [price, setPrice] = useState([]);
  const [tags, setTags] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    setTags([...color, ...category, ...price]);
  }, [color, category, price]);
  const { products } = useSelector((state) => state.category);
  return (
    <>
      <Breadcrumbs value={breadcrumbs} />
      <div className={cn("section", styles.category)}>
        <div className={cn("center")}>
          <div className={cn("stage")}>- Category Products</div>
          <h2 className={cn("title title_mb-lg")}>
            {products.TITLE} <br />
          </h2>

          <Filters tags={tags} setTags={setTags}>
            <DropdownMultiple
              title="Color"
              value={color}
              setValue={setColor}
              options={colorOptions}
            />
            <DropdownMultiple
              title="Category"
              value={category}
              setValue={setCategory}
              options={categoryOptions}
            />
            <DropdownMultiple
              title="Price Range"
              value={price}
              setValue={setPrice}
              options={priceOptions}
            />
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

export default Category;
