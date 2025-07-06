const SearchBar = () => {
  return (
    <div className=" w-[24rem] h-[3.1rem] rounded-full flex items-center justify-center bg-[linear-gradient(135deg,_#000000,_#15B3E4)] dark:bg-[linear-gradient(135deg,_#ffffff,_#15B3E4)] dark:shadow-[#15B3E4] shadow-black shadow-md ">
      <div className=" w-[23.6rem] h-[2.7rem] flex items-center justify-between bg-white dark:bg-black  rounded-full">
        {/* input-box */}
        <input
          type="text"
          placeholder="Search"
          className="mx-4 h-[2.2rem] ps-1 w-54 dark:bg-black outline-none placeholder:font-bruno placeholder:text-gray-600 font-bruno dark:text-white text-black"
        />
        {/* button */}
        <div className=" h-[2.2rem] w-[6.2rem] me-[0.3rem] rounded-full flex items-center justify-center bg-[linear-gradient(135deg,_#15B3E4,_#000000)] dark:bg-[linear-gradient(135deg,_#15B3E4,_#ffffff)] ">
            <button className=" bg-white dark:bg-black dark:text-white text-[0.6rem] h-[1.8rem] w-[5.1rem] rounded-full font-bruno font-bold hover:bg-transparent hover:text-white dark:hover:bg-transparent dark:hover:text-black ">
                SEARCH
            </button>
        </div>
      </div>
    </div>
  );
};
export default SearchBar;
