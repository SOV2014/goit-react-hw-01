import css from "./Profile.module.css";
export default function Profile({ username, tag, location, avatar, stats }) {
  return (
    <div className={css.container}>
      <div className={css.avatarContainer}>
        <img
          className={css.avatar}
          src={avatar}
          alt="User avatar"
          width={150}
        />
        <p className={css.title}>{username}</p>
        <p className={css.description}>@{tag}</p>
        <p className={css.description}>{location}</p>
      </div>

      <ul className={css.list}>
        <li className={css.itemList}>
          <span>Followers</span>
          <span className={css.stats}>{stats.followers}</span>
        </li>
        <li className={css.itemList}>
          <span>Views</span>
          <span className={css.stats}>{stats.views}</span>
        </li>
        <li className={css.itemList}>
          <span>Likes</span>
          <span className={css.stats}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
