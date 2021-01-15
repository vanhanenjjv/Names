import { Input as AntdInput } from 'antd';


interface InputProps {
  onChange: (value: string) => void;
  disabled: boolean;
}

const Input: React.FC<InputProps> = ({ onChange, disabled }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => onChange(event.target.value);

  return (
    <AntdInput
      disabled={disabled}
      onChange={handleChange}
      style={{ width: '100%' }}
      placeholder="Search by name" />
  );
};


export default Input;