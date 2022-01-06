import React from 'react';

import { Ethereum } from "@icons-pack/react-simple-icons";
import { HomeIcon } from "@heroicons/react/solid";
import { HashtagIcon, BellIcon, InboxIcon, BookmarkIcon, ClipboardListIcon, DotsCircleHorizontalIcon } from "@heroicons/react/outline";

import SidebarLink from './ui/sideBarLink';
import AccountButton from "./ui/accountButton";


export default function Sidebar() {

    return (
        
        <div className="hidden sm:flex flex-col items-center xl:items-start xl:w-[340px] p-2 fixed h-full">
            <div className="flex items-center justify-center w-14 h-14 hoverAnimation p-0 xl:ml-24">
                <Ethereum fill="white" width={30} height={30} />
            </div>
            <div className="space-y2.5 mt-4 mb-2.5 xl:ml-24">
                <SidebarLink text="Home" Icon={HomeIcon} active />
                <SidebarLink text="Explore" Icon={HashtagIcon} />
                <SidebarLink text="Notifications" Icon={BellIcon} />
                <SidebarLink text="Messages" Icon={InboxIcon} />
                <SidebarLink text="Bookmarks" Icon={BookmarkIcon} />
                <SidebarLink text="List" Icon={ClipboardListIcon} />
                <SidebarLink text="More" Icon={DotsCircleHorizontalIcon} />
                
            </div>
            <div className="space-y2.5 mt-4 mb-2.5 xl:ml-24 fixed bottom-0">
                <AccountButton />
            </div>
        </div>
        
        
    )
};