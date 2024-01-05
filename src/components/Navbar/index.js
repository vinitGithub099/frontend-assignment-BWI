import Link from "next/link";
import styles from "./index.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.logoContainer}>E-store</div>

      <nav className={styles.navLinks}>
        <div className={styles.navLink}>
          <Link href="/">Home</Link>
        </div>
        <div className={styles.navLink}>
          <Link href="/cart">Cart</Link>
        </div>
        <div className={styles.navLink}>
          <Link href="/login">Login</Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
