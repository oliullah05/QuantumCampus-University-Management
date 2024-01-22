import { Input } from "antd";
import { Controller, useFormContext } from "react-hook-form";

const QCInput = ({type,name,label}) => {
    const {register}=useFormContext()
    return   <div >

    {label ? label:null}
    <Controller
    name={name}
      render={({field})=>(
        <Input type={type} {...field} id={name} />
      )}
/>
   
    
    
    </div>

};

export default QCInput;