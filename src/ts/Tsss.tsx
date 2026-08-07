import { useEffect, useState } from "react";
import Tbutton from "./Tbutton";

export default function Tsss() {
  const [c, setCount] = useState(0);

  useEffect(() => {
    console.log(c);
  }, [c]);

  return (
    <div>
      <Tbutton setCount={setCount} count={c}>
        <span>ggg</span>
      </Tbutton>
    </div>
  );
}
