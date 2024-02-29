import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar container flex w-full mx-auto py-10 items-center justify-between px-40">
      <h3 className="text-[#fff] text-xl font-yeseva">Gulnar Cafe & Sweets</h3>
      <button className="cbtn" data-another-text="Contact Us">
        Contact Support
      </button>
    </div>
  );
}
//  w-fit h-fit rounded-full bg-none border-[#fff] border-[1px] text-[#fff] py-3 px-8 duration-500 hover:bg-[#fff] hover:text-[#000]
