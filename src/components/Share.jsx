import { useContext, useState } from "react";
import { AuthContext } from "../context/authContext";
import { BiImageAdd } from "react-icons/bi";
import {
  useMutation,
  useQueryClient,
} from '@tanstack/react-query'
import { MakeRequest } from "../Axios";


const Share = () => {
  const [file,setFile] = useState(null)
  const [desc,setDesc] = useState("")

  const upload = async () => {
    try {
      const formData = new FormData()
      formData.append("file", file)
      const res = await MakeRequest.post("/upload", formData)
      return res.data
    } catch (err) {
      console.log(err)
    }
  }

  const {currentUser} = useContext(AuthContext)

  const queryClient =  useQueryClient()

  const mutation = useMutation({
    mutationFn: (newPost) => {
      return MakeRequest.post("/posts", newPost)
    },
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["posts"] })
    },
  })

  const handleClick = async (e)=> {
    e.preventDefault()
    let imgUrl = ""
    if (file) imgUrl = await upload()
    mutation.mutate({desc, img: imgUrl})
    setDesc("")
    setFile(null)
  }

  return (
    <div className="flex gap-3 dark:text-gray-200 bg-white shadow-md rounded-md dark:bg-gray-700 mx-10 my-4 p-8">
      <img className="rounded-full size-10" src={currentUser.profilePic} alt=""/>
      <div className="flex flex-col">
        <input type="file" id="file" style={{display:"none"}} onChange={(e)=> setFile(e.target.files[0])} />
        <label htmlFor="file">
          <div className="flex items-center gap-2">
            < BiImageAdd className="size-6" />
            <span>Add tile</span>
          </div>
        </label>
        <div>
          {file && <img className="h-24 w-24 object-cover"alt="" src={URL.createObjectURL(file)}/>}
        </div>
        <input type="text" placeholder={`Tell us more about this tile  ${currentUser.username}?`} onChange={(e)=> setDesc(e.target.value)} value={desc}/>
        <div>
        <button onClick={handleClick}>Share</button>
        </div>
      </div>
    </div>
  );
};

export default Share;