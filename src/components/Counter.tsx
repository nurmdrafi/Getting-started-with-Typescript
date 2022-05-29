import React, { ChangeEvent, FormEvent, useState } from "react";
import Users from "./Users";

// Types with useState and event handler

interface User {
  name: string;
  job: string;
}

const Counter = () => {
  const [counter, setCounter] = useState<number>(0);
  const [user, setUser] = useState<User | null>(null);

  const handleIncrease = (): void => {
    setCounter(counter + 1);
  };

  const handleDecrease = (): void => {
    setCounter(counter - 1);
  };

  const handleUserSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const user = {
      name: "Nur Rafi",
      job: "Dev",
    };
    setUser(user);
  };
  const handleNameChange = (e: ChangeEvent<HTMLInputElement>): void => {};
  return (
    <div>
      <h1>This is counter</h1>
      <h2>{counter}</h2>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
      <Users />
    </div>
  );
};

export default Counter;
