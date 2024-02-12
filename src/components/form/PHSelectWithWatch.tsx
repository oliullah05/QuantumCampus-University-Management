import { Form, Select } from 'antd';
import { Controller, useFormContext, useWatch } from 'react-hook-form';

type TPHSelectProps = {
  label: string;
  name: string;
  options: { value: string; label: string; disabled?: boolean }[]|undefined;
  disabled?:boolean
};

const PHSelectWithWatch = ({ label, name, options,disabled }: TPHSelectProps) => {
  const {control}= useFormContext()
  const inputValue = useWatch({
    control,
    name
  })
  return (
    <Controller
      name={name}
      render={({ field, fieldState: { error } }) => (
        <Form.Item label={label}>
          <Select
            style={{ width: '100%' }}
            {...field}
            options={options}
            size="large"
            disabled={disabled}
          />
          {error && <small style={{ color: 'red' }}>{error.message}</small>}
        </Form.Item>
      )}
    />
  );
};

export default PHSelectWithWatch;