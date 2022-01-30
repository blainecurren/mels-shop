import styles from "../styles/Cart.module.css";
import Image from "next/image";

import React from "react";

const Cart = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <table className={styles.table}>
          <tr className={styles.tr}>
            <th>Product</th>
            <th>Name</th>
            <th>Extras</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
          <tr>
            <td>
              <div className={styles.imgContainer}>
                <Image
                  src="/img/pizza.png"
                  layout="fill"
                  alt=""
                  objectFit="cover"
                />
              </div>
            </td>
            <td>
              <span className={styles.extras}>
                Double Ingredients, spicy Sauce
              </span>
            </td>
            <td>
              <span className={styles.price}>$19.99</span>
            </td>
            <td>
              <span className={styles.quantity}>2</span>
            </td>
            <td>
              <span className={styles.total}>$39.80</span>
            </td>
          </tr>
        </table>
      </div>
      <div className={styles.right}></div>
    </div>
  );
};

export default Cart;
