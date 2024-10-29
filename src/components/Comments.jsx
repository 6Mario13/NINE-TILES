import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useQuery,useMutation,useQueryClient, } from "@tanstack/react-query";
import { MakeRequest } from "../Axios";
import PropTypes from "prop-types"

export const Comments = ({postId}) => {
  const [desc, setDesc] = useState("")

  const {currentUser} = useContext(AuthContext)

  const { error, isLoading, data } = useQuery({
    queryKey: ["comments"],
    queryFn: () =>
      MakeRequest.get(`/comments?postId=${postId}`).then((res)=> {
        return res.data
      })
  })

  const queryClient =  useQueryClient()

  const mutation = useMutation({
    mutationFn: (newComment) => {
      return MakeRequest.post("/comments", newComment)
    },
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["comments"] })
    },
  })

  const handleClick = async (e)=> {
    e.preventDefault()
    mutation.mutate({desc, postId})
    setDesc("")
  }

  return (
    <div>
      <div className="flex items-center gap-3">
        <img className="rounded-full" src={currentUser.profilePic} alt="" />
        <input className="w-4/5 p-3 rounded-md shadow-md focus:ring-4 focus:ring-inset focus:ring-fuchsia-500  leading-6 bg-gray-100" type="text" placeholder="write a comment" value={desc} onChange={(e)=>setDesc(e.target.value)}/>
        <button onClick={handleClick} className="rounded-2xl bg-gray-600 px-8 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-fuchsia-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fuchsia-900 ">Send</button>
      </div>
      {error
        ? "Something went wrong!"
        : isLoading
        ? "loading..."
        : data.map((comment)=>(
        <div className="my-3 p-3 dark:bg-gray-600 bg-gray-100 rounded-md" key={comment.id}>
          <div className="flex items-center gap-3 pb-2">
            <img className="rounded-full" src={comment.profilePic} alt="" />
            <span>{comment.username}</span>
            <p>{comment.desc}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

Comments.propTypes = {
  postId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};