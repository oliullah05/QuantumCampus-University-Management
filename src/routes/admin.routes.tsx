import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateAdmin from "../pages/admin/CreateAdmin";
import CreateFaculty from "../pages/admin/CreateFaculty";
import CreateStudent from "../pages/admin/CreateStudent";
import AcademicFaculty from "../pages/admin/academicManagement/AcademicFaculty";
import AcademicSemester from "../pages/admin/academicManagement/AcademicSemester";
import CreateAcademicDepartment from "../pages/admin/academicManagement/CreateAcademicDepartment";
import CreateAcademicFaculty from "../pages/admin/academicManagement/CreateAcademicFaculty";
import CreateAcademicSemester from "../pages/admin/academicManagement/CreateAcademicSemester";





export const adminPaths = [
    {
      name: 'Dashboard',
      path: 'dashboard',
      element: <AdminDashboard />,
    },
    {
      name:"Academic Management",
      children: [
        {
          name: 'Create A. Semester',
          path: 'create-academic-semester',
          element: <CreateAcademicSemester></CreateAcademicSemester>,
        },
        {
          name: 'Academic Semester',
          path: 'academic-semester',
          element: <AcademicSemester></AcademicSemester>,
        },
        {
          name: 'Create A. Faculty',
          path: 'create-academic-faculty',
          element: <CreateAcademicFaculty></CreateAcademicFaculty>,
        },
        {
          name: 'Academic Faculty',
          path: 'academic-faculty',
          element: <AcademicFaculty></AcademicFaculty>,
        },
      
        {
          name: 'Create A. Department',
          path: 'create-academic-department',
          element: <CreateAcademicDepartment></CreateAcademicDepartment>,
        },
        {
          name: 'Academic Department',
          path: 'academic-departner',
          element: <AcademicFaculty></AcademicFaculty>,
        },
      
      
      ]
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








// type TAdminSidebarItem ={
//   key:string,
//   label:ReactNode,
//   children?:TAdminSidebarItem[]
// }


// export const adminSidebarItems = adminPaths.reduce((acc:TAdminSidebarItem[], item) => {
//   if (item.path && item.name) {
//       acc.push({
//           key: item.name,
//           label:<NavLink to={`/admin/${item.path}`}>{item.name}</NavLink>
//       })
//   }

//   if(item.children){
//               acc.push({
//                   key: item.name,
//                   label:item.name,
//                   children:item.children.map(child=>({
//                       key:child.name,
//                       label:<NavLink to={`/admin/${child.path}`}>{child.name}</NavLink>
//                   }))
//               })
//           }
//   return acc
// }, [])








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





