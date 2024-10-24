import { Login } from "./screens/Login"
import { Navbar } from "./components/Navbar";
import { SideBar } from "./components/SideBar";
import { Home } from "./screens/Home";
import { Profile } from "./screens/Profile";
import { Register } from "./screens/Register"
import { Friends } from "./screens/Friends";
import { Message } from "./screens/Message";
import { useState, useEffect, useContext} from "react";
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import PropTypes from 'prop-types';


const App = () => {

  // Dark mode logic
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode ? JSON.parse(savedMode) : false;
  });

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const {currentUser} = useContext(AuthContext);

  const queryClient = new QueryClient()

  const Layout = () => {
    return (
      <QueryClientProvider client={queryClient}>
        <div className={darkMode ? 'dark flex flex-col' : 'flex flex-col'}>
          <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          <div className="flex flex-col sm:flex-row bg-fuchsia-50 dark:bg-gray-500">
            <SideBar />
            <Outlet />
          </div>
        </div>
      </QueryClientProvider>
    )
  }
  
  // Login is required

  const ProtectedRoute = ({children}) => {
    if(!currentUser){
      return <Navigate to="/login"/>
    }
    return children
    }

    ProtectedRoute.propTypes = {
      children: PropTypes.node.isRequired,
    };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Layout/>
        </ProtectedRoute>
        ),
      children:[
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/profile/:id",
          element: <Profile />,
        },
        {
          path: "/friends",
          element: <Friends />,
        },
        {
          path: "/message",
          element: <Message />,
        },
      ]
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);



  return (
    <div>
      <RouterProvider router={router} />
      {/* <Switch>
        <Route path="/" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/home/*" component={ProtectedRoute} />
      </Switch> */}
    </div>
  );
};
 
export default App;


