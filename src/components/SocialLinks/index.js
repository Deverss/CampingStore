import React from "react";
import cn from "classnames";
import styles from "./Social.module.sass";
import Icon from "../Icon";

const SocialLinks = ({ position }) => {
  return (
    <div className={styles[position]}>
      <a className={styles.link} href="#" target="_blank" rel="noreferrer">
        <Icon className={cn("icon-instagram", styles.icon)} name="instagram" />
      </a>
      <a className={styles.link} href="#" target="_blank" rel="noreferrer">
        <Icon className={cn("icon-twitter", styles.icon)} name="twitter" />
      </a>
      <a className={styles.link} href="#" target="_blank" rel="noreferrer">
        <Icon className={cn("icon-facebook", styles.icon)} name="facebook" />
      </a>
    </div>
  );
};

export default SocialLinks;
