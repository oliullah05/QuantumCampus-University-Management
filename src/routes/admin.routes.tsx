import AdminDashboard from "./admin/AdminDashboard";
import CreateAdmin from "./admin/CreateAdmin";
import CreateFaculty from "./admin/CreateFaculty";
import CreateStudent from "./admin/CreateStudent";



const adminPath2 = [
    {
        name:"dashboard",
        path:"/admin/dashboard",
        element:<AdminDashboard></AdminDashboard>
    },
    {
        name:"User Management",
        children:[
            {
                name:"Create Admin",
                path:"/admin/create-admin",
                element:<CreateAdmin></CreateAdmin>
            },
            {
                name:"Create Student",
                path:"/admin/create-student",
                element:<CreateStudent></CreateStudent>
            },   
            {
                name:"Create Faculty",
                path:"/admin/create-faculty",
                element:<CreateFaculty></CreateFaculty>
            },
        ]
    }
]








export const adminPaths = [
            
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
    
    {
        path:"create-admin",
        element:<CreateAdmin/>
    },
    
    {
        path:"create-faculty",
        element:<CreateFaculty/>
    },
]