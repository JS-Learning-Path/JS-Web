function makeReservation(people) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (people >= 1 && people <=6) {
        resolve(`Reservation for ${people} people is confirmed.`);
      } else {
        reject(`Reservation for ${people} people cannot be made.`);
      }
    }, 1000);
  });
}

async function bookTable() {
  try{
  const reservationMessage = await makeReservation(5);
  console.log(reservationMessage);
  }
  catch (error){
    console.log(error);
  }
}
bookTable();