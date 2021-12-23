import { SparklesIcon } from "@heroicons/react/outline";
import { useState, useEffect } from "react";
import TokenPrice from "./ui/tokenPrice";

export default function Feed() {

    return (
        <div className="text-white flex-grow border-l border-r border-gray-700 max-w-2xl sm:ml-[73px] xl:ml-[370px]">
            <div className="text-[#d9d9d9] flex items-center sm:justify-between py-2 px-3 sticky top-0 z-50 bg-black border-b border-gray-700">
                <h2 className="text-lg sm:text-xl font-bold flex items-center justify-center xl:px-0 ml-auto">
                    <TokenPrice 
                        address="0x1f9840a85d5af5bf1d1762f925bdaddc4201f984"
                        image="https://cloudflare-ipfs.com/ipfs/QmXttGpZrECX5qCyXbBQiqgQNytVGeZW5Anewvh2jc4psg/"
                        chain="eth"
                        size="40px"
                    />
                </h2>
                <div className="hoverAnimation w-9 h-9 flex items-center justify-center xl:px-0 ml-auto">
                    <SparklesIcon className="h-5 text-white" />
                </div>
            </div>
           
            <div className="pb-72">\
            </div>

        </div>
    )
}
