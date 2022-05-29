import React, { FC } from "react";
import User from "../types/models";

interface Props {
  user: User;
  addUser: () => void;
}

const User3: FC<Props> = ({ user, addUser }) => {
  return (
    <div>
      <h2>Hello {user.name}</h2>
    </div>
  );
};

export default User3;
