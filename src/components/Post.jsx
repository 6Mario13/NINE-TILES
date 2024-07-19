import { Link } from "react-router-dom"
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { LiaCommentDots } from "react-icons/lia";
import { PropTypes } from "prop-types"
import { Comments } from "./Comments";
import { useState } from "react";

export const Post = ({post}) => {

  const [commentOpen, setCommentOpen] = useState(false)

  const liked = false;

  return (
    <div className="flex flex-col dark:text-gray-200 bg-white shadow-md rounded-md dark:bg-gray-700 mx-10 my-4 p-8">
      <Link to={`/profile/${post.userId}`}>
        <div className="flex items-center gap-3 pb-6">
          <img className="rounded-full" src={post.profilePic} alt="" />
          <span className="text-xl">{post.name}</span>
        </div>
      </Link>
      <div>
        <img src={post.img} alt="" />
      </div>
      <div className="flex gap-4">
        <div className="flex gap-2 items-center py-6">
          {liked ? <FaRegHeart className="size-6" /> : <FaHeart className="size-6" />}
          Likes
        </div>
        <div className="flex gap-2 items-center py-6" onClick={() => setCommentOpen(!commentOpen)}>
          <LiaCommentDots className="size-7" />Comments
        </div>
      </div>
      {commentOpen && <Comments />}
    </div>
  )
};

Post.propTypes = {
  post: PropTypes.object.isRequired,
}