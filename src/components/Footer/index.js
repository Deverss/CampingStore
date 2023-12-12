import React from "react";
import { Link } from "react-router-dom";
import cn from "classnames";
import styles from "./Footer.module.sass";
import SocialLinks from "../SocialLinks";
import Theme from "../Theme";
import Image from "../Image";

const nav = [
  {
    category: "Categories",
    // eslint-disable-next-line no-sparse-arrays
    menu: [
      {
        url: "/category",
        title: "On Sale",
      },
      {
        url: "/category",
        title: "Featured",
      },
      ,
    ],
  },
  {
    category: "Legal",
    menu: [
      {
        url: "/legal-page",
        title: "Terms of Service",
      },
      {
        url: "/legal-page",
        title: "Returns Policy",
      },
      {
        url: "/legal-page",
        title: "Shipping",
      },
      {
        url: "/legal-page",
        title: "Data Protection",
      },
    ],
  },
  {
    category: "Company",
    menu: [
      {
        url: "/about",
        title: "About",
      },
      {
        url: "/faq",
        title: "Faq",
      },
      {
        url: "/contacts",
        title: "Contact",
      }
    ],
  },
];

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={cn("center", styles.center)}>
        <div className={styles.row}>
          <div className={styles.col}>
            <Link className={styles.logo} to="/">
              <Image className={styles.logo_desktop} src="/images/logo.svg" srcDark="/images/logo-white.svg" />
              <Image className={styles.logo_mobile} src="/images/logo-mobile.svg" srcDark="/images/logo-mobile-white.svg" />
            </Link>

            <div className={styles.copyright}>© 2023 - All rights reserved</div>
            <SocialLinks position={"footer"} />

            <Theme />
          </div>

          {nav.map((x, i) => (
            <div className={styles.col} key={i}>
              <div className={styles.category}>{x.category}</div>
              <div className={styles.menu}>
                {x.menu.map((s, a) => (
                  <Link className={styles.link} to={s.url} key={a}>
                    {s.title}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
