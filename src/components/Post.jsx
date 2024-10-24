import { Link } from "react-router-dom";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { LiaCommentDots } from "react-icons/lia";
import { PropTypes } from "prop-types";
import { Comments } from "./Comments";
import { useState, useContext } from "react";
import { HiDotsHorizontal } from "react-icons/hi";
import { useQuery, useQueryClient, useMutation} from '@tanstack/react-query';
import { MakeRequest } from '../Axios';
import moment from "moment";
import { AuthContext } from "../context/AuthContext";

export const Post = ({ post }) => {
  const [commentOpen, setCommentOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const { currentUser } = useContext(AuthContext);

  const { data, isLoading } = useQuery({
    queryKey: ['likes', post.id],
    queryFn: () =>
      MakeRequest.get("/likes?postId=" + post.id).then((res) => res.data),
  });

  // Debugging: log the fetched data
  console.log('Fetched likes data:', data);

  const queryClient =  useQueryClient()

  const mutation = useMutation({
    mutationFn: (liked) => {
      if (liked)
      return MakeRequest.delete("/likes?postId=" + post.id);
      return MakeRequest.post("/likes", {postId: post.id})
    },
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["likes"] })
    },
  })

  const deleteMutation = useMutation({
    mutationFn: (postId) => {
      return MakeRequest.delete("/posts/" +postId)
    },
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["posts"] })
    },
  })

  const handleLike = () => {
    mutation.mutate(data.includes(currentUser.id))
  }

  const handleDelete = () => {
    deleteMutation.mutate(post.id)
  }

  return (
    <div className="flex flex-col dark:text-gray-200 bg-white shadow-md rounded-md dark:bg-gray-700 mx-10 my-4 p-8">
      <div className="flex justify-between items-center pb-6">
        <Link to={`/profile/${post.userId}`}>
          <div className="flex items-center gap-3">
            <img
              className="rounded-full object-cover h-14 w-14"
              src={post.profilePic}
              alt={`${post.username}'s profile picture`}
            />
            <span className="text-xl">{post.username}</span>
          </div>
        </Link>
        <div className="flex gap-4 items-center">
          <span>{moment(post.createdAt).fromNow()}</span>
          <HiDotsHorizontal onClick={()=>setMenuOpen(!menuOpen)}/>
          {menuOpen && post.userId === currentUser.id && ( <button onClick={handleDelete}>delete</button>)}
        </div>
      </div>
      <img
        className="object-cover w-[500px] h-[500px]"
        src={"./upload/" + post.img}
        alt="Post content"
      />
      <p>{post.desc}</p>
      <div className="flex gap-4">
        <div className="flex gap-2 items-center py-6">
          {isLoading ? "loading" : data.includes(currentUser.id) ? (
            <FaHeart className="size-6 text-fuchsia-500" onClick={handleLike} />
          ) : (
            <FaRegHeart className="size-6 text-fuchsia-500" onClick={handleLike}/>
          )}
          {Array.isArray(data) ? (
            <>
              {data.length} Likes
            </>
          ) : isLoading ? (
            <div>Loading Likes...</div>
          ) : (
            <div>No Likes Found</div>
          )}
        </div>
        <div
          className="flex gap-2 items-center py-6"
          onClick={() => setCommentOpen(!commentOpen)}
        >
          <LiaCommentDots className="size-7" /> Comments
        </div>
      </div>
      {commentOpen && <Comments postId={post.id} />}
    </div>
  );
};

Post.propTypes = {
  post: PropTypes.object.isRequired,
};
