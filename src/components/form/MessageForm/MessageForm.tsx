import { useAppDispatch } from '../../../hooks/useAppDispatch/useAppDispatch.hook';
import { useAppSelector } from '../../../hooks/useAppSelector/useAppSelector.hook';
import { useCurrentChat } from '../../../hooks/useCurrentChat/useCurrentChat';
import whatsAppClient from '../../../services/whatsAppClient/whatsAppClient';
import { IChat, addMessage } from '../../../store/chats/chats.slice';
import { CHAT_ID_POSTFIX } from '../../constants/constants';
import Input from '../Input/Input';
import classes from './MessageForm.module.css';
import { useState } from 'react';

const MessageForm = () => {
  const [message, setMessage] = useState<string>('');
  const dispatch = useAppDispatch();
  const idInstance = useAppSelector(state => state.auth.idInstance);
  const curChat = useCurrentChat() as IChat;
  const apiTokenInstance = useAppSelector(state => state.auth.apiTokenInstance);
  const chatId = curChat.phone + CHAT_ID_POSTFIX;

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
      .then(res => {
        dispatch(
          addMessage({
            chatId: curChat?.id as number,
            message: { text: message.trim(), isOwn: true, id: res.idMessage }
          })
        );
      })
      .catch(err => {
        alert('Произошла ошибка при отправке сообщения');
        console.error('sendMessage', err);
      });
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
