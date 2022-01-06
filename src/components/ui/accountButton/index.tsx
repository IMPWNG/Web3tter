import { useMoralis } from "react-moralis";
import { Menu, Transition } from '@headlessui/react';
import { Button } from "antd";
import { Fragment } from 'react';
import { getExplorer } from "../../../helpers/networks";
import { getEllipsisTxt } from "../../../helpers/formatters";

import Blockie from "../blockies";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
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
    );
}

