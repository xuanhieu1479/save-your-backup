import React from "react";

import { LoginLayout } from "components";

import UserSelector from "./UserSelector";

const Home = () => (
  <LoginLayout>
    <UserSelector />
  </LoginLayout>
);

export default Home;
