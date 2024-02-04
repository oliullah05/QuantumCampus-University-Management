import { Table, TableColumnsType, TableProps } from "antd";
import { useGetAllSemestersQuery } from "../../../redux/features/admin/academicManagement.api";

interface DataType {
    key: React.Key;
    name: string;
    age: number;
    address: string;
  }
const AcademicSemester = () => {

    const {data:semesterData}= useGetAllSemestersQuery(undefined)

const tableData = semesterData?.data.map(({_id,name,startMonth,endMonth,year}) =>({
_id,
name,
startMonth,
endMonth,
year

}))

      
      const columns: TableColumnsType<DataType> = [
        {
          title: 'Name',
          dataIndex: 'name',
          filters: [
            {
              text: 'Joe',
              value: 'Joe',
            },
            {
              text: 'Jim',
              value: 'Jim',
            },
            {
              text: 'Submenu',
              value: 'Submenu',
              children: [
                {
                  text: 'Green',
                  value: 'Green',
                },
                {
                  text: 'Black',
                  value: 'Black',
                },
              ],
            },
          ],
        },
        {
          title: 'Year',
          dataIndex: 'year',
        },
        {
          title: 'Start Month',
          dataIndex: 'startMonth',
        },
        {
          title: 'End Month',
          dataIndex: 'endMonth',
        },
      ];


      const onChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter, extra) => {
        console.log(filters);
      };







    return (
        <div>
            asa
            <Table columns={columns} dataSource={tableData} onChange={onChange} />
        </div>
    );
};

export default AcademicSemester;