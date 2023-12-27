import React, { useState, useEffect, useRef } from "react";
import cn from "classnames";
import Breadcrumbs from "../../components/Breadcrumbs";
import CheckoutMyCart from "../../components/CheckoutMyCart";
import TextInput from "../../components/TextInput";
import Checkbox from "../../components/Checkbox";
import styles from "./Checkout.module.sass";
import $ from "jquery"; // Fix the import statement
import { useDispatch, useSelector } from "react-redux";
import { checkoutAction } from "../../redux/checkout";
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
    title: "Shopping Cart",
    url: "/cart",
  },
  {
    title: "Checkout",
  },
];
// Define available vouchers
const availableVouchers = [
  { code: "DISCOUNT10", discount: 10 },
  { code: "DISCOUNT10", discount: 10 },
  { code: "DISCOUNT10", discount: 10 },
  { code: "DISCOUNT10", discount: 10 },
  { code: "DISCOUNT10", discount: 10 },
  { code: "DISCOUNT10", discount: 10 },
  { code: "DISCOUNT10", discount: 10 },
  { code: "DISCOUNT10", discount: 10 },
  { code: "DISCOUNT20", discount: 20 },
  // Add more vouchers as needed
];
function Checkout() {
  const [counter, setCounter] = useState(0);
  const [selectedVoucher, setSelectedVoucher] = useState(null); // New state for selected voucher
  const container = useRef();
  const steps = useRef();
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.cart);
  const [basketItems, setBasketItems] = useState(products);

  useEffect(() => {
    setBasketItems(products);
  }, [products]);

  useEffect(() => {
    $(steps.current.children).eq(counter).addClass(styles.active);
    $(container.current.children).hide().eq(counter).fadeIn();
  }, [counter]);

  const nextItem = () => setCounter((prev) => (prev < 2 ? ++prev : prev));
  const goBack = () => setCounter((prev) => (prev > 0 ? --prev : prev));

  const handleShippingSubmit = () => {
    // Your logic to handle shipping details submission
    alert("Order placed successfully!");
  };

  const handleVoucherBack = () => {
    goBack();
  };

  const handleVoucherSelect = (voucher) => {
    // Set the selected voucher
    setSelectedVoucher(voucher);
  };

  return (
    <div>
      <Breadcrumbs value={breadcrumbs} />
      <div className={cn("section", styles.checkout)}>
        <div className={cn("center")}>
          <div className={cn("stage")}>- Almost There</div>
          <h2 className={cn("title title_mb-lg")}>Checkout</h2>
          <div className={styles.row}>
            <div className={styles.col}>
              <div className={styles.steps} ref={steps}>
                <div className={styles.step}>1</div>
                <div className={styles.step}>2</div>
              </div>
              <div className={styles.container} ref={container}>
                <div className={styles.item}>
                  <div className={styles.category}>Shipping Details</div>
                  <TextInput
                    className={styles.field}
                    label="Full Name"
                    type="text"
                    name="name"
                  />
                  <button
                    className={cn(
                      "button button-green button-wide",
                      styles.button
                    )}
                    onClick={nextItem}
                  >
                    Continue
                  </button>
                  <button
                    className={cn(
                      "button button-green button-wide",
                      styles.button
                    )}
                    onClick={handleShippingSubmit}
                  >
                    Submit
                  </button>
                </div>

                <div className={styles.item}>
                  <div className={styles.category}>Voucher Section</div>
                  <div className={styles.voucherContainer}>
                    <p>Available Vouchers:</p>
                    <div className={styles.voucherList}>
                      {availableVouchers.map((voucher) => (
                        <button
                          key={voucher.code}
                          className={cn(
                            "button button-green button-wide",
                            styles.button,
                            {
                              [styles.selected]: selectedVoucher === voucher,
                            }
                          )}
                          onClick={() => handleVoucherSelect(voucher)}
                        >
                          <p>{voucher.code}</p>
                          <p>Discount: {voucher.discount}%</p>
                        </button>
                      ))}
                    </div>
                  </div>
                  <button
                    className={cn(
                      "button button-green button-wide",
                      styles.button
                    )}
                    onClick={handleVoucherBack}
                  >
                    Go Back
                  </button>
                </div>

                <div className={styles.item}>
                  <div className={styles.category}>Discount Details</div>
                  <p>Discount applied successfully!</p>
                  <button
                    className={cn(
                      "button button-green button-wide",
                      styles.button
                    )}
                    onClick={goBack}
                  >
                    Go Back
                  </button>
                </div>
              </div>
            </div>
            <div className={styles.col}>
              <CheckoutMyCart
                value={basketItems}
                setValue={setBasketItems}
                checkout
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
