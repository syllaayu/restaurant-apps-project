import RestaurantDataSource from '../../data/data-source';
import { createRestaurantItemTemplate, createSkeletonMovieTemplate } from '../templates/template-creator';

const HomePage = {
  async render() {
    return `
        <section class="content">
          <div class="explore">
            <h2  tabindex="0" class="explore-label">Explore Restaurant</h2>
            <div class="restaurants">
              <div class="restaurantList" id="restaurantList">${createSkeletonMovieTemplate(20)}</div>
            </div>
          </div>
        </section>
        `;
  },

  async afterRender() {
    const restaurants = await RestaurantDataSource.restaurantList();
    const restaurantContainer = document.querySelector('#restaurantList');
    restaurantContainer.innerHTML = '';
    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
    const Hero = document.querySelector('.hero');
    Hero.style.display = 'flex';
  },
};

export default HomePage;
