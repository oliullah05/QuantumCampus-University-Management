import { Button } from "antd";
import { useForm } from "react-hook-form";
import { useAppDispatch } from "../redux/hooks";
import { useLogInMutation } from "../redux/features/auth/authApi";

const LogIn = () => {
    const { register, handleSubmit } = useForm({
        defaultValues:{
            userId:"A-0001",
            password:"admin123"
        }
    })

    const [login, { data, error }] = useLogInMutation()
    console.log({error,data});
    const onSubmit = (data) => {
        const userInfo = {
            id:data.userId,
            password:data.password
        }
        console.log(userInfo);
        login(userInfo)
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