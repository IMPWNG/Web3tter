import React, { useEffect, useState, useRef } from "react";
import { useMoralis } from "react-moralis";


export default function Post() {

    const { Moralis, user } = useMoralis();
    const currentUserId = user.id;
    const [message, setMessage] = useState(null);
    const [messages, setMessages] = useState();
    const [updated, setUpdated] = useState();

    const subscribeToMessages = async () => {
        let query = new Moralis.Query('Messages');
        let subscription = await query.subscribe();
        subscription.on('create', notifyOnCreate);
    }

    const notifyOnCreate = (result) => {
        setUpdated(result)
    }

    const getAllMessages = async () => {
        const result = await Moralis.Cloud.run("getAllMessages");
        setMessages(result)
    }

    const isCurrentUser = (userId) => {
        return currentUserId === userId;
    }

    useEffect(() => {
        subscribeToMessages();
    }, []);


    useEffect(() => {
        setMessage('');
    }, [updated]);

    useEffect(() => {
        getAllMessages();
    }, [updated]);

    const dateConverter = (date) => {
        return date?.toISOString("MM-DD-YYYY").split("T")[0];
    };



    return (
        <div className="p-3 flex border-b border-gray-700">
            <div className="flex flex-col space-y-2 w-full">
                <div className="flex justify-between">
                    <div className="text-[#6e767d">
                        <div className="inline-block group">
                            <div className="text-[#6e767d">
                                <div className="inline-block group">
                                    {!isCurrentUser(message[0] && message[0].userId) &&
                                        <div style={{ flexDirection: 'row' }}>
                                            <div>
                                                {message[0] && message[0].userName}
                                            </div>
                                            <div>
                                                {` (${message[0] && message[0].ethAddress})`}
                                            </div>
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
}