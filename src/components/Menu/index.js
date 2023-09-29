import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faPencil,
  faEraser,
  faRotateLeft,
  faRotateRight,
  faFileArrowDown,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./index.module.css";

import cx from "classnames";

import {MENU_ITEMS} from "@/constants";
import {useDispatch, useSelector} from "react-redux";
import {menuItemClick, actionItemClick} from "@/slice/menuSlice";
const Menu = () => {
  const dispatch = useDispatch();
  const activeItem = useSelector((state) => state.menu.activeMenuItem);

  const handleClick = (itemName) => {
    dispatch(menuItemClick(itemName));
  };
  return (
    <div className={styles.menuContainer}>
      <div
        className={cx(styles.iconWrapper, {
          [styles.active]: activeItem === MENU_ITEMS.PENCIL,
        })}
        onClick={() => handleClick(MENU_ITEMS.PENCIL)}
      >
        <FontAwesomeIcon icon={faPencil} className={styles.icon} />
      </div>
      <div
        className={cx(styles.iconWrapper, {
          [styles.active]: activeItem === MENU_ITEMS.ERASER,
        })}
        onClick={() => handleClick(MENU_ITEMS.ERASER)}
      >
        <FontAwesomeIcon icon={faEraser} className={styles.icon} />
      </div>
      <div className={styles.iconWrapper}>
        <FontAwesomeIcon icon={faRotateLeft} className={styles.icon} />
      </div>
      <div className={styles.iconWrapper}>
        <FontAwesomeIcon icon={faRotateRight} className={styles.icon} />
      </div>
      <div className={styles.iconWrapper}>
        <FontAwesomeIcon icon={faFileArrowDown} className={styles.icon} />
      </div>
    </div>
  );
};

export default Menu;
