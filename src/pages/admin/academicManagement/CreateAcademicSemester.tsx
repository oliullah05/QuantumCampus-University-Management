import { Button, Col, Flex } from "antd";
import { FieldValues, SubmitHandler } from "react-hook-form";
import QCForm from "../../../components/form/QCForm";
import QCSelect from "../../../components/form/QCSelect";


const nameOptions = [

    {
        value: "01",
        label: "Autumn",
    },
    {
        value: "02",
        label: "Summer",
    },
    {
        value: "03",
        label: "Fall",
    },
]


const currentYear = new Date().getFullYear()
const yearOptions = [0,1,2,3,4].map(number =>({

    value: String(currentYear+number),
    label: String(currentYear+number)
  
}))


const CreateAcademicSemester = () => {

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        const name = nameOptions[Number(data.name)-1]?.label
        const semesterData = {
            name,
            code: data.name,
            year:data.year
        }
        console.log(semesterData);
    }





    return (
        <Flex justify="center" align="center" >
            <Col span={6}>
                <QCForm onSubmit={onSubmit}>
                    <QCSelect options={nameOptions} label="Name" name="name"></QCSelect>
                    <QCSelect options={yearOptions} label="Year" name="year"></QCSelect>
                    <QCSelect options={nameOptions} label="Start Month" name="startMonth"></QCSelect>
                    <QCSelect options={nameOptions} label="End Month" name="endMonth"></QCSelect>
                    <Button htmlType="submit">submit</Button>
                </QCForm>
            </Col>
        </Flex>
    );
};

export default CreateAcademicSemester;