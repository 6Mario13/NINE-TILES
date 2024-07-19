import { useContext } from "react";
import { AuthContext } from "../context/authContext";

export const Comments = () => {

  const {currentUser} = useContext(AuthContext)

  const comments = [
    {
      id: 1,
      name: "Cat Behemot",
      userId: 1,
      profilePic: "https://placehold.co/30x30",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ea reiciendis consequuntur",
      img: "https://placehold.co/300x300"
    },
    {
      id: 2,
      name: "Cat Felix",
      userId: 2,
      profilePic: "https://placehold.co/30x30",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ea reiciendis consequuntur",
      img: "https://placehold.co/300x300"
    },
    {
      id: 3,
      name: "Cat Garfield",
      userId: 3,
      profilePic: "https://placehold.co/30x30",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ea reiciendis consequuntur",
      img: "https://placehold.co/300x300"
    },
  ];

  return (
    <div>
      <div className="flex items-center gap-3">
        <img className="rounded-full" src={currentUser.profilePic} alt="" />
        <input className="w-4/5 p-3 rounded-md shadow-md focus:ring-4 focus:ring-inset focus:ring-fuchsia-500  leading-6 bg-gray-100" type="text" placeholder="write a comment" />
        <button className="rounded-2xl bg-gray-600 px-8 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-fuchsia-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fuchsia-900 ">Send</button>
      </div>
      {comments.map(comment=>(
        <div className="my-3 p-3 dark:bg-gray-600 bg-gray-100 rounded-md" key={comment.id}>
          <div className="flex items-center gap-3 pb-2">
            <img className="rounded-full" src={comment.profilePic} alt="" />
            <span>{comment.name}</span>
          </div>
          <p>{comment.desc}</p>
        </div>
      ))}
    </div>
  )
}