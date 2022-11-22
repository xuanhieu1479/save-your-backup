import React from "react";
import { Provider } from "react-redux";
import PropTypes from "prop-types";
import { initializeIcons } from "@fluentui/font-icons-mdl2";

import store from "redux/store";
import { applyFluentUIStyles, isOnClient } from "helpers";
import "styles/globals.scss";

const propTypes = {
  Component: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.array,
    PropTypes.element,
  ]).isRequired,
  pageProps: PropTypes.object.isRequired,
};

const MyApp = ({ Component, pageProps }) => {
  if (isOnClient()) {
    // Inject FluentUI styles after the app has been loaded
    // to prevent tailwind from overriding FluentUI styles.
    applyFluentUIStyles();
  }

  // Initialize FluentUI icons
  initializeIcons();

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};

MyApp.propTypes = propTypes;

export default MyApp;
