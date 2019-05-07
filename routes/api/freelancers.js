const router = require("express").Router();
const freelancersController = require("../../controllers/freelancersController")

router.route("/")

router.route("/home")

router.route("/404")

router.route("/confirm")

router.route("/form")

router
    .route("/search")
    .get(freelancersController.searchByPositionAndLocation)
    
router // This will be routed to when you click on a freelancer profile after the search
    .route("/:id")
    .get(freelancersController.getFreelancerByID)

router
    .route("/searchresults/:position")
    .get(freelancersController.searchFreelancerByPosition)

// router
//     .route("/searchresults/:location")
//     .get(freelancersController.searchFreelancerByLocation)
    // Doesn't work, commented out so it doesn't mess with route above

router
    .route("/searchresults/:position/:location")
    .get(freelancersController.searchByPositionAndLocation)

router
    .route("/register")
    .post(freelancersController.createUser)

module.exports = router;
    