import React from "react";
import { Provider } from "react-redux";
import store from "redux/store";
import PropTypes from "prop-types";
import "styles/globals.css";

const propTypes = {
  Component: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.array,
    PropTypes.element,
  ]).isRequired,
  pageProps: PropTypes.object.isRequired,
};

const MyApp = ({ Component, pageProps }) => (
  <Provider store={store}>
    <Component {...pageProps} />
  </Provider>
);

MyApp.propTypes = propTypes;

export default MyApp;
