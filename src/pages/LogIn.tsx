import { Button } from "antd";
import { FieldValues, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from 'sonner';
import { useLogInMutation } from "../redux/features/auth/authApi";
import { TUser, setUser } from "../redux/features/auth/authSlice";
import { useAppDispatch } from "../redux/hooks";
import { verifyToken } from "../utils/verifyToken";
import QuantumCampusForm from "../components/form/QuantumCampusForm";
const LogIn = () => {
    const [login] = useLogInMutation()
const dispatch = useAppDispatch()
const navigate = useNavigate()



    const { register, handleSubmit } = useForm({
        defaultValues:{
            userId:"A-0001",
            password:"admin123"
        }
    })


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
        <QuantumCampusForm onSubmit={onSubmit}>
            <label htmlFor="id">ID:</label>
            <input type="text" id="id" {...register("userId")} />
            <label htmlFor="password">ID:</label>
            <input type="password" id="password" {...register("password")} />
            <Button htmlType="submit">LogIn</Button>
        </QuantumCampusForm>
    );
};

export default LogIn;