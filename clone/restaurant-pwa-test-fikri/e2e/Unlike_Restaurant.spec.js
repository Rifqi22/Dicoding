const assert = require('assert');

Feature('Reverse Liking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('unliking a restaurant', async ({ I }) => {
  I.amOnPage('/');
  I.waitForElement('.post .post-content a', 10);
  I.seeElement('.post .post-content a');

  const restaurant = locate('.post .post-content a').first();
  const restaurantTitle = await I.grabTextFrom(restaurant);
  I.click(restaurant);

  I.waitForElement('#likeButton', 20);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.waitForElement('.post', 20);
  I.seeElement('.post');
  const firstLikedRestoran = locate('.post .post-content a').first();
  const firstLikedRestoranTitle = await I.grabTextFrom(firstLikedRestoran);
  assert.strictEqual(restaurantTitle, firstLikedRestoranTitle);

  I.click(firstLikedRestoran);
  I.waitForElement('#likeButton', 20);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.dontSeeElement('.post');
});
