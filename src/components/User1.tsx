import React from "react";

const User1 = (props: { name: string; age: number }) => {
  const name = props.name;
  const age = props.age;
  return (
    <div>
      <h2>Hello {name}</h2>
    </div>
  );
};

export default User1;
