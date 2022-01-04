import { useEffect, useState, useRef } from "react";
import { useMoralis } from "react-moralis";

import Blockie from "../blockies";
import { getEllipsisTxt } from "../../../helpers/formatters";

export default function Post() {

    const { Moralis, user, account } = useMoralis();
    const currentUserId = user.id;
    const [inputs, setInputs] = useState<any[]>([]);
    const [updated, setUpdated] = useState();
    const newMessage = new Moralis.Object("Messages");

    const getAllMessages = async () => {
        const result = await Moralis.Cloud.run("getAllMessages");
        setInputs(result)
    }

    const isCurrentUser = (userId) => {
        return currentUserId === userId;
    }


 


    return (
        <div className="p-3 flex cursor-pointer border-b border-gray-700">
            <Blockie className="h-8 w-8 rounded-full" currentWallet scale={3} />
            
            <div className="flex flex-col space-y-2 w-full">
                <div className="flexjustify-between">
                    <div className="text-[#6e767d">
                        <div className="inline-block group">
                            <h4 className="font-bold text-[15px] sm:text-base text-[#d9d9d9] group-hover:unerline inline-block">
                                <p className="ml-3 p-0.5">{getEllipsisTxt(account, 6)}</p>
                            </h4>
                        </div>


                       
                            <div className="text-[#d9d9d9] text-[15px] sm:text-base mt-0.5">

                            {inputs && inputs.map((message) =>

                            <div
                                key={message[0] && message[0].data.id}>
                                    {!isCurrentUser(message[0] && message[0].userId)}
                            </div>





                            )}




                            </div>
                   
                    </div>
                </div>
            </div>
        </div>
    );
}