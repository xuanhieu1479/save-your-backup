import React from "react";
import { LoginLayout } from "components";

const Home = () => <div>Hello World</div>;

Home.getLayout = (page) => <LoginLayout>{page}</LoginLayout>;

export const getStaticProps = () => ({
  props: {},
});

export default Home;
