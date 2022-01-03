import { useState, useRef, useEffect } from 'react'
import { XIcon } from '@heroicons/react/solid';
import { PhotographIcon, DocumentAddIcon, EmojiHappyIcon } from '@heroicons/react/outline';
import "emoji-mart/css/emoji-mart.css";
import { Picker } from "emoji-mart";
import { useMoralis } from "react-moralis";

import Blockie from "../blockies";


export default function Input() {
    const { Moralis, user } = useMoralis();
    const currentUserId = user.id;
    const [date, viewDate] = useState(false);
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState();
    const [updated, setUpdated] = useState("");
    const newMessage = new Moralis.Object("Messages");
    const [input, setInput] = useState("");
    const [selectedFile, setSelectedFile] = useState(null);
    const [showEmojis, setShowEmojis] = useState(false);
    const [loading, setLoading] = useState(false);
    const filePickerRef = useRef(null);
    const subscribeToMessages = async () => {
        let query = new Moralis.Query('Messages');
        let subscription = await query.subscribe();
    }

    useEffect(() => {
        subscribeToMessages();
    }, []);

    useEffect(() => {
        setMessage('');
    }, [updated]);

  
    const sendPost = async () => {
        if (loading) return;
        setLoading(true);
        setLoading(false);
        setInput("");
        setSelectedFile(null);
        setShowEmojis(false);
        newMessage.set('userId', currentUserId);
        newMessage.set('message', message);
        newMessage.save();
    };

    const addImageToPost = (e) => {
        const reader = new FileReader();
        if (e.target.files[0]) {
            reader.readAsDataURL(e.target.files[0]);
        }

        reader.onload = (readerEvent) => {
            setSelectedFile(readerEvent.target.result);
        };
    };

    const addEmoji = (e) => {
        let sym = e.unified.split("-");
        let codesArray = [];
        sym.forEach((el) => codesArray.push("0x" + el));
        let emoji = String.fromCodePoint(...codesArray);
        setInput(input + emoji);
    };
   
    <Blockie className = "h-8 w-8 rounded-full" currentWallet scale = { 3} />

    return (
        <div className={`border-b border-gray-700 p-3 flex space-x-3 overflow-y-scroll ${loading && "opacity-60"}`}>
            <Blockie className="h-8 w-8 rounded-full" currentWallet scale={3} />
            <div className="w-full divide-y divide-gray-700">
                <div className={`${selectedFile && "pb-7"} && ${input && "space-y-2.5"}`}>
                    <textarea
                        onChange={(e) => setInput(e.target.value)}
                        value={input} 
                        placeholder="What's happening ?"
                        className="bg-transparent outline-none text-[#d9d9d9] text-lg placeholder-gray-500 tracking-wide w-full min-h-[50px]"
                    />
                    {selectedFile && (
                        <div className="relative">
                            <div onClick={() => setSelectedFile(null)} className="absolute w-8 h-8 bg-[#15191c] hover:bg-[#272c26] bg-opacity-75 rounded-full flex items-center justify-center top-1 left-1 cursor-pointer">
                                <XIcon
                                    className="text-white h-5"
                                />
                            </div>
                            <img
                                src={selectedFile}
                                alt=""
                                className="rounded-2xl max-h-80 object-contain"
                            />
                        </div>
                    )}
                </div>
                {!loading && (
                    <div className="flex items-center justify-between pt-2.5">
                        <div className="flex items-center">
                            <div onClick={() => filePickerRef.current.click()} className="icon">
                                <PhotographIcon
                                    className="h-[22px] text-[#1d9bf0]"
                                />
                                <input
                                    type="file"
                                    hidden
                                    onChange={addImageToPost}
                                    ref={filePickerRef}
                                />
                            </div>
                            <div className="icon" onClick={() => setShowEmojis(!showEmojis)}>
                                <EmojiHappyIcon
                                    className="text-[#1d9bf0] h-[22px]"
                                />
                            </div>
                            {showEmojis && (
                                <Picker
                                    onSelect={addEmoji}
                                    style={{
                                        position: "absolute",
                                        marginTop: "465px",
                                        marginLeft: -40,
                                        maxWidth: "320px",
                                        borderRadius: "20px",
                                    }}
                                    theme="dark"
                                />
                            )}
                            <div className="icon rotate-90">
                                <DocumentAddIcon
                                    className="text-[#1d9bf0] h-[22px]"
                                />
                            </div>
                        </div>
                        <button disabled={!input && !selectedFile} onClick={() => sendPost()} className="bg-[#1d9bf0] text-white rounded-full px-4 py-1.5 font-bold shadow-md hover:bg-[#1a8cd8] disabled:hover:bg-[#1d9bf0] disabled:opacity-50 disabled:cursor-default">
                            Send
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}