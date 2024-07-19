// import { useState } from 'react';
// import { Link } from 'wouter';
import { useContext } from "react";
import { AuthContext } from "../context/authContext";

export const Profile = () => {
  // const [isExpanded, setIsExpanded]= useState(false)

  const { currentUser } = useContext(AuthContext)

  return (
    
      <div className="flex flex-col items-center justify-center w-full my-14">
        <div className="flex flex-col items-center justify-center w-full mb-14">
          <img className="w-[200px] rounded-full shadow-lg object-cover" src={currentUser.profilePic} />
          <div className="text-4xl py-10 text-gray-700 font-semibold dark:text-gray-100">{currentUser.username}</div>
          <button className="rounded-2xl bg-gray-600 text-xl px-8 py-1 text-gray-100 dark:text-gray-700 dark:bg-gray-200 shadow-sm hover:bg-fuchsia-500 dark:hover:bg-fuchsia-500 dark:hover:text-gray-100">Edit</button>
        </div>
        {/* <div className='flex flex-col gap-8 text-2xl m-20'>
          <div onClick={() => {setIsExpanded(!isExpanded)}} className="flex items-center gap-8 ">
            <div className='size-10 border-2 border-fuchsia-500 bg-gray-200 hover:bg-fuchsia-300 '>
            </div>
            <div className="dark:hover:text-fuchsia-500 hover:text-fuchsia-600 dark:text-gray-200 block mb-2">
              Add info about yourself
            </div>
          </div>
            {isExpanded && 
            <form className=" border bg-gray-200 dark:bg-gray-700 rounded-2xl p-8" action="#" method="POST">
              <div className="pb-4">
                <label htmlFor="nickname" className="block text-sm font-medium text-gray-700 dark:text-gray-200 pb-3">Your Nickname</label>
                <div className='flex gap-2'>
                <input id="nickname" placeholder="e.g. Tileman" name="nickname" type="text" autoComplete="nickname" required className="w-full rounded-full py-2 pl-3 shadow-md focus:ring-4 focus:ring-inset focus:ring-fuchsia-500  leading-6 bg-gray-300"/>
                <button className='px-6 rounded-full bg-gray-700 text-gray-200 dark:bg-gray-200 dark:text-gray-700'>Add</button>
                </div>
              </div>
              <div className="pb-4">
                <label htmlFor="nickname" className="block text-sm font-medium text-gray-700 dark:text-gray-200 pb-3">Description</label>
                <div className='flex gap-2'>
                <input id="description" placeholder="tell us somethiing  more" name="nickname" type="text" autoComplete="nickname" required className="w-full rounded-full py-2 pl-3 shadow-md focus:ring-4 focus:ring-inset focus:ring-fuchsia-500  leading-6 bg-gray-300"/>
                <button className='px-6 rounded-full bg-gray-700 text-gray-200 dark:bg-gray-200 dark:text-gray-700'>Add</button>
                </div>
              </div>
            </form>}
          <div className="flex items-center gap-8">
            <div className='size-10 border-2 border-fuchsia-500 bg-gray-200 hover:bg-fuchsia-300'>
            </div>
            <Link href="" className="text-gray-700 dark:text-gray-200 dark:hover:text-fuchsia-500 hover:text-fuchsia-500 block mb-2">
            Add your profile image
            </Link>
            
          </div>
          <div className="flex items-center gap-8 ">
            <div className='size-10 border-2 border-fuchsia-500 bg-gray-200 hover:bg-fuchsia-300'>
            </div>
            <Link href="/AddImg" className="text-gray-700 dark:text-gray-200 dark:hover:text-fuchsia-500 hover:text-fuchsia-500 block mb-2">
            Add your images
            </Link>
          </div>
        </div> */}
        <div className="grid grid-cols-3 justify-center size-[400px] lg:size-[600px] gap-4 lg:gap-8 p-10 sm:p-0 m-auto">
          <div className="bg-gray-300 border-2 border-fuchsia-400 hover:bg-fuchsia-300 hover:shadow-xl">

          </div>
          <div className="bg-gray-300 border-2 border-fuchsia-400  hover:bg-fuchsia-300 hover:shadow-xl">

          </div>
          <div className="bg-gray-300 border-2 border-fuchsia-400 hover:bg-fuchsia-300 hover:shadow-xl">

          </div>
          <div className="bg-gray-300 border-2 border-fuchsia-400 hover:bg-fuchsia-300 hover:shadow-xl">

          </div>
          <div className="bg-gray-300 border-2 border-fuchsia-400 hover:bg-fuchsia-300 hover:shadow-xl">

          </div>
          <div className="bg-gray-300 border-2 border-fuchsia-400 hover:bg-fuchsia-300 hover:shadow-xl">

          </div>
          <div className="bg-gray-300 border-2 border-fuchsia-400 hover:bg-fuchsia-300 hover:shadow-xl">

          </div>
          <div className="bg-gray-300 border-2 border-fuchsia-400 hover:bg-fuchsia-300 hover:shadow-xl">

          </div>
          <div className="bg-gray-300 border-2 border-fuchsia-400 hover:bg-fuchsia-300 hover:shadow-xl">

          </div>
        </div>
      </div>
    
  );
};

