import { Button, Table, TableColumnsType, Tag } from 'antd';
import { TAcademicSemester } from '../../../types/academicManagement.type';
import { useGetAllRegisteredSemestersQuery } from '../../../redux/features/admin/courseManagement.api';
import moment from 'moment';
import { TSemester } from '../../../types/courseManagement.type';

export type TTableData = Pick<
  TSemester,
 'startDate' | 'endDate' | "status"
>;

const RegisteredSemesters = () => {
const {data:semesterData,isLoding,isFetching}=useGetAllRegisteredSemestersQuery(undefined)

  const tableData = semesterData?.data?.map(
    ({ _id, academicSemester, startDate, endDate,status}) => ({
      key: _id,
      name:`${academicSemester.name} ${academicSemester.year}`,
      startDate:moment(new Date(startDate)).format("MMMM"), 
      endDate:moment(new Date(endDate)).format("MMMM"),
      status
    })
  );

  const columns: TableColumnsType<TTableData> = [
    {
      title: 'Name',
      key: 'name',
      dataIndex: 'name'
    },
    {
      title: 'Status',
      key: 'status',
      dataIndex: 'status',
      render:(item)=>{
       return <Tag>{item}</Tag>
      }
    },
    {
      title: 'Start Date',
      key: 'startDate',
      dataIndex: 'startDate',
    },
    {
      title: 'End Date',
      key: 'endDate',
      dataIndex: 'endDate',
    },
    {
      title: 'Action',
      key: 'x',
      render: () => {
        return (
          <div>
            <Button>Update</Button>
          </div>
        );
      },
    },
  ];

//   const onChange: TableProps<TTableData>['onChange'] = (
//     _pagination,
//     filters,
//     _sorter,
//     extra
//   ) => {
//     if (extra.action === 'filter') {
//       const queryParams: TQueryParam[] = [];

//       setParams(queryParams);
//     }
//   };

  return (
    <Table
      loading={isFetching}
      columns={columns}
      dataSource={tableData}
    //   onChange={onChange}
    />
  );
};

export default RegisteredSemesters;
