import LikeButtonInitiator from '../../src/scripts/utils/like-button-initiator';

const createLikeButtonPresenterRestaurant = async (data) => {
  const likeButtonContainer = document.createElement('div');
  likeButtonContainer.id = 'likeButton';
  document.body.appendChild(likeButtonContainer);

  await LikeButtonInitiator.init({
    likeButtonContainer,
    data,
  });
};

// eslint-disable-next-line import/prefer-default-export
export { createLikeButtonPresenterRestaurant };
