import React from "react";
import PropTypes from "prop-types";
import styles from "./LoginLayout.module.scss";

const LoginLayout = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

LoginLayout.defaultProps = {
  children: null,
};

LoginLayout.propTypes = {
  children: PropTypes.element,
};

export default LoginLayout;
