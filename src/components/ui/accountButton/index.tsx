import { useMoralis } from "react-moralis";
import { DotsHorizontalIcon } from "@heroicons/react/outline";
import { Menu, Transition } from '@headlessui/react';
import { Button } from "antd";
import { Fragment, useState } from 'react';
import { getExplorer } from "../../../helpers/networks";
import { getEllipsisTxt } from "../../../helpers/formatters";

import Blockie from "../blockies";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
export default function AccountButton() {
    const { account, chainId, logout } = useMoralis();
    
    return (
        <div className="text-[#d9d9d9] flex items-center justify-center hoverAnimation xl:ml-auto xl:-mr-5 mt-auto">
            <Menu as="div" className="ml-3">
                <div>
                    <Menu.Button className="relative w-full py-2 pl-3 pr-10 text-left flex text-gray-300 hover:text-white rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm">
                        <Blockie className="h-8 w-8 rounded-full" currentWallet scale={3} />
                        <p className="ml-3 p-0.5">{getEllipsisTxt(account, 6)}</p>
                        </Menu.Button>
                </div>
                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items className="z-1 bottom-16 absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                            {({ active }) => (
                                <a
                                    href={`${getExplorer(chainId)}/address/${account}`} target="_blank" rel="noreferrer"
                                    className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                >
                                    View on Explorer
                                </a>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <Button
                                    onClick={() => logout()}
                                    className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-red-500')}
                                >
                                    Sing out
                                </Button>
                            )}
                        </Menu.Item>
                    </Menu.Items>
                </Transition> 
                
            </Menu>
            

        </div>



        // <div >
        //     <img src="" alt="" className="h-10 w-10 rounded-full xl:mr-2.5" />
        //     <div className="hidden xl:inline leading-5">
        //         <h4 className="font-bold">11</h4>
        //         <p className="text-[#6e767d]">@11</p>
        //     </div>
        //     <DotsHorizontalIcon className="h-5 hidden xl:inline ml-10" />
        //     onClick = {() => logout()}
        // </div>
    )

}

