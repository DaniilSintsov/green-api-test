import { useAppSelector } from '../../hooks/useAppSelector/useAppSelector.hook';
import MessageForm from '../form/MessageForm/MessageForm';
import classes from './ChatBlock.module.css';

const ChatBlock = () => {
  const currentChat = useAppSelector(state => state.chats.currentChat);

  return (
    <>
      {currentChat ? (
        <div className={classes.chatBlock}>
          <div className={classes.chatBlock__title}>
            Переписка с {currentChat.phone}
          </div>
          <MessageForm />
        </div>
      ) : (
        <div className={classes.empty}>Выберите чат</div>
      )}
    </>
  );
};

export default ChatBlock;
