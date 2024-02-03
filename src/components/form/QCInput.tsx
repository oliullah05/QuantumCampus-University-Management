import { Input } from "antd";
import { Controller, useFormContext } from "react-hook-form";


type TInputProps = {
    type:string,name:string,label:string
}

const QCInput = ({type,name,label}:TInputProps) => {
   
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