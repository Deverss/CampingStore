import React from "react";
import { Link } from "react-router-dom";
import cn from "classnames";
import styles from "./Main.module.sass";

function Main() {
  return (
    <div className={cn("section", styles.main)}>
      <div className={cn("center")}>
        <div className={styles.container}>
          <div className={styles.details}>
            <div className={cn("stage", styles.stage)}>Camping Products</div>
            <h1 className={cn("title", styles.title)}>Camping experience Great similar to LPL</h1>
            <Link className={cn("button button-green")} to="/">
              Shop Now
            </Link>
          </div>
          <div className={styles.preview}>
            <img className={styles.pic} src="/images/main-pic.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
