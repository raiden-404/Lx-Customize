import ThemeToggle from "./ThemeToggle";
import SearchBar from "./SearchBar";
import { TiShoppingCart } from "react-icons/ti";
import { IconContext } from "react-icons";
import { FaRegUserCircle } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";

const Header = () => {
  return (
    <div className="dark:bg-black bg-white w-full px-4 sm:px-6 md:px-10 lg:px-12 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
      
      {/* Left Part: Logo + ThemeToggle */}
      <div className="w-full sm:w-auto flex items-center justify-between sm:justify-start gap-6">
        {/* Logo */}
        <div className="relative text-xl sm:text-2xl">
          <h1 className="font-bruno bg-[linear-gradient(135deg,_#000000,_#15B3E4)] dark:bg-[linear-gradient(135deg,_#ffffff,_#15B3E4)] text-transparent bg-clip-text relative">
            Lx <br /> Customize
          </h1>
          <h1 className="absolute top-0 left-0 w-full h-full font-bruno text-transparent bg-clip-text blur-[12px] bg-[#1c88a9] dark:bg-[#15B3E4] bg-[linear-gradient(135deg,_#000000,_#15B3E4)] dark:bg-[linear-gradient(135deg,_#ffffff,_#15B3E4)]">
            Lx <br /> Customize
          </h1>
        </div>

        {/* Theme Toggle */}
        <div className="sm:order-none order-2 sm:ms-0 ms-auto">
          <ThemeToggle />
        </div>
      </div>

      {/* Right Part: SearchBar + Icons */}
      <div className="w-full sm:w-auto flex items-center justify-end gap-4 sm:gap-6 md:gap-10 lg:gap-12">
        {/* SearchBar visible only ≥ md */}
        <div className="hidden md:block">
          <SearchBar />
        </div>

        {/* Icons visible only ≥ sm */}
        <div className="hidden sm:flex items-center gap-4 sm:gap-6">
          <IconContext.Provider value={{ className: "text-black text-[2rem] md:text-[2.4rem] dark:text-white" }}>
            <TiShoppingCart />
          </IconContext.Provider>

          <IconContext.Provider value={{ className: "text-[#15B3E4] text-[2rem] md:text-[2.4rem]" }}>
            <FaRegUserCircle />
          </IconContext.Provider>

          <IconContext.Provider value={{ className: "text-black text-[2rem] md:text-[2.4rem] dark:text-white" }}>
            <IoIosMenu />
          </IconContext.Provider>
        </div>
      </div>
    </div>
  );
};

export default Header;
