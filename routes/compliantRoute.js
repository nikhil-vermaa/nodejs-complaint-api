//File imports
const express = require("express");
const router = express.Router();

const {
  createComplaint,
  getComplaint,
  updateComplaint,
  getComplaints,
  deleteComplaint,
} = require("../controllers/complaintController");

router.route("/").post(createComplaint).get(getComplaints);

router
  .route("/:id")
  .get(getComplaint)
  .put(updateComplaint)
  .delete(deleteComplaint);

//Exports
module.exports = router;
