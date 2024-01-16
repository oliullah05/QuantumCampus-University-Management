import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../pages/About";
import Contact from "../pages/Contact";
import LogIn from "../pages/LogIn";
import Register from "../pages/Register";
import AdminDashboard from "./admin/AdminDashboard";
import CreateStudent from "./admin/CreateStudent";

const router = createBrowserRouter([
    {
        path:"/",
        element:<App></App>,
        children:[
            
        
            {
                path:"contact",
                element:<Contact></Contact>
            },
            
            {
                path:"about",
                element:<About></About>
            },
        ]
    },
    {
        path:"/admin",
        element:<App></App>,
        children:[
            
        
            {
                index:true,
                element:<AdminDashboard></AdminDashboard>
            },
            {
                path:"dashboard",
                element:<AdminDashboard></AdminDashboard>
            },
            
            {
                path:"create-student",
                element:<CreateStudent></CreateStudent>
            },
        ]
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