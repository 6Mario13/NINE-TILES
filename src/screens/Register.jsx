import { Link } from "react-router-dom"


export const Register = () => {
  return (
    <div className="">
      <div className="flex justify-center p-10 " >
        <svg className="size-24" width="150" height="150" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
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
      <div className=" mx-auto w-full sm:w-4/5 lg:w-1/2 pb-20">
        <h1 className="text-3xl text-center py-8">Create new account</h1>
        <form className="mx-4 border rounded-3xl space-y-6 p-8" action="#" method="POST">
          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
            <input id="email" placeholder="example@mail.com" name="email" type="email" autoComplete="email" required className="w-full rounded-2xl py-1.5 pl-3 shadow-md focus:ring-4 focus:ring-inset focus:ring-fuchsia-500  leading-6 bg-gray-300"/>
          </div>

          <div>
            <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">Nickname</label>
            <input id="first-name" type="text" name="first-name" placeholder="e.g. Tileman" autoComplete="given-name" className="w-full rounded-2xl py-1.5 pl-3 shadow-md focus:ring-4 focus:ring-inset focus:ring-fuchsia-500  leading-6 bg-gray-300"/>
          </div>

          <div >
            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
            <input id="password" name="password" type="password" placeholder="********" autoComplete="current-password" required className="w-full rounded-2xl py-1.5 pl-3 shadow-md focus:ring-4 focus:ring-inset focus:ring-fuchsia-500  leading-6 bg-gray-300"/>
          </div>

          <div>
            <label htmlFor="confpassword" className="block text-sm font-medium leading-6 text-gray-900">Confirm password</label>
            <input id="confpassword" name="confpassword" type="password" autoComplete="current-password" required className="w-full rounded-2xl py-1.5 pl-3 shadow-md focus:ring-4 focus:ring-inset focus:ring-fuchsia-500  leading-6 bg-gray-300"/>
          </div>
          <div >
          <Link to="/" className="flex justify-center p-6">
            <button type="submit" className="w-1/4 rounded-2xl bg-gray-600 px-3 py-2 text-sm font-bold leading-6 text-white shadow-sm hover:bg-fuchsia-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fuchsia-900">Sign in</button>
          </Link>
          </div>
          
          <p className="mt-10 text-center text-sm text-gray-500">
          Already have an account? 
            <Link to="/login"className="font-semibold leading-6 text-fuchsia-700 hover:text-fuchsia-500"> Log in</Link>
          </p>

        </form>
      </div>
    </div>
  )
}