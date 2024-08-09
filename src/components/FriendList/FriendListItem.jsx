import css from "./FriendListItem.module.css";

export default function FriendListItem({ friend: { isOnline, name, avatar } }) {
  return (
    <>
      <img src={avatar} alt="Avatar" width="48" />
      <p className={css.itemName}>{name}</p>
      <p className={isOnline ? css.isOnline : css.isOffline}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </>
  );
}
