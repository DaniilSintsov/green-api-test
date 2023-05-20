import classes from './Input.module.css';
import { IInputProps } from './Input.types';

const Input: React.FC<IInputProps> = ({
  inputId,
  type,
  labelText,
  value,
  onChange,
  pattern
}) => {
  return (
    <div className={classes.input}>
      <label
        className={classes.input__label}
        htmlFor={inputId}>
        {labelText}:
      </label>
      {pattern ? (
        <input
          value={value}
          required
          pattern={pattern}
          onChange={e => onChange(e)}
          className={classes.input__field}
          id={inputId}
          type={type}
        />
      ) : (
        <input
          value={value}
          required
          onChange={e => onChange(e)}
          className={classes.input__field}
          id={inputId}
          type={type}
        />
      )}
    </div>
  );
};

export default Input;
