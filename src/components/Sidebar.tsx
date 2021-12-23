import React from 'react';
import SidebarLink from './ui/sideBarLink';
import { useMoralis } from "react-moralis";
import { Ethereum } from "@icons-pack/react-simple-icons";
import { HomeIcon } from "@heroicons/react/solid";
import { PhotographIcon, PencilAltIcon, ViewBoardsIcon, NewspaperIcon, SearchIcon } from "@heroicons/react/outline";

import AccountButton from "./ui/accountButton";


export default function Sidebar() {

    return (
        <div className="hidden sm:flex flex-col items-center xl:items-start xl:w-[340px] p-2 fixed h-full">
            <div className="flex items-center justify-center w-14 h-14 hoverAnimation p-0 xl:ml-24">
                <Ethereum fill="white" width={30} height={30} />
            </div>
            <div className="space-y2.5 mt-4 mb-2.5 xl:ml-24">
                <SidebarLink text="Home" Icon={HomeIcon} active />
                <SidebarLink text="NFT Gallery" Icon={PhotographIcon} />
                <SidebarLink text="NFT Creation" Icon={PencilAltIcon} />
                <SidebarLink text="NFT Dashboard" Icon={ViewBoardsIcon} />
                <SidebarLink text="NFT Actu" Icon={NewspaperIcon} />
            </div>
            <div className="sticky top-0 py-1.5 bg-black z-50 w-11/12 xl:w-9/12">
                <div className="space-y2.5 mt-4 mb-2.5 xl:ml-24 flex items-center bg-[#202327] p-3 rounded-full relative">
                    <SearchIcon className="text-gray-500 h-5 z-50" />
                    <input
                        type="text"
                        className="bg-transparent placeholder-gray-500 outline-none text-[#d9d9d9] absolute inset-0 pl-11 border border-transparent w-full focus:border-[#1d9bf0] rounded-full focus:bg-black focus:shadow-lg"
                        placeholder="Search ... "
                    />
                </div>
            </div>
            <AccountButton />
        </div>
    )
};