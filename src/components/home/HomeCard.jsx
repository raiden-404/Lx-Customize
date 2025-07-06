import { FaStar } from "react-icons/fa";
import { IconContext } from "react-icons";
import { IoHeartCircleSharp } from "react-icons/io5";

const HomeCard = () => {
  return (
    <div className="bg-white relative dark:bg-black shadow-sm shadow-black dark:shadow-white 
      w-[48%] sm:w-[48%] md:w-[30%] lg:w-[22%] aspect-[9/14] rounded-2xl p-2 transition-transform hover:scale-[1.02]">

      {/* Responsive Wishlist Icon */}
      <div className="absolute -top-4 -right-3 sm:-top-5 sm:-right-4">
        <IconContext.Provider
          value={{
            className: "text-red-700 w-6 h-6 sm:w-8 sm:h-8",
          }}
        >
          <IoHeartCircleSharp />
        </IconContext.Provider>
      </div>

      {/* Image Section */}
      <div className="flex items-center mx-auto overflow-hidden w-full h-[46%] shadow-sm shadow-black dark:shadow-white rounded-2xl">
        <img
          className="object-cover w-full h-full rounded-2xl"
          src="https://images.meesho.com/images/products/495053972/lkho1_512.jpg"
          alt=""
        />
      </div>

      {/* Title */}
      <div className="w-full mt-3 h-[16%] line-clamp-2 px-2">
        <h1 className="font-inter text-sm sm:text-base text-gray-900 dark:text-gray-200 font-semibold">
          Customize Photo Happy Anniversary Greeting Cards - Your Unique Expression of Love, For Girlfriend, Boyfriend, Husband, Wife, Lover
        </h1>
      </div>

      {/* Free Delivery */}
      <div className="border border-black dark:border-white mx-2 mt-2 w-fit px-3 py-1 rounded-full bg-gray-300 dark:bg-gray-900">
        <p className="font-inter font-semibold text-xs sm:text-sm dark:text-gray-300 text-center">Free Delivery</p>
      </div>

      {/* Rating */}
      <div className="flex items-center mt-2 px-2">
        <div className="border border-green-950 dark:border-green-200 flex bg-green-900 items-center justify-center px-2 py-1 rounded-lg">
          <p className="font-inter flex items-center gap-1 text-white font-bold text-xs sm:text-sm">
            4.3
            <FaStar className="w-3 h-3 sm:w-4 sm:h-4" />
          </p>
        </div>
        <p className="font-inter text-gray-700 dark:text-gray-400 font-semibold text-xs sm:text-sm ml-3">(3,224)</p>
      </div>

      {/* Price Section */}
      <div className="flex items-center gap-2 mt-3 px-2">
        <p className="font-inter text-black dark:text-white font-bold text-sm sm:text-lg">₹249</p>
        <p className="font-inter text-gray-700 dark:text-gray-400 font-bold text-sm sm:text-base line-through">₹465</p>
        <p className="font-inter text-green-900 dark:text-green-500 font-bold text-sm sm:text-base">47% off</p>
      </div>
    </div>
  );
};

export default HomeCard;
