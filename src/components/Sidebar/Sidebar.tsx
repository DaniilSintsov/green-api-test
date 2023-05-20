import ChatList from '../ChatList/ChatList';
import classes from './Sidebar.module.css';

const Sidebar = () => {
  return (
    <aside className={classes.sidebar}>
      <div className={classes.sidebar__title}>Чаты</div>
      <ChatList />
      <button className="btn">Добавить чат</button>
    </aside>
  );
};

export default Sidebar;
