import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home/Home";
import MainLayout from "../Layouts/MainLayout";
import AddFood from "../Pages/AddFood/AddFood";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "../Providers/PrivateRoute";
import AvailableFoods from "../Pages/AvailableFoods/AvailableFoods";
import FoodDetailsCard from "../Components/FoodDetailsCard";
import Loader from "../Components/Loader";
import MyAddedFoods from "../Pages/MyAddedFoods/MyAddedFoods";
import MyRequests from "../Pages/MyRequests/MyRequests";
import ErrorPage from "../Pages/ErrorPage";
import AboutUs from "../Pages/AboutUs/AboutUs";
import ContactUs from "../Pages/ContactUs/ContactUs";
import Blogs from "../Pages/Blogs/Blogs";
import BlogDetails from "../Pages/BlogDetails/BlogDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        loader: () => fetch("https://share-and-care-server.vercel.app/featuredFood"),
        Component: Home,
        hydrateFallbackElement: <Loader></Loader>,
      },
      {
        path: "/addFood",
        element: (
          <PrivateRoute>
            <AddFood></AddFood>
          </PrivateRoute>
        ),
      },
      {
        path: "/availableFoods",
        loader: () => fetch("https://share-and-care-server.vercel.app/foods"),
        element: <AvailableFoods></AvailableFoods>,
        hydrateFallbackElement: <Loader></Loader>,
      },
      {
        path:"/aboutUs",
        element:<AboutUs></AboutUs>
      },
      {
        path:"/contactUs",
        element:<ContactUs></ContactUs>
      },
      {
        path:"/blogs",
        element:<Blogs></Blogs>
      },
      {
        path:"/blogs/:id",
        element:<BlogDetails></BlogDetails>
      },
      {
        path: "/availableFoods/:id",
        element: (
          <PrivateRoute>
            <FoodDetailsCard></FoodDetailsCard>
          </PrivateRoute>
        ),
        hydrateFallbackElement: <Loader></Loader>,
      },
      {
        path: "/myFoods",
        element: (
          <PrivateRoute>
            <MyAddedFoods></MyAddedFoods>
          </PrivateRoute>
        ),
      },
      {
        path: "/myRequests",
        element: (
          <PrivateRoute>
            <MyRequests></MyRequests>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/signup",
        Component: SignUp,
      },
    ],
  },
]);
