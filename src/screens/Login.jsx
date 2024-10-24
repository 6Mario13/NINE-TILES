import { Logo } from "../Logo"
import { Link, useNavigate } from "react-router-dom"
import { useContext, useState } from "react"
import { AuthContext } from "../context/AuthContext"

export const Login = () => {

  const [inputs, setInputs] = useState({
    email:"",
    password:"",
  })
  const [err, setErr] = useState(null)

  const navigate = useNavigate()

  const handleChange = async (e) => {
    setInputs((prev) => ({...prev, [e.target.name]:e.target.value}))
  }

  const { login } = useContext(AuthContext)

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(inputs)
      navigate("/")
    } catch (err) {
      if (err.response && err.response.data) {
        setErr(err.response.data);
      } else {
        setErr("An unexpected error occurred.");
      }
    }
  };
  return (
    <div className="pt-12 mx-auto bg-gray-100 pb-20">
      <div className="flex justify-center">
        <Logo className="" />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 p-8 md:m-12 gap-16 xl:w-4/5 lg:mx-auto">
        <div className="border rounded-3xl p-8 md:p-12  drop-shadow-lg bg-white">
          <h1 className="text-3xl grid border-b-2 pb-3">Welcome to<span className="text-fuchsia-600">NINE TILES</span></h1>
          <h2 className="text-2xl py-2">How it works?</h2>
          <p>Is 9 a lot or a little? This is how much space we give you to express yourself - nine tiles that say something about you. Now it is up to you what it will be. Create a collage of images that simply express you</p>
        </div>
        <div className="border rounded-3xl p-8 md:p-12 drop-shadow-lg bg-white">
          <h1 className="text-3xl grid border-b-2 pb-3">Log in</h1>
          <form className="space-y-6 pt-6" action="#" method="POST">
            <div>
              <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">Email</label>
              <div className="mt-2">
                <input id="email" name="email" onChange={handleChange} type="text" className="w-full rounded-2xl py-2 pl-3 shadow-md focus:ring-4 focus:ring-inset focus:ring-fuchsia-500  leading-6 bg-gray-300"/>
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
                <input id="password" name="password" onChange={handleChange} type="password" className="w-full rounded-2xl py-2 pl-3 shadow-md focus:ring-4 focus:ring-inset focus:ring-fuchsia-500  leading-6 bg-gray-300"/>
              </div>
              <div className="text-fuchsia-600 my-8">
              {err && err}
              </div>
            </div>
            <div className="flex justify-center py-6">
              <button onClick={handleLogin}  className="w-1/3  rounded-2xl bg-gray-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-fuchsia-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fuchsia-900">Login</button>
            </div>
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