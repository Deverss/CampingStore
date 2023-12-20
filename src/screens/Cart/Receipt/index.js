import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import cn from "classnames";
import styles from "./Receipt.module.sass";

function Receipt({ value }) {
  const [subTotal, setSubtotal] = useState(0);

  useEffect(() => {
    // Update subTotal when the component mounts or when value changes
    if (value && Array.isArray(value)) {
      let newSum = 0;
      value.forEach((x) => {
        newSum += x?.Product?.PRICE * x?.QUANTITY;
      });
      setSubtotal(newSum);
    }
  }, [value]);

  const shipping = 15;
  const tax = 0.1;

  return (
    <div className={styles.receipt}>
      <div className={styles.category}>Cart Total</div>
      <div className={styles.wrap}>
        <div className={cn({ [styles.total]: "Total" }, styles.line)}>
          <div className={styles.text}>Subtotal:</div>
          <div className={styles.text}>${subTotal}</div>
        </div>
        <div className={cn({ [styles.total]: "Total" }, styles.line)}>
          <div className={styles.text}>Tax:</div>
          <div className={styles.text}>${subTotal * tax}</div>
        </div>
        <div className={cn({ [styles.total]: "Total" }, styles.line)}>
          <div className={styles.text}>Shipping:</div>
          <div className={styles.text}>${shipping}</div>
        </div>
        <div className={cn({ [styles.total]: "Total" }, styles.line)}>
          <div className={styles.text}>Total:</div>
          <div className={styles.text}>
            ${subTotal + subTotal * tax + shipping}
          </div>
        </div>
      </div>
      <Link
        className={cn("button button-wide button-green", styles.button)}
        to="/checkout"
      >
        Checkout
      </Link>
    </div>
  );
}

export default Receipt;
