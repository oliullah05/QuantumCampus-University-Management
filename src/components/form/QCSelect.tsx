import { Form, Select } from 'antd';
import { Controller } from 'react-hook-form';


type QCSelectProps = {
    label:string,
    name:string,
    options:{
        value:string,
        label:string,
        disables?:boolean
    }[]
}


const QCSelect = ({ label, name,options }: QCSelectProps) => {

    return (
        <Controller
            name={name}
            render={({field,fieldState:{error}}) => (<Form.Item label={label}>

                <Select
                {...field}
                    style={{ width: "100%" }}
                    options={options}
                    size='large'
                />
                {error && <small style={{color:"red"}}>{error.message}</small>}
            </Form.Item>)}
        />

    );
};

export default QCSelect;