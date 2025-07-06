const Categories = () => {
  return (
    <ul className="flex flex-wrap gap-3 justify-center sm:justify-around text-black dark:text-white my-4 py-2 font-bruno px-4 sm:px-7 text-sm sm:text-base md:text-lg">
      {["CUPS", "STICKERS", "PILLOW", "FRAMES"].map((item, index) => (
        <li
          key={index}
          className="shadow-sm shadow-gray-600 dark:shadow-gray-300 py-2 px-5 sm:px-7 rounded-full 
                     hover:bg-slate-200 dark:hover:bg-slate-700 cursor-pointer transition-colors duration-200"
        >
          {item}
        </li>
      ))}
    </ul>
  );
};

export default Categories;
