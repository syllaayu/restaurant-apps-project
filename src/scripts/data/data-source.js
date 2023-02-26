import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantDataSource {
  static async restaurantList() {
    const response = await fetch(API_ENDPOINT.HOME);
    const responseJSON = await response.json();
    return responseJSON.restaurants;
  }

  static async restaurantDetail(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJSON = await response.json();
    return responseJSON.restaurant;
  }
}

export default RestaurantDataSource;
