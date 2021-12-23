import { useMoralis } from "react-moralis";
import { Ethereum } from "@icons-pack/react-simple-icons";

export default function Auth() {
    const { authenticate, isAuthenticated } = useMoralis();

    if (!isAuthenticated) {
        return (
            <div className="flex flex-col items-center space-y-20 pt-48">
                <Ethereum
                    color="white"
                    width={150}
                    height={150}
                />
                <div>
                    <button
                        className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group"
                        onClick={() => authenticate()}
                    >
                        <span className="w-48 h-48 rounded rotate-[-40deg] bg-gradient-to-r from-green-400 to-blue-500 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                        <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
                            Login
                        </span>
                    </button>
                </div>
                <div>
                    <span
                        className="text-white flex justify-center text-2xl bold selection:bg-fuchsia-300 selection:text-fuchsia-900">
                        Build for the future 🔮
                    </span>
                </div>
            </div>
        );
    };
};

