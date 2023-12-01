import React from "react";
import cn from "classnames";
import styles from "./Newsletter.module.sass";
import TextInput from "../TextInput";

function Newsletter() {
  return (
    <div className={cn("section", styles.Newsletter)}>
      <div className={cn("center")}>
        <div className={styles.container}>
          <div className={cn("stage", styles.stage)}>- Our Newsletter</div>
          <h2 className={cn("title title_mb-md", styles.title)}>Sign Up to our Newsletter</h2>
          <form className={styles.form} action="">
            <TextInput className={styles.field} type="text" placeholder="Your Email" />
            <div className={styles.buttons}>
              <button className={cn("button button-green button-wide", styles.button)} type="submit">
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
