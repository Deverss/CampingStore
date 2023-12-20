import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import cn from "classnames";
import styles from "./Menu.module.sass";
import Icon from "../../Icon";
import Search from "../Search";
import SocialLinks from "../../SocialLinks";
import { useDispatch, useSelector } from "react-redux";
import { AuthAction } from "../../../redux/auth/index";
import { categoryAction } from "../../../redux/category";
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
        title: "On Sale",
      },
      {
        url: "/category",
        title: "Featured",
      },
      {
        url: "/category",
        title: "Masks",
      },
      {
        url: "/category",
        title: "Eye Care",
      },
      {
        url: "/category",
        title: "Moisturizers",
      },
      {
        url: "/category",
        title: "Treatments",
      },
      {
        url: "/category",
        title: "Night Care",
      },
      {
        url: "/category",
        title: "Sun Care",
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
    url: "",
    title: "Logout",
  },
];

const Menu = ({ value, onChange }) => {
  const [visibleSubMenu, setVisibleSubMenu] = useState(false);
  const current = useLocation().pathname;
  const dispatch = useDispatch();
  const handleClick = (id) => {
    onChange(false);
    setVisibleSubMenu(false);
    dispatch(categoryAction.getProductOfCategory(id));
   
  };
  const handleLogout = () => {
    const refreshToken = localStorage.getItem("token");
    const res = dispatch(AuthAction.logout(refreshToken));
    res.then((res) => console.log("a", res));
  };
  useEffect(() => {
    dispatch(categoryAction.getAllCategory());
  }, [dispatch]);
  const { categories } = useSelector((state) => state.category);
  return (
    <div
      className={cn(
        styles.menu,
        { [styles.visible_menu]: value },
        { [styles.left]: visibleSubMenu }
      )}
    >
      <div className={cn("center", styles.menu_center)}>
        <Search position={"menu"} />
        <div className={styles.container}>
          <div className={styles.menu_list}>
            {nav.map((x, i) =>
              x.menu ? (
                <div
                  className={cn(
                    { [styles.active_link]: visibleSubMenu },
                    styles.item,
                    styles.submenu
                  )}
                  key={i}
                >
                  <div
                    className={cn(styles.submenu_head)}
                    onClick={() => setVisibleSubMenu(!visibleSubMenu)}
                  >
                    {x.title}
                    <Icon
                      className={cn("icon-arrow-next", styles.icon)}
                      name="arrow-next"
                    />
                  </div>
                  <div className={styles.submenu_body}>
                    <button
                      className={(styles.button, styles.button_close)}
                      onClick={handleClick}
                    >
                      <Icon
                        className={cn("icon-close", styles.icon)}
                        name="close"
                      />
                    </button>
                    <button
                      className={(styles.button, styles.button_back)}
                      onClick={() => setVisibleSubMenu(!visibleSubMenu)}
                    >
                      <Icon
                        className={cn("icon-arrow-prev", styles.icon)}
                        name="arrow-prev"
                      />
                    </button>
                    <div className={styles.submenu_group}>
                      {categories.map((s, a) => (
                        <Link
                          className={styles.submenu_link}
                          to={`/category/${s.TITLE}`}
                          key={a}
                          onClick={() => handleClick(s.id)}
                        >
                          {s?.TITLE}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  className={cn(styles.item, {
                    [styles.active_link]: x.url === current,
                  })}
                  to={x.url}
                  key={i}
                  onClick={x.title === "Logout" ? handleLogout : handleClick}
                >
                  {x.title}
                </Link>
              )
            )}
          </div>
        </div>
        <Link
          className={cn("button button-green button-wide", styles.button)}
          to="/login"
          onClick={handleClick}
        >
          Login
        </Link>
        <SocialLinks position={"menu"} />
      </div>
    </div>
  );
};

export default Menu;
