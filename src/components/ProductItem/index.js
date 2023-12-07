import React from "react";
import { Link } from "react-router-dom";
import cn from "classnames";
import styles from "./ProductItem.module.sass";

function ProductItem({ className, item }) {
  return (
    <div className={cn(className, styles.product)}>
      {item.sale && <div className={styles.sale}>{item.sale} off</div>}
      {item.newest && <div className={styles.new}>New in</div>}
      <div className={styles.view}>
        <Link className={styles.preview} to={item.url}>
          <img className={styles.pic} src={item.img} alt={item.product} />
        </Link>
        <Link className={cn("button button-green", styles.button)} to="/cart">
          Add to Cart
        </Link>
      </div>
      <Link className={styles.name} to={item.url}>
        {item.product}
      </Link>
      <div className={styles.details}>
        <div className={cn(item.category.color, styles.category)}>{item.category.title}</div>
        <div className={styles.price}>
          {item.price.old && <span className={styles.old}>{item.price.old}</span>}
          <span className={styles.actual}>{item.price.actual}</span>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
