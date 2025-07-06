import { IconContext } from "react-icons";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";

const Banner = () => {
  return (
    <div className=" relative flex w-[100%] aspect-[7/2] items-center justify-center m-0 p-0">
      <img
        className=" w-[100%]  object-cover h-[100%]"
        src="https://images.examples.com/wp-content/uploads/2018/06/Business-Roll-Up-Banner-Example.jpg"
        alt=""
      />
      <div className=" flex items-center border border-black justify-center absolute w-[5%] aspect-square rounded-full left-6 bg-[linear-gradient(135deg,_#000000,_#15B3E4)] dark:bg-[linear-gradient(135deg,_#ffffff,_#15B3E4)]  ">
        <IconContext.Provider
          value={{
            className:
              "global-class-name rounded-full h-[90%] w-[90%] text-white dark:text-black hover:text-black hover:bg-[linear-gradient(135deg,_#ffffff,_#15B3E4)] dark:hover:text-white dark:hover:bg-[linear-gradient(135deg,_#000000,_#15B3E4)] ",
          }}
        >
          <FaArrowAltCircleLeft />
        </IconContext.Provider>
      </div>
      <div className=" flex items-center justify-center absolute w-[5%] aspect-square rounded-full z-10 right-6 bg-[linear-gradient(135deg,_#000000,_#15B3E4)] dark:bg-[linear-gradient(135deg,_#ffffff,_#15B3E4)] ">
        <IconContext.Provider
          value={{
            className:
              "global-class-name rounded-full h-[90%] w-[90%] text-white dark:text-black hover:text-black hover:bg-[linear-gradient(135deg,_#ffffff,_#15B3E4)] dark:hover:text-white dark:hover:bg-[linear-gradient(135deg,_#000000,_#15B3E4)]",
          }}
        >
          <FaArrowAltCircleRight />
        </IconContext.Provider>
      </div>
    </div>
  );
};
export default Banner;
