import { Illustration01 } from "../assets/index";

export default function Sidemenu({ opened, close }) {
  return (
    <div
      className={`buttons-menu absolute top-0 left-0 ${
        opened ? "w-full" : "w-0"
      } ${opened ? "rounded-r-[0px]" : "rounded-r-[500px]"} ${
        opened ? "pr-[100%]" : "pr-0"
      } h-full bg-[#fff] z-[100] duration-700 overflow-hidden`}
    >
      <dive className="navbar flex mx-auto py-10 items-center justify-end w-[100vw] px-40 absolute">
        <button
          className="bg-none text-c-brown w-[40px] h-[40px] rounded-full border-none items-center justify-center flex  duration-500 hover:text-xl"
          onClick={close}
        >
          &#10006;
        </button>
      </dive>
      <div className="content w-[100vw] h-[100%] flex items-center justify-center">
        <div className="w-[50vw] h-full bg-c-brown items-center justify-center text-center  py-64">
          <button className="w-fit h-fit bg-none border-[1px] border-[#fff] text-[#fff] py-10 px-20 font-yeseva text-3xl duration-500 hover:bg-[#fff] hover:text-c-brown min-w-[400px]">
            Monthly Sales
          </button>
        </div>
        <div className="w-[50vw] h-full bg-[#fff] items-center justify-center text-center py-64">
          <button className="w-fit h-fit bg-none border-[1px] border-c-brown py-10 px-20 font-yeseva text-3xl duration-500 hover:bg-c-brown hover:text-[#fff] min-w-[400px]">
            Daily Sales
          </button>
        </div>
      </div>
    </div>
  );
}
{
  /* <div className="w-[100vw] h-full bg-sidemenu-pattern bg-cover bg-center flex items-center justify-center space-x-16">
  <button className="w-[200px] h-[200px] font-yeseva text-xl bg-[#fff] border-[1px] rounded-md border-c-brown">
    Monthly Sales
  </button>
  <button className="w-[200px] h-[200px] font-yeseva text-xl bg-[#fff] border-[1px] rounded-md border-c-brown">
    Daily Sales
  </button>
</div>; 









<div className="content w-[100vw] h-[100%] flex items-center justify-center">
        <div className="w-1/2 h-full bg-c-brown flex-col items-center justify-center text-center px-40"></div>
        <div className="w-1/2 h-full bg-[#fff] flex-col items-center justify-center px-40">
          <img
            src={Illustration01}
            alt="img"
            className="w-[150px] self-center"
          />
          <h1>Daily Sales</h1>
        </div>
      </div>
*/
}
