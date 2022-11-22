import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import cn from "classnames";

import { selectUserProfile } from "redux/selectors";

const propTypes = {
  children: PropTypes.element.isRequired,
};

const MARGIN_OF_ERROR = 0.1;
const TRANSITION_WINDOW = 0.5; // seconds

const LoginLayout = ({ children }) => {
  const userProfile = useSelector(selectUserProfile);
  const previousValues = useRef({ backgroundImage: "" });

  const [previousBackgroundImage, setPreviousBackgroundImage] = useState();
  const [newBackgroundImage, setNewBackgroundImage] = useState();
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const previousBackground = previousValues.current.backgroundImage;
    const newBackground = userProfile.backgroundImage;

    // New background image is incoming, starting transition
    if (previousBackground && previousBackground !== newBackground) {
      setIsTransitioning(true);
      setNewBackgroundImage(newBackground);

      setTimeout(() => {
        setIsTransitioning(false);
        setPreviousBackgroundImage(newBackground);
      }, TRANSITION_WINDOW * 1000 * MARGIN_OF_ERROR);
    } else if (!previousBackground) {
      setPreviousBackgroundImage(newBackground);
      setNewBackgroundImage(newBackground);
    }

    previousValues.current.backgroundImage = newBackground;
  }, [userProfile.backgroundImage]);

  return (
    <div className="login-layout flex h-screen w-screen">
      <div
        style={{ backgroundImage: `url(${newBackgroundImage})` }}
        className={cn(
          "absolute h-full w-full bg-no-repeat bg-center bg-cover brightness-50 blur-sm",
          {
            "transition-fade-in-short": isTransitioning,
          }
        )}
      />
      {isTransitioning && (
        <div
          style={{ backgroundImage: `url(${previousBackgroundImage})` }}
          className={cn(
            "absolute h-full w-full bg-no-repeat bg-center bg-cover brightness-50 blur-sm",
            "transition-fade-out-short"
          )}
        />
      )}
      <div className="z-10">{children}</div>
    </div>
  );
};

LoginLayout.propTypes = propTypes;

export default LoginLayout;
