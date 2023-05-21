import { useAppDispatch } from '../../hooks/useAppDispatch/useAppDispatch.hook';
import { useCurrentChat } from '../../hooks/useCurrentChat/useCurrentChat';
import { deleteChat } from '../../store/chats/chats.slice';
import classes from './ChatHeader.module.css';

const ChatHeader = () => {
  const curChat = useCurrentChat();
  const dispatch = useAppDispatch();

  return (
    <div className={classes.header}>
      <div className={classes.header__text}>Переписка с {curChat?.phone}</div>
      <div>
        <button
          onClick={() => dispatch(deleteChat(curChat?.id as number))}
          className="btn">
          Удалить
        </button>
      </div>
    </div>
  );
};

export default ChatHeader;
