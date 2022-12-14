import AddService from "../Pages/AddService/AddService";
import Login from "../Pages/Login/Login";
import MyReviews from "../Pages/MyReviews/MyReviews";
import Register from "../Pages/Register/Register";
import ServicePage from "../Pages/ServicePage/ServicePage";
import ServicesDetails from "../Pages/ServicesDetails/ServicesDetails";
import UpdateReview from "../Pages/UpdateReview/UpdateReview";
import PrivetRoutes from "./PrivetRoutes";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../layout/Main/Main");
const { default: Blog } = require("../Pages/Blog/Blog");
const { default: Home } = require("../Pages/Home/Home/Home");

const router = createBrowserRouter([
    {path:'/', element:<Main></Main>,children:[
        {path:'/', element:<Home></Home>},
        {path:'/blog', element:<Blog></Blog>},
        {path:'/login', element:<Login></Login>},
        {path:'/register', element:<Register></Register>},
        {path:'/service', element:<ServicePage></ServicePage>},
        {path:'/service/:id',
        loader:({params})=> fetch(`https://assinment-server-side.vercel.app/allService/${params.id}`),
         element:<PrivetRoutes><ServicesDetails></ServicesDetails></PrivetRoutes>},
         {path:'/myReview', element:<PrivetRoutes><MyReviews></MyReviews></PrivetRoutes>},
         {path:'/addService', element:<PrivetRoutes><AddService></AddService></PrivetRoutes>},
         {path:'/myReview/:id',
         loader:({params})=>{
            console.log(params.id)
           return fetch(`https://assinment-server-side.vercel.app/reviewMessageSingle/${params.id}`)
         },
         
          element:<UpdateReview></UpdateReview>}
    ]}

])

export default router;