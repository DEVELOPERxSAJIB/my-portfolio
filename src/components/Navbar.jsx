import { Link } from "react-router-dom";
import { menu, close } from "../assets";
import { useState } from "react";
import { navLinks } from "../constants";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav>
      <div
        className={`w-full flex items-center py-5 fixed top-0 z-20 bg-[#141C27] shadow`}
      >
        <div className="container mx-auto max-w-[1150px]">
          <div className="flex justify-between items-center">
            <Link
              className="flex items-center"
              to={"/"}
              onClick={() => {
                setActive(""), window.scrollTo(0, 0);
              }}
            >
              <p className="text-[#32ff7e] uppercase text-[32px] font-bold logo-font cursor-pointer">
                <span className="text-[#FFD700] logo-font">D </span>Sa
              </p>
            </Link>
            <ul className="items-center list-none hidden sm:flex flex-row gap-6">
              {navLinks.map((item) => {
                return (
                  <li
                    key={item.id}
                    onClick={() => setActive(item.title)}
                    className={`${
                      active === item.title
                        ? "text-[#FFD700] font-semibold"
                        : "text-[#32ff7e] font-semibold"
                    }`}
                  >
                    <a href={`#${item.id}`}>{item.title}</a>
                  </li>
                );
              })}
              <li className="font-semibold py-1 px-1 text-[#02050A] transition-opacity rounded">
                <div className="buttons">
                  <button style={{ margin : 0, width: "100px", height: "40px" }} className="btn-hover color-1">
                    <a style={{margin : 0}} href="https://www.upwork.com/freelancers/~01baa01d9327439663">Hire Me</a>
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="sm:hidden flex justify-end">
          <img
            style={{
              background: "#55E6A5",
              padding: "6px",
              borderRadius: "5px",
            }}
            src={toggle ? close : menu}
            alt="menu"
            className="h-[28px] w-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 bg-[#141C27]  absolute right-0 top-14 my-2 min-w-[140px] rounded-xl`}
          >
            <ul className="list-none flex flex-col gap-4">
              {navLinks.map((item) => {
                return (
                  <li
                    key={item.id}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(item.title);
                    }}
                    className={`${
                      active === item.title
                        ? "text-black, font-[18px]"
                        : "text-[#55E6A5]"
                    }`}
                  >
                    <a href={`#${item.id}`}>{item.title}</a>
                  </li>
                );
              })}
              <li
                style={{
                  backgroundColor:
                    "linear-gradient(180deg, #FFD700 1.9%, rgb(50, 255, 126) 97.5%)",
                }}
                className="font-semibold py-1 px-5 rounded border-2"
              >
                <a href="https://www.upwork.com/freelancers/~01baa01d9327439663">
                  Hire Me
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
