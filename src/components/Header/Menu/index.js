import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import cn from "classnames";
import styles from "./Menu.module.sass";
import Icon from "../../Icon";
import Search from "../Search";
import SocialLinks from "../../SocialLinks";

const nav = [
  {
    url: "/",
    title: "Home",
  },
  {
    url: "/category",
    title: "Categories",
    menu: [
      {
        url: "/category",
        title: "Camp",
      },
      {
        url: "/category",
        title: "Gear",
      },
      {
        url: "/category",
        title: "Outfits",
      },
      {
        url: "/category",
        title: "Shoe",
      },
      {
        url: "/category",
        title: "Bag",
      },
      {
        url: "/category",
        title: "Electronics",
      },
      {
        url: "/category",
        title: "Knife",
      },
      {
        url: "/category",
        title: "Underwater",
      },
    ],
  },
  {
    url: "/blog",
    title: "Blog",
  },
  {
    url: "/about",
    title: "About",
  },
  {
    url: "/contacts",
    title: "Contact",
  },
  {
    url: "/games",
    title: "Games",
  }
];

const Menu = ({ value, onChange }) => {
  const [visibleSubMenu, setVisibleSubMenu] = useState(false);
  const current = useLocation().pathname;

  const handleClick = () => {
    onChange(false);
    setVisibleSubMenu(false);
  };

  return (
    <div className={cn(styles.menu, { [styles.visible_menu]: value }, { [styles.left]: visibleSubMenu })}>
      <div className={cn("center", styles.menu_center)}>
        <Search position={"menu"} />
        <div className={styles.container}>
          <div className={styles.menu_list}>
            {nav.map((x, i) =>
              x.menu ? (
                <div className={cn({ [styles.active_link]: visibleSubMenu }, styles.item, styles.submenu)} key={i}>
                  <div className={cn(styles.submenu_head)} onClick={() => setVisibleSubMenu(!visibleSubMenu)}>
                    {x.title}
                    <Icon className={cn("icon-arrow-next", styles.icon)} name="arrow-next" />
                  </div>
                  <div className={styles.submenu_body}>
                    <button className={(styles.button, styles.button_close)} onClick={handleClick}>
                      <Icon className={cn("icon-close", styles.icon)} name="close" />
                    </button>
                    <button className={(styles.button, styles.button_back)} onClick={() => setVisibleSubMenu(!visibleSubMenu)}>
                      <Icon className={cn("icon-arrow-prev", styles.icon)} name="arrow-prev" />
                    </button>
                    <div className={styles.submenu_group}>
                      {x.menu.map((s, a) => (
                        <Link className={styles.submenu_link} to={s.url} key={a} onClick={handleClick}>
                          {s.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link className={cn(styles.item, { [styles.active_link]: x.url === current })} to={x.url} key={i} onClick={handleClick}>
                  {x.title}
                </Link>
              )
            )}
          </div>
        </div>
        <Link className={cn("button button-green button-wide", styles.button)} to="/login" onClick={handleClick}>
          Login
        </Link>
        <SocialLinks position={"menu"} />
      </div>
    </div>
  );
};

export default Menu;
