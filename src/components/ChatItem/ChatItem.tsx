import { IChatItemProps } from './ChatItem.types';
import classes from './ChatItem.module.css';
import { useAppDispatch } from '../../hooks/useAppDispatch/useAppDispatch.hook';
import { setCurrentChatId } from '../../store/chats/chats.slice';

const ChatItem: React.FC<IChatItemProps> = ({ chat }) => {
  const dispatch = useAppDispatch();

  const onClickHandler = () => {
    dispatch(setCurrentChatId(chat.id));
  };

  return (
    <div
      onClick={onClickHandler}
      className={classes.chatItem}
      key={chat.id}>
      {chat.phone}
    </div>
  );
};

export default ChatItem;
