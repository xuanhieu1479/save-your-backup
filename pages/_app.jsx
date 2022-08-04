import React, { useEffect } from "react";
import { Provider } from "react-redux";
import store from "redux/store";
import PropTypes from "prop-types";
import { applyFluentUIStyles } from "helpers";
import "styles/globals.css";

let injectedFluentUIStyles = false;

const propTypes = {
  Component: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.array,
    PropTypes.element,
  ]).isRequired,
  pageProps: PropTypes.object.isRequired,
};

const MyApp = ({ Component, pageProps }) => {
  useEffect(() => {
    // Inject FluentUI styles after the app has been loaded
    // to prevent tailwind from overriding FluentUI styles.
    if (!injectedFluentUIStyles) {
      injectedFluentUIStyles = true;
      applyFluentUIStyles();
    }
  }, []);

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};

MyApp.propTypes = propTypes;

export default MyApp;
