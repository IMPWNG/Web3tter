import { useMoralisFile } from "react-moralis";
import { useMoralis } from "react-moralis";
import { useWeb3ExecuteFunction } from "react-moralis";
import { useState } from 'react';
import { message } from "antd";


import { EmojiHappyIcon } from '@heroicons/react/outline';
import "emoji-mart/css/emoji-mart.css";
import { Picker } from "emoji-mart";

import Blockie from "../blockies";

export default function Input() {

    const { contractABI, contractAddress } = useMoralis();
    const contractABIJson = JSON.parse(contractABI);
    const ipfsProcessor = useMoralisFile();
    const contractProcessor = useWeb3ExecuteFunction();
    const [content, setContent] = useState("");
    const [showEmojis, setShowEmojis] = useState(false);
    const [loading, setLoading] = useState(false);

    const addPost = async (post) => {
        const contentUri = await processContent(post);
        const options = {
            contractAddress: contractAddress,
            functionName: "createPost",
            abi: contractABIJson,
            params: {
                _parentId: "0x91",
                _contentUri: contentUri,
            },
        }
        await contractProcessor.fetch({
            params: options,
            onSuccess: () => message.success("success"),
            onError: (error) => message.error(error),
        });
        if (loading) return;
        setLoading(true);
    };

    const processContent = async (content) => {
        const ipfsResult = await ipfsProcessor.saveFile(
            "post.json",
            { base64: btoa(JSON.stringify(content)) },
            { saveIPFS: true }
        )
        return ipfsResult._ipfs;
    }

    const validateContent = () => {
        let result = !content ? false : true;
        return result
    }

    const clearForm = () => {
        setContent('');
    }

    function onSubmit(e) {
        e.preventDefault();
        if (!validateContent()) {
            return message.error("Remember to add the content of your post")
        }
        addPost({ content })
        clearForm();
    }

    const addEmoji = (e) => {
        let sym = e.unified.split("-");
        let codesArray = [];
        sym.forEach((el) => codesArray.push("0x" + el));
        let emoji = String.fromCodePoint(...codesArray);
        setContent(content + emoji);
    };
   
    <Blockie className = "h-8 w-8 rounded-full" currentWallet scale = { 3} />

    return (
        <form 
            className={`border-b border-gray-700 p-3 flex space-x-3 overflow-y-scroll ${loading && "opacity-60"}`}
            onSubmit={onSubmit}
        >
        <Blockie className="h-8 w-8 rounded-full" currentWallet scale={3} />
            <div className="w-full divide-y divide-gray-700">
                <input className={`pb-7 ${content && "space-y-2.5"}`}>
                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        placeholder="What's happening ?"
                        className="bg-transparent outline-none text-[#d9d9d9] text-lg placeholder-gray-500 tracking-wide w-full min-h-[50px]"
                    />
                </input>
                {!loading && (
                    <div className="flex items-center justify-between pt-2.5">
                        <div className="flex items-center">
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
                        </div>
                        <button type="submit" className="bg-[#1d9bf0] text-white rounded-full px-4 py-1.5 font-bold shadow-md hover:bg-[#1a8cd8] disabled:hover:bg-[#1d9bf0] disabled:opacity-50 disabled:cursor-default">
                            Send
                        </button>
                    </div>
                )}
            </div>
        </form>
    );
}