/**
 * CourseSearchController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
const requestPromise = require('request-promise');


module.exports = {
  Search:function(req, res) {
    const inputParametres = {
      startLatitude: req.body.startLatitude,
      startLongitude: req.body.startLongitude,
      endLatitude: req.body.endLatitude,
      endLongitude: req.body.endLongitude,
      startFullAddress: encodeURI(req.body.startFullAddress),
      startZipCode: req.body.startZipCode,
      endFullAddress: encodeURI(req.body.endFullAddress)
    };
    requestPromise({
      method: 'POST',
      uri: 'https://api.external.thegoodseat.fr/getalloffers',
      headers: {
        'x-api-key': 'WkaejKFztN6Tz1cIPi35M7UcvyYwPZcS6ixumJaP',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(inputParametres)
    })
    .then( (result) => {
      const obj = JSON.parse(result);
      const response = obj.body;
      const FinaleResponse = [];

      for (i in response) {
        var minutes = Math.floor(response[i].arrivalTime / 60);
        FinaleResponse.push({'Category': response[i].category, 'price': response[i].price, 'Waiting Time': minutes, 'rating': response[i].rating, 'Currency': response[i].currency});
      }
      res.send(FinaleResponse);
      res.end();
    })
     .catch(err => {
       res.status(400).json({error: 'bad request'});
       console.error(err);
       res.end();
     });
  },

  getPrice:function(req,res) {
    const inputParametres = {
      startLatitude: req.body.startLatitude,
      startLongitude: req.body.startLongitude,
      endLatitude: req.body.endLatitude,
      endLongitude: req.body.endLongitude,
      startFullAddress: encodeURI(req.body.startFullAddress),
      startZipCode: req.body.startZipCode,
      endFullAddress: encodeURI(req.body.endFullAddress)
    };
    requestPromise({
      method: 'POST',
      uri: 'https://api.external.thegoodseat.fr/getalloffers',
      headers: {
        'x-api-key': 'WkaejKFztN6Tz1cIPi35M7UcvyYwPZcS6ixumJaP',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(inputParametres)
    })
      .then( (result) => {
        const obj = JSON.parse(result);
        const getPriceOfCourse = obj.body;
        const FinaleResponse = [];

        for (i in getPriceOfCourse) {
          FinaleResponse.push({'Price': getPriceOfCourse[i].price });
        }
        res.send(FinaleResponse);
        res.end();
      })
       .catch(err => {
         res.status(400).json({error: 'bad request'});
         console.error(err);
         res.end();
       });
  },
  waitingTimes:function(req,res) {
    const inputParametres = {
      startLatitude: req.body.startLatitude,
      startLongitude: req.body.startLongitude,
      endLatitude: req.body.endLatitude,
      endLongitude: req.body.endLongitude,
      startFullAddress: encodeURI(req.body.startFullAddress),
      startZipCode: req.body.startZipCode,
      endFullAddress: encodeURI(req.body.endFullAddress)
    };
    requestPromise({
      method: 'POST',
      uri: 'https://api.external.thegoodseat.fr/getalloffers',
      headers: {
        'x-api-key': 'WkaejKFztN6Tz1cIPi35M7UcvyYwPZcS6ixumJaP',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(inputParametres)
    })
        .then( (result) => {
          const obj = JSON.parse(result);
          const getPriceOfCourse = obj.body;
          const FinaleResponse = [];

          for (i in getPriceOfCourse) {
            var minutes = Math.floor(getPriceOfCourse[i].arrivalTime / 60);
            FinaleResponse.push({'Waiting Times': minutes });
          }
          res.ok(FinaleResponse);
          res.end();
        })
         .catch(err => {
           res.status(400).json({error: 'bad request'});
           console.error(err);
           res.end();
         });
  },
};

