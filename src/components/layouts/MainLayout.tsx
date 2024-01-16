import { Layout, Menu, MenuProps } from "antd";
import { Outlet } from "react-router-dom";
const { Header, Content, Footer, Sider } = Layout;


const items:MenuProps['items'] = [
  {
    key: "1",
    label: "Dashboard"
  },
  {
    key: "2",
    label: "Profile"
  },
  {
    key: "3",
    label: "User Management",
    children:[
      {
        key:"11",
        label:"dropdown 1"
      },
      {
        key:"12",
        label:"dropdown 2"
      },
      {
        key:"13",
        label:"dropdown 3"
      }
    ]
  }
]


const MainLayout = () => {
  return (
    <Layout style={{ height: "100vh" }}>
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
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} items={items} />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, }} />
        <Content style={{ margin: '24px 16px 0' }}>
          <div
            style={{
              padding: 24,
              minHeight: 360
            }}
          >
          <Outlet></Outlet>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default MainLayout;