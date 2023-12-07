import React, { useState } from "react";
import cn from "classnames";
import styles from "./Counter.module.sass";
import Icon from "../Icon";

function Counter({ className, value }) {
  const [counter, setCounter] = useState(value || 1);

  const increment = () => setCounter(counter + 1);
  const decrement = () => (counter <= 1 ? setCounter(1) : setCounter(counter - 1));

  const handlerCounter = (x) => setCounter(parseInt(x.target.value.replace(/[^\d]/, "") || 1));

  return (
    <div className={cn(className, styles.counter)}>
      <button className={cn(styles.button, styles.minus)} onClick={decrement}>
        <Icon className={cn("icon-arrow-prev", styles.icon)} name="arrow-prev" />
      </button>

      <input type="text" name="" id="" size="3" value={counter} onChange={handlerCounter} />

      <button className={cn(styles.button, styles.plus)} onClick={increment}>
        <Icon className={cn("icon-arrow-next", styles.icon)} name="arrow-next" />
      </button>
    </div>
  );
}

export default Counter;
