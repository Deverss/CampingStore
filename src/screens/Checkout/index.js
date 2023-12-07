import React, { useState, useEffect, useRef } from "react";
import cn from "classnames";
import $ from "jquery";
import Breadcrumbs from "../../components/Breadcrumbs";
import Basket from "../../components/Basket";
import TextInput from "../../components/TextInput";
import Checkbox from "../../components/Checkbox";
import styles from "./Checkout.module.sass";

import { basket } from "../../mocks/products";

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

function Checkout() {
  const [basketItems, setBasketItems] = useState(basket);
  const [counter, setCounter] = useState(0);
  const [shipping, setShipping] = useState(true);
  const [payment, setPayment] = useState(true);

  const container = useRef();
  const steps = useRef();
  const checkoutBox = useRef();
  const groupPayments = useRef();

  useEffect(() => {
    $(steps.current.children).eq(counter).addClass(styles.active);
    $(container.current.children).hide().eq(counter).fadeIn();
  }, [counter]);

  const nextItem = () => setCounter((prev) => (prev < 3 ? ++prev : prev));

  const dropDown = (a) => {
    $(checkoutBox.current).slideToggle();
    setShipping(!shipping);
  };

  useEffect(() => {
    $(groupPayments.current.children).hide().closest(".visible").fadeIn();
  }, [payment]);

  const changePayment = () => setPayment(!payment);

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
                <div className={styles.step}>3</div>
                <div className={styles.step}>4</div>
              </div>
              <div className={styles.container} ref={container}>
                <div className={styles.item}>
                  <div className={styles.category}>Details</div>
                  <div className={styles.fieldset}>
                    <TextInput className={styles.field} label="Email Address" type="email" name="email" />
                    <TextInput className={styles.field} label="Password" type="password" name="password" />
                  </div>
                  <button className={cn("button button-green button-wide", styles.button)} onClick={nextItem}>
                    Continue
                  </button>
                  <button className={cn("button button-border button-wide", styles.button)} onClick={nextItem}>
                    Guest Checkout
                  </button>
                </div>

                <div className={styles.item}>
                  <div className={styles.category}>Shipping Details</div>
                  <div className={styles.fieldset}>
                    <TextInput className={styles.field} label="Full Name" type="text" name="name" />
                    <TextInput className={styles.field} label="Street Name" type="text" name="street" />
                    <div className={styles.line}>
                      <div className={styles.cell}>
                        <TextInput className={styles.field} label="House Number" type="text" name="house" />
                      </div>
                      <div className={styles.cell}>
                        <TextInput className={styles.field} label="City" type="text" name="city" />
                      </div>
                    </div>
                    <div className={styles.line}>
                      <div className={styles.cell}>
                        <TextInput className={styles.field} label="Country" type="text" name="country" />
                      </div>
                      <div className={styles.cell}>
                        <TextInput className={styles.field} label="ZIP Code" type="text" name="code" />
                      </div>
                    </div>
                  </div>
                  <button className={cn("button button-green button-wide", styles.button)} onClick={nextItem}>
                    Continue
                  </button>
                </div>

                <div className={styles.item}>
                  <div className={styles.category}>Billing Details</div>
                  <div className={styles.fieldset}>
                    <Checkbox label="Same as shipping address" type="checkbox" value={shipping} onChange={dropDown} />

                    <div className={styles.checkoutBox} ref={checkoutBox}>
                      <TextInput className={styles.field} label="Full Name" type="text" name="name" />
                      <TextInput className={styles.field} label="Street Name" type="text" name="street" />
                      <div className={styles.line}>
                        <div className={styles.cell}>
                          <TextInput className={styles.field} label="House Number" type="text" name="house" />
                        </div>
                        <div className={styles.cell}>
                          <TextInput className={styles.field} label="City" type="text" name="city" />
                        </div>
                      </div>
                      <div className={styles.line}>
                        <div className={styles.cell}>
                          <TextInput className={styles.field} label="Country" type="text" name="country" />
                        </div>
                        <div className={styles.cell}>
                          <TextInput className={styles.field} label="ZIP Code" type="text" name="code" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <button className={cn("button button-green button-wide", styles.button)} onClick={nextItem}>
                    Continue
                  </button>
                </div>

                <div className={styles.item}>
                  <div className={styles.category}>Payment Details</div>

                  <div className={styles.variants}>
                    <Checkbox className={styles.checkbox} label="Credit Card" type="radio" name="payment" value={payment} onChange={changePayment} />
                    <Checkbox className={styles.checkbox} label="Paypal" type="radio" name="payment" value={!payment} onChange={changePayment} />
                  </div>

                  <div className={styles.group} ref={groupPayments}>
                    <div className={cn({ visible: payment }, styles.item)}>
                      <div className={styles.fieldset}>
                        <TextInput className={styles.field} label="Card Number" type="tel" name="card" />
                        <div className={styles.line}>
                          <div className={styles.cell}>
                            <TextInput className={styles.field} label="Expiry Date" type="text" name="date" />
                          </div>
                          <div className={styles.cell}>
                            <TextInput className={styles.field} label="CVV" type="tel" name="cvv" />
                          </div>
                        </div>
                        <div className={styles.line}>
                          <div className={styles.cell}>
                            <TextInput className={styles.field} label="Country" type="text" name="country" />
                          </div>
                          <div className={styles.cell}>
                            <TextInput className={styles.field} label="ZIP Code" type="tel" name="code" />
                          </div>
                        </div>
                      </div>
                      <button className={cn("button button-green button-wide", styles.button)}>Place Order</button>
                    </div>
                    <div className={cn({ visible: !payment }, styles.item)}>
                      <button className={cn("button button-green button-wide", styles.button)}>Continue with PayPal</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.col}>
              <Basket value={basketItems} setValue={setBasketItems} checkout />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
