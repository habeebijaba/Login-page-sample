var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  let user = req.session.user
  const products = [
    {
      name: "Harley-Davidson-SPORTSTER",
      price: "1653990",
      description: "1252 cc 6 Speed Manual engine, and weighs 228 kg",
      image: "https://www.firstpost.com/wp-content/uploads/2021/12/harley-davidson-sportster-s-launched-india-15-51-lakh-price-india-bike-week-2021-1.jpg"
    },
    {
      name: "Harley-Davidson-SPORTSTER",
      price: "1653990",
      description: "1252 cc 6 Speed Manual engine, and weighs 228 kg",
      image: "https://stat.overdrive.in/wp-content/uploads/2021/07/2021-Harley-Davidson-Sportster-S_5-900x506.jpg"
    },
    {
      name: "Harley-Davidson-SPORTSTER",
      price: "1653990",
      description: "1252 cc 6 Speed Manual engine, and weighs 228 kg",
      image: "https://financialexpresswpcontent.s3.amazonaws.com/uploads/2017/05/Iron-883-large.jpg"
    },
    {
      name: "Harley-Davidson-IRON883",
      price: "1653990",
      description: "1252 cc 6 Speed Manual engine, and weighs 228 kg",
      image: "https://gaadiwaadi.com/wp-content/uploads/2017/09/2018-Harley-Davidson-Sportster-And-Street-Range-Get-New-Paint-Schemes-4.jpg"
    },
    {
      name: "Harley-Davidson-IRON883",
      price: "1653990",
      description: "1252 cc 6 Speed Manual engine, and weighs 228 kg",
      image: "https://gaadiwaadi.com/wp-content/uploads/2017/09/2018-Harley-Davidson-Sportster-And-Street-Range-Get-New-Paint-Schemes-5-960x640.jpg"
    },
    {
      name: "Harley-Davidson-ROADKING",
      price: "1956325",
      description: "1252 cc 6 Speed Manual engine, and weighs 228 kg",
      image: "https://cdn.pixabay.com/photo/2018/10/26/23/11/harley-3775550__340.jpg"
    },
    {
      name: "Harley-Davidson-ROADKING",
      price: "1956325",
      description: "1252 cc 6 Speed Manual engine, and weighs 228 kg",
      image: "https://cdn.pixabay.com/photo/2017/07/22/18/44/motorcycle-2529593_960_720.jpg"
    },
    {
      name: "Harley-Davidson-IRON-750",
      price: "1956325",
      description: "1252 cc 6 Speed Manual engine, and weighs 228 kg",
      image: "https://motoringworld.in/wp-content/uploads/2022/04/Harley-Davidson-Nightster.jpg"
    }]

  if (user) {
    res.render('index', { products, user });
  } else {
    res.redirect('/login')
  }
});


module.exports = router;
