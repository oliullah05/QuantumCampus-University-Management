import React from 'react';
import PHForm from '../../../components/form/PHForm';
import { Button, Col, Flex } from 'antd';
import PHSelect from '../../../components/form/PHSelect';
import PHInput from '../../../components/form/PHInput';
import { useGetAcademicFacultiesQuery } from '../../../redux/features/admin/academicManagement.api';

const OfferCourse = () => {
const {data:AcademicFacultyData}=useGetAcademicFacultiesQuery(undefined)
    const onSubmit = (data) => {
        console.log(data);
    }
console.log(AcademicFacultyData);
    const academicSemesterOptions = AcademicFacultyData?.data?.map(item => ({
        value: `${item._id}`,
        label: `${item.name}`
    }))
    return (
        <Flex justify="center" align="center">
            <Col span={6}>
                <PHForm onSubmit={onSubmit}>
                    <PHSelect
                        label="Academic Semester"
                        name="academicSemester"
                        options={academicSemesterOptions}
                    />
                    <PHInput type='text' name='test' label='input'></PHInput>
                    <Button htmlType="submit">Submit</Button>
                </PHForm>
            </Col>
        </Flex>
    );
};

export default OfferCourse;