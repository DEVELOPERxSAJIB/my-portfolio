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
        className={`w-full flex items-center py-7 fixed top-0 z-20 bg-[#141C27] shadow`}
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
              <p className="text-[#55E6A5] text-[24px] font-semibold cursor-pointer">
                SaJib
              </p>
            </Link>
            <ul className="list-none hidden sm:flex flex-row gap-6">
              {navLinks.map((item) => {
                return (
                  <li
                    key={item.id}
                    onClick={() => setActive(item.title)}
                    className={`${
                      active === item.title
                        ? "text-[#37f760] font-semibold"
                        : "text-[#55E6A5] font-semibold"
                    }`}
                  >
                    <a href={`#${item.id}`}>{item.title}</a>
                  </li>
                );
              })}
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
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
