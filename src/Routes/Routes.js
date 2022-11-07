import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../layout/Main/Main");
const { default: About } = require("../Pages/About/About");
const { default: Home } = require("../Pages/Home/Home/Home");

const router = createBrowserRouter([
    {path:'/', element:<Main></Main>,children:[
        {path:'/', element:<Home></Home>},
        {path:'/about', element:<About></About>},
        {path:'/login', element:<Login></Login>},
        {path:'/register', element:<Register></Register>}
    ]}

])

export default router;