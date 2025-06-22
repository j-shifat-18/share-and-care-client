import {
  createBrowserRouter,
} from "react-router";
import Home from "../Pages/Home/Home";
import MainLayout from "../Layouts/MainLayout";
import AddFood from "../Pages/AddFood/AddFood";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";

export const router = createBrowserRouter([
  {
    path: "/",
    Component:MainLayout,
    children:[
        {
            index:true,
            Component:Home,
        },
        {
            path:'/addFood',
            Component:AddFood,
        },
        {
            path:'/login',
            Component:Login,
        },
        {
            path:'/signup',
            Component:SignUp,
        }
    ]
  },
]);
