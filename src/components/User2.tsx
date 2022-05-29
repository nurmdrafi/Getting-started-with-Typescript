import React, { FC } from "react";

const User2: FC<{ name: string; age?: number }> = (props) => {
  return (
    <div>
      <h2>Hello {props.name}</h2>
    </div>
  );
};

export default User2;
