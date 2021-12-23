import { SearchIcon } from "@heroicons/react/outline";
import { Ethereum } from "@icons-pack/react-simple-icons";

import Chains from "./ui/chains";
import NativeBalance from "./ui/nativeBalance";

export default function WalletInfo() {
    return (
        <div className="hidden lg:inline ml-8 xl:w-[450px] py-1 space-y-5">
            <Chains />
            <div className="text-[#d9d9d9] space-y-3 bg-[#15181c] pt-2 rounded-xl w-11/12 xl:w-9/12">
                <h4 className="font-bold text-xl px-4">Wallet Balance</h4>
                <div
                    className="hover:bg-white hover:bg-opacity-[0.03] px-4 py-2 cursor-pointer transition duration-200 ease-out flex items-center"
                >
                    <Ethereum
                        // src={result.userImg}
                        width={50}
                        height={50}
                        // objectFit="cover"
                        className="rounded-full"
                    />
                    <div className="ml-4 leading-5 group">
                        <h4 className="font-bold group-hover:underline">
                            <NativeBalance />
                        </h4>
                    </div>
                    <button className="ml-auto bg-white text-black rounded-full font-bold text-sm py-1.5 px-3.5">
                        SEND
                    </button>
                </div>
                <button className="hover:bg-white hover:bg-opacity-[0.03] px-4 py-3 cursor-pointer transition duration-200 ease-out flex items-center justify-between w-full text-[#1d9bf0] font-light">
                    Show more
                </button>
            </div>
            <div className="text-[#d9d9d9] space-y-3 bg-[#15181c] pt-2 rounded-xl w-11/12 xl:w-9/12">
                <h4 className="font-bold text-xl px-4">NFT Balance</h4>
                <button className="hover:bg-white hover:bg-opacity-[0.03] px-4 py-3 cursor-pointer transition duration-200 ease-out flex items-center justify-between w-full text-[#1d9bf0] font-light">
                    Show more
                </button>
            </div>

           
        </div>
    );
}