import { useState } from "react";
import { ChildArea } from "./ChildArea";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(0);

  const onClickCountUp = () => {
    setCount(count + 1);
  };

  return (
    <div className="App">
      <input />
      <br />
      <br />
      <button>表示</button>
      <ChildArea />
    </div>
  );
}
