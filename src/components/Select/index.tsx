import { Wrapper } from './styles';
import { Text } from '..';

type SelectProps = {
  className?: string;
  color?:
    | 'client'
    | 'productOwner'
    | 'developer'
    | 'admin'
    | 'success'
    | 'warning'
    | 'error'
    | 'black'
    | 'white';
  error?: boolean;
  errorMessage?: string;
  options: Array<{ value: any; label: string }>;
  value: string;
  name: string;
  label?: string;
  fullWidth?: boolean;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

const Select = ({
  color = 'client',
  label,
  name,
  value,
  options,
  onChange,
  error,
  errorMessage,
  ...props
}: SelectProps) => {
  return (
    <Wrapper label={label} error={error} color={color} {...props}>
      <div className='info'>
        {label && (
          <Text variant='body' weight='bold' className='label'>
            {label}
          </Text>
        )}
        {error && errorMessage && (
          <Text variant='body' color='error' className='error-message'>
            {errorMessage}
          </Text>
        )}
      </div>
      <div className='select'>
        <div>
          <select value={value} name={name} onChange={onChange}>
            {options.map((option) => (
              <option key={value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </Wrapper>
  );
};

export default Select;
