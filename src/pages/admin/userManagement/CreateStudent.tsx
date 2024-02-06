const studentDummyData = {
  password: 'mokter',
  student: {
    name: { firstName: 'Stu 1', middleName: 'Smitdfh', lastName: 'Doe' },
    gender: 'female',
    dateOfBirth: '2000-05-01',


    email: 'mokter2mokter@gmail.com',
    contactNo: '11111',
    emergencyContactNo: '+147896325',
    bloogGroup: 'O+',
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


    admissionSemester: '65afa54e77f3279bbfbbd384',
    academicDepartment: '65afa56677f3279bbfbbd387',
    profileImg: 'https://picsum.photos/250/350',
    isDeleted: false
  }
}


import { FieldValues, SubmitHandler } from "react-hook-form";
import PHForm from "../../../components/form/PHForm";
import PHInput from "../../../components/form/PHInput";
import { Button, Col, Divider, Row } from "antd";




const CreateStudent = () => {

const onSubmit:SubmitHandler<FieldValues> = (data)=>{
console.log(data);


// const formData = new FormData();
// formData.append("data", JSON.stringify(data))
// formData.append("something", "data of some thing")
// console.log(formData.get("something"));
// console.log([...formData.entries()]);
// console.log(Object.fromEntries(formData));
}

  return (
    <Row>
    <Col span={24}>
    <PHForm onSubmit={onSubmit}>
      <Divider>Personal Info.</Divider>
    <Row gutter={8}>
      <Col span={24} md={{span:12}} lg={{span:8}}>
        <PHInput type="text" name="name.firstName" label="First Name"/></Col>
      <Col span={24} md={{span:12}} lg={{span:8}}>
        <PHInput type="text" name="name.middleName" label="Middle Name"/></Col>
      <Col span={24} md={{span:12}} lg={{span:8}}>
        <PHInput type="text" name="name.lastName" label="Last Name"/></Col>

      <Col span={24} md={{span:12}} lg={{span:8}}>
        <PHInput type="text" name="gender" label="Gender"/></Col>
      <Col span={24} md={{span:12}} lg={{span:8}}>
        <PHInput type="text" name="dateOfBirth" label="Date Of Birth"/></Col>
      <Col span={24} md={{span:12}} lg={{span:8}}>
        <PHInput type="text" name="bloogGroup" label="Blood Group"/></Col>
      </Row>

      <Button htmlType="submit">Submit</Button>
    </PHForm>
    </Col>
    </Row>
  );
};

export default CreateStudent;
