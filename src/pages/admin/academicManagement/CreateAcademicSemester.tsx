import { FieldValues, SubmitHandler } from "react-hook-form";
import QCForm from "../../../components/form/QCForm";
import QCInput from "../../../components/form/QCInput";
import { Button, Col, Flex } from "antd";
import QCSelect from "../../../components/form/QCSelect";

const CreateAcademicSemester = () => {

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
       
    }
    return (
        <Flex justify="center" align="center">
        <Col span={6}>
        <QCForm onSubmit={onSubmit}>
            <QCInput type="text" name="name" label="name"></QCInput>
            <QCInput type="text" name="name" label="year"></QCInput>
            <QCSelect label={"name"}></QCSelect>
            <Button htmlType="submit">submit</Button>
        </QCForm>
        </Col>
        </Flex>
    );
};

export default CreateAcademicSemester;