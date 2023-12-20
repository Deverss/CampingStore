import React, { useState, useEffect, useRef } from "react";
import cn from "classnames";
import styles from "./Product.module.sass";
import Breadcrumbs from "../../components/Breadcrumbs";
import Review from "../../components/Review";
import Newsletter from "../../components/Newsletter";
import Magnifier from "../../components/Magnifier";
import Counter from "../../components/Counter";
import Icon from "../../components/Icon";
import Details from "./Details";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { PostAction } from "../../redux/product/index";
import { cartAction } from "../../redux/cart/index";
import { Link } from "react-router-dom";
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

// const settings = {
//   slidesToShow: 3,
//   slidesToScroll: 1,
//   arrows: true,
//   speed: 600,
//   vertical: true,
//   verticalSwiping: true,
//   focusOnSelect: true,
//   responsive: [
//     {
//       breakpoint: 1024,
//       settings: {
//         vertical: false,
//         verticalSwiping: false,
//         centerMode: true,
//         centerPadding: 0,
//       },
//     },
//     {
//       breakpoint: 768,
//       settings: {
//         slidesToShow: 1,
//         vertical: false,
//         verticalSwiping: false,
//       },
//     },
//   ],
// };

function Product() {
  const [favorite, setFavorite] = useState(false);
  const slider = useRef();
  const { id } = useParams();
  const dispatch = useDispatch();
  const [counterValue, setCounterValue] = useState(1);
  const handleCounterChange = (newValue) => {
    setCounterValue(newValue);
  };
  const onAddToCart = (id, quantity) => {
    dispatch(cartAction.addProductCart({ id, quantity }));
  };

  useEffect(() => {
    const getProductId = async () => {
      dispatch(PostAction.getProductId(id));
    };
    getProductId();
  }, [id]);
  const { productItem } = useSelector((state) => state.product);
  const accessToken = localStorage.getItem("accessToken");
  return (
    <>
      <Breadcrumbs className={styles.breadcrumbs} value={breadcrumbs} />
      <div className={cn("section")}>
        <div className={cn("center")}>
          <div className={styles.row}>
            <div className={styles.col}>
              <div className={cn(styles.gallery)}>
                <div className={styles.container}>
                  <div
                    className={cn("slider-product", styles.slider)}
                    ref={slider}
                  >
                    <div className={styles.preview} key={productItem.id}>
                      {productItem && productItem.IMAGE_PATH && (
                        <img
                          className={styles.pic}
                          src={productItem.IMAGE_PATH}
                          alt={productItem.NAME}
                        />
                      )}
                    </div>
                  </div>
                </div>
                <div className={styles.wrap}>
                  <Magnifier
                    imageSrc={productItem?.IMAGE_PATH}
                    largeImageSrc={productItem?.IMAGE_PATH}
                  />
                  <div className={styles.magnifier}>
                    <Icon className={cn("icon-magnifier")} name="magnifier" />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.col}>
              <div className={cn("stage", styles.stage)}>- Selling Fast</div>
              <h1 className={cn("title", styles.title)}>{productItem?.NAME}</h1>
              <div className={styles.details}>
                <div className={cn(styles.category)}>
                  {productItem?.Category?.TITLE}
                </div>
                <div className={styles.prices}>
                  <div className={styles.actual}>{productItem?.PRICE}</div>
                </div>
              </div>
              <div className={styles.code}>
                STOCK:{" "}
                <span className={styles.number}>{productItem?.STOCK}</span>
              </div>
              <div className={styles.control}>
                <Counter
                  className={styles.counter}
                  value={counterValue}
                  onCounterChange={handleCounterChange}
                />
                {accessToken ? (
                  <button
                    className={cn("button button-green", styles.button)}
                    onClick={() => onAddToCart(id, counterValue)}
                  >
                    Add to Cart
                  </button>
                ) : (
                  <Link
                    className={cn("button button-green", styles.button)}
                    to="/login"
                  >
                    Add to Cart
                  </Link>
                )}

                <button
                  className={styles.favorite}
                  onClick={() => setFavorite(!favorite)}
                >
                  <Icon
                    className={cn(
                      "icon-heart",
                      { [styles.active]: favorite },
                      styles.icon
                    )}
                    name={favorite ? "heart-fill" : "heart-border"}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Details />
      <Review stage="- Product Reviews" />

      <Newsletter />
    </>
  );
}

export default Product;
