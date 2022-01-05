
import { useMoralisQuery } from "react-moralis";
import Post from "../post";

const Posts = () => {
    
    const queryPost = useMoralisQuery(
        "Posts",
    );

    const fetchedPosts = JSON.parse(JSON.stringify(queryPost.data, ["postId", "contentId", "postOwner"])).reverse();
    const havePosts = fetchedPosts.length > 0 ? true : false;

    const emptyResult = (
        <div>
            <h3>Be the first to post here for</h3>
        </div>
    );

    const postResult = (<div>
        {fetchedPosts.map((post) => (
            <Post key={post["postId"]} post={post} />
        ))}
    </div>)

    return havePosts ? postResult : emptyResult;
}

export default Posts