if (Meteor.users.find().count() === 0) {
	if (process.env.ADMIN_USERNAME && process.env.ADMIN_PASSWORD){
		Accounts.createUser({
			username: process.env.ADMIN_USERNAME,
			password : process.env.ADMIN_PASSWORD,
		});
	}
}
if (Coffeeshops.find().count() === 0) {
  Coffeeshops.insert({
	  name: 'Little Fish Coffee Co.',
	  placeid: 'ChIJfSJxVGUGB3wRU-rWruQw_do',
	  phone: '(808) 335-5000',
	  hours: {
		  mon: '6:30 AM - 5:00 PM',
		  tue: '6:30 AM - 5:00 PM',
		  wed: '6:30 AM - 5:00 PM',
		  thu: '6:30 AM - 5:00 PM',
		  fri: '6:30 AM - 5:00 PM',
		  sat: '6:30 AM - 5:00 PM',
		  sun: '8:00 AM - 3:00 PM'
	  },
	  streetAddress: '3900 Hanapepe Rd',
	  city: 'Hanapepe',
	  state: 'Hawaii',
	  zip: '96716',
	  description: 'Little Fish coffee offer great espresso and pastries. The atmosphere is airy and charming. Make sure you have time to sit down and sip up because there’s a gem of a garden, a cool oasis on a typical hot West Side day, hidden in the back of the store. Enjoy!<img src="/img/little-fish/1.jpg" > Little Fish coffee offer great espresso and pastries. The atmosphere is airy and charming. Make sure you have time to sit down and sip up because there’s a gem of a garden, a cool oasis on a typical hot West Side day, hidden in the back of the store. Enjoy!<img src="/img/little-fish/2.jpg" ><img src="/img/little-fish/3.jpg" ><img src="/img/little-fish/4.jpg" >',
	  csimage: '/img/little-fish/cover.jpg',
	  lat: '21.911201',
	  lng: '-159.586197'
  });
  Coffeeshops.insert({
	  name: 'Kalaheo Cafe & Coffee Company',
	  placeid: 'ChIJfzUUJfgEB3wR994OrXg7kEY',
	  phone: '(808) 332-5858',
	  hours: {
		  mon: '6:30 AM - 2:30 PM',
		  tue: '6:30 AM - 2:30 PM, 5:00 - 8:30 PM',
		  wed: '6:30 AM - 2:30 PM, 5:00 - 8:30 PM',
		  thu: '6:30 AM - 2:30 PM',
		  fri: '6:30 AM - 2:30 PM, 5:00 - 9:00 PM',
		  sat: '6:30 AM - 2:30 PM, 5:00 - 9:00 PM',
		  sun: '6:30 AM - 2:00 PM'
	  },
	  streetAddress: '2-2560 Kaumualii Hwy',
	  city: 'Kalaheo',
	  state: 'Hawaii',
	  zip: '96741',
	  description: 'Whenever we’re heading through Kalaheo, we try to make the time for a stop at Kalaheo Cafe.  The food is great and the atmosphere is relaxed. In our opinion, they have the best garlic fries on Kauai. We’ve love everything we’ve tried, but we recommend the fries and the mocha shake! Here’s a pic of one of their amazing sandwiches with the soup of the day and of course the fries.  We’ll post more photos next time we visit. <img src="/img/kalaheo-cafe/1.jpg">',
	  csimage: '/img/kalaheo-cafe/cover.jpg',
	  lat: '21.924843',
	  lng: '-159.523880'
  });
  Coffeeshops.insert({
	  name: 'Kauai Coffee Company',
	  placeid: 'ChIJURsfO8MFB3wReNXq-qP5yaU',
	  phone: '(808) 335-0813',
	  hours: {
		  mon: '9:00 AM - 5:00 PM',
		  tue: '9:00 AM - 5:00 PM',
		  wed: '9:00 AM - 5:00 PM',
		  thu: '9:00 AM - 5:00 PM',
		  fri: '9:00 AM - 5:00 PM',
		  sat: '9:00 AM - 5:00 PM',
		  sun: '9:00 AM - 5:00 PM'
	  },
	  streetAddress: '870 Halewili Rd',
	  city: 'Kalaheo',
	  state: 'Hawaii',
	  zip: '96741',
	  description: 'Kauai coffee is one of our favorite tourist day activities.  First of all – it’s FREE!  Second, there’s COFFEE!  Can you sense the caffeine buzz?  Located on the south side of Kauai in Kalaheo, Kauai Coffee is the perfect stop on the way to Kokee.  There must be at least fifteen coffee types to sample – and they are great! Did you know that Kauai Coffee is the largest coffee plantation in the United States? Take a cup or two and enjoy the peaceful porch or watch the video they have running about the coffee estate. <img src="/img/kauai-coffee/1.jpg"> Once you have your coffee, take the self guided tour!  It’s a nice little stroll with some great plants to take photos of.  There are also guided tours available – call Kauai Coffee or check their site to see the times. <img src="/img/kauai-coffee/2.jpg"> Say “hi” to the Scarecrows! <img src="/img/kauai-coffee/3.jpg"> If you’d like more than a tiny cup of coffee, Kauai Coffee has a small cafe and of course a gift shop so you can take some coffee home with you. <img src="/img/kauai-coffee/4.jpg"> Have fun! <img src="/img/kauai-coffee/5.jpg">' ,
	  csimage: '/img/kauai-coffee/cover.jpg',
	  lat: '21.899872',
	  lng: '-159.560938'
  });
  Coffeeshops.insert({
	  name: 'Small Town Coffee Co.',
	  placeid: 'ChIJNeHCRvLgBnwRrIKpQGUFsIg',
	  phone: '',
	  hours: {
		  mon: '6:00 AM - 4:00 PM',
		  tue: '6:00 AM - 4:00 PM',
		  wed: '6:00 AM - 4:00 PM',
		  thu: '6:00 AM - 4:00 PM',
		  fri: '6:00 AM - 4:00 PM',
		  sat: '6:00 AM - 4:00 PM',
		  sun: '6:00 AM - 4:00 PM'
	  },
	  streetAddress: '4-1543 Kuhio Hwy',
	  city: 'Kapaa',
	  state: 'Hawaii',
	  zip: '96746',
	  description: 'Small Town’s atmosphere begs you to slow down, kick back, and sip on a cup of joe. It’s a great little coffee shop hidden in the Kauai craft fair at the north end of Kapaa town. Small Town’s coffee is consistently the most caffeinated cup on Kauai. Beware (and enjoy!)\n*Update – the coffee shop has relocated to a small bus not far from its original location.  Still good coffee – not quite the same atmosphere.  We recommend getting the coffee and walking across the street and drinking it at the beach ',
	  csimage: '/img/small-town/cover.jpg',
	  lat: '22.079695',
	  lng: '-159.314549'
  });
  Coffeeshops.insert({
	  name: 'Art Cafe Hemingway',
	  placeid: 'ChIJabHFQ_LgBnwROHHyufv_3m4',
	  phone: '(808) 822-2250',
	  hours: {
		  mon: 'Closed',
		  tue: 'Closed',
		  wed: '8:00 AM - 2:00 PM, 6:00 - 9:00 PM',
		  thu: '8:00 AM - 2:00 PM, 6:00 - 9:00 PM',
		  fri: '8:00 AM - 2:00 PM, 6:00 - 9:00 PM',
		  sat: '8:00 AM - 2:00 PM, 6:00 - 9:00 PM',
		  sun: '8:00 AM - 2:00 PM, 6:00 - 9:00 PM'
	  },
	  streetAddress: '4-1495 Kuhio Hwy',
	  city: 'Kapaa',
	  state: 'Hawaii',
	  zip: '96746',
	  description: 'Cafe Hemingway is a savory piece of Europe, tucked on the north end of Kapaa town. I go there all time; so often that I don’t want to think about it too much because I don’t want to know how much I spend there every month! The atmosphere is classy and the service is relaxed, which is another way to say that you shouldn’t go there if you’re in a hurry. Grab a seat, relax, and enjoy the food prepared and drinks concocted by Markus and Jana, the culinary masterminds who own the place. <img src="/img/hemingway/1.jpg" > On the second floor, you’ll find an art exhibit and seats with great views of the ocean. <img src="/img/hemingway/2.jpg" > The breakfasts are light and exquisite. The lunch specials are always spectacular. And the yogurt! Oh, the yogurt is the best; make sure you try it. <img src="/img/hemingway/3.jpg" >',
	  csimage: '/img/hemingway/cover.jpg',
	  lat: '22.078464',
	  lng: '-159.315570'
  });
}

