import AddPost from "./ui/addPost";
import Categories from "./ui/categories";

import { HashtagIcon, BellIcon, InboxIcon, BookmarkIcon, ClipboardListIcon, DotsCircleHorizontalIcon } from "@heroicons/react/outline";
import MobileMenu from "./ui/mobileMenu";


export default function Feed() {

    return (
        <div className="text-white flex-grow border-l border-r border-gray-700 max-w-2xl sm:ml-[73px] xl:ml-[370px]">
            <div className="flex items-center sm:justify-between py-2 px-3 sticky top-0 z-50 bg-black">
                <div>
                    <Categories />
                </div>
                <div className="hoverAnimation w-5 h-9 flex items-center justify-center xl:px-0 ml-auto">
                    <BellIcon />
                </div>
            </div>
            <AddPost />
            <div className="pb-72">
                 feed post
            </div>
            <div className="sm:hidden">
                    <MobileMenu />
                </div>
            </div>
            
  
    )
}
