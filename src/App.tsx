import React from "react";
import "./App.css";
import Counter from "./components/Counter";

/* 
Typescript is a super set of Javascript
ঘুমিয়ে আছে Typescript, Javascript এর অন্তরে
*/

function App() {
  // Primitive types
  let student: string = "Nur Rafi";
  let age: number = 25;
  let isHandsome: boolean = true;

  // Interface
  interface Person {
    name: string;
    age: number;
    job?: string; // optional
    location: string | number; // Union type
  }
  const person: Person = {
    name: "Nur Rafi",
    age: 25,
    job: "Developer",
    location: 1212,
  };

  // Direct type
  const anotherPerson: { name: string; job: string; age: number } = {
    name: "Nur Rafi",
    job: "Developer",
    age: 27,
  };

  // return type
  const handleaddUser1 = (firstName: string, age: number): number => {
    console.log(firstName, age);
    return age;
  };

  const handleaddUser2 = (firstName: string, age: number): void => {
    console.log(firstName, age);
  };

  // using any behaves like normal Javascript
  // its not recommended using any type in Typescript

  /* 
  const handleaddUser1: (firstName: string, age: number) => void
  here, void means this function has no return  
  */

  return (
    <div className="App">
      <Counter />
    </div>
  );
}

export default App;
