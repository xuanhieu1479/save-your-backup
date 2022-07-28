import { LoginLayout } from "components";

const Home = () => <div>Hello World</div>;

Home.getLayout = (page) => <LoginLayout>{page}</LoginLayout>;

export const getStaticProps = () => {
  return {
    props: {},
  };
};

export default Home;
