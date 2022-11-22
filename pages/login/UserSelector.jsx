import React, { useState } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";

import { updateUserProfile } from "redux/reducers/userProfile";
import {
  OTHER_USER_NAME,
  DEFAULT_LOGIN_BACKGROUND_IMAGE_URL,
} from "constants/index";

import { UserSelectButton } from "./components";

const propTypes = {
  users: PropTypes.array,
};
const defaultProps = {
  users: [],
};

const OTHER_USER = {
  email: OTHER_USER_NAME,
  name: OTHER_USER_NAME,
  backgroundImage: DEFAULT_LOGIN_BACKGROUND_IMAGE_URL,
};

const dummyUsers = [
  {
    email: "Test email",
    name: "Test name",
    backgroundImage: "empty",
  },
  {
    email: "Test email 2",
    name: "Test name 2",
    backgroundImage:
      "https://dogtime.com/assets/uploads/2011/03/puppy-development-1280x720.jpg",
  },
];

// eslint-disable-next-line no-unused-vars
const UserSelector = ({ users }) => {
  const dispatch = useDispatch();
  const [selectedUser, setSelectedUser] = useState({});

  const onSelectUser = (user) => {
    setSelectedUser(user);
    dispatch(updateUserProfile(user));
  };

  return (
    <div className="absolute bottom-4 left-4">
      {[...dummyUsers, OTHER_USER].map((user) => (
        <UserSelectButton
          key={user.email}
          userName={user.name}
          onSelectUser={() => onSelectUser(user)}
          isSelected={selectedUser.email === user.email}
          isOtherUser={user.email === OTHER_USER_NAME}
        />
      ))}
    </div>
  );
};

UserSelector.propTypes = propTypes;
UserSelector.defaultProps = defaultProps;

export default UserSelector;
