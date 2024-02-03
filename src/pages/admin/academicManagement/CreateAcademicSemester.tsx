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

const CreateAcademicSemester = () => {

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
      const semesterData = {
name:"sjdjk",
code:"0"
      }
      console.log(semesterData);
    }





    return (
        <Flex justify="center" align="center">
            <Col span={6}>
                <QCForm onSubmit={onSubmit}>
                    <QCSelect options={nameOptions} label="Name" name="name"></QCSelect>
                    <Button htmlType="submit">submit</Button>
                </QCForm>
            </Col>
        </Flex>
    );
};

export default CreateAcademicSemester;