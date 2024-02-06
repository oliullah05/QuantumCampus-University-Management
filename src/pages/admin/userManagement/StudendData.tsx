import { Button, Space, Table, TableColumnsType, TableProps } from 'antd';
import { useState } from 'react';
import { useGetAllStudentsQuery } from '../../../redux/features/admin/userManagement.api';
import { TQueryParam, TStudent } from '../../../types';

export type TTableData = Pick<
  TStudent,"name"| "id"
>;

const StudentData = () => {
  const [params, setParams] = useState<TQueryParam[] | undefined>(undefined);
  const {
    data: studentData,
    isLoading,
    isFetching,
  } = useGetAllStudentsQuery(params);

  console.log({ isLoading, isFetching });

  const tableData = studentData?.data?.map(
    ({ _id, fullName,id  }) => ({
      key: _id,
      fullName,
    id
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
      title: 'Action',
      key: 'x',
      render: () => {
        return (
          <Space>
            <Button>Update</Button>
            <Button>Details</Button>
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
    <Table
      loading={isFetching}
      columns={columns}
      dataSource={tableData}
      onChange={onChange}
    />
  );
};

export default StudentData;
