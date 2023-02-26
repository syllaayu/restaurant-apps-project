import FavoriteRestaurantIdb from '../../data/favorite-idb';
import { createRestaurantItemTemplate, createSkeletonMovieTemplate } from '../templates/template-creator';

const LikePage = {
  async render() {
    return `
          <section class="content">
            <div class="explore">
              <h2  tabindex="0" class="explore-label">Favorite Restaurant</h2>
              <div class="restaurants">
                <div class="restaurantList" id="restaurantList">${createSkeletonMovieTemplate(20)}</div>
              </div>
            </div>
          </section>
          `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllResto();
    const restaurantContainer = document.querySelector('#restaurantList');
    restaurantContainer.innerHTML = '';
    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
    const Hero = document.querySelector('.hero');
    Hero.style.display = 'flex';
  },
};

export default LikePage;
