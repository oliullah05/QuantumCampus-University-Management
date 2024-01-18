
const adminPath2 = [
    {
        name: "Dashboard",
        path: "dashboard",
        element: "<AdminDashboard/>"
    },
    {
        name: "User Management",
        children: [
            {
                name: "Create Admin",
                path: "admin/create-admin",
                element: "<CreateAdmin/>"
            },
            {
                name: "Create Student",
                path: "admin/create-student",
                element: "<CreateStudent/>"
            },
            {
                name: "Create Faculty",
                path: "admin/create-faculty",
                element: "<CreateFaculty/>"
            },
        ]
    }
]


// const newArrey = adminPath2.reduce((acc, item) => {
//     if (item.path && item.element) {
//         acc.push({
//             path: item.path,
//             element:item.element
//         })
//     }
//     if(item.children){
//         item.children.forEach(child=>{
//             acc.push({
//                 path: child.path,
//                 element:child.element
//             })
//         })
//     }
//     return acc
// }, [])
const newArrey = adminPath2.reduce((acc, item) => {
    if (item.path && item.name) {
        acc.push({
            key: item.name,
            label:'navlink '
        })
    }

    if(item.children){
                acc.push({
                    key: item.name,
                    level:item.name,
                    children:item.children.map(child=>({
                        key:child.name,
                        label:"Navlink"
                    }))
                })
            }
    return acc
}, [])

console.log(JSON.stringify(newArrey));



