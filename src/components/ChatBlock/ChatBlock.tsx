import { useAppSelector } from '../../hooks/useAppSelector/useAppSelector.hook';
import { useCurrentChat } from '../../hooks/useCurrentChat/useCurrentChat';
import MessageList from '../MessageList/MessageList';
import MessageForm from '../form/MessageForm/MessageForm';
import classes from './ChatBlock.module.css';

const ChatBlock = () => {
  const curChat = useCurrentChat();

  return (
    <>
      {useAppSelector(state => state.chats.currentChatId) && curChat ? (
        <div className={classes.chatBlock}>
          <div className={classes.chatBlock__title}>
            Переписка с {curChat.phone}
          </div>
          <MessageList />
          <MessageForm />
        </div>
      ) : (
        <div className={classes.empty}>Выберите чат</div>
      )}
    </>
  );
};

export default ChatBlock;
