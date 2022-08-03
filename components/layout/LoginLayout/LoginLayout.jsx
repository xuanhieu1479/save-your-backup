import React from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import { selectUserProfile } from "redux/selectors";

const propTypes = {
  children: PropTypes.element.isRequired,
};

const LoginLayout = ({ children }) => {
  const userProfile = useSelector(selectUserProfile);
  const backgroundImage = userProfile?.loginBackgroundImage || "";

  return (
    <div className="flex h-screen w-screen">
      <div
        style={{ backgroundImage: `url(${backgroundImage})` }}
        className="absolute h-full w-full bg-no-repeat bg-center bg-cover brightness-75 blur-sm"
      />
      <div className="z-10">{children}</div>
    </div>
  );
};

LoginLayout.propTypes = propTypes;

export default LoginLayout;
