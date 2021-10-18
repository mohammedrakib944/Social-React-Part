import "./post.css";
import { MoreVert, Favorite } from "@material-ui/icons";
import { Users } from "../../dummyData";
import { useState } from "react";

export default function Post({ post }) {
  const [like, setlike] = useState(post.like);
  const [isliked, setIsliked] = useState(false);

  const likeHandler = () => {
    setlike(isliked ? like - 1 : like + 1);
    setIsliked(!isliked);
  };
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopleft">
            <img
              className="postProfileImg"
              src={Users.filter((p) => p.id === post.userId)[0].profilePricture}
              alt=""
            />
            <span className="postUsername">
              {Users.filter((u) => u.id === post.userId)[0].username}
            </span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVert htmlColor="var(--fonts-color)" />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img className="postImg" src={post.photo} alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <Favorite className="likeIcon" onClick={likeHandler} />
            <span className="postLikeCounter">{like} people like this</span>
          </div>
          <div className="postBottomLeftRight">
            <span className="postCommentText">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
