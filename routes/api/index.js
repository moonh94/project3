const router = require("express").Router();
const freelancerRoutes = require("./freelancers")

//Freelancer routes
router.use("/freelancers", freelancerRoutes);

module.exports = router;