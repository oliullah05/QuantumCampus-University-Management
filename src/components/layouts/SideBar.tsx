/* eslint-disable @typescript-eslint/no-unused-vars */
import { Menu, MenuProps } from "antd";
import Sider from "antd/es/layout/Sider";
import { selectCurrentuser } from "../../redux/features/auth/authSlice";
import { useAppSelector } from "../../redux/hooks";
import { adminPaths } from "../../routes/admin.routes";
import { facultyPaths } from "../../routes/faculty.routes";
import { studentPaths } from "../../routes/student.routes";
import { sidebarItemsGenarator } from "../../utils/sidebarItemsGenarator";
const AdminItems:MenuProps['items'] = sidebarItemsGenarator(adminPaths,"admin")
const FacultyItems:MenuProps['items'] = sidebarItemsGenarator(facultyPaths,"faculty")
const Studenttems:MenuProps['items'] = sidebarItemsGenarator(studentPaths,"student")
const useRole = {
    ADMIN:"admin",
    FACULTY:"faculty",
    STUDENT:"student"
};
const SideBar = () => {
 const user = useAppSelector(selectCurrentuser)

    let sidebarItems;
    switch (user!.role) {
        case useRole.ADMIN:
            sidebarItems = AdminItems
            break;
             
        case useRole.FACULTY:
            sidebarItems = FacultyItems
            break;

            
        case useRole.STUDENT:
            sidebarItems = Studenttems
            break;
    

        default:
            break;
    }


    return (
        <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div style={{color:"white",padding:"20px",height:"5rem",textAlign:"center",display:"flex",justifyContent:"center",alignItems:"center"}}> QuantumCampus University</div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} items={sidebarItems} />
      </Sider>
    );
};

export default SideBar;