import Chains from "./ui/chains";
import WalletCard from "./ui/walletCard";

export default function WalletInfo() {
    return (
        <div className="hidden lg:inline ml-8 xl:w-[450px] py-1 space-y-5">
            <Chains />
            <WalletCard />

        </div>
    );
    }
