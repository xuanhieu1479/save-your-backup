import React from "react";
import PropTypes from "prop-types";

const propTypes = {
  children: PropTypes.element.isRequired,
};

const LoginLayout = ({ children }) => <div>{children}</div>;

LoginLayout.propTypes = propTypes;

export default LoginLayout;
