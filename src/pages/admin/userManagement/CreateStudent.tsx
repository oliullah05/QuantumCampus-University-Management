const studentDummyData = {
  password: 'mokter',
  student: {
    name: { firstName: 'Stu 1', middleName: 'Smitdfh', lastName: 'Doe' },
    gender: 'female',
    dateOfBirth: '2000-05-01',
    bloogGroup: 'O+',


    email: 'mokter2mokter@gmail.com',
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


    // admissionSemester: '65afa54e77f3279bbfbbd384',
    // academicDepartment: '65afa56677f3279bbfbbd387',
    profileImg: 'https://picsum.photos/250/350',
    isDeleted: false
  }
}


const defaultValues = {
  name: { firstName: 'Stu 1', middleName: 'Smitdfh', lastName: 'Doe' },
  gender: 'female',
  bloogGroup: 'O+',


  email: 'mokter2mokter@gmail.com',
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


  // admissionSemester: '65afa54e77f3279bbfbbd384',
  // academicDepartment: '65afa56677f3279bbfbbd387',
  profileImg: 'https://picsum.photos/250/350',
  isDeleted: false
}



import { FieldValues, SubmitHandler } from "react-hook-form";
import PHForm from "../../../components/form/PHForm";
import PHInput from "../../../components/form/PHInput";
import { Button, Col, Divider, Row } from "antd";
import PHSelect from "../../../components/form/PHSelect";
import { bloodGroupOptions, genderOptions } from "../../../types";
import PHDatePicker from "../../../components/form/PHDatePicker";
import { useGetAllSemestersQuery } from "../../../redux/features/admin/academicManagement.api";




const CreateStudent = () => {

  const { data: semesterData, isLoading: semesterLoding } = useGetAllSemestersQuery(undefined)
  const semesterOptions = semesterData?.data?.map(item => ({
    value: item._id,
    label: `${item.name} ${item.year}`
  }))
  console.log(semesterOptions);


  const onSubmit: SubmitHandler<FieldValues> = (data) => {
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
              <PHSelect disabled={semesterLoding} options={semesterOptions} name="admissionSemester"  label="Admission Semester" />
            </Col>

            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHSelect  name="academicDepartment" label="Academic Department" /></Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput type="text" name="profileImg" label="Profile Img." /></Col>


          </Row>
          <Button htmlType="submit">Submit</Button>
        </PHForm>
      </Col>
    </Row>
  );
};

export default CreateStudent;
