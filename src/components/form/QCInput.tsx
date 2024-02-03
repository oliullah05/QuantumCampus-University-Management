import { Form, Input } from "antd";
import { Controller } from "react-hook-form";


type TInputProps = {
  type: string, name: string, label: string
}

const QCInput = ({ type, name, label }: TInputProps) => {

  return <div >

    <Controller
      name={name}
      render={({ field }) => (
        <Form.Item label={label}>
          <Input type={type} {...field} id={name} size="large" />
        </Form.Item>
      )}
    />



  </div>

};

export default QCInput;