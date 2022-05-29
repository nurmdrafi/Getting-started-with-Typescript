import React, { useEffect, useState } from "react";
import User from "../types/models";
import User1 from "./User1";
import User2 from "./User2";
import User3 from "./User3";

const Users = () => {
  const [users, setUsers] = useState<User[]>([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const handleaddUser = (): void => {};
  return (
    <div>
      <User1 name="User1" age={25} />
      <User2 name="User2" age={25} />
      {/* <User3 name="User3" age={25} addUser={handleaddUser} /> */}
      {users.map((user) => (
        <User3 user={user} addUser={handleaddUser}></User3>
      ))}
    </div>
  );
};

export default Users;
