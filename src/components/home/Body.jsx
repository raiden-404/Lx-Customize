import Categories from "../header/Categories";
import Banner from "./Banner";

const Body = () => {
    return (
        <div className="w-[100%] flex flex-col gap-9 bg-white dark:bg-black pt-12">
            <div>
                <Categories />
            </div>
            <div className=" ">
                <Banner />
            </div>
        </div>
    )
}
export default Body;