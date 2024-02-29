import { useState } from "react";
import Buttons from "./Buttons";
import Navbar from "./Navbar";
import Sidemenu from "./Sidemenu";
import Transition from "./Transition";

export default function Hero() {
  const [opened, setOpened] = useState(false);

  const handleOpen = () => {
    setOpened(true);
  };

  const handleClose = () => {
    setOpened(false);
  };
  return (
    <>
      <div className="hero w-full h-[100vh] relative">
        <Navbar />
        <div className="text-container items-center justify-center text-center w-full h-fit py-16 bg-none space-y-14">
          <h1 className="text-[#fff] text-6xl font-yeseva">
            Gulnar Cafe & Sweets
          </h1>
          <h3 className="text-[#fff] text-lg font-yeseva">
            Marasi Gallery Mall Daily and Monthly Reports Uploading App
          </h3>
          {/* <a
          href=""
          style={{
            WebkitBoxReflect: "below 1px liner-gradient(transparent, #99494)",
          }}
          className="btn relative inline-block py-[15px] px-[30px] tracking-[4px] hover:tracking-[8px] uppercase text-[#fff] font-normal text-sm duration-[.5s] overflow-hidden hover:bg-[#fff] hover:text-[#000] hover:shadow-hover-shadow"
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Get Started
        </a> */}
          <button
            className="cbtn"
            data-another-text="Go to Upload"
            onClick={handleOpen}
          >
            Get Started
          </button>
        </div>
        <Sidemenu opened={opened} close={handleClose} />
      </div>
    </>
  );
}
