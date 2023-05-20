import { IChatItemProps } from './ChatItem.types';
import classes from './ChatItem.module.css';

const ChatItem: React.FC<IChatItemProps> = ({ chat }) => {
  return (
    <div
      className={classes.chatItem}
      key={chat.id}>
      {chat.phone}
    </div>
  );
};

export default ChatItem;
