import classes from './MessageItem.module.css';
import { IMessageItemProps } from './MessageItem.types';

const MessageItem: React.FC<IMessageItemProps> = ({ message }) => {
  return (
    <div
      className={`${classes.message} ${
        message.isOwn ? classes.own : classes.notOwn
      }`}>
      {message.text}
    </div>
  );
};

export default MessageItem;
