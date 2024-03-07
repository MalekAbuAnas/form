import { useState, useEffect } from "react";
import { Navbar, Secondtransition } from "./index";
import axios from "axios";

export default function Dailyform() {
  const [transfared, setTransfared] = useState(false);

  const _EMAIL = "Gulnarcafe.bh@gmail.com";

  useEffect(() => {
    setTimeout(() => setTransfared(true), 1000);

    const fetch_data = async () => {
      await axios
        .get(
          `https://azmapapimgmtprod1.azure-api.net/tokeninfo/api/Token?email=Gulnarcafe.bh@gmail.com`,
          {
            headers: {
              tenant: "mgb.map.eaglehills.com",
              "Ocp-Apim-Subscription-Key": "070433de069a4a6f915274209ff0071a",
            },
          }
        )
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => console.error(err));
    };

    fetch_data();
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
          className="flex flex-col space-y-10 w-full items-center justify-center"
        >
          <input
            type="text"
            className="w-1/2 py-5 border-b-[1px] border-[#fff] px-3 bg-[rgba(255,255,255,0.1)] placeholder:text-[#fff] text-[#fff]"
            placeholder="Enter Your Name"
          />
          <input
            type="text"
            className="w-1/2 py-5 border-b-[1px] border-[#fff] px-3 bg-[rgba(255,255,255,0.1)] placeholder:text-[#fff] text-[#fff]"
            placeholder="Enter Your Name"
          />
          <input
            type="text"
            className="w-1/2 py-5 border-b-[1px] border-[#fff] px-3 bg-[rgba(255,255,255,0.1)] placeholder:text-[#fff] text-[#fff]"
            placeholder="Enter Your Name"
          />
          <input
            type="text"
            className="w-1/2 py-5 border-b-[1px] border-[#fff] px-3 bg-[rgba(255,255,255,0.1)] placeholder:text-[#fff] text-[#fff]"
            placeholder="Enter Your Name"
          />
        </form>
      </div>
      <Secondtransition transfared={transfared} />
    </div>
  );
}
