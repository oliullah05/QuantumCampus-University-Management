import { FieldValues, SubmitHandler } from "react-hook-form";
import QCForm from "../../../components/form/QCForm";
import QCInput from "../../../components/form/QCInput";
import { Button } from "antd";

const CreateAcademicSemester = () => {

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        console.log(data);
    }
    return (
        <QCForm onSubmit={onSubmit}>
            <QCInput type="text" name="name" label="oasmjkd"></QCInput>
            <Button htmlType="submit">submit</Button>
        </QCForm>
    );
};

export default CreateAcademicSemester;