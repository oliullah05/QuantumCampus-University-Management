import { NavLink } from "react-router-dom";
import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateAdmin from "../pages/admin/CreateAdmin";
import CreateFaculty from "../pages/admin/CreateFaculty";
import CreateStudent from "../pages/admin/CreateStudent";
import { ReactNode } from "react";


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






type TAdminSidebarItem ={
  
  key:string,
  label:ReactNode,
  children?:TAdminSidebarItem[]
}


export const adminSidebarItems = adminPaths.reduce((acc:TAdminSidebarItem[], item) => {
  if (item.path && item.name) {
      acc.push({
          key: item.name,
          label:<NavLink to={`/admin/${item.path}`}>{item.name}</NavLink>
      })
  }

  if(item.children){
              acc.push({
                  key: item.name,
                  label:item.name,
                  children:item.children.map(child=>({
                      key:child.name,
                      label:<NavLink to={`/admin/${child.path}`}>{child.name}</NavLink>
                  }))
              })
          }
  return acc
}, [])








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





