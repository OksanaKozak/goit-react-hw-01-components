import user from './user.json';
import App from '..//App';

export default function User({username, tag, location, avatar, stats}) {
return (
      <div class="profile">
      <div class="description">
        <img
          src={avatar}
          alt={username}
          class="avatar"
        />
        <p class="name">{username}</p>
        <p class="tag">{tag}</p>
        <p class="location">{location}</p>
      </div>
    
      <ul class="stats">{stats}
        <li>
          <span class="label">Followers</span>
          <span class="quantity">1000</span>
        </li>
        <li>
          <span class="label">Views</span>
          <span class="quantity">2000</span>
        </li>
        <li>
          <span class="label">Likes</span>
          <span class="quantity">3000</span>
        </li>
      </ul>
    </div>
    );
}
ReactDOM.render(<App />, document.querySelector('#root'));