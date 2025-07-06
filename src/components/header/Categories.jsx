const Categories = () => {
  return (
    <ul className="flex text-black dark:text-white my-4 py-2 items-center justify-around font-bruno px-7 text-lg">
      <li className="shadow-sm shadow-gray-600 py-[1%] px-[7%] rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 cursor-pointer dark:shadow-gray-300 ">
        CUPS
      </li>
      <li className="shadow-sm shadow-gray-600 py-[1%] px-[7%] rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 cursor-pointer dark:shadow-gray-300 ">
        STICKERS
      </li>
      <li className="shadow-sm shadow-gray-600 py-[1%] px-[7%] rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 cursor-pointer dark:shadow-gray-300 ">
        PILLOW
      </li>
      <li className="shadow-sm shadow-gray-600 py-[1%] px-[7%] rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 cursor-pointer dark:shadow-gray-300 ">
        FRAMES
      </li>
    </ul>
  );
};
export default Categories;
