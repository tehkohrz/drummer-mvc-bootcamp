class DrummerController {
  constructor(db) {
    this.db = db;
  }

  oneDrummer = async (req, res) => {
    try {
      const database = this.db;
      const d = await database.Drummer.findOne({
        where: {
          id: req.params.id,
        },
      });
      console.log('datad: ', d);

      const drummer = d.toJSON();
      console.log('drummer: ', drummer);

      res.render('drummers/oneDrummer', {
        drummer,
      });
    } catch (error) {
      console.log('error', error);
    }
  }

  allDrummers = async (req, res)=> {
    try {
      const allDrummers = await this.db.Drummer.findAll();
      const drummers = allDrummers;
      res.render('drummers/all-drummers', {
        drummers,
      });
    } catch (err) {
      console.log('error: ', err);
    }
  }
}

export default DrummerController;

// export default function initDrummersController(db) {
//   const oneDrummer = (req, res) => {
//     // getting the details of 1 drummer based on drummer's id
//     db.Drummer.findOne({
//       where: {
//         id: req.params.id,
//       },
//     })
//       .then((drummer) => {
//         // ejs page to be rendered is oneDrummer.ejs (in drummers folder), the response sent by
//         // the backend is made accessible to the ejs page
//         res.render('drummers/oneDrummer', {
//           drummer,
//         });
//       })
//       .catch((error) => console.log('error', error));
//   };

//   const allDrummers = (req, res) => {
//     // getting details of all drummers
//     db.Drummer.findAll()
//       .then((drummers) => {
//         // ejs page to be rendered is all-drummer.ejs (in drummers folder), the response sent by
//         // the backend is made accessible to the ejs page
//         res.render('drummers/all-drummers', {
//           drummers,
//         });
//       })
//       .catch((error) => console.log('error', error));
//   };

//   return {
//     oneDrummer,
//     allDrummers,
//   };
// }
