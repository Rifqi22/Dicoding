const assert = require('assert');

Feature('Liking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('like a restaurant', async ({ I }) => {
  I.amOnPage('/');
  I.waitForElement('.post .post-content a', 10);
  I.seeElement('.post .post-content a');

  const restaurant = locate('.post .post-content a').first();
  const restaurantTitle = await I.grabTextFrom(restaurant);
  I.click(restaurant);

  I.waitForElement('#likeButton', 15);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.waitForElement('.post', 15);
  I.seeElement('.post');
  const likedRestoranTitle = await I.grabTextFrom('.post .post-content a');

  assert.strictEqual(restaurantTitle, likedRestoranTitle);
});
