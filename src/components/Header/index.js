import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import cn from "classnames";
import Basket from "../Basket";
import styles from "./Header.module.sass";
import Search from "./Search";
import Menu from "./Menu";
import Icon from "../Icon";
import Image from "../Image";

import { basket } from "../../mocks/products";

const Header = () => {
  const [visibleNav, setVisibleNav] = useState(false);
  const [activeCart, setActiveCart] = useState(false);
  const [basketItems, setBasketItems] = useState(basket);

  const handleClick = () => setVisibleNav(false);

  useEffect(() => {
    visibleNav ? document.body.classList.add("no-scroll") : document.body.classList.remove("no-scroll");
    basketItems.length ? setActiveCart(true) : setActiveCart(false);
  }, [visibleNav, basketItems]);

  return (
    <header className={styles.header}>
      <div className={cn("center", styles.container)}>
        <button className={cn(styles.burger, { [styles.active]: visibleNav })} onClick={() => setVisibleNav(!visibleNav)}></button>

        <Link className={styles.logo} to="/" onClick={handleClick}>
          <Image className={styles.logo_desktop} src="/images/logo.svg" srcDark="/images/logo-white.svg" />
          <Image className={styles.logo_mobile} src="/images/logo-mobile.svg" srcDark="/images/logo-mobile-white.svg" />
        </Link>

        <div className={styles.control}>
          <div className={cn(styles.item, styles.hidden)}>
            <Search position={"header"} />
          </div>
          <div className={styles.item}>
            <Link className={cn({ [styles.active]: activeCart })} to="/cart" onClick={handleClick}>
              <Icon className={cn("icon-cart icon-header")} name="cart" />
            </Link>
            <Basket className={cn({ [styles.visible]: activeCart }, styles.basket)} value={basketItems} setValue={setBasketItems} />
          </div>
          <div className={cn(styles.item, styles.hidden)}>
            <Link to="/login" onClick={handleClick}>
              <Icon className={cn("icon-user icon-header")} name="user" />
            </Link>
          </div>
        </div>
      </div>

      <Menu value={visibleNav} onChange={setVisibleNav} />
    </header>
  );
};

export default Header;
