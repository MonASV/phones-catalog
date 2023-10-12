const router = require("express").Router();
const mongoose = require("mongoose");
const Phone = require("../models/User.model");

router.get("/phones", (req, res, next) => {
  Phone.find()
    .then((phones) => {
      res.json(phones)
    console.log(phones);})
    .catch((error) => {
      console.log("Error getting the list of phones", error);
      res.status(500).json({
        message: "we are sorry, we coudn't dislpay the phone catalog",
      });
    });
});

router.get("/phones/:phoneId", (req, res, next) => {
  const { phoneId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(phoneId)) {
    res.status(400).json({
      message: "Phone ID not valid",
    });
    return;
  }

  Phone.findById(phoneId)
    .then((phone) => res.status(200).json(phone))
    .catch((error) => {
      console.log("Error getting the desired phone", error);
      res.status(500).json({
        message: "we are sorry, we coudn't find your desired phone",
      });
    });
});

module.exports = router;
