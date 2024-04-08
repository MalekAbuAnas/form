import { useState, useEffect } from "react";
import { Navbar, Secondtransition, ThirtyDays } from "./index";
import axios from "axios";

export default function Dailyform() {
  const [transfared, setTransfared] = useState(false);
  const [token, setToken] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3000/api-call").then((response) => {
      const responseData = response.data;
      setToken(String(responseData.jwtSecurityToken));
      setTransfared(true);
    });
  }, []);

  return (
    <div className="daily-form w-full min-h-[100vh] relative">
      <Navbar />
      <div className="page-content w-full flex-col items-center justify-center text-center">
        <h1 className="text-4xl text-[#fff] font-yeseva py-10">
          Daily Sales Upload Page
        </h1>
        <h3 className="text-xl text-[#fff] font-yeseva pb-20">
          fill each day with it's information
        </h3>
        <form
          action=""
          className="flex flex-col space-y-10 w-full items-center justify-center"
        >
          <div className="w-full flex flex-col space-y-8 items-center justify-center">
            <ThirtyDays />
          </div>
        </form>
      </div>
      <Secondtransition transfared={transfared} />
    </div>
  );
}
