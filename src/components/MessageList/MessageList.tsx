import { useEffect } from 'react';
import { useAppSelector } from '../../hooks/useAppSelector/useAppSelector.hook';
import { useCurrentChat } from '../../hooks/useCurrentChat/useCurrentChat';
import MessageItem from '../MessageItem/MessageItem';
import classes from './MessageList.module.css';
import whatsAppClient from '../../services/whatsAppClient/whatsAppClient';
import { CHAT_ID_POSTFIX } from '../constants/constants';
import { useAppDispatch } from '../../hooks/useAppDispatch/useAppDispatch.hook';
import { addMessage } from '../../store/chats/chats.slice';

const MessageList = () => {
  const curChat = useCurrentChat();
  const dispatch = useAppDispatch();
  const idInstance = useAppSelector(state => state.auth.idInstance);
  const apiTokenInstance = useAppSelector(state => state.auth.apiTokenInstance);

  const saveMessage = (text: string, id: string): void => {
    const message = { text, id, isOwn: false };
    dispatch(addMessage({ chatId: curChat?.id as number, message }));
  };

  useEffect(() => {
    setInterval(() => {
      whatsAppClient
        .receiveNotification({ idInstance, apiTokenInstance })
        .then(res => {
          if (res.body) {
            if (
              res.body.senderData.chatId ===
              curChat?.phone + CHAT_ID_POSTFIX
            ) {
              if (res.body.messageData.extendedTextMessageData) {
                saveMessage(
                  res.body.messageData.extendedTextMessageData.text,
                  res.body.idMessage
                );
              } else if (res.body.messageData.textMessageData) {
                saveMessage(
                  res.body.messageData.textMessageData.textMessage,
                  res.body.idMessage
                );
              }
            }

            whatsAppClient
              .deleteNotification({
                idInstance,
                apiTokenInstance,
                receiptId: res.receiptId
              })
              .catch(err => console.error('deleteNotification', err));
          }
        })
        .catch(err => console.error('receiveNotification', err));
    }, 5000);
  });

  return (
    <div className={classes.messageList}>
      {useAppSelector(state => state.chats.currentChatId) &&
        curChat &&
        curChat.messages.map(msg => (
          <MessageItem
            key={msg.id}
            message={msg}
          />
        ))}
    </div>
  );
};

export default MessageList;
