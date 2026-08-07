import type { JSX } from "react/jsx-runtime";

type TbuttonProps = {
  setCount: React.Dispatch<React.SetStateAction<number>>;
  children: JSX.Element;
  count:number
};
export default function Tbutton({ setCount, children, count }: TbuttonProps) {
  return (
    <button onClick={()=>setCount(count++)} className="my-[50vh] mx-[50vw] bg-amber-400 p-8">
      {children}
    </button>
  );
}
