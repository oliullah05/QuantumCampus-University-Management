import { Button } from "antd";
import { useForm } from "react-hook-form";
import { useLogInMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/hooks";
import { setUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";

const LogIn = () => {

const dispatch = useAppDispatch()


    const { register, handleSubmit } = useForm({
        defaultValues:{
            userId:"A-0001",
            password:"admin123"
        }
    })

    const [login, { error }] = useLogInMutation()
    const onSubmit =async (data) => {
        const userInfo = {
            id:data.userId,
            password:data.password
        }
   const res =    await login(userInfo).unwrap();
   const user = verifyToken(res.data.accessToken)
   dispatch(setUser({user,token:res.data.accessToken}))

    }







    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="id">ID:</label>
            <input type="text" id="id" {...register("userId")} />
            <label htmlFor="password">ID:</label>
            <input type="password" id="password" {...register("password")} />
            <Button htmlType="submit">LogIn</Button>
        </form>
    );
};

export default LogIn;