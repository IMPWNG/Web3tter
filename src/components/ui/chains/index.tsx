import { useEffect, useState, Fragment } from "react";

import { useChain } from "react-moralis";

import { Listbox, Transition } from '@headlessui/react'

import { PolygonLogo, ETHLogo, AvaxLogo } from "./Logo";

const networkItem = [
    {
        key: "0x1",
        value: "Ethereum",
        icon: <ETHLogo />,
    },
    {
        key: "0x539",
        value: "Local Chain",
        icon: <ETHLogo />,
    },
    {
        key: "0x5",
        value: "Goerli Testnet",
        icon: <ETHLogo />,
    },
    {
        key: "0x89",
        value: "Polygon",
        icon: <PolygonLogo />,
    },
    {
        key: "0x13881",
        value: "Mumbai",
        icon: <PolygonLogo />,
    },
    {
        key: "0xa86a",
        value: "Avax",
        icon: <AvaxLogo />,
    },

];
export default function Chains() {
    const { switchNetwork, chainId, chain } = useChain();
    const [selected, setSelected] = useState(networkItem[0]);

    console.log("chain", chain)

    useEffect(() => {
        if (!chainId) return null;
        const newSelected = networkItem.find((item) => item.key === chainId);
        setSelected(newSelected);
        console.log("current chainId: ", chainId);
    }, [chainId]);

    const handleMenuClick = (e) => {
        console.log("switch to: ", e.key);
        switchNetwork(e.key);
    };

    return (
        <div>
            <Listbox value={selected} onChange={handleMenuClick}>
                {({ open }) => (
                    <div className="sticky top-0 py-1.5 bg-black z-50 w-11/12 xl:w-9/12">
                        <span className="focus:border-[#1d9bf0]">
                            <Listbox.Button className="pt-2 pb-2 bg-transparent outline-none text-[#d9d9d9] inset-0 pl-11 border border-transparent w-full focus:border-[#1d9bf0] rounded-full focus:bg-black focus:shadow-lg">
                                <span className="text-center flex justify-evenly">{selected?.value}{selected?.icon}</span>
                            </Listbox.Button>
                        </span>
                        <Transition
                            as={Fragment}
                            show={open}
                            leave="transition ease-in duration-100"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Listbox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                {networkItem.map((network) => (
                                    <Listbox.Option
                                        key={network.key}

                                        className={({ active }) =>
                                            `${active ? 'text-amber-900 bg-amber-500' : 'text-gray-900'}
                                            cursor-default select-none relative py-2 pl-10 pr-4`
                                        }
                                        value={network}
                                    >
                                        {({ selected, active }) => (
                                            <>
                                                <span
                                                    className={`${selected ? "font-medium" : "font-normal"
                                                        } block truncate`}
                                                >
                                               
                                                        {network.value}{network.icon}
                                                 
                                                </span>
                                                <span
                                                    className={`${selected ? "font-medium" : "font-normal"
                                                        } block truncate`}
                                                >
                                                </span>
                                                {selected ? (
                                                    <span
                                                        className={`${active ? 'text-amber-600' : 'text-amber-600'
                                                            }
                                                         absolute inset-y-0 left-0 flex items-center pl-3`}
                                                    >
                                                    </span>
                                                ) : null}
                                            </>
                                        )}
                                    </Listbox.Option>
                                ))}
                            </Listbox.Options>
                        </Transition>
                    </div>
                )}
            </Listbox>
        </div>
    );
}
