import { Button, Col, Flex } from "antd";
import { FieldValues, SubmitHandler } from "react-hook-form";
import QCForm from "../../../components/form/QCForm";
import QCSelect from "../../../components/form/QCSelect";
import { semesterOptions } from "../../../consts/semester";
import { monthOptions } from "../../../consts/global";
import { zodResolver } from "@hookform/resolvers/zod";
import { academicSemesterSchema } from "../../../schemas/academicManagement.schema";
import { useAddAcademicSemesterMutation } from "../../../redux/features/admin/academicManagement.api";
import { toast } from "sonner";



const currentYear = new Date().getFullYear()
const yearOptions = [0, 1, 2, 3, 4].map(number => ({

    value: String(currentYear + number),
    label: String(currentYear + number)

}))


const CreateAcademicSemester = () => {


    const [addAcademicSemester] = useAddAcademicSemesterMutation()




    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        const name = semesterOptions[Number(data.name) - 1]?.label
        const semesterData = {
            name,
            code: data.name,
            year: data.year,
            startMonth: data.startMonth,
            endMonth: data.endMonth
        }
        try {
        const res =    await addAcademicSemester(semesterData);
        console.log(res);
        }
        catch (err) {
            toast.error("something went wrong")
        }
    }




    return (
        <Flex justify="center" align="center" >
            <Col span={6}>
                <QCForm onSubmit={onSubmit} resolver={zodResolver(academicSemesterSchema)}>
                    <QCSelect options={semesterOptions} label="Name" name="name"></QCSelect>
                    <QCSelect options={yearOptions} label="Year" name="year"></QCSelect>
                    <QCSelect options={monthOptions} label="Start Month" name="startMonth"></QCSelect>
                    <QCSelect options={monthOptions} label="End Month" name="endMonth"></QCSelect>
                    <Button htmlType="submit">submit</Button>
                </QCForm>
            </Col>
        </Flex>
    );
};

export default CreateAcademicSemester;