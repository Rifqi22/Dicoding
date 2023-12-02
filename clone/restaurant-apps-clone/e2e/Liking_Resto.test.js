/* eslint-disable no-undef */
Feature('Testing Like Feature');

Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('Liking and Unliking', async ({ I }) => {
  // dihalaman Home menemukan item dan menkliknya
  I.seeElement('#content');
  I.seeElement('.cards_item');
  I.seeElement('.card');
  I.seeElement('.card_title');
  I.seeElement('.card_title a');

  const firstCard = locate('.card_title a').first();
  const firstCardTitle = await I.grabTextFrom(firstCard);
  console.log('Detail Restaurant Page', firstCardTitle);

  I.click('.card_title a');

  // masuk ke halaman Detail restoran dan melihat tombol like
  I.seeElement('#likeButton');
  I.click('#likeButton');

  // beralih ke halaman Favorit dan melihat restoran yang disukai
  I.amOnPage('/#/like');
  I.seeElement('.card');
  I.seeElement('.card_title a');

  // klik lagi untuk batal menyukai
  I.click('.card_title a');
  I.seeElement('#likeButton');
  I.click('#likeButton');

  // beralih lagi ke halaman Favorit dan tidak melihat restoran yang disukai
  I.amOnPage('/#/like');
  I.dontSee('.card');

  console.log('Liking and Unliking Test Succes');
});
