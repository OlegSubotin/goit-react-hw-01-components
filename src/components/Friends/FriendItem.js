import PropTypes from 'prop-types';
import s from './Friends.module.css';

const FriendItem = ({ avatar, name, isOnline }) => {
    return (
        <li className={s.item}>
            {<span className={ isOnline?s.statusTrue:s.statusFalse}></span>}
            <img className={s.avatar} src={avatar} alt="User avatar" width="48" />
            <p className={s.name}>{ name }</p>
        </li>
    )
}

FriendItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}

export default FriendItem;
