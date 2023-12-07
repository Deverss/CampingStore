import React from "react";
import { Link } from "react-router-dom";
import cn from "classnames";
import $ from "jquery";
import styles from "./Basket.module.sass";
import Icon from "../Icon";

const Basket = ({ className, value, setValue, checkout }) => {
  const filterItems = (id) => setValue((prev) => prev.filter((p) => p.id !== id));

  const removeItem = (e, id) => {
    $(e.target.parentNode)
      .closest(".basket-item")
      .animate({ height: 0, opacity: 0, marginBottom: 0 }, 300, () => filterItems(id));
  };

  return (
    <>
      <div className={className}>
        <div className={cn(styles.header, { [styles.checkout]: checkout })}>
          {checkout && <div className={styles.category}>My Cart</div>}
          <div className={styles.list}>
            {value.map((x) => (
              <div className={cn("basket-item", styles.item)} key={x.id}>
                <Link className={styles.preview} to={x.url}>
                  <img className={styles.pic} src={x.img} alt="" />
                </Link>
                <div className={styles.details}>
                  <Link className={styles.product} to={x.url}>
                    {x.product}
                  </Link>
                  <div className={styles.price}>
                    {x.price.old && <div className={styles.old}>{x.price.old}</div>}
                    <div className={styles.actual}>{x.price.actual}</div>
                  </div>
                </div>
                <button className={styles.remove} onClick={(e) => removeItem(e, x.id)}>
                  <Icon className={cn("icon-close", styles.icon)} name="close" />
                </button>
              </div>
            ))}
          </div>
          <div className={styles.total}>
            <div className={styles.text}>Total:</div>
            <div className={styles.text}>$320</div>
          </div>

          {checkout ? (
            <Link className={cn("button-border button-wide", styles.button)} to="/cart">
              Edit Cart
            </Link>
          ) : (
            <div className={styles.buttons}>
              <Link className={cn("button-green", styles.button)} to="/checkout">
                Checkout
              </Link>

              <Link className={cn("button-border", styles.button)} to="/cart">
                Edit Cart
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Basket;
