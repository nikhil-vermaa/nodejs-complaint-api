const Complaint = require("../models/complaintModel");

//Create
async function createComplaint(req, res, next) {
  try {
    const complaint = await Complaint.create(req.body);

    res.status(201).json({
      success: true,
      data: complaint,
    });
  } catch (error) {
    next(error);
  }
}

//Get one complaint
async function getComplaint(req, res, next) {
  try {
    const complaint = await Complaint.findById(req.params.id);

    if (!complaint) {
      res.status(404);
      throw new error("Complaints not found!");
    }

    res.status(201).json({
      success: true,
      data: complaint,
    });
  } catch (error) {
    next(error);
  }
}

//Get all complaints
async function getComplaints(req, res, next) {
  try {
    const complaint = await Complaint.find();

    res.status(200).json({
      success: true,
      data: complaint,
    });
  } catch (error) {
    next(error);
  }
}

//Update Complaint
async function updateComplaint(req, res, next) {
  try {
    const complaint = await Complaint.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!Complaint) {
      res.status(404);
      throw new error("Complaint not found!");
    }

    res.status(201).json({
      success: true,
      data: complaint,
    });
  } catch (error) {
    next(error);
  }
}

//Delete Complaints
function deleteComplaint(req, res, next) {
  try {
    const complaint = Complaint.findByIdAndDelete(req.params.id);

    if (!complaint) {
      res.status(404);
      throw new error("Complaint not found!!!");
    }

    res.status(201).json({
      success: true,
    });
  } catch (error) {
    next(error);
  }
}

//function exports
module.exports = {
  createComplaint,
  getComplaint,
  updateComplaint,
  getComplaints,
  deleteComplaint,
};
