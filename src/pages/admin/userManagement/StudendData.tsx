import { Button, Pagination, Space, Table, TableColumnsType, TableProps } from 'antd';
import { useState } from 'react';
import { useGetAllStudentsQuery } from '../../../redux/features/admin/userManagement.api';
import { TQueryParam, TStudent } from '../../../types';
import { Link } from 'react-router-dom';

export type TTableData = Pick<
  TStudent,"fullName"| "id"|"email"|"contactNo"
>;

const StudentData = () => {
    const [page,setPage]=useState(1)
  const [params, setParams] = useState<TQueryParam[] >([]);
  const {
    data: studentData,
    isLoading,
    isFetching,
  } = useGetAllStudentsQuery([{name:"sort",value:"id"},{name:"page",value:page},...params]);

 const metaData = studentData?.meta;

  const tableData = studentData?.data?.map(
    ({ _id, fullName,id ,email,contactNo }) => ({
      key: _id,
      fullName,
    id,
    email,
    contactNo
    })
  );

  const columns: TableColumnsType<TTableData> = [
    {
      title: 'Name',
      key: 'fullName',
      dataIndex: 'fullName'
    },

    {
      title: 'Roll Number.',
      key: 'id',
      dataIndex: 'id',
    },
    {
      title: 'Email.',
      key: 'email',
      dataIndex: 'email',
    },
    {
      title: 'Contact Number.',
      key: 'contactNo',
      dataIndex: 'contactNo',
    },
    {
      title: 'Action',
      key: 'x',
      render: (item) => {
        console.log(item,7777);
        return (
          <Space>
          <Link to={item?.key}>  <Button>Details</Button></Link>
            <Button>Update</Button>
            <Button>Block</Button>
          </Space>
        );
      },
      width:"10%"
    },
  ];

  const onChange: TableProps<TTableData>['onChange'] = (
    _pagination,
    filters,
    _sorter,
    extra
  ) => {
    if (extra.action === 'filter') {
      const queryParams: TQueryParam[] = [];

      filters.name?.forEach((item) =>
        queryParams.push({ name: 'name', value: item })
      );

      filters.year?.forEach((item) =>
        queryParams.push({ name: 'year', value: item })
      );

      setParams(queryParams);
    }
  };

  return (
    <>
    <Table
      loading={isFetching}
      columns={columns}
      dataSource={tableData}
      onChange={onChange}
      pagination={false}
    />
    <Pagination onChange={(page)=>setPage(page)}  pageSize={metaData?.limit} total={metaData?.total}></Pagination>
    </>
  );
};

export default StudentData;
