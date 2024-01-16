import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import LogIn from "../pages/LogIn";
import Register from "../pages/Register";
import {adminRoutes } from "./admin.routes";
console.log(adminRoutes);
const router = createBrowserRouter([
    {
        path:"/",
        element:<App></App>
    },
    {
        path:"/admin",
        element:<App></App>,
        children:adminRoutes
    },
    {
        path:"/faculty",
        element:<App></App>,
        children:adminRoutes
    },
    {
        path:"/student",
        element:<App></App>,
        children:adminRoutes
    },
    {
        path:"login",
        element:<LogIn></LogIn>
    },
    {
        path:"register",
        element:<Register></Register>
    },
])

export default router