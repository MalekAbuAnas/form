import { useState, useEffect } from "react";
import { Navbar, Secondtransition } from "./index";

export default function Dailyform() {
  const [transfared, setTransfared] = useState(false);

  useEffect(() => {
    setTimeout(() => setTransfared(true), 1000);
  }, []);

  return (
    <div className="daily-form w-full min-h-[100vh] relative">
      <Navbar />
      <div className="page-content w-full flex-col items-center justify-center text-center">
        <h1 className="text-4xl text-[#fff] font-yeseva py-10">
          Daily Sales Upload Page
        </h1>
        <form
          action=""
          className="flex flex-col space-y-6 w-full items-center justify-center"
        >
          <input
            type="text"
            className="w-1/3 py-5 border-[1px] border-[#fff] px-3 bg-[rgba(255,255,255,0.1)] placeholder:text-[#fff] text-[#fff]"
            placeholder="Enter Your Name"
          />
          <input
            type="text"
            className="w-1/3 py-5 border-[1px] border-[#fff] px-3 bg-[rgba(255,255,255,0.1)] placeholder:text-[#fff] text-[#fff]"
            placeholder="Enter Your Name"
          />
          <input
            type="text"
            className="w-1/3 py-5 border-[1px] border-[#fff] px-3 bg-[rgba(255,255,255,0.1)] placeholder:text-[#fff] text-[#fff]"
            placeholder="Enter Your Name"
          />
          <input
            type="text"
            className="w-1/3 py-5 border-[1px] border-[#fff] px-3 bg-[rgba(255,255,255,0.1)] placeholder:text-[#fff] text-[#fff]"
            placeholder="Enter Your Name"
          />
        </form>
      </div>
      <Secondtransition transfared={transfared} />
    </div>
  );
}

// import { useState, useEffect } from "react";
// import Secondtransition from "./Secondtransition";
// // import axios from "axios";

// export default async function Dailyform() {
//   const [transfared, setTransfared] = useState(false);

//   useEffect(() => {
//     setTimeout(() => [setTransfared(true)], 1000);
//   });

//   return (
//     <div className="daily-form w-full min-h-[100vh] relative">
//       <Secondtransition transfared={transfared} />
//     </div>
//   );
// }
