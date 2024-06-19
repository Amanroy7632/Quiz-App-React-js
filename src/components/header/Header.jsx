import React, {  useState } from "react";
import "./header.css";
const Header = () => {
  const [active,setActive] = useState(false)
  const toggleHandler = () => {
    document.querySelector(".menu-bar").classList.toggle("active");
    setActive(!active)
  };
  return (
    <>
    <nav className=" w-full h-[7vh] border shadow-md flex justify-evenly items-center">
      <div>
        <span className=" font-semibold text-2xl text-cyan-500">L</span>
        <span className=" font-semibold text-2xl text-orange-500">O</span>
        <span className=" font-semibold text-2xl text-blue-500">G</span>
        <span className=" font-semibold text-2xl text-green-500">O</span>
      </div>
      <ul className=" flex justify-between w-[30%] max-sm:hidden">
        <li>Home</li>
        <li>New Updates</li>
        <li>Github</li>
      </ul>
      <div
        className="menu-bar md:hidden flex justify-center items-center flex-col gap-1"
        onClick={toggleHandler}
      >
        <span className=" w-[30px] h-[4px] bg-black rounded-sm"></span>
        <span className=" w-[30px] h-[4px] bg-black rounded-sm"></span>
        <span className=" w-[30px] h-[4px] bg-black rounded-sm"></span>
      </div>
     
    </nav>
     {active &&<div className="lg:hidden max-sm:w-full max-sm:left-0 fixed left-[25%] top-[15%] z-20 backdrop-blur-sm shadow-xl rounded-md w-[50%] border duration-300  flex justify-center items-center  h-[40%]">
      <ul className=" flex justify-between gap-4 w-[30%] flex-col  text-2xl font-bold">
        <li onClick={toggleHandler}>Home</li>
        <li onClick={toggleHandler}>New Updates</li>
        <li onClick={toggleHandler}>Github</li>
      </ul>
    </div>}
    </>
  );
};

export default Header;
