import { LoginLayout } from "components";
import styles from "./index.module.scss";

const Home = () => <div className={styles.container}>Hello World</div>;

Home.getLayout = (page) => <LoginLayout>{page}</LoginLayout>;

export const getStaticProps = () => {
  return {
    props: {},
  };
};

export default Home;
