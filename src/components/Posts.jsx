import userData from "../data/dummyData"
import { Post } from "./Post"
export const Posts = () => {
  return (
    <div className="flex flex-col ">
      {userData.map(post=>(
        <Post post={post} key={post.id}/>
      ))}
    </div>
  )
}