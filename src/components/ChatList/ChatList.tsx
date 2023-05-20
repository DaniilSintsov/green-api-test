import { useAppSelector } from '../../hooks/useAppSelector/useAppSelector.hook';
import { IChat } from '../../store/chats/chats.slice';
import ChatItem from '../ChatItem/ChatItem';
import classes from './ChatList.module.css';

const ChatList = () => {
  const chatList: IChat[] = useAppSelector(state => state.chats.chatList);

  return (
    <>
      {chatList.length ? (
        <div className={classes.chatList}>
          {chatList.map(chat => (
            <ChatItem
              key={chat.id}
              chat={chat}
            />
          ))}
        </div>
      ) : (
        <div className={classes.chatList}>Добавьте чат</div>
      )}
    </>
  );
};

export default ChatList;
