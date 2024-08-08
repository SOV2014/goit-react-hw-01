import css from "./Profile.module.css";

export default function Profile({ stats, image, location, tag, name }) {
  return (
    <div className={css.cardWrapper}>
      <div className={css.profileWrapper}>
        <img className={css.cardImg} src={image} alt="User avatar" />
        <p className={css.cardName}>{name}</p>
        <p className={css.cardText}>@{tag}</p>
        <p className={css.cardText}>{location}</p>
      </div>

      <ul className={css.listStats}>
        <li className={css.itemStats}>
          <span>Followers</span>
          <span className={css.statsSpan}>{stats.followers}</span>
        </li>
        <li className={css.itemStats}>
          <span>Views</span>
          <span className={css.statsSpan}>{stats.views}</span>
        </li>
        <li className={css.itemStats}>
          <span>Likes</span>
          <span className={css.statsSpan}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
