import { useState } from "react";

function StateExample1() {
  const [name, setName] = useState("rku");
  const [age, setAge] = useState(37);

  return (
    <div>
      <h1>{name}</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <h1>{age}</h1>
      <input
        type="number"
        value={name}
        onChange={(e) => setAge(e.target.value)}
      />
    </div>
  );
}
export default StateExample1;
