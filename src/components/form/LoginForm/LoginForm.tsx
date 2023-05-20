import { useAppDispatch } from '../../../hooks/useAppDispatch/useAppDispatch.hook';
import { setAuthorized } from '../../../store/auth/auth.slice';
import Input from '../Input/Input';
import { useState } from 'react';

const LoginForm = () => {
  const [idInstanceValue, setIdInstanceValue] = useState<string>('');
  const [apiTokenInstanceValue, setApiTokenInstanceValue] =
    useState<string>('');
  const dispatch = useAppDispatch();

  const onInputIdInstanceHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setIdInstanceValue(e.target.value);
  };

  const onInputApiTokenInstanceHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setApiTokenInstanceValue(e.target.value);
  };

  const onSubmitHandler = (e: React.FormEvent): void => {
    e.preventDefault();
    dispatch(
      setAuthorized({
        idInstance: idInstanceValue,
        apiTokenInstance: apiTokenInstanceValue
      })
    );
    setIdInstanceValue('');
    setApiTokenInstanceValue('');
  };

  return (
    <form onSubmit={e => onSubmitHandler(e)}>
      <Input
        inputId="idInstance"
        labelText="Введите ваш idInstance"
        type="text"
        value={idInstanceValue}
        onChange={onInputIdInstanceHandler}
      />
      <Input
        inputId="apiTokenInstance"
        labelText="Введите ваш apiTokenInstance"
        type="password"
        value={apiTokenInstanceValue}
        onChange={onInputApiTokenInstanceHandler}
      />
      <button className="btn">Войти</button>
    </form>
  );
};

export default LoginForm;
