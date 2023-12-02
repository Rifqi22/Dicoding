/* eslint-disable no-undef */
Feature('Testing Menu and Review');

Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('Review is Display', async ({ I }) => {
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

  // masuk ke halaman Detail restoran pertama dan melihat komentar
  I.seeElement('.review');

  console.log('Review is display');
});

Scenario('Menu is Display', async ({ I }) => {
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

  // masuk ke halaman Detail restoran pertama dan melihat komentar
  I.seeElement('.menu');

  console.log('Menu is display');
});
