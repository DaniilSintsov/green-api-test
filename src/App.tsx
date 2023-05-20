import Modal from './components/Modal/Modal';
import Sidebar from './components/Sidebar/Sidebar';
import LoginForm from './components/form/LoginForm/LoginForm';
import { useAppSelector } from './hooks/useAppSelector/useAppSelector.hook';

function App() {
  return (
    <>
      <Sidebar />
      <Modal show={!useAppSelector(state => state.auth.isAuth)}>
        <LoginForm />
      </Modal>
    </>
  );
}

export default App;
