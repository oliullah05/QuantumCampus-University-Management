import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import LogIn from "../pages/LogIn";
import Register from "../pages/Register";
import { adminPaths } from "./admin.routes";
import { routeGenerator } from "../utils/routesGenerator";


const router = createBrowserRouter([
    {
        path:"/",
        element:<App></App>
    },
    {
        path:"/admin",
        element:<App></App>,
        children:routeGenerator(adminPaths)
    },
    {
        path:"/faculty",
        element:<App></App>,
        children:routeGenerator(adminPaths)
    },
    {
        path:"/student",
        element:<App></App>,
        children:routeGenerator(adminPaths)
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