const router = require("express");
const freelancerRoutes = require("./freelancers")

//Freelancer routes
router.request("./freelancers", freelancerRoutes);

module.exports = router;