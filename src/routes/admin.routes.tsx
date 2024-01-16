import AdminDashboard from "./admin/AdminDashboard";
import CreateAdmin from "./admin/CreateAdmin";
import CreateFaculty from "./admin/CreateFaculty";
import CreateStudent from "./admin/CreateStudent";


type TRoute ={
    path:string,
    element:JSX.Element
}


const adminPaths = [
    {
      name: 'Dashboard',
      path: 'dashboard',
      element: <AdminDashboard />,
    },
    {
      name: 'User Management',
      children: [
        {
          name: 'Create Admin',
          path: 'create-admin',
          element: <CreateAdmin />,
        },
        {
          name: 'Create Faculty',
          path: 'create-faculty',
          element: <CreateFaculty />,
        },
        {
          name: 'Create Student',
          path: 'create-student',
          element: <CreateStudent />,
        },
        {
          name: 'Create Member',
          path: 'create-member',
          element: <CreateStudent />,
        },
      ],
    },
  ];




// ** programitical way

export const adminRoutes = adminPaths.reduce((acc:TRoute[], item) => {
    if (item.path && item.element) {
        acc.push({
            path: item.path,
            element:item.element
        })
    }
    if(item.children){
        item.children.forEach(child=>{
            acc.push({
                path: child.path,
                element:child.element
            })
        })
    }
    return acc
}, [])


console.log(adminRoutes);












//hard coded way

// export const adminPaths = [
            
//     {
//         index:true,
//         element:<AdminDashboard></AdminDashboard>
//     },
//     {
//         path:"dashboard",
//         element:<AdminDashboard></AdminDashboard>
//     },
    
//     {
//         path:"create-student",
//         element:<CreateStudent></CreateStudent>
//     },
    
//     {
//         path:"create-admin",
//         element:<CreateAdmin/>
//     },
    
//     {
//         path:"create-faculty",
//         element:<CreateFaculty/>
//     },
// ]