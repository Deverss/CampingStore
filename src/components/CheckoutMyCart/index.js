import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import cn from "classnames";
import $ from "jquery";
import styles from "./Basket.module.sass";
import Icon from "../Icon";
import { useDispatch } from "react-redux";
import { cartAction } from "../../redux/cart/index";
const CheckoutMyCart = ({ className, value, setValue, checkout }) => {
  const [sum, setSum] = useState(0);
  const dispatch = useDispatch();
  useEffect(() => {
    if (value) {
      let newSum = 0;
      value.forEach((x) => {
        newSum += x?.Product?.PRICE * x?.QUANTITY;
      });
      setSum(newSum);
    }
  }, [value]);
  const filterItems = (id) =>
    setValue((prev) => prev.filter((p) => p.id !== id));
  const removeItem = (e, id) => {
    dispatch(cartAction.deleteProductCart(id));
    setSum(0);
    $(e.target.parentNode)
      .closest(".basket-item")
      .animate({ height: 0, opacity: 0, marginBottom: 0 }, 300, () =>
        filterItems(id)
      );
  };

  const shipping = 15;
  const tax = 0.1;

  return (
    <>
      <div className={className}>
        <div className={cn(styles.header, { [styles.checkout]: checkout })}>
          {checkout && <div className={styles.category}>My Cart</div>}
          <div className={styles.list}>
            {value &&
              value.map((x) => (
                <div
                  className={cn("basket-item", styles.item)}
                  key={x?.Product?.id}
                >
                  <Link className={styles.preview} to={"/cart"}>
                    <img
                      className={styles.pic}
                      src={x?.Product?.IMAGE_PATH}
                      alt=""
                    />
                  </Link>
                  <div className={styles.details}>
                    <Link className={styles.product} to={"/cart"}>
                      {x?.Product?.NAME}
                    </Link>
                    <div className={styles.price}>
                      <div className={styles.actual}>
                        ${x?.Product?.PRICE * x?.QUANTITY}
                      </div>
                    </div>
                  </div>
                  <button
                    className={styles.remove}
                    onClick={(e) => removeItem(e, x?.Product?.id)}
                  >
                    <Icon
                      className={cn("icon-close", styles.icon)}
                      name="close"
                    />
                  </button>
                </div>
              ))}
          </div>
          <div className={styles.total}>
            <div className={styles.text}>SubTotal:</div>
            <div className={styles.text}>${sum}</div>
          </div>
          <div className={styles.total}>
            <div className={styles.text}>Tax:</div>
            <div className={styles.text}>10%</div>
          </div>
          <div className={styles.total}>
            <div className={styles.text}>Shipping:</div>
            <div className={styles.text}>${shipping}</div>
          </div>
          <div className={styles.total}>
            <div className={styles.text}>Total:</div>
            <div className={styles.text}>${sum + sum * tax + shipping}</div>
          </div>

          {checkout ? (
            <Link
              className={cn("button-border button-wide", styles.button)}
              to="/cart"
            >
              Edit Cart
            </Link>
          ) : (
            <div className={styles.buttons}>
              <Link
                className={cn("button-green", styles.button)}
                to="/checkout"
              >
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

export default CheckoutMyCart;
