import { Logo } from "../Logo"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "../context/authContext"


export const Login = () => {

  const { login } = useContext(AuthContext)

  const handleLogin = () => {
    login()
  }
  return (
    <div className="pt-12 mx-auto bg-gray-100 h-screen">
      <div className="flex justify-center">
        <Logo className="" />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 p-8 md:m-12 gap-16 xl:w-4/5 lg:mx-auto">
        <div className="border rounded-3xl p-8 md:p-12  drop-shadow-lg bg-white">
          <h1 className="text-3xl grid border-b-2 pb-3">Welcome to<span className="text-fuchsia-600">NINE TILES</span></h1>
          <h2 className="text-2xl py-2">How it works?</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non sit, cumque animi vel provident incidunt autem iste officia dolore veniam, natus fugiat magnam minus!</p>
        </div>
        <div className="border rounded-3xl p-8 md:p-12 drop-shadow-lg bg-white">
          <h1 className="text-3xl grid border-b-2 pb-3">Log in</h1>
          <form className="space-y-6 pt-6" action="#" method="POST">
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
              <div className="mt-2">
                <input id="email" name="email" type="email" autoComplete="email" required className="w-full rounded-2xl py-2 pl-3 shadow-md focus:ring-4 focus:ring-inset focus:ring-fuchsia-500  leading-6 bg-gray-300"/>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-fuchsia-700 hover:text-fuchsia-500">Forgot password?</a>
                </div>
              </div>
              <div className="mt-2">
                <input id="password" name="password" type="password" autoComplete="current-password" required className="w-full rounded-2xl py-2 pl-3 shadow-md focus:ring-4 focus:ring-inset focus:ring-fuchsia-500  leading-6 bg-gray-300"/>
              </div>
            </div>

            <Link  href="/home/profile" className="flex justify-center pt-6">
              <button onClick={handleLogin} type="submit" className="w-1/3 rounded-2xl bg-gray-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-fuchsia-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fuchsia-900">Login</button>
            </Link>
          </form>
          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?
            <Link to="/register"className="font-semibold leading-6 text-fuchsia-700 hover:text-fuchsia-500"> Register</Link>
          </p>
        </div>
      </div>
    </div>
  )
}