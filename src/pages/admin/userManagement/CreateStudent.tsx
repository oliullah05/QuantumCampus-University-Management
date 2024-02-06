
const defaultValues = {
  name: { firstName: 'Stu 1', middleName: 'Smitdfh', lastName: 'Doe' },
  gender: 'female',
  bloogGroup: 'O+',


  email: 'moktesxdfASdfASdfASokter@gmail.com',
  contactNo: '11111',
  emergencyContactNo: '+147896325',
  presentAddress: '789 Park Avenue',
  permanentAddress: '123 Main Street',


  guardian: {
    fatherName: 'John Doe',
    fatherOccupation: 'Software Engineer',
    fatherContactNo: '+147896325',
    motherName: 'Mary Smith',
    motherOccupation: 'Nurse',
    motherContactNo: '+5432109876'
  },
  localGuardian: {
    name: 'Peter d Jones',
    occupation: 'Doctor',
    contactNo: '+3216549870',
    address: '456 Elm Street'
  },


  isDeleted: false
}



import { Controller, FieldValues, SubmitHandler } from "react-hook-form";
import PHForm from "../../../components/form/PHForm";
import PHInput from "../../../components/form/PHInput";
import { Button, Col, Divider, Form, Input, Row } from "antd";
import PHSelect from "../../../components/form/PHSelect";
import { bloodGroupOptions, genderOptions } from "../../../types";
import PHDatePicker from "../../../components/form/PHDatePicker";
import { useGetAcademicDepartmentsQuery, useGetAllSemestersQuery } from "../../../redux/features/admin/academicManagement.api";
import { useAddStudentMutation } from "../../../redux/features/admin/userManagement.api";




const CreateStudent = () => {
  const [addStudent,{data,error}] = useAddStudentMutation()
  console.log({data,error});
  const { data: semesterData, isLoading: semesterLoding } = useGetAllSemestersQuery(undefined)
  const { data: departmentData, isLoading: departmentLoding } = useGetAcademicDepartmentsQuery(undefined)

  // console.log(semesterLoding);
  const semesterOptions = semesterData?.data?.map(item => ({
    value: item._id,
    label: `${item.name} ${item.year}`
  }))
  // console.log(semesterOptions);
  const departmentOptions = departmentData?.data?.map(item => ({
    value: item._id,
    label: `${item.name}`
  }))
  // console.log(semesterOptions);


  const onSubmit: SubmitHandler<FieldValues> = (data) => {
const studentData = {
  password:"student123",
  student:data
}

console.log(data);
    const formData = new FormData();
    formData.append("data", JSON.stringify(studentData))
    formData.append("file", data.profileImg)

    addStudent(formData)








    // formData.append("something", "data of some thing")
    // console.log(formData.get("something"));
    // console.log([...formData.entries()]);
    // console.log(Object.fromEntries(formData));
  }

  return (
    <Row>
      <Col span={24}>
        <PHForm defaultValues={defaultValues} onSubmit={onSubmit}>
          <Divider>Personal Info.</Divider>
          <Row gutter={8}>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput type="text" name="name.firstName" label="First Name" /></Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput type="text" name="name.middleName" label="Middle Name" /></Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput type="text" name="name.lastName" label="Last Name" /></Col>

            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHSelect options={genderOptions} name="gender" label="Gender" /></Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHDatePicker name="dateOfBirth" label="Date Of Birth" /></Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHSelect options={bloodGroupOptions} name="bloogGroup" label="Blood Group" /></Col>
              
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
            <Controller  name="profileImg" render={({field:{onChange,value,...field}})=><Form.Item label="Picture"> 
            <Input type="file" {...field} value={value?.fileName} onChange={(e)=>onChange(e.target?.files?.[0])}/></Form.Item>}/>
             
              </Col>

            <Divider>Contact Info.</Divider>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput type="email" name="email" label="Email" /></Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput type="number" name="contactNo" label="Contact No." /></Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput type="number" name="emergencyContactNo" label="Emergency ContactNo." /></Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput type="text" name="presentAddress" label="Present Address." /></Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput type="text" name="permanentAddress" label="Permanent Address." /></Col>


            <Divider>Gurdian.</Divider>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput type="text" name="guardian.fatherName" label="Farher Name" /></Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput type="text" name="guardian.fatherOccupation" label="Father Occupation" /></Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput type="text" name="guardian.fatherContactNo" label="Father ContactNo." /></Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput type="text" name="guardian.motherName" label="Mother Name." /></Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput type="text" name="guardian.motherOccupation" label="Mother Occupation" /></Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput type="text" name="guardian.motherContactNo" label="Mother ContactNo." /></Col>

            <Divider>Local Gurdian.</Divider>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput type="text" name="localGuardian.name" label="Name" /></Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput type="text" name="localGuardian.occupation" label="Occupation" /></Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput type="text" name="localGuardian.contactNo" label="ContactNo." /></Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput type="text" name="localGuardian.address" label="Address." /></Col>

            <Divider>Academic Info.</Divider>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHSelect disabled={semesterLoding} options={semesterOptions} name="admissionSemester" label="Admission Semester" />
            </Col>

            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHSelect options={departmentOptions} name="academicDepartment" label="Academic Department" /></Col>
           


          </Row>
          <Button htmlType="submit">Submit</Button>
        </PHForm>
      </Col>
    </Row>
  );
};

export default CreateStudent;
