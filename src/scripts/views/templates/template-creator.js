/* eslint-disable import/prefer-default-export */
import CONFIG from '../../globals/config';

const createSkeletonMovieTemplate = (count) => {
  let template = '';

  for (let i = 0; i < count; i += 1) {
    template += `
      <div class="restaurant-detail-thumbnail">
          <h2 tabindex="0" class="skeleton">Lorem ipsum dolor sit amet</h2>
          <img class="restaurant-detail-poster" src="./placeholders/placeholder.png" width: 100% height: 265px alt="skeleton" class="restaurant-detail-poster">
      </div>
  
      <article class="restaurant-item">
          <div class="thumbnail">
              <img class="item-thumbnail" width: 100% height: 265px src="./placeholders/placeholder.png" alt="skeleton">
              <p class="item-city">Lorem Ipsum</p>
          </div>
          <div class="item-content">
              <p class="content-rating">Rating: }</p>
              <h3 class="skeleton"><a Lorem ipsum dolor sit amet.></a></h3>
              <p class="skeleton">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci alias aspernatur, assumenda aut consectetur consequuntur debitis deleniti dicta dolorem dolorum eos exercitationem labore laboriosam magni nihil, nobis obcaecati optio perspiciatis placeat qui recusandae saepe sapiente sequi totam ullam ut.</p>
          </div>
      </article>
      `;
  }
  return template;
};

const createRestaurantDetailTemplate = (restaurant) => `
    <div class="restaurant-detail-container">
        <div class="restaurant-detail-thumbnail">
            <h2 tabindex="0" class="restaurant-detail-name">${restaurant.name}</h2>
            <img data-src="${CONFIG.BASE_IMAGE_URL}${restaurant.pictureId}" width: 100% height: 265px src="./placeholders/placeholder.png" alt="${restaurant.name}" class="restaurant-detail-poster lazyload">
        </div>
        <div class="restaurant-detail-info">
            <h2 tabindex="0" class="information-title">Information</h2>
                <div class="info-flex">
                    <p class="restaurant-info">Alamat: ${restaurant.address}</p>
                    <p class="restaurant-info">Kategori: ${restaurant.categories.map((category) => category.name).join(' & ')}</p>
                    <p class="restaurant-info">Kota: ${restaurant.city}</p>
                    <p class="restaurant-info">Rating: ${restaurant.rating}</p>
                </div>
            <h2 tabindex="0" class="information-desc">Description</h2>
                <div class="info-desc">
                    <p class="restaurant-detail-desc">${restaurant.description}</p>
                </div>
        </div>

        <div class="restaurant-detail-menus">
            <h2 tabindex="0" class="information-detail-menus">Menu</h2>
            <div class="info-menu">
                <div class="info-menu-title">
                    <h4>Foods</h4>
                </div>
                <div class="restaurant-detail-menu"> 
                    <p>${restaurant.menus.foods.map((food) => food.name).join(' | ')}</p>
                </div>
                <div class="info-menu-title">
                    <h4>Drinks</h4>
                </div>
                <div class="restaurant-detail-menu"> 
                    <p>${restaurant.menus.drinks.map((drink) => drink.name).join(' | ')}</p>
                </div>
            </div>
        </div>

        <div class="restaurant-detail-reviews">
            <h2 tabindex="0" class="detail-review-title">Review</h2>
            <div class="restaurant-detail-review">
                ${restaurant.customerReviews.map((customer) => `
                    <div class="review-customer-wrap">
                        <p class="reviewer">${customer.name}</p>
                        <p class="reviewer">${customer.date}</p>
                        <p class="reviewer">${customer.review}</p>
                    </div>
                `).join('')}
                </div>
            </div>
        </div>
    </div>
`;

const createRestaurantItemTemplate = (restaurant) => `
    <article class="restaurant-item">
        <div class="thumbnail">
            <img class="item-thumbnail lazyload" width: 100% height: 265px src="./placeholders/placeholder.png" data-src="${CONFIG.BASE_IMAGE_URL}${restaurant.pictureId}" alt="${restaurant.name}">
            <p class="item-city">Kota ${restaurant.city}</p>
        </div>
        <div class="item-content">
            <p class="content-rating">Rating: ${restaurant.rating}</p>
            <h3 class="content-title"><a href="/#/detail/${restaurant.id}">${restaurant.name}</a></h3>
            <p class="content-description">${restaurant.description}</p>
        </div>
    </article>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this resto" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this resto" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
  createSkeletonMovieTemplate,
};
