import { useAppSelector } from '../../hooks/useAppSelector/useAppSelector.hook';
import { useCurrentChat } from '../../hooks/useCurrentChat/useCurrentChat';
import MessageItem from '../MessageItem/MessageItem';
import classes from './MessageList.module.css';

const MessageList = () => {
  const chat = useCurrentChat();

  return (
    <div className={classes.messageList}>
      {useAppSelector(state => state.chats.currentChatId) &&
        chat &&
        chat.messages.map(msg => (
          <MessageItem
            key={msg.id}
            message={msg}
          />
        ))}
    </div>
  );
};

export default MessageList;