/*
if (Cafes.find().count() === 0) {
  Cafes.insert({
	  name: 'Little Fish Coffee Co.',
	  placeid: 'ChIJfSJxVGUGB3wRU-rWruQw_do',
	  phone: '(808) 335-5000',
	  hours: {
		  mon: '6:30 AM - 5:00 PM',
		  tue: '6:30 AM - 5:00 PM',
		  wed: '6:30 AM - 5:00 PM',
		  thu: '6:30 AM - 5:00 PM',
		  fri: '6:30 AM - 5:00 PM',
		  sat: '6:30 AM - 5:00 PM',
		  sun: '8:00 AM - 3:00 PM'
	  },
	  streetAddress: '3900 Hanapepe Rd',
	  city: 'Hanapepe',
	  state: 'Hawaii',
	  zip: '96716',
	  description: 'Little Fish coffee offer great espresso and pastries. The atmosphere is airy and charming. Make sure you have time to sit down and sip up because there’s a gem of a garden, a cool oasis on a typical hot West Side day, hidden in the back of the store. Enjoy!',
	  csimage: '/img/little-fish.jpg',
	  lat: '21.911201',
	  lng: '-159.586197'
  });
  Cafes.insert({
	  name: 'Kalaheo Cafe & Coffee Company',
	  placeid: 'ChIJfzUUJfgEB3wR994OrXg7kEY',
	  phone: '(808) 332-5858',
	  hours: {
		  mon: '6:30 AM - 2:30 PM',
		  tue: '6:30 AM - 2:30 PM, 5:00 - 8:30 PM',
		  wed: '6:30 AM - 2:30 PM, 5:00 - 8:30 PM',
		  thu: '6:30 AM - 2:30 PM',
		  fri: '6:30 AM - 2:30 PM, 5:00 - 9:00 PM',
		  sat: '6:30 AM - 2:30 PM, 5:00 - 9:00 PM',
		  sun: '6:30 AM - 2:00 PM'
	  },
	  streetAddress: '2-2560 Kaumualii Hwy',
	  city: 'Kalaheo',
	  state: 'Hawaii',
	  zip: '96741',
	  description: 'Whenever we’re heading through Kalaheo, we try to make the time for a stop at Kalaheo Cafe.  The food is great and the atmosphere is relaxed.',
	  csimage: '/img/kalaheo-cafe.jpg',
	  lat: '21.924843',
	  lng: '-159.523880'
  });
  Cafes.insert({
	  name: 'Kauai Coffee Company',
	  placeid: 'ChIJURsfO8MFB3wReNXq-qP5yaU',
	  phone: '(808) 335-0813',
	  hours: {
		  mon: '9:00 AM - 5:00 PM',
		  tue: '9:00 AM - 5:00 PM',
		  wed: '9:00 AM - 5:00 PM',
		  thu: '9:00 AM - 5:00 PM',
		  fri: '9:00 AM - 5:00 PM',
		  sat: '9:00 AM - 5:00 PM',
		  sun: '9:00 AM - 5:00 PM'
	  },
	  streetAddress: '870 Halewili Rd',
	  city: 'Kalaheo',
	  state: 'Hawaii',
	  zip: '96741',
	  description: 'Kauai coffee is one of our favorite tourist day activities.  First of all – it’s FREE!  Second, there’s COFFEE!  Can you sense the caffeine buzz?  Located on the south side of Kauai in Kalaheo, Kauai Coffee is the perfect stop on the way to Kokee.  There must be at least fifteen coffee types to sample – and they are great!',
	  csimage: '/img/coffee-fruit.jpg',
	  lat: '21.899872',
	  lng: '-159.560938'
  });
  Cafes.insert({
	  name: 'Small Town Coffee Co.',
	  placeid: 'ChIJNeHCRvLgBnwRrIKpQGUFsIg',
	  phone: '',
	  hours: {
		  mon: '6:00 AM - 4:00 PM',
		  tue: '6:00 AM - 4:00 PM',
		  wed: '6:00 AM - 4:00 PM',
		  thu: '6:00 AM - 4:00 PM',
		  fri: '6:00 AM - 4:00 PM',
		  sat: '6:00 AM - 4:00 PM',
		  sun: '6:00 AM - 4:00 PM'
	  },
	  streetAddress: '4-1543 Kuhio Hwy',
	  city: 'Kapaa',
	  state: 'Hawaii',
	  zip: '96746',
	  description: 'Small Town’s atmosphere begs you to slow down, kick back, and sip on a cup of joe. It’s a great little coffee shop hidden in the Kauai craft fair at the north end of Kapaa town. Small Town’s coffee is consistently the most caffeinated cup on Kauai. Beware (and enjoy!)\n*Update – the coffee shop has relocated to a small bus not far from its original location.  Still good coffee – not quite the same atmosphere.  We recommend getting the coffee and walking across the street and drinking it at the beach ',
	  csimage: '/img/small-town.jpg',
	  lat: '22.079695',
	  lng: '-159.314549'
  });
  Cafes.insert({
	  name: 'Art Cafe Hemingway',
	  placeid: 'ChIJabHFQ_LgBnwROHHyufv_3m4',
	  phone: '(808) 822-2250',
	  hours: {
		  mon: 'Closed',
		  tue: 'Closed',
		  wed: '8:00 AM - 2:00 PM, 6:00 - 9:00 PM',
		  thu: '8:00 AM - 2:00 PM, 6:00 - 9:00 PM',
		  fri: '8:00 AM - 2:00 PM, 6:00 - 9:00 PM',
		  sat: '8:00 AM - 2:00 PM, 6:00 - 9:00 PM',
		  sun: '8:00 AM - 2:00 PM, 6:00 - 9:00 PM'
	  },
	  streetAddress: '4-1495 Kuhio Hwy',
	  city: 'Kapaa',
	  state: 'Hawaii',
	  zip: '96746',
	  description: 'Cafe Hemingway is a savory piece of Europe, tucked on the north end of Kapaa town. I go there all time; so often that I don’t want to think about it too much because I don’t want to know how much I spend there every month! The atmosphere is classy and the service is relaxed, which is another way to say that you shouldn’t go there if you’re in a hurry. Grab a seat, relax, and enjoy the food prepared and drinks concocted by Markus and Jana, the culinary masterminds who own the place.',
	  csimage: '/img/espresso.jpg',
	  lat: '22.078464',
	  lng: '-159.315570'
  });
}
*/