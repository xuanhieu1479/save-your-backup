import React from "react";
import PropTypes from "prop-types";
import { PrimaryButton } from "@fluentui/react/lib/Button";

const propTypes = {
  users: PropTypes.array,
};
const defaultProps = {
  users: [],
};

const UserSelector = ({ users }) => (
  <div style={{ width: 500, height: 500, backgroundColor: "white" }}>
    <PrimaryButton text="primary" />
  </div>
);

UserSelector.propTypes = propTypes;
UserSelector.defaultProps = defaultProps;

export default UserSelector;
