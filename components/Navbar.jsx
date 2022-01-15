import Image from "next/image";
import styles from "../styles/Navbar.module.css";
import { useSelector } from "react-redux";
import Link from "next/link";

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image src="/img/telephone.png" alt="" width="32" height="32" />
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>ORDER NOW!</div>
          <div className={styles.text}>+1 (234) 456 7890</div>
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          {/* <li className={styles.listItem}>Homepage</li> */}
          <Link href="/#pizzalist" passHref>
            <li className={styles.listItem}>Menu</li>
          </Link>
          <Link href="/" passHref>
            <li width="160px" height="69px" className={styles.logo}>
              Mars
            </li>
          </Link>

          <Link href="/#footer" passHref>
            <li className={styles.listItem}>Contact</li>
          </Link>
        </ul>
      </div>
      <Link href="/cart" passHref>
        <div className={styles.item}>
          <div className={styles.cart}>
            <Image src="/img/cart.png" alt="" width="30px" height="30px" />
            <div className={styles.counter}>{quantity}</div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
