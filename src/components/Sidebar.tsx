import React from 'react';
import SidebarLink from "../components/ui/SidebarLink";
import { useMoralis } from "react-moralis";
import { Ethereum } from "@icons-pack/react-simple-icons";
import { HomeIcon } from "@heroicons/react/solid";
import { HashtagIcon, BellIcon, InboxIcon, BookmarkIcon, ClipboardListIcon, UserIcon, DotsCircleHorizontalIcon, DotsHorizontalIcon } from "@heroicons/react/outline";



export default function Sidebar() {
    const { logout } = useMoralis();
    return (
        <div className="hidden sm:flex flex-col items-center xl:items-start xl:w-[340px] p-2 fixed h-full">
            <div className="flex items-center justify-center w-14 h-14 hoverAnimation p-0 xl:ml-24">
                <Ethereum fill="white" width={30} height={30} />
            </div>
            <div className="space-y2.5 mt-4 mb-2.5 xl:ml-24">
                <SidebarLink text="Home" Icon={HomeIcon} active />
                <SidebarLink text="NFT Gallery" Icon={HomeIcon} active />
                <SidebarLink text="Creator Mode" Icon={HomeIcon} active />
                <SidebarLink text="Dashboard" Icon={HomeIcon} active />
                <SidebarLink text="Actu" Icon={HomeIcon} active />
            </div>
            <div onClick={() => logout()} className="text-[#d9d9d9] flex items-center justify-center hoverAnimation xl:ml-auto xl:-mr-5 mt-auto">
                <img src="" alt="" className="h-10 w-10 rounded-full xl:mr-2.5" />
                <div className="hidden xl:inline leading-5">
                    <h4 className="font-bold">11</h4>
                    <p className="text-[#6e767d]">@11</p>
                </div>
                <DotsHorizontalIcon className="h-5 hidden xl:inline ml-10" />
            </div>
        </div>
    )
};