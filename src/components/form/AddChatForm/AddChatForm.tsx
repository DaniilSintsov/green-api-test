import { useAppDispatch } from '../../../hooks/useAppDispatch/useAppDispatch.hook';
import { IChat, addChat } from '../../../store/chats/chats.slice';
import Input from '../Input/Input';
import { IAddChatFormProps } from './AddChatForm.types';
import { useState } from 'react';

const AddChatForm: React.FC<IAddChatFormProps> = ({ setIsModalOpen }) => {
  const [phoneValue, setPhoneValue] = useState<string>('');
  const dispatch = useAppDispatch();

  const onSubmitHandler = (e: React.FormEvent): void => {
    e.preventDefault();

    if (!phoneValue.trim().length) {
      return;
    }

    const chat: IChat = {
      id: Date.now(),
      phone: phoneValue.trim(),
      messages: []
    };
    dispatch(addChat(chat));
    setIsModalOpen(false);
    setPhoneValue('');
  };

  const onInputPhoneHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setPhoneValue(e.target.value);
  };

  return (
    <form onSubmit={e => onSubmitHandler(e)}>
      <Input
        inputId="phone"
        labelText="Введите номер телефона получателя в формате 7XXXXXXXXXX"
        type="tel"
        value={phoneValue}
        pattern="7[0-9]{3}[0-9]{3}[0-9]{4}"
        onChange={onInputPhoneHandler}
      />
      <button className="btn">Добавить</button>
    </form>
  );
};

export default AddChatForm;
