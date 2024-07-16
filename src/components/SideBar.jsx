import { Link } from "react-router-dom";
import { PiUser, PiUsersFour } from "react-icons/pi";
import { TfiLayoutGrid3 } from "react-icons/tfi";
import { RiMessage2Line } from "react-icons/ri";

export const SideBar = () => {
  return (
    <div className="flex justify-around sm:justify-start sm:flex-col gap-6 p-8 text-xl sm:w-64 bg-gray-300 text-gray-700 dark:text-gray-200 dark:bg-gray-600 sticky top-[72px] sm:h-[calc(100vh-72px)]">
          <Link  to="/profile/:id">
            <div className="flex items-center gap-3 hover:text-fuchsia-500">
              <PiUser className="size-8"/>
              <p className='hidden sm:block'>My Profile</p>
            </div>
          </Link>
          <Link to="/friends">
            <div className="flex items-center gap-3 hover:text-fuchsia-500">
              <PiUsersFour className="size-8" />
              <p className='hidden sm:block'>Friends</p>
            </div>
          </Link>
          <Link  to="/">
            <div className="flex items-center gap-3 hover:text-fuchsia-500">
              <TfiLayoutGrid3 className="size-8" />
              <p className='hidden sm:block' >Wall</p>
            </div>
          </Link>
          <Link  to="/message">
            <div className="flex items-center gap-3 hover:text-fuchsia-500">
              <RiMessage2Line className="size-8" />
              <p className='hidden sm:block'>Message</p>
            </div>
          </Link>
        </div>
  )
}





