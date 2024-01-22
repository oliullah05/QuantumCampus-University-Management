import { Input } from "antd";
import { useFormContext } from "react-hook-form";

const QCInput = ({type,name,label}) => {
    const {register}=useFormContext()
    return   <>

    {label ? label:null}
    <Input type={type} id={name} {...register(name)} />
    
    
    </>

};

export default QCInput;