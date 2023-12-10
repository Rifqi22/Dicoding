import likeButtonInitiator from '../../src/scripts/utils/like-button-initiator';

const createLikeButtonPresenterRestaurant = async (data) => {
  await likeButtonInitiator.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    data,
  });
};

export { createLikeButtonPresenterRestaurant };
