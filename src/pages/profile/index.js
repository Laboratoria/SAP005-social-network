import { Post } from '../../components/post/index.js';
import { Navbar } from '../../components/navbar/index.js';

export const Profile = () => {
  const profileBody = document.createElement('div');
  const profileHeader = document.createElement('header');
  profileHeader.className = 'profile-header';

  profileHeader.innerHTML = `
    <div id="profile-banner">IMG-BANNER</div>
    <div class="profile-user-info">
      <h2 id="profile-user-name">Samara Tokki</h2>
      <figure class="profile-favorite-quote">
        <blockquote id="profile-quote-text">
          Não confio em pessoas que não se amam e mesmo assim dizem "eu te amo". Eis o que diz um provérbio africano: tome cuidado quando uma pessoa nua lhe oferece uma camisa.
        </blockquote>
        <figcaption id="profile-quote-author">
          &mdash; Maya Angelou
        </figcaption>
      </figure>
    </div>
  `;

  profileBody.appendChild(profileHeader);
  profileBody.appendChild(Post());
  profileBody.appendChild(Navbar());

  return profileBody;
};
