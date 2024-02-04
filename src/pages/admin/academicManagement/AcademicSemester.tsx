import { Table, TableColumnsType, TableProps } from "antd";
import { useGetAllSemestersQuery } from "../../../redux/features/admin/academicManagement.api";
import { TAcademicSemester } from "../../../types/academicmManagement.type";
import { useState } from "react";


export type TTableData =Pick<TAcademicSemester,"_id"|"name"|"year"|"startMonth"|"endMonth">

const AcademicSemester = () => {
const [params,setParams]=useState([])
    const { data: semesterData } = useGetAllSemestersQuery(params)

    const tableData = semesterData?.data?.map(({ _id, name, startMonth, endMonth, year }) => ({
        key:_id,
        name,
        startMonth,
        endMonth,
        year

    }))


    const columns: TableColumnsType<TTableData> = [
        {
            title: 'Name',
            key:"name",
            dataIndex: 'name',
            filters: [
                {
                    text: 'Autumn',
                    value: 'Autumn',
                },
                {
                    text: 'Fall',
                    value: 'Fall',
                },
                {
                    text: 'Summer',
                    value: 'Summer',
                },
            ],
        },
        {
            title: 'Year',
            key:"year",
            dataIndex: 'year',
            filters: [
                {
                    text: '2024',
                    value: '2024',
                },
                {
                    text: '2025',
                    value: '2025',
                },
                {
                    text: '2026',
                    value: '2026',
                },
            ],
        },
        {
            title: 'Start Month',
            key:"startMonth",
            dataIndex: 'startMonth',
        },
        {
            title: 'End Month',
            key:"endMonth",
            dataIndex: 'endMonth',
        },
    ];


    const onChange: TableProps<TTableData>['onChange'] = (pagination, filters, sorter, extra) => {
        console.log({filters,extra});
        if(extra.action=="filter"){
            const queryParams= []
            filters.name?.map(item=>{
                queryParams.push({name:"name",value:item})
            })
            filters.year?.map(item=>{
                queryParams.push({name:"year",value:item})
            })
           setParams(queryParams);
        }
    };







    return (
        <div>
            asa
            <Table columns={columns} dataSource={tableData} onChange={onChange} />
        </div>
    );
};

export default AcademicSemester;