import { useState } from "react"
import { MakeRequest } from "../Axios"
import { useMutation, useQueryClient } from "@tanstack/react-query"

export const Update = ({setOpenUpdate, user}) => {
  const [profile, setProfile] = useState(null)
  const [texts, setTexts] = useState({
    username: "",
  })

  const upload = async (file) => {
    try {
      const formData = new FormData()
      formData.append("file", file)
      const res = await MakeRequest.post("/upload", formData)
      return res.data
    } catch (err) {
      console.log(err)
    }
  }

  const handleChange = (e) => {
    setTexts((prev) => ({...prev, [e.target.name]:[e.target.value]}))
  }

  const queryClient =  useQueryClient()

  const mutation = useMutation({
    mutationFn: (user) => {
      return MakeRequest.put("/users", user)
    },
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["user"] })
    },
  })

  const handleClick = async (e)=> {
    e.preventDefault()
    let profileUrl
    profileUrl = profile ? await upload(profile) : user.profilePic
    mutation.mutate({...texts, profilePic: profileUrl})
    setOpenUpdate(false)
  }

  return (
    <div className="absolute w-1/2 h-1/2 m-auto right-0 bottom-0 left-0 top-0 z-[999] bg-gray-200 p-12">
      Update
      <form>
        <input type="file" onChange={(e)=>setProfile(e.target.files[0])}/>
        <input type="text" name="username" onChange={handleChange} />
        <button onClick={handleClick}>Update</button>
      </form>
      <button onClick={()=>setOpenUpdate(false)}>X</button>
    </div>
  )
}