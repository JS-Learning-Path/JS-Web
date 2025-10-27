const hotelNights = {
  "Grand Hotel": 7,
  "Budget Inn": 3,
  "Luxury Suites": 10,
};

function bookHotel(hotelName, nights) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!hotelName || nights <= 0) {
        reject("Invalid booking details");
      } else if (!(hotelName in hotelNights)) {
        reject(`Hotel ${hotelName} is not available`);
      } else if (nights > hotelNights[hotelName]) {
        reject(
          `Cannot book more than ${hotelNights[hotelName]} nights at ${hotelName}`
        );
      } else {
        resolve(`Booking confirmed at ${hotelName} for ${nights} nights`);
      }
    }, 2000);
  });
}

async function makeBook() {
  const book1 = ["Grand Hotel", 5];
  const book2 = ["Budget Inn", 4];
  const book3 = ["Luxury Suites", 8];
  try {
    const message1 = await bookHotel(...book1);
    console.log(message1);
  } catch (error) {
    console.log(error);
  }

  try {
    const message2 = await bookHotel(...book2);
    console.log(message2);
  } catch (error) {
    console.log(error);
  }

  try {
    const message3 = await bookHotel(...book3);
    console.log(message3);
  } catch (error) {
    console.log(error);
  }
}
makeBook();
