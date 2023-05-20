import { useAppDispatch } from '../../hooks/useAppDispatch/useAppDispatch.hook';
import { useAppSelector } from '../../hooks/useAppSelector/useAppSelector.hook';
import { setNotAuthorized } from '../../store/auth/auth.slice';
import classes from './Main.module.css';

const Main = () => {
  const idInstance = useAppSelector(state => state.auth.idInstance);
  const dispatch = useAppDispatch();

  return (
    <main className={classes.main}>
      {useAppSelector(state => state.auth.isAuth) && (
        <div className={classes.infoBar}>
          <div className={classes.infoBar__title}>{idInstance}</div>
          <div className={classes.infoBar__btn}>
            <button
              className="btn"
              onClick={() => dispatch(setNotAuthorized())}>
              Выйти
            </button>
          </div>
        </div>
      )}
    </main>
  );
};

export default Main;
