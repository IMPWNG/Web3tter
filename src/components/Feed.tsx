import { useWeb3DappContext } from "../context/Web3Provider/Web3Provider";
import { useState } from "react";
import Posts from "./ui/posts";
import { Avatar, Button } from "antd" 
import Blockie from "./ui/blockies";
import AddPost from "./ui/addPost";
import Categories from "./ui/categories";


export default function Feed() {

    return (
        <div className="text-white flex-grow border-l border-r border-gray-700 max-w-2xl sm:ml-[73px] xl:ml-[370px]">
            <Categories/>
            <AddPost />
            <div className="pb-72">
                 
            </div>
            
        </div>
        
    )
}
