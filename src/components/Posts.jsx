import { useQuery } from '@tanstack/react-query'
import { Post } from "./Post"
import { MakeRequest } from '../Axios'

export const Posts = () => {
  const { error, isPending, data } = useQuery({
    queryKey: ['posts'],
    queryFn: () =>
      MakeRequest.get("/posts").then((res)=> {
        return res.data
      })
  })

  

  return (
    <div className="flex flex-col ">
      {error
        ? "Something went wrong!"
        : isPending
        ? "loading..."
        : data.map((post)=>
        <Post post={post} key={post.id}/>
      )}
    </div>
  )
}