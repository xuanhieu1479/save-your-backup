import React, { useMemo } from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import { Persona, PersonaSize, PersonaInitialsColor } from "@fluentui/react";
import { sample } from "lodash";

const propTypes = {
  isSelected: PropTypes.bool,
  onSelectUser: PropTypes.func,
  userName: PropTypes.string,
  isOtherUser: PropTypes.bool,
};
const defaultProps = {
  isSelected: false,
  onSelectUser: () => undefined,
  userName: "Username",
  isOtherUser: false,
};

const ICON_COLORS = [
  PersonaInitialsColor.cyan,
  PersonaInitialsColor.purple,
  PersonaInitialsColor.orange,
  PersonaInitialsColor.gold,
];

const UserSelectButton = ({
  isSelected,
  onSelectUser,
  userName,
  isOtherUser,
}) => {
  const personaColor = useMemo(() => sample(ICON_COLORS), []);

  return (
    <div
      className={cn(
        "login__user-select-button",
        "cursor-pointer px-2 py-1 rounded-sm",
        {
          "bg-blue-500": isSelected,
        }
      )}
      onClick={onSelectUser}
      role="button"
      onKeyDown={() => undefined}
      tabIndex={0}
    >
      <Persona
        text={userName}
        size={PersonaSize.size32}
        initialsColor={personaColor}
        showUnknownPersonaCoin={isOtherUser}
      />
    </div>
  );
};

UserSelectButton.propTypes = propTypes;
UserSelectButton.defaultProps = defaultProps;

export default UserSelectButton;
