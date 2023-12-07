import React from "react";
import { Link } from "react-router-dom";
import cn from "classnames";
import $ from "jquery";
import styles from "./Items.module.sass";
import Counter from "../../../components/Counter";
import Icon from "../../../components/Icon";

function Items({ items, handlerItems }) {
  const filterItems = (id) => handlerItems((prev) => prev.filter((p) => p.id !== id));

  const removeItem = (e, i) => {
    $(e.target.parentNode)
      .closest(".basket-item")
      .animate({ height: 0, opacity: 0, marginBottom: 0, paddingTop: 0, paddingBottom: 0 }, 300, () => filterItems(i));
  };

  return (
    <>
      {items.map((x) => (
        <div className={cn("basket-item", styles.item)} key={x.id}>
          <Link className={styles.preview} to={x.link}>
            <img src={x.img} alt="" />
          </Link>
          <div className={styles.details}>
            <Link className={styles.product} to={x.link}>
              {x.product}
            </Link>
            <div className={styles.price}>
              {x.price.old && <div className={styles.old}>{x.price.old}</div>}
              <div className={styles.actual}>{x.price.actual}</div>
            </div>

            <div className={styles.control}>
              <Counter className={styles.counter} value={x.count} />

              <button className={cn(styles.remove)} onClick={(e) => removeItem(e, x.id)}>
                <Icon className={cn("icon-close", styles.icon)} name="close" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Items;
