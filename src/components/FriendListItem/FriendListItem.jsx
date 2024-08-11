import css from ".//FriendListItem.module.css";
export default function FrendListItem({ avatar, name, isOnline }) {
  return (
    <div className={css.container}>
      <img src={avatar} alt="{name}" width="48" />
      <p className={css.title}>{name}</p>
      <p className={isOnline ? css.online : css.offline}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
}
