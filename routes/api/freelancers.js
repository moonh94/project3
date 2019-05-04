const router = require("express").Router();
const freelancersController = require("../../controllers/freelancersController")

router.route("/")

router.route("/home")

router.route("/404")

router.route("/confirm")

router.route("/form")

router // This will be routed to when you click on a freelancer profile after the search
    .route("/:id")
    .get(freelancersController.getFreelancerByID)

router
    .route("/searchresults/:position/:location")
    .get(freelancersController.searchByPositionAndLocation)

module.exports = router;
    