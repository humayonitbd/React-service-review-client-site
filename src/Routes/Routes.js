import AddService from "../Pages/AddService/AddService";
import Login from "../Pages/Login/Login";
import MyReviews from "../Pages/MyReviews/MyReviews";
import Register from "../Pages/Register/Register";
import ServicePage from "../Pages/ServicePage/ServicePage";
import ServicesDetails from "../Pages/ServicesDetails/ServicesDetails";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../layout/Main/Main");
const { default: About } = require("../Pages/About/About");
const { default: Home } = require("../Pages/Home/Home/Home");

const router = createBrowserRouter([
    {path:'/', element:<Main></Main>,children:[
        {path:'/', element:<Home></Home>},
        {path:'/about', element:<About></About>},
        {path:'/login', element:<Login></Login>},
        {path:'/register', element:<Register></Register>},
        {path:'/service', element:<ServicePage></ServicePage>},
        {path:'/service/:id',
        loader:({params})=> fetch(`http://localhost:5000/allService/${params.id}`),
         element:<ServicesDetails></ServicesDetails>},
         {path:'/myReview', element:<MyReviews></MyReviews>},
         {path:'/addService', element:<AddService></AddService>}
    ]}

])

export default router;