import ChatList from '../ChatList/ChatList';
import Modal from '../Modal/Modal';
import AddChatForm from '../form/AddChatForm/AddChatForm';
import classes from './Sidebar.module.css';
import { useState } from 'react';

const Sidebar = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <aside className={classes.sidebar}>
      <div className={classes.sidebar__title}>Чаты</div>
      <ChatList />
      <button
        className="btn"
        onClick={() => setIsModalOpen(true)}>
        Добавить чат
      </button>
      <Modal show={isModalOpen}>
        <AddChatForm setIsModalOpen={setIsModalOpen} />
      </Modal>
    </aside>
  );
};

export default Sidebar;
