import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";

import NativeBalance from "../nativeBalance";

export default function WalletCard() {
    return (
        <div className="p-3 flex justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card .white-glassmorphism ">
            <div className="flex justify-between flex-col w-full h-full">
                <div className="flex justify-between items-start">
                    <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
                        <SiEthereum fontSize={21} color="#fff" />
                    </div>
                    <BsInfoCircle fontSize={17} color="#fff" />
                </div>
                <div>
                    <div className="text-white font-semibold text-lg mt-1 p-4">
                        <NativeBalance />
                    </div>
                    <button className="ml-auto bg-white text-black rounded-full font-bold text-sm py-1.5 px-3.5">
                        SEND
                    </button>
                </div>
            </div>
        </div>
    );
}


