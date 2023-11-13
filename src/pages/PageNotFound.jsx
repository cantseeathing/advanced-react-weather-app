import Header from "../components/Header";
import styles from "./PageNotFound.module.css";
export default function PageNotFound() {
  return (
    <>
      <Header />
      <div className={styles.message}>
        <h1>Error 404, page not found!</h1>
      </div>
    </>
  );
}
