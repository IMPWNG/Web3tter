import { useMoralis } from "react-moralis";
import { Menu, Transition } from '@headlessui/react';
import { Button } from "antd";
import { Fragment } from 'react';
import { getExplorer } from "../../../helpers/networks";
import { getEllipsisTxt } from "../../../helpers/formatters";

import { LogoutIcon, EyeIcon } from "@heroicons/react/outline";


import Blockie from "../blockies";

export default function AccountButton() {
    const { account, chainId, logout } = useMoralis();
    
    return (
        <div>
            <Menu as="div">
                <div>
                    <Menu.Button className="text-[#d9d9d9] flex items-center justify-center xl:justify-start text-xl space-x-3 hoverAnimation">
                        <Blockie className="rounded-full h-7" currentWallet scale={3} />
                        <span className="hidden xl:inline">{getEllipsisTxt(account, 4)}</span>
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
                    <Menu.Items className="bottom-16 absolute w-20 py-1">
                        <Menu.Item>
                                <a
                                    onClick={() => logout()}
                                className="flex px-4 py-2 text-red-500 cursor-pointer"
                                >
                                    <LogoutIcon className="h-7 "/>
                                <span className="hidden xl:inline justify-center font-bold">Logout</span>
                                </a>
                        </Menu.Item>
                    </Menu.Items>
                </Transition> 
            </Menu>
        </div>
    );

}

