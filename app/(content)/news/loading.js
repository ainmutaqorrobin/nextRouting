import styles from "./loading.module.css";
export default function NewsLoading() {
  return (
    <p>
      <span className={styles.loader}></span>
    </p>
  );
}
