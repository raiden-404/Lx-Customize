import Categories from "../header/Categories";
import Banner from "./Banner";
import HomeCard from "./HomeCard";

const Body = () => {
    return (
        <div className="w-[100%] flex flex-col gap-9 bg-white dark:bg-black pt-12">
            <div>
                <Categories />
            </div>
            <div className=" ">
                <Banner />
            </div>
            <div className="px-[6%] pt-[4%] pb-[3%] flex items-start flex-col">
                <h1 className="text-gray-900 dark:text-gray-100 font-bruno text-4xl underline pb-[3%] " >
                    LATEST
                </h1>
                <div className="w-full h-auto flex gap-y-8 justify-between flex-wrap">
                    <HomeCard /><HomeCard /><HomeCard /><HomeCard /><HomeCard /><HomeCard /><HomeCard /><HomeCard /><HomeCard /><HomeCard /><HomeCard /><HomeCard /><HomeCard /><HomeCard /><HomeCard /><HomeCard /><HomeCard />
                </div>
            </div>
        </div>
    )
}
export default Body;