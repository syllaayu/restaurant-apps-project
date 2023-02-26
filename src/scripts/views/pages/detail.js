import RestaurantDataSource from '../../data/data-source';
import FavoriteRestaurantIdb from '../../data/favorite-idb';
import UrlParser from '../../routes/url-parser';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import { createRestaurantDetailTemplate, createSkeletonMovieTemplate } from '../templates/template-creator';

const DetailPage = {
  async render() {
    return `
          <main id="main" tabindex="0">
            <div id="restaurant-detail" class="restaurant-detail">${createSkeletonMovieTemplate(20)}</div>
            <div id="likeButtonContainer"></div>
          </main>
        `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantDataSource.restaurantDetail(url.id);
    const restaurantContainer = document.querySelector('#restaurant-detail');
    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);

    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteResto: FavoriteRestaurantIdb,
      resto: {
        pictureId: restaurant.pictureId,
        id: restaurant.id,
        city: restaurant.city,
        name: restaurant.name,
        description: restaurant.description,
        rating: restaurant.rating,
      },
    });

    const skipLinkElem = document.querySelector('.skip-link');
    skipLinkElem.addEventListener('click', (event) => {
      event.preventDefault();
      document.querySelector('#main').focus();
    });

    const Hero = document.querySelector('.hero');
    Hero.style.display = 'none';
  },
};

export default DetailPage;
