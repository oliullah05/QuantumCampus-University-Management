
const adminPath2 = [
    {
        name: "dashboard",
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


const newArrey = adminPath2.reduce((acc, item) => {
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

console.log(newArrey);




