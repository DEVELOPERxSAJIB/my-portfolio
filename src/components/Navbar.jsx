import { Link } from "react-router-dom";
import { styles } from "../styles";
import { logo, menu, close } from "../assets";
import { useState } from "react";
import { navLinks } from "../constants";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav>
      <div
        className={`${styles.paddingX} opacity-95 w-full flex items-center py-5 fixed top-0 z-20 bg-primary shadow`}
      >
        <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
          <Link
            className="flex items-center"
            to={"/"}
            onClick={() => {
              setActive(""), window.scrollTo(0, 0);
            }}
          >
            {/* <img src={logo} alt="logo" className="w-9 h-9 object-contain" /> */}
            <p className="text-[#ED1846] uppercase text-[22px] font-semibold cursor-pointer ps-3">
              Md Sajib Shikder
            </p>
          </Link>
          <ul className="list-none hidden sm:flex flex-row gap-10">
            {navLinks.map((item) => {
              return (
                <li
                  key={item.id}
                  onClick={() => setActive(item.title)}
                  className={`${
                    active === item.title
                      ? "text-[#b0002fe0] font-[18px] font-semibold"
                      : "text-[#ED1840] font-semibold"
                  }`}
                >
                  <a href={`#${item.id}`}>{item.title}</a>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="sm:hidden flex justify-end">
          <img style={{
            background: "#ED1846",
            padding : "6px",
            borderRadius : "5px",
          }}
            src={toggle ? close : menu}
            alt="menu"
            className="h-[28px] w-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 bg-[#ED1846] absolute top-16 right-0 mx-4 my-2 min-w-[140px] rounded-xl`}
          >
            <ul className="list-none flex flex-col gap-4">
              {navLinks.map((item) => {
                return (
                  <li
                    key={item.id}
                    onClick={() => {
                      setToggle(!toggle)
                      setActive(item.title)
                    }}
                    className={`${
                      active === item.title
                        ? "text-black, font-[18px]"
                        : "text-white"
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
