import React from "react";
import { Link } from "react-router-dom";
import cn from "classnames";
import styles from "./Receipt.module.sass";

function Receipt({ value }) {
  return (
    <div className={styles.receipt}>
      <div className={styles.category}>{value.category}</div>
      <div className={styles.wrap}>
        {value.items.map((x, i) => (
          <div className={cn({ [styles.total]: x.title === "Total" }, styles.line)} key={i}>
            <div className={styles.text}>{x.title}:</div>
            <div className={styles.text}>{x.value}</div>
          </div>
        ))}
      </div>
      <Link className={cn("button button-wide button-green", styles.button)} to="/checkout">
        Checkout
      </Link>
    </div>
  );
}

export default Receipt;
