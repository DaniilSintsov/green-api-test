import { useCurrentChat } from '../../hooks/useCurrentChat/useCurrentChat';
import classes from './MessageItem.module.css';
import { IMessageItemProps } from './MessageItem.types';

const MessageItem: React.FC<IMessageItemProps> = ({ message }) => {
  const curChat = useCurrentChat();

  return (
    <div
      className={`${classes.message} ${
        message.isOwn ? classes.own : classes.notOwn
      }`}>
      <div className={classes.message__title}>
        {message.isOwn ? 'Вы' : curChat?.phone}
      </div>
      <div>{message.text}</div>
    </div>
  );
};

export default MessageItem;
