import classes from './Modal.module.css';
import { IModalProps } from './Modal.types';

const Modal: React.FC<IModalProps> = ({ children, show }) => {
  return (
    <div className={`${classes.modal} ${show ? classes.active : ''}`}>
      <div className={classes.modal__body}>{children}</div>
    </div>
  );
};

export default Modal;
