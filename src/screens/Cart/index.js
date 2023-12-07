import React, { useState } from "react";
import cn from "classnames";
import styles from "./Cart.module.sass";
import Breadcrumbs from "../../components/Breadcrumbs";
import Items from "./Items";
import Receipt from "./Receipt";
import Newsletter from "../../components/Newsletter";

const breadcrumbs = [
  {
    title: "Home Page",
    url: "/",
  },
  {
    title: "Categories",
    url: "/category",
  },
  {
    title: "Shopping Cart",
  },
];

const receipt = {
  category: "Cart Total",
  items: [
    {
      title: "Subtotal",
      value: "$209",
    },
    {
      title: "Tax",
      value: "$20.73",
    },
    {
      title: "Shipping",
      value: "$15",
    },
    {
      title: "Total",
      value: "$224",
    },
  ],
};

function Cart() {
  const [items, setItems] = useState([
    {
      id: 1,
      product: "Eye Mask Gel",
      link: "/product",
      img: "/images/content/products/product-pic-4.png",
      price: {
        actual: "$180",
        old: "$127",
      },
      count: 2,
    },
    {
      id: 2,
      product: "Day Eye Cream",
      link: "/product",
      img: "/images/content/products/product-pic-6.png",
      price: {
        actual: "$97",
      },
      count: 1,
    },
  ]);

  const handlerItems = (items) => setItems(items);

  return (
    <>
      <Breadcrumbs value={breadcrumbs} />
      <div className={cn("section")}>
        <div className={cn("center")}>
          <div className={styles.head}>
            <div className={styles.box}>
              <div className={cn("stage")}>- Your Cart</div>
              <h2 className={cn("title")}>Shopping Cart</h2>
            </div>
            <button className={cn("button button-border")}>Clear All</button>
          </div>

          <div className={styles.row}>
            <div className={styles.col}>
              <div className={styles.list}>
                <Items items={items} handlerItems={handlerItems} />
              </div>
            </div>
            <div className={styles.col}>
              <Receipt value={receipt} />
            </div>
          </div>
        </div>
      </div>
      <Newsletter />
    </>
  );
}

export default Cart;
