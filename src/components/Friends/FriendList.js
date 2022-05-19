import PropTypes from 'prop-types';
import s from './Friends.module.css';
import FriendItem from './FriendItem';

const FriendsList = ({ friends }) => {
    return (
        
            <ul className={s.list}>
                {friends.map(friend => (
                    <FriendItem
                        key={friend.id}
                        avatar={friend.avatar}
                        name={friend.name}
                        isOnline={friend.isOnline}
                    />
                ))}
            </ul>
        
    )
}

FriendsList.propTypes = {
    friends: PropTypes.array.isRequired,
}

export default FriendsList;