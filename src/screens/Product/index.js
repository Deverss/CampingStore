import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import cn from "classnames";
import $ from "jquery";
import styles from "./Product.module.sass";
import Breadcrumbs from "../../components/Breadcrumbs";
import Review from "../../components/Review";
import Newsletter from "../../components/Newsletter";
import Magnifier from "../../components/Magnifier";
import Counter from "../../components/Counter";
import Icon from "../../components/Icon";
import Details from "./Details";
import ProductsSlider from "./ProductsSlider";

import { products } from "../../mocks/products";

const breadcrumbs = [
  {
    title: "Home Page",
    url: "/",
  },
  {
    title: "Categories",
    url: "/category",
  },
  {
    title: "Sun Cate",
    url: "/product",
  },
  {
    title: "Sun Cream 950 ml",
  },
];

const pics = [
  {
    url: "/images/content/product/card-pic-1.png",
    large: "/images/content/product/card-pic-big-1.png",
  },
  {
    url: "/images/content/product/card-pic-2.png",
    large: "/images/content/product/card-pic-big-2.png",
  },
  {
    url: "/images/content/product/card-pic-3.png",
    large: "/images/content/product/card-pic-big-3.png",
  },
];

const settings = {
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  speed: 600,
  vertical: true,
  verticalSwiping: true,
  focusOnSelect: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        vertical: false,
        verticalSwiping: false,
        centerMode: true,
        centerPadding: 0,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        vertical: false,
        verticalSwiping: false,
      },
    },
  ],
};

function Product() {
  const [slide, setSlide] = useState(pics[0]);
  const [favorite, setFavorite] = useState(false);
  const slider = useRef();
  const product = products[0];

  useEffect(() => {
    const sliderProduct = slider.current;
    $(sliderProduct).slick(settings);
    $(sliderProduct).on("beforeChange", (e, s, c, n) => setSlide(pics[n]));
    return () => $(sliderProduct).slick("unslick").off("beforeChange");
  }, []);

  return (
    <>
      <Breadcrumbs className={styles.breadcrumbs} value={breadcrumbs} />
      <div className={cn("section")}>
        <div className={cn("center")}>
          <div className={styles.row}>
            <div className={styles.col}>
              <div className={cn(styles.gallery)}>
                <div className={styles.container}>
                  <div className={cn("slider-product", styles.slider)} ref={slider}>
                    {pics.map((x, i) => (
                      <div className={styles.preview} key={i}>
                        <img className={styles.pic} src={x.url} alt="" />
                      </div>
                    ))}
                  </div>
                </div>
                <div className={styles.wrap}>
                  {product.sale && <div className={cn(styles.status, styles.sale)}>{product.sale} off</div>}
                  {product.newest && <div className={cn(styles.status, styles.new)}>New in</div>}
                  <Magnifier imageSrc={slide.url} largeImageSrc={slide.large} />
                  <div className={styles.magnifier}>
                    <Icon className={cn("icon-magnifier")} name="magnifier" />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.col}>
              <div className={cn("stage", styles.stage)}>- Selling Fast</div>
              <h1 className={cn("title", styles.title)}>Sun Cream</h1>
              <div className={styles.details}>
                <div className={cn(product.category.color, styles.category)}>{product.category.title}</div>
                <div className={styles.prices}>
                  {product.price.old && <div className={styles.old}>{product.price.old}</div>}
                  <div className={styles.actual}>{product.price.actual}</div>
                </div>
              </div>
              <div className={styles.code}>
                SKU: <span className={styles.number}>{product.sku}</span>
              </div>
              <div className={styles.control}>
                <Counter className={styles.counter} count="1" />
                <Link className={cn("button button-green", styles.button)} to="/cart">
                  Add to Cart
                </Link>

                <button className={styles.favorite} onClick={() => setFavorite(!favorite)}>
                  <Icon className={cn("icon-heart", { [styles.active]: favorite }, styles.icon)} name={favorite ? "heart-fill" : "heart-border"} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Details />
      <Review stage="- Product Reviews" />
      <ProductsSlider items={products} />
      <Newsletter />
    </>
  );
}

export default Product;
