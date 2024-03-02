import { useState, useEffect } from "react";
import transitions from "../data/Transitions.json";

export default function Transition({ trns }) {
  const [randomTransition, setRandomTransition] = useState("");

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * transitions.length);
    setRandomTransition(transitions[randomIndex]);
  });
  return (
    <div
      className={`transition-page top-0 right-0 ${
        trns ? "pl-[100%]" : "pl-0"
      } absolute ${trns ? "w-full" : "w-0"} ${
        trns ? "rounded-l-[0px]" : "rounded-l-[500px]"
      } h-full bg-c-brown z-[200] duration-700 overflow-hidden ease-in`}
    >
      <h1 className="z-[300] text-[#fff] text-3xl absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] whitespace-nowrap font-yeseva">
        You will be in there soon
        {/* {randomTransition} */}
      </h1>
    </div>
  );
}

// export default function Transition({ trns }) {
//   return (
//     <div
//       className={`transition-page top-0 right-0 ${
//         trns ? "pl-[100%]" : "pl-0"
//       } absolute ${trns ? "w-full" : "w-0"} ${
//         trns ? "rounded-l-[0px]" : "rounded-l-[500px]"
//       } h-full bg-c-brown z-[200] duration-700`}
//     >
//       <h1 className="z-[300] text-[#fff] text-xl absolute">
//         Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error, itaque.
//       </h1>
//     </div>
//   );
// }
