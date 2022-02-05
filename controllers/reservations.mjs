export default function initReservationsController(db) {
  const reservationPost = (req, res) => {
    console.log(req.body);
    db.Reservation.create({

      booking_date: req.body.booking_date,
      drummer_id: req.body.drummer_id,

    })
      .then((reservation) => {
        console.log('reservation', reservation);
        res.send('booking successful');
      })
      .catch((error) => console.log('error', error));
  };

  const drummersReservations = (req, res) => {
    db.Reservation.findAll({
      where: {
        drummer_id: req.params.drummer_id,
      },
    })
      .then((reservations) => {
        res.render('reservations/drummer-reservations', { reservations });
      })
      .catch((error) => console.log('error', error));

    return drummersReservations;
  };

  return {
    reservationPost, drummersReservations,
  };
}
