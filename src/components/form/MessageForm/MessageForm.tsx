import { useAppSelector } from '../../../hooks/useAppSelector/useAppSelector.hook';
import whatsAppClient from '../../../services/whatsAppClient/whatsAppClient';
import Input from '../Input/Input';
import classes from './MessageForm.module.css';
import { useState } from 'react';

const MessageForm = () => {
  const [message, setMessage] = useState<string>('');
  const idInstance = useAppSelector(state => state.auth.idInstance);
  const apiTokenInstance = useAppSelector(state => state.auth.apiTokenInstance);
  const chatId =
    useAppSelector(state => state.chats.currentChat?.phone) + '@c.us';

  const onInputMessageHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setMessage(e.target.value);
  };

  const onSubmitHandler = (e: React.FormEvent): void => {
    e.preventDefault();

    if (!message.trim().length) {
      return;
    }

    whatsAppClient
      .sendMessage({
        idInstance,
        apiTokenInstance,
        chatId,
        message: message.trim()
      })
      .then(res => console.log(res))
      .catch(res => alert('Произошла ошибка'));
    setMessage('');
  };

  return (
    <form
      className={classes.form}
      onSubmit={e => onSubmitHandler(e)}>
      <div className={classes.input}>
        <Input
          inputId="message"
          type="text"
          labelText="Введите текст сообщения"
          value={message}
          onChange={onInputMessageHandler}
        />
      </div>
      <div>
        <button className="btn">Отправить</button>
      </div>
    </form>
  );
};

export default MessageForm;
