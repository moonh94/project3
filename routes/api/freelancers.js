const router = require("express").Router();
const booksController = require("../../controllers/freelancersController")

router.route("/")

router.route("/home")

router.route("/404")

router.route("/confirm")

router.route("/form")

router.route("/freelancerprofile/:id")

router
    .route("/searchresults/:position/:location")
    .get(freelancersController.searchByPositionAndLocation)

module.exports = router;
    