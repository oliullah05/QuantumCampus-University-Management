import { useGetAllSemestersQuery } from "../../../redux/features/academicSemester/academicSemesterApi";

const AcademicSemester = () => {
const {data}= useGetAllSemestersQuery(undefined)

    return (
        <div>
            asa
        </div>
    );
};

export default AcademicSemester;