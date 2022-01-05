import { useMoralisQuery } from "react-moralis";
import { useEffect, useState } from "react";
import { Comment, Avatar, Divider } from "antd";

import Text from "antd/lib/typography/Text";
import Blockie from "../blockies";
import cardPostStyle from "../cardPostStyle";


const Post = ({post}) => {
    const { contentId } = post;
    const [postContent, setPosContent] = useState({ title: "default", content: "default" });
    const { data } = useMoralisQuery("Contents", (query) => query.equalTo("contentId", contentId));

    useEffect(() => {
        function extractUri(data) {
            const fetchedContent = JSON.parse(JSON.stringify(data, ["contentUri"]));
            const contentUri = fetchedContent[0]["contentUri"];
            return contentUri;
        }
        async function fetchIPFSDoc(ipfsHash) {
            console.log(ipfsHash);
            const url = ipfsHash;
            const response = await fetch(url);
            return await response.json();
        }
        async function processContent() {
            const content = await fetchIPFSDoc(extractUri(data));
            setPosContent(content);
        }
        if (data.length > 0) {
            processContent();
        }
    }, [data]);

    const loading = "";

    const result = (

        <Comment
            style={{ ...cardPostStyle.card, padding: "0px 15px", marginBottom: "10px" }}
            author={<Text strong>{post["postOwner"]}</Text>}
            avatar={<Avatar src={<Blockie address={post["postOwner"]} scale="4" />}></Avatar>}
            content={
                <>
                    <Text strong style={{ fontSize: "20px", color: "#333" }}>
                        {postContent["title"]}
                    </Text>
                    <p style={{ fontSize: "15px", color: "#111" }}>{postContent["content"]}</p>
                    <Divider style={{ margin: "15px 0" }} />
                </>
            }
        />
    )
    return postContent["title"] === "default" ? loading : result;
}


export default Post