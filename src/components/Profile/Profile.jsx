import css from "../Profile/Profile.module.css";
export default function Profile({ name, tag, location, image, stats }) {
  return (
    <div className="container">
      <div className="box">
        <img src={image} alt="User avatar" />
        <p className="Username">{name}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>

      <ul>
        <li>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </li>
        <li>
          <span>Views</span>
          <span>{stats.views}</span>
        </li>
        <li>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
