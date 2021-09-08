var express = require("express");
const {
  queryDealsCollection,
} = require("../public/javascripts/DbAbstractionLayer");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  // let jsonResponse = {
  //   handsetCards: [
  //     {
  //       imageName: "offer1",
  //       title: "10% off on personal cares",
  //       cols: 2,
  //       rows: 1,
  //     },
  //     {
  //       imageName: "offer2",
  //       title: "Flash sales in Footwears",
  //       cols: 2,
  //       rows: 1,
  //     },
  //     {
  //       imageName: "offer3",
  //       title: "Extended warranty for Apple products",
  //       cols: 2,
  //       rows: 1,
  //     },
  //     {
  //       imageName: "offer4",
  //       title: "5% discount for grocery",
  //       cols: 2,
  //       rows: 1,
  //     },
  //   ],
  //   webCards: [
  //     {
  //       imageName: "offer1",
  //       title: "10% off on personal cares",
  //       cols: 2,
  //       rows: 1,
  //     },
  //     {
  //       imageName: "offer2",
  //       title: "Flash sales in Footwears",
  //       cols: 1,
  //       rows: 1,
  //     },
  //     {
  //       imageName: "offer3",
  //       title: "Extended warranty for Apple products",
  //       cols: 1,
  //       rows: 2,
  //     },
  //     {
  //       imageName: "offer4",
  //       title: "5% discount for grocery",
  //       cols: 1,
  //       rows: 1,
  //     },
  //   ],
  // };
  // res.json(jsonResponse);

  // Call QueryFunc here ...

  queryDealsCollection()
    .then((response) => {
      res.json(response);
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
});

module.exports = router;
