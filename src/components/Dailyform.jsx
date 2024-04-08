import { useState, useEffect } from "react";
import {
  Navbar,
  Secondtransition,
  ThirtyDays,
  ThirtyOneDays,
  TwentyNineDays,
} from "./index";
import axios from "axios";

export default function Dailyform() {
  const [transfared, setTransfared] = useState(false);
  const [token, setToken] = useState("");
  const currentDate = new Date();
  const nextMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  );

  const currentDay = new Date(
    nextMonth.getFullYear(),
    nextMonth.getMonth()
    // index + 1
  );
  const formattedDate = currentDay.toLocaleDateString("en-BH", {
    localeMatcher: "best fit",
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });

  const daysInMonth = nextMonth.getDate();

  useEffect(() => {
    console.log(daysInMonth);
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
            {daysInMonth === 30 ? (
              <ThirtyDays formattedDate={formattedDate} />
            ) : daysInMonth === 31 ? (
              <ThirtyOneDays />
            ) : daysInMonth === 29 ? (
              <TwentyNineDays />
            ) : (
              <></>
            )}
          </div>
        </form>
      </div>
      <Secondtransition transfared={transfared} />
    </div>
  );
}

{
  /* {Array.from({ length: daysInMonth }, (_, index) => {
              const currentDay = new Date(
                nextMonth.getFullYear(),
                nextMonth.getMonth(),
                index + 1
              );
              const formattedDate = currentDay.toLocaleDateString("en-BH", {
                localeMatcher: "best fit",
                year: "numeric",
                month: "numeric",
                day: "numeric",
              });
              return (
                <div
                  key={index}
                  className="w-4/5 flex flex-col items-start text-left"
                >
                  <h3 className="self-left text-[#fff] text-xl mb-3 tracking-widest">
                    {formattedDate}
                  </h3>
                  <div className="flex w-full items-start space-x-10">
                    <input
                      type="number"
                      className="w-2/6 py-5 border-b-[1px] border-[#fff] px-3 bg-[rgba(255,255,255,0.1)] placeholder:text-[#fff] text-[#fff]"
                      placeholder="Number of Sold Items"
                    />
                    <input
                      type="number"
                      className="w-2/6 py-5 border-b-[1px] border-[#fff] px-3 bg-[rgba(255,255,255,0.1)] placeholder:text-[#fff] text-[#fff]"
                      placeholder="Number of Invoices"
                    />
                    <input
                      type="number"
                      className="w-2/6 py-5 border-b-[1px] border-[#fff] px-3 bg-[rgba(255,255,255,0.1)] placeholder:text-[#fff] text-[#fff]"
                      placeholder="Transaction Amount"
                    />
                  </div>
                </div>
              );
            })} */
}
