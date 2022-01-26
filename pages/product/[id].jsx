import styles from "../../styles/Product.module.css";
import Image from "next/image";

const Product = () => {
  const pizza = {
    id: 1,
    img: "img/pizza.png",
    name: "CAMPAGNOLA",
    price: [19.9, 23.9, 27.9],
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed",
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}></div>
      <div className={styles.imgContainer}>
        <Image src={pizza.img} layout="fill" alt="" />
      </div>
      <div className={styles.right}></div>
    </div>
  );
};

export default Product;
