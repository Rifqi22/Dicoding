/* eslint-disable new-cap */
/* eslint-disable require-jsdoc */
import API_ENDPOINT from '../globals/api-endpoint';

class RestoSource {
  static async topResto() {
    const response = await fetch(API_ENDPOINT.HOME);
    const data = await response.json();
    return data;
  }

  static async detailResto(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    return response.json();
  }
}

export default RestoSource;
