import React, { useEffect, useState, useRef } from "react";
import { useMoralis } from "react-moralis";


export default function Post() {

    const { Moralis, user } = useMoralis();
    const currentUserId = user.id;
    const [message, setMessage] = useState(null);
    const [messages, setMessages] = useState();
    const [updated, setUpdated] = useState();

    const getAllMessages = async () => {
        const result = await Moralis.Cloud.run("getAllMessages");
        setMessages(result)
    }

    const isCurrentUser = (userId) => {
        return currentUserId === userId;
    }

    useEffect(() => {
        setMessage('');
    }, [updated]);

    useEffect(() => {
        getAllMessages();
    }, [updated]);



    return (
        <div className="p-3 flex border-b border-gray-700">
            <div className="flex flex-col space-y-2 w-full">
                <div className="flex justify-between">
                    <div className="text-[#6e767d">
                        <div className="inline-block group">
                        </div>
                        ·{"   "}

                
                           
                        <span className="hover:underline text-sm sm:text-[15px]">
                        </span>
                    </div>
                </div>
            </div>
            
        </div>
    );
}