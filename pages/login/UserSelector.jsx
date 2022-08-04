import React from "react";
import PropTypes from "prop-types";
import { PrimaryButton } from "@fluentui/react/lib/Button";

const propTypes = {
  users: PropTypes.array,
};
const defaultProps = {
  users: [],
};

// eslint-disable-next-line no-unused-vars
const UserSelector = ({ users }) => (
  <div className="absolute bottom-4 left-4">
    <PrimaryButton text="primary" />
  </div>
);

UserSelector.propTypes = propTypes;
UserSelector.defaultProps = defaultProps;

export default UserSelector;
