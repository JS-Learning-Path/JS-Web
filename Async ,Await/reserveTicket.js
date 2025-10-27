function reserveTicket(movie, age) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (movie === "Inception" && age >= 16) {
        resolve(`Ticket for ${movie} is booked.`);
      } else {
        reject(`Cannot book ticket for this ${movie}.`);
      }
    }, 2000);
  });
}

async function bookMovieTicket() {
  try {
    const ticketMessage = await reserveTicket("Inception", 18);
    console.log(ticketMessage);
  } catch (error) {
    console.log(error);
  }
}
bookMovieTicket();
