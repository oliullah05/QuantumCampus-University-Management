import { Button } from "antd";
import { FieldValues, useFormContext } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import QCForm from "../components/form/QCForm";
import { useLogInMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/hooks";
import QCInput from "../components/form/QCInput";
const LogIn = () => {
    const [login] = useLogInMutation()
const dispatch = useAppDispatch()
const navigate = useNavigate()



    // const { register, handleSubmit } = useForm({
    //     defaultValues:{
    //         userId:"A-0001",
    //         password:"admin123"
    //     }
    // })

// const {clearErrors} =useFormContext()



    const onSubmit =async (data:FieldValues) => {
    console.log(data);
//      const toastId =    toast.loading("Loggin in")
//        try{
//         const userInfo = {
//             id:data.userId,
//             password:data.password
//         }

//    const res =   await login(userInfo).unwrap();
//    const user = verifyToken(res.data.accessToken) as TUser
//    dispatch(setUser({user,token:res.data.accessToken}))
//    toast.success("log in successfully",{id:toastId,duration:1500})
//    navigate(`/${user.role}/dashboard`)
   
//        }
//        catch(err){
//         toast.error("something went wrong",{id:toastId,duration:1500})
//        }


    }







    return (
        <QCForm onSubmit={onSubmit}>
            {/* <label htmlFor="id">ID:</label> */}
            <QCInput type="password" name="userId" label={"id"}></QCInput>
           
            {/* <input type="text" id="id" {...register("userId")} /> */}
            {/* <label htmlFor="password">ID:</label> */}
         <QCInput type="password" name="password" label={"password"}></QCInput>
            <Button htmlType="submit">LogIn</Button>
        </QCForm>
    );
};

export default LogIn;