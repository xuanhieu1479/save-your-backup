import React from "react";
import { LoginLayout } from "components";

const Home = () => (
  <LoginLayout>
    <div>Hello World</div>
  </LoginLayout>
);

export const getStaticProps = () => ({
  props: {},
});

export default Home;
