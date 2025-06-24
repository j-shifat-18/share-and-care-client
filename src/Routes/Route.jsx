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

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        loader: () => fetch("http://localhost:3000/featuredFood"),
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
        loader: () => fetch("http://localhost:3000/foods"),
        element: <AvailableFoods></AvailableFoods>,
        hydrateFallbackElement: <Loader></Loader>,
      },
      {
        path: "/availableFoods/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/foods/${params.id}`),
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
