import FriendListItem from "./FriendListItem";
import css from "./";

export default function FriendList({ friends }) {
  return (
    <ul className={css.friendsList}>
      {friends.map((friend) => {
        return (
          <li key={friend.id} className={css.listItem}>
            <FriendListItem friend={friend} />
          </li>
        );
      })}
    </ul>
  );
}
