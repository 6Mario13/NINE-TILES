import { IoMdMoon } from "react-icons/io";
import { MdOutlineLightMode } from "react-icons/md";
import PropTypes from 'prop-types';
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const Navbar = ({darkMode, toggleDarkMode}) => {

  const { currentUser } = useContext(AuthContext)

  return (
    <div className="flex items-center justify-between  p-2 sm:px-10 bg-gray-200 dark:bg-gray-700 shadow-lg sticky top-0 ">
      <div className="flex items-center gap-2 ">
        <div className="size-[50px] bg-gray-200">
          <svg width="50" height="50" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="106.711" y="106.711" width="43.2886" height="43.2886" fill="#ACACAC"/>
            <rect x="53.3557" y="106.711" width="43.2886" height="43.2886" fill="#ACACAC"/>
            <rect x="106.711" y="53.3557" width="43.2886" height="43.2886" fill="#ACACAC"/>
            <rect x="53.3557" y="53.3557" width="43.2886" height="43.2886" fill="#ACACAC"/>
            <rect y="106.711" width="43.2886" height="43.2886" fill="#ACACAC"/>
            <rect y="53.3557" width="43.2886" height="43.2886" fill="#ACACAC"/>
            <rect width="43.2886" height="43.2886" fill="#ACACAC"/>
            <rect x="106.711" width="43.2886" height="43.2886" fill="#ACACAC"/>
            <rect x="53.3557" width="43.2886" height="43.2886" fill="#ACACAC"/>
            <rect x="53.75" y="44" width="42.5" height="8.75" fill="#E01DCD" stroke="black"/>
            <rect x="0.5" y="97.25" width="95.75" height="8.75" fill="#E01DCD" stroke="black"/>
            <rect x="0.5" y="0.5" width="149" height="149" stroke="black"/>
          </svg>
        </div>
        <p className="text-xl font-semibold text-fuchsia-500 hover:text-gray-700 dark:hover:text-gray-200"><span className="block ">NINE</span><span>TILES</span></p>
      </div>
      <div className="flex items-center gap-6 text-gray-700 dark:text-gray-200">
        <div onClick={toggleDarkMode}>{darkMode ? <MdOutlineLightMode className=" size-8 hover:text-fuchsia-500"/> :<IoMdMoon className=" size-8 hover:text-fuchsia-500"/>}</div>
        <img className="w-[40px] rounded-full" src={currentUser.profilePic} />
        <div className="hidden sm:block text-xl">{currentUser.username}</div>
      </div>
    </div>
  )
}

Navbar.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  toggleDarkMode: PropTypes.func.isRequired,
};