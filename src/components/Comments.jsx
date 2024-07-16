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
        <img src={currentUser.profilePic} alt="" />
        <input className="w-full m-3" type="text" placeholder="write a comment" />
        <button>Send</button>
      </div>
      {comments.map(comment=>(
        <div key={comment.id}>
          <div className="flex items-center">
            <img src={comment.profilePic} alt="" />
            <span>{comment.name}</span>
          </div>
          <p>{comment.desc}</p>
        </div>
      ))}
    </div>
  )
}