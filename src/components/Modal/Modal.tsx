import classes from './Modal.module.css';
import { IModalProps } from './Modal.types';

const Modal: React.FC<IModalProps> = ({
  children,
  show,
  setIsModalOpen,
  closable = true
}) => {
  return (
    <>
      {closable && setIsModalOpen ? (
        <div
          onClick={() => setIsModalOpen(false)}
          className={`${classes.modal} ${show ? classes.active : ''}`}>
          <div
            onClick={e => e.stopPropagation()}
            className={classes.modal__body}>
            {children}
          </div>
        </div>
      ) : (
        <div className={`${classes.modal} ${show ? classes.active : ''}`}>
          <div className={classes.modal__body}>{children}</div>
        </div>
      )}
    </>
  );
};

export default Modal;
